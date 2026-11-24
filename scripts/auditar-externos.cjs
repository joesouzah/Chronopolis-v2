#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkNetwork = process.argv.includes('--check');
const concurrency = 4;
const timeoutMs = 10000;
const sourceDirs = ['acervo', '_artigos'];
const sourceFiles = ['index.html', 'assets/catalog.js'];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(?:md|html?|js)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(root, file).split(path.sep).join('/');
}

function extractImgbox(text) {
  return Array.from(
    text.matchAll(/https:\/\/thumbs2\.imgbox\.com\/[A-Za-z0-9_./%+\-]+?\.(?:png|jpe?g|gif|webp)/gi),
    m => m[0]
  );
}

const files = [
  ...sourceDirs.flatMap(dir => walk(path.join(root, dir))),
  ...sourceFiles.map(file => path.join(root, file)).filter(fs.existsSync)
];

const usages = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const url of extractImgbox(text)) usages.push({ source: rel(file), url });
}

const unique = [...new Set(usages.map(item => item.url))].sort();
const sources = new Map();
for (const item of usages) {
  if (!sources.has(item.url)) sources.set(item.url, new Set());
  sources.get(item.url).add(item.source);
}

console.log('Chronopolis — dependências externas do Imgbox');
console.log('Ocorrências encontradas:', usages.length);
console.log('URLs distintas:', unique.length);
console.log('Arquivos-fonte com referência:', new Set(usages.map(x => x.source)).size);

for (const url of unique) {
  console.log('-', url, '<-', [...sources.get(url)].join(', '));
}

if (!checkNetwork) {
  console.log('\nModo offline concluído.');
  console.log('Use --check para tentar uma verificação HTTP sem alterar arquivos.');
  process.exit(0);
}

async function request(url, method, headers = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'Chronopolis-Link-Audit/0.44',
        ...headers
      }
    });
    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      type: response.headers.get('content-type') || ''
    };
  } finally {
    clearTimeout(timer);
  }
}

async function inspect(url) {
  try {
    let result = await request(url, 'HEAD');
    if ([403, 405, 429].includes(result.status) || result.status >= 500) {
      result = await request(url, 'GET', { range: 'bytes=0-0' });
    }
    let state = 'indeterminado';
    if (result.status >= 200 && result.status < 300) state = 'ativo';
    else if ([401, 403, 429].includes(result.status)) state = 'restrito';
    else if ([404, 410].includes(result.status)) state = 'ausente';
    else if (result.status >= 300 && result.status < 400) state = 'redirecionado';
    else if (result.status >= 500) state = 'erro-servidor';

    return {
      url,
      state,
      status: result.status,
      finalUrl: result.finalUrl,
      type: result.type
    };
  } catch (error) {
    return {
      url,
      state: error && error.name === 'AbortError' ? 'timeout' : 'erro-rede',
      status: null,
      finalUrl: null,
      type: ''
    };
  }
}

async function run() {
  const queue = [...unique];
  const results = [];
  const workers = Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length) {
      const url = queue.shift();
      results.push(await inspect(url));
    }
  });
  await Promise.all(workers);
  results.sort((a, b) => a.url.localeCompare(b.url));

  const counts = {};
  for (const item of results) counts[item.state] = (counts[item.state] || 0) + 1;

  console.log('\nResultado HTTP:');
  for (const [state, count] of Object.entries(counts).sort()) console.log(state + ':', count);
  for (const item of results) {
    console.log(
      '[' + item.state + ']',
      item.status ?? '-',
      item.url,
      item.finalUrl && item.finalUrl !== item.url ? '=> ' + item.finalUrl : '',
      item.type ? '(' + item.type + ')' : ''
    );
  }

  if (results.some(item => item.state === 'ausente')) process.exitCode = 2;
}

run();

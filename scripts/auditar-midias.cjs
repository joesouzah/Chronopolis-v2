#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const mediaExt = /\.(?:svg|png|jpe?g|gif|webp|avif)$/i;
const textExt = /\.(?:md|html?|js|css|xml)$/i;
const ignoredDirs = new Set(['.git', '_site', 'node_modules', 'vendor']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(root, file).split(path.sep).join('/');
}

function isPublishedSource(p) {
  return (
    /^_artigos\/.*\.md$/i.test(p) ||
    /^acervo\/.*\.md$/i.test(p) ||
    /^_layouts\/.*\.html?$/i.test(p) ||
    /^assets\/.*\.(?:js|css)$/i.test(p) ||
    ['index.html', '404.html', 'estado-do-acervo.md', 'fontes-historicas.md', 'sitemap.xml'].includes(p)
  );
}

function localMediaRefs(text) {
  const refs = new Set();
  const pattern = /(\/?assets\/[A-Za-z0-9_./%+\-]+?\.(?:svg|png|jpe?g|gif|webp|avif))(?:[?#][^"' )}\]]*)?/gi;
  for (const match of text.matchAll(pattern)) {
    let target = match[1].replace(/^\//, '');
    try { target = decodeURIComponent(target); } catch {}
    refs.add(target);
  }
  return refs;
}

const all = walk(root);
const blobs = new Set(all.map(rel));
const media = [...blobs].filter(p => p.startsWith('assets/') && mediaExt.test(p)).sort();
const sources = [...blobs].filter(p => isPublishedSource(p) && textExt.test(p)).sort();

const references = new Map();
for (const source of sources) {
  const text = fs.readFileSync(path.join(root, source), 'utf8');
  for (const target of localMediaRefs(text)) {
    if (!references.has(target)) references.set(target, new Set());
    references.get(target).add(source);
  }
}

const referenced = [...references.keys()].sort();
const missing = referenced.filter(target => !blobs.has(target));
const unreferenced = media.filter(target => !references.has(target));

console.log('Chronopolis — auditoria de mídias locais');
console.log('Fontes publicadas examinadas:', sources.length);
console.log('Arquivos de mídia em assets/:', media.length);
console.log('Mídias locais referenciadas:', referenced.length);
console.log('Referências para arquivos ausentes:', missing.length);
console.log('Mídias sem referência nas fontes publicadas:', unreferenced.length);

if (missing.length) {
  console.log('\nReferências ausentes:');
  for (const target of missing) {
    console.log('-', target, '<-', [...references.get(target)].join(', '));
  }
}

if (unreferenced.length) {
  console.log('\nMídias preservadas sem referência publicada:');
  for (const target of unreferenced) console.log('-', target);
}

if (missing.length) process.exitCode = 1;

(()=>{
'use strict';
const items=window.CHRONO_LEGACY||[];
const historicalText=window.CHRONO_SEARCH||{};
let modern=Array.isArray(window.CHRONO_ARTIGOS)?window.CHRONO_ARTIGOS:[];
const activeItems=items.filter(e=>e.kind!=='index');
let all=[...modern.map((p,i)=>({...p,id:'novo-'+i,kind:'modern'})),...activeItems];
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const categorySet=['Todos','História','Personagens','Galeria','Arquivo','Curiosidades','Sobre'];
let category='Todos',query='';
const home=document.getElementById('home-view'),reader=document.getElementById('reader-view');
const cards=document.getElementById('all-cards');
const search=document.getElementById('site-search');
const menu=document.getElementById('menu');
let requestId=0;
function routeFor(item){return item.kind==='modern'?item.url:'./acervo/'+encodeURIComponent(item.id)+'/'}
function cover(item){const img=item.image?`<img loading="lazy" src="${escapeHTML(item.image)}" alt="" onerror="this.remove()">`:'';return `<div class="cover"><span class="cover-icon" aria-hidden="true">⌛</span>${img}<span class="cover-label">${escapeHTML(item.reference_sheet ? "Ficha técnica" : item.category)}</span></div>`}
function searchableText(item){return String(item.kind==='modern'?(item.search||''):(historicalText[item.id]||''))}
function searchTerms(){return [...new Set(norm(query).trim().split(/\s+/).filter(Boolean))].slice(0,8)}
function searchable(item){return norm(item.title+' '+item.summary+' '+item.category+' '+searchableText(item))}
function matches(item){return (category==='Todos'||item.category===category)&&searchTerms().every(term=>searchable(item).includes(term))}
function relevance(item,terms){
 const title=norm(item.title),summary=norm(item.summary),cat=norm(item.category),body=norm(searchableText(item));
 return terms.reduce((points,term)=>points+(title===term?80:title.startsWith(term)?48:title.includes(term)?32:0)+(summary.includes(term)?12:0)+(cat.includes(term)?5:0)+(body.includes(term)?1:0),0);
}
function highlightText(value){
 const src=String(value??''),terms=searchTerms();
 if(!terms.length)return escapeHTML(src);
 let folded='',positions=[],offset=0;
 for(const char of src){
   const part=norm(char);
   for(let n=0;n<part.length;n++)positions.push([offset,offset+char.length]);
   folded+=part;offset+=char.length;
 }
 const spans=[];
 for(const term of terms){
   let start=0,pos;
   while((pos=folded.indexOf(term,start))!==-1){
     spans.push([positions[pos][0],positions[pos+term.length-1][1]]);
     start=pos+Math.max(1,term.length);
   }
 }
 spans.sort((a,b)=>a[0]-b[0]||b[1]-a[1]);
 let result='',cursor=0;
 for(const [start,end] of spans){
   if(start<cursor)continue;
   result+=escapeHTML(src.slice(cursor,start))+'<mark class="search-hit">'+escapeHTML(src.slice(start,end))+'</mark>';
   cursor=end;
 }
 return result+escapeHTML(src.slice(cursor));
}
function excerpt(item){
 const summary=item.summary||'',terms=searchTerms();
 if(!terms.length||terms.every(t=>norm(item.title+' '+summary).includes(t)))return summary;
 const body=searchableText(item);
 const target=terms.find(t=>!norm(item.title+' '+summary).includes(t))||terms[0];
 const pos=norm(body).indexOf(target);
 if(pos<0)return summary;
 const start=Math.max(0,pos-65),end=Math.min(body.length,pos+Math.max(target.length,4)+110);
 return (start?'…':'')+body.slice(start,end).trim()+(end<body.length?'…':'');
}
function card(item){return `<a class="card" href="${escapeHTML(routeFor(item))}">${cover(item)}<div class="card-content"><h3>${highlightText(item.title)}</h3><p>${highlightText(excerpt(item))}</p><span class="card-link">Explorar arquivo <span aria-hidden="true">→</span></span></div></a>`}
function renderCatalog(){
 const terms=searchTerms(),filtered=all.filter(matches);
 if(terms.length)filtered.sort((a,b)=>relevance(b,terms)-relevance(a,terms));
 document.getElementById('found-count').textContent=filtered.length+' registro'+(filtered.length===1?'':'s');
 cards.innerHTML=filtered.length?filtered.map(card).join(''):'<div class="empty" role="status">Nenhum registro encontrado para esta busca ou categoria. <button class="empty-reset" type="button" id="reset-catalog-search">Limpar pesquisa</button></div>';
 document.getElementById('clear-site-search').hidden=!query;
 document.querySelectorAll('.chip').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.cat===category)));
}
function setCategory(cat,scroll=true){category=categorySet.includes(cat)?cat:'Todos';renderCatalog();if(scroll)document.getElementById('catalogo').scrollIntoView({behavior:'smooth',block:'start'})}
function markCurrentNavigation(){
 const current=(location.hash||'#inicio').toLowerCase();
 document.querySelectorAll('.nav a').forEach(a=>{
  const active=a.getAttribute('href').toLowerCase()===current;
  a.classList.toggle('active',active);
  if(active)a.setAttribute('aria-current','location');
  else a.removeAttribute('aria-current');
 });
}
function setHome(cat='Todos',scroll=false){++requestId;reader.hidden=true;home.hidden=false;document.title='Chronopolis — Arquivo de Chrono Trigger';setCategory(cat,scroll);markCurrentNavigation();if(!scroll)window.scrollTo({top:0,behavior:'instant'})}
function categoryFromHash(h){return ({'#catalogo':'Todos','#pesquisa':'Todos','#inicio':'Todos','#historia':'História','#personagens':'Personagens','#galeria':'Galeria','#arquivos':'Arquivo','#curiosidades':'Curiosidades','#sobre':'Sobre'})[h.toLowerCase()]}
function secureURL(input,type){try{const u=new URL(input,location.href);if(u.protocol!=='https:'&&u.protocol!=='http:')return null;if(type==='image'&&!/^https?:/.test(u.protocol))return null;return u.href}catch{return null}}
function sanitizeFragment(markup){const source=new DOMParser().parseFromString('<main id="legacy-root">'+markup+'</main>','text/html');const root=source.getElementById('legacy-root')||source.body;const blocked=new Set(['SCRIPT','STYLE','LINK','META','NAV','OBJECT','EMBED','FORM','INPUT','BUTTON','SVG','CANVAS']);const blockTags=new Set(['DIV','CENTER','SECTION','ARTICLE','MAIN','FIGURE','FIELDSET','HEADER','BLOCKQUOTE','UL','OL','LI','TABLE','TR','TD','TH','FIGCAPTION']);const allowedInline=new Set(['STRONG','B','EM','I','SMALL','CODE','SUP','SUB']);function clean(n){if(n.nodeType===Node.TEXT_NODE)return document.createTextNode(n.textContent.replace(/[\t\r\n]+/g,' '));if(n.nodeType!==Node.ELEMENT_NODE||blocked.has(n.tagName))return null;const tag=n.tagName;if(tag==='IFRAME'){const url=secureURL(n.getAttribute('src')||'','media');if(!url)return null;const u=new URL(url);const match=u.pathname.match(/^\/embed\/([\w-]{6,})/);if(!['www.youtube.com','youtube.com','www.youtube-nocookie.com'].includes(u.hostname)||!match)return null;const a=document.createElement('a');a.href='https://www.youtube.com/watch?v='+encodeURIComponent(match[1]);a.target='_blank';a.rel='noopener noreferrer';a.className='archived-video-link';a.textContent='▶ '+(n.getAttribute('title')||'Vídeo do acervo')+' — abrir no YouTube';return a}if(tag==='IMG'){const src=secureURL(n.getAttribute('src'),'image');if(!src)return null;const img=document.createElement('img');img.src=src;img.alt=(!n.alt||n.alt==='image host')?'Imagem do acervo original de Chronopolis':n.alt;img.loading='lazy';return img}if(tag==='BR')return document.createTextNode(' ');if(tag==='HR')return document.createElement('hr');if(tag==='A'){const a=document.createElement('a');const href=n.getAttribute('href')||'';if(/^https?:\/\//i.test(href)){a.href=href;a.target='_blank';a.rel='noopener noreferrer'}else if(/^[\w-]+\.html\s*$/i.test(href)){a.href=href.trim().toLowerCase()==='index.html'?'#inicio':'#ler/'+href.trim().replace(/\.html$/i,'')}else{a.href='#inicio'}n.childNodes.forEach(ch=>{const c=clean(ch);if(c)a.appendChild(c)});return a}let output;if(/^H[1-6]$/.test(tag))output=document.createElement(tag==='H1'?'h2':tag.toLowerCase());else if(tag==='P')output=document.createElement('p');else if(allowedInline.has(tag))output=document.createElement(tag.toLowerCase());else if(blockTags.has(tag))output=document.createElement(tag==='CENTER'||tag==='HEADER'?'div':tag.toLowerCase());else output=document.createElement('span');n.childNodes.forEach(ch=>{const c=clean(ch);if(c)output.appendChild(c)});return output}const frag=document.createDocumentFragment();root.childNodes.forEach(n=>{const c=clean(n);if(c)frag.appendChild(c)});return frag}
async function showReader(slug){const current=++requestId;const item=items.find(x=>x.id.toLowerCase()===slug.toLowerCase());if(!item){reader.innerHTML='<div class="not-found">Página não encontrada. <a href="#inicio">Voltar ao início</a></div>';home.hidden=true;reader.hidden=false;return}home.hidden=true;reader.hidden=false;window.scrollTo({top:0,behavior:'instant'});document.title=item.title+' — Chronopolis';reader.innerHTML=`<div class="read-shell"><a class="back-link" href="#${({'História':'historia','Personagens':'personagens','Galeria':'galeria','Arquivo':'arquivos','Curiosidades':'curiosidades','Sobre':'sobre'})[item.category]||'inicio'}">← Voltar ao acervo</a><header class="read-head"><div class="eyebrow">${escapeHTML(item.category)} · Acervo histórico</div><h1>${escapeHTML(item.title)}</h1><p class="read-lead">${escapeHTML(item.summary)}</p><div class="read-meta"><span>Acervo original: 2022–2023</span><span>Transcrição histórica</span></div></header><div class="article-panel"><div class="prose" id="legacy-article"><p>Carregando o documento histórico…</p></div></div><p class="archive-hint">Esta versão reproduz o conteúdo do repositório original. Imagens e downloads externos ainda precisam de verificação e preservação local.</p><a class="back-link" href="https://github.com/joesouzah/Chronopolis/blob/main/${encodeURIComponent(item.id)}.html" target="_blank" rel="noopener noreferrer">Consultar HTML original no GitHub ↗</a></div>`;
 const file=item.id+'.html';const relative='./legado/'+file;const remote='https://raw.githubusercontent.com/joesouzah/Chronopolis/main/'+file;
 const target=document.getElementById('legacy-article');let raw=null;
 for(const url of [relative,remote]){try{const ctrl=new AbortController();const t=setTimeout(()=>ctrl.abort(),9000);const response=await fetch(url,{signal:ctrl.signal});clearTimeout(t);if(response.ok){raw=await response.text();if(raw.includes('<body')||raw.includes('<BODY'))break}}catch{}}
 if(current!==requestId)return;
 target.replaceChildren();if(!raw){const p=document.createElement('p');p.textContent=item.summary;target.appendChild(p);const msg=document.createElement('p');msg.textContent='Não foi possível carregar o HTML histórico nesta prévia. O arquivo permanece preservado no GitHub, acessível pelo link abaixo.';target.appendChild(msg);return}
 const at=raw.search(/<\/nav\s*>/i),body=raw.search(/<body[^>]*>/i);let content=at>=0?raw.slice(at+raw.slice(at).match(/<\/nav\s*>/i)[0].length):raw.slice(body>=0?body:0);content=content.replace(/<\/body\s*>[\s\S]*$/i,'').replace(/<font[^>]*class=["']?rodape[\s\S]*$/i,'');target.appendChild(sanitizeFragment(content));const text=target.textContent.trim();if(!text)target.innerHTML='<p>O documento original não contém texto legível nesta versão.</p>';
}
const menuButton=document.getElementById('menu-button');
function closeMenu(returnFocus=false){
 if(!menu.classList.contains('open'))return;
 menu.classList.remove('open');
 menuButton.setAttribute('aria-expanded','false');
 menuButton.setAttribute('aria-label','Abrir menu');
 if(returnFocus)menuButton.focus();
}
function handleHash(){
 closeMenu();
 let h;
 try{h=decodeURIComponent(location.hash||'#inicio')}catch{h='#inicio'}
 if(h.toLowerCase().startsWith('#ler/')){markCurrentNavigation();showReader(h.slice(5));return}
 // Navegar pelas seções do menu inicia uma consulta limpa;
 // os filtros por chip continuam disponíveis dentro do catálogo.
 if(query && h.toLowerCase()!=='#pesquisa'){
  query='';
  search.value='';
 }
 const cat=categoryFromHash(h);
 setHome(cat||'Todos',Boolean(h==='#pesquisa'||h==='#catalogo'||(cat&&cat!=='Todos')));
}
function clearQuery(){query='';search.value='';history.replaceState(null,'','#catalogo');markCurrentNavigation();renderCatalog();search.focus()}
search.addEventListener('input',e=>{query=e.target.value;category='Todos';home.hidden=false;reader.hidden=true;history.replaceState(null,'',query?'#pesquisa':'#inicio');markCurrentNavigation();renderCatalog();if(query.length===1)document.getElementById('catalogo').scrollIntoView({behavior:'smooth'})});
document.getElementById('clear-site-search').addEventListener('click',clearQuery);
cards.addEventListener('click',e=>{if(e.target.closest('#reset-catalog-search'))clearQuery()});
document.addEventListener('keydown',e=>{
 if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.repeat&&!e.target.closest('input,textarea,select,[contenteditable="true"]')){e.preventDefault();search.focus()}
 else if(e.key==='Escape'&&menu.classList.contains('open')){e.preventDefault();closeMenu(true)}
 else if(e.key==='Escape'&&document.activeElement===search&&search.value){e.preventDefault();clearQuery()}
});
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
document.addEventListener('click',e=>{if(menu.classList.contains('open')&&!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});
document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{setCategory(b.dataset.cat);document.querySelectorAll('.nav a').forEach(a=>{a.classList.remove('active');a.removeAttribute('aria-current')})}));
document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('hashchange',handleHash);renderCatalog();handleHash();
if(window.chronoArticlesReady){window.chronoArticlesReady.then(posts=>{modern=posts;all=[...modern.map((p,i)=>({...p,id:'novo-'+i,kind:'modern'})),...activeItems];renderCatalog()})}
})();

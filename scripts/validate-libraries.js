const fs=require('fs');
const path=require('path');
const vm=require('vm');

const root=path.resolve(__dirname,'..');
const libraries=['Economics-Library','Geography-Library','History-Library','PSIR-Library'];
const expectedBooks={'Economics-Library':12,'Geography-Library':12,'History-Library':13,'PSIR-Library':19};
let failures=[];
let grand={books:0,sections:0,words:0,questions:0,mains:0,models:0};

const notesPath=path.join(root,'shared','sentence-notes.js');
if(!fs.existsSync(notesPath))failures.push('Shared hidden sentence-explanation layer is missing');
else{
  try{
    const notesContext={console,document:{addEventListener(){}}};notesContext.window=notesContext;vm.createContext(notesContext);
    vm.runInContext(fs.readFileSync(notesPath,'utf8'),notesContext,{filename:notesPath});
    const notesSource=fs.readFileSync(notesPath,'utf8');
    if(['Analytical role','Answer move','Recall check','Meaning in context'].some(label=>notesSource.includes(label)))failures.push('Sentence explanations include material beyond word definitions');
    const acceptance=[
      ['Need, desert, equality and entitlement are rival distributive criteria rather than interchangeable slogans.','psir',['Need','Desert','Equality','Entitlement']],
      ['Inflation redistributes purchasing power and affects poorer households disproportionately.','economics',['Inflation']],
      ['The monsoon is a seasonally reversing wind and rainfall system.','geography',['Monsoon']],
      ['Colonialism reorganised economy, knowledge and institutions for metropolitan power.','history',['Colonialism']],
      ['Equilibrium is where intended demand equals intended supply.','economics',['Demand','Supply','Market equilibrium']]
    ];
    for(const [sentence,subject,required] of acceptance){
      const sample=notesContext.SentenceNotes?.inspect(sentence,subject);
      if(required.some(term=>!sample?.concepts.includes(term)))failures.push(`Sentence explanation does not unpack its acceptance test: ${required.join(', ')}`);
    }
    const equilibriumExplanation=notesContext.SentenceNotes?.inspect('Equilibrium is where intended demand equals intended supply.','economics').explanation||'';
    if(!/market-clearing point/i.test(equilibriumExplanation))failures.push('Economics equilibrium explanation is not a contextual explanation');
    const taxExplanation=notesContext.SentenceNotes?.inspect('Tax incidence falls more heavily on the less elastic side of a market.','economics').explanation||'';
    if(!/legal payer|statutory remittance/i.test(taxExplanation))failures.push('Economics tax-incidence explanation is not a contextual explanation');
    if(notesContext.SentenceNotes?.inspect('A binding price ceiling below equilibrium causes shortage; a binding floor above it causes surplus, unless the state purchases the excess.','economics').concepts.includes('State'))failures.push('Economics explanation incorrectly presents the PSIR meaning of state');
  }catch(error){failures.push(`Shared sentence-explanation layer failed to load — ${error.message}`);}
}

function count(haystack,needle){return haystack.split(needle).length-1;}
function textWords(html){return html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z0-9#]+;/gi,' ').trim().split(/\s+/).filter(Boolean).length;}

for(const library of libraries){
  const booksDir=path.join(root,library,'books');
  const readerPath=path.join(booksDir,'reader.js');
  if(!fs.readFileSync(readerPath,'utf8').includes('../../shared/sentence-notes.js'))failures.push(`${library}: reader is not connected to the shared sentence-explanation layer`);
  const pages=fs.readdirSync(booksDir).filter(f=>/^\d\d-.*\.html$/.test(f));
  const seen=new Set();
  const subtotal={books:0,sections:0,words:0,questions:0,mains:0,models:0};
  for(const page of pages){
    const pagePath=path.join(booksDir,page);
    const html=fs.readFileSync(pagePath,'utf8');
    const id=html.match(/data-book="(\d+)"/)?.[1];
    if(!id)continue; // redirect aliases
    if(seen.has(id)){failures.push(`${library}: duplicate rendered book ${id}`);continue;}
    seen.add(id);
    const scripts=[...html.matchAll(/<script src="([^"]+)"/g)]
      .map(m=>m[1].split(/[?#]/)[0])
      .filter(s=>s!=='reader.js');
    const context={console};context.window=context;vm.createContext(context);
    try{
      for(const script of scripts){
        const scriptPath=path.resolve(booksDir,script);
        if(!fs.existsSync(scriptPath))throw new Error(`missing script ${script}`);
        vm.runInContext(fs.readFileSync(scriptPath,'utf8'),context,{filename:scriptPath});
      }
      if(library==='PSIR-Library'&&id!=='01'){
        const depthScript=id<='06'?'psir-paper1a-depth.js':id<='09'?'psir-paper1b-depth.js':id<='13'?'psir-paper2a-depth.js':id<='17'?'psir-paper2b-depth.js':'psir-exam-depth.js';
        const depthPath=path.join(booksDir,depthScript);
        if(!fs.existsSync(depthPath))throw new Error(`missing depth script ${depthScript}`);
        vm.runInContext(fs.readFileSync(depthPath,'utf8'),context,{filename:depthPath});
      }
    }catch(error){failures.push(`${library}/${page}: ${error.message}`);continue;}
    const book=context.BOOKS?.[id];
    if(!book){failures.push(`${library}/${page}: no data for book ${id}`);continue;}
    for(const [direction,target] of [['previous',book.prev],['next',book.next]]){
      if(target&&!fs.existsSync(path.resolve(booksDir,target)))failures.push(`${library}/${page}: broken ${direction} book target ${target}`);
    }
    if(!Array.isArray(book.sections)||book.sections.length<5)failures.push(`${library}/${page}: too few sections`);
    const sectionIds=(book.sections||[]).map(section=>section.id);
    if(library==='PSIR-Library'&&new Set(sectionIds).size!==sectionIds.length)failures.push(`${library}/${page}: duplicate section id`);
    if(!Array.isArray(book.recall)||book.recall.length<4)failures.push(`${library}/${page}: recall checkpoint missing`);
    const content=book.sections.map(s=>s.html||'').join(' ');
    const fullStudy=[book.title,book.dek,...book.sections.flatMap(s=>[s.title,s.html||'']),...(book.recall||[])].join(' ');
    const words=textWords(fullStudy);
    const questions=count(content,'practice-q');
    const mains=count(content,'class="answer-blueprint"')+count(content,'class="mains-blueprint"')+count(content,'class="blueprint"');
    const models=count(content,'class="model-answer"');
    const minimumWords=library==='PSIR-Library'?(id==='01'?1300:2200):1000;
    if(words<minimumWords)failures.push(`${library}/${page}: only ${words} study words`);
    if(library!=='Geography-Library'&&library!=='PSIR-Library'&&questions<5)failures.push(`${library}/${page}: only ${questions} explained practice items`);
    if(library==='PSIR-Library'&&mains<4)failures.push(`${library}/${page}: only ${mains} Optional answer blueprints`);
    if(library!=='Geography-Library'&&mains<1)failures.push(`${library}/${page}: no Mains blueprint`);
    subtotal.books++;subtotal.sections+=book.sections.length;subtotal.words+=words;subtotal.questions+=questions;subtotal.mains+=mains;subtotal.models+=models;
  }
  if(library==='PSIR-Library'){
    const appSource=fs.readFileSync(path.join(root,library,'app.js'),'utf8');
    const appBooks=[...appSource.matchAll(/\['(\d\d)','([^']+)'/g)].map(match=>({id:match[1],title:match[2]}));
    if(appBooks.length!==expectedBooks[library])failures.push(`${library}: app lists ${appBooks.length} books`);
    for(const appBook of appBooks){
      const slug=appBook.title.toLowerCase().replaceAll('&','and').replaceAll(/[^a-z0-9]+/g,'-').replace(/-$/,'');
      const target=`${appBook.id}-${slug}.html`;
      if(!fs.existsSync(path.join(booksDir,target)))failures.push(`${library}: app route missing ${target}`);
    }
  }
  if(subtotal.books!==expectedBooks[library])failures.push(`${library}: rendered ${subtotal.books} books`);
  if(library==='Geography-Library'&&subtotal.questions<250)failures.push(`${library}: subject practice bank is incomplete`);
  if(library==='Geography-Library'&&subtotal.mains<60)failures.push(`${library}: Mains blueprint programme is incomplete`);
  if(library==='PSIR-Library'&&subtotal.mains<100)failures.push(`${library}: Optional answer-blueprint programme is incomplete`);
  if(library==='PSIR-Library'&&subtotal.models<50)failures.push(`${library}: complete model-answer programme is incomplete`);
  Object.keys(grand).forEach(k=>grand[k]+=subtotal[k]);
  console.log(`${library}: ${subtotal.books} books · ${subtotal.sections} sections · ${subtotal.words.toLocaleString()} words · ${subtotal.questions} questions · ${subtotal.mains} Mains blueprints${subtotal.models?` · ${subtotal.models} complete models`:''}`);
}

for(const library of ['.',...libraries]){
  const start=path.join(root,library);
  const stack=[start];
  while(stack.length){
    const current=stack.pop();
    for(const entry of fs.readdirSync(current,{withFileTypes:true})){
      if(entry.name==='.git')continue;
      const target=path.join(current,entry.name);
      if(entry.isDirectory())stack.push(target);
      else if(entry.name.endsWith('.html')){
        const html=fs.readFileSync(target,'utf8');
        for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
          const ref=match[1];
          if(/^(?:https?:|mailto:|data:|javascript:|#)/.test(ref))continue;
          const clean=decodeURIComponent(ref.split('#')[0].split('?')[0]);
          if(!clean)continue;
          let resolved=path.resolve(path.dirname(target),clean);
          if(fs.existsSync(resolved)&&fs.statSync(resolved).isDirectory())resolved=path.join(resolved,'index.html');
          if(!fs.existsSync(resolved))failures.push(`${path.relative(root,target)}: broken local reference ${ref}`);
        }
      }
    }
  }
}

console.log(`All libraries: ${grand.books} books · ${grand.sections} sections · ${grand.words.toLocaleString()} words · ${grand.questions} questions · ${grand.mains} Mains blueprints · ${grand.models} complete models`);
if(failures.length){console.error('\nValidation failures:\n- '+[...new Set(failures)].join('\n- '));process.exit(1);}
console.log('Validation passed: every rendered book meets the minimum study, practice, Mains and recall standard; all local references resolve.');

const id=document.body.dataset.book;
const book=window.BOOKS?.[id];

if(book){
  document.title=`${book.title} · Rajneeti`;
  const toc=document.querySelector('#toc');
  const article=document.querySelector('#article');
  document.querySelector('#book-number').textContent=`Book ${id} of 19`;
  article.innerHTML=`<header class="book-head"><span class="eyebrow">${book.kicker}</span><h1>${book.title}</h1><p class="dek">${book.dek}</p><div class="book-meta"><span>${book.sections.length} chapters</span><span>PSIR Optional Mains</span><button class="print-button" onclick="print()">Print / Save PDF</button></div></header>`+
    book.sections.map((section,index)=>`<section class="book-section" id="${section.id}"><h2>${index+1}. ${section.title}</h2>${section.html}</section>`).join('')+
    `<section class="recall"><h2>Active-recall checkpoint</h2><ol>${book.recall.map(question=>`<li>${question}</li>`).join('')}</ol></section><nav class="book-nav">${book.prev?`<a href="${book.prev}">← Previous book</a>`:'<span></span>'}${book.next?`<a href="${book.next}">Next book →</a>`:''}</nav>`;
  toc.innerHTML='<a class="back" href="../index.html#library">← All books</a>'+book.sections.map((section,index)=>`<a href="#${section.id}">${index+1}. ${section.title}</a>`).join('');

  const links=[...toc.querySelectorAll('a[href^="#"]')];
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(entry.isIntersecting)links.forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));
    }
  },{rootMargin:'-20% 0px -70%'});
  document.querySelectorAll('.book-section').forEach(section=>observer.observe(section));
}else{
  document.querySelector('#article').innerHTML='<section class="book-section"><h1>Book data could not be loaded</h1><p>Return to the library and reopen this book. If the problem continues, refresh the page.</p><p><a href="../index.html#library">← Return to all books</a></p></section>';
}

addEventListener('scroll',()=>{
  const root=document.documentElement;
  const distance=root.scrollHeight-root.clientHeight;
  document.querySelector('.reading-progress').style.width=`${distance?100*root.scrollTop/distance:0}%`;
  localStorage.setItem(`psir-progress-${id}`,root.scrollTop);
});

addEventListener('load',()=>{
  const savedPosition=Number(localStorage.getItem(`psir-progress-${id}`)||0);
  if(savedPosition>300&&confirm('Continue where you left off?'))scrollTo(0,savedPosition);
});

let printClosed=[];
addEventListener('beforeprint',()=>{
  printClosed=[...document.querySelectorAll('details:not([open])')];
  printClosed.forEach(item=>item.open=true);
});
addEventListener('afterprint',()=>{
  printClosed.forEach(item=>item.open=false);
  printClosed=[];
});

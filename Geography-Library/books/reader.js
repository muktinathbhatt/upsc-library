const id=document.body.dataset.book,book=window.BOOKS?.[id];
const activateSentenceNotes=article=>{
 const applyNotes=()=>window.SentenceNotes?.apply(article,{bookId:`geography-${id}`,subject:'geography'});
 if(window.SentenceNotes)return applyNotes();
 const script=document.createElement('script');script.src='../../shared/sentence-notes.js?v=20260831-freshers';
 script.addEventListener('load',applyNotes);document.head.append(script);
};
if(book){
 document.title=`${book.title} · Bhugol`;
 const toc=document.querySelector('#toc'),article=document.querySelector('#article');
 document.querySelector('#book-number').textContent=`Book ${id} of ${book.total||12}`;
 article.innerHTML=`<header class="book-head"><span class="eyebrow">${book.kicker}</span><h1>${book.title}</h1><p class="dek">${book.dek}</p><div class="book-meta"><span>${book.sections.length} chapters</span><span>Prelims + Mains</span><button class="print-button" onclick="print()">Print / Save PDF</button></div></header>`+book.sections.map((s,i)=>`<section class="book-section" id="${s.id}"><h2>${i+1}. ${s.title}</h2>${s.html}</section>`).join('')+`<section class="recall"><h2>Active-recall checkpoint</h2><ol>${book.recall.map(q=>`<li>${q}</li>`).join('')}</ol></section><nav class="book-nav">${book.prev?`<a href="${book.prev}">← Previous book</a>`:'<span></span>'}${book.next?`<a href="${book.next}">Next book →</a>`:''}</nav>`;
 toc.innerHTML='<a class="back" href="../index.html#library">← All books</a>'+book.sections.map((s,i)=>`<a href="#${s.id}">${i+1}. ${s.title}</a>`).join('');
 const links=[...toc.querySelectorAll('a[href^="#"]')],observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)links.forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));},{rootMargin:'-20% 0px -70%'});
 document.querySelectorAll('.book-section').forEach(section=>observer.observe(section));activateSentenceNotes(article);
}
addEventListener('scroll',()=>{const root=document.documentElement;const distance=root.scrollHeight-root.clientHeight;document.querySelector('.reading-progress').style.width=`${distance?100*root.scrollTop/distance:0}%`;localStorage.setItem(`geo-progress-${id}`,root.scrollTop)});
addEventListener('load',()=>{const position=Number(localStorage.getItem(`geo-progress-${id}`)||0);if(position>300&&confirm('Continue where you left off?'))scrollTo(0,position)});

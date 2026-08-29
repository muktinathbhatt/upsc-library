(function(){
  const esc=s=>String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const question=(q,i)=>`<details class="practice-q"><summary>Q${i+1}. ${q.q}</summary><div>${q.options?`<ol class="options">${q.options.map(x=>`<li>${x}</li>`).join('')}</ol>`:''}<p class="answer">Answer: ${q.answer}</p><p>${q.why}</p>${q.trap?`<p class="trap"><b>Trap:</b> ${q.trap}</p>`:''}</div></details>`;
  const sourceList=sources=>`<ul>${sources.map(s=>`<li>${s.url?`<a href="${s.url}">${s.name}</a>`:s.name} — ${s.use}</li>`).join('')}</ul>`;
  window.UPSCStudy={
    makeBook(id,data){window.BOOKS[id]=data;},
    enrich(id,cfg){
      const book=window.BOOKS[id]; if(!book) return;
      (cfg.notes||[]).forEach(n=>{const s=book.sections.find(x=>x.id===n.id);if(s)s.html+=`<div class="topic-extension"><h3>Deeper study</h3>${n.html}</div>`;});
      if(cfg.objectives) book.sections.unshift({id:'learning-objectives',title:'Learning objectives and topic map',html:`<div class="learning-objectives"><h3>By the end of this book, you should be able to</h3><ul>${cfg.objectives.map(x=>`<li>${x}</li>`).join('')}</ul></div>${cfg.map||''}`});
      if(cfg.questions?.length) book.sections.push({id:'topic-practice',title:'Topic-wise Prelims practice',html:`<div class="practice-set"><h3>Attempt before opening the explanations</h3><p>Each item tests a distinction or causal link from this book. Eliminate options statement by statement.</p>${cfg.questions.map(question).join('')}</div>`});
      if(cfg.mains?.length) book.sections.push({id:'mains-workshop',title:'Mains answer workshop',html:cfg.mains.map((m,i)=>`<div class="answer-blueprint"><h3>${i+1}. ${m.q}</h3><p><b>Demand:</b> ${m.demand}</p><ol>${m.points.map(x=>`<li>${x}</li>`).join('')}</ol><p><b>Closing judgement:</b> ${m.close}</p></div>`).join('')});
      if(cfg.revision?.length) book.sections.push({id:'rapid-revision',title:'Rapid revision and misconceptions',html:`<div class="exam-grid">${cfg.revision.map(x=>`<div><b>${x[0]}</b>${x[1]}</div>`).join('')}</div><h3>One-minute recall</h3><ul class="micro-recall">${(cfg.recall||[]).map(x=>`<li>${x}</li>`).join('')}</ul>`});
      if(cfg.sources?.length) book.sections.push({id:'sources',title:'Primary sources and annual update route',html:`<div class="source-list"><h3>Use these to refresh facts—not to replace concepts</h3>${sourceList(cfg.sources)}<p class="source-note">Record the release date, reference period, unit and whether a number is provisional or revised. Prefer the latest available edition when you study.</p></div>`});
      book.recall=[...(book.recall||[]),...(cfg.finalRecall||[])];
    },esc
  };
})();

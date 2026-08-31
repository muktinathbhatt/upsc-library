(()=>{
const escapeHtml=value=>String(value).replace(/[&<>"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
const frameFor=subject=>({
 economics:{name:'Economics answer map',steps:['What is the concept?','What causes the change?','How does the change spread?','Who gains and who loses?','What can policy do?'],table:[['First read','Name the concept in simple words.','One short definition.'],['Then connect','Follow cause → effect.','A labeled flow chart.'],['Then answer','Show benefit, cost, and action.','A balanced UPSC paragraph.']]},
 geography:{name:'Geography answer map',steps:['Where is the pattern?','What process causes it?','What changes the pattern?','What is the impact?','Which map or diagram helps?'],table:[['First read','Locate the place or pattern.','A rough map or direction.'],['Then connect','Link process, place, and time.','A labeled flow chart.'],['Then answer','Give Indian context and impact.','A map plus a short explanation.']]},
 history:{name:'History answer map',steps:['What is the context?','What happened?','Who acted and why?','What changed and what continued?','Why does it matter?'],table:[['First read','Place the topic in time and place.','A short timeline.'],['Then connect','Link causes, event, and result.','A cause → event → impact chart.'],['Then answer','Use evidence and a balanced judgment.','A structured Mains paragraph.']]},
 psir:{name:'PSIR answer map',steps:['Define the concept.','State the debate or theory.','Use a thinker or institution.','Apply it to India or world politics.','Evaluate the limit and answer the question.'],table:[['First read','Learn the core concept in plain words.','A one-line definition.'],['Then connect','Compare claims and counterclaims.','A thinker or theory map.'],['Then answer','Apply, evaluate, and conclude.','A balanced Optional answer.']]}
}[subject]||{name:'Answer map',steps:['Define','Explain','Apply','Evaluate','Conclude'],table:[['First read','Learn the topic.','A short definition.'],['Then connect','Follow the relation.','A simple chart.'],['Then answer','Answer the question.','A clear paragraph.']]});

const apply=(article,{subject='',sections=[]}={})=>{
 if(!article||article.querySelector('.beginner-visual-map'))return;
 const frame=frameFor(subject);
 const shown=sections.slice(0,6);
 const remaining=sections.length-shown.length;
 const chapterMap=shown.map((section,index)=>`<span><b>${index+1}.</b> ${escapeHtml(section.title)}</span>`).join(' <i aria-hidden="true">→</i> ')+(remaining>0?` <i aria-hidden="true">→</i> <span><b>+</b> ${remaining} more chapters</span>`:'');
 const answerMap=frame.steps.map((step,index)=>`<span><b>${index+1}.</b> ${escapeHtml(step)}</span>`).join(' <i aria-hidden="true">→</i> ');
 const tableRows=frame.table.map(row=>`<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td></tr>`).join('');
 const panel=document.createElement('section');
 panel.className='book-section beginner-visual-map';
 panel.id='visual-study-map';
 panel.innerHTML=`<h2>Fresher visual study map</h2><div class="concept-box"><h3>Book map</h3><p>Read the book in this order. Each chapter prepares you for the next one.</p><div class="chain beginner-flow" role="img" aria-label="Book chapters in study order">${chapterMap}</div></div><div class="exam-box"><h3>${escapeHtml(frame.name)}</h3><p>Use this chart when you make notes or write an answer.</p><div class="chain beginner-flow" role="img" aria-label="Five steps for an answer">${answerMap}</div></div><table class="beginner-learning-table"><thead><tr><th>Study step</th><th>Ask yourself</th><th>Make this output</th></tr></thead><tbody>${tableRows}</tbody></table><div class="warning-box"><b>Fresher rule:</b> First understand the map. Then read the chapter. Do not memorize a list before you can explain the link between its parts.</div>`;
 article.querySelector('.book-head')?.after(panel);
};

window.BeginnerLibraryVisuals={apply};
})();

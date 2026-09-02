(()=>{
const S={
 ncertTheory:{book:'NCERT Class XI — Political Theory',part:'Relevant chapter matching this topic',level:'Foundation'},
 ncertConstitution:{book:'NCERT Class XI — Indian Constitution at Work',part:'Relevant institution or constitutional-design chapter',level:'Foundation'},
 ncertIndia:{book:'NCERT Class XII — Politics in India Since Independence',part:'Relevant post-independence theme',level:'Foundation'},
 ncertWorld:{book:'NCERT Class XII — Contemporary World Politics',part:'Relevant world-politics chapter',level:'Foundation'},
 gauba:{book:'O. P. Gauba — An Introduction to Political Theory',part:'Chapter/section matching this concept',level:'Core'},
 heywoodIdeologies:{book:'Andrew Heywood — Political Ideologies',part:'Chapter on the relevant ideology',level:'Core'},
 mukherjee:{book:'Mukherjee & Ramaswamy — A History of Political Thought: Plato to Marx',part:'Chapter on the relevant thinker',level:'Core'},
 nelson:{book:'Brian R. Nelson — Western Political Thought',part:'Chapter on the relevant thinker',level:'Selective'},
 vrMehta:{book:'V. R. Mehta — Foundations of Indian Political Thought',part:'Chapter/essay on the relevant thinker or tradition',level:'Core'},
 ignouThought:{book:'IGNOU Political Theory / Indian Political Thought material',part:'Unit matching this chapter',level:'Selective'},
 bipanStruggle:{book:'Bipan Chandra et al. — India’s Struggle for Independence',part:'Relevant phase, movement or interpretive chapter',level:'Core'},
 bipanSince:{book:'Bipan Chandra et al. — India Since Independence',part:'Relevant post-1947 theme',level:'Selective'},
 laxmikanth:{book:'M. Laxmikanth — Indian Polity',part:'Chapter on the relevant constitutional institution',level:'Foundation'},
 fadia:{book:'B. L. Fadia — Indian Government and Politics',part:'Section on the relevant institution or political process',level:'Core'},
 kothari:{book:'Rajni Kothari — Politics in India',part:'Relevant essay/chapter on party system, caste or political change',level:'Core'},
 oxfordIndia:{book:'Jayal & Mehta (eds.) — The Oxford Companion to Politics in India',part:'Relevant thematic entry',level:'Reference'},
 ignouComparative:{book:'IGNOU MA Political Science — Comparative Politics',part:'Unit matching the approach or institution',level:'Core'},
 heywoodGlobal:{book:'Andrew Heywood — Global Politics',part:'Chapter matching this IR concept or global issue',level:'Core'},
 baylis:{book:'Baylis, Smith & Owens — The Globalization of World Politics',part:'Relevant theory or issue chapter',level:'Selective'},
 sikri:{book:'Rajiv Sikri — Challenge and Strategy',part:'Relevant country, region or foreign-policy theme',level:'Core'},
 malone:{book:'David M. Malone — Does the Elephant Dance?',part:'Relevant bilateral or thematic chapter',level:'Selective'},
 pant:{book:'Harsh V. Pant — Indian Foreign Policy: An Overview',part:'Relevant regional or policy chapter',level:'Selective'},
 mea:{book:'Ministry of External Affairs',part:'Latest annual report, bilateral brief and dated official statement',level:'Current update'},
 pyq:{book:'UPSC PSIR previous question papers',part:'Questions tagged to this chapter from the last 10–15 years',level:'Exam use'}
};

const item=(source,read,extract)=>({...source,read,extract});
const common={
 theory:(topic)=>[
  item(S.gauba,`Read the section on ${topic}; focus on definitions, rival positions and criticisms.`,`One precise definition, a two-column debate, two scholars and one contemporary application.`),
  item(S.ncertTheory,`Use the matching chapter for a clear first reading before the standard text.`,`The core question, basic distinctions and one Indian illustration.`),
  item(S.pyq,`Identify how UPSC has framed ${topic}: explain, examine, compare or critically evaluate.`,`A demand list and two reusable thesis statements.`)
 ],
 ideology:(topic)=>[
  item(S.heywoodIdeologies,`Read the chapter on ${topic}, including its internal traditions and modern variants.`,`Core values, view of human nature/state/economy, internal divisions and two criticisms.`),
  item(S.gauba,`Use the corresponding ideological discussion to align terminology with the PSIR syllabus.`,`A compact definition and links to theories of the state.`),
  item(S.pyq,`Group questions by concept, thinker and contemporary relevance.`,`Three recurring debates and one comparison framework.`)
 ],
 thinker:(name)=>[
  item(S.mukherjee,`Read the ${name} chapter for historical context and reconstruction of the argument.`,`Problem → central claim → mechanism → criticism → present relevance.`),
  item(S.nelson,`Use the ${name} chapter to clarify contested interpretations; read selectively.`,`One interpretive debate and one comparison with another thinker.`),
  item(S.pyq,`Code all ${name} questions by recurring concepts rather than chronology.`,`Two ten-marker openings and a thinker-comparison grid.`)
 ],
 indianThinker:(name)=>[
  item(S.vrMehta,`Read the chapter/essay on ${name}; preserve the thinker’s historical vocabulary.`,`Context, problem, key concepts, political project, limitation and one comparison.`),
  item(S.ignouThought,`Use the matching unit to fill syllabus gaps and locate primary-text references.`,`A one-page thinker sheet and two accurate textual anchors.`),
  item(S.pyq,`Sort ${name} questions into exposition, criticism and comparison.`,`Two defensible theses and one cross-link to Indian politics.`)
 ],
 institution:(topic)=>[
  item(S.laxmikanth,`Read the ${topic} chapter first for provisions, composition and procedure.`,`A fact sheet: articles, appointment/composition, powers and safeguards.`),
  item(S.fadia,`Read the section on ${topic} for actual working and political debate.`,`Design-versus-practice table, two criticisms and two reform arguments.`),
  item(S.oxfordIndia,`Consult the thematic entry for scholarly interpretation; do not read cover to cover.`,`One scholar-led argument and one empirical illustration.`)
 ],
 comparative:(topic)=>[
  item(S.ignouComparative,`Read the unit on ${topic} for approach, vocabulary and comparative examples.`,`Assumptions, unit of analysis, mechanism, strength and blind spot.`),
  item(S.heywoodGlobal,`Use the matching chapter where ${topic} connects with the state or global change.`,`One cross-national comparison and one contemporary application.`),
  item(S.pyq,`Track the criteria UPSC expects when it asks for comparison.`,`A fixed comparison matrix and two case pairs.`)
 ],
 ir:(topic)=>[
  item(S.heywoodGlobal,`Read the chapter/section on ${topic}; begin with concepts and contending approaches.`,`Definition, assumptions, causal mechanism, strongest criticism and one case.`),
  item(S.baylis,`Use the matching chapter for deeper theory and contemporary cases.`,`One additional scholar, one counter-view and one case that tests the theory.`),
  item(S.pyq,`Classify ${topic} questions by theory, application and evaluation.`,`Two thesis templates and a theory-to-case table.`)
 ],
 foreign:(topic)=>[
  item(S.sikri,`Read the chapter/section on ${topic} for strategic history and Indian interests.`,`Continuities, changes, interests, constraints and a balanced judgement.`),
  item(S.malone,`Consult the matching chapter for an external analytical perspective.`,`One supporting interpretation and one criticism of Indian policy.`),
  item(S.mea,`Update the static reading with the latest official evidence on ${topic}.`,`Two dated developments, India’s stated position and the outcome/implementation gap.`)
 ]
};

const thinkerNames=['Plato','Aristotle','Machiavelli','Hobbes','Locke','Mill','Marx','Gramsci','Arendt'];
const indianNames=['Dharmashastra','Arthashastra','Buddhist political traditions','Sir Syed Ahmed Khan','Sri Aurobindo','Gandhi','Ambedkar','M. N. Roy'];
const findName=(text,names)=>names.find(name=>text.toLowerCase().includes(name.toLowerCase()));
const topicOf=(section)=>section.title.replace(/&[^;]+;/g,' ').replace(/^[^:]+:\s*/,'').trim();
const excluded=/^(objectives|answer-practice|advanced-answer-practice|revision|sources)$/;

const recommendations=(bookId,section)=>{
 const text=`${section.id} ${section.title}`.toLowerCase();
 const topic=topicOf(section);
 if(bookId==='02'||bookId==='03')return common.theory(topic);
 if(bookId==='04')return common.ideology(topic);
 if(bookId==='05')return common.thinker(findName(text,thinkerNames)||topic.split(/[,:]/)[0]);
 if(bookId==='06')return common.indianThinker(findName(text,indianNames)||topic.split(/[,:]/)[0]);
 if(bookId==='07')return [
  item(S.bipanStruggle,`Read the phase or debate matching “${topic}”.`,`Chronology only as scaffolding; extract strategy, social base, colonial response and scholarly interpretation.`),
  item(S.ncertIndia,`Use the relevant background chapter for a quick conceptual and chronological orientation.`,`A one-page timeline and the constitutional/political legacy.`),
  item(S.pyq,`Tag nationalism questions by strategy, social composition, interpretation and constitutional consequence.`,`Two historiographical contrasts and two answer theses.`)
 ];
 if(bookId==='08')return common.institution(topic);
 if(bookId==='09')return [
  item(S.kothari,`Read the essay/chapter most closely related to “${topic}”.`,`The scholar’s central claim, mechanism of political change and present-day qualification.`),
  item(S.bipanSince,`Use the relevant thematic chapter for historical evidence after 1947.`,`Three turning points, affected groups and institutional consequences.`),
  item(S.oxfordIndia,`Consult the matching entry for newer scholarship and competing interpretations.`,`Two scholars, one dataset/case and a qualified judgement.`)
 ];
 if(bookId==='10')return common.comparative(topic);
 if(['11','12','13'].includes(bookId))return common.ir(topic);
 if(['14','15','16','17'].includes(bookId))return common.foreign(topic);
 if(['18','19'].includes(bookId)){
  const domain=/india|constitution|federal|party|election|movement/i.test(text)?common.institution(topic):/foreign|south asia|major power|nuclear|international|ir\b/i.test(text)?common.ir(topic):common.theory(topic);
  return [item(S.pyq,`Use official papers as the primary material for “${topic}”.`,`Demand words, recurring concepts, marks/space requirements and a timed response.`),...domain.slice(0,2)];
 }
 return [];
};

const renderItem=(entry)=>`<li class="study-source"><div class="study-source-head"><strong>${entry.book}</strong><span class="study-level">${entry.level}</span></div><p><b>Read:</b> ${entry.read}</p><p><b>Extract:</b> ${entry.extract}</p><small>${entry.part}</small></li>`;
const apply=(article,{bookId,sections})=>{
 let count=0;
 for(const section of sections){
  if(excluded.test(section.id)||section.id.includes('answer-practice')||section.id==='revision')continue;
  const host=article.querySelector(`.book-section#${CSS.escape(section.id)}`);
  if(!host||host.querySelector(':scope > .chapter-study-layer'))continue;
  const entries=recommendations(bookId,section);
  if(!entries.length)continue;
  const layer=document.createElement('details');
  layer.className='chapter-study-layer';
  layer.innerHTML=`<summary><span><b>Second layer</b>Study from standard books</span><em>${entries.length} mapped readings</em></summary><div class="chapter-study-body"><p class="study-intro">Use these readings after the library explanation. Page and chapter numbers vary by edition, so the topic title is the stable locator.</p><ol>${entries.map(renderItem).join('')}</ol></div>`;
  host.append(layer);count++;
 }
 article.dataset.studyLayers=String(count);
 const meta=article.querySelector('.book-meta');
 if(meta&&count){const badge=document.createElement('span');badge.textContent=`${count} chapter reading maps`;meta.insertBefore(badge,meta.lastElementChild);}
 return count;
};
window.PSIRReadingLayer={apply};
})();

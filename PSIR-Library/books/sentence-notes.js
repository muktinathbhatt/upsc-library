(()=>{
const concepts=[
 {terms:['need'],label:'Need',note:'A distributive rule that gives priority according to deprivation or the requirements of a minimally adequate life.',example:'Essential healthcare is normally allocated by urgency rather than achievement.',when:/\b(desert|equality|entitlement|distribut|justice|allocat|resource)\b/i},
 {terms:['desert'],label:'Desert',note:'A distributive rule that connects reward to effort, contribution, sacrifice or achievement.',example:'A prize may track performance, although opportunity and social luck complicate the claim.'},
 {terms:['entitlement'],label:'Entitlement',note:'A historical rule: a holding is just when it arose through just acquisition, transfer and rectification, not because it fits a preferred pattern.',example:'Nozick can defend unequal holdings if their history is just.'},
 {terms:['equality'],label:'Equality',note:'A demand to remove morally arbitrary hierarchy; its metric may be status, opportunity, resources, welfare or capabilities.',example:'Equal votes express civic equality even when incomes differ.'},
 {terms:['justice'],label:'Justice',note:'The principles governing fair institutions, relations, procedures, recognition and the distribution of benefits and burdens.',example:'A just allocation must identify its metric, subjects, procedure and remedy.'},
 {terms:['liberty','freedom'],label:'Liberty',note:'The protected space or effective capacity to choose and act; negative, positive and republican accounts disagree about what threatens it.',example:'Non-interference can coexist with domination, which is why republican liberty adds non-domination.'},
 {terms:['rights','human rights'],label:'Rights',note:'Justified claims that impose duties or constraints on others and institutions.',example:'A constitutional right is not merely an aspiration: it identifies a claimant, duty-bearer and remedy.'},
 {terms:['power'],label:'Power',note:'The capacity to shape conduct, agendas, preferences or structures, including without a visible command.',example:'Lukes adds agenda control and preference formation to observable decision-making.'},
 {terms:['authority'],label:'Authority',note:'Power regarded as having a valid claim to obedience; it therefore joins capacity with justification.',example:'A lawful order may possess authority even when coercion is not used.'},
 {terms:['legitimacy'],label:'Legitimacy',note:'The justified or socially accepted right to rule, distinct from legality and mere effectiveness.',example:'A regime can be effective yet face a legitimacy deficit.'},
 {terms:['state'],label:'State',note:'A territorially organised structure of public authority claiming supremacy and maintaining institutions of rule.',example:'State capacity, autonomy and social embeddedness are separate analytical dimensions.'},
 {terms:['sovereignty'],label:'Sovereignty',note:'Supreme public authority internally and juridical independence externally, both constrained in practice by interdependence.',example:'International obligations qualify policy freedom without automatically abolishing state sovereignty.'},
 {terms:['democracy'],label:'Democracy',note:'A system of political equality and public control whose models differ over participation, competition, deliberation and social conditions.',example:'Competitive elections are necessary but do not exhaust democratic accountability.'},
 {terms:['representation'],label:'Representation',note:'The process through which actors make citizens, interests or identities present in decision-making.',example:'Delegate, trustee, descriptive and substantive representation answer different questions.'},
 {terms:['participation'],label:'Participation',note:'Citizen involvement in choosing, influencing, deliberating over or implementing collective decisions.',example:'High participation is democratic only when access and influence are not severely unequal.'},
 {terms:['citizenship'],label:'Citizenship',note:'Membership in a political community expressed through rights, duties, identity and practices of participation.',example:'Formal membership may coexist with unequal substantive citizenship.'},
 {terms:['civil society'],label:'Civil society',note:'The associational sphere between household, market and state where interests, identities and public claims are organised.',example:'It can discipline state power but can also reproduce social hierarchy.'},
 {terms:['hegemony'],label:'Hegemony',note:'Leadership sustained by a combination of material power, institutions and consent that makes a particular order appear normal.',example:'Gramsci explains why rule persists through common sense as well as coercion.'},
 {terms:['ideology'],label:'Ideology',note:'An organised framework of political meaning that interprets society, legitimates or contests power, and guides action.',example:'Ideology can disclose injustice while also naturalising a dominant order.'},
 {terms:['political obligation'],label:'Political obligation',note:'The claimed moral duty to obey political authority, which consent, fairness and associative theories justify differently.',example:'Legality alone does not settle whether citizens have a moral duty to obey.'},
 {terms:['constitutionalism'],label:'Constitutionalism',note:'The project of subjecting public power to higher rules, rights, institutional checks and reasoned justification.',example:'A constitution can exist without effective constitutionalism.'},
 {terms:['rule of law'],label:'Rule of law',note:'Government through public, prospective and consistently applied law, with stronger accounts also requiring rights and review.',example:'Rule by law uses legal form as an instrument; rule of law restrains the ruler.'},
 {terms:['judicial review'],label:'Judicial review',note:'Judicial examination of public action for conformity with constitutional authority and rights.',example:'Its democratic defence rests on constitutional supremacy, while critics question counter-majoritarian power.'},
 {terms:['basic structure'],label:'Basic structure',note:'The Indian doctrine that Parliament’s amending power cannot destroy the Constitution’s foundational identity.',example:'It reconciles constitutional change with limits on constituted power.'},
 {terms:['federalism'],label:'Federalism',note:'A constitutionally structured combination of shared rule and self-rule across territorial levels.',example:'Legal lists alone cannot explain federal practice; finance, parties and bargaining also matter.'},
 {terms:['secularism'],label:'Secularism',note:'The political regulation of religion–state relations to secure freedom, equality and civic peace.',example:'Indian principled distance differs from a single rigid wall-of-separation model.'},
 {terms:['affirmative action'],label:'Affirmative action',note:'Targeted measures addressing entrenched disadvantage and under-representation in order to make equality substantive.',example:'It treats identical rules amid unequal starting points as potentially unjust.'},
 {terms:['nationalism'],label:'Nationalism',note:'A doctrine and movement linking a political community to collective identity, self-determination and often territorial rule.',example:'Civic and ethnic forms differ, but most historical nationalisms combine several sources of identity.'},
 {terms:['pluralism'],label:'Pluralism',note:'A view that power is dispersed among competing groups or that multiple values and identities deserve political accommodation.',example:'Elite and structural critics argue that formally open competition can conceal unequal resources.'},
 {terms:['liberalism'],label:'Liberalism',note:'A family of doctrines centred on individual freedom, equal moral status, limited power and constitutional government.',example:'Classical, social and egalitarian liberals disagree about property and the enabling role of the state.'},
 {terms:['neoliberalism','neo-liberalism'],label:'Neoliberalism',note:'A political project favouring competition, market discipline, privatisation and a state that actively constructs market order.',example:'It usually transforms state activity rather than simply withdrawing the state.'},
 {terms:['socialism'],label:'Socialism',note:'A family of doctrines seeking social control of productive power, substantive equality and cooperation over domination by capital.',example:'Democratic and revolutionary socialisms disagree about ownership, strategy and the state.'},
 {terms:['marxism','marxist'],label:'Marxism',note:'An analysis of historical change and political power centred on material production, class relations, exploitation and struggle.',example:'It treats the state and law in relation to social property, while later Marxists debate their relative autonomy.'},
 {terms:['feminism','feminist'],label:'Feminism',note:'A family of theories exposing gendered power across public and private life and seeking equal freedom and transformation.',example:'Liberal, radical, socialist, intersectional and postcolonial feminisms diagnose different mechanisms.'},
 {terms:['postcolonialism','postcolonial'],label:'Postcolonialism',note:'An approach examining how colonial power survives in knowledge, identity, institutions and the international order.',example:'Formal independence does not by itself decolonise categories or unequal global structures.'},
 {terms:['caste'],label:'Caste',note:'A graded and historically changing structure of status, occupation, endogamy and power that also becomes a field of democratic mobilisation.',example:'Electoral assertion can weaken ritual hierarchy while reproducing new political blocs.'},
 {terms:['ethnicity','ethnic'],label:'Ethnicity',note:'A politically activated claim of shared descent, culture, language or history rather than a fixed primordial fact.',example:'Institutions and elite strategies influence whether difference becomes accommodation or conflict.'},
 {terms:['social movement','social movements'],label:'Social movement',note:'Sustained collective action outside routine institutional channels seeking cultural, social or political change.',example:'Grievance alone is insufficient; resources, opportunities, framing and identity affect mobilisation.'},
 {terms:['political party','political parties','party system'],label:'Political party',note:'An organisation seeking governmental power by aggregating interests, recruiting leadership and contesting elections.',example:'Party systems depend on social cleavages, electoral rules and patterns of competition.'},
 {terms:['pressure group','pressure groups','interest group','interest groups'],label:'Pressure group',note:'An organised interest that seeks to influence public policy without normally assuming governmental office.',example:'Unequal money, access and organisation mean group competition is not automatically pluralist equality.'},
 {terms:['political economy'],label:'Political economy',note:'The reciprocal shaping of markets, property, production and distribution by institutions and power.',example:'Economic reform creates political coalitions and conflicts rather than operating as a technical adjustment alone.'},
 {terms:['development'],label:'Development',note:'A contested transformation involving productive capacity, welfare, freedom, sustainability and the distribution of power.',example:'Growth can raise aggregate income without ensuring capabilities or ecological security.'},
 {terms:['globalisation','globalization'],label:'Globalisation',note:'The intensification of cross-border flows and rule-making whose depth, reach and distribution vary by domain.',example:'Interdependence constrains states unevenly rather than making every state powerless.'},
 {terms:['comparative politics'],label:'Comparative politics',note:'The systematic use of comparison to describe variation, test explanations and evaluate political institutions across contexts.',example:'Valid comparison holds criteria constant and states the limits of case selection.'},
 {terms:['political culture'],label:'Political culture',note:'Shared orientations toward authority, institutions and participation that shape—but do not mechanically determine—political conduct.',example:'It must be related to institutions and social conflict to avoid circular explanation.'},
 {terms:['political socialisation','political socialization'],label:'Political socialisation',note:'The processes through which political orientations and identities are learned, reproduced and revised.',example:'Family, school, media, parties and political events can transmit competing orientations.'},
 {terms:['realism','realist'],label:'Realism',note:'An IR tradition emphasising anarchy, power, survival and strategic competition among states.',example:'It explains security rivalry well but may understate institutions, identity and domestic politics.'},
 {terms:['liberal institutionalism','institutionalism'],label:'Liberal institutionalism',note:'An IR approach explaining cooperation through repeated interaction, information, rules and reduced transaction costs.',example:'Institutions facilitate cooperation but reflect power and cannot remove every distributional conflict.'},
 {terms:['constructivism','constructivist'],label:'Constructivism',note:'An IR approach in which identities, norms and shared meanings help constitute interests and international practices.',example:'Anarchy has different effects depending on the relationships and expectations states construct.'},
 {terms:['national interest'],label:'National interest',note:'A contested statement of valued external objectives produced through security, economic, ideological and domestic priorities.',example:'It should be specified rather than invoked as a self-evident reason.'},
 {terms:['balance of power'],label:'Balance of power',note:'A distribution or strategy intended to prevent one actor from acquiring preponderant power.',example:'Balancing may be internal through capabilities or external through alliances.'},
 {terms:['security dilemma'],label:'Security dilemma',note:'A condition in which one state’s defensive measures appear threatening and provoke mutually reducing security.',example:'Uncertainty and offence–defence conditions determine its intensity.'},
 {terms:['deterrence'],label:'Deterrence',note:'Preventing action by credibly communicating that expected costs will exceed expected gains.',example:'Capability, credibility and communication must all be analysed.'},
 {terms:['collective security'],label:'Collective security',note:'A commitment by members to treat aggression against one as a concern of all, without fixing the enemy in advance.',example:'It depends on agreement about aggression and willingness to bear enforcement costs.'},
 {terms:['non-alignment','nonalignment'],label:'Non-alignment',note:'A strategy of independent judgement that resisted bloc subordination while permitting issue-based cooperation.',example:'It was neither neutrality nor equal distance from every power.'},
 {terms:['strategic autonomy'],label:'Strategic autonomy',note:'The capacity to make consequential external choices without unacceptable dependence on another power.',example:'Partnership diversification can support autonomy when it avoids a new single dependency.'},
 {terms:['multipolarity','multipolar'],label:'Multipolarity',note:'An international distribution in which several major centres possess consequential capabilities.',example:'More poles do not automatically create either balance or stability.'},
 {terms:['global governance'],label:'Global governance',note:'Collective rule-making and coordination beyond a world government by states, organisations and non-state actors.',example:'Its effectiveness and legitimacy must be assessed separately.'},
 {terms:['regionalism','regionalisation','regionalization'],label:'Regionalism',note:'Political projects and institutions that organise cooperation within a region; regionalisation refers more broadly to growing regional interaction.',example:'The EU and ASEAN should be compared through purpose, delegation, decision rules and implementation.'},
 {terms:['responsibility to protect','r2p'],label:'Responsibility to Protect',note:'The commitment that states protect populations from four atrocity crimes, with collective action channelled through the UN framework when they manifestly fail.',example:'It narrows the sovereignty debate but remains contested over selectivity and force.'},
 {terms:['global south'],label:'Global South',note:'A political category expressing shared experiences of colonial hierarchy and unequal global rule, not a homogeneous geographical bloc.',example:'Coalition positions vary with interests, capabilities and issue area.'},
 {terms:['nieo','new international economic order'],label:'NIEO',note:'The 1970s programme for restructuring trade, finance, resources and decision-making in favour of developing countries.',example:'Its agenda survives in contemporary disputes over representation and policy space.'},
 {terms:['nuclear doctrine'],label:'Nuclear doctrine',note:'The publicly stated principles connecting nuclear forces to political purpose, posture and conditions of use.',example:'Doctrine, operational capability and adversary perception should not be treated as identical.'},
 {terms:['credible minimum deterrence'],label:'Credible minimum deterrence',note:'A posture seeking sufficient survivable retaliatory capability for deterrence without open-ended numerical parity.',example:'What counts as credible or minimum changes with technology and threat perception.'},
 {terms:['no first use'],label:'No First Use',note:'A declaratory commitment not to initiate nuclear use, intended to support restraint and retaliatory deterrence.',example:'Its significance depends on capability, exceptions and perceived credibility.'},
 {terms:['diplomacy'],label:'Diplomacy',note:'The representation, communication and negotiation through which political objectives are pursued short of—or alongside—coercion.',example:'A declaration proves an official position, not necessarily implementation or private motive.'},
 {terms:['soft power'],label:'Soft power',note:'The ability to shape preferences through attraction and legitimacy rather than payment or coercion.',example:'Cultural visibility is a resource; influence depends on credibility and reception.'},
 {terms:['rawls'],label:'John Rawls',note:'Rawls defends equal basic liberties, fair equality of opportunity and inequalities arranged to benefit the least advantaged.',example:'The original position models fairness by excluding knowledge of morally arbitrary social position.'},
 {terms:['nozick'],label:'Robert Nozick',note:'Nozick’s entitlement theory judges acquisition and transfer historically and rejects continuously imposed distributive patterns.',example:'The Wilt Chamberlain argument shows how voluntary exchanges can upset an equal pattern.'},
 {terms:['marx'],label:'Karl Marx',note:'Marx explains capitalist society through production relations, exploitation, class struggle and historically specific forms of alienation.',example:'Political emancipation is important but incomplete without transformation of social power.'},
 {terms:['gramsci'],label:'Antonio Gramsci',note:'Gramsci explains durable rule through hegemony: coercion joined to consent organised across state and civil society.',example:'A war of position contests institutions and common sense before a direct seizure of power.'},
 {terms:['arendt'],label:'Hannah Arendt',note:'Arendt distinguishes labour, work and action and locates political freedom in plural public action.',example:'Power arises when people act together, whereas violence is instrumental.'},
 {terms:['gandhi'],label:'M. K. Gandhi',note:'Gandhi joins truth, non-violence, self-rule and ethical means, treating politics as transformation of both institutions and the self.',example:'Swaraj is not exhausted by transfer of state power.'},
 {terms:['ambedkar'],label:'B. R. Ambedkar',note:'Ambedkar connects constitutional democracy with annihilation of caste, social equality and safeguards against graded hierarchy.',example:'Political democracy is precarious without social and economic democracy.'},
 {terms:['kautilya'],label:'Kautilya',note:'Kautilya analyses rule through security, welfare, administrative intelligence and prudential statecraft.',example:'The mandala is a relational strategic model, not a permanent list of friends and enemies.'},
 {terms:['plato'],label:'Plato',note:'Plato links justice to ordered functions and knowledge of the good, making political rule a problem of reason and education.',example:'The philosopher-ruler answers the problem of opinion but raises the danger of paternalism.'},
 {terms:['aristotle'],label:'Aristotle',note:'Aristotle treats the polis as a community aimed at the good life and evaluates regimes through purpose and social composition.',example:'The mixed polity uses a substantial middle element to moderate faction.'},
 {terms:['hobbes'],label:'Thomas Hobbes',note:'Hobbes derives undivided sovereign authority from individuals seeking peace under conditions of insecurity.',example:'Authorisation creates political unity but sharply narrows resistance.'},
 {terms:['locke'],label:'John Locke',note:'Locke grounds limited government in natural rights, consent, trust and a retained right of resistance.',example:'Property precedes government morally but is qualified by natural-law limits.'},
 {terms:['j. s. mill','john stuart mill','mill'],label:'J. S. Mill',note:'Mill defends individuality and free discussion through a harm principle while also valuing representative participation.',example:'His liberty argument is strongest against paternalism but contested over structural harm.'},
 {terms:['machiavelli'],label:'Niccolò Machiavelli',note:'Machiavelli studies effective political founding and preservation amid contingency, conflict and the limits of conventional morality.',example:'Virtù is adaptive political capacity, not simply private virtue.'}
];

const roles={
 contrast:{label:'Distinction or comparison',explain:'The sentence separates neighbouring ideas or sets rival explanations against a common standard. Its value lies in preserving the difference rather than merely naming both sides.',use:'Define each side, compare them on one explicit axis, show how they yield different conclusions, and then state where the distinction is most useful.',check:'What analytical error follows if the contrasted terms are treated as synonyms?'},
 causal:{label:'Causal or explanatory claim',explain:'The sentence proposes a connection between conditions, mechanisms and outcomes. It should be read as an explanation that may depend on scope conditions, not as a bare sequence of events.',use:'Identify the outcome, name the mechanism, add the condition under which it operates, and test it against one rival explanation or case.',check:'What mechanism connects the proposed cause to the outcome, and when might it fail?'},
 normative:{label:'Normative claim',explain:'The sentence evaluates an institution or distribution by invoking a value, criterion or duty. The conclusion depends on why that standard should govern.',use:'State the value, identify the affected subjects and duty-bearer, expose the trade-off, and defend a qualified criterion of judgement.',check:'Which moral criterion is doing the work, and who gains or bears the burden?'},
 scholar:{label:'Thinker or theoretical proposition',explain:'The sentence attributes an argument to a thinker or tradition. The name matters only when the underlying problem, proposition and mechanism are reconstructed accurately.',use:'Present the thinker’s problem, central proposition and mechanism; add one criticism or comparison and one contemporary application.',check:'Could you explain the argument without relying on the thinker’s name as a substitute for reasoning?'},
 evidence:{label:'Empirical or institutional evidence',explain:'The sentence supplies a dated event, legal provision, institution or case. Evidence establishes a limited proposition and must not be made to prove more than the source supports.',use:'Attach the date or authority, say exactly what the evidence demonstrates, distinguish rule from actual working, and acknowledge any inference.',check:'What does this evidence prove—and what does it leave unproven?'},
 qualification:{label:'Qualification or criticism',explain:'The sentence limits a wider claim, introduces a counter-argument or identifies a condition. It prevents an absolute conclusion without necessarily rejecting the main argument.',use:'Use it after the main claim, specify the precise limitation, and conclude by stating what survives the criticism and under what conditions.',check:'Does the qualification overturn the claim, narrow its scope, or reveal a missing variable?'},
 definition:{label:'Definition or conceptual frame',explain:'The sentence fixes the meaning and boundaries of a concept. A strong definition identifies the core feature and separates the concept from close neighbours.',use:'Open with the definition, clarify one boundary or dimension, and then convert it into an analytical test for the question.',check:'Which neighbouring concept must be distinguished to keep this definition precise?'},
 proposition:{label:'Analytical proposition',explain:'The sentence states a claim that should organise reasoning rather than be memorised in isolation. Its significance comes from the problem it answers and the evidence or comparison that can test it.',use:'Turn it into a thesis, supply a reason or mechanism, add a scholar or case, consider a counter-position, and finish with a conditional judgement.',check:'What reason and evidence would you use to defend this proposition under exam conditions?'}
};

const classify=sentence=>{
 const s=sentence.toLowerCase();
 if(/\b(rather than|whereas|unlike|distinguish(?:es|ed)?|contrast|versus|not the same|cannot be reduced|should not be confused|different from)\b/.test(s))return 'contrast';
 if(/\b(according to|argues?|contends?|maintains?|for rawls|for marx|for gramsci|for arendt|for gandhi|for ambedkar|theory|tradition)\b/.test(s))return 'scholar';
 if(/\b(article\s+\d+|amendment|act\b|judg(?:e)?ment|commission|committee|court|parliament|election|treaty|declaration|resolution|in \d{4}|\d{4})\b/.test(s))return 'evidence';
 if(/\b(because|therefore|thus|hence|produces?|causes?|leads? to|results? in|depends? on|through which|mechanism|explains?)\b/.test(s))return 'causal';
 if(/\b(however|although|yet\b|but\b|nevertheless|critique|criticism|limitation|problematic|may fail|does not automatically|not necessarily|risks?)\b/.test(s))return 'qualification';
 if(/\b(should|ought|must|just\b|unjust|fair|legitimate|desirable|duty|moral|normative)\b/.test(s))return 'normative';
 if(/\b(means?|refers? to|is defined|can be understood|is a |are a |denotes?|consists? of)\b/.test(s))return 'definition';
 return 'proposition';
};

const termPattern=term=>new RegExp(`(^|[^a-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'\\s+')}([^a-z0-9]|$)`,'i');
const conceptsFor=sentence=>concepts.filter(concept=>(!concept.when||concept.when.test(sentence))&&concept.terms.some(term=>termPattern(term).test(sentence))).slice(0,4);
const addRow=(panel,label,text)=>{
 const row=document.createElement('span');row.className='sentence-expansion-row';
 const heading=document.createElement('b');heading.textContent=`${label}: `;
 row.append(heading,document.createTextNode(text));panel.append(row);
};
const buildExpansion=(panel,meta)=>{
 if(panel.dataset.ready)return;
 panel.dataset.ready='true';
 const title=document.createElement('span');title.className='sentence-expansion-title';title.textContent='Deeper reading';panel.append(title);
 addRow(panel,'Analytical role',`${meta.role.label}. ${meta.role.explain}`);
 const matches=conceptsFor(meta.sentence);
 if(matches.length){
  const group=document.createElement('span');group.className='sentence-concepts';
  const groupTitle=document.createElement('b');groupTitle.textContent='Concepts in play';group.append(groupTitle);
  for(const concept of matches){
   const item=document.createElement('span');item.className='sentence-concept';
   const name=document.createElement('b');name.textContent=concept.label;
   item.append(name,document.createTextNode(` — ${concept.note} Example: ${concept.example}`));group.append(item);
  }
  panel.append(group);
 }else addRow(panel,'Meaning in context',`Read this as a ${meta.role.label.toLowerCase()} within “${meta.context}”. Fix its subject, scope and key terms before adding examples.`);
 addRow(panel,'Answer move',meta.role.use);
 addRow(panel,'Recall check',meta.role.check);
};

const textNodesFor=container=>{
 const nodes=[];
 const walker=document.createTreeWalker(container,NodeFilter.SHOW_TEXT,{acceptNode:node=>{
  if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
  if(node.parentElement.closest('.sentence-expansion,.sentence-explain-link,script,style,button'))return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
 }});
 while(walker.nextNode())nodes.push(walker.currentNode);
 return nodes;
};
const locate=(nodes,offset)=>{
 let cursor=0;
 for(const node of nodes){
  const end=cursor+node.nodeValue.length;
  if(offset<=end)return {node,offset:Math.max(0,offset-cursor)};
  cursor=end;
 }
 const node=nodes[nodes.length-1];return {node,offset:node.nodeValue.length};
};
const sentenceSegments=text=>{
 if(typeof Intl.Segmenter==='function')return [...new Intl.Segmenter('en',{granularity:'sentence'}).segment(text)].map(item=>({index:item.index,text:item.segment}));
 return [...text.matchAll(/[^.!?]+(?:[.!?]+[”’"']?|$)/g)].map(item=>({index:item.index,text:item[0]}));
};
const contextFor=container=>{
 const section=container.closest('.book-section,.recall');
 const heading=section?.querySelector(':scope > h2');
 return heading?.textContent.replace(/^\d+\.\s*/,'').trim()||'this section';
};
const annotateContainer=(container,state)=>{
 if(container.dataset.sentenceNotes==='true')return 0;
 if(container.querySelector('p,ul,ol,table,details,div,section,article,aside'))return 0;
 container.dataset.sentenceNotes='true';
 const nodes=textNodesFor(container);if(!nodes.length)return 0;
 const text=nodes.map(node=>node.nodeValue).join('');
 const candidates=sentenceSegments(text).map(item=>{
  let start=item.index,end=item.index+item.text.length;
  while(start<end&&/\s/.test(text[start]))start++;
  while(end>start&&/\s/.test(text[end-1]))end--;
  return {start,end,sentence:text.slice(start,end)};
 }).filter(item=>item.sentence.length>=20&&(item.sentence.match(/[A-Za-zÀ-ÿ]+/g)||[]).length>=4);
 const context=contextFor(container);
 let count=0;
 for(const item of candidates.reverse()){
  const start=locate(nodes,item.start),end=locate(nodes,item.end);
  if(!start.node||!end.node)continue;
  const range=document.createRange();range.setStart(start.node,start.offset);range.setEnd(end.node,end.offset);
  const fragment=range.extractContents();
  const unit=document.createElement('span');unit.className='sentence-unit';unit.append(fragment);
  const noteId=`sentence-note-${state.bookId}-${++state.counter}`;
  const link=document.createElement('a');link.className='sentence-explain-link';link.href=`#${noteId}`;link.textContent='explain';link.setAttribute('role','button');link.setAttribute('aria-expanded','false');link.setAttribute('aria-controls',noteId);link.setAttribute('aria-label',`Explain: ${item.sentence.slice(0,120)}`);
  const panel=document.createElement('span');panel.className='sentence-expansion';panel.id=noteId;panel.hidden=true;panel.setAttribute('role','note');
  const role=roles[classify(item.sentence)];
  link.addEventListener('click',event=>{
   event.preventDefault();const opening=panel.hidden;
   if(opening)buildExpansion(panel,{sentence:item.sentence,context,role});
   panel.hidden=!opening;link.setAttribute('aria-expanded',String(opening));link.textContent=opening?'hide':'explain';
  });
  unit.append(document.createTextNode(' '),link,panel);range.insertNode(unit);count++;
 }
 return count;
};

const apply=(root,{bookId='00'}={})=>{
 const state={bookId,counter:0};
 const selector='.book-head .dek,.book-section p,.book-section li,.book-section td,.book-section th,.book-section .chain,.book-section .formula,.book-section .argument-chain,.book-section .comparison>div,.book-section .revision-grid>div,.book-section .thinker-card,.book-section .why,.recall li';
 let total=0;root.querySelectorAll(selector).forEach(container=>{total+=annotateContainer(container,state)});
 const meta=root.querySelector('.book-meta');
 if(meta){
  const count=document.createElement('span');count.className='sentence-note-count';count.textContent=`${total} hidden sentence explanations`;count.title='Select “explain” after a sentence to open its deeper meaning and exam use.';meta.append(count);
 }
 root.dataset.sentenceExplanations=String(total);
 return total;
};

document.addEventListener('keydown',event=>{
 if(event.key!=='Escape')return;
 document.querySelectorAll('.sentence-expansion:not([hidden])').forEach(panel=>{
  panel.hidden=true;const link=document.querySelector(`[aria-controls="${panel.id}"]`);if(link){link.setAttribute('aria-expanded','false');link.textContent='explain';}
 });
});
const inspect=sentence=>({role:roles[classify(sentence)].label,concepts:conceptsFor(sentence).map(concept=>concept.label)});
window.SentenceNotes={apply,inspect};
})();

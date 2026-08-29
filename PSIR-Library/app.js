const books=[
['01','Syllabus & Master Roadmap','Official 2026 syllabus, nineteen-book map, study cycles and source method.','syllabus roadmap strategy'],
['02','Political Theory & Theories of the State','Meaning, approaches and liberal, neoliberal, Marxist, pluralist, postcolonial and feminist state theory.','political theory state liberal marxist feminist'],
['03','Justice, Equality, Rights, Democracy & Power','Rawls and his critics; equality, freedom, rights, democracy, hegemony, ideology and legitimacy.','justice rawls equality rights democracy power'],
['04','Political Ideologies','Liberalism, socialism, Marxism, fascism, Gandhism and feminism in comparison.','ideology liberalism socialism marxism fascism gandhi feminism'],
['05','Western Political Thought','Plato to Arendt through problems of order, liberty, property, class, hegemony and action.','plato aristotle machiavelli hobbes locke mill marx gramsci arendt'],
['06','Indian Political Thought','Dharmasastra, Arthashastra, Buddhist traditions, Sir Syed, Aurobindo, Gandhi, Ambedkar and M. N. Roy.','indian thought dharma kautilya buddha sir syed aurobindo ambedkar roy'],
['07','Indian Nationalism & Constitution-Making','Strategies, perspectives, colonial legacies and social-political visions in Constitution-making.','nationalism freedom struggle constitution constituent assembly'],
['08','Constitution, Institutions & Federalism','Rights, Parliament, executive, judiciary, commissions, local government and centre-state relations.','constitution parliament supreme court federalism panchayat institutions'],
['09','Indian Political Economy, Identity & Movements','Development paths, caste, religion, ethnicity, parties, elections, pressure groups and social movements.','planning caste religion parties elections movements'],
['10','Comparative Politics','Approaches, comparative method, state, representation, participation and globalisation.','comparative politics state parties participation globalisation'],
['11','IR Approaches & Core Concepts','Idealist, realist, Marxist, functionalist and systems approaches; power, security and deterrence.','ir theory realism idealism marxism power security deterrence'],
['12','International Order & Global Political Economy','Cold War, NAM, post-Cold War order, Bretton Woods, NIEO, WTO and world capitalism.','cold war bipolarity nam unipolarity global economy bretton woods wto'],
['13','United Nations, Regionalism & Global Concerns','UN performance and reform, regional organisations, rights, environment, gender, terrorism and proliferation.','un reform eu asean apec saarc human rights climate terrorism'],
['14','Indian Foreign Policy & Non-Alignment','Determinants, institutions, strategic autonomy, phases of NAM and continuity with change.','india foreign policy nam strategic autonomy'],
['15','India & South Asia','Neighbourhood relations, SAARC, connectivity, water, borders, migration and regional order.','south asia pakistan bangladesh nepal sri lanka bhutan maldives afghanistan'],
['16','India, Global South & Major Powers','Africa, Latin America, US, EU, Japan, China, Russia and multi-alignment.','global south usa china russia eu japan africa latin america'],
['17','Nuclear Policy & Contemporary Foreign-Policy Dossier','India’s nuclear evolution, UN role and dated issue briefs for contemporary crises and coalitions.','nuclear policy un peacekeeping west asia indo pacific brics quad'],
['18','PYQ Theme Workbook','Recurring Paper I and II demands, theme drills and self-evaluation.','pyq previous questions practice themes'],
['19','Answer-Writing Manual','Optional directives, scholar use, argument architecture, model answers and timed revision.','answer writing quotations scholars model answers revision']
];
const slug=t=>t.toLowerCase().replaceAll('&','and').replaceAll(/[^a-z0-9]+/g,'-').replace(/-$/,'');
const grid=document.querySelector('#book-grid');for(const [n,t,d,s] of books){const a=document.createElement('a');a.className='book-card'+(n==='01'?' featured':'');a.href=`books/${n}-${slug(t)}.html`;a.dataset.search=(t+' '+d+' '+s).toLowerCase();a.innerHTML=`<span class="number">${n}</span>${n==='01'?'<span class="tag">START HERE</span>':''}<h3>${t}</h3><p>${d}</p><span class="open">Open book →</span>`;grid.append(a)}
const q=document.querySelector('#search'),e=document.querySelector('#empty');q?.addEventListener('input',()=>{let n=0;document.querySelectorAll('.book-card').forEach(c=>{const y=c.dataset.search.includes(q.value.toLowerCase().trim());c.hidden=!y;if(y)n++});e.hidden=!!n});

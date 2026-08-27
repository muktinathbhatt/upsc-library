const books=[
  ['02','Economic Foundations','Scarcity, demand, supply, markets, national income and the circular flow.','foundations scarcity demand supply market gdp gnp national income'],
  ['03','Growth, Development & Jobs','Growth drivers, structural transformation, unemployment and demographic change.','growth development employment jobs demographic dividend productivity'],
  ['04','Money, Banking & Inflation','Money creation, RBI, monetary policy, inflation and financial stability.','money banking rbi inflation monetary policy repo npa'],
  ['05','Public Finance & Budgeting','Taxation, expenditure, deficits, debt, fiscal federalism and the Union Budget.','budget taxation gst deficit debt finance commission fiscal policy'],
  ['06','External Sector','Balance of payments, exchange rates, trade, capital flows and global institutions.','external trade bop forex exchange rate wto imf world bank'],
  ['07','Agriculture & Food Economy','Cropping, irrigation, MSP, subsidies, PDS, food security and land reforms.','agriculture msp subsidy pds food security land reforms irrigation'],
  ['08','Industry, Infrastructure & Investment','Liberalisation, industrial policy, logistics, energy and investment models.','industry liberalisation infrastructure energy roads railways ppp investment'],
  ['09','Planning & Resource Mobilisation','Indian planning, markets, savings, investment, institutions and federal development.','planning resources savings investment niti aayog federalism'],
  ['10','Inclusive Growth & Human Development','Poverty, inequality, health, education, gender, finance and welfare delivery.','inclusive poverty inequality health education welfare financial inclusion'],
  ['11','Prelims Master Book','High-yield facts, conceptual traps, statement logic and practice questions.','prelims mcq facts traps practice revision'],
  ['12','Mains Answer-Writing Manual','Frameworks, diagrams, examples, model structures and thematic questions.','mains answers pyq diagrams case studies essay']
];
const grid=document.querySelector('#book-grid');
for(const [n,title,desc,terms] of books){const a=document.createElement('a');a.className='book-card';a.href=`books/${n}-${title.toLowerCase().replaceAll('&','and').replaceAll(/[^a-z0-9]+/g,'-').replace(/-$/,'')}.html`;a.dataset.search=`${title} ${desc} ${terms}`.toLowerCase();a.innerHTML=`<span class="number">${n}</span><h3>${title}</h3><p>${desc}</p><span class="open">Open book →</span>`;grid.append(a)}
const input=document.querySelector('#search'),empty=document.querySelector('#empty');input?.addEventListener('input',()=>{let shown=0;document.querySelectorAll('.book-card').forEach(card=>{const yes=card.dataset.search.includes(input.value.trim().toLowerCase());card.hidden=!yes;if(yes)shown++});empty.hidden=shown>0});

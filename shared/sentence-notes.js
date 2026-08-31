(()=>{
const concepts=[
 {terms:['need'],label:'Need',note:'A distributive rule that gives priority according to deprivation or the requirements of a minimally adequate life.',example:'Essential healthcare is normally allocated by urgency rather than achievement.',when:/\b(desert|equality|entitlement|distribut|justice|allocat|resource)\b/i},
 {terms:['desert'],label:'Desert',note:'A distributive rule that connects reward to effort, contribution, sacrifice or achievement.',example:'A prize may track performance, although opportunity and social luck complicate the claim.'},
 {terms:['entitlement'],label:'Entitlement',note:'A historical rule: a holding is just when it arose through just acquisition, transfer and rectification, not because it fits a preferred pattern.',example:'Nozick can defend unequal holdings if their history is just.'},
 {terms:['equality'],label:'Equality',note:'A demand to remove morally arbitrary hierarchy; its metric may be status, opportunity, resources, welfare or capabilities.',example:'Equal votes express civic equality even when incomes differ.'},
 {terms:['justice'],label:'Justice',note:'The principles governing fair institutions, relations, procedures, recognition and the distribution of benefits and burdens.',example:'A just allocation must identify its metric, subjects, procedure and remedy.'},
 {terms:['liberty','freedom'],label:'Liberty',note:'The protected space or effective capacity to choose and act; negative, positive and republican accounts disagree about what threatens it.',example:'Non-interference can coexist with domination, which is why republican liberty adds non-domination.'},
 {terms:['rights','human rights'],label:'Rights',note:'Justified claims that impose duties or constraints on others and institutions.',example:'A constitutional right is not merely an aspiration: it identifies a claimant, duty-bearer and remedy.'},
 {terms:['power'],label:'Power',note:'The capacity to shape conduct, agendas, preferences or structures, including without a visible command.',example:'Lukes adds agenda control and preference formation to observable decision-making.',skip:/\b(purchasing power|power sector|electric power|thermal power|wind power|hydropower|power generation)\b/i},
 {terms:['authority'],label:'Authority',note:'Power regarded as having a valid claim to obedience; it therefore joins capacity with justification.',example:'A lawful order may possess authority even when coercion is not used.'},
 {terms:['legitimacy'],label:'Legitimacy',note:'The justified or socially accepted right to rule, distinct from legality and mere effectiveness.',example:'A regime can be effective yet face a legitimacy deficit.'},
 {terms:['state'],label:'State',note:'A territorially organised structure of public authority claiming supremacy and maintaining institutions of rule.',example:'State capacity, autonomy and social embeddedness are separate analytical dimensions.',subjects:['psir']},
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
 {terms:['demand'],label:'Demand',note:'The quantities buyers are willing and able to purchase at different prices, other things equal.',example:'A change in price moves along demand; income or tastes can shift the entire curve.',subjects:['economics']},
 {terms:['supply'],label:'Supply',note:'The quantities sellers are willing to offer at different prices, other things equal.',example:'Input costs, technology and taxes can shift supply.',subjects:['economics']},
 {terms:['equilibrium'],label:'Market equilibrium',note:'The price and quantity at which intended demand equals intended supply.',example:'A shock produces pressure for adjustment when buyers’ and sellers’ plans do not match.',subjects:['economics']},
 {terms:['price ceiling'],label:'Price ceiling',note:'A legal maximum price; when set below equilibrium it can create excess demand or shortage.',example:'Its outcome depends on enforcement, rationing and whether supply responds.',subjects:['economics']},
 {terms:['price floor'],label:'Price floor',note:'A legal minimum price; when set above equilibrium it can create excess supply or surplus.',example:'The surplus may persist unless buyers, storage or public procurement absorb it.',subjects:['economics']},
 {terms:['elasticity','elastic'],label:'Elasticity',note:'The responsiveness of one variable to a change in another, commonly quantity demanded or supplied to price.',example:'More substitutes generally make demand more price-elastic.',subjects:['economics']},
 {terms:['tax incidence'],label:'Tax incidence',note:'The actual distribution of a tax burden between buyers and sellers, determined by relative elasticities rather than legal payment alone.',example:'The less elastic side generally bears more of the burden.',subjects:['economics']},
 {terms:['state capacity'],label:'State capacity',note:'The ability of public institutions to diagnose, coordinate, implement, learn and enforce policy.',example:'A policy can be well designed yet fail without staff, information, finance and feedback.',subjects:['economics','psir']},
 {terms:['scarcity'],label:'Scarcity',note:'The condition in which available resources cannot satisfy every competing use, making choice and trade-offs unavoidable.',example:'Using land for housing can foreclose agricultural or ecological uses.'},
 {terms:['opportunity cost'],label:'Opportunity cost',note:'The value of the best alternative forgone when a choice is made.',example:'Public spending on one programme limits the resources available for another use.'},
 {terms:['market failure'],label:'Market failure',note:'A situation in which decentralised market choices do not produce an efficient or socially acceptable outcome.',example:'Pollution, monopoly power and public goods can justify carefully designed public action.'},
 {terms:['public goods'],label:'Public goods',note:'Goods that are substantially non-rival and non-excludable, creating incentives to free-ride on others’ provision.',example:'Street lighting illustrates why private markets may under-supply a public good.'},
 {terms:['externality','externalities'],label:'Externality',note:'A cost or benefit imposed on others but not fully reflected in the decision-maker’s price calculation.',example:'A factory’s pollution transfers a social cost to nearby residents.'},
 {terms:['inflation'],label:'Inflation',note:'A sustained increase in the general price level that redistributes purchasing power and can distort planning.',example:'Food-price inflation affects low-income households disproportionately because essentials occupy more of their budgets.'},
 {terms:['monetary policy'],label:'Monetary policy',note:'Central-bank action affecting liquidity, interest rates, credit conditions and inflation expectations.',example:'A policy-rate change works through banks, borrowers, expectations and exchange-rate channels rather than instantly.'},
 {terms:['fiscal policy'],label:'Fiscal policy',note:'Government decisions on taxation, spending and borrowing used to influence allocation, distribution and macroeconomic demand.',example:'A counter-cyclical spending increase may support demand but raises financing and implementation questions.'},
 {terms:['budget deficit','fiscal deficit'],label:'Fiscal deficit',note:'The gap between government expenditure and non-borrowed receipts over a fiscal period.',example:'Its significance depends on the use of borrowing, growth, interest costs and fiscal credibility.'},
 {terms:['gdp','gross domestic product'],label:'GDP',note:'The market value of final goods and services produced within an economy during a period.',example:'GDP measures output, not by itself distribution, unpaid work, environmental loss or wellbeing.'},
 {terms:['economic growth','growth','grows'],label:'Economic growth',note:'Economic growth means that an economy makes more goods and services over time. Use real values. Do not confuse growth with development.',elaboration:'Growth lasts when production capacity increases. A rise after a fall can only restore old output. Output per person rises only when output rises faster than population.',example:'A firm gets reliable power, better roads, and skilled workers. The firm can make more goods with each worker. This raises real output.',answer:'In your answer, first define growth. State that growth is not the same as development. Then show the links between investment, people, technology, and institutions. State that growth must also create jobs, reduce unfair gaps, and protect the environment.'},
 {terms:['investment','productive investment'],label:'Productive investment',note:'Productive investment pays for assets that help people make goods and services. These assets include machines, roads, power systems, and research.',elaboration:'Investment can increase demand now. It can also increase supply later. It works well only when the asset is useful, complete, and well maintained.',example:'A freight line works best when it has roads to factories, reliable power, storage, and firms that can use it.',answer:'In your answer, separate the short-term demand effect from the long-term supply effect. Then state the need for good project choice, finance, maintenance, and private investment.'},
 {terms:['human capital','skills','education and health'],label:'Human capital',note:'Human capital is the health, education, and skills that help people do work well and adapt to new work.',elaboration:'Human capital helps people use technology, change jobs, and create new ideas. It is a growth input and a social result.',example:'A worker can move to better work when the worker has basic learning, good health, training, and a way to reach jobs.',answer:'Use this term in answers about jobs, the demographic dividend, inclusion, or productivity. Link health, school education, skills, women’s work, and job matching.'},
 {terms:['productivity','labour productivity'],label:'Productivity',note:'Productivity shows how much output people or machines make from a given input.',elaboration:'Productivity rises when people use better tools, skills, systems, and infrastructure. It does not mean that people must work for more hours.',example:'Two small firms have the same number of workers. The firm with power, machines, trained workers, and market access makes more output.',answer:'In your answer, name the measure. Then find the main problem: skills, technology, transport, finance, or management. Link the fix to better jobs and stronger firms.'},
 {terms:['total factor productivity','tfp'],label:'Total factor productivity',note:'Total factor productivity shows how well labour and capital work together to make output.',elaboration:'It helps explain why two economies with similar workers and machines can grow at different rates. It measures better use of inputs. It is not a machine that a firm can buy.',example:'Better digital systems, management, research, competition, and clear rules can help existing workers and machines make more output.',answer:'Use TFP to show why investment alone is not enough. Add innovation, skill, competition, and good institutions to your growth answer.'},
 {terms:['capital deepening'],label:'Capital deepening',note:'Capital deepening means that each worker gets more or better machines, tools, or infrastructure.',elaboration:'More capital can help each worker make more output. The gain falls when skills, technology, demand, or maintenance do not keep pace.',example:'New machines help a factory only when workers can use them, inputs arrive on time, and buyers want the extra goods.',answer:'Use this term to explain why investment can raise productivity. Then add human capital, innovation, and good institutions. These factors make the investment work.'},
 {terms:['knowledge spillover','knowledge spillovers'],label:'Knowledge spillover',note:'A knowledge spillover happens when research, learning, or a new idea helps other people or firms.',elaboration:'The firm that pays for the new idea may not get all the benefit. Firms may then spend too little on research or training. This gives a reason for careful public support.',example:'One firm trains workers or develops a new process. Nearby firms and workers later use the same knowledge.',answer:'In an industrial policy answer, use spillovers to support research, clusters, skills, and early learning. Also state that support must not protect weak firms for too long.'},
 {terms:['institutions','institutional quality'],label:'Institutions',note:'Institutions are the rules and public bodies that shape how people work, trade, and solve problems.',elaboration:'Institutions make plans work. They can enforce contracts, give clear rules, share data, and stop misuse of public money. The same investment can give different results in different places.',example:'A road gives less benefit when land records are wrong, contracts are weak, permits are slow, or maintenance fails.',answer:'In your answer, do not use “institutions” as a general word. Name the task: enforce contracts, give clear rules, build local capacity, use data, or handle complaints.'},
 {terms:['structural transformation'],label:'Structural transformation',note:'Structural transformation moves workers and output from low-productivity work to higher-productivity work.',elaboration:'It is not only a move out of farming. New jobs must be productive and safe. Workers also need skills, transport, housing, finance, and firms that can grow.',example:'A rural worker gains when a non-farm job gives higher and more stable output than the work that the worker left. Farm value chains must also improve.',answer:'Use this term in answers about jobs, cities, or farming. Explain the problem in rural areas and the new opportunity in towns and firms. End with decent work, housing, transport, and social protection.'},
 {terms:['premature deindustrialisation','premature deindustrialization'],label:'Premature deindustrialisation',note:'Premature deindustrialisation happens when manufacturing stops growing early, before a country becomes high income.',elaboration:'Manufacturing can create many jobs. It can also help firms learn, export, and build links with other firms. Services can grow fast, but they may not give enough jobs to people with basic skills.',example:'Manufacturing does not grow. Workers then move to informal construction or low-productivity services instead of formal factory work.',answer:'Use this term in answers about jobless growth or industrial policy. Explain the risk. Then give a balanced plan for labor-intensive industry, services, skills, transport, and strong cities.'},
 {terms:['human development'],label:'Human development',note:'The expansion of people’s capabilities and real freedoms, especially health, education and a decent standard of living.',example:'Income is an important means, but not the sole measure, of development.'},
 {terms:['poverty'],label:'Poverty',note:'Deprivation of income, assets, capabilities, security or social participation, depending on the chosen measure.',example:'A poverty line captures one threshold but may not reveal vulnerability or multidimensional deprivation.'},
 {terms:['unemployment'],label:'Unemployment',note:'The condition in which persons willing and able to work cannot find suitable paid work, with forms differing by context.',example:'Open unemployment, underemployment and disguised unemployment require different evidence and remedies.'},
 {terms:['food security'],label:'Food security',note:'Reliable physical, social and economic access to sufficient, safe and nutritious food for an active life.',example:'Availability alone is inadequate if affordability, access or nutrition remains weak.'},
 {terms:['balance of payments'],label:'Balance of payments',note:'The systematic record of an economy’s transactions with the rest of the world, including current, capital and financial accounts.',example:'A current-account deficit can be sustainable or risky depending on financing and productive capacity.'},
 {terms:['current account'],label:'Current account',note:'The balance of trade in goods and services, primary income and transfers with the rest of the world.',example:'A trade deficit can be offset partly by services exports or remittances.'},
 {terms:['exchange rate'],label:'Exchange rate',note:'The price of one currency in terms of another, shaped by trade, capital flows, inflation, policy and expectations.',example:'Depreciation may aid price competitiveness while raising imported-input and debt costs.'},
 {terms:['financial inclusion'],label:'Financial inclusion',note:'Effective access to appropriate, affordable and responsibly delivered formal financial services.',example:'An account is not full inclusion when credit, insurance, digital access or consumer protection remain absent.'},
 {terms:['infrastructure'],label:'Infrastructure',note:'Foundational physical, digital and social systems that reduce transaction costs and enable production and welfare.',example:'A road’s effect depends on complementary logistics, maintenance, local demand and institutions.'},
 {terms:['plate tectonics','tectonic plates'],label:'Plate tectonics',note:'The movement and interaction of lithospheric plates that explains major patterns of earthquakes, volcanoes and mountain building.',example:'A plate boundary type shapes the likely landform and hazard, but local geology affects impact.'},
 {terms:['weathering'],label:'Weathering',note:'The in-situ physical, chemical or biological breakdown of rock that supplies material for soils and landforms.',example:'Chemical weathering is intensified by moisture and temperature, whereas frost action needs repeated freezing.'},
 {terms:['geomorphology'],label:'Geomorphology',note:'The study of landforms and the processes, materials and time scales that create and modify them.',example:'A landform should be explained through process, structure, climate and stage of development rather than named alone.'},
 {terms:['atmosphere'],label:'Atmosphere',note:'The layered envelope of gases whose composition, circulation and energy balance shape weather and climate.',example:'A local weather event must be related to pressure, moisture, stability and circulation.'},
 {terms:['monsoon'],label:'Monsoon',note:'A seasonally reversing wind and rainfall system produced by differential heating, pressure gradients, circulation and regional controls.',example:'The Indian monsoon cannot be reduced to land–sea contrast because jets, oceans, relief and intra-seasonal variability matter.'},
 {terms:['el niño','el nino','enso'],label:'ENSO',note:'A coupled ocean–atmosphere variability in the tropical Pacific that alters global circulation and probabilistically affects regional climate.',example:'ENSO changes risk patterns; it does not mechanically determine every Indian monsoon outcome.'},
 {terms:['climate change'],label:'Climate change',note:'Long-term shifts in climate statistics driven today primarily by human greenhouse-gas emissions, expressed through interacting physical and social risks.',example:'A single event is evidence of weather; attribution assesses how climate change altered its probability or intensity.'},
 {terms:['ocean current','ocean currents'],label:'Ocean currents',note:'Persistent large-scale seawater movements driven by wind, density contrasts, Earth’s rotation and basin geometry.',example:'Currents redistribute heat and nutrients, affecting coasts, fisheries and climate.'},
 {terms:['watershed','drainage basin'],label:'Watershed',note:'The land area draining to a common outlet, linking upstream land use with downstream water, sediment and flood outcomes.',example:'Watershed management requires attention to slopes, soils, vegetation and users across the basin.'},
 {terms:['soil'],label:'Soil',note:'A dynamic natural body of minerals, organic matter, water, air and organisms formed through parent material, climate, relief, biota and time.',example:'Soil conservation must match the specific erosion process and local land use.'},
 {terms:['biodiversity'],label:'Biodiversity',note:'Variation within species, between species and across ecosystems that supports resilience, ecological processes and human wellbeing.',example:'Species counts alone may miss genetic diversity and habitat connectivity.'},
 {terms:['ecosystem'],label:'Ecosystem',note:'A functional system of organisms interacting with one another and with their physical environment through energy and nutrient flows.',example:'Protecting an ecosystem requires attention to relationships and processes, not only individual species.'},
 {terms:['urbanisation','urbanization'],label:'Urbanisation',note:'The growth and transformation of urban populations, settlements, economies and ways of life.',example:'Urban growth can create agglomeration gains while intensifying housing, service and ecological pressures.'},
 {terms:['migration'],label:'Migration',note:'Movement of people across boundaries for work, security, family, education or other purposes, shaped by both origin and destination conditions.',example:'It is rarely explained by a single push or pull factor.'},
 {terms:['disaster risk'],label:'Disaster risk',note:'The potential for loss produced by the interaction of hazard, exposure, vulnerability and limited coping capacity.',example:'A hazard becomes a disaster through social vulnerability as well as physical intensity.'},
 {terms:['historical source','historical sources'],label:'Historical source',note:'Material—textual, archaeological, visual, oral or environmental—used to reconstruct the past, always requiring provenance and bias assessment.',example:'A royal inscription can illuminate state claims while remaining silent on many social experiences.'},
 {terms:['chronology'],label:'Chronology',note:'The ordering of events in time, necessary for explanation but insufficient by itself to establish causation or significance.',example:'A timeline should be followed by analysis of structures, actors and consequences.'},
 {terms:['state formation'],label:'State formation',note:'The historical consolidation of authority, extraction, coercion, administration and legitimacy over a territory and population.',example:'States develop through bargains and conflicts with social groups, not merely through conquest.'},
 {terms:['empire','imperial'],label:'Empire',note:'A political order in which a dominant centre rules or controls diverse territories and peoples through differentiated authority.',example:'Imperial power combines coercion, collaboration, revenue systems and ideological claims.'},
 {terms:['colonialism','colonial'],label:'Colonialism',note:'A structure of external domination that reorganises economy, knowledge, institutions and social hierarchy for metropolitan power.',example:'Railways or law may have long-term effects while still serving unequal colonial priorities.'},
 {terms:['social reform'],label:'Social reform',note:'Organised efforts to transform discriminatory customs, institutions and social relations through critique, mobilisation and law.',example:'Legal change gains force when linked to social organisation and shifts in public norms.'},
 {terms:['revolt','rebellion'],label:'Revolt',note:'Collective resistance to authority that must be interpreted through grievances, organisation, political language and local context.',example:'Calling a revolt spontaneous can obscure networks, leadership and prior forms of resistance.'},
 {terms:['industrial revolution'],label:'Industrial Revolution',note:'A long transformation of production, energy, technology, labour and social relations, first concentrated in particular regions before spreading unevenly.',example:'Industrialisation raised productive capacity while creating new forms of urban poverty and class conflict.'},
 {terms:['imperialism'],label:'Imperialism',note:'The extension of power through formal rule or informal economic, political and strategic domination.',example:'It may operate through trade, finance and unequal treaties as well as annexation.'},
 {terms:['decolonisation','decolonization'],label:'Decolonisation',note:'The ending of formal colonial rule and the continuing contest to transform colonial structures of power and knowledge.',example:'Political independence may precede economic or cultural decolonisation.'},
 {terms:['freedom struggle','national movement'],label:'Freedom struggle',note:'The multi-stranded anti-colonial mobilisation through which political independence, social reform and competing visions of nationhood were debated.',example:'Its history includes mass action, constitutional politics, revolutionary currents and social movements.'},
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

const termPattern=term=>new RegExp(`(^|[^a-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'\\s+')}([^a-z0-9]|$)`,'i');
const conceptsFor=(sentence,subject='')=>concepts.filter(concept=>(!concept.subjects||concept.subjects.includes(subject))&&(!concept.when||concept.when.test(sentence))&&(!concept.skip||!concept.skip.test(sentence))&&concept.terms.some(term=>termPattern(term).test(sentence))).slice(0,4);
const sentenceGuides=[
 {subject:'economics',when:/^Start with the simple idea: an economy grows when it can produce more useful goods and services/i,text:'This is the basic meaning of economic growth. The economy makes more goods and services. It does not only charge higher prices. Next, ask what caused the higher output.'},
 {subject:'economics',when:/^Demand is the quantity buyers are willing and able to purchase at different prices/i,text:'Demand is more than a wish to buy. The buyer must want the good and have the money to buy it. Keep income, tastes, and related prices the same. Then you can see the effect of price.'},
 {subject:'economics',when:/^A price change causes movement along the curve/i,text:'Do not confuse these two changes. A change in the price of the good moves a buyer on the same demand curve. A change in income, taste, or a related price shifts the whole curve.'},
 {subject:'economics',when:/^Supply is the quantity sellers offer at different prices/i,text:'Supply is a list of quantities that sellers offer at different prices. It is not one fixed quantity. Costs, technology, and expectations also change what firms can offer.'},
 {subject:'economics',when:/^Technology, input costs, taxes, subsidies, expectations and the number of firms shift supply/i,text:'These factors change the cost or the capacity of firms. Firms then offer a different quantity at each price. This shifts supply. It does not move a firm along the same supply curve.'},
 {subject:'economics',when:/^Equilibrium is where intended demand equals intended supply/i,text:'Equilibrium is the market-clearing point. At this point, buyers plan to buy the same amount that sellers plan to sell. It is not a moral goal. Below this price, demand is more than supply. Above this price, supply is more than demand.'},
 {subject:'economics',when:/^A binding price ceiling below equilibrium causes shortage/i,text:'A price ceiling is binding when it stops price from reaching the market-clearing level. At the lower price, more people want to buy than firms want to sell. A shortage occurs. A price floor above equilibrium does the opposite. It can create surplus. Public purchase can remove surplus, but the public budget and storage system then pay the cost.'},
 {subject:'economics',when:/^Price elasticity of demand =/i,text:'This formula shows how much quantity changes when price changes. A value above one means that quantity changes more than price. A value below one means that quantity changes less. Use percent change so that you can compare different goods.'},
 {subject:'economics',when:/^Elasticity depends on substitutes, necessity, budget share and time/i,text:'Buyers can adjust more easily when close substitutes exist and when they have time. Demand then becomes more elastic. A necessity or a small part of the budget gives buyers less choice. Demand then becomes less elastic.'},
 {subject:'economics',when:/^Tax incidence falls more heavily on the less elastic side/i,text:'The legal payer of a tax is not always the person who pays most of the economic cost. The side with fewer choices changes quantity less. That side pays more of the cost. In an answer, separate statutory remittance from economic incidence.'}
];
const namesFor=matches=>matches.map(concept=>concept.label).join(matches.length===2?' and ':', ');
const generalGuide=(matches)=>{
 const names=namesFor(matches);
 if(matches.length===1)return `This sentence uses ${names} to explain something. Ask three questions: What causes it? How does it work? What happens next?`;
 return `This sentence links ${names}. Do not learn these terms as separate words. Find the link between them. Then follow the result of that link.`;
};
const guideFor=(sentence,matches,subject)=>sentenceGuides.find(guide=>(!guide.subject||guide.subject===subject)&&guide.when.test(sentence))?.text||generalGuide(matches);
const buildExpansion=(panel,matches,sentence,subject)=>{
 if(panel.dataset.ready)return;
 panel.dataset.ready='true';
 const title=document.createElement('span');title.className='sentence-expansion-title';title.textContent='Explanation in context';panel.append(title);
 const explanation=document.createElement('span');explanation.className='sentence-expansion-row';
 const label=document.createElement('b');label.textContent='What this sentence means: ';
 explanation.append(label,document.createTextNode(guideFor(sentence,matches,subject)));panel.append(explanation);
 const group=document.createElement('span');group.className='sentence-concepts';
 for(const concept of matches){
  const item=document.createElement('span');item.className='sentence-concept';
  const name=document.createElement('b');name.textContent=concept.label;
  const core=document.createElement('span');core.className='sentence-expansion-row';core.append(name,document.createTextNode(` — ${concept.note}`));
  const elaboration=concept.elaboration?document.createElement('span'):null;
  if(elaboration){
   elaboration.className='sentence-expansion-row';
   const elaborationLabel=document.createElement('b');elaborationLabel.textContent='Why it matters: ';
   elaboration.append(elaborationLabel,document.createTextNode(concept.elaboration));
  }
  const application=document.createElement('span');application.className='sentence-expansion-row';
  const applicationLabel=document.createElement('b');applicationLabel.textContent='Example: ';
  application.append(applicationLabel,document.createTextNode(concept.example));
  const answer=concept.answer?document.createElement('span'):null;
  if(answer){
   answer.className='sentence-expansion-row';
   const answerLabel=document.createElement('b');answerLabel.textContent='UPSC answer use: ';
   answer.append(answerLabel,document.createTextNode(concept.answer));
  }
  item.append(core);if(elaboration)item.append(elaboration);item.append(application);if(answer)item.append(answer);group.append(item);
 }
 panel.append(group);
};

const textNodesFor=container=>{
 const nodes=[];
 const walker=document.createTreeWalker(container,NodeFilter.SHOW_TEXT,{acceptNode:node=>{
  if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
  if(node.parentElement.closest('.sentence-expansion,.sentence-explain-link,.beginner-visual-map,script,style,button'))return NodeFilter.FILTER_REJECT;
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
 let count=0;
 for(const item of candidates.reverse()){
  const matches=conceptsFor(item.sentence,state.subject);
  if(!matches.length)continue;
  const start=locate(nodes,item.start),end=locate(nodes,item.end);
  if(!start.node||!end.node)continue;
  const range=document.createRange();range.setStart(start.node,start.offset);range.setEnd(end.node,end.offset);
  const fragment=range.extractContents();
  const unit=document.createElement('span');unit.className='sentence-unit';unit.append(fragment);
  const noteId=`sentence-note-${state.bookId}-${++state.counter}`;
  const link=document.createElement('a');link.className='sentence-explain-link';link.href=`#${noteId}`;link.textContent='explain';link.setAttribute('role','button');link.setAttribute('aria-expanded','false');link.setAttribute('aria-controls',noteId);link.setAttribute('aria-label',`Explain: ${matches.map(concept=>concept.label).join(', ')}`);
  const panel=document.createElement('span');panel.className='sentence-expansion';panel.id=noteId;panel.hidden=true;panel.setAttribute('role','note');
  link.addEventListener('click',event=>{
   event.preventDefault();const opening=panel.hidden;
   if(opening)buildExpansion(panel,matches,item.sentence,state.subject);
   panel.hidden=!opening;link.setAttribute('aria-expanded',String(opening));link.textContent=opening?'hide':'explain';
  });
  unit.append(document.createTextNode(' '),link,panel);range.insertNode(unit);count++;
 }
 return count;
};

const apply=(root,{bookId='00',subject=''}={})=>{
 const state={bookId,subject,counter:0};
 const selector='.book-head .dek,.book-section p,.book-section li,.book-section td,.book-section th,.book-section .chain,.book-section .formula,.book-section .argument-chain,.book-section .comparison>div,.book-section .revision-grid>div,.book-section .thinker-card,.book-section .why,.recall li';
 let total=0;root.querySelectorAll(selector).forEach(container=>{total+=annotateContainer(container,state)});
 const meta=root.querySelector('.book-meta');
 if(meta){
  const count=document.createElement('span');count.className='sentence-note-count';count.textContent=`${total} contextual explanations`;count.title='Select “explain” after a sentence to unpack its meaning, mechanism and relevant terms.';meta.append(count);
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
const inspect=(sentence,subject='')=>{const matches=conceptsFor(sentence,subject);return {concepts:matches.map(concept=>concept.label),explanation:guideFor(sentence,matches,subject),answerUse:matches.filter(concept=>concept.answer).map(concept=>({concept:concept.label,text:concept.answer}))};};
window.SentenceNotes={apply,inspect};
})();

const books = [
  ['01', 'Syllabus & Master Roadmap', 'Completed 16-week plan, source hierarchy, revision system and gap audit.', 'syllabus strategy schedule sources revision'],
  ['02', 'Earth & Geomorphology', 'Earth structure, plate tectonics, rocks, slopes and all major landform systems.', 'earth plate rocks landforms expanded'],
  ['03', 'Atmosphere & Climate', 'Energy, circulation, weather, Indian monsoon, cyclones and climate change.', 'climate monsoon winds cyclone atmosphere'],
  ['04', 'Oceans & Water', 'Ocean basins and circulation, rivers, hydrology, aquifers and marine governance.', 'ocean current tide water river groundwater'],
  ['05', 'Soils, Biomes & Environment', 'Soil processes, Indian soils, ecosystems, biomes and biodiversity geography.', 'soil biome vegetation ecology biodiversity'],
  ['06', 'Physical Geography of India', 'Structure, regions, drainage, monsoon, soils, vegetation and map synthesis.', 'india himalaya rivers monsoon coasts'],
  ['07', 'Resources & Economic Geography', 'Minerals, energy, agriculture, industry, transport and regional development.', 'resources minerals industry agriculture corridors'],
  ['08', 'Human & Settlement Geography', 'Population, migration, rural settlements, urban systems and regional inequality.', 'population migration urbanisation settlements'],
  ['09', 'Hazards & Changing Geography', 'Multi-hazard risk and changing glaciers, rivers, coasts, water bodies and species.', 'hazard disaster glacier coast risk'],
  ['10', 'Map & Atlas Workbook', 'Three offline official map plates and layered India/world retrieval drills.', 'map atlas places official plates'],
  ['11', 'Prelims Master Book', '160 explained questions with statement traps, elimination and error conversion.', 'prelims mcq revision questions'],
  ['12', 'Mains Answer-Writing Manual', 'Sixty blueprints, six model answers, diagrams and an eight-week programme.', 'mains answers diagrams blueprints']
];

const grid = document.querySelector('#book-grid');
for (const [n, t, d, s] of books) {
  const card = document.createElement('a');
  card.className = `book-card${n === '01' ? ' featured' : ''}`;
  card.href = `books/${n}-${t.toLowerCase().replaceAll('&', 'and').replaceAll(/[^a-z0-9]+/g, '-').replace(/-$/, '')}.html`;
  card.dataset.search = `${t} ${d} ${s}`.toLowerCase();
  card.innerHTML = `<span class="number">${n}</span><span class="tag">${n === '01' ? 'START HERE · COMPLETE' : 'EXPANDED'}</span><h3>${t}</h3><p>${d}</p><span class="open">Open book →</span>`;
  grid.append(card);
}

const search = document.querySelector('#search');
const empty = document.querySelector('#empty');
search.addEventListener('input', () => {
  let visible = 0;
  document.querySelectorAll('.book-card').forEach(card => {
    const match = card.dataset.search.includes(search.value.toLowerCase().trim());
    card.hidden = !match;
    if (match) visible += 1;
  });
  empty.hidden = Boolean(visible);
});

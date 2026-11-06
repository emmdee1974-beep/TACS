const content={
 community:{kicker:'HOMELAND · COMMUNITY',title:'Lax Kw’alaams',text:'Explore the community, its history, people, and connections to the surrounding lands and waters.',links:['History','Community','Sm’algyax']},
 lands:{kicker:'HOMELAND · LAND',title:'Our Lands',text:'Explore land-based knowledge, places, stories, and approved cultural information. Sensitive locations stay protected.',links:['Land stories','Places','Learning']},
 waters:{kicker:'HOMELAND · WATER',title:'Our Waters',text:'Discover the waterways, coastal connections, and community knowledge shared with permission.',links:['Waterways','Coastal life','Stories']},
 culture:{kicker:'CULTURE · KNOWLEDGE',title:'Art & Culture',text:'Explore Tsimshian art, materials, tools, artists, and cultural knowledge through community-approved stories.',links:['Art forms','Materials & tools','Artists']},
 archive:{kicker:'COLLECTIONS · ARCHIVE',title:'Digital Archive',text:'Browse photographs, recordings, documents, and catalogued stories. Public access will be limited to approved items.',links:['Photographs','Audio & video','Documents']},
 communities:{kicker:'PEOPLE · COMMUNITIES',title:'Communities',text:'Explore community profiles and learn about each community through its own voice, names, language, and approved content.',links:['Community directory','Map','Language']},
 projects:{kicker:'TACS · PROJECTS',title:'Projects',text:'Follow current cultural, educational, archival, and community projects supported by TACS.',links:['Current projects','Get involved','Updates']},
 history:{kicker:'MEMORY · HISTORY',title:'History',text:'Explore historical photographs, timelines, oral histories, and records with context and attribution.',links:['Timeline','Historical photos','Oral histories']},
 about:{kicker:'TACS · SOCIETY',title:'About TACS',text:'Learn about the Tsimshian Arts and Culture Society, its purpose, people, and work.',links:['Our society','Contact','Board']},
 board:{kicker:'TACS · MEMBERS',title:'Board Portal',text:'The secure board portal will be connected after authentication and private archive services are implemented.',links:['Board information','Sign-in setup','Governance']}
};
const panel=document.getElementById('infoPanel'), drawer=document.getElementById('menuDrawer'), search=document.getElementById('searchPanel'), toast=document.getElementById('toast');
function showPanel(key){const item=content[key]||content.community;document.getElementById('panelKicker').textContent=item.kicker;document.getElementById('panelTitle').textContent=item.title;document.getElementById('panelText').textContent=item.text;const links=document.getElementById('panelLinks');links.innerHTML='';item.links.forEach(label=>{const b=document.createElement('button');b.textContent=label+' ↗';b.addEventListener('click',()=>notify(label+' page will be built in a later stage.'));links.appendChild(b)});panel.classList.remove('hidden');drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');}
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('[data-panel]').forEach(el=>el.addEventListener('click',()=>showPanel(el.dataset.panel)));
document.getElementById('closePanel').addEventListener('click',()=>panel.classList.add('hidden'));
document.getElementById('hintBtn').addEventListener('click',()=>notify('Try clicking one of the glowing places on the landscape.'));
document.getElementById('menuBtn').addEventListener('click',()=>{drawer.classList.toggle('open');document.getElementById('menuBtn').setAttribute('aria-expanded',drawer.classList.contains('open'));drawer.setAttribute('aria-hidden',!drawer.classList.contains('open'));});
document.getElementById('closeMenu').addEventListener('click',()=>drawer.classList.remove('open'));
document.getElementById('searchBtn').addEventListener('click',()=>search.classList.toggle('open'));
document.getElementById('searchClose').addEventListener('click',()=>search.classList.remove('open'));
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')notify('Search will connect to the archive catalogue later.');});
document.getElementById('languageBtn').addEventListener('click',()=>notify('Language selector concept — community-approved language content will be added later.'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){drawer.classList.remove('open');search.classList.remove('open');panel.classList.add('hidden')}});

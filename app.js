const DEFAULT_DATA = {
  empresas:["FGA INGENIEROS S.A.","CORMEI","CIME INGENIEROS","AGEIN","HAUG","M Y S","VERTISUB"],
  trabajos:["Trabajos en caliente","Trabajos en altura","Izaje de Cargas","Aislamiento de Energía","Espacio Confinado"],
  riesgos:["Proyección de partículas incandescentes","Caída de objetos","Caída de carga","Contacto eléctrico"],
  areas:["DPA","DPRA","DIA"],
  lugares:[
    {nombre:"PREHOMOGENEIZACION DE CEMENTO",x:16.25,y:18.5,rect:[5.5, 7.0, 27.0, 30.0]},
    {nombre:"PREHOMOGENEIZACION DE CARBON",x:16.25,y:49.5,rect:[5.5, 37.0, 27.0, 62.0]},
    {nombre:"DESCARGA DE CAMIONES",x:4.15,y:38.0,rect:[0.5, 33.5, 7.8, 42.5]},
    {nombre:"CASETA DE GAS CARBONICO",x:29.5,y:39.0,rect:[26.0, 36.0, 33.0, 42.0]},
    {nombre:"ED. DE TRANSP. Y CRIBADO",x:34.5,y:20.25,rect:[31.0, 17.0, 38.0, 23.5]},
    {nombre:"FILTROS DE MANGAS LINEA II",x:38.25,y:27.35,rect:[34.0, 24.0, 42.5, 30.7]},
    {nombre:"FILTROS DE MANGAS LINEA I",x:38.25,y:33.95,rect:[34.0, 30.7, 42.5, 37.2]},
    {nombre:"FILTRO DE MANGAS",x:37.9,y:39.15,rect:[35.0, 37.0, 40.8, 41.3]},
    {nombre:"HORNOS IDCAR",x:40.4,y:42.35,rect:[37.8, 40.0, 43.0, 44.7]},
    {nombre:"ED. MOLINOS IDCAR",x:33.25,y:45.9,rect:[30.0, 42.0, 36.5, 49.8]},
    {nombre:"GSA 1",x:33.0,y:42.15,rect:[31.0, 39.8, 35.0, 44.5]},
    {nombre:"ED. ALIMENT.",x:36.85,y:43.75,rect:[34.7, 41.0, 39.0, 46.5]},
    {nombre:"ED. DE COMP.",x:36.85,y:48.25,rect:[34.7, 45.8, 39.0, 50.7]},
    {nombre:"TANQ. DIARIO IDCAR",x:37.75,y:51.75,rect:[35.0, 49.5, 40.5, 54.0]},
    {nombre:"SILOS DE CARBON",x:44.4,y:37.9,rect:[41.0, 35.5, 47.8, 40.3]},
    {nombre:"SILOS DE CRUDOS",x:44.0,y:42.5,rect:[40.0, 39.0, 48.0, 46.0]},
    {nombre:"SILOS DE HOMOGENEIZACION",x:44.5,y:49.4,rect:[39.5, 46.0, 49.5, 52.8]},
    {nombre:"PRECALENT. 2",x:45.75,y:30.4,rect:[42.0, 26.0, 49.5, 34.8]},
    {nombre:"S.E. GSA 2 Y SALA DE COMPRESORES",x:50.25,y:25.25,rect:[47.0, 22.0, 53.5, 28.5]},
    {nombre:"CASETA EQUIPO ANALIZADOR EN LINEA",x:49.5,y:19.75,rect:[46.5, 17.0, 52.5, 22.5]},
    {nombre:"CHANCADORA DE CALIZA",x:54.0,y:21.0,rect:[51.0, 18.0, 57.0, 24.0]},
    {nombre:"SUB ESTACION ZONA HORNO II",x:53.85,y:26.75,rect:[50.5, 23.7, 57.2, 29.8]},
    {nombre:"PRECALENTADOR",x:50.15,y:43.1,rect:[47.0, 39.0, 53.3, 47.2]},
    {nombre:"EDIFICIO INTERCAMBIO",x:55.5,y:40.5,rect:[52.5, 37.2, 58.5, 43.8]},
    {nombre:"DUCTO DE GASES TERCIARIOS",x:61.15,y:39.75,rect:[56.5, 37.0, 65.8, 42.5]},
    {nombre:"HORNO",x:58.75,y:36.0,rect:[55.5, 33.0, 62.0, 39.0]},
    {nombre:"TANQ. DIARIO DE PETRO.",x:64.0,y:42.0,rect:[61.0, 39.0, 67.0, 45.0]},
    {nombre:"CONTROL LAB.",x:66.5,y:45.9,rect:[63.5, 43.0, 69.5, 48.8]},
    {nombre:"ENFRIADOR I",x:72.0,y:42.0,rect:[68.0, 38.0, 76.0, 46.0]},
    {nombre:"ENFRIADOR II",x:70.0,y:31.25,rect:[66.0, 27.5, 74.0, 35.0]},
    {nombre:"ELECTROFILTRO DE ENFRIADOR I",x:78.0,y:34.75,rect:[74.0, 31.0, 82.0, 38.5]},
    {nombre:"ELECTROFILTRO DE ENFRIADOR II",x:77.25,y:25.25,rect:[73.0, 21.5, 81.5, 29.0]},
    {nombre:"MAESTRANZA",x:29.25,y:59.65,rect:[25.5, 55.5, 33.0, 63.8]},
    {nombre:"TALLER TEMPORAL",x:27.9,y:65.75,rect:[24.0, 63.0, 31.8, 68.5]},
    {nombre:"INSPECTORIA",x:33.0,y:64.9,rect:[29.5, 62.0, 36.5, 67.8]},
    {nombre:"EDIFICIO GERENCIA DE OPERACIONES",x:38.0,y:64.25,rect:[31.0, 58.0, 45.0, 70.5]},
    {nombre:"PRENSA DE CRUDOS N° 4",x:48.0,y:59.0,rect:[45.0, 54.5, 51.0, 63.5]},
    {nombre:"PRENSA DE CRUDOS N° 3",x:53.5,y:59.0,rect:[50.5, 54.5, 56.5, 63.5]},
    {nombre:"PRENSA DE CRUDOS N° 2",x:59.1,y:59.0,rect:[56.0, 54.5, 62.2, 63.5]},
    {nombre:"PRENSA DE CRUDOS N° 1",x:64.6,y:59.0,rect:[61.5, 54.5, 67.7, 63.5]},
    {nombre:"MOLINOS DE BOLAS",x:62.0,y:53.0,rect:[58.0, 49.0, 66.0, 57.0]},
    {nombre:"PRENSA DE CLINKER N° 1 Y 2",x:77.75,y:56.25,rect:[73.0, 51.5, 82.5, 61.0]},
    {nombre:"SUB-EST. ELECT.",x:68.6,y:66.25,rect:[65.5, 63.0, 71.7, 69.5]},
    {nombre:"SALA DE COMPRESORAS",x:71.75,y:71.75,rect:[68.0, 68.0, 75.5, 75.5]},
    {nombre:"SALA DE COMPRESORAS (AMPLIACION)",x:78.75,y:71.75,rect:[75.0, 68.0, 82.5, 75.5]},
    {nombre:"COCHERA Y DEPOSITO",x:84.5,y:70.0,rect:[81.0, 66.5, 88.0, 73.5]},
    {nombre:"ACOPIO RESIDUOS HIDROCARBUROS",x:47.0,y:73.25,rect:[43.0, 70.0, 51.0, 76.5]},
    {nombre:"GARITA CONTROL",x:59.25,y:71.5,rect:[56.0, 68.5, 62.5, 74.5]},
    {nombre:"STORE",x:63.75,y:71.25,rect:[61.0, 68.0, 66.5, 74.5]},
    {nombre:"TUNEL FAJA 242FT2",x:80.5,y:19.0,rect:[76.0, 15.5, 85.0, 22.5]},
    {nombre:"TOLVA ALIM. DE CLINKER I (NORTE)",x:83.0,y:25.0,rect:[79.0, 21.0, 87.0, 29.0]}
  ]
};

const DEMO_REGISTROS = [
  {ID:"R-1001",Empresa:"FGA INGENIEROS S.A.",AreaUsuaria:"DPA",TrabajoCritico:["Trabajos en altura","Izaje de Cargas"],Lugar:"GSA 1",Fecha:today(),HoraInicio:"08:00",HoraTermino:"17:00",NTrabajadores:8,Descripcion:"Montaje de estructura metálica",RiesgosCriticos:["Caída de objetos","Caída de carga"],Conexas:"SI",EstadoOperativo:"ACTIVO",X:33.6,Y:43.4},
  {ID:"R-1002",Empresa:"CORMEI",AreaUsuaria:"DIA",TrabajoCritico:["Trabajos en caliente"],Lugar:"GSA 1",Fecha:today(),HoraInicio:"09:00",HoraTermino:"15:00",NTrabajadores:5,Descripcion:"Soldadura de soportes",RiesgosCriticos:["Proyección de partículas incandescentes"],Conexas:"SI",EstadoOperativo:"ACTIVO",X:33.6,Y:43.4},
  {ID:"R-1003",Empresa:"AGEIN",AreaUsuaria:"DPA",TrabajoCritico:["Aislamiento de Energía"],Lugar:"MOLINOS DE BOLAS",Fecha:today(),HoraInicio:"07:30",HoraTermino:"12:30",NTrabajadores:4,Descripcion:"Aislamiento para intervención",RiesgosCriticos:["Contacto eléctrico"],Conexas:"NO",EstadoOperativo:"ACTIVO",X:61.1,Y:54.2},
  {ID:"R-1004",Empresa:"HAUG",AreaUsuaria:"DPRA",TrabajoCritico:["Izaje de Cargas"],Lugar:"PRECALENT. 2",Fecha:today(),HoraInicio:"10:00",HoraTermino:"18:00",NTrabajadores:7,Descripcion:"Izaje de componentes",RiesgosCriticos:["Caída de carga","Caída de objetos"],Conexas:"NO",EstadoOperativo:"ACTIVO",X:44.6,Y:30.3}
];
const DEMO_CONEXAS = [
  {ID:"C-2001",RegistroID:"R-1001",Fecha:today(),HoraGestion:"09:20",MiEmpresa:"FGA INGENIEROS S.A.",Lugar:"GSA 1",JefePropio:"Responsable FGA",SsomaPropio:"SSOMA FGA",EmpresasConexas:[{empresa:"CORMEI",actividad:"Soldadura de soportes",riesgos:["Proyección de partículas incandescentes"],controles:"Delimitación, pantallas ignífugas y coordinación de secuencia.",jefe:"Jefe CORMEI",ssoma:"SSOMA CORMEI"}],Observaciones:"Mantener comunicación permanente.",Actualizado:new Date().toLocaleString()}
];

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzaT1pwPr4t2Z7zLnwZDBs0xLwZ4_cH7CBfjiGX7g54GyF012VcDz_LyGDG6Gel6mZOQ/exec";
let CONFIG = { apiUrl: APPS_SCRIPT_URL };
let DATA = structuredClone(DEFAULT_DATA);
let registros = JSON.parse(localStorage.getItem("tar_registros") || "null") || structuredClone(DEMO_REGISTROS);
let conexas = JSON.parse(localStorage.getItem("tar_conexas") || "null") || structuredClone(DEMO_CONEXAS);
let charts = {};
let selectedSector = null;
let sectorAdminUnlocked = sessionStorage.getItem("tar_sector_admin")==="1";
let sectorMarking = false;
let sectorDraftPoints = [];
let userSectors = [];
let pendingConexaPhoto = "";
let isSavingRegistro = false;
let isSavingConexa = false;

function today(){
  const d=new Date(); const off=d.getTimezoneOffset(); return new Date(d.getTime()-off*60000).toISOString().slice(0,10);
}
function yesterday(){
  const d=new Date(); d.setDate(d.getDate()-1); const off=d.getTimezoneOffset(); return new Date(d.getTime()-off*60000).toISOString().slice(0,10);
}
function nowTime(){ return new Date().toTimeString().slice(0,5); }
function qs(id){return document.getElementById(id)}
function escapeHtml(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}
function arr(v){ if(Array.isArray(v)) return v; if(!v) return []; try{const p=JSON.parse(v); return Array.isArray(p)?p:[v]}catch{return String(v).split(" | ").filter(Boolean)}}
function uid(prefix){return prefix+"-"+Date.now().toString().slice(-7)}
function toast(msg){const t=qs("toast");t.textContent=msg;t.classList.remove("hidden");setTimeout(()=>t.classList.add("hidden"),2600)}
function persist(){
  localStorage.setItem("tar_registros",JSON.stringify(registros));
  const safeConexas=conexas.map(c=>({...c,FotoReunion:""}));
  try{localStorage.setItem("tar_conexas",JSON.stringify(safeConexas))}catch(e){}
}
function isActive(r){return (r.EstadoOperativo||"ACTIVO")!=="FINALIZADO"}

function init(){
  ["fechaResumen","fecha","filtroMisFecha","conFecha","filtroConFecha","mapFiltroFecha","listaFecha"].forEach(id=>qs(id).value=today());
  qs("horaInicio").value=nowTime(); qs("horaTermino").value="17:00"; qs("conHora").value=nowTime(); qs("contFecha").value=yesterday();
  wireNavigation(); setupZoomableMaps(); wireEvents(); setupSectorizacion(); renderConfig(); refreshAll();
  loadRemote();
}

function wireNavigation(){
  document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
}
function showView(name){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  qs("view-"+name).classList.add("active");
  if(name==="mapa") renderMapGeneral();
  if(name==="lista") renderListaDashboard();
  if(name==="conexas") updateConRegistroOptions();
  if(name==="sectorizacion") renderSectorizacionAccess();
}

function wireEvents(){
  qs("btnRefresh").onclick=async()=>{await loadRemote();refreshAll();toast("Información actualizada")};
  qs("fechaResumen").onchange=()=>renderResumen();
  qs("formRegistro").onsubmit=submitRegistro;
  qs("btnGuardarBorrador").onclick=saveDraft;
  qs("lugar").onchange=()=>setMarkerByLugar(qs("lugar").value);
  qs("mapRegistro").onclick=mapRegistroClick;
  qs("btnElegirMapa").onclick=()=>{qs("mapRegistro").scrollIntoView({behavior:"smooth",block:"center"});toast("Acerca el plano y haz clic exactamente sobre el nombre del lugar")};
  qs("btnResetMarker").onclick=clearMarker;
  qs("filtroMisEmpresa").onchange=renderMisRegistros; qs("filtroMisFecha").onchange=renderMisRegistros;
  qs("btnBuscarAnterior").onclick=openContinue; qs("closeContinue").onclick=()=>qs("continueModal").classList.add("hidden");
  qs("contEmpresa").onchange=renderContinueTable; qs("contFecha").onchange=renderContinueTable;

  qs("conMiEmpresa").onchange=updateConRegistroOptions; qs("conFecha").onchange=updateConRegistroOptions; qs("conRegistroPropio").onchange=renderConexaOwnRecord;
  qs("conFotoReunion").onchange=handleConexaPhoto;
  qs("btnAgregarEmpresaConexa").onclick=()=>addConexaCompany();
  qs("formConexa").onsubmit=submitConexa;
  qs("filtroConEmpresa").onchange=renderConexasTable; qs("filtroConEmpresaInvolucrada").onchange=renderConexasTable; qs("filtroConFecha").onchange=renderConexasTable;

  ["mapFiltroTrabajo","mapFiltroEmpresa","mapFiltroArea","mapFiltroFecha"].forEach(id=>qs(id).onchange=renderMapGeneral);
  qs("btnSectorDashboard").onclick=()=>{showView("lista"); if(selectedSector){qs("listaLugar").value=selectedSector;renderListaDashboard()}};

  ["listaEmpresa","listaLugar","listaArea","listaFecha"].forEach(id=>qs(id).onchange=renderListaDashboard);
  qs("btnLimpiarFiltros").onclick=()=>{qs("listaEmpresa").value="";qs("listaLugar").value="";qs("listaArea").value="";qs("listaFecha").value=today();renderListaDashboard()};
}

function renderConfig(){
  // V4.2: la conexión es interna y automática; no se muestra configuración al usuario.
}

function setOptions(id, values, placeholder){
  const el=qs(id); const prev=el.value;
  el.innerHTML=(placeholder!==undefined?`<option value="">${placeholder}</option>`:"")+values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
  if([...el.options].some(o=>o.value===prev)) el.value=prev;
}
function renderMulti(id, values){
  qs(id).innerHTML=values.map((v,i)=>`<label class="check-chip"><input type="checkbox" value="${escapeHtml(v)}"><span>${escapeHtml(v)}</span></label>`).join("");
}
function populateAllSelects(){
  ["empresa","filtroMisEmpresa","conMiEmpresa","filtroConEmpresa","filtroConEmpresaInvolucrada","contEmpresa"].forEach(id=>setOptions(id,DATA.empresas,id.startsWith("filtro")?"Todas":"Seleccione"));
  setOptions("mapFiltroEmpresa",DATA.empresas,"Todas"); setOptions("listaEmpresa",DATA.empresas,"Todas");
  ["areaUsuaria"].forEach(id=>setOptions(id,DATA.areas,"Seleccione"));
  setOptions("mapFiltroArea",DATA.areas,"Todas"); setOptions("listaArea",DATA.areas,"Todas");
  setOptions("lugar",DATA.lugares.map(x=>x.nombre),"Seleccione"); setOptions("listaLugar",DATA.lugares.map(x=>x.nombre),"Todos");
  setOptions("mapFiltroTrabajo",DATA.trabajos,"Todos");
  renderMulti("trabajosCriticos",DATA.trabajos); renderMulti("riesgosCriticos",DATA.riesgos);
}
function selectedMulti(id){return [...qs(id).querySelectorAll("input:checked")].map(x=>x.value)}
function setMulti(id,values=[]){[...qs(id).querySelectorAll("input")].forEach(x=>x.checked=values.includes(x.value))}


function setupZoomableMaps(){
  ["mapRegistro","mapConexa","mapGeneral","mapSectorizacion"].forEach(id=>makeZoomable(id));
}
function makeZoomable(id){
  const map=qs(id); if(!map || map.dataset.zoomReady==="1") return;
  map.dataset.zoomReady="1"; map.classList.add("zoomable");
  const stage=document.createElement("div"); stage.className="map-stage";
  while(map.firstChild) stage.appendChild(map.firstChild);
  map.appendChild(stage);
  const controls=document.createElement("div"); controls.className="map-zoom-controls";
  controls.innerHTML=`<button type="button" data-z="in" aria-label="Acercar">+</button>
    <button type="button" data-z="out" aria-label="Alejar">−</button>
    <button type="button" data-z="reset" aria-label="Restablecer">⛶</button>
    <div class="zoom-value">100%</div>`;
  map.insertBefore(controls,stage);
  map._zoom=1;
  const apply=()=>{
    const z=map._zoom;
    stage.style.width=(z*100)+"%";
    stage.style.setProperty("--map-label-size", Math.min(12,6.2+(z-1)*3.0)+"px");
    stage.style.setProperty("--sector-size", Math.min(25,15+(z-1)*5)+"px");
    stage.style.setProperty("--sector-font", Math.min(11,6.5+(z-1)*2.2)+"px");
    stage.style.setProperty("--sector-label-width", Math.min(120,60+(z-1)*34)+"px");
    controls.querySelector(".zoom-value").textContent=Math.round(z*100)+"%";
    stage.classList.toggle("zoom-detail",z>=1.5);
    stage.classList.toggle("zoom-deep",z>=2.5);
  };
  controls.addEventListener("click",ev=>{
    ev.stopPropagation();
    const a=ev.target.dataset.z; if(!a)return;
    if(a==="in") map._zoom=Math.min(3.5,map._zoom+0.5);
    if(a==="out") map._zoom=Math.max(1,map._zoom-0.5);
    if(a==="reset"){map._zoom=1;map.scrollTo({left:0,top:0,behavior:"smooth"})}
    apply();
  });
  map.addEventListener("dblclick",ev=>{
    if(ev.target.closest(".map-zoom-controls"))return;
    ev.preventDefault();
    map._zoom=map._zoom<2?2:1; apply();
  });
  apply();
}

function refreshAll(){
  populateAllSelects(); renderResumen(); renderMisRegistros(); renderConexasTable(); renderMapGeneral(); renderListaDashboard(); updateConRegistroOptions();
}
function filteredRegistros(date=today()){
  return registros.filter(r=>r.Fecha===date && isActive(r));
}

function renderResumen(){
  const d=qs("fechaResumen").value || today(), rs=filteredRegistros(d), cs=conexas.filter(c=>c.Fecha===d);
  qs("kpiTrabajos").textContent=rs.length;
  qs("kpiTrabajadores").textContent=rs.reduce((s,r)=>s+Number(r.NTrabajadores||0),0);
  qs("kpiEmpresas").textContent=new Set(rs.map(r=>r.Empresa)).size;
  qs("kpiConexos").textContent=cs.reduce((s,c)=>s+(c.EmpresasConexas?.length||0),0);
  qs("kpiRiesgos").textContent=new Set(rs.flatMap(r=>arr(r.RiesgosCriticos))).size;
  drawChart("chartCriticos",countFlat(rs,"TrabajoCritico"),"doughnut");
  drawChart("chartRiesgos",countFlat(rs,"RiesgosCriticos"),"bar");
  const byPlace=countSimple(rs,"Lugar");
  qs("areasMayorActividad").innerHTML=Object.entries(byPlace).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v])=>`<span class="activity-chip ${loadClass(v)}">${escapeHtml(k)} (${v})</span>`).join("")||"<small>Sin registros para la fecha.</small>";
}
function countFlat(rs,key){const o={};rs.forEach(r=>arr(r[key]).forEach(v=>o[v]=(o[v]||0)+1));return o}
function countSimple(rs,key){const o={};rs.forEach(r=>{const v=r[key]||"Sin dato";o[v]=(o[v]||0)+1});return o}
function loadClass(n){return n>=5?"load-red":n>=3?"load-orange":n>=1?"load-yellow":"load-green"}
const valueLabelsPlugin={
  id:"valueLabels",
  afterDatasetsDraw(chart){
    const {ctx}=chart;ctx.save();
    ctx.font="700 11px Inter, Arial";ctx.fillStyle="#202830";ctx.textAlign="center";ctx.textBaseline="middle";
    chart.data.datasets.forEach((ds,di)=>{
      const meta=chart.getDatasetMeta(di);
      meta.data.forEach((el,i)=>{
        const v=Number(ds.data[i]||0); if(!v)return;
        if(chart.config.type==="bar"){
          const p=el.tooltipPosition();ctx.fillText(String(v),p.x,p.y-10);
        }else if(chart.config.type==="doughnut"){
          const p=el.tooltipPosition();ctx.fillStyle="#17212b";ctx.fillText(String(v),p.x,p.y);
        }
      });
    });ctx.restore();
  }
};
Chart.register(valueLabelsPlugin);
function drawChart(id,data,type){
  const ctx=qs(id); if(charts[id]) charts[id].destroy();
  const labels=Object.keys(data), vals=Object.values(data);
  charts[id]=new Chart(ctx,{type,data:{labels,datasets:[{data:vals,borderWidth:1}]},options:{responsive:true,layout:{padding:{top:16}},plugins:{legend:{display:type==="doughnut",position:"right"},valueLabels:{}},scales:type==="doughnut"?{}:{y:{beginAtZero:true,ticks:{precision:0}}}}});
}


function pointInRect(x,y,rect){
  return Array.isArray(rect) && rect.length===4 && x>=rect[0] && x<=rect[2] && y>=rect[1] && y<=rect[3];
}
function findZoneAt(x,y){
  // V4.1: solo reconoce sectores creados manualmente en la interfaz Sectorización.
  const source=userSectors||[];
  const matches=source.filter(l=>pointInRect(x,y,l.rect));
  if(!matches.length) return null;
  matches.sort((a,b)=>{
    const aa=(a.rect[2]-a.rect[0])*(a.rect[3]-a.rect[1]);
    const bb=(b.rect[2]-b.rect[0])*(b.rect[3]-b.rect[1]);
    return aa-bb;
  });
  return matches[0];
}
function setMarkerByLugar(nombre){
  const l=DATA.lugares.find(x=>x.nombre===nombre); if(!l)return;
  qs("mapX").value=l.x; qs("mapY").value=l.y;
  positionMarker(qs("registroMarker"),l.x,l.y,nombre);
  qs("mapCoordText").textContent=`Lugar identificado en el plano: ${nombre}`;
}
function positionMarker(el,x,y,label=""){
  el.style.left=x+"%"; el.style.top=y+"%";
  el.dataset.label=label||"";
  el.classList.remove("hidden");
}
function clearMarker(){
  qs("mapX").value=""; qs("mapY").value="";
  qs("registroMarker").classList.add("hidden");
  qs("mapCoordText").textContent="Lugar identificado en el plano: —";
}
function mapRegistroClick(e){
  if(e.target.closest(".map-zoom-controls")) return;
  const stage=e.currentTarget.querySelector(".map-stage");
  if(!stage) return;
  const box=stage.getBoundingClientRect();
  const x=((e.clientX-box.left)/box.width)*100;
  const y=((e.clientY-box.top)/box.height)*100;
  if(x<0||x>100||y<0||y>100) return;

  const zone=findZoneAt(x,y);
  if(!zone){
    toast("No se identificó un lugar en ese punto. Acerca más el plano y toca sobre el nombre del área.");
    return;
  }

  // Las coordenadas son internas: no se muestran al usuario.
  qs("mapX").value=x.toFixed(3);
  qs("mapY").value=y.toFixed(3);
  qs("lugar").value=zone.nombre;
  positionMarker(qs("registroMarker"),x,y,zone.nombre);
  qs("mapCoordText").textContent=`Lugar identificado en el plano: ${zone.nombre}`;
  toast(`Lugar seleccionado: ${zone.nombre}`);
}


function normalizeText(v){return String(v||"").trim().toLowerCase().replace(/\s+/g," ")}
function sameArray(a,b){return JSON.stringify([...arr(a)].sort())===JSON.stringify([...arr(b)].sort())}
function isDuplicateRegistro(r){
  return registros.some(x=>x.ID!==r.ID && x.Fecha===r.Fecha && x.Empresa===r.Empresa && x.Lugar===r.Lugar &&
    sameArray(x.TrabajoCritico,r.TrabajoCritico) && sameArray(x.RiesgosCriticos,r.RiesgosCriticos) &&
    Number(x.NTrabajadores)===Number(r.NTrabajadores) && normalizeText(x.Descripcion)===normalizeText(r.Descripcion) &&
    x.HoraInicio===r.HoraInicio);
}
async function submitRegistro(e){
  e.preventDefault();
  if(isSavingRegistro)return;
  const tc=selectedMulti("trabajosCriticos"), rc=selectedMulti("riesgosCriticos");
  if(!tc.length)return toast("Seleccione al menos un trabajo crítico");
  if(!rc.length)return toast("Seleccione al menos un riesgo crítico");
  if(!qs("mapX").value || !qs("mapY").value)return toast("Seleccione la ubicación en el plano");
  const existing=qs("registroId").value;
  const r={
    ID:existing||uid("R"),Empresa:qs("empresa").value,AreaUsuaria:qs("areaUsuaria").value,TrabajoCritico:tc,Lugar:qs("lugar").value,
    Fecha:qs("fecha").value,HoraInicio:qs("horaInicio").value,HoraTermino:qs("horaTermino").value,NTrabajadores:Number(qs("nTrabajadores").value),
    Descripcion:qs("descripcion").value,RiesgosCriticos:rc,Conexas:"NO",EstadoOperativo:"ACTIVO",
    X:Number(qs("mapX").value),Y:Number(qs("mapY").value),Actualizado:new Date().toISOString()
  };
  if(!existing && isDuplicateRegistro(r)){
    alert("Ya existe un registro idéntico con la misma empresa, lugar, hora de inicio, actividad, riesgos y número de trabajadores. Revise el registro existente antes de volver a enviarlo.");
    return;
  }
  const btn=qs("btnSubmitRegistro");isSavingRegistro=true;btn.disabled=true;const prev=btn.textContent;btn.textContent="Procesando...";
  try{
    const idx=registros.findIndex(x=>x.ID===existing); if(idx>=0) registros[idx]={...registros[idx],...r}; else registros.push(r);
    persist(); addHistoryLocal("REGISTRO",r.ID,existing?"EDICIÓN":"ALTA",r.Empresa);
    if(CONFIG.apiUrl) await postRemote({action:"saveRegistro",registro:r});
    const pdf=await buildPdfRegistro(r);
    if(CONFIG.apiUrl) await sendPdfRemote(pdf,r,[]);
    toast("Registro guardado y PDF generado.");
    resetRegistroForm(); refreshAll();
  }finally{
    isSavingRegistro=false;btn.disabled=false;btn.textContent=prev;
  }
}
function saveDraft(){
  const draft={empresa:qs("empresa").value,area:qs("areaUsuaria").value,lugar:qs("lugar").value,fecha:qs("fecha").value,ini:qs("horaInicio").value,fin:qs("horaTermino").value,n:qs("nTrabajadores").value,desc:qs("descripcion").value,tc:selectedMulti("trabajosCriticos"),rc:selectedMulti("riesgosCriticos"),x:qs("mapX").value,y:qs("mapY").value};
  localStorage.setItem("tar_draft",JSON.stringify(draft));toast("Borrador guardado en este dispositivo")
}
function resetRegistroForm(){
  qs("formRegistro").reset();qs("registroId").value="";qs("fecha").value=today();qs("horaInicio").value=nowTime();qs("horaTermino").value="17:00";qs("nTrabajadores").value=1;
  clearMarker();setMulti("trabajosCriticos",[]);setMulti("riesgosCriticos",[])
}

function renderMisRegistros(){
  const emp=qs("filtroMisEmpresa").value, d=qs("filtroMisFecha").value||today();
  const rs=registros.filter(r=>r.Fecha===d && (!emp||r.Empresa===emp));
  qs("tablaMisRegistros").innerHTML=rs.map(r=>`<tr><td>${r.ID}</td><td>${escapeHtml(r.Empresa)}</td><td>${escapeHtml(r.Lugar)}</td><td>${arr(r.TrabajoCritico).join(", ")}</td><td>${r.HoraInicio}–${r.HoraTermino}</td><td>${r.NTrabajadores}</td>
  <td><button class="btn mini secondary" onclick="editRegistro('${r.ID}')">Editar</button><button class="btn mini secondary" onclick="openConexaFor('${r.ID}')">Conexa</button>${isActive(r)?`<button class="btn mini secondary" onclick="finalizarRegistro('${r.ID}')">Finalizar</button>`:"<b>Finalizado</b>"}<button class="btn mini secondary" onclick="continuarRegistro('${r.ID}')">Continuar mañana</button></td></tr>`).join("")||`<tr><td colspan="7">Sin registros.</td></tr>`
}
window.editRegistro=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;showView("registro");qs("registroId").value=r.ID;qs("empresa").value=r.Empresa;qs("areaUsuaria").value=r.AreaUsuaria;qs("lugar").value=r.Lugar;qs("fecha").value=r.Fecha;qs("horaInicio").value=r.HoraInicio;qs("horaTermino").value=r.HoraTermino;qs("nTrabajadores").value=r.NTrabajadores;qs("descripcion").value=r.Descripcion;setMulti("trabajosCriticos",arr(r.TrabajoCritico));setMulti("riesgosCriticos",arr(r.RiesgosCriticos));qs("mapX").value=r.X;qs("mapY").value=r.Y;positionMarker(qs("registroMarker"),r.X,r.Y,r.Lugar);qs("mapCoordText").textContent=`Lugar identificado en el plano: ${r.Lugar}`;window.scrollTo({top:0,behavior:"smooth"})
}
window.finalizarRegistro=async function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;
  r.EstadoOperativo="FINALIZADO";r.HoraFinalReal=nowTime();r.Actualizado=new Date().toISOString();persist();addHistoryLocal("REGISTRO",id,"FINALIZACIÓN",r.Empresa);
  if(CONFIG.apiUrl)await postRemote({action:"finalizarRegistro",id,hora:r.HoraFinalReal});refreshAll();toast("Trabajo finalizado")
}
window.continuarRegistro=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;const d=new Date(r.Fecha+"T12:00:00");d.setDate(d.getDate()+1);const next=d.toISOString().slice(0,10);
  showView("registro");qs("registroId").value="";qs("empresa").value=r.Empresa;qs("areaUsuaria").value=r.AreaUsuaria;qs("lugar").value=r.Lugar;qs("fecha").value=next;qs("horaInicio").value=r.HoraInicio;qs("horaTermino").value=r.HoraTermino;qs("nTrabajadores").value=r.NTrabajadores;qs("descripcion").value=r.Descripcion;setMulti("trabajosCriticos",arr(r.TrabajoCritico));setMulti("riesgosCriticos",arr(r.RiesgosCriticos));qs("mapX").value=r.X;qs("mapY").value=r.Y;positionMarker(qs("registroMarker"),r.X,r.Y,r.Lugar);qs("mapCoordText").textContent=`Lugar identificado en el plano: ${r.Lugar}`;toast("Actividad copiada. Revise y actualice antes de registrar.")
}
function openContinue(){qs("continueModal").classList.remove("hidden");renderContinueTable()}
function renderContinueTable(){
  const emp=qs("contEmpresa").value,d=qs("contFecha").value;const rs=registros.filter(r=>r.Fecha===d&&(!emp||r.Empresa===emp));
  qs("tablaContinuar").innerHTML=rs.map(r=>`<tr><td>${r.Empresa}</td><td>${r.Lugar}</td><td>${arr(r.TrabajoCritico).join(", ")}</td><td>${r.NTrabajadores}</td><td><button class="btn mini" onclick="pickContinue('${r.ID}')">Usar registro</button></td></tr>`).join("")||`<tr><td colspan="5">Sin registros para el filtro.</td></tr>`
}
window.pickContinue=function(id){qs("continueModal").classList.add("hidden");continuarRegistro(id)}

function updateConRegistroOptions(){
  const emp=qs("conMiEmpresa").value,d=qs("conFecha").value||today();const rs=registros.filter(r=>r.Empresa===emp&&r.Fecha===d);
  qs("conRegistroPropio").innerHTML=`<option value="">Seleccione</option>`+rs.map(r=>`<option value="${r.ID}">${r.ID} · ${escapeHtml(r.Lugar)} · ${escapeHtml(arr(r.TrabajoCritico).join(", "))}</option>`).join("");
  renderConexaOwnRecord()
}
function renderConexaOwnRecord(){
  const r=registros.find(x=>x.ID===qs("conRegistroPropio").value);const marker=qs("conexaMarker"),box=qs("conActividadResumen");
  if(!r){marker.classList.add("hidden");box.classList.add("hidden");box.innerHTML="";return}
  positionMarker(marker,r.X,r.Y,r.Lugar);
  box.classList.remove("hidden");
  box.innerHTML=`<strong>${escapeHtml(r.Empresa)} · ${escapeHtml(r.Lugar)}</strong>
    ${escapeHtml(r.Descripcion)}<br><b>Trabajos críticos:</b> ${arr(r.TrabajoCritico).map(escapeHtml).join(", ")}
    <br><b>Riesgos reportados:</b> ${arr(r.RiesgosCriticos).map(escapeHtml).join(", ")}`;
  // En cada empresa conexa, preselecciona los riesgos de la actividad propia.
  qs("empresasConexas").querySelectorAll(".conexa-item").forEach(item=>{
    item.querySelectorAll(".cx-risk").forEach(ch=>ch.checked=arr(r.RiesgosCriticos).includes(ch.value));
  });
}
function addConexaCompany(data={}){
  const own=registros.find(x=>x.ID===qs("conRegistroPropio").value);
  const defaultRisks=(data.riesgos&&data.riesgos.length)?data.riesgos:arr(own?.RiesgosCriticos);
  const el=document.createElement("div");el.className="conexa-item";
  el.innerHTML=`<div class="conexa-item-head"><strong>Empresa conexa</strong><button type="button" class="remove-btn">Eliminar</button></div>
  <div class="form-grid cols-2"><label>Empresa*<select class="cx-empresa" required>${DATA.empresas.map(x=>`<option ${x===data.empresa?"selected":""}>${escapeHtml(x)}</option>`)}</select></label>
  <label>Actividad que realiza*<input class="cx-actividad" required value="${escapeHtml(data.actividad||"")}"></label></div>
  <div class="field"><span class="label">Riesgos críticos que MI actividad genera a esta empresa*</span>
    <div class="risk-selector">${DATA.riesgos.map(r=>`<label><input class="cx-risk" type="checkbox" value="${escapeHtml(r)}" ${defaultRisks.includes(r)?"checked":""}><span>${escapeHtml(r)}</span></label>`).join("")}</div>
    <small>Se cargan por defecto los riesgos de la actividad propia. Puede retirar los que no correspondan.</small>
  </div>
  <label>Controles específicos para no afectar su trabajo*<textarea class="cx-controles" rows="2" required>${escapeHtml(data.controles||"")}</textarea></label>
  <div class="form-grid cols-2"><label>Jefe del área notificado*<input class="cx-jefe" required value="${escapeHtml(data.jefe||"")}"></label><label>Supervisor SSOMA notificado*<input class="cx-ssoma" required value="${escapeHtml(data.ssoma||"")}"></label></div>`;
  el.querySelector(".remove-btn").onclick=()=>el.remove();qs("empresasConexas").appendChild(el)
}
function collectConexas(){
  return [...qs("empresasConexas").querySelectorAll(".conexa-item")].map(x=>({
    empresa:x.querySelector(".cx-empresa").value,
    actividad:x.querySelector(".cx-actividad").value,
    riesgos:[...x.querySelectorAll(".cx-risk:checked")].map(ch=>ch.value),
    controles:x.querySelector(".cx-controles").value,
    jefe:x.querySelector(".cx-jefe").value,
    ssoma:x.querySelector(".cx-ssoma").value
  }))
}

async function fileToOptimizedDataURL(file,maxDim=1800,quality=.88){
  const data=await new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=rej;fr.readAsDataURL(file)});
  const img=await loadImage(data);let w=img.naturalWidth,h=img.naturalHeight;
  const scale=Math.min(1,maxDim/Math.max(w,h));w=Math.round(w*scale);h=Math.round(h*scale);
  const c=document.createElement("canvas");c.width=w;c.height=h;const ctx=c.getContext("2d");ctx.drawImage(img,0,0,w,h);
  return c.toDataURL("image/jpeg",quality);
}
function loadImage(src){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=src})}
async function handleConexaPhoto(e){
  const f=e.target.files?.[0];pendingConexaPhoto="";
  if(!f){qs("conFotoPreview").classList.add("hidden");return}
  try{
    pendingConexaPhoto=await fileToOptimizedDataURL(f);
    qs("conFotoPreview").innerHTML=`<img src="${pendingConexaPhoto}" alt="Foto de reunión">`;
    qs("conFotoPreview").classList.remove("hidden");
  }catch(err){toast("No se pudo procesar la foto");e.target.value=""}
}
function conexaSignature(c){
  return JSON.stringify({
    r:c.RegistroID,m:c.MiEmpresa,f:c.Fecha,
    e:(c.EmpresasConexas||[]).map(x=>({e:x.empresa,a:normalizeText(x.actividad),r:[...x.riesgos].sort(),c:normalizeText(x.controles),j:normalizeText(x.jefe),s:normalizeText(x.ssoma)})).sort((a,b)=>a.e.localeCompare(b.e)),
    o:normalizeText(c.Observaciones)
  });
}
function isDuplicateConexa(c){
  const sig=conexaSignature(c);
  return conexas.some(x=>x.ID!==c.ID && conexaSignature(x)===sig);
}

async function submitConexa(e){
  e.preventDefault();if(isSavingConexa)return;
  const r=registros.find(x=>x.ID===qs("conRegistroPropio").value);if(!r)return toast("Seleccione la actividad propia reportada");
  const empresas=collectConexas();if(!empresas.length)return toast("Agregue al menos una empresa conexa");
  if(empresas.some(x=>!x.riesgos.length))return toast("Cada empresa conexa debe tener al menos un riesgo crítico seleccionado");
  if(!pendingConexaPhoto)return toast("La foto del registro de reunión es obligatoria");
  const editId=qs("conexaEditId").value;
  const current=editId?conexas.find(x=>x.ID===editId):null;
  const c={ID:editId||uid("C"),RegistroID:r.ID,Fecha:qs("conFecha").value,HoraGestion:qs("conHora").value,MiEmpresa:qs("conMiEmpresa").value,Lugar:r.Lugar,JefePropio:qs("conJefePropio").value,SsomaPropio:qs("conSsomaPropio").value,EmpresasConexas:empresas,Observaciones:qs("conObservaciones").value,Actualizado:new Date().toLocaleString(),Version:Number(current?.Version||0)+1,Estado:"ACTIVO",FotoReunion:pendingConexaPhoto};
  if(!editId && isDuplicateConexa(c)){
    alert("Esta coordinación ya fue registrada con los mismos detalles. Revise el registro existente antes de volver a enviarla.");
    return;
  }
  const btn=qs("btnSubmitConexa");isSavingConexa=true;btn.disabled=true;const prev=btn.textContent;btn.textContent="Procesando coordinación...";
  try{
    if(current){Object.assign(current,c)}else conexas.push(c);
    persist();addHistoryLocal("CONEXA",c.ID,current?"EDICIÓN":"ALTA",c.MiEmpresa);
    if(CONFIG.apiUrl)await postRemote({action:"saveConexa",conexa:{...c,FotoReunion:pendingConexaPhoto}});
    const pdf=await buildPdfConexa(c,r);
    if(CONFIG.apiUrl)await sendPdfRemote(pdf,{Empresa:c.MiEmpresa,ID:c.ID},empresas.map(x=>x.empresa),"COORDINACIÓN DE ACTIVIDADES CONEXAS");
    toast("Coordinación registrada y PDF generado");
    qs("formConexa").reset();qs("conexaEditId").value="";qs("conFecha").value=today();qs("conHora").value=nowTime();qs("empresasConexas").innerHTML="";pendingConexaPhoto="";qs("conFotoPreview").innerHTML="";qs("conFotoPreview").classList.add("hidden");refreshAll();
  }finally{
    isSavingConexa=false;btn.disabled=false;btn.textContent=prev;
  }
}
window.openConexaFor=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;showView("conexas");qs("conexaEditId").value="";qs("conMiEmpresa").value=r.Empresa;qs("conFecha").value=r.Fecha;updateConRegistroOptions();qs("conRegistroPropio").value=r.ID;renderConexaOwnRecord();addConexaCompany();toast("Complete la coordinación con la empresa aledaña.")
}
function renderConexasTable(){
  const emp=qs("filtroConEmpresa").value,inv=qs("filtroConEmpresaInvolucrada").value,d=qs("filtroConFecha").value||today();
  const cs=conexas.filter(c=>c.Fecha===d&&(!emp||c.MiEmpresa===emp)&&(!inv||(c.EmpresasConexas||[]).some(x=>x.empresa===inv)));
  qs("tablaConexas").innerHTML=cs.map(c=>`<tr><td>${c.ID}</td><td>${c.RegistroID}</td><td>${c.MiEmpresa}</td><td>${(c.EmpresasConexas||[]).map(x=>x.empresa).join(", ")}</td><td>${c.HoraGestion}</td><td>${c.Actualizado||""}</td><td><button class="btn mini secondary" onclick="editConexa('${c.ID}')">Editar / incluir</button>${(c.Estado||"ACTIVO")!=="FINALIZADO"?`<button class="btn mini secondary" onclick="finalizarConexa('${c.ID}')">Finalizar</button>`:" <b>Finalizada</b>"}</td></tr>`).join("")||`<tr><td colspan="7">Sin coordinaciones.</td></tr>`
}
window.editConexa=function(id){
  const c=conexas.find(x=>x.ID===id),r=registros.find(x=>x.ID===c?.RegistroID);if(!c||!r)return;
  showView("conexas");qs("conexaEditId").value=c.ID;qs("conMiEmpresa").value=c.MiEmpresa;qs("conFecha").value=c.Fecha;qs("conHora").value=nowTime();updateConRegistroOptions();qs("conRegistroPropio").value=c.RegistroID;qs("conJefePropio").value=c.JefePropio;qs("conSsomaPropio").value=c.SsomaPropio;qs("conObservaciones").value=c.Observaciones;qs("empresasConexas").innerHTML="";c.EmpresasConexas.forEach(addConexaCompany);pendingConexaPhoto="";qs("conFotoReunion").value="";qs("conFotoPreview").innerHTML="";qs("conFotoPreview").classList.add("hidden");renderConexaOwnRecord();toast("Edición cargada. Adjunte una nueva foto de reunión para guardar la actualización.")
}
window.finalizarConexa=async function(id){
  const c=conexas.find(x=>x.ID===id);if(!c)return;
  if(!confirm("¿Finalizar esta coordinación conexa?"))return;
  c.Estado="FINALIZADO";c.Actualizado=new Date().toLocaleString();persist();addHistoryLocal("CONEXA",id,"FINALIZACIÓN",c.MiEmpresa);
  if(CONFIG.apiUrl)await postRemote({action:"finalizarConexa",id});renderConexasTable();toast("Coordinación finalizada");
}

function filteredForMap(){
  const d=qs("mapFiltroFecha").value||today(),t=qs("mapFiltroTrabajo").value,e=qs("mapFiltroEmpresa").value,a=qs("mapFiltroArea").value;
  return registros.filter(r=>r.Fecha===d&&isActive(r)&&(!t||arr(r.TrabajoCritico).includes(t))&&(!e||r.Empresa===e)&&(!a||r.AreaUsuaria===a))
}
function renderMapGeneral(){
  const rs=filteredForMap(),by={};rs.forEach(r=>(by[r.Lugar]??=[]).push(r));
  qs("sectorMarkers").innerHTML=(userSectors||[]).map(l=>{
    const n=(by[l.nombre]||[]).length;
    const bg=n>=5?"rgba(228,61,48,.62)":n>=3?"rgba(242,138,26,.62)":n>=1?"rgba(243,198,35,.68)":"rgba(56,169,71,.52)";
    return `<button class="sector-marker ${n===0?"zero-sector":"active-sector"}" style="left:${l.x}%;top:${l.y}%" title="${escapeHtml(l.nombre)} · ${n} trabajos" onclick="selectSector('${escapeHtml(l.nombre).replaceAll("'","\\'")}')">
      <span class="sector-count" style="background:${bg}">${n}</span>
      <span class="sector-name">${escapeHtml(l.nombre)}</span>
    </button>`;
  }).join("");
  if(selectedSector) selectSector(selectedSector,false)
}
window.selectSector=function(nombre,scroll=true){
  selectedSector=nombre;const rs=filteredForMap().filter(r=>r.Lugar===nombre);qs("sectorEmpty").classList.add("hidden");qs("sectorDetail").classList.remove("hidden");qs("sectorNombre").textContent=nombre;qs("sectorTrabajos").textContent=rs.length;qs("sectorTrabajadores").textContent=rs.reduce((s,r)=>s+Number(r.NTrabajadores),0);qs("sectorEmpresas").textContent=new Set(rs.map(r=>r.Empresa)).size;qs("sectorConexos").textContent=conexas.filter(c=>c.Fecha===(qs("mapFiltroFecha").value||today())&&c.Lugar===nombre).reduce((s,c)=>s+c.EmpresasConexas.length,0);
  const b=qs("sectorBadge");b.textContent=rs.length+" trabajos";b.className="load-badge "+loadClass(rs.length);qs("sectorActividades").innerHTML=rs.map(r=>`<div><b>${escapeHtml(r.Empresa)}</b><br>${arr(r.TrabajoCritico).join(", ")} · ${r.NTrabajadores} trab.<br><span>${escapeHtml(r.Descripcion||"")}</span></div>`).join("")||"<small>Sin actividades para el filtro.</small>";
  [...document.querySelectorAll(".sector-marker")].forEach(x=>x.classList.toggle("selected",x.title.startsWith(nombre+" ·")));if(scroll)qs("sectorDetail").scrollIntoView({behavior:"smooth",block:"nearest"})
}

function listFilters(){
  return {e:qs("listaEmpresa").value,l:qs("listaLugar").value,a:qs("listaArea").value,d:qs("listaFecha").value}
}
function renderListaDashboard(){
  const f=listFilters();let rs=registros.filter(r=>(!f.e||r.Empresa===f.e)&&(!f.l||r.Lugar===f.l)&&(!f.a||r.AreaUsuaria===f.a)&&(!f.d||r.Fecha===f.d));
  qs("tablaRegistros").innerHTML=rs.map(r=>`<tr><td>${r.ID}</td><td>${r.Fecha}</td><td>${escapeHtml(r.Empresa)}</td><td>${r.AreaUsuaria}</td><td>${escapeHtml(r.Lugar)}</td><td>${arr(r.TrabajoCritico).join(", ")}</td><td>${arr(r.RiesgosCriticos).join(", ")}</td><td>${r.NTrabajadores}</td></tr>`).join("")||`<tr><td colspan="8">Sin registros.</td></tr>`;
  const ids=new Set(rs.map(r=>r.ID));let cs=conexas.filter(c=>(!f.d||c.Fecha===f.d)&&(!f.l||c.Lugar===f.l)&&(!f.e||c.MiEmpresa===f.e)&&(!f.a||ids.has(c.RegistroID)));
  qs("tablaListaConexas").innerHTML=cs.flatMap(c=>c.EmpresasConexas.map(x=>`<tr><td>${c.ID}</td><td>${c.Fecha}</td><td>${c.MiEmpresa}</td><td>${c.Lugar}</td><td>${x.empresa}</td><td>${x.actividad}</td><td>${x.riesgos.join(", ")}</td><td>${c.HoraGestion}</td></tr>`)).join("")||`<tr><td colspan="8">Sin registros conexos.</td></tr>`;
  qs("dashSectorTitle").textContent=f.l?`Dashboard – ${f.l}`:"Dashboard general";
  drawChart("chartSectorCriticos",countFlat(rs,"TrabajoCritico"),"doughnut");
  const byEmp={};rs.forEach(r=>byEmp[r.Empresa]=(byEmp[r.Empresa]||0)+Number(r.NTrabajadores||0));drawChart("chartSectorEmpresa",byEmp,"bar")
}

async function makeMapDetailImage(r){
  const img=await loadImage("mapa_planta_nueva.png");
  const sx=Math.max(0,Math.round((Number(r.X)/100)*img.naturalWidth-img.naturalWidth*.18));
  const sy=Math.max(0,Math.round((Number(r.Y)/100)*img.naturalHeight-img.naturalHeight*.14));
  const sw=Math.min(Math.round(img.naturalWidth*.36),img.naturalWidth-sx);
  const sh=Math.min(Math.round(img.naturalHeight*.28),img.naturalHeight-sy);
  const c=document.createElement("canvas");c.width=1400;c.height=Math.round(1400*sh/sw);
  const ctx=c.getContext("2d");ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";
  ctx.drawImage(img,sx,sy,sw,sh,0,0,c.width,c.height);
  const px=((Number(r.X)/100*img.naturalWidth)-sx)/sw*c.width;
  const py=((Number(r.Y)/100*img.naturalHeight)-sy)/sh*c.height;
  ctx.beginPath();ctx.arc(px,py,18,0,Math.PI*2);ctx.fillStyle="rgba(225,38,28,.9)";ctx.fill();ctx.lineWidth=6;ctx.strokeStyle="#fff";ctx.stroke();
  ctx.font="700 28px Arial";const label=String(r.Lugar||"");const tw=ctx.measureText(label).width;
  const lx=Math.max(8,Math.min(c.width-tw-28,px+26)),ly=Math.max(42,py-24);
  ctx.fillStyle="rgba(255,255,255,.94)";ctx.fillRect(lx-10,ly-30,tw+20,40);ctx.fillStyle="#111";ctx.fillText(label,lx,ly);
  return c.toDataURL("image/png");
}
async function waitForImages(el){
  await Promise.all([...el.querySelectorAll("img")].map(im=>im.complete?Promise.resolve():new Promise(res=>{im.onload=res;im.onerror=res})));
}
async function buildPdfRegistro(r){
  const mapDetail=await makeMapDetailImage(r);
  qs("pdfTitle").textContent="REGISTRO DE TRABAJO DE ALTO RIESGO";qs("pdfSubtitle").textContent=`ID ${r.ID} · ${r.Fecha}`;
  qs("pdfContent").innerHTML=`<div class="pdf-content-grid">
  ${pdfField("Empresa",r.Empresa)}${pdfField("Área usuaria",r.AreaUsuaria)}${pdfField("Trabajo crítico",arr(r.TrabajoCritico).join(", "))}${pdfField("Lugar",r.Lugar)}
  ${pdfField("Fecha",r.Fecha)}${pdfField("Horario",`${r.HoraInicio} – ${r.HoraTermino}`)}${pdfField("Nº trabajadores",r.NTrabajadores)}${pdfField("Descripción del trabajo",r.Descripcion)}
  ${pdfField("Riesgos críticos",arr(r.RiesgosCriticos).join(", "))}
  </div>
  <h3 class="pdf-section-title">Detalle de ubicación</h3><div class="pdf-map-detail"><img src="${mapDetail}" alt="Detalle del plano"></div>`;
  return renderPdfAndDownload(`${r.ID}_Trabajo_Alto_Riesgo.pdf`)
}
async function buildPdfConexa(c,r){
  const mapDetail=await makeMapDetailImage(r);
  qs("pdfTitle").textContent="COORDINACIÓN DE TRABAJOS DE ALTO RIESGO EN ÁREAS ALEDAÑAS O CONEXAS";qs("pdfSubtitle").textContent=`ID ${c.ID} · ${c.Fecha} · ${c.HoraGestion} · Versión ${c.Version||1}`;
  qs("pdfContent").innerHTML=`<div class="pdf-content-grid">${pdfField("Mi empresa",c.MiEmpresa)}${pdfField("Lugar",c.Lugar)}${pdfField("Actividad propia",r.Descripcion)}${pdfField("Trabajo crítico propio",arr(r.TrabajoCritico).join(", "))}${pdfField("Riesgos críticos propios",arr(r.RiesgosCriticos).join(", "))}${pdfField("Jefe del área propio",c.JefePropio)}${pdfField("Supervisor SSOMA propio",c.SsomaPropio)}${pdfField("Hora de gestión",c.HoraGestion)}</div>
  <h3 class="pdf-section-title">Empresas / actividades conexas</h3>${c.EmpresasConexas.map(x=>`<div class="pdf-conexa"><b>${x.empresa}</b><br><b>Actividad:</b> ${x.actividad}<br><b>Riesgos que mi actividad genera:</b> ${x.riesgos.join(", ")}<br><b>Controles específicos:</b> ${x.controles}<br><b>Jefe notificado:</b> ${x.jefe}<br><b>SSOMA notificado:</b> ${x.ssoma}</div>`).join("")}
  <div class="pdf-conexa"><b>Observaciones / acuerdos:</b><br>${c.Observaciones||"—"}</div>
  <h3 class="pdf-section-title">Evidencia de la reunión</h3><div class="pdf-photo"><img src="${c.FotoReunion}" alt="Foto reunión"></div>
  <h3 class="pdf-section-title">Detalle de ubicación en el plano</h3><div class="pdf-map-detail"><img src="${mapDetail}" alt="Detalle del plano"></div>`;
  return renderPdfAndDownload(`${c.ID}_Coordinacion_Conexa_V${c.Version||1}.pdf`)
}
function pdfField(k,v){return `<div class="pdf-field"><strong>${escapeHtml(k)}</strong>${escapeHtml(String(v??""))}</div>`}
async function renderPdfAndDownload(filename){
  const el=qs("pdfSheet");await waitForImages(el);
  const canvas=await html2canvas(el,{scale:2.35,useCORS:true,backgroundColor:"#ffffff",imageTimeout:15000});
  const {jsPDF}=window.jspdf;const pdf=new jsPDF("p","mm","a4");
  const img=canvas.toDataURL("image/jpeg",0.97);const w=190,h=canvas.height*w/canvas.width;let y=10,remaining=h;
  pdf.addImage(img,"JPEG",10,y,w,h,undefined,"FAST");remaining-=277;
  while(remaining>0){pdf.addPage();y=10-(h-remaining);pdf.addImage(img,"JPEG",10,y,w,h,undefined,"FAST");remaining-=277}
  pdf.save(filename);return pdf.output("datauristring").split(",")[1]
}

function addHistoryLocal(tipo,id,accion,empresa){console.log("HISTORIAL",tipo,id,accion,empresa,new Date().toISOString())}

function jsonp(action,params={}){
  return new Promise((resolve,reject)=>{
    const cb="cb_"+Date.now()+"_"+Math.floor(Math.random()*9999);window[cb]=(data)=>{delete window[cb];s.remove();resolve(data)};
    const q=new URLSearchParams({action,callback:cb,...params});const s=document.createElement("script");s.src=CONFIG.apiUrl+"?"+q;s.onerror=()=>{delete window[cb];s.remove();reject(new Error("Error de conexión"))};document.body.appendChild(s)
  })
}
async function postRemote(payload){
  try{await fetch(CONFIG.apiUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(payload)});return true}catch(e){toast("Guardado local; no se pudo sincronizar.");return false}
}
async function loadRemote(){
  try{
    const res=await jsonp("bootstrap");
    if(res?.ok){
      DATA=res.data.config||DATA;
      DATA.lugares=(DATA.lugares||[]).map(l=>{
        const local=DEFAULT_DATA.lugares.find(z=>z.nombre===l.nombre);
        return local?{...local,...l,rect:local?.rect}:l;
      });
      userSectors=(res.data.sectores||[]).map(s=>({
        id:s.id||s.ID||"",
        nombre:s.nombre||s.Nombre||s.Sector||"",
        x:Number(s.x||s.X||0),
        y:Number(s.y||s.Y||0),
        rect:Array.isArray(s.rect)?s.rect:[Number(s.X1),Number(s.Y1),Number(s.X2),Number(s.Y2)],
        actualizado:s.actualizado||s.Actualizado||""
      })).filter(s=>s.nombre && s.rect.every(Number.isFinite));
      if(userSectors.length){
        DATA.lugares=userSectors.map(s=>({nombre:s.nombre,x:s.x,y:s.y,rect:s.rect}));
      }
      registros=res.data.registros?.length?res.data.registros:registros;
      conexas=res.data.conexas?.length?res.data.conexas:conexas;
      persist();
      refreshAll();
    }
  }catch(e){
    console.warn("Sincronización automática no disponible temporalmente",e);
  }
}
async function sendPdfRemote(base64,r,connectedCompanies=[],title="REGISTRO DE TRABAJO DE ALTO RIESGO"){
  return postRemote({action:"sendPdf",pdfBase64:base64,filename:`${r.ID}.pdf`,empresa:r.Empresa,connectedCompanies,title,registroId:r.ID})
}


function setupSectorizacion(){
  const map=qs("mapSectorizacion");
  if(!map) return;
  qs("btnSectorLogin").onclick=sectorLogin;
  qs("sectorPassword").addEventListener("keydown",e=>{if(e.key==="Enter")sectorLogin()});
  qs("btnSectorLogout").onclick=()=>{
    sectorAdminUnlocked=false;sessionStorage.removeItem("tar_sector_admin");renderSectorizacionAccess()
  };
  qs("btnStartZone").onclick=()=>{
    sectorMarking=true;sectorDraftPoints=[];qs("sectorDraftZone").classList.add("hidden");
    map.classList.add("marking");qs("sectorStepText").innerHTML="Haz clic en la <b>esquina superior izquierda</b> de la zona.";
    toast("Marca el primer punto de la zona");
  };
  qs("btnClearZone").onclick=clearSectorDraft;
  qs("btnCancelSectorEdit").onclick=resetSectorEditor;
  qs("btnSaveSector").onclick=saveSectorConfig;
  qs("sectorSearch").oninput=renderSectorConfigTable;
  map.addEventListener("click",sectorMapClick);
}
function renderSectorizacionAccess(){
  qs("sectorGate").classList.toggle("hidden",sectorAdminUnlocked);
  qs("sectorAdmin").classList.toggle("hidden",!sectorAdminUnlocked);
  if(sectorAdminUnlocked){
    renderSectorZones();
    renderSectorConfigTable();
  }
}
async function sectorLogin(){
  const pwd=qs("sectorPassword").value;
  if(pwd!=="2026Unacem"){toast("Clave incorrecta");return}
  sectorAdminUnlocked=true;
  sessionStorage.setItem("tar_sector_admin","1");
  qs("sectorPassword").value="";
  renderSectorizacionAccess();
  toast("Acceso a sectorización habilitado");
}
function sectorMapClick(e){
  if(!sectorAdminUnlocked || !sectorMarking || e.target.closest(".map-zoom-controls")) return;
  const stage=e.currentTarget.querySelector(".map-stage");
  if(!stage)return;
  const box=stage.getBoundingClientRect();
  const x=((e.clientX-box.left)/box.width)*100;
  const y=((e.clientY-box.top)/box.height)*100;
  if(x<0||x>100||y<0||y>100)return;
  sectorDraftPoints.push([x,y]);
  if(sectorDraftPoints.length===1){
    qs("sectorStepText").innerHTML="Primer punto registrado. Ahora haz clic en la <b>esquina inferior derecha</b>.";
    toast("Primer punto guardado");
  }else{
    sectorMarking=false; e.currentTarget.classList.remove("marking");
    normalizeSectorDraft();
    qs("sectorStepText").textContent="Zona definida. Verifique el título y guarde el sector.";
    toast("Zona definida");
  }
}
function normalizeSectorDraft(){
  if(sectorDraftPoints.length<2)return;
  const a=sectorDraftPoints[0],b=sectorDraftPoints[1];
  const rect=[Math.min(a[0],b[0]),Math.min(a[1],b[1]),Math.max(a[0],b[0]),Math.max(a[1],b[1])];
  sectorDraftPoints=[ [rect[0],rect[1]],[rect[2],rect[3]] ];
  const d=qs("sectorDraftZone");
  d.style.left=rect[0]+"%";d.style.top=rect[1]+"%";d.style.width=(rect[2]-rect[0])+"%";d.style.height=(rect[3]-rect[1])+"%";
  d.classList.remove("hidden");
  qs("sectorSelectionSummary").innerHTML=`<strong>Zona:</strong> definida correctamente para guardar.`;
}
function clearSectorDraft(){
  sectorDraftPoints=[];sectorMarking=false;
  qs("sectorDraftZone").classList.add("hidden");qs("mapSectorizacion")?.classList.remove("marking");
  qs("sectorSelectionSummary").innerHTML="<strong>Zona:</strong> aún no definida.";
  qs("sectorStepText").innerHTML='Haz clic en <b>Marcar zona</b> y luego selecciona dos puntos en el plano.';
}
function resetSectorEditor(){
  qs("sectorEditId").value="";qs("sectorTitulo").value="";clearSectorDraft()
}
async function saveSectorConfig(){
  if(!sectorAdminUnlocked)return;
  const nombre=qs("sectorTitulo").value.trim().toUpperCase();
  if(!nombre){toast("Ingrese el título del sector");return}
  if(sectorDraftPoints.length<2){toast("Primero defina la zona en el plano");return}
  const rect=[sectorDraftPoints[0][0],sectorDraftPoints[0][1],sectorDraftPoints[1][0],sectorDraftPoints[1][1]];
  const sector={
    id:qs("sectorEditId").value||uid("S"),
    nombre,
    x:Number(((rect[0]+rect[2])/2).toFixed(3)),
    y:Number(((rect[1]+rect[3])/2).toFixed(3)),
    rect:rect.map(v=>Number(v.toFixed(3))),
    actualizado:new Date().toLocaleString()
  };

  const idx=userSectors.findIndex(s=>s.id===sector.id);
  if(idx>=0)userSectors[idx]=sector;else userSectors.push(sector);

  if(CONFIG.apiUrl){
    const ok=await postRemote({action:"saveSector",password:"2026Unacem",sector});
    if(!ok){toast("Sector guardado localmente; revise conexión con Apps Script")}
  }
  DATA.lugares=userSectors.map(s=>({nombre:s.nombre,x:s.x,y:s.y,rect:s.rect}));
  populateAllSelects();renderSectorZones();renderSectorConfigTable();renderMapGeneral();resetSectorEditor();
  toast("Sector guardado");
}
function renderSectorZones(){
  const layer=qs("sectorZoneLayer");if(!layer)return;
  const source=userSectors||[];
  layer.innerHTML=source.map(s=>{
    const r=s.rect;const w=r[2]-r[0],h=r[3]-r[1];
    return `<div class="sector-zone" style="left:${r[0]}%;top:${r[1]}%;width:${w}%;height:${h}%" title="${escapeHtml(s.nombre)}" onclick="event.stopPropagation();focusSectorConfig('${String(s.id||"").replaceAll("'","\\'")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')"><span>${escapeHtml(s.nombre)}</span></div>`
  }).join("");
}
function renderSectorConfigTable(){
  const q=(qs("sectorSearch")?.value||"").toLowerCase();
  const source=userSectors||[];
  const rows=source.filter(s=>!q||s.nombre.toLowerCase().includes(q));
  qs("tablaSectoresConfig").innerHTML=rows.map(s=>`<tr><td>${escapeHtml(s.nombre)}</td><td>${escapeHtml(s.actualizado||"")}</td>
  <td><button class="btn mini secondary" onclick="editSectorConfig('${String(s.id||"")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')">Editar</button>
  <button class="btn mini secondary" onclick="focusSectorConfig('${String(s.id||"")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')">Ver</button>
  <button class="btn mini secondary" onclick="deleteSectorConfig('${String(s.id||"")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')">Eliminar</button></td></tr>`).join("")||'<tr><td colspan="3">Sin sectores configurados.</td></tr>';
}
window.focusSectorConfig=function(id,nombre){
  const s=(userSectors||[]).find(x=>(id&&x.id===id)||x.nombre===nombre);if(!s)return;
  const map=qs("mapSectorizacion");const stage=map.querySelector(".map-stage");
  if(map._zoom<2){map._zoom=2;stage.style.width="200%";map.querySelector(".zoom-value").textContent="200%"}
  setTimeout(()=>{
    const left=(s.x/100)*stage.scrollWidth-map.clientWidth/2;
    const top=(s.y/100)*stage.scrollHeight-map.clientHeight/2;
    map.scrollTo({left:Math.max(0,left),top:Math.max(0,top),behavior:"smooth"});
  },50);
}
window.editSectorConfig=function(id,nombre){
  const s=(userSectors||[]).find(x=>(id&&x.id===id)||x.nombre===nombre);if(!s)return;
  qs("sectorEditId").value=s.id||"";qs("sectorTitulo").value=s.nombre;
  sectorDraftPoints=[[s.rect[0],s.rect[1]],[s.rect[2],s.rect[3]]];normalizeSectorDraft();focusSectorConfig(id,nombre);
  window.scrollTo({top:0,behavior:"smooth"});
}
window.deleteSectorConfig=async function(id,nombre){
  if(!confirm(`¿Eliminar el sector "${nombre}"?`))return;
  const s=(userSectors||[]).find(x=>(id&&x.id===id)||x.nombre===nombre);
  if(!s)return;
  userSectors=userSectors.filter(x=>x!==s);
  if(CONFIG.apiUrl)await postRemote({action:"deleteSector",password:"2026Unacem",id:s.id,nombre:s.nombre});
  DATA.lugares=userSectors.map(x=>({nombre:x.nombre,x:x.x,y:x.y,rect:x.rect}));
  populateAllSelects();renderSectorZones();renderSectorConfigTable();renderMapGeneral();toast("Sector eliminado");
}


// Sincronización silenciosa: al abrir, al volver a la pestaña y cada 5 minutos.
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="visible") loadRemote();
});
setInterval(()=>{ if(document.visibilityState==="visible") loadRemote(); },300000);

document.addEventListener("DOMContentLoaded",init);

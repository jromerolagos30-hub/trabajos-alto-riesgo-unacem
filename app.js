const DEFAULT_DATA = {
  empresas:["FGA INGENIEROS S.A.","CORMEI","CIME INGENIEROS","AGEIN","HAUG","M Y S","VERTISUB"],
  trabajos:["Trabajos en caliente","Trabajos en altura","Izaje de Cargas","Aislamiento de Energía","Espacio Confinado"],
  riesgos:[
    "PROYECCIÓN DE MATERIAL CALIENTE",
    "CAÍDA DE OBJETOS",
    "CAÍDA DE CARGA SUSPENDIDA",
    "CONTACTO DIRECTO O INDIRECTO CON ELECTRICIDAD",
    "DEFICIENCIA DE OXIGENO",
    "INHALACIÓN DE PRODUCTO QUÍMICO",
    "DERRUMBE O DESPLOME DE TALUD O PAREDES",
    "CONTACTO TÉRMICO CON GASES CALIENTES",
    "VOLCADURA DE EQUIPO DE IZAJE",
    "CAÍDA DE PERSONAS DE ALTURA",
    "APRISIONAMIENTO O ATRAPAMIENTO POR PARTES MÓVILES"
  ],
  areas:[
    "ALMC","DMMA","DPRA","DPA","DMEA","DEDA","DALM","DSHIU","DPRC","DMMC",
    "DMEGC","DISGC","DMEIC","DIA","DMPC","DMPRC","DEPC","DQC","DMAU"
  ],
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

const EMERGENCY_CONTROLS = {
  "Trabajos en caliente":[
    "Brigada con capacitación en uso de extintores",
    "Observador de fuego",
    "Extintor",
    "Plan de respuesta difundido",
    "Maletín de primeros auxilios"
  ],
  "Trabajos en altura":[
    "Brigada con capacitación de rescate en trabajos en altura",
    "Equipo de rescate en altura",
    "Plan de respuesta difundido",
    "Cinta antitrauma",
    "Maletín de primeros auxilios"
  ],
  "Izaje de Cargas":[
    "Brigada de primeros auxilios",
    "Maletín de primeros auxilios",
    "Plan de respuesta difundido"
  ],
  "Aislamiento de Energía":[
    "Brigada con capacitación de reanimación cardiopulmonar",
    "Maletín de primeros auxilios",
    "Plan de respuesta difundido"
  ],
  "Espacio Confinado":[
    "Brigada con capacitación de rescate en espacios confinados",
    "Detector de gases",
    "Vigía de espacio confinado",
    "Trípode de acuerdo a evaluación",
    "Sistema de polipastos de acuerdo a evaluación",
    "Plan de respuesta difundido",
    "Maletín de primeros auxilios"
  ],
  "Excavación":[
    "Brigada con capacitación de rescate",
    "Plan de respuesta difundido",
    "Maletín de primeros auxilios"
  ]
};

const EMERGENCY_OPTIONAL_CONTROLS = new Set([
  "Trípode de acuerdo a evaluación",
  "Sistema de polipastos de acuerdo a evaluación"
]);
function isOptionalEmergencyControl(control){
  return EMERGENCY_OPTIONAL_CONTROLS.has(String(control||"").trim());
}



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
// REV.12.8: carga inicial liviana + sincronización completa diferida. Sectorización usa exclusivamente Sectores.
let sectorAdminUnlocked = false;
sessionStorage.removeItem("tar_sector_admin");
let sectorMarking = false;
let sectorDraftPoints = [];
const FRENTES=["Planta Nueva","Planta Antigua"];
function normFrente(v){return String(v||"Planta Nueva").toLowerCase().includes("antigua")?"Planta Antigua":"Planta Nueva"}
function mapAsset(frente){return normFrente(frente)==="Planta Antigua"?"mapa_planta_antigua.jpg":"mapa_planta_nueva.png"}
function sectorsFor(frente){const f=normFrente(frente);return (userSectors||[]).filter(s=>normFrente(s.frente)===f)}
function updateMapForFrente(context){
  const f=context==="registro"?normFrente(qs("frente")?.value):context==="mapa"?normFrente(qs("mapFiltroFrente")?.value):normFrente(qs("sectorFrente")?.value);
  const img=qs(context==="registro"?"registroMapImg":context==="mapa"?"mapGeneralImg":"sectorMapImg");if(img){img.src=mapAsset(f);img.alt=`Mapa de evacuación ${f}`}
  if(context==="registro"){
    renderResourceMarkers("registroResourceLayer",f);
    qs("registroMapTitle").textContent=`Plano – ${f}`;const ls=sectorsFor(f);setOptions("lugar",ls.map(x=>x.nombre),"Seleccione");clearMarker();
  }
  if(context==="mapa"){renderResourceMarkers("mapResourceLayer",f);selectedSector=null;qs("sectorEmpty")?.classList.remove("hidden");qs("sectorDetail")?.classList.add("hidden");renderMapGeneral()}
  if(context==="sectorizacion"){renderResourceMarkers("sectorResourceLayer",f);populateResourceSectorOptions();clearSectorDraft();resetSectorEditor();renderSectorZones();renderSectorConfigTable()}
}
let userSectors = [];
let emergencyResources = [];
let resourceMarking = false;
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
  const safeConexas=conexas.map(c=>({...c,FotoReunion:"",ArchivoReunion:""}));
  try{localStorage.setItem("tar_conexas",JSON.stringify(safeConexas))}catch(e){}
}
function isActive(r){return (r.EstadoOperativo||"ACTIVO")!=="FINALIZADO"}

function init(){
  ["fechaResumen","fecha","filtroMisFecha","conFecha","filtroConFecha","mapFiltroFecha","listaFecha"].forEach(id=>qs(id).value=today());
  qs("horaInicio").value=nowTime(); qs("horaTermino").value="17:00"; qs("frente").value="Planta Nueva"; qs("mapFiltroFrente").value="Planta Nueva"; qs("sectorFrente").value="Planta Nueva"; qs("conHora").value=nowTime(); qs("contFecha").value=yesterday();
  wireNavigation(); setupZoomableMaps(); wireEvents(); setupSectorizacion();
  // REV.12.8: mostrar snapshot inmediatamente; pedir solo catálogos/sectores primero.
  const hadSnapshot=loadCachedRemoteSnapshot();
  renderConfig(); refreshAll(); renderEmergencyControls();
  loadFastBootstrap();
  // Registros, conexas y dashboards se sincronizan después, sin bloquear los desplegables.
  setTimeout(()=>loadRemote(), hadSnapshot?1200:1800);
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
  qs("trabajosCriticos").addEventListener("change",renderEmergencyControls);
  qs("emergencyControlsContainer").addEventListener("change",updateRegistroEmergencyPercent);
  qs("btnGuardarBorrador").onclick=saveDraft;
  qs("lugar").onchange=()=>setMarkerByLugar(qs("lugar").value); qs("frente").onchange=()=>updateMapForFrente("registro");
  qs("mapRegistro").onclick=mapRegistroClick;
  qs("btnElegirMapa").onclick=()=>{qs("mapRegistro").scrollIntoView({behavior:"smooth",block:"center"});toast("Acerca el plano y haz clic exactamente sobre el nombre del lugar")};
  qs("btnResetMarker").onclick=clearMarker;
  qs("filtroMisEmpresa").onchange=renderMisRegistros; qs("filtroMisFecha").onchange=renderMisRegistros;
  qs("btnBuscarAnterior").onclick=openContinue; qs("closeContinue").onclick=()=>qs("continueModal").classList.add("hidden");
  qs("contEmpresa").onchange=renderContinueTable; qs("contFecha").onchange=renderContinueTable;

  qs("conMiEmpresa").onchange=updateConRegistroOptions; qs("conFecha").onchange=updateConRegistroOptions; qs("conRegistroPropio").onchange=renderConexaOwnRecord;
  qs("conLugarManual").onchange=()=>{const l=DATA.lugares.find(x=>x.nombre===qs("conLugarManual").value);if(l)positionMarker(qs("conexaMarker"),l.x,l.y,l.nombre)};
  qs("conFotoReunion").onchange=handleConexaPhoto;
  qs("btnAgregarEmpresaConexa").onclick=()=>addConexaCompany();
  qs("formConexa").onsubmit=submitConexa;
  qs("filtroConEmpresa").onchange=renderConexasTable; qs("filtroConEmpresaInvolucrada").onchange=renderConexasTable; qs("filtroConFecha").onchange=renderConexasTable;

  ["mapFiltroTrabajo","mapFiltroEmpresa","mapFiltroArea","mapFiltroFecha"].forEach(id=>qs(id).onchange=renderMapGeneral); qs("mapFiltroFrente").onchange=()=>updateMapForFrente("mapa");
  qs("btnSectorDashboard").onclick=()=>{showView("lista"); if(selectedSector){qs("listaLugar").value=selectedSector;renderListaDashboard()}};

  ["listaFrente","listaEmpresa","listaLugar","listaArea","listaFecha"].forEach(id=>qs(id).onchange=renderListaDashboard);
  qs("btnDescargarInforme").onclick=descargarInformeDashboard;
  qs("btnLimpiarFiltros").onclick=()=>{qs("listaFrente").value="";qs("listaEmpresa").value="";qs("listaLugar").value="";qs("listaArea").value="";qs("listaFecha").value=today();renderListaDashboard()};
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
  const current={
    empresa:qs("empresa")?.value||"",
    area:qs("areaUsuaria")?.value||"",
    lugar:qs("lugar")?.value||"",
    trabajos:selectedMulti("trabajosCriticos"),
    riesgos:selectedMulti("riesgosCriticos")
  };

  ["empresa","filtroMisEmpresa","conMiEmpresa","filtroConEmpresa","filtroConEmpresaInvolucrada","contEmpresa"].forEach(id=>setOptions(id,DATA.empresas,id.startsWith("filtro")?"Todas":"Seleccione"));
  setOptions("mapFiltroEmpresa",DATA.empresas,"Todas");setOptions("listaEmpresa",DATA.empresas,"Todas");

  setOptions("areaUsuaria",DATA.areas,"Seleccione");
  setOptions("mapFiltroArea",DATA.areas,"Todas");setOptions("listaArea",DATA.areas,"Todas");

  setOptions("lugar",sectorsFor(qs("frente")?.value||"Planta Nueva").map(x=>x.nombre),"Seleccione");
  setOptions("listaLugar",DATA.lugares.map(x=>x.nombre),"Todos");

  setOptions("mapFiltroTrabajo",DATA.trabajos,"Todos");
  renderMulti("trabajosCriticos",DATA.trabajos);
  renderMulti("riesgosCriticos",DATA.riesgos);

  if(current.empresa&&DATA.empresas.includes(current.empresa))qs("empresa").value=current.empresa;
  if(current.area&&DATA.areas.includes(current.area))qs("areaUsuaria").value=current.area;
  if(current.lugar&&DATA.lugares.some(x=>x.nombre===current.lugar))qs("lugar").value=current.lugar;
  setMulti("trabajosCriticos",current.trabajos.filter(x=>DATA.trabajos.includes(x)));
  setMulti("riesgosCriticos",current.riesgos.filter(x=>DATA.riesgos.includes(x)));
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

  const rsKpi=registros.filter(r=>r.Fecha===(qs("fechaResumen")?.value||today()));
  const emergencyGlobal=globalEmergencyCompliance(rsKpi);
  if(qs("kpiCumplimientoEmergencia")){
    qs("kpiCumplimientoEmergencia").textContent=emergencyGlobal.pct+"%";
    qs("kpiCumplimientoEmergenciaDetalle").textContent=`${emergencyGlobal.implemented} de ${emergencyGlobal.required} controles implementados`;
  }
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
  const inicioEmp={};rs.forEach(r=>inicioEmp[r.Empresa]=(inicioEmp[r.Empresa]||0)+Number(r.NTrabajadores||0));
  drawChart("chartInicioTrabajadoresEmpresa",inicioEmp,"bar");
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
          const p=el.tooltipPosition();
          const horizontal=chart.options.indexAxis==="y";
          ctx.textAlign=horizontal?"left":"center";
          ctx.fillText(String(v),horizontal?p.x+7:p.x,horizontal?p.y:p.y-10);
          ctx.textAlign="center";
        }else if(chart.config.type==="doughnut"){
          const p=el.tooltipPosition();ctx.fillStyle="#17212b";ctx.fillText(String(v),p.x,p.y);
        }
      });
    });ctx.restore();
  }
};
Chart.register(valueLabelsPlugin);
function isMobileChart(){return window.matchMedia("(max-width: 700px)").matches}
function setChartCanvasHeight(id,count=0,type="bar"){
  const canvas=qs(id);if(!canvas)return;
  const wrap=canvas.closest(".chart-scroll");if(!wrap)return;
  if(type==="doughnut"){
    wrap.style.height=isMobileChart()?"300px":"330px";
  }else if(isMobileChart()){
    wrap.style.height=Math.max(300,Math.min(760,120+Math.max(count,1)*44))+"px";
  }else{
    wrap.style.height=Math.max(310,Math.min(560,180+Math.max(count,1)*24))+"px";
  }
}
function drawChart(id,data,type,opts={}){
  const ctx=qs(id); if(!ctx)return; if(charts[id]) charts[id].destroy();
  const labels=Object.keys(data), vals=Object.values(data), mobile=isMobileChart();
  const useHorizontal=type==="bar" && (opts.horizontalOnMobile!==false) && mobile;
  setChartCanvasHeight(id,labels.length,type);
  charts[id]=new Chart(ctx,{type,data:{labels,datasets:[{label:opts.datasetLabel||"Cantidad",data:vals,borderWidth:1}]},options:{
    responsive:true,maintainAspectRatio:false,indexAxis:useHorizontal?"y":"x",
    layout:{padding:{top:useHorizontal?8:20,right:useHorizontal?28:8,bottom:8,left:8}},
    plugins:{legend:{display:type==="doughnut",position:mobile?"bottom":"right"},valueLabels:{},tooltip:{callbacks:{title:(items)=>items?.[0]?.label||""}}},
    scales:type==="doughnut"?{}:(useHorizontal?{
      x:{beginAtZero:true,ticks:{precision:0}},
      y:{ticks:{autoSkip:false,font:{size:10},callback:function(v){const t=this.getLabelForValue(v);return t.length>32?t.slice(0,31)+"…":t}}}
    }:{
      y:{beginAtZero:true,ticks:{precision:0}},
      x:{ticks:{autoSkip:false,maxRotation:labels.some(x=>String(x).length>18)?45:0,minRotation:0,font:{size:10}}}
    })
  }});
}
function countMissingEmergencyControls(rs){
  const out={};
  rs.forEach(r=>missingEmergencyControlsFromRecord(r).forEach(x=>out[x.control]=(out[x.control]||0)+1));
  return out;
}

function pointInRect(x,y,rect){
  return Array.isArray(rect) && rect.length===4 && x>=rect[0] && x<=rect[2] && y>=rect[1] && y<=rect[3];
}
function findZoneAt(x,y){
  // V4.1: solo reconoce sectores creados manualmente en la interfaz Sectorización.
  const source=sectorsFor(qs("frente")?.value||"Planta Nueva");
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
  const l=sectorsFor(qs("frente")?.value||"Planta Nueva").find(x=>x.nombre===nombre); if(!l)return;
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



function emergencyControlsForWork(work){
  const raw=String(work||"").trim();
  if(EMERGENCY_CONTROLS[raw])return EMERGENCY_CONTROLS[raw];

  const n=raw.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  if(n.includes("caliente"))return EMERGENCY_CONTROLS["Trabajos en caliente"]||[];
  if(n.includes("altura"))return EMERGENCY_CONTROLS["Trabajos en altura"]||[];
  if(n.includes("izaje"))return EMERGENCY_CONTROLS["Izaje de Cargas"]||[];
  if(n.includes("aislamiento") || n.includes("energia"))return EMERGENCY_CONTROLS["Aislamiento de Energía"]||[];
  if(n.includes("confinado"))return EMERGENCY_CONTROLS["Espacio Confinado"]||[];
  if(n.includes("excav"))return EMERGENCY_CONTROLS["Excavación"]||[];
  return [];
}
function renderEmergencyControls(){
  const box=qs("emergencyControlsContainer");if(!box)return;
  const selected=selectedMulti("trabajosCriticos");
  const current=new Set([...document.querySelectorAll(".emergency-control-check:checked")].map(x=>x.value));
  if(!selected.length){
    box.innerHTML='<div class="empty-state-small">Seleccione al menos un trabajo crítico.</div>';
    return;
  }
  box.innerHTML=selected.map(work=>{
    const controls=emergencyControlsForWork(work);
    if(!controls.length)return "";
    return `<div class="emergency-work-group">
      <h4>${escapeHtml(work)}</h4>
      <div class="emergency-checks">
      ${controls.map(c=>{
        const key=work+"||"+c;
        return `<label class="emergency-check ${isOptionalEmergencyControl(c)?"optional-control":""}"><input type="checkbox" class="emergency-control-check" value="${escapeHtml(key)}" ${current.has(key)?"checked":""}><span>${escapeHtml(c)}</span></label>`;
      }).join("")}
      </div>
      ${work.toLowerCase().includes("confinado")?`<div class="emergency-note">El trípode y el sistema de polipastos son controles según evaluación y no afectan el porcentaje de cumplimiento.</div>`:""}
    </div>`;
  }).join("")||'<div class="empty-state-small">No hay controles configurados para esta selección.</div>';

  updateRegistroEmergencyPercent();
}
function updateRegistroEmergencyPercent(){
  const el=qs("registroCumplimientoEmergencia");if(!el)return;
  const stats=emergencyComplianceStatsFromSelection();
  el.textContent=stats.pct+"%";
}
function selectedEmergencyControls(){
  const out={};
  document.querySelectorAll(".emergency-control-check:checked").forEach(ch=>{
    const parts=String(ch.value).split("||");const work=parts.shift(),control=parts.join("||");
    if(!out[work])out[work]=[];
    out[work].push(control);
  });
  return out;
}
function hasEmergencySelectionForEachWork(){
  const selected=selectedMulti("trabajosCriticos");
  const chosen=selectedEmergencyControls();
  return selected.every(work=>{
    const required=emergencyControlsForWork(work).filter(c=>!isOptionalEmergencyControl(c));
    if(!required.length)return true;
    const implemented=(chosen[work]||[]).filter(c=>!isOptionalEmergencyControl(c));
    return implemented.length>0;
  });
}
function setEmergencyControls(data){
  renderEmergencyControls();
  const wanted=new Set();
  Object.entries(data||{}).forEach(([w,list])=>(list||[]).forEach(c=>wanted.add(w+"||"+c)));
  document.querySelectorAll(".emergency-control-check").forEach(ch=>ch.checked=wanted.has(ch.value));
}


function emergencyComplianceStatsFromSelection(){
  const works=selectedMulti("trabajosCriticos");
  const chosen=selectedEmergencyControls();
  let required=0,implemented=0;
  works.forEach(w=>{
    const req=emergencyControlsForWork(w).filter(c=>!isOptionalEmergencyControl(c));
    const imp=(chosen[w]||[]).filter(c=>!isOptionalEmergencyControl(c));
    required+=req.length;
    implemented+=imp.length;
  });
  const pct=required?Math.round((implemented/required)*100):0;
  return {required,implemented,pct};
}
function emergencyComplianceStatsFromRecord(r){
  const works=arr(r.TrabajoCritico);
  const chosen=r.ControlesEmergencia||{};
  let required=0,implemented=0;
  works.forEach(w=>{
    const req=emergencyControlsForWork(w).filter(c=>!isOptionalEmergencyControl(c));
    const imp=arr(chosen[w]).filter(c=>!isOptionalEmergencyControl(c));
    required+=req.length;
    implemented+=imp.length;
  });
  const pct=required?Math.round((implemented/required)*100):0;
  return {required,implemented,pct};
}
function missingEmergencyControlsFromSelection(){
  const works=selectedMulti("trabajosCriticos"),chosen=selectedEmergencyControls(),out=[];
  works.forEach(work=>{
    const implemented=new Set(arr(chosen[work]).filter(c=>!isOptionalEmergencyControl(c)));
    emergencyControlsForWork(work).filter(c=>!isOptionalEmergencyControl(c)).forEach(control=>{
      if(!implemented.has(control))out.push({work,control});
    });
  });
  return out;
}
function missingEmergencyControlsFromRecord(r){
  if(Array.isArray(r.ControlesEmergenciaFaltantes)){
    return r.ControlesEmergenciaFaltantes.map(x=>typeof x==="string"?{work:"",control:x}:x).filter(x=>x&&x.control);
  }
  if(typeof r.ControlesEmergenciaFaltantes==="string"&&r.ControlesEmergenciaFaltantes.trim()){
    try{const x=JSON.parse(r.ControlesEmergenciaFaltantes);if(Array.isArray(x))return x.map(v=>typeof v==="string"?{work:"",control:v}:v)}catch(e){}
  }
  const works=arr(r.TrabajoCritico),chosen=r.ControlesEmergencia||{},out=[];
  works.forEach(work=>{
    const implemented=new Set(arr(chosen[work]).filter(c=>!isOptionalEmergencyControl(c)));
    emergencyControlsForWork(work).filter(c=>!isOptionalEmergencyControl(c)).forEach(control=>{
      if(!implemented.has(control))out.push({work,control});
    });
  });
  return out;
}
function missingEmergencyText(r){
  const m=missingEmergencyControlsFromRecord(r);
  if(!m.length)return "Ninguno";
  const by={};m.forEach(x=>{const w=x.work||"Control";(by[w]||(by[w]=[])).push(x.control)});
  return Object.entries(by).map(([w,cs])=>`${w}: ${[...new Set(cs)].join(", ")}`).join(" | ");
}

function complianceRange(pct){
  pct=Number(pct||0);
  if(pct===100)return "100";
  if(pct>=75)return "75-99";
  if(pct>=50)return "50-74";
  return "0-49";
}
function complianceBadgeClass(pct){
  pct=Number(pct||0);
  if(pct===100)return "compliance-full";
  if(pct>=75)return "compliance-high";
  if(pct>=50)return "compliance-partial";
  return "compliance-low";
}
function recordMatchesCompliance(r,range){
  if(!range)return true;
  return complianceRange(emergencyComplianceStatsFromRecord(r).pct)===range;
}
function globalEmergencyCompliance(rs){
  let required=0,implemented=0,pctSum=0,pctN=0;
  rs.forEach(r=>{
    const req=Number(r.NControlesEmergenciaRequeridos||0),imp=Number(r.NControlesEmergenciaImplementados||0);
    if(req>0){required+=req;implemented+=Math.min(req,imp)}
    pctSum+=recordEmergencyPct(r);pctN++;
  });
  return {required,implemented,pct:required?Math.round((implemented/required)*100):(pctN?Math.round(pctSum/pctN):0)};
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
  if(!hasEmergencySelectionForEachWork())return toast("Seleccione al menos un control de respuesta a emergencias para cada trabajo crítico");
  if(!qs("mapX").value || !qs("mapY").value)return toast("Seleccione la ubicación en el plano");
  const existing=qs("registroId").value;
  const r={
    ID:existing||uid("R"),Frente:normFrente(qs("frente").value),Empresa:qs("empresa").value,AreaUsuaria:qs("areaUsuaria").value,TrabajoCritico:tc,Lugar:qs("lugar").value,ZonaEspecifica:qs("zonaEspecifica").value.trim(),
    Fecha:qs("fecha").value,HoraInicio:qs("horaInicio").value,HoraTermino:qs("horaTermino").value,NTrabajadores:Number(qs("nTrabajadores").value),
    Descripcion:qs("descripcion").value,RiesgosCriticos:rc,ControlesEmergencia:selectedEmergencyControls(),ControlesEmergenciaFaltantes:missingEmergencyControlsFromSelection(),NControlesEmergenciaRequeridos:emergencyComplianceStatsFromSelection().required,NControlesEmergenciaImplementados:emergencyComplianceStatsFromSelection().implemented,PorcentajeCumplimientoEmergencia:emergencyComplianceStatsFromSelection().pct,Conexas:"NO",EstadoOperativo:"ACTIVO",
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
  const draft={empresa:qs("empresa").value,area:qs("areaUsuaria").value,lugar:qs("lugar").value,zona:qs("zonaEspecifica").value,fecha:qs("fecha").value,ini:qs("horaInicio").value,fin:qs("horaTermino").value,n:qs("nTrabajadores").value,desc:qs("descripcion").value,tc:selectedMulti("trabajosCriticos"),rc:selectedMulti("riesgosCriticos"),x:qs("mapX").value,y:qs("mapY").value};
  localStorage.setItem("tar_draft",JSON.stringify(draft));toast("Borrador guardado en este dispositivo")
}
function resetRegistroForm(){
  qs("formRegistro").reset();qs("registroId").value="";qs("fecha").value=today();qs("horaInicio").value=nowTime();qs("horaTermino").value="17:00";qs("nTrabajadores").value=1;
  clearMarker();setMulti("trabajosCriticos",[]);setMulti("riesgosCriticos",[]);renderEmergencyControls()
}

function renderMisRegistros(){
  const emp=qs("filtroMisEmpresa").value, d=qs("filtroMisFecha").value||today();
  const rs=registros.filter(r=>r.Fecha===d && (!emp||r.Empresa===emp));
  qs("tablaMisRegistros").innerHTML=rs.map(r=>`<tr><td>${r.ID}</td><td>${escapeHtml(r.Empresa)}</td><td>${escapeHtml(normFrente(r.Frente))}</td><td>${escapeHtml(r.Lugar)}</td><td>${arr(r.TrabajoCritico).map(escapeHtml).join(", ")}</td><td class="desc-cell">${escapeHtml(r.Descripcion||"")}</td><td>${r.HoraInicio}–${r.HoraTermino}</td><td>${r.NTrabajadores}</td>
  <td><button class="btn mini secondary" onclick="editRegistro('${r.ID}')">Editar</button><button class="btn mini secondary" onclick="openConexaFor('${r.ID}')">Conexa</button>${isActive(r)?`<button class="btn mini secondary" onclick="finalizarRegistro('${r.ID}')">Finalizar</button>`:"<b>Finalizado</b>"}<button class="btn mini secondary" onclick="continuarRegistro('${r.ID}')">Continuar mañana</button></td></tr>`).join("")||`<tr><td colspan="9">Sin registros.</td></tr>`
}
window.editRegistro=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;showView("registro");qs("registroId").value=r.ID;qs("empresa").value=r.Empresa;qs("areaUsuaria").value=r.AreaUsuaria;qs("frente").value=normFrente(r.Frente);updateMapForFrente("registro");qs("lugar").value=r.Lugar;qs("zonaEspecifica").value=r.ZonaEspecifica||"";qs("fecha").value=r.Fecha;qs("horaInicio").value=r.HoraInicio;qs("horaTermino").value=r.HoraTermino;qs("nTrabajadores").value=r.NTrabajadores;qs("descripcion").value=r.Descripcion;setMulti("trabajosCriticos",arr(r.TrabajoCritico));setMulti("riesgosCriticos",arr(r.RiesgosCriticos));setEmergencyControls(r.ControlesEmergencia||{});qs("mapX").value=r.X;qs("mapY").value=r.Y;positionMarker(qs("registroMarker"),r.X,r.Y,r.Lugar);qs("mapCoordText").textContent=`Lugar identificado en el plano: ${r.Lugar}`;window.scrollTo({top:0,behavior:"smooth"})
}
window.finalizarRegistro=async function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;
  r.EstadoOperativo="FINALIZADO";r.HoraFinalReal=nowTime();r.Actualizado=new Date().toISOString();persist();addHistoryLocal("REGISTRO",id,"FINALIZACIÓN",r.Empresa);
  if(CONFIG.apiUrl)await postRemote({action:"finalizarRegistro",id,hora:r.HoraFinalReal});refreshAll();toast("Trabajo finalizado")
}
window.continuarRegistro=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;const d=new Date(r.Fecha+"T12:00:00");d.setDate(d.getDate()+1);const next=d.toISOString().slice(0,10);
  showView("registro");qs("registroId").value="";qs("empresa").value=r.Empresa;qs("areaUsuaria").value=r.AreaUsuaria;qs("frente").value=normFrente(r.Frente);updateMapForFrente("registro");qs("lugar").value=r.Lugar;qs("zonaEspecifica").value=r.ZonaEspecifica||"";qs("fecha").value=next;qs("horaInicio").value=r.HoraInicio;qs("horaTermino").value=r.HoraTermino;qs("nTrabajadores").value=r.NTrabajadores;qs("descripcion").value=r.Descripcion;setMulti("trabajosCriticos",arr(r.TrabajoCritico));setMulti("riesgosCriticos",arr(r.RiesgosCriticos));setEmergencyControls(r.ControlesEmergencia||{});qs("mapX").value=r.X;qs("mapY").value=r.Y;positionMarker(qs("registroMarker"),r.X,r.Y,r.Lugar);qs("mapCoordText").textContent=`Lugar identificado en el plano: ${r.Lugar}`;toast("Actividad copiada. Revise y actualice antes de registrar.")
}
function openContinue(){qs("continueModal").classList.remove("hidden");renderContinueTable()}
function renderContinueTable(){
  const emp=qs("contEmpresa").value,d=qs("contFecha").value;const rs=registros.filter(r=>r.Fecha===d&&(!emp||r.Empresa===emp));
  qs("tablaContinuar").innerHTML=rs.map(r=>`<tr><td>${r.Empresa}</td><td>${r.Lugar}</td><td>${arr(r.TrabajoCritico).join(", ")}</td><td>${r.NTrabajadores}</td><td><button class="btn mini" onclick="pickContinue('${r.ID}')">Usar registro</button></td></tr>`).join("")||`<tr><td colspan="5">Sin registros para el filtro.</td></tr>`
}
window.pickContinue=function(id){qs("continueModal").classList.add("hidden");continuarRegistro(id)}

function updateConRegistroOptions(){
  const emp=qs("conMiEmpresa").value,d=qs("conFecha").value||today();const rs=registros.filter(r=>r.Empresa===emp&&r.Fecha===d);
  const prev=qs("conRegistroPropio").value;
  qs("conRegistroPropio").innerHTML=`<option value="">Seleccione</option>`+rs.map(r=>`<option value="${r.ID}">${r.ID} · ${escapeHtml(r.Lugar)} · ${escapeHtml(arr(r.TrabajoCritico).join(", "))}</option>`).join("")+`<option value="__OTRA__">Otros · Actividad no registrada como alto riesgo</option>`;
  setOptions("conLugarManual",DATA.lugares.map(x=>x.nombre),"Seleccione");
  if([...qs("conRegistroPropio").options].some(o=>o.value===prev))qs("conRegistroPropio").value=prev;
  renderConexaOwnRecord()
}
function renderConexaOwnRecord(){
  const value=qs("conRegistroPropio").value,isOther=value==="__OTRA__";
  const r=registros.find(x=>x.ID===value);const marker=qs("conexaMarker"),box=qs("conActividadResumen"),manual=qs("conActividadManualBox");
  manual.classList.toggle("hidden",!isOther);
  qs("conActividadManual").required=isOther;qs("conLugarManual").required=isOther;
  if(isOther){
    marker.classList.add("hidden");box.classList.add("hidden");box.innerHTML="";
    return;
  }
  if(!r){marker.classList.add("hidden");box.classList.add("hidden");box.innerHTML="";return}
  positionMarker(marker,r.X,r.Y,r.Lugar);
  box.classList.remove("hidden");
  box.innerHTML=`<strong>${escapeHtml(r.Empresa)} · ${escapeHtml(r.Lugar)}</strong>
    ${escapeHtml(r.Descripcion)}<br><b>Trabajos críticos:</b> ${arr(r.TrabajoCritico).map(escapeHtml).join(", ")}
    <br><b>Riesgos reportados:</b> ${arr(r.RiesgosCriticos).map(escapeHtml).join(", ")}`;
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

function fileToDataURL(file){
  return new Promise((res,rej)=>{
    const fr=new FileReader();
    fr.onload=()=>res(fr.result);
    fr.onerror=rej;
    fr.readAsDataURL(file);
  });
}
async function fileToOptimizedDataURL(file,maxDim=1800,quality=.88){
  const data=await new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=rej;fr.readAsDataURL(file)});
  const img=await loadImage(data);let w=img.naturalWidth,h=img.naturalHeight;
  const scale=Math.min(1,maxDim/Math.max(w,h));w=Math.round(w*scale);h=Math.round(h*scale);
  const c=document.createElement("canvas");c.width=w;c.height=h;const ctx=c.getContext("2d");ctx.drawImage(img,0,0,w,h);
  return c.toDataURL("image/jpeg",quality);
}
function loadImage(src){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=src})}
async function waitForPdfJs(timeoutMs=7000){
  const start=Date.now();
  while(!window.pdfjsLib && Date.now()-start<timeoutMs){
    await new Promise(r=>setTimeout(r,120));
  }
  if(!window.pdfjsLib)throw new Error("PDF.js no terminó de cargar");
  return window.pdfjsLib;
}
async function pdfFirstPageToImage(file){
  const pdfjs=await waitForPdfJs();
  const buffer=await file.arrayBuffer();
  const pdf=await pdfjs.getDocument({data:buffer}).promise;
  const page=await pdf.getPage(1);
  const base=page.getViewport({scale:1});
  const scale=Math.max(1,1600/base.width);
  const viewport=page.getViewport({scale});
  const canvas=document.createElement("canvas");
  canvas.width=Math.round(viewport.width);
  canvas.height=Math.round(viewport.height);
  const ctx=canvas.getContext("2d",{alpha:false});
  ctx.fillStyle="#fff";ctx.fillRect(0,0,canvas.width,canvas.height);
  await page.render({canvasContext:ctx,viewport}).promise;
  return canvas.toDataURL("image/jpeg",0.9);
}

async function handleConexaPhoto(e){
  const f=e.target.files?.[0];
  pendingConexaPhoto="";
  const preview=qs("conFotoPreview");
  if(!f){preview.classList.add("hidden");preview.innerHTML="";return}
  try{
    if(f.type==="application/pdf" || f.name.toLowerCase().endsWith(".pdf")){
      const data=await fileToDataURL(f);
      let previewImage="";
      try{
        previewImage=await pdfFirstPageToImage(f);
      }catch(pdfErr){
        console.warn("No se pudo renderizar la vista previa del PDF",pdfErr);
      }
      pendingConexaPhoto=JSON.stringify({kind:"pdf",name:f.name,type:"application/pdf",data,previewImage});
      preview.innerHTML=previewImage
        ? `<div class="file-preview-card"><span class="file-icon">📄</span><span>${escapeHtml(f.name)}<br><small>PDF adjunto · vista previa lista</small></span></div><div class="photo-preview"><img src="${previewImage}" alt="Vista previa PDF"></div>`
        : `<div class="file-preview-card"><span class="file-icon">📄</span><span>${escapeHtml(f.name)}<br><small>PDF adjunto</small></span></div>`;
      preview.classList.remove("hidden");
    }else if(f.type.startsWith("image/")){
      const data=await fileToOptimizedDataURL(f);
      pendingConexaPhoto=JSON.stringify({kind:"image",name:f.name,type:"image/jpeg",data});
      preview.innerHTML=`<img src="${data}" alt="Evidencia de reunión">`;
      preview.classList.remove("hidden");
    }else{
      toast("Formato no permitido. Use imagen o PDF.");
      e.target.value="";
    }
  }catch(err){
    console.error(err);toast("No se pudo procesar el archivo");e.target.value="";
  }
}
function conexaSignature(c){
  return JSON.stringify({
    r:c.RegistroID,m:c.MiEmpresa,f:c.Fecha,t:c.TipoActividadPropia||"REGISTRADA_TAR",am:normalizeText(c.ActividadPropiaManual||""),l:c.Lugar,
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
  const ownValue=qs("conRegistroPropio").value,isOther=ownValue==="__OTRA__";
  const r=isOther?null:registros.find(x=>x.ID===ownValue);
  if(!isOther&&!r)return toast("Seleccione la actividad propia reportada");
  if(isOther&&!qs("conActividadManual").value.trim())return toast("Describa la actividad propia no TAR");
  if(isOther&&!qs("conLugarManual").value)return toast("Seleccione el lugar / sector de la actividad no TAR");
  const empresas=collectConexas();if(!empresas.length)return toast("Agregue al menos una empresa conexa");
  if(empresas.some(x=>!x.riesgos.length))return toast("Cada empresa conexa debe tener al menos un riesgo crítico seleccionado");
  if(!qs("conObservaciones").value.trim())return toast("Complete el campo Observaciones / acuerdos antes de guardar la coordinación");
  if(!pendingConexaPhoto)return toast("La foto o archivo del registro de reunión es obligatorio");
  const editId=qs("conexaEditId").value,current=editId?conexas.find(x=>x.ID===editId):null;
  const manualActivity=isOther?qs("conActividadManual").value.trim():"";
  const lugar=isOther?qs("conLugarManual").value:r.Lugar;
  const c={ID:editId||uid("C"),RegistroID:isOther?"":r.ID,TipoActividadPropia:isOther?"OTRA_NO_TAR":"REGISTRADA_TAR",ActividadPropiaManual:manualActivity,Fecha:qs("conFecha").value,HoraGestion:qs("conHora").value,MiEmpresa:qs("conMiEmpresa").value,Lugar:lugar,JefePropio:qs("conJefePropio").value,SsomaPropio:qs("conSsomaPropio").value,EmpresasConexas:empresas,Observaciones:qs("conObservaciones").value,Actualizado:new Date().toLocaleString(),Version:Number(current?.Version||0)+1,Estado:"ACTIVO",ArchivoReunion:pendingConexaPhoto};
  if(!editId && isDuplicateConexa(c)){alert("Esta coordinación ya fue registrada con los mismos detalles. Revise el registro existente antes de volver a enviarla.");return;}
  const btn=qs("btnSubmitConexa");isSavingConexa=true;btn.disabled=true;const prev=btn.textContent;btn.textContent="Procesando coordinación...";
  try{
    if(current){Object.assign(current,c)}else conexas.push(c);
    persist();addHistoryLocal("CONEXA",c.ID,current?"EDICIÓN":"ALTA",c.MiEmpresa);
    if(CONFIG.apiUrl)await postRemote({action:"saveConexa",conexa:{...c,ArchivoReunion:pendingConexaPhoto}});
    const pdf=await buildPdfConexa(c,r||{Empresa:c.MiEmpresa,Lugar:c.Lugar,Descripcion:c.ActividadPropiaManual,TrabajoCritico:["Actividad no TAR"],RiesgosCriticos:[],X:(DATA.lugares.find(x=>x.nombre===c.Lugar)?.x||50),Y:(DATA.lugares.find(x=>x.nombre===c.Lugar)?.y||50)});
    if(CONFIG.apiUrl)await sendPdfRemote(pdf,{Empresa:c.MiEmpresa,ID:c.ID},empresas.map(x=>x.empresa),"COORDINACIÓN DE ACTIVIDADES CONEXAS");
    toast("Coordinación registrada y PDF generado");
    qs("formConexa").reset();qs("conexaEditId").value="";qs("conFecha").value=today();qs("conHora").value=nowTime();qs("empresasConexas").innerHTML="";pendingConexaPhoto="";qs("conFotoPreview").innerHTML="";qs("conFotoPreview").classList.add("hidden");qs("conActividadManualBox").classList.add("hidden");refreshAll();
  }finally{isSavingConexa=false;btn.disabled=false;btn.textContent=prev;}
}
window.openConexaFor=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;showView("conexas");qs("conexaEditId").value="";qs("conMiEmpresa").value=r.Empresa;qs("conFecha").value=r.Fecha;updateConRegistroOptions();qs("conRegistroPropio").value=r.ID;renderConexaOwnRecord();addConexaCompany();toast("Complete la coordinación con la empresa aledaña.")
}
function renderConexasTable(){
  const emp=qs("filtroConEmpresa").value,inv=qs("filtroConEmpresaInvolucrada").value,d=qs("filtroConFecha").value||today();
  const cs=conexas.filter(c=>c.Fecha===d&&(!emp||c.MiEmpresa===emp)&&(!inv||(c.EmpresasConexas||[]).some(x=>x.empresa===inv)));
  qs("tablaConexas").innerHTML=cs.map(c=>`<tr><td>${c.ID}</td><td>${c.RegistroID||"Actividad no TAR"}</td><td>${c.MiEmpresa}</td><td>${(c.EmpresasConexas||[]).map(x=>x.empresa).join(", ")}</td><td>${c.HoraGestion}</td><td>${c.Actualizado||""}</td><td><button class="btn mini secondary" onclick="editConexa('${c.ID}')">Editar / incluir</button>${(c.Estado||"ACTIVO")!=="FINALIZADO"?`<button class="btn mini secondary" onclick="finalizarConexa('${c.ID}')">Finalizar</button>`:" <b>Finalizada</b>"}</td></tr>`).join("")||`<tr><td colspan="7">Sin coordinaciones.</td></tr>`
}
window.editConexa=function(id){
  const c=conexas.find(x=>x.ID===id);if(!c)return;
  const isOther=(c.TipoActividadPropia==="OTRA_NO_TAR")||(!c.RegistroID&&c.ActividadPropiaManual);
  const r=isOther?null:registros.find(x=>x.ID===c.RegistroID);if(!isOther&&!r)return;
  showView("conexas");qs("conexaEditId").value=c.ID;qs("conMiEmpresa").value=c.MiEmpresa;qs("conFecha").value=c.Fecha;qs("conHora").value=nowTime();updateConRegistroOptions();
  qs("conRegistroPropio").value=isOther?"__OTRA__":c.RegistroID;qs("conActividadManual").value=c.ActividadPropiaManual||"";qs("conLugarManual").value=c.Lugar||"";
  qs("conJefePropio").value=c.JefePropio;qs("conSsomaPropio").value=c.SsomaPropio;qs("conObservaciones").value=c.Observaciones;qs("empresasConexas").innerHTML="";c.EmpresasConexas.forEach(addConexaCompany);pendingConexaPhoto="";qs("conFotoReunion").value="";qs("conFotoPreview").innerHTML="";qs("conFotoPreview").classList.add("hidden");renderConexaOwnRecord();
  if(isOther){const l=DATA.lugares.find(x=>x.nombre===c.Lugar);if(l)positionMarker(qs("conexaMarker"),l.x,l.y,l.nombre)}
  toast("Edición cargada. Adjunte una nueva foto de reunión para guardar la actualización.")
}
window.finalizarConexa=async function(id){
  const c=conexas.find(x=>x.ID===id);if(!c)return;
  if(!confirm("¿Finalizar esta coordinación conexa?"))return;
  c.Estado="FINALIZADO";c.Actualizado=new Date().toLocaleString();persist();addHistoryLocal("CONEXA",id,"FINALIZACIÓN",c.MiEmpresa);
  if(CONFIG.apiUrl)await postRemote({action:"finalizarConexa",id});renderConexasTable();toast("Coordinación finalizada");
}

function filteredForMap(){
  const d=qs("mapFiltroFecha").value||today(),t=qs("mapFiltroTrabajo").value,e=qs("mapFiltroEmpresa").value,a=qs("mapFiltroArea").value,f=normFrente(qs("mapFiltroFrente")?.value);
  return registros.filter(r=>r.Fecha===d&&normFrente(r.Frente)===f&&isActive(r)&&(!t||arr(r.TrabajoCritico).includes(t))&&(!e||r.Empresa===e)&&(!a||r.AreaUsuaria===a))
}
function normalizeSectorKey(v){
  return String(v||"")
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .trim().replace(/\s+/g," ").toUpperCase();
}

function resourceTypeMeta(tipo){
  const t=String(tipo||"").toUpperCase();
  if(t==="DEA")return {cls:"dea",short:"DEA",name:"DEA / Desfibrilador"};
  if(t==="ESTACION_SECUNDARIA")return {cls:"station",short:"E",name:"Estación de Emergencia Secundaria"};
  if(t==="GABINETE")return {cls:"cabinet",short:"G",name:"Gabinete de Emergencia"};
  return {cls:"other",short:"R",name:"Recurso de emergencia"};
}
function renderResourceMarkers(layerId,frente){
  const layer=qs(layerId);if(!layer)return;
  const f=normFrente(frente);
  layer.innerHTML=(emergencyResources||[]).filter(r=>normFrente(r.frente||r.Frente)===f && String(r.estado||r.Estado||"ACTIVO").toUpperCase()!=="INACTIVO").map(r=>{
    const m=resourceTypeMeta(r.tipo||r.Tipo);
    const title=`${m.name} | ${r.sector||r.Sector||""} | ${r.ubicacion||r.UbicacionEspecifica||""}`;
    return `<button type="button" class="emergency-resource-marker" style="left:${Number(r.x??r.X)}%;top:${Number(r.y??r.Y)}%" title="${escapeHtml(title)}">
      <span class="resource-pin ${m.cls}">${m.short}</span>
      <span class="resource-label">${escapeHtml(m.name)} · ${escapeHtml(r.ubicacion||r.UbicacionEspecifica||"")}</span>
    </button>`;
  }).join("");
}
function renderPermanentResources(){
  renderResourceMarkers("registroResourceLayer",qs("frente")?.value||"Planta Nueva");
  renderResourceMarkers("mapResourceLayer",qs("mapFiltroFrente")?.value||"Planta Nueva");
  renderResourceMarkers("sectorResourceLayer",qs("sectorFrente")?.value||"Planta Nueva");
}
function renderMapGeneral(){
  const complianceFilter=qs("filtroMapaCumplimiento")?.value||"";
  const rs=filteredForMap().filter(r=>recordMatchesCompliance(r,complianceFilter));

  // Agrupar por nombre normalizado para tolerar mayúsculas, espacios o tildes.
  const by={};
  rs.forEach(r=>{
    const key=normalizeSectorKey(r.Lugar);
    if(!by[key])by[key]=[];
    by[key].push(r);
  });

  // Usar sectorización guardada. Si por alguna razón aún no cargó userSectors,
  // usar DATA.lugares que también proviene del bootstrap.
  const sectors=sectorsFor(qs("mapFiltroFrente")?.value||"Planta Nueva");
  qs("sectorMarkers").innerHTML=sectors
    .map(l=>{
      const key=normalizeSectorKey(l.nombre);
      const items=by[key]||[];
      const n=items.length;
      if(n===0)return "";
      const bg=n>=5?"rgba(228,61,48,.95)":n>=3?"rgba(242,138,26,.95)":"rgba(243,198,35,.96)";
      return `<button class="sector-marker active-sector" style="left:${l.x}%;top:${l.y}%" title="${escapeHtml(l.nombre)} · ${n} trabajos" onclick="selectSector('${escapeHtml(l.nombre).replaceAll("'","\\'")}')">
        <span class="sector-count" style="background:${bg}">${n}</span>
        <span class="sector-name">${escapeHtml(l.nombre)}</span>
      </button>`;
    }).join("");

  renderEmergencyDashboardCharts(rs);
  renderResourceMarkers("mapResourceLayer",qs("mapFiltroFrente")?.value||"Planta Nueva");
  if(selectedSector)selectSector(selectedSector,false);
}
window.selectSector=function(nombre,scroll=true){
  selectedSector=nombre;const rs=filteredForMap().filter(r=>r.Lugar===nombre);qs("sectorEmpty").classList.add("hidden");qs("sectorDetail").classList.remove("hidden");qs("sectorNombre").textContent=nombre;qs("sectorTrabajos").textContent=rs.length;qs("sectorTrabajadores").textContent=rs.reduce((s,r)=>s+Number(r.NTrabajadores),0);qs("sectorEmpresas").textContent=new Set(rs.map(r=>r.Empresa)).size;qs("sectorConexos").textContent=conexas.filter(c=>c.Fecha===(qs("mapFiltroFecha").value||today())&&c.Lugar===nombre).reduce((s,c)=>s+c.EmpresasConexas.length,0);
  const b=qs("sectorBadge");b.textContent=rs.length+" trabajos";b.className="load-badge "+loadClass(rs.length);qs("sectorActividades").innerHTML=rs.map(r=>`<div><b>${escapeHtml(r.Empresa)}</b><br>${arr(r.TrabajoCritico).join(", ")} · ${r.NTrabajadores} trab.<br><span>${escapeHtml(r.Descripcion||"")}</span></div>`).join("")||"<small>Sin actividades para el filtro.</small>";
  [...document.querySelectorAll(".sector-marker")].forEach(x=>x.classList.toggle("selected",x.title.startsWith(nombre+" ·")));if(scroll)qs("sectorDetail").scrollIntoView({behavior:"smooth",block:"nearest"})
}

function listFilters(){
  return {f:qs("listaFrente").value,e:qs("listaEmpresa").value,l:qs("listaLugar").value,a:qs("listaArea").value,d:qs("listaFecha").value}
}
function renderListaDashboard(){
  const f=listFilters();let rs=registros.filter(r=>(!f.f||normFrente(r.Frente)===f.f)&&(!f.e||r.Empresa===f.e)&&(!f.l||r.Lugar===f.l)&&(!f.a||r.AreaUsuaria===f.a)&&(!f.d||r.Fecha===f.d));
  qs("tablaRegistros").innerHTML=rs.map(r=>`<tr><td>${r.ID}</td><td>${r.Fecha}</td><td>${escapeHtml(normFrente(r.Frente))}</td><td>${escapeHtml(r.Empresa)}</td><td>${escapeHtml(r.AreaUsuaria||"")}</td><td>${escapeHtml(r.Lugar)}</td><td>${escapeHtml(r.ZonaEspecifica||"—")}</td><td>${arr(r.TrabajoCritico).map(escapeHtml).join(", ")}</td><td class="desc-cell">${escapeHtml(r.Descripcion||"")}</td><td>${arr(r.RiesgosCriticos).map(escapeHtml).join(", ")}</td><td>${r.NTrabajadores}</td><td><span class="compliance-badge ${complianceBadgeClass(emergencyComplianceStatsFromRecord(r).pct)}">${emergencyComplianceStatsFromRecord(r).pct}%</span></td><td class="missing-cell">${escapeHtml(missingEmergencyText(r))}</td></tr>`).join("")||`<tr><td colspan="13">Sin registros.</td></tr>`;
  const ids=new Set(rs.map(r=>r.ID));let cs=conexas.filter(c=>(!f.d||c.Fecha===f.d)&&(!f.l||c.Lugar===f.l)&&(!f.e||c.MiEmpresa===f.e)&&(!f.a||!c.RegistroID||ids.has(c.RegistroID)));
  qs("tablaListaConexas").innerHTML=cs.flatMap(c=>c.EmpresasConexas.map(x=>`<tr><td>${c.ID}</td><td>${c.Fecha}</td><td>${escapeHtml(c.MiEmpresa)}</td><td>${escapeHtml(c.Lugar)}</td><td>${escapeHtml(x.empresa)}</td><td>${escapeHtml(x.actividad)}</td><td>${arr(x.riesgos).map(escapeHtml).join(", ")}</td><td>${c.HoraGestion}</td></tr>`)).join("")||`<tr><td colspan="8">Sin registros conexos.</td></tr>`;
  qs("dashSectorTitle").textContent=f.l?`Dashboard – ${f.l}`:"Dashboard general";
  drawChart("chartSectorCriticos",countFlat(rs,"TrabajoCritico"),"doughnut");
  const byEmp={};rs.forEach(r=>byEmp[r.Empresa]=(byEmp[r.Empresa]||0)+Number(r.NTrabajadores||0));drawChart("chartSectorEmpresa",byEmp,"bar");
  renderEmergencyDashboardCharts(rs);
  const emergenciaEmpresa=aggregateEmergencyCompliance(rs,"Empresa");
  const emergenciaArea=aggregateEmergencyCompliance(rs,"AreaUsuaria");
  drawChart("chartEmergenciaEmpresaLista",emergenciaEmpresa,"bar",{datasetLabel:"% implementación"});
  drawChart("chartEmergenciaAreaLista",emergenciaArea,"bar",{datasetLabel:"% implementación"});
  const missing=countMissingEmergencyControls(rs);drawChart("chartControlesFaltantes",missing,"bar",{datasetLabel:"Registros con brecha"});
  const rows=[];rs.forEach(r=>{const m=missingEmergencyControlsFromRecord(r);if(m.length){const by={};m.forEach(x=>(by[x.work]||(by[x.work]=[])).push(x.control));Object.entries(by).forEach(([work,controls])=>rows.push(`<tr><td>${escapeHtml(r.Empresa)}</td><td>${escapeHtml(r.AreaUsuaria||"—")}</td><td>${escapeHtml(r.Lugar||"—")}</td><td>${escapeHtml(r.Descripcion||"—")}</td><td>${escapeHtml(work)}</td><td>${escapeHtml([...new Set(controls)].join(", "))}</td></tr>`))}});
  qs("tablaBrechasEmergencia").innerHTML=rows.join("")||`<tr><td colspan="6">Sin brechas para los filtros seleccionados.</td></tr>`;
}

function recordEmergencyPct(r){
  const saved=Number(r.PorcentajeCumplimientoEmergencia);
  if(Number.isFinite(saved) && (saved>0 || Number(r.NControlesEmergenciaRequeridos)>0)) return Math.max(0,Math.min(100,saved));
  const req=Number(r.NControlesEmergenciaRequeridos||0),imp=Number(r.NControlesEmergenciaImplementados||0);
  if(req>0)return Math.round(Math.max(0,Math.min(1,imp/req))*100);
  const st=emergencyComplianceStatsFromRecord(r);
  return st.pct;
}
function aggregateEmergencyCompliance(rs,field){
  const out={};
  rs.forEach(r=>{
    const key=String(r[field]||"Sin dato").trim()||"Sin dato";
    if(!out[key])out[key]={sum:0,n:0};
    out[key].sum+=recordEmergencyPct(r);out[key].n++;
  });
  return Object.fromEntries(Object.entries(out).map(([k,v])=>[k,v.n?Math.round(v.sum/v.n):0]));
}

function reportFilteredRecords(){
  const f=listFilters();
  return registros.filter(r=>(!f.f||normFrente(r.Frente)===f.f)&&(!f.e||r.Empresa===f.e)&&(!f.l||r.Lugar===f.l)&&(!f.a||r.AreaUsuaria===f.a)&&(!f.d||r.Fecha===f.d));
}
function reportMissingSummary(rs,field){
  const out={};
  rs.forEach(r=>{
    const k=String(r[field]||"Sin dato").trim()||"Sin dato";
    if(!out[k])out[k]={count:0,missing:{}};
    out[k].count++;
    missingEmergencyControlsFromRecord(r).forEach(x=>{
      const c=String(x.control||"").trim();if(c)out[k].missing[c]=(out[k].missing[c]||0)+1;
    });
  });
  return out;
}
function pdfSafe(s){return String(s??"").replace(/[–—]/g,"-")}
function addWrappedText(pdf,text,x,y,maxW,lineH=4.2,fontSize=8){
  pdf.setFontSize(fontSize);
  const lines=pdf.splitTextToSize(pdfSafe(text),maxW);
  pdf.text(lines,x,y);
  return y+lines.length*lineH;
}
function addReportHeader(pdf,title,subtitle){
  pdf.setFillColor(225,38,28);pdf.rect(0,0,297,18,"F");
  pdf.setTextColor(255,255,255);pdf.setFont("helvetica","bold");pdf.setFontSize(15);pdf.text(title,12,8);
  pdf.setFont("helvetica","normal");pdf.setFontSize(8.5);pdf.text(pdfSafe(subtitle),12,14);
  pdf.setTextColor(20,24,30);
}
function addSimpleBars(pdf,data,x,y,w,title){
  pdf.setFont("helvetica","bold");pdf.setFontSize(10);pdf.text(pdfSafe(title),x,y);y+=6;
  const entries=Object.entries(data);
  if(!entries.length){pdf.setFont("helvetica","normal");pdf.setFontSize(8);pdf.text("Sin información.",x,y);return y+7}
  entries.slice(0,14).forEach(([k,v])=>{
    const val=Number(v)||0;pdf.setFont("helvetica","normal");pdf.setFontSize(7.2);
    const label=pdf.splitTextToSize(pdfSafe(k),48)[0];pdf.text(label,x,y+3);
    pdf.setDrawColor(220);pdf.rect(x+50,y,w-68,4);
    pdf.setFillColor(225,38,28);pdf.rect(x+50,y,(w-68)*Math.max(0,Math.min(100,val))/100,4,"F");
    pdf.setFont("helvetica","bold");pdf.text(`${val}%`,x+w-15,y+3);
    y+=7;
  });
  return y;
}
async function buildDailyMapImage(rs,frente){
  const img=await loadImage(mapAsset(frente));
  const c=document.createElement("canvas");c.width=1600;c.height=Math.round(1600*img.naturalHeight/img.naturalWidth);
  const ctx=c.getContext("2d");ctx.drawImage(img,0,0,c.width,c.height);
  rs.filter(r=>normFrente(r.Frente)===normFrente(frente)).forEach(r=>{
    const x=Number(r.X)/100*c.width,y=Number(r.Y)/100*c.height;
    ctx.beginPath();ctx.arc(x,y,13,0,Math.PI*2);ctx.fillStyle="rgba(225,38,28,.92)";ctx.fill();ctx.lineWidth=4;ctx.strokeStyle="#fff";ctx.stroke();
  });
  return c.toDataURL("image/jpeg",.9);
}
// V12.17 — Informe visual ejecutivo, dos plantas, una hoja por planta.
function reportConexasForFront(frs, frente, fecha){
  const ids=new Set(frs.map(r=>String(r.ID||'')));
  const places=new Set(frs.map(r=>normalizeSectorKey(r.Lugar)));
  return conexas.filter(c=>{
    if(fecha && c.Fecha!==fecha)return false;
    if(c.Frente && normFrente(c.Frente)!==frente)return false;
    if(c.RegistroID && ids.has(String(c.RegistroID)))return true;
    // Los registros antiguos pueden no tener Frente/RegistroID: cruzar por sector y fecha.
    return places.has(normalizeSectorKey(c.Lugar));
  });
}
function reportCard(pdf,x,y,w,label,value,accent){
  pdf.setFillColor(248,249,251);pdf.setDrawColor(227,230,234);pdf.roundedRect(x,y,w,21,2.5,2.5,'FD');
  pdf.setFillColor(...accent);pdf.roundedRect(x,y,2.4,21,1,1,'F');
  pdf.setTextColor(77,87,98);pdf.setFont('helvetica','normal');pdf.setFontSize(7.1);pdf.text(pdfSafe(label),x+6,y+7.5);
  pdf.setTextColor(27,38,52);pdf.setFont('helvetica','bold');pdf.setFontSize(15);pdf.text(String(value),x+6,y+16.7);
}
function reportFitLine(pdf,text,maxWidth,fontSize=7){
  pdf.setFontSize(fontSize);let s=pdfSafe(text||'—');
  while(s.length>4 && pdf.getTextWidth(s)>maxWidth)s=s.slice(0,-2);
  return s===pdfSafe(text||'—')?s:s.trimEnd()+'…';
}
async function reportPhoto(pdf,src,x,y,w,h){
  try{const im=await loadImage(src);const cv=document.createElement('canvas');cv.width=1100;cv.height=Math.round(cv.width*h/w);const ctx=cv.getContext('2d');
    const iw=im.naturalWidth,ih=im.naturalHeight,ratio=Math.max(cv.width/iw,cv.height/ih),sw=cv.width/ratio,sh=cv.height/ratio;
    ctx.drawImage(im,(iw-sw)/2,(ih-sh)/2,sw,sh,0,0,cv.width,cv.height);
    pdf.addImage(cv.toDataURL('image/jpeg',.87),'JPEG',x,y,w,h,undefined,'FAST');return true;
  }catch(e){console.warn('Fotografía del informe no disponible',src,e);return false}
}
async function descargarInformeDashboard(){
  const rs=reportFilteredRecords();
  if(!rs.length)return toast('No hay actividades para generar el informe con los filtros seleccionados');
  const btn=qs('btnDescargarInforme'),prev=btn.textContent;btn.disabled=true;btn.textContent='Generando informe ejecutivo...';
  try{
    const {jsPDF}=window.jspdf,pdf=new jsPDF('l','mm','a3'),f=listFilters(),fecha=f.d||'Periodo filtrado';
    const fronts=['Planta Nueva','Planta Antigua'];
    const safe=(s)=>pdfSafe(String(s??''));
    const line=(s,x,y,max,font=7)=>{pdf.setFontSize(font);let v=safe(s);while(v.length>3&&pdf.getTextWidth(v)>max)v=v.slice(0,-1);pdf.text(v,x,y)};
    for(let p=0;p<fronts.length;p++){
      if(p)pdf.addPage();const frente=fronts[p],frs=rs.filter(r=>normFrente(r.Frente)===frente);
      const workers=frs.reduce((s,r)=>s+Number(r.NTrabajadores||0),0),companies=new Set(frs.map(r=>r.Empresa).filter(Boolean)).size;
      const cx=reportConexasForFront(frs,frente,f.d||'');
      const cxCount=cx.reduce((sum,c)=>sum+Math.max(1,(c.EmpresasConexas||[]).length),0);
      const pct=frs.length?globalEmergencyCompliance(frs).pct:null;
      // Cabecera corporativa con fotografía de la planta.
      pdf.setFillColor(225,31,26);pdf.rect(0,0,420,44,'F');
      await reportPhoto(pdf,frente==='Planta Nueva'?'foto_informe_planta_nueva.jpg':'foto_informe_planta_antigua.jpg',305,0,115,44);
      pdf.setFillColor(185,17,19);pdf.triangle(291,0,311,0,291,44,'F');
      pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(22);pdf.text('ACTIVIDADES DE ALTO RIESGO',14,17);
      pdf.setFontSize(19);pdf.text(frente.toUpperCase(),14,30);pdf.setFont('helvetica','normal');pdf.setFontSize(9);pdf.text(`INFORME PREVENTIVO  |  ${safe(fecha)}`,14,39);
      // Indicadores de la jornada: sin indicador de accidentes.
      const cards=[['ACTIVIDADES',frs.length,[225,38,28]],['TRABAJADORES',workers,[30,84,157]],['EMPRESAS',companies,[21,133,84]],['COORD. CONEXAS',cxCount,[112,65,160]],['CONTROLES EMERGENCIA',pct===null?'Sin datos':pct+'%',[220,138,25]]];
      // V12.20: mismos indicadores, reorganizados en una franja compacta para destacar arriba los trabajos críticos.
      cards.forEach(([label,value,color],i)=>{const x=12+i*81.7;pdf.setFillColor(247,248,250);pdf.setDrawColor(226,230,236);pdf.roundedRect(x,48,77,15.5,2,2,'FD');pdf.setFont('helvetica','bold');pdf.setTextColor(...color);pdf.setFontSize(19);pdf.text(String(value),x+5,60.3);pdf.setFont('helvetica','bold');pdf.setTextColor(55,67,81);pdf.setFontSize(10);pdf.text(label,x+29,57.8)});
      // Resumen visual superior de todos los tipos de trabajo: datos reales, sin cantidades inventadas.
      const reportTypes={};frs.forEach(r=>arr(r.TrabajoCritico).forEach(t=>{reportTypes[t]=(reportTypes[t]||0)+1}));
      const workTypes=Object.entries(reportTypes).sort((a,b)=>b[1]-a[1]);
      // V12.22: fotografías por tipo de trabajo, números y nombres separados (sin superposición).
      // No se modifica ninguna otra sección del informe.
      pdf.setFillColor(239,244,250);pdf.roundedRect(12,65,396,23,2,2,'F');
      pdf.setFont('helvetica','bold');pdf.setTextColor(28,49,72);pdf.setFontSize(11);
      pdf.text('TIPOS DE TRABAJOS REGISTRADOS',16,69.2);
      if(workTypes.length){
        const tileW=396/workTypes.length;
        const typeColors={caliente:[237,83,23],altura:[40,138,203],aislamiento:[121,62,173],izaje:[232,174,19],confinado:[24,139,147],demolicion:[150,92,45],excavacion:[225,92,33]};
        const iconFiles={caliente:'icono_caliente.png',altura:'icono_altura.png',aislamiento:'icono_aislamiento.png',izaje:'icono_izaje.png',confinado:'icono_confinado.png',demolicion:'icono_demolicion.png',excavacion:'icono_excavacion.png'};
        const iconImages=await Promise.all(Object.values(iconFiles).map(async file=>{
          try{const im=await loadImage(file);return [file,im]}catch(e){return [file,null]}
        }));
        const icons=Object.fromEntries(iconImages);
        workTypes.forEach(([name,count],i)=>{
          const xx=12+i*tileW,cx=xx+tileW/2;
          const normalized=String(name).toLowerCase();
          const type=/caliente/.test(normalized)?'caliente':/altura/.test(normalized)?'altura':/aislamiento|energía|energia/.test(normalized)?'aislamiento':/izaje/.test(normalized)?'izaje':/confinado/.test(normalized)?'confinado':/demolici/.test(normalized)?'demolicion':/excavaci/.test(normalized)?'excavacion':null;
          const cc=typeColors[type]||[93,108,125];
          if(i){pdf.setDrawColor(219,226,235);pdf.line(xx,70,xx,87.5)}
          if(type&&icons[iconFiles[type]]){
            const el=icons[iconFiles[type]],cv=document.createElement('canvas');cv.width=240;cv.height=240;
            const ctx=cv.getContext('2d');ctx.drawImage(el,0,0,240,240);
            pdf.addImage(cv.toDataURL('image/png'),'PNG',cx-12.5,71.3,11.6,11.6,undefined,'FAST');
          }else{pdf.setFillColor(...cc);pdf.circle(cx-6.7,77.1,4.8,'F')}
          pdf.setFont('helvetica','bold');pdf.setTextColor(...cc);pdf.setFontSize(24);
          pdf.text(String(count),cx+5.0,81.0,{align:'center'});
          let label=name.replace(/^Trabajos en /i,'').replace(/^Izaje de Cargas$/i,'Izaje').replace(/^Aislamiento de Energía$/i,'Aislamiento').replace(/^Espacio Confinado$/i,'Espacio confinado').replace(/^Excavación y\/o Demolición$/i,'Excav. / demolición');
          pdf.setTextColor(34,52,71);pdf.setFontSize(workTypes.length>7?8.2:9.8);
          const textWidth=Math.max(20,tileW-3);
          while(label.length>3&&pdf.getTextWidth(safe(label))>textWidth)label=label.slice(0,-1);
          pdf.text(safe(label),cx,87.0,{align:'center'});
        });
      }else{pdf.setFont('helvetica','normal');pdf.setFontSize(9);pdf.text('Sin tipos de trabajo registrados',16,82)}
      // Plano: ocupar el ancho central con suficiente resolución.
      pdf.setFillColor(29,47,68);pdf.roundedRect(12,90,253,12,2,2,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(11);pdf.text('MAPA DE ACTIVIDADES CRÍTICAS  |  '+frente.toUpperCase(),17,98);
      pdf.setDrawColor(222,35,30);pdf.setLineWidth(.5);pdf.roundedRect(12,105,253,137,2,2,'S');
      if(frs.length){const map=await buildActivitiesMapImage(frs,frente),im=await loadImage(map),ratio=im.naturalWidth/im.naturalHeight;let mw=249,mh=mw/ratio;if(mh>133){mh=133;mw=mh*ratio}pdf.addImage(map,'PNG',14+(249-mw)/2,107+(133-mh)/2,mw,mh,undefined,'NONE')}
      else{pdf.setFont('helvetica','italic');pdf.setFontSize(11);pdf.setTextColor(120);pdf.text('Sin actividades registradas para esta planta',138,170,{align:'center'})}
      // Mostrar TODOS los sectores, no recortar a los primeros nueve.
      const zones=zoneSummary(frs),x=272,w=136;
      pdf.setFillColor(226,38,28);pdf.roundedRect(x,90,w,12,2,2,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(10.5);pdf.text(`SECTORES REGISTRADOS (${zones.length})`,x+5,98);
      pdf.setFillColor(242,245,248);pdf.rect(x,105,w,9,'F');pdf.setFontSize(7.2);pdf.setTextColor(50,64,79);pdf.text('SECTOR',x+4,111);pdf.text('ACT.',x+102,111,{align:'center'});pdf.text('PERS.',x+118,111,{align:'center'});pdf.text('EMP.',x+132,111,{align:'center'});
      const available=128,rowH=zones.length?Math.min(9.0,available/zones.length):9;
      const font=Math.max(8.5,Math.min(9.2,rowH*1.17));
      zones.forEach((z,i)=>{const yy=114+i*rowH;if(i%2===0){pdf.setFillColor(250,251,253);pdf.rect(x,yy,w,rowH,'F')}pdf.setFont('helvetica',i<3?'bold':'normal');pdf.setTextColor(38,52,68);line(z.zone,x+4,yy+rowH*.72,95,font);pdf.setFontSize(font);pdf.text(String(z.activities),x+102,yy+rowH*.72,{align:'center'});pdf.text(String(z.workers),x+118,yy+rowH*.72,{align:'center'});pdf.text(String(z.companies),x+132,yy+rowH*.72,{align:'center'})});
      if(!zones.length){pdf.setTextColor(105);pdf.setFontSize(9);pdf.text('Sin sectores con actividad',x+5,119)}
      // Resumen legible por área usuaria; detalle completo en anexo si hay muchos sectores.
      const areas={};frs.forEach(r=>{const area=String(r.AreaUsuaria||'Sin área').trim(),key=`${area} / ${r.Lugar||'Sin sector'}`;if(!areas[key])areas[key]={label:key,area,sector:r.Lugar||'Sin sector',act:0,workers:0};areas[key].act++;areas[key].workers+=Number(r.NTrabajadores||0)});
      const areaRows=Object.values(areas).sort((a,b)=>b.act-a.act||b.workers-a.workers);
      const areaTotals={};areaRows.forEach(r=>{if(!areaTotals[r.area])areaTotals[r.area]={act:0,workers:0,sectors:new Set()};areaTotals[r.area].act+=r.act;areaTotals[r.area].workers+=r.workers;areaTotals[r.area].sectors.add(r.sector)});
      pdf.setFillColor(29,47,68);pdf.roundedRect(12,247,396,10,2,2,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(11);pdf.text('PARTICIPACIÓN POR ÁREA USUARIA',17,254);
      const areaEntries=Object.entries(areaTotals).sort((a,b)=>b[1].act-a[1].act),acw=396/Math.max(1,areaEntries.length);
      areaEntries.forEach(([name,a],i)=>{const xx=12+i*acw;pdf.setFillColor(i%2?248:242,i%2?250:246,252);pdf.roundedRect(xx+1,260,acw-2,23,2,2,'F');pdf.setFont('helvetica','bold');pdf.setTextColor(32,51,73);pdf.setFontSize(12);pdf.text(safe(name),xx+5,268);pdf.setFont('helvetica','normal');pdf.setFontSize(9.5);pdf.text(`${a.act} act.  |  ${a.workers} pers.  |  ${a.sectors.size} sectores`,xx+5,277)});
      // Los tipos de trabajo ahora se muestran en tarjetas visuales en la parte superior.
      pdf.setFillColor(31,43,58);pdf.rect(0,293,420,4,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(7.4);pdf.text('PROGRAMA  >  IMPLEMENTA  >  COORDINA  >  REPORTA',12,295.9);pdf.setFont('helvetica','italic');pdf.text('Unidos crecemos para construir un mundo sostenible',407,295.9,{align:'right'});
      // Anexo legible: conservar todas las combinaciones área/sector sin comprimirlas.
      if(areaRows.length){
        pdf.addPage();
        pdf.setFillColor(225,31,26);pdf.rect(0,0,420,33,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(19);pdf.text(`DETALLE POR ÁREA USUARIA  |  ${frente.toUpperCase()}`,14,16);pdf.setFont('helvetica','normal');pdf.setFontSize(10);pdf.text(`Fecha: ${safe(fecha)}   |   ${areaRows.length} combinaciones de área y sector`,14,25);
        const grouped={};areaRows.forEach(r=>(grouped[r.area]??=[]).push(r));
        const groupEntries=Object.entries(grouped).sort((a,b)=>a[0].localeCompare(b[0]));
        let col=0, yy=45;const colX=[14,216], colW=188;
        for(const [name,entries] of groupEntries){
          const required=13+entries.length*9.1;
          if(yy+required>280){col++;yy=45}
          if(col>=2){pdf.addPage();pdf.setFillColor(225,31,26);pdf.rect(0,0,420,26,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(16);pdf.text(`DETALLE POR ÁREA USUARIA  |  ${frente.toUpperCase()} (CONT.)`,14,17);col=0;yy=35}
          const xx=colX[col];pdf.setFillColor(29,47,68);pdf.roundedRect(xx,yy,colW,10,2,2,'F');pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(11);pdf.text(safe(name),xx+5,yy+7);yy+=12;
          entries.forEach((r,i)=>{if(i%2===0){pdf.setFillColor(246,248,251);pdf.rect(xx,yy-2,colW,8.7,'F')}pdf.setTextColor(37,51,68);pdf.setFont('helvetica','normal');pdf.setFontSize(9.5);pdf.text(reportFitLine(pdf,r.sector,133,9.5),xx+4,yy+4.4);pdf.setFont('helvetica','bold');pdf.text(`${r.act} act.`,xx+140,yy+4.4);pdf.text(`${r.workers} pers.`,xx+161,yy+4.4);yy+=9.1});yy+=5;
        }
        pdf.setFont('helvetica','italic');pdf.setFontSize(9);pdf.setTextColor(70);pdf.text('Detalle completo de todas las áreas y sectores registrados. No se han omitido registros.',14,291);
      }
      // V12.21: análisis completo por contratista y área usuaria, independiente del resumen por sectores.
      // Una fila por empresa y área. Los conteos de tipos se hacen por registro y tipo seleccionado.
      const companyAreaMap=new Map();
      frs.forEach(r=>{
        const empresa=String(r.Empresa||'Sin empresa').trim();
        const area=String(r.AreaUsuaria||'Sin área').trim();
        const key=JSON.stringify([empresa,area]);
        if(!companyAreaMap.has(key))companyAreaMap.set(key,{empresa,area,act:0,workers:0,sectors:new Set(),types:new Map()});
        const z=companyAreaMap.get(key);z.act++;z.workers+=Number(r.NTrabajadores||0);z.sectors.add(String(r.Lugar||'Sin sector'));
        [...new Set(arr(r.TrabajoCritico).map(t=>String(t).trim()).filter(Boolean))].forEach(t=>z.types.set(t,(z.types.get(t)||0)+1));
      });
      const companyRows=[...companyAreaMap.values()].sort((a,b)=>b.act-a.act||b.workers-a.workers||a.empresa.localeCompare(b.empresa));
      if(companyRows.length){
        // V12.23: página gerencial con gráficos basados en los registros filtrados.
        // Se conserva la tabla íntegra de detalle a continuación.
        pdf.addPage();
        pdf.setFillColor(225,31,26);pdf.rect(0,0,420,37,'F');
        pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(19);
        pdf.text('DASHBOARD | EMPRESAS Y ÁREAS USUARIAS',14,17);
        pdf.setFont('helvetica','normal');pdf.setFontSize(10.5);
        pdf.text(`${frente.toUpperCase()}  |  ${safe(fecha)}  |  Análisis de trabajos de alto riesgo`,14,29);
        const totalComb=companyRows.length;
        const dCards=[['ACTIVIDADES',frs.length,[225,38,28]],['TRABAJADORES',workers,[30,84,157]],['EMPRESAS',companies,[21,133,84]],['EMPRESA / ÁREA',totalComb,[112,65,160]]];
        dCards.forEach(([label,val,color],i)=>{
          const xx=14+i*100;pdf.setFillColor(246,248,251);pdf.setDrawColor(227,232,237);
          pdf.roundedRect(xx,43,92,27,3,3,'FD');pdf.setTextColor(...color);
          pdf.setFont('helvetica','bold');pdf.setFontSize(23);pdf.text(String(val),xx+6,59);
          pdf.setTextColor(47,61,77);pdf.setFontSize(10.2);pdf.text(label,xx+6,66);
        });
        const chartPanel=(x,y,w,h,title)=>{
          pdf.setFillColor(255,255,255);pdf.setDrawColor(220,227,235);
          pdf.roundedRect(x,y,w,h,3,3,'FD');pdf.setFillColor(29,47,68);
          pdf.roundedRect(x,y,w,12,3,3,'F');pdf.rect(x,y+8,w,4,'F');
          pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(11);
          pdf.text(safe(title),x+5,y+8);
        };
        const drawBars=(items,x,y,w,h,color,maxRows=8)=>{
          const rows=items.slice(0,maxRows),max=Math.max(1,...rows.map(a=>a.value));
          const step=Math.min(13.5,(h-4)/Math.max(1,rows.length));
          rows.forEach((a,i)=>{
            const yy=y+i*step,barX=x+w*.52,barW=w*.36;
            pdf.setFont('helvetica','normal');pdf.setTextColor(39,53,68);pdf.setFontSize(9.5);
            pdf.text(reportFitLine(pdf,a.name,w*.47,9.5),x,yy+5.6);
            pdf.setFillColor(236,240,245);pdf.roundedRect(barX,yy+1,barW,6,1,1,'F');
            pdf.setFillColor(...color);pdf.roundedRect(barX,yy+1,Math.max(.5,barW*a.value/max),6,1,1,'F');
            pdf.setFont('helvetica','bold');pdf.setFontSize(10);
            pdf.text(String(a.value),x+w-1,yy+6,{align:'right'});
          });
        };
        const byCompany=new Map(),byArea=new Map(),byType=new Map();
        frs.forEach(r=>{
          const co=String(r.Empresa||'Sin empresa').trim(),ar=String(r.AreaUsuaria||'Sin área').trim();
          byCompany.set(co,(byCompany.get(co)||0)+1);
          byArea.set(ar,(byArea.get(ar)||0)+1);
          [...new Set(arr(r.TrabajoCritico).map(t=>String(t).trim()).filter(Boolean))].forEach(t=>byType.set(t,(byType.get(t)||0)+1));
        });
        const sorted=m=>[...m.entries()].map(([name,value])=>({name,value})).sort((a,b)=>b.value-a.value||a.name.localeCompare(b.name));
        chartPanel(14,77,193,107,'ACTIVIDADES POR EMPRESA');
        drawBars(sorted(byCompany),20,94,180,85,[225,38,28],7);
        chartPanel(214,77,192,107,'ACTIVIDADES POR ÁREA USUARIA');
        drawBars(sorted(byArea),221,95,176,83,[30,115,183],7);
        chartPanel(14,191,193,90,'TIPOS DE TRABAJO REGISTRADOS');
        drawBars(sorted(byType),20,208,179,67,[119,63,169],7);
        chartPanel(214,191,192,90,'TRABAJADORES POR ÁREA USUARIA');
        const areaWorkers=new Map();frs.forEach(r=>{
          const a=String(r.AreaUsuaria||'Sin área').trim();areaWorkers.set(a,(areaWorkers.get(a)||0)+Number(r.NTrabajadores||0));
        });
        drawBars(sorted(areaWorkers),221,208,177,67,[19,143,99],7);
        pdf.setTextColor(85,99,114);pdf.setFont('helvetica','italic');pdf.setFontSize(8.8);
        pdf.text('Una actividad puede incluir varios tipos de trabajo; sus cantidades no deben sumarse como actividades únicas.',14,291);
        const pageRows=20;
        for(let off=0;off<companyRows.length;off+=pageRows){
          pdf.addPage();pdf.setFillColor(225,31,26);pdf.rect(0,0,420,36,'F');
          pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(19);
          pdf.text('TRABAJOS DE ALTO RIESGO POR EMPRESA Y ÁREA USUARIA',14,17);
          pdf.setFontSize(11);pdf.text(`${frente.toUpperCase()}  |  ${safe(fecha)}  |  ${companyRows.length} combinaciones empresa/área`,14,28);
          const heads=[['EMPRESA',14],['ÁREA USUARIA',134],['ACT.',202],['TRAB.',224],['SECT.',249],['TIPOS DE TRABAJOS DE ALTO RIESGO',278]];
          pdf.setFillColor(29,47,68);pdf.roundedRect(12,43,396,13,2,2,'F');
          pdf.setTextColor(255);pdf.setFont('helvetica','bold');pdf.setFontSize(9.2);
          heads.forEach(([h,x])=>pdf.text(h,x+2,51.5));
          companyRows.slice(off,off+pageRows).forEach((r,i)=>{
            const yy=57+i*10.8;
            if(i%2===0){pdf.setFillColor(244,247,251);pdf.rect(12,yy,396,10.8,'F')}
            pdf.setTextColor(34,49,65);pdf.setFont('helvetica','normal');pdf.setFontSize(9.4);
            pdf.text(reportFitLine(pdf,r.empresa,112,9.4),16,yy+7);
            pdf.text(reportFitLine(pdf,r.area,58,9.4),136,yy+7);
            pdf.setFont('helvetica','bold');pdf.text(String(r.act),209,yy+7);pdf.text(String(r.workers),232,yy+7);pdf.text(String(r.sectors.size),257,yy+7);
            pdf.setFont('helvetica','normal');pdf.setFontSize(8.2);
            const typeText=[...r.types.entries()].sort((a,b)=>b[1]-a[1]).map(([t,n])=>`${t.replace(/^Trabajos en /i,'').replace(/^Izaje de Cargas$/i,'Izaje')}: ${n}`).join(' · ');
            pdf.text(reportFitLine(pdf,typeText||'Sin tipo especificado',125,8.2),280,yy+7);
          });
          pdf.setTextColor(84,96,110);pdf.setFont('helvetica','italic');pdf.setFontSize(8.7);
          pdf.text(`Registros: ${frs.length}  |  Empresas: ${companies}  |  Los tipos pueden coexistir en una actividad.`,14,287);
          pdf.text(`Página de análisis ${Math.floor(off/pageRows)+1} de ${Math.ceil(companyRows.length/pageRows)}`,405,287,{align:'right'});
        }
      }

    }
    pdf.save(`Informe_Visual_TAR_${String(fecha).replace(/[^0-9A-Za-z_-]/g,'_')}.pdf`);
    toast('Informe ejecutivo generado con análisis por empresa y área usuaria');
  }catch(e){console.error(e);toast('No se pudo generar el informe visual PDF')}
  finally{btn.disabled=false;btn.textContent=prev}
}
function zoneSummary(rs){
  const out={};
  rs.forEach(r=>{
    const zone=r.Lugar||"Sin sector";
    if(!out[zone])out[zone]={zone,activities:0,workers:0,companies:new Set()};
    out[zone].activities++;out[zone].workers+=Number(r.NTrabajadores||0);if(r.Empresa)out[zone].companies.add(r.Empresa);
  });
  return Object.values(out).map(z=>({...z,companies:z.companies.size,companyNames:[...z.companies]})).sort((a,b)=>b.activities-a.activities||b.workers-a.workers);
}
function addComplianceBarsPdf(pdf,data,x,y,w,h,title){
  pdf.setFont("helvetica","bold");pdf.setFontSize(9);pdf.setTextColor(20);pdf.text(pdfSafe(title),x,y);y+=7;
  const entries=Object.entries(data).sort((a,b)=>Number(a[1])-Number(b[1]));
  const row=Math.min(8,(h-8)/Math.max(1,entries.length));
  entries.slice(0,14).forEach(([k,v])=>{
    const val=Math.max(0,Math.min(100,Number(v)||0));
    pdf.setFont("helvetica","normal");pdf.setFontSize(6.4);pdf.text(pdf.splitTextToSize(pdfSafe(k),42)[0],x,y+3);
    pdf.setDrawColor(220);pdf.rect(x+45,y,w-62,3.8);
    if(val>=90)pdf.setFillColor(24,165,88);else if(val>=75)pdf.setFillColor(244,196,48);else pdf.setFillColor(227,38,28);
    pdf.rect(x+45,y,(w-62)*val/100,3.8,"F");
    pdf.setFont("helvetica","bold");pdf.text(`${Math.round(val)}%`,x+w-14,y+3);y+=row;
  });
}
async function buildActivitiesMapImage(rs,frente){
  const img=await loadImage(mapAsset(frente));
  // Usar la resolución nativa del plano (máx. 4200 px) para no pixelar texto/líneas.
  const scale=Math.min(1,4200/img.naturalWidth),w=Math.max(2200,Math.round(img.naturalWidth*scale));
  const c=document.createElement("canvas");c.width=w;c.height=Math.round(w*img.naturalHeight/img.naturalWidth);
  const ctx=c.getContext("2d");ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";ctx.drawImage(img,0,0,c.width,c.height);
  const groups={};rs.forEach(r=>{const k=normalizeSectorKey(r.Lugar);if(!groups[k])groups[k]=[];groups[k].push(r)});
  sectorsFor(frente).forEach(s=>{
    const items=groups[normalizeSectorKey(s.nombre)]||[];if(!items.length)return;
    const n=items.length,x=s.x/100*c.width,y=s.y/100*c.height,rad=Math.max(22,c.width/105);
    const color=n>=5?"#e3261c":n>=3?"#f4c430":"#18a558";
    ctx.beginPath();ctx.arc(x,y,rad,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();ctx.lineWidth=Math.max(4,c.width/700);ctx.strokeStyle="#fff";ctx.stroke();
    ctx.fillStyle="#fff";ctx.font=`800 ${Math.round(rad*1.05)}px Arial`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(String(n),x,y+1);
  });
  // Recursos permanentes UNACEM.
  (emergencyResources||[]).filter(r=>normFrente(r.frente||r.Frente)===normFrente(frente)).forEach(r=>{
    const m=resourceTypeMeta(r.tipo||r.Tipo),x=Number(r.x??r.X)/100*c.width,y=Number(r.y??r.Y)/100*c.height;
    ctx.fillStyle=m.cls==="dea"?"#0b8f4d":m.cls==="station"?"#0068b5":"#e3261c";const sz=Math.max(28,c.width/100);
    ctx.fillRect(x-sz/2,y-sz/2,sz,sz);ctx.strokeStyle="#fff";ctx.lineWidth=4;ctx.strokeRect(x-sz/2,y-sz/2,sz,sz);
    ctx.fillStyle="#fff";ctx.font=`800 ${Math.round(sz*.38)}px Arial`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(m.short,x,y);
  });
  return c.toDataURL("image/png");
}

function renderEmergencyDashboardCharts(rs){
  const byEmpresa={};
  rs.forEach(r=>{const st=emergencyComplianceStatsFromRecord(r);if(!byEmpresa[r.Empresa])byEmpresa[r.Empresa]={req:0,imp:0};byEmpresa[r.Empresa].req+=st.required;byEmpresa[r.Empresa].imp+=st.implemented;});
  const cumplimientoEmpresa=Object.fromEntries(Object.entries(byEmpresa).map(([e,v])=>[e,v.req?Math.round(v.imp/v.req*100):0]));
  drawChart("chartCumplimientoEmpresa",cumplimientoEmpresa,"bar");
  const rangos={"0–49%":0,"50–74%":0,"75–99%":0,"100%":0};
  rs.forEach(r=>{const pct=emergencyComplianceStatsFromRecord(r).pct,rg=complianceRange(pct);if(rg==="0-49")rangos["0–49%"]++;if(rg==="50-74")rangos["50–74%"]++;if(rg==="75-99")rangos["75–99%"]++;if(rg==="100")rangos["100%"]++;});
  drawChart("chartRangosCumplimiento",rangos,"bar",{horizontalOnMobile:false});
}

async function makeMapDetailImage(r){
  const img=await loadImage(mapAsset(r.Frente));
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
  ${pdfField("Empresa",r.Empresa)}${pdfField("Frente / Plano",normFrente(r.Frente))}${pdfField("Área usuaria",r.AreaUsuaria)}${pdfField("Trabajo crítico",arr(r.TrabajoCritico).join(", "))}${pdfField("Lugar",r.Lugar)}${pdfField("Zona específica",r.ZonaEspecifica||"—")}
  ${pdfField("Fecha",r.Fecha)}${pdfField("Horario",`${r.HoraInicio} – ${r.HoraTermino}`)}${pdfField("Nº trabajadores",r.NTrabajadores)}${pdfField("Descripción del trabajo",r.Descripcion)}
  ${pdfField("Riesgos críticos",arr(r.RiesgosCriticos).join(", "))}${pdfField("Controles de respuesta a emergencias",Object.entries(r.ControlesEmergencia||{}).map(([w,cs])=>`${w}: ${arr(cs).join(", ")}`).join(" | "))}${pdfField("% Cumplimiento respuesta a emergencias",(emergencyComplianceStatsFromRecord(r).pct)+"%")}${emergencyComplianceStatsFromRecord(r).pct<100?pdfField("Controles de respuesta a emergencias NO implementados",missingEmergencyText(r)):""}
  </div>
  <h3 class="pdf-section-title">Detalle de ubicación</h3><div class="pdf-map-detail"><img src="${mapDetail}" alt="Detalle del plano"></div>`;
  return renderPdfAndDownload(`${r.ID}_Trabajo_Alto_Riesgo.pdf`)
}
function parseMeetingAttachment(v){
  if(!v)return null;
  try{const o=JSON.parse(v);if(o&&o.kind)return o}catch(e){}
  if(String(v).startsWith("data:image/"))return {kind:"image",data:v,name:"Evidencia"};
  return null;
}
function renderMeetingEvidenceForPdf(v){
  const a=parseMeetingAttachment(v);
  if(!a)return `<div class="pdf-conexa">Sin evidencia adjunta.</div>`;
  if(a.kind==="image"){
    return `<div class="pdf-photo"><img src="${a.data}" alt="Evidencia reunión"></div>`;
  }
  if(a.kind==="pdf"){
    if(a.previewImage){
      return `<div class="pdf-evidence-page"><img src="${a.previewImage}" alt="Primera página del registro adjunto"></div>`;
    }
    return `<div class="pdf-conexa"><b>Archivo PDF adjunto:</b><br>${escapeHtml(a.name||"Documento de reunión")}<br><small>No fue posible generar la vista previa.</small></div>`;
  }
  return `<div class="pdf-conexa">Evidencia adjunta.</div>`;
}
async function buildPdfConexa(c,r){
  const mapDetail=await makeMapDetailImage(r);
  const evidencia=c.ArchivoReunion||c.FotoReunion||"";
  const evidenciaParseada=parseMeetingAttachment(evidencia);
  if(!evidenciaParseada){
    throw new Error("No se pudo preparar la evidencia adjunta para el PDF.");
  }

  qs("pdfTitle").textContent="COORDINACIÓN DE ACTIVIDAD CONEXA";
  qs("pdfSubtitle").textContent=`ID ${c.ID} · ${c.Fecha} · ${c.HoraGestion} · Versión ${c.Version||1}`;

  qs("pdfContent").innerHTML=`
    <div class="pdf-conexa-two-pages">

      <section class="pdf-conexa-page pdf-conexa-map-page" data-pdf-page="1">
        <div class="pdf-page-number">Página 1 de 2</div>
        <div class="pdf-header">
          <img class="pdf-logo-img" src="logo_unacem.jpg" alt="UNACEM">
          <div>
            <h2>COORDINACIÓN DE ACTIVIDAD CONEXA</h2>
            <p>MAPA DE UBICACIÓN</p>
          </div>
        </div>

        <div class="pdf-content-grid">
          ${pdfField("Mi empresa",c.MiEmpresa)}
          ${pdfField("Lugar / Sector",c.Lugar)}
          ${pdfField("Fecha",c.Fecha)}
          ${pdfField("Hora de gestión",c.HoraGestion)}
        </div>

        <div class="pdf-map-detail">
          <img src="${mapDetail}" alt="Detalle de ubicación en el plano">
        </div>
      </section>

      <section class="pdf-conexa-page pdf-conexa-form-page" data-pdf-page="2">
        <div class="pdf-page-number">Página 2 de 2</div>
        <div class="pdf-header">
          <img class="pdf-logo-img" src="logo_unacem.jpg" alt="UNACEM">
          <div>
            <h2>COORDINACIÓN DE ACTIVIDAD CONEXA</h2>
            <p>REGISTRO</p>
          </div>
        </div>

        <div class="pdf-content-grid">
          ${pdfField("Mi empresa",c.MiEmpresa)}
          ${pdfField("Lugar",c.Lugar)}
          ${pdfField("Actividad propia",r.Descripcion)}
          ${pdfField("Trabajo crítico propio",arr(r.TrabajoCritico).join(", "))}
          ${pdfField("Riesgos críticos propios",arr(r.RiesgosCriticos).join(", "))}
          ${pdfField("Jefe del área propio",c.JefePropio)}
          ${pdfField("Supervisor SSOMA propio",c.SsomaPropio)}
          ${pdfField("Hora de gestión",c.HoraGestion)}
        </div>

        <h3 class="pdf-section-title">Empresas / actividades conexas</h3>
        ${c.EmpresasConexas.map(x=>`
          <div class="pdf-conexa">
            <b>${x.empresa}</b><br>
            <b>Actividad:</b> ${x.actividad}<br>
            <b>Riesgos que mi actividad genera:</b> ${x.riesgos.join(", ")}<br>
            <b>Controles específicos:</b> ${x.controles}<br>
            <b>Jefe notificado:</b> ${x.jefe}<br>
            <b>SSOMA notificado:</b> ${x.ssoma}
          </div>`).join("")}

        <div class="pdf-conexa">
          <b>Observaciones / acuerdos:</b><br>${c.Observaciones||"—"}
        </div>

        <h3 class="pdf-section-title">Evidencia / registro adjunto de la reunión</h3>
        ${renderMeetingEvidenceForPdf(c.ArchivoReunion||c.FotoReunion||"")}
      </section>
    </div>`;

  return renderPdfConexaTwoPages(`${c.ID}_Coordinacion_Conexa_V${c.Version||1}.pdf`);
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

async function renderPdfConexaTwoPages(filename){
  const root=qs("pdfSheet");
  await waitForImages(root);

  const pages=[...root.querySelectorAll(".pdf-conexa-page")];
  const {jsPDF}=window.jspdf;
  const pdf=new jsPDF("p","mm","a4");

  for(let i=0;i<pages.length;i++){
    const canvas=await html2canvas(pages[i],{
      scale:2.6,
      useCORS:true,
      backgroundColor:"#ffffff",
      imageTimeout:15000,
      scrollX:0,
      scrollY:0
    });

    const img=canvas.toDataURL("image/jpeg",0.98);
    const pageW=210,pageH=297,margin=7;
    const maxW=pageW-margin*2,maxH=pageH-margin*2;
    const ratio=Math.min(maxW/canvas.width,maxH/canvas.height);
    const w=canvas.width*ratio,h=canvas.height*ratio;
    const x=(pageW-w)/2,y=(pageH-h)/2;

    if(i>0)pdf.addPage();
    pdf.addImage(img,"JPEG",x,y,w,h,undefined,"FAST");
  }

  pdf.save(filename);
  return pdf.output("datauristring").split(",")[1];
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
function applyRemoteData(remoteData, saveSnapshot=true){
  if(!remoteData) return;
  const res={data:remoteData};
      DATA=res.data.config||DATA;
      DATA.lugares=(DATA.lugares||[]).map(l=>{
        const local=DEFAULT_DATA.lugares.find(z=>z.nombre===l.nombre);
        return local?{...local,...l,rect:local?.rect}:l;
      });
      // REV.12.6: la pestaña "Sectores" de Google Sheets es la ÚNICA fuente oficial
      // para Planta Nueva y Planta Antigua. No se mezclan sectores históricos,
      // DEFAULT_DATA, "Sectorizacion" ni LEGACY-PN-* generados en el navegador.
      const remoteSectors=(res.data.sectores||[]).map(s=>({
        id:s.id||s.ID||"",
        nombre:String(s.nombre||s.Nombre||s.Sector||"").trim(),
        frente:normFrente(s.frente||s.Frente||"Planta Nueva"),
        x:Number(s.x ?? s.X ?? 0),
        y:Number(s.y ?? s.Y ?? 0),
        rect:Array.isArray(s.rect)
          ? s.rect.map(Number)
          : [Number(s.X1),Number(s.Y1),Number(s.X2),Number(s.Y2)],
        actualizado:s.actualizado||s.Actualizado||""
      })).filter(s=>s.nombre && s.rect.length===4 && s.rect.every(Number.isFinite));

      // Eliminar duplicados exactos por ID. Si no hay ID, usar Frente + Nombre.
      const sectorSeen=new Set();
      userSectors=remoteSectors.filter(s=>{
        const key=s.id ? `ID:${s.id}` : `FN:${s.frente}|${s.nombre.toUpperCase()}`;
        if(sectorSeen.has(key)) return false;
        sectorSeen.add(key);
        return true;
      });

      DATA.lugares=userSectors.map(s=>({
        nombre:s.nombre,frente:s.frente,x:s.x,y:s.y,rect:s.rect
      }));
      registros=res.data.registros?.length?res.data.registros:registros;
      conexas=res.data.conexas?.length?res.data.conexas:conexas;
      emergencyResources=Array.isArray(res.data.recursos)?res.data.recursos:emergencyResources;

      // REV.12.8: una sola pasada de renderizado después de la sincronización completa.
      persist();
      refreshAll();
      renderEmergencyControls();
      renderPermanentResources();
      renderResourceAdminTable();
      if(saveSnapshot){
        try{
          localStorage.setItem("tar_remote_snapshot_v1226", JSON.stringify({
            ts:Date.now(),
            data:remoteData
          }));
        }catch(e){}
      }
}

function loadCachedRemoteSnapshot(){
  try{
    const raw=localStorage.getItem("tar_remote_snapshot_v1226");
    if(!raw) return false;
    const snap=JSON.parse(raw);
    if(!snap?.data) return false;
    applyRemoteData(snap.data,false);
    return true;
  }catch(e){
    return false;
  }
}


function applyFastBootstrap(remoteData){
  if(!remoteData) return;
  if(remoteData.config){
    DATA={...DATA,...remoteData.config};
  }
  if(Array.isArray(remoteData.recursos)) emergencyResources=remoteData.recursos;
  const remoteSectors=(remoteData.sectores||[]).map(s=>({
    id:s.id||s.ID||"",
    nombre:String(s.nombre||s.Nombre||s.Sector||"").trim(),
    frente:normFrente(s.frente||s.Frente||"Planta Nueva"),
    x:Number(s.x ?? s.X ?? 0),
    y:Number(s.y ?? s.Y ?? 0),
    rect:Array.isArray(s.rect)
      ? s.rect.map(Number)
      : [Number(s.X1),Number(s.Y1),Number(s.X2),Number(s.Y2)]
  })).filter(s=>s.nombre && s.rect.length===4 && s.rect.every(Number.isFinite));

  const seen=new Set();
  userSectors=remoteSectors.filter(s=>{
    const key=s.id ? `ID:${s.id}` : `FN:${s.frente}|${s.nombre.toUpperCase()}`;
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  DATA.lugares=userSectors.map(s=>({
    nombre:s.nombre,frente:s.frente,x:s.x,y:s.y,rect:s.rect
  }));

  // Solo actualizar controles del formulario: no gráficos, tablas ni mapas pesados.
  populateAllSelects();
  renderEmergencyControls();
  updateMapForFrente("registro");
  renderPermanentResources();
}

async function loadFastBootstrap(){
  try{
    const res=await jsonp("fastBootstrap");
    if(res?.ok) applyFastBootstrap(res.data);
  }catch(e){
    console.warn("Carga rápida no disponible temporalmente",e);
  }
}

async function loadRemote(){
  try{
    const res=await jsonp("bootstrap");
    if(res?.ok) applyRemoteData(res.data,true);
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
  qs("sectorSearch").oninput=renderSectorConfigTable; qs("sectorFrente").onchange=()=>updateMapForFrente("sectorizacion");
  qs("btnMarkResource").onclick=()=>{resourceMarking=true;qs("mapSectorizacion").classList.add("resource-marking");toast("Haz clic en el punto exacto del recurso")};
  qs("btnSaveResource").onclick=saveEmergencyResource;
  qs("btnCancelResource").onclick=resetResourceEditor;
  qs("resourceSector").onchange=()=>{};

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
  qs("sectorPassword").value="";
  renderSectorizacionAccess();
  toast("Acceso a sectorización habilitado");
}
function sectorMapClick(e){
  if(!sectorAdminUnlocked || e.target.closest(".map-zoom-controls")) return;
  const stage=e.currentTarget.querySelector(".map-stage");
  if(resourceMarking){
    if(!stage)return;
    const box=stage.getBoundingClientRect();
    const x=((e.clientX-box.left)/box.width)*100,y=((e.clientY-box.top)/box.height)*100;
    if(x<0||x>100||y<0||y>100)return;
    qs("resourceX").value=x.toFixed(3);qs("resourceY").value=y.toFixed(3);
    resourceMarking=false;e.currentTarget.classList.remove("resource-marking");
    qs("resourceSelectionSummary").innerHTML=`<strong>Ubicación:</strong> punto definido en el plano.`;
    toast("Ubicación del recurso definida");return;
  }
  if(!sectorMarking) return;
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
    frente:normFrente(qs("sectorFrente").value),
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
  DATA.lugares=userSectors.map(s=>({nombre:s.nombre,frente:s.frente,x:s.x,y:s.y,rect:s.rect}));
  populateAllSelects();renderSectorZones();renderSectorConfigTable();renderMapGeneral();resetSectorEditor();
  toast("Sector guardado");
}
function renderSectorZones(){
  const layer=qs("sectorZoneLayer");if(!layer)return;
  const source=sectorsFor(qs("sectorFrente")?.value||"Planta Nueva");
  layer.innerHTML=source.map(s=>{
    const r=s.rect;const w=r[2]-r[0],h=r[3]-r[1];
    return `<div class="sector-zone" style="left:${r[0]}%;top:${r[1]}%;width:${w}%;height:${h}%" title="${escapeHtml(s.nombre)}" onclick="event.stopPropagation();focusSectorConfig('${String(s.id||"").replaceAll("'","\\'")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')"><span>${escapeHtml(s.nombre)}</span></div>`
   }).join("");
  renderResourceAdminTable();
}
function renderSectorConfigTable(){
  const q=(qs("sectorSearch")?.value||"").toLowerCase();
  const source=sectorsFor(qs("sectorFrente")?.value||"Planta Nueva");
  const rows=source.filter(s=>!q||s.nombre.toLowerCase().includes(q));
  qs("tablaSectoresConfig").innerHTML=rows.map(s=>`<tr><td>${escapeHtml(normFrente(s.frente))}</td><td>${escapeHtml(s.nombre)}</td><td>${escapeHtml(s.actualizado||"")}</td>
  <td><button class="btn mini secondary" onclick="editSectorConfig('${String(s.id||"")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')">Editar</button>
  <button class="btn mini secondary" onclick="focusSectorConfig('${String(s.id||"")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')">Ver</button>
  <button class="btn mini secondary" onclick="deleteSectorConfig('${String(s.id||"")}','${escapeHtml(s.nombre).replaceAll("'","\\'")}')">Eliminar</button></td></tr>`).join("")||'<tr><td colspan="4">Sin sectores configurados.</td></tr>';
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
  qs("sectorFrente").value=normFrente(s.frente);updateMapForFrente("sectorizacion");qs("sectorEditId").value=s.id||"";qs("sectorTitulo").value=s.nombre;
  sectorDraftPoints=[[s.rect[0],s.rect[1]],[s.rect[2],s.rect[3]]];normalizeSectorDraft();focusSectorConfig(id,nombre);
  window.scrollTo({top:0,behavior:"smooth"});
}
window.deleteSectorConfig=async function(id,nombre){
  if(!confirm(`¿Eliminar el sector "${nombre}"?`))return;
  const s=(userSectors||[]).find(x=>(id&&x.id===id)||x.nombre===nombre);
  if(!s)return;
  userSectors=userSectors.filter(x=>x!==s);
  if(CONFIG.apiUrl)await postRemote({action:"deleteSector",password:"2026Unacem",id:s.id,nombre:s.nombre});
  DATA.lugares=userSectors.map(x=>({nombre:x.nombre,frente:x.frente,x:x.x,y:x.y,rect:x.rect}));
  populateAllSelects();renderSectorZones();renderSectorConfigTable();renderMapGeneral();toast("Sector eliminado");
}



function populateResourceSectorOptions(){
  const el=qs("resourceSector");if(!el)return;
  const prev=el.value,vals=sectorsFor(qs("sectorFrente")?.value||"Planta Nueva").map(s=>s.nombre);
  el.innerHTML='<option value="">Seleccione</option>'+vals.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
  if(vals.includes(prev))el.value=prev;
}
function resetResourceEditor(){
  resourceMarking=false;qs("mapSectorizacion")?.classList.remove("resource-marking");
  ["resourceEditId","resourceX","resourceY","resourceUbicacion","resourceDescripcion"].forEach(id=>{if(qs(id))qs(id).value=""});
  if(qs("resourceTipo"))qs("resourceTipo").value="DEA";
  if(qs("resourceSector"))qs("resourceSector").value="";
  if(qs("resourceSelectionSummary"))qs("resourceSelectionSummary").innerHTML="<strong>Ubicación:</strong> aún no definida.";
}
function renderResourceAdminTable(){
  if(!qs("tablaRecursosEmergencia"))return;
  const f=normFrente(qs("sectorFrente")?.value||"Planta Nueva");
  const rows=(emergencyResources||[]).filter(r=>normFrente(r.frente||r.Frente)===f);
  qs("tablaRecursosEmergencia").innerHTML=rows.map(r=>{
    const m=resourceTypeMeta(r.tipo||r.Tipo),id=String(r.id||r.ID||"");
    return `<tr><td>${escapeHtml(m.name)}</td><td>${escapeHtml(f)}</td><td>${escapeHtml(r.sector||r.Sector||"")}</td><td>${escapeHtml(r.ubicacion||r.UbicacionEspecifica||"")}</td><td>
      <button class="btn mini secondary" onclick="editEmergencyResource('${id.replaceAll("'","\\'")}')">Editar</button>
      <button class="btn mini secondary" onclick="deleteEmergencyResource('${id.replaceAll("'","\\'")}')">Eliminar</button></td></tr>`;
  }).join("")||'<tr><td colspan="5">Sin recursos registrados para este frente.</td></tr>';
  populateResourceSectorOptions();renderResourceMarkers("sectorResourceLayer",f);
}
async function saveEmergencyResource(){
  if(!sectorAdminUnlocked)return;
  const tipo=qs("resourceTipo").value,sector=qs("resourceSector").value,ubicacion=qs("resourceUbicacion").value.trim();
  const x=Number(qs("resourceX").value),y=Number(qs("resourceY").value);
  if(!sector||!ubicacion){toast("Complete sector y ubicación específica");return}
  if(!Number.isFinite(x)||!Number.isFinite(y)){toast("Ubique el recurso haciendo clic en el plano");return}
  const r={id:qs("resourceEditId").value||uid("RE"),tipo,frente:normFrente(qs("sectorFrente").value),sector,ubicacion,descripcion:qs("resourceDescripcion").value.trim(),x,y,estado:"ACTIVO",actualizado:new Date().toLocaleString()};
  const i=emergencyResources.findIndex(z=>String(z.id||z.ID)===String(r.id));if(i>=0)emergencyResources[i]=r;else emergencyResources.push(r);
  if(CONFIG.apiUrl)await postRemote({action:"saveResource",resource:r});
  renderResourceAdminTable();renderPermanentResources();resetResourceEditor();toast("Recurso de emergencia guardado");
}
window.editEmergencyResource=function(id){
  const r=emergencyResources.find(z=>String(z.id||z.ID)===String(id));if(!r)return;
  qs("sectorFrente").value=normFrente(r.frente||r.Frente);updateMapForFrente("sectorizacion");
  qs("resourceEditId").value=r.id||r.ID||"";qs("resourceTipo").value=r.tipo||r.Tipo||"DEA";populateResourceSectorOptions();
  qs("resourceSector").value=r.sector||r.Sector||"";qs("resourceUbicacion").value=r.ubicacion||r.UbicacionEspecifica||"";
  qs("resourceDescripcion").value=r.descripcion||r.Descripcion||"";qs("resourceX").value=r.x??r.X;qs("resourceY").value=r.y??r.Y;
  qs("resourceSelectionSummary").innerHTML="<strong>Ubicación:</strong> recurso cargado para edición.";
}
window.deleteEmergencyResource=async function(id){
  if(!confirm("¿Eliminar este recurso de emergencia?"))return;
  emergencyResources=emergencyResources.filter(z=>String(z.id||z.ID)!==String(id));
  if(CONFIG.apiUrl)await postRemote({action:"deleteResource",id});
  renderResourceAdminTable();renderPermanentResources();toast("Recurso eliminado");
}

// Sincronización silenciosa: al abrir, al volver a la pestaña y cada 5 minutos.
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="visible") loadRemote();
});
setInterval(()=>{ if(document.visibilityState==="visible") loadRemote(); },300000);

document.addEventListener("DOMContentLoaded",init);

// REV.11 – reconstrucción responsive de gráficos al cambiar orientación/tamaño.
let __chartResizeTimer=null;window.addEventListener("resize",()=>{clearTimeout(__chartResizeTimer);__chartResizeTimer=setTimeout(()=>{const active=document.querySelector(".view.active")?.id;if(active==="view-inicio")renderResumen();if(active==="view-mapa")renderMapGeneral();if(active==="view-lista")renderListaDashboard();},180)});

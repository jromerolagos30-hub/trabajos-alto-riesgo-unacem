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
  let required=0,implemented=0;
  rs.forEach(r=>{
    const s=emergencyComplianceStatsFromRecord(r);
    required+=s.required;implemented+=s.implemented;
  });
  return {required,implemented,pct:required?Math.round((implemented/required)*100):0};
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

function aggregateEmergencyCompliance(rs,field){
  const out={};
  rs.forEach(r=>{
    const key=String(r[field]||"Sin dato").trim()||"Sin dato";
    const st=emergencyComplianceStatsFromRecord(r);
    if(!out[key])out[key]={req:0,imp:0};
    out[key].req+=st.required;out[key].imp+=st.implemented;
  });
  return Object.fromEntries(Object.entries(out).map(([k,v])=>[k,v.req?Math.round(v.imp/v.req*100):0]));
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
async function descargarInformeDashboard(){
  const rs=reportFilteredRecords();
  if(!rs.length)return toast("No hay actividades para generar el informe con los filtros seleccionados");
  const btn=qs("btnDescargarInforme"),prev=btn.textContent;btn.disabled=true;btn.textContent="Generando informe...";
  try{
    const {jsPDF}=window.jspdf,pdf=new jsPDF("l","mm","a4");
    const f=listFilters(),fecha=f.d||"Periodo filtrado";

    // Cada planta conserva siempre el mismo tamaño de plano. Primero se agota
    // Resumen por zona; después comienza, en hojas separadas, Zona por área.
    for(const frente of ["Planta Nueva","Planta Antigua"]){
      const frs=rs.filter(r=>normFrente(r.Frente)===frente);
      await addPlantOrganizedPages(pdf,frente,fecha,frs);
    }

    // HOJA 3: cumplimiento, brechas accionables y matriz de controles.
    pdf.addPage();addReportHeader(pdf,"RECURSOS Y CONTROLES DE RESPUESTA A EMERGENCIAS",`Fecha: ${fecha}`);
    const overall=emergencyComplianceByRequirement(rs);
    const byArea=emergencyComplianceGroups(rs,"AreaUsuaria");
    const byEmp=emergencyComplianceGroups(rs,"Empresa");
    const kpis=[["Actividades",rs.length],["Controles aplicables",overall.required],["Implementados",overall.implemented],["Implementacion",overall.pct+"%"]];
    kpis.forEach((c,i)=>{const x=12+i*52;pdf.setDrawColor(220);pdf.roundedRect(x,22,48,15,2,2);
      pdf.setFont("helvetica","normal");pdf.setFontSize(6.3);pdf.text(c[0],x+3,27);
      pdf.setFont("helvetica","bold");pdf.setFontSize(11);pdf.text(String(c[1]),x+3,34);
    });
    drawComplianceTablePdf(pdf,byArea.slice(0,9),12,44,132,"Implementacion por area usuaria",9);
    drawComplianceTablePdf(pdf,byEmp.slice(0,9),153,44,132,"Implementacion por empresa",9);

    // Brechas desglosadas para coordinar por área usuaria y empresa ejecutora.
    pdf.setFont("helvetica","bold");pdf.setFontSize(8.5);
    pdf.text("BRECHAS POR AREA USUARIA Y EMPRESA",12,113);
    const brechas=emergencyGapByAreaCompany(rs);
    let gy=119;
    pdf.setFillColor(245,246,248);pdf.rect(12,gy,273,7,"F");pdf.setFontSize(6);
    pdf.text("AREA USUARIA",14,gy+4.5);pdf.text("EMPRESA",51,gy+4.5);
    pdf.text("CONTROLES NO IMPLEMENTADOS (NUMERO DE ACTIVIDADES)",110,gy+4.5);gy+=9;
    if(!brechas.length){pdf.setFont("helvetica","normal");pdf.text("Sin controles faltantes declarados en los registros filtrados.",14,gy+4);gy+=7;}
    brechas.slice(0,4).forEach(g=>{
      pdf.setFont("helvetica","normal");pdf.setFontSize(5.7);
      pdf.text(pdf.splitTextToSize(pdfSafe(g.area),32)[0],14,gy+3);
      pdf.text(pdf.splitTextToSize(pdfSafe(g.empresa),53)[0],51,gy+3);
      const line=g.controls.map(([c,n])=>`${c} (${n})`).join("; ");
      const lines=pdf.splitTextToSize(pdfSafe(line),172).slice(0,2);
      pdf.text(lines,110,gy+3);const rh=Math.max(7,lines.length*3.2+2);
      pdf.setDrawColor(237);pdf.line(12,gy+rh,285,gy+rh);gy+=rh;
    });


    // Matriz de controles configurados en el aplicativo.
    const my=171;
    pdf.setFont("helvetica","bold");pdf.setFontSize(8);
    pdf.text("CONTROLES REQUERIDOS POR TIPO DE TRABAJO CRITICO",12,my);
    const types=Object.keys(EMERGENCY_CONTROLS);
    let mx=12,yy=my+5;
    types.forEach((work,i)=>{
      const col=i%3,row=Math.floor(i/3),x=12+col*92,y=yy+row*14;
      pdf.setDrawColor(225);pdf.roundedRect(x,y,88,12,1.5,1.5);
      pdf.setFont("helvetica","bold");pdf.setFontSize(6.1);pdf.text(pdfSafe(work),x+2,y+3.6);
      const controls=EMERGENCY_CONTROLS[work].filter(c=>!isOptionalEmergencyControl(c));
      pdf.setFont("helvetica","normal");pdf.setFontSize(5.1);
      const short=controls.join(" / ");pdf.text(pdf.splitTextToSize(pdfSafe(short),83).slice(0,2),x+2,y+6.5);
    });
    pdf.setFont("helvetica","normal");pdf.setFontSize(5.6);
    pdf.text("Controles segun configuracion vigente del aplicativo. Los opcionales dependen de evaluacion especifica.",12,205);

    // Anexos completos: sin filas ocultas ni mensajes de adicionales.
    addEmergencyDetailPages(pdf,fecha,byArea,byEmp,brechas);

    // Hoja adicional: distribucion de tipos de trabajos criticos por area usuaria.
    addCriticalWorksAnalysisPages(pdf,rs,fecha);
    pdf.save(`Informe_Gerencial_TAR_${String(fecha).replace(/[^0-9A-Za-z_-]/g,"_")}.pdf`);
    toast("Informe gerencial ampliado generado");
  }catch(e){console.error(e);toast("No se pudo generar el informe PDF")}
  finally{btn.disabled=false;btn.textContent=prev}
}


// Misma escala y tamaño de plano en TODAS las páginas de una misma planta.
async function addPlantOrganizedPages(pdf,frente,fecha,frs){
  const zones=zoneExecutiveSummary(frs,frente),areas=areaZoneSummary(frs);
  const map=frs.length?await buildActivityCountMapImage(frs,frente):null;
  const totalTrab=frs.reduce((v,r)=>v+Number(r.NTrabajadores||0),0);
  const empresas=new Set(frs.map(r=>r.Empresa).filter(Boolean)).size;
  let first=addPlantOrganizedPages._first!==false;
  addPlantOrganizedPages._first=false;
  const renderPage=(title,rows,kind,offset)=>{
    if(!first)pdf.addPage();first=false;
    addReportHeader(pdf,title,`Fecha: ${fecha}`);
    if(map){pdf.setFont('helvetica','bold');pdf.setFontSize(8);pdf.text('Plano de actividades criticas',12,44);
      pdf.addImage(map,'PNG',12,48,190,137,undefined,'FAST');}
    else {pdf.setFontSize(9);pdf.text('Sin actividades registradas en esta planta.',20,90);}
    pdf.setFont('helvetica','normal');pdf.setFontSize(6.6);
    pdf.setFillColor(225,38,28);pdf.circle(14,192,2.2,'F');
    pdf.text('Cantidad de actividades criticas registradas en el sector.',20,194);
    pdf.setFont('helvetica','bold');pdf.setFontSize(8.5);
    pdf.text(kind==='zones'?'Resumen por zona':'Zonas por area usuaria',210,25);
    let y=30;pdf.setFillColor(245,246,248);pdf.rect(210,y,75,8,'F');pdf.setFontSize(5.9);
    pdf.text(kind==='zones'?'ZONA / SECTOR':'AREA / SECTOR',212,y+5);
    pdf.text('ACT.',257,y+5,{align:'center'});pdf.text('PERS.',269,y+5,{align:'center'});
    if(kind==='zones')pdf.text('EMP.',281,y+5,{align:'center'});y+=9;
    rows.forEach(z=>{pdf.setFont('helvetica','normal');pdf.setFontSize(5.7);
      const label=kind==='zones'?z.zona:`${z.area} / ${z.zona}`;
      pdf.text(pdf.splitTextToSize(pdfSafe(label),41)[0],212,y+3.5);
      pdf.text(String(z.actividades),257,y+3.5,{align:'center'});
      pdf.text(String(z.personas),269,y+3.5,{align:'center'});
      if(kind==='zones')pdf.text(String(z.empresas),281,y+3.5,{align:'center'});
      pdf.setDrawColor(238);pdf.line(210,y+5,285,y+5);y+=5.7;
    });
  };
  // 27 filas por hoja: no mezclar resumen con área usuaria.
  const cap=27;
  for(let i=0;i<Math.max(1,zones.length);i+=cap){
    renderPage(i===0?`ACTIVIDADES DE ALTO RIESGO - ${frente.toUpperCase()}`:`${frente.toUpperCase()} - RESUMEN POR ZONA (${Math.floor(i/cap)+1})`,zones.slice(i,i+cap),'zones',i);
    if(i===0){pdf.setFont('helvetica','normal');pdf.setFontSize(6.5);
      [['Actividades',frs.length],['Trabajadores',totalTrab],['Empresas',empresas]].forEach(([label,n],j)=>{
        const x=12+j*43;pdf.setDrawColor(220);pdf.roundedRect(x,22,39,15,2,2);pdf.setFontSize(6);pdf.text(label,x+3,27);
        pdf.setFont('helvetica','bold');pdf.setFontSize(11);pdf.text(String(n),x+3,34);
      });}
  }
  for(let i=0;i<areas.length;i+=cap){
    renderPage(`${frente.toUpperCase()} - ZONAS POR AREA USUARIA (${Math.floor(i/cap)+1})`,areas.slice(i,i+cap),'areas',i);
  }
}
function addEmergencyDetailPages(pdf,fecha,byArea,byEmp,brechas){
  // Las 9 primeras filas ya aparecen en la hoja ejecutiva. El resto va íntegro en anexos.
  const pendingA=byArea.slice(9),pendingE=byEmp.slice(9);
  if(pendingA.length||pendingE.length){
    pdf.addPage();addReportHeader(pdf,'EMERGENCIAS - CUMPLIMIENTO COMPLETO',`Fecha: ${fecha}`);
    drawComplianceTablePdf(pdf,pendingA,12,30,132,'Areas usuarias - continuacion',pendingA.length);
    drawComplianceTablePdf(pdf,pendingE,153,30,132,'Empresas - continuacion',pendingE.length);
  }
  // Cada par area/empresa aparece con sus controles completos, sin cortar textos.
  let i=4;
  while(i<brechas.length){
    pdf.addPage();addReportHeader(pdf,'EMERGENCIAS - BRECHAS POR AREA Y EMPRESA',`Fecha: ${fecha}`);
    let y=29;pdf.setFont('helvetica','bold');pdf.setFontSize(7);
    pdf.text('AREA USUARIA',14,y);pdf.text('EMPRESA',54,y);pdf.text('CONTROLES NO IMPLEMENTADOS',110,y);y+=7;
    while(i<brechas.length && y<188){
      const g=brechas[i],line=g.controls.map(([c,n])=>`${c} (${n})`).join('; ');
      const lines=pdf.splitTextToSize(pdfSafe(line),170);
      const h=Math.max(8,lines.length*3.4+3);
      if(y+h>193)break;
      pdf.setFont('helvetica','normal');pdf.setFontSize(6.3);
      pdf.text(pdf.splitTextToSize(pdfSafe(g.area),36)[0],14,y+3);
      pdf.text(pdf.splitTextToSize(pdfSafe(g.empresa),51)[0],54,y+3);
      pdf.text(lines,110,y+3);pdf.setDrawColor(235);pdf.line(12,y+h,285,y+h);y+=h;i++;
    }
  }
}
function criticalWorkAreaData(rs){
  const works=[...new Set(rs.flatMap(r=>arr(r.TrabajoCritico).map(x=>String(x).trim()).filter(Boolean)))];
  const areas=[...new Set(rs.map(r=>String(r.AreaUsuaria||'Sin area').trim()))].sort();
  const matrix=areas.map(area=>{
    const records=rs.filter(r=>String(r.AreaUsuaria||'Sin area').trim()===area);
    const values=works.map(w=>records.reduce((n,r)=>n+arr(r.TrabajoCritico).filter(x=>String(x).trim()===w).length,0));
    return {area,values,total:values.reduce((a,b)=>a+b,0),workers:records.reduce((a,r)=>a+Number(r.NTrabajadores||0),0)};
  }).sort((a,b)=>b.total-a.total);
  return {works,matrix};
}
function addCriticalWorksAnalysisPages(pdf,rs,fecha){
  const {works,matrix}=criticalWorkAreaData(rs);
  const palette=[[49,158,232],[255,89,123],[255,159,64],[245,195,62],[67,187,183],[147,100,248],[94,128,150],[208,97,173],[90,174,89],[180,124,80]];
  const pageSize=13;
  for(let start=0;start<Math.max(1,matrix.length);start+=pageSize){
    pdf.addPage();addReportHeader(pdf,'ANALISIS DE TRABAJOS CRITICOS POR AREA USUARIA',`Fecha: ${fecha} | Actividades por tipo de trabajo critico`);
    pdf.setFont('helvetica','normal');pdf.setFontSize(7);
    pdf.text('Cada segmento de color representa el numero de trabajos criticos de ese tipo registrados por el area.',12,25);
    const subset=matrix.slice(start,start+pageSize),max=Math.max(1,...matrix.map(r=>r.total));
    let y=36;
    subset.forEach(r=>{
      pdf.setFont('helvetica','bold');pdf.setFontSize(7);pdf.text(pdf.splitTextToSize(pdfSafe(r.area),52)[0],12,y+4);
      let x=72;
      r.values.forEach((v,i)=>{if(!v)return;const w=170*v/max;pdf.setFillColor(...palette[i%palette.length]);pdf.rect(x,y,w,7,'F');
        if(w>=7){pdf.setTextColor(255);pdf.setFontSize(6.3);pdf.text(String(v),x+w/2,y+4.8,{align:'center'});pdf.setTextColor(20)}x+=w;
      });
      pdf.setFont('helvetica','bold');pdf.setFontSize(7);pdf.text(String(r.total),250,y+4.5);
      pdf.setFont('helvetica','normal');pdf.setFontSize(6.5);pdf.text(`${r.workers} trab.`,264,y+4.5);
      y+=11;
    });
    let lx=12,ly=187;
    works.forEach((w,i)=>{
      const label=pdfSafe(w),needed=Math.min(95,10+label.length*1.3);
      if(lx+needed>283){lx=12;ly+=6;}
      pdf.setFillColor(...palette[i%palette.length]);pdf.rect(lx,ly-3,4,4,'F');
      pdf.setFont('helvetica','normal');pdf.setFontSize(6);pdf.text(label,lx+6,ly);lx+=needed;
    });
    pdf.setFont('helvetica','normal');pdf.setFontSize(6.3);
    pdf.text('Nota: una actividad registrada puede incluir varios tipos de trabajo critico; cada tipo se cuenta por separado.',12,177);
  }
}

function zoneExecutiveSummary(rs,frente){
  const groups={};
  rs.forEach(r=>{
    const zona=String(r.Lugar||"Sin sector").trim()||"Sin sector";
    if(!groups[zona])groups[zona]={zona,actividades:0,personas:0,emp:new Set()};
    groups[zona].actividades+=arr(r.TrabajoCritico).length||1;
    groups[zona].personas+=Number(r.NTrabajadores||0);
    if(r.Empresa)groups[zona].emp.add(r.Empresa);
  });
  return Object.values(groups).map(z=>({zona:z.zona,actividades:z.actividades,personas:z.personas,empresas:z.emp.size}))
    .sort((a,b)=>b.actividades-a.actividades||b.personas-a.personas);
}

function areaZoneSummary(rs){
  const out={};
  rs.forEach(r=>{
    const area=String(r.AreaUsuaria||"Sin area"),zona=String(r.Lugar||"Sin sector"),key=area+"|"+zona;
    if(!out[key])out[key]={area,zona,actividades:0,personas:0};
    out[key].actividades+=arr(r.TrabajoCritico).length||1;
    out[key].personas+=Number(r.NTrabajadores||0);
  });
  return Object.values(out).sort((a,b)=>b.actividades-a.actividades||b.personas-a.personas);
}
function emergencyGapByAreaCompany(rs){
  const groups={};
  rs.forEach(r=>{
    const area=String(r.AreaUsuaria||"Sin area"),empresa=String(r.Empresa||"Sin empresa"),key=area+"|"+empresa;
    const missing=missingEmergencyControlsFromRecord(r);
    if(!missing.length)return;
    if(!groups[key])groups[key]={area,empresa,controls:{},total:0};
    missing.forEach(m=>{const c=String(m.control||"").trim();if(!c)return;
      groups[key].controls[c]=(groups[key].controls[c]||0)+1;groups[key].total++;
    });
  });
  return Object.values(groups).map(g=>({...g,controls:Object.entries(g.controls).sort((a,b)=>b[1]-a[1])}))
    .sort((a,b)=>b.total-a.total);
}
async function buildActivityCountMapImage(rs,frente){
  const img=await loadImage(mapAsset(frente));
  // Mantener una resolución alta real del plano para evitar pixelado en el PDF.
  const targetW=Math.min(4200,Math.max(2600,img.naturalWidth||2600));
  const c=document.createElement("canvas");c.width=targetW;c.height=Math.round(targetW*img.naturalHeight/img.naturalWidth);
  const ctx=c.getContext("2d");ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";ctx.drawImage(img,0,0,c.width,c.height);
  const groups={};
  rs.forEach(r=>{const k=normalizeSectorKey(r.Lugar);if(!groups[k])groups[k]=[];groups[k].push(r)});
  sectorsFor(frente).forEach(s=>{
    const items=groups[normalizeSectorKey(s.nombre)]||[];if(!items.length)return;
    const activities=items.reduce((n,r)=>n+(arr(r.TrabajoCritico).length||1),0);
    const x=s.x/100*c.width,y=s.y/100*c.height,rad=Math.max(22,c.width/105);
    ctx.beginPath();ctx.arc(x,y,rad,0,Math.PI*2);ctx.fillStyle="#e3261c";ctx.fill();
    ctx.lineWidth=Math.max(4,c.width/650);ctx.strokeStyle="#fff";ctx.stroke();
    ctx.fillStyle="#fff";ctx.font=`800 ${Math.round(rad*.95)}px Arial`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(String(activities),x,y+1);
  });
  // Recursos permanentes de UNACEM.
  (emergencyResources||[]).filter(r=>normFrente(r.frente||r.Frente)===normFrente(frente)).forEach(r=>{
    const m=resourceTypeMeta(r.tipo||r.Tipo),x=Number(r.x??r.X)/100*c.width,y=Number(r.y??r.Y)/100*c.height;
    ctx.fillStyle=m.cls==="dea"?"#0b8f4d":m.cls==="station"?"#0068b5":"#e3261c";
    const sz=Math.max(30,c.width/95);ctx.fillRect(x-sz/2,y-sz/2,sz,sz);ctx.strokeStyle="#fff";ctx.lineWidth=4;ctx.strokeRect(x-sz/2,y-sz/2,sz,sz);
    ctx.fillStyle="#fff";ctx.font=`800 ${Math.round(sz*.38)}px Arial`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(m.short,x,y);
  });
  return c.toDataURL("image/png");
}

function emergencyComplianceByRequirement(rs){
  let required=0,implemented=0;
  rs.forEach(r=>{const s=emergencyComplianceStatsFromRecord(r);required+=Number(s.required||0);implemented+=Number(s.implemented||0)});
  return {required,implemented,pct:required?Math.round(implemented/required*100):0};
}
function emergencyComplianceGroups(rs,field){
  const g={};
  rs.forEach(r=>{
    const k=String(r[field]||"Sin dato").trim()||"Sin dato",s=emergencyComplianceStatsFromRecord(r);
    if(!g[k])g[k]={name:k,required:0,implemented:0,activities:0};
    g[k].required+=Number(s.required||0);g[k].implemented+=Number(s.implemented||0);g[k].activities++;
  });
  return Object.values(g).map(x=>({...x,pct:x.required?Math.round(x.implemented/x.required*100):0}))
    .sort((a,b)=>a.pct-b.pct||b.required-a.required);
}
function drawComplianceTablePdf(pdf,rows,x,y,w,title,maxRows=10){
  pdf.setFont("helvetica","bold");pdf.setFontSize(8.5);pdf.text(title,x,y);y+=5;
  pdf.setFillColor(245,246,248);pdf.rect(x,y,w,7,"F");pdf.setFontSize(6.2);
  pdf.text("EMPRESA / AREA",x+2,y+4.5);pdf.text("ACT.",x+w-34,y+4.5);pdf.text("CUMPLIMIENTO",x+w-25,y+4.5);y+=8;
  rows.slice(0,maxRows).forEach(r=>{
    pdf.setFont("helvetica","normal");pdf.setFontSize(6);
    pdf.text(pdf.splitTextToSize(pdfSafe(r.name),w-46)[0],x+2,y+3.5);
    pdf.text(String(r.activities),x+w-32,y+3.5,{align:"center"});
    const color=r.pct>=90?[24,165,88]:r.pct>=70?[244,180,0]:[225,38,28];
    pdf.setFillColor(...color);pdf.circle(x+w-19,y+1.5,1.7,"F");
    pdf.setTextColor(20);pdf.setFont("helvetica","bold");pdf.text(`${r.pct}%`,x+w-3,y+3.5,{align:"right"});
    pdf.setDrawColor(235);pdf.line(x,y+5,x+w,y+5);y+=6;
  });

}

function hexToRgb(h){h=h.replace("#","");return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}
function addHorizontalBarsPdf(pdf,data,x,y,w,h,title,mode="cantidad"){
  pdf.setFont("helvetica","bold");pdf.setFontSize(9);pdf.text(pdfSafe(title),x,y);y+=5;
  const entries=Object.entries(data).sort((a,b)=>Number(b[1])-Number(a[1])).slice(0,9),max=mode==="percent"?100:Math.max(1,...entries.map(x=>Number(x[1])||0));
  const row=Math.min(6,(h-6)/Math.max(1,entries.length));
  entries.forEach(([k,v])=>{const val=Number(v)||0;pdf.setFont("helvetica","normal");pdf.setFontSize(6.2);pdf.text(pdf.splitTextToSize(pdfSafe(k),42)[0],x,y+3);
    pdf.setDrawColor(225);pdf.rect(x+45,y,w-62,3.5);const pct=Math.max(0,Math.min(1,val/max));pdf.setFillColor(225,38,28);pdf.rect(x+45,y,(w-62)*pct,3.5,"F");
    pdf.setFont("helvetica","bold");pdf.text(mode==="percent"?`${val}%`:String(val),x+w-14,y+3);y+=row;
  });
}
async function buildManagerialMapImage(rs,frente){
  const img=await loadImage(mapAsset(frente)),maxW=3200,scale=Math.min(1,maxW/img.naturalWidth);
  const c=document.createElement("canvas");c.width=Math.max(1600,Math.round(img.naturalWidth*scale));c.height=Math.round(c.width*img.naturalHeight/img.naturalWidth);
  const ctx=c.getContext("2d");ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";ctx.drawImage(img,0,0,c.width,c.height);
  const groups={};rs.filter(r=>normFrente(r.Frente)===normFrente(frente)).forEach(r=>{const k=normalizeSectorKey(r.Lugar);if(!groups[k])groups[k]=[];groups[k].push(r)});
  sectorsFor(frente).forEach(s=>{const items=groups[normalizeSectorKey(s.nombre)]||[];if(!items.length)return;const workers=items.reduce((a,r)=>a+Number(r.NTrabajadores||0),0);
    const color=workers>=21?"#e3261c":workers>=11?"#f4c430":"#18a558",x=s.x/100*c.width,y=s.y/100*c.height,rad=Math.max(18,c.width/110);
    ctx.beginPath();ctx.arc(x,y,rad,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();ctx.lineWidth=Math.max(3,c.width/700);ctx.strokeStyle="#fff";ctx.stroke();
    ctx.fillStyle="#fff";ctx.font=`800 ${Math.round(rad*1.05)}px Arial`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(String(workers),x,y+1);
  });
  // Recursos permanentes también aparecen en el informe.
  (emergencyResources||[]).filter(r=>normFrente(r.frente||r.Frente)===normFrente(frente)).forEach(r=>{const m=resourceTypeMeta(r.tipo||r.Tipo),x=Number(r.x??r.X)/100*c.width,y=Number(r.y??r.Y)/100*c.height;
    ctx.fillStyle=m.cls==="dea"?"#0b8f4d":m.cls==="station"?"#0068b5":"#e3261c";ctx.fillRect(x-18,y-18,36,36);ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.strokeRect(x-18,y-18,36,36);ctx.fillStyle="#fff";ctx.font="800 15px Arial";ctx.fillText(m.short,x,y+1);
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
          localStorage.setItem("tar_remote_snapshot_v127", JSON.stringify({
            ts:Date.now(),
            data:remoteData
          }));
        }catch(e){}
      }
}

function loadCachedRemoteSnapshot(){
  try{
    const raw=localStorage.getItem("tar_remote_snapshot_v127");
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

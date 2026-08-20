const DEFAULT_DATA = {
  empresas:["FGA INGENIEROS S.A.","CORMEI","CIME INGENIEROS","AGEIN","HAUG","M Y S","VERTISUB"],
  trabajos:["Trabajos en caliente","Trabajos en altura","Izaje de Cargas","Aislamiento de Energía","Espacio Confinado"],
  riesgos:["Proyección de partículas incandescentes","Caída de objetos","Caída de carga","Contacto eléctrico"],
  areas:["DPA","DPRA","DIA"],
  lugares:[
    {nombre:"GSA 1 Carbón",x:52,y:48},{nombre:"Molinos 1er Nivel",x:65,y:63},{nombre:"PK1 Piso 5",x:60,y:38},
    {nombre:"Precalentador 2",x:56,y:34},{nombre:"Silos de Crudo",x:62,y:44},{nombre:"Silos de Carbón",x:68,y:34},
    {nombre:"Filtros de Mangas Línea 1",x:46,y:28},{nombre:"Filtros de Mangas Línea 2",x:46,y:22},
    {nombre:"Edificio Molienda de Crudo",x:45,y:45},{nombre:"Prensas de Crudos",x:69,y:66},
    {nombre:"Molinos de Bola",x:83,y:56},{nombre:"Prensa de Clinker N°1 y 2",x:92,y:55},
    {nombre:"Sala de Compresores",x:87,y:74},{nombre:"Prehomogeneización de Carbón",x:20,y:56},
    {nombre:"Prehomogeneización de Cemento",x:20,y:23},{nombre:"Sub Estación 2",x:80,y:34}
  ]
};

const DEMO_REGISTROS = [
  {ID:"R-1001",Empresa:"FGA INGENIEROS S.A.",AreaUsuaria:"DPA",TrabajoCritico:["Trabajos en altura","Izaje de Cargas"],Lugar:"GSA 1 Carbón",Fecha:today(),HoraInicio:"08:00",HoraTermino:"17:00",NTrabajadores:8,Descripcion:"Montaje de estructura metálica",RiesgosCriticos:["Caída de objetos","Caída de carga"],Conexas:"SI",EstadoOperativo:"ACTIVO",X:52,Y:48},
  {ID:"R-1002",Empresa:"CORMEI",AreaUsuaria:"DIA",TrabajoCritico:["Trabajos en caliente"],Lugar:"GSA 1 Carbón",Fecha:today(),HoraInicio:"09:00",HoraTermino:"15:00",NTrabajadores:5,Descripcion:"Soldadura de soportes",RiesgosCriticos:["Proyección de partículas incandescentes"],Conexas:"SI",EstadoOperativo:"ACTIVO",X:52,Y:48},
  {ID:"R-1003",Empresa:"AGEIN",AreaUsuaria:"DPA",TrabajoCritico:["Aislamiento de Energía"],Lugar:"Molinos 1er Nivel",Fecha:today(),HoraInicio:"07:30",HoraTermino:"12:30",NTrabajadores:4,Descripcion:"Aislamiento para intervención",RiesgosCriticos:["Contacto eléctrico"],Conexas:"NO",EstadoOperativo:"ACTIVO",X:65,Y:63},
  {ID:"R-1004",Empresa:"HAUG",AreaUsuaria:"DPRA",TrabajoCritico:["Izaje de Cargas"],Lugar:"Precalentador 2",Fecha:today(),HoraInicio:"10:00",HoraTermino:"18:00",NTrabajadores:7,Descripcion:"Izaje de componentes",RiesgosCriticos:["Caída de carga","Caída de objetos"],Conexas:"NO",EstadoOperativo:"ACTIVO",X:56,Y:34}
];
const DEMO_CONEXAS = [
  {ID:"C-2001",RegistroID:"R-1001",Fecha:today(),HoraGestion:"09:20",MiEmpresa:"FGA INGENIEROS S.A.",Lugar:"GSA 1 Carbón",JefePropio:"Responsable FGA",SsomaPropio:"SSOMA FGA",EmpresasConexas:[{empresa:"CORMEI",actividad:"Soldadura de soportes",riesgos:["Proyección de partículas incandescentes"],controles:"Delimitación, pantallas ignífugas y coordinación de secuencia.",jefe:"Jefe CORMEI",ssoma:"SSOMA CORMEI"}],Observaciones:"Mantener comunicación permanente.",Actualizado:new Date().toLocaleString()}
];

let CONFIG = { apiUrl: localStorage.getItem("tar_api_url") || "" };
let DATA = structuredClone(DEFAULT_DATA);
let registros = JSON.parse(localStorage.getItem("tar_registros") || "null") || structuredClone(DEMO_REGISTROS);
let conexas = JSON.parse(localStorage.getItem("tar_conexas") || "null") || structuredClone(DEMO_CONEXAS);
let charts = {};
let selectedSector = null;

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
function persist(){localStorage.setItem("tar_registros",JSON.stringify(registros));localStorage.setItem("tar_conexas",JSON.stringify(conexas))}
function isActive(r){return (r.EstadoOperativo||"ACTIVO")!=="FINALIZADO"}

function init(){
  ["fechaResumen","fecha","filtroMisFecha","conFecha","filtroConFecha","mapFiltroFecha","listaFecha"].forEach(id=>qs(id).value=today());
  qs("horaInicio").value=nowTime(); qs("horaTermino").value="17:00"; qs("conHora").value=nowTime(); qs("contFecha").value=yesterday();
  wireNavigation(); wireEvents(); renderConfig(); refreshAll();
  if(CONFIG.apiUrl) loadRemote();
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
}

function wireEvents(){
  qs("btnSettings").onclick=()=>{qs("apiUrlInput").value=CONFIG.apiUrl;qs("settingsModal").classList.remove("hidden")};
  qs("closeSettings").onclick=()=>qs("settingsModal").classList.add("hidden");
  qs("btnSaveSettings").onclick=()=>{CONFIG.apiUrl=qs("apiUrlInput").value.trim();localStorage.setItem("tar_api_url",CONFIG.apiUrl);qs("settingsModal").classList.add("hidden");renderConfig(); if(CONFIG.apiUrl) loadRemote()};
  qs("btnDemoData").onclick=()=>{localStorage.removeItem("tar_api_url");localStorage.removeItem("tar_registros");localStorage.removeItem("tar_conexas");location.reload()};
  qs("btnRefresh").onclick=()=>refreshAll();
  qs("fechaResumen").onchange=()=>renderResumen();

  qs("tieneConexas").onchange=()=>qs("conexasQuick").classList.toggle("hidden",qs("tieneConexas").value!=="SI");
  qs("btnAgregarConexaQuick").onclick=()=>addQuickConexa();
  qs("formRegistro").onsubmit=submitRegistro;
  qs("btnGuardarBorrador").onclick=saveDraft;
  qs("lugar").onchange=()=>setMarkerByLugar(qs("lugar").value);
  qs("mapRegistro").onclick=mapRegistroClick;
  qs("btnElegirMapa").onclick=()=>{qs("mapRegistro").scrollIntoView({behavior:"smooth",block:"center"});toast("Haga clic en el sector del plano")};
  qs("btnResetMarker").onclick=clearMarker;
  qs("filtroMisEmpresa").onchange=renderMisRegistros; qs("filtroMisFecha").onchange=renderMisRegistros;
  qs("btnBuscarAnterior").onclick=openContinue; qs("closeContinue").onclick=()=>qs("continueModal").classList.add("hidden");
  qs("contEmpresa").onchange=renderContinueTable; qs("contFecha").onchange=renderContinueTable;

  qs("conMiEmpresa").onchange=updateConRegistroOptions; qs("conFecha").onchange=updateConRegistroOptions; qs("conRegistroPropio").onchange=renderConexaOwnRecord;
  qs("btnAgregarEmpresaConexa").onclick=()=>addConexaCompany();
  qs("formConexa").onsubmit=submitConexa;
  qs("filtroConEmpresa").onchange=renderConexasTable; qs("filtroConFecha").onchange=renderConexasTable;

  ["mapFiltroTrabajo","mapFiltroEmpresa","mapFiltroArea","mapFiltroFecha"].forEach(id=>qs(id).onchange=renderMapGeneral);
  qs("btnSectorDashboard").onclick=()=>{showView("lista"); if(selectedSector){qs("listaLugar").value=selectedSector;renderListaDashboard()}};

  ["listaEmpresa","listaLugar","listaArea","listaFecha"].forEach(id=>qs(id).onchange=renderListaDashboard);
  qs("btnLimpiarFiltros").onclick=()=>{qs("listaEmpresa").value="";qs("listaLugar").value="";qs("listaArea").value="";qs("listaFecha").value=today();renderListaDashboard()};
}

function renderConfig(){
  qs("syncStatus").textContent=CONFIG.apiUrl?"Conectado a Apps Script":"Modo demo/local";
  qs("syncStatus").className="pill "+(CONFIG.apiUrl?"ok":"neutral");
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
  ["empresa","filtroMisEmpresa","conMiEmpresa","filtroConEmpresa","contEmpresa"].forEach(id=>setOptions(id,DATA.empresas,id.startsWith("filtro")?"Todas":"Seleccione"));
  setOptions("mapFiltroEmpresa",DATA.empresas,"Todas"); setOptions("listaEmpresa",DATA.empresas,"Todas");
  ["areaUsuaria"].forEach(id=>setOptions(id,DATA.areas,"Seleccione"));
  setOptions("mapFiltroArea",DATA.areas,"Todas"); setOptions("listaArea",DATA.areas,"Todas");
  setOptions("lugar",DATA.lugares.map(x=>x.nombre),"Seleccione"); setOptions("listaLugar",DATA.lugares.map(x=>x.nombre),"Todos");
  setOptions("mapFiltroTrabajo",DATA.trabajos,"Todos");
  renderMulti("trabajosCriticos",DATA.trabajos); renderMulti("riesgosCriticos",DATA.riesgos);
}
function selectedMulti(id){return [...qs(id).querySelectorAll("input:checked")].map(x=>x.value)}
function setMulti(id,values=[]){[...qs(id).querySelectorAll("input")].forEach(x=>x.checked=values.includes(x.value))}

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
function drawChart(id,data,type){
  const ctx=qs(id); if(charts[id]) charts[id].destroy();
  const labels=Object.keys(data), vals=Object.values(data);
  charts[id]=new Chart(ctx,{type,data:{labels,datasets:[{data:vals,borderWidth:1}]},options:{responsive:true,plugins:{legend:{display:type==="doughnut",position:"right"}},scales:type==="doughnut"?{}:{y:{beginAtZero:true,ticks:{precision:0}}}}});
}

function setMarkerByLugar(nombre){
  const l=DATA.lugares.find(x=>x.nombre===nombre); if(!l)return;
  qs("mapX").value=l.x;qs("mapY").value=l.y;positionMarker(qs("registroMarker"),l.x,l.y);qs("mapCoordText").textContent=`${nombre} – ubicación vinculada al plano`;
}
function positionMarker(el,x,y){el.style.left=x+"%";el.style.top=y+"%";el.classList.remove("hidden")}
function clearMarker(){qs("mapX").value="";qs("mapY").value="";qs("registroMarker").classList.add("hidden");qs("mapCoordText").textContent="Sin ubicación seleccionada"}
function mapRegistroClick(e){
  const box=e.currentTarget.getBoundingClientRect(); const x=((e.clientX-box.left)/box.width)*100, y=((e.clientY-box.top)/box.height)*100;
  qs("mapX").value=x.toFixed(2);qs("mapY").value=y.toFixed(2);positionMarker(qs("registroMarker"),x,y);
  const nearest=DATA.lugares.map(l=>({...l,d:Math.hypot(l.x-x,l.y-y)})).sort((a,b)=>a.d-b.d)[0];
  if(nearest){qs("lugar").value=nearest.nombre;qs("mapCoordText").textContent=`Sector aproximado: ${nearest.nombre}`}
}

function addQuickConexa(data={}){
  const wrap=document.createElement("div");wrap.className="conexa-item quick-conexa";
  wrap.innerHTML=`<div class="conexa-item-head"><strong>Empresa conexa</strong><button type="button" class="remove-btn">Eliminar</button></div>
    <div class="form-grid cols-2"><label>Empresa<select class="qc-empresa">${DATA.empresas.map(x=>`<option ${x===data.empresa?"selected":""}>${escapeHtml(x)}</option>`)}</select></label>
    <label>Actividad<input class="qc-actividad" value="${escapeHtml(data.actividad||"")}"></label></div>
    <label>Riesgos críticos que presenta<input class="qc-riesgos" value="${escapeHtml((data.riesgos||[]).join(" | "))}" placeholder="Separar por |"></label>`;
  wrap.querySelector(".remove-btn").onclick=()=>wrap.remove();qs("conexasQuickList").appendChild(wrap)
}
function quickConexasData(){return [...document.querySelectorAll(".quick-conexa")].map(x=>({empresa:x.querySelector(".qc-empresa").value,actividad:x.querySelector(".qc-actividad").value,riesgos:x.querySelector(".qc-riesgos").value.split("|").map(s=>s.trim()).filter(Boolean)}))}

async function submitRegistro(e){
  e.preventDefault();
  const tc=selectedMulti("trabajosCriticos"), rc=selectedMulti("riesgosCriticos");
  if(!tc.length)return toast("Seleccione al menos un trabajo crítico");
  if(!rc.length)return toast("Seleccione al menos un riesgo crítico");
  if(!qs("mapX").value || !qs("mapY").value)return toast("Seleccione la ubicación en el plano");
  const existing=qs("registroId").value;
  const r={
    ID:existing||uid("R"),Empresa:qs("empresa").value,AreaUsuaria:qs("areaUsuaria").value,TrabajoCritico:tc,Lugar:qs("lugar").value,
    Fecha:qs("fecha").value,HoraInicio:qs("horaInicio").value,HoraTermino:qs("horaTermino").value,NTrabajadores:Number(qs("nTrabajadores").value),
    Descripcion:qs("descripcion").value,RiesgosCriticos:rc,Conexas:qs("tieneConexas").value,EstadoOperativo:"ACTIVO",
    X:Number(qs("mapX").value),Y:Number(qs("mapY").value),Actualizado:new Date().toISOString()
  };
  const idx=registros.findIndex(x=>x.ID===existing); if(idx>=0) registros[idx]={...registros[idx],...r}; else registros.push(r);
  persist(); addHistoryLocal("REGISTRO",r.ID,existing?"EDICIÓN":"ALTA",r.Empresa);
  if(CONFIG.apiUrl) await postRemote({action:"saveRegistro",registro:r,conexasQuick:quickConexasData()});
  const pdf=await buildPdfRegistro(r,quickConexasData());
  if(CONFIG.apiUrl) await sendPdfRemote(pdf,r,[...new Set(quickConexasData().map(x=>x.empresa))]);
  toast("Registro guardado. PDF generado.");
  resetRegistroForm(); refreshAll();
}
function saveDraft(){
  const draft={empresa:qs("empresa").value,area:qs("areaUsuaria").value,lugar:qs("lugar").value,fecha:qs("fecha").value,ini:qs("horaInicio").value,fin:qs("horaTermino").value,n:qs("nTrabajadores").value,desc:qs("descripcion").value,tc:selectedMulti("trabajosCriticos"),rc:selectedMulti("riesgosCriticos"),x:qs("mapX").value,y:qs("mapY").value};
  localStorage.setItem("tar_draft",JSON.stringify(draft));toast("Borrador guardado en este dispositivo")
}
function resetRegistroForm(){
  qs("formRegistro").reset();qs("registroId").value="";qs("fecha").value=today();qs("horaInicio").value=nowTime();qs("horaTermino").value="17:00";qs("nTrabajadores").value=1;
  clearMarker();setMulti("trabajosCriticos",[]);setMulti("riesgosCriticos",[]);qs("conexasQuickList").innerHTML="";qs("conexasQuick").classList.add("hidden")
}

function renderMisRegistros(){
  const emp=qs("filtroMisEmpresa").value, d=qs("filtroMisFecha").value||today();
  const rs=registros.filter(r=>r.Fecha===d && (!emp||r.Empresa===emp));
  qs("tablaMisRegistros").innerHTML=rs.map(r=>`<tr><td>${r.ID}</td><td>${escapeHtml(r.Empresa)}</td><td>${escapeHtml(r.Lugar)}</td><td>${arr(r.TrabajoCritico).join(", ")}</td><td>${r.HoraInicio}–${r.HoraTermino}</td><td>${r.NTrabajadores}</td>
  <td><button class="btn mini secondary" onclick="editRegistro('${r.ID}')">Editar</button><button class="btn mini secondary" onclick="openConexaFor('${r.ID}')">Conexa</button>${isActive(r)?`<button class="btn mini secondary" onclick="finalizarRegistro('${r.ID}')">Finalizar</button>`:"<b>Finalizado</b>"}<button class="btn mini secondary" onclick="continuarRegistro('${r.ID}')">Continuar mañana</button></td></tr>`).join("")||`<tr><td colspan="7">Sin registros.</td></tr>`
}
window.editRegistro=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;showView("registro");qs("registroId").value=r.ID;qs("empresa").value=r.Empresa;qs("areaUsuaria").value=r.AreaUsuaria;qs("lugar").value=r.Lugar;qs("fecha").value=r.Fecha;qs("horaInicio").value=r.HoraInicio;qs("horaTermino").value=r.HoraTermino;qs("nTrabajadores").value=r.NTrabajadores;qs("descripcion").value=r.Descripcion;qs("tieneConexas").value=r.Conexas||"NO";setMulti("trabajosCriticos",arr(r.TrabajoCritico));setMulti("riesgosCriticos",arr(r.RiesgosCriticos));qs("mapX").value=r.X;qs("mapY").value=r.Y;positionMarker(qs("registroMarker"),r.X,r.Y);qs("mapCoordText").textContent=r.Lugar;window.scrollTo({top:0,behavior:"smooth"})
}
window.finalizarRegistro=async function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;
  r.EstadoOperativo="FINALIZADO";r.HoraFinalReal=nowTime();r.Actualizado=new Date().toISOString();persist();addHistoryLocal("REGISTRO",id,"FINALIZACIÓN",r.Empresa);
  if(CONFIG.apiUrl)await postRemote({action:"finalizarRegistro",id,hora:r.HoraFinalReal});refreshAll();toast("Trabajo finalizado")
}
window.continuarRegistro=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;const d=new Date(r.Fecha+"T12:00:00");d.setDate(d.getDate()+1);const next=d.toISOString().slice(0,10);
  showView("registro");qs("registroId").value="";qs("empresa").value=r.Empresa;qs("areaUsuaria").value=r.AreaUsuaria;qs("lugar").value=r.Lugar;qs("fecha").value=next;qs("horaInicio").value=r.HoraInicio;qs("horaTermino").value=r.HoraTermino;qs("nTrabajadores").value=r.NTrabajadores;qs("descripcion").value=r.Descripcion;qs("tieneConexas").value=r.Conexas||"NO";setMulti("trabajosCriticos",arr(r.TrabajoCritico));setMulti("riesgosCriticos",arr(r.RiesgosCriticos));qs("mapX").value=r.X;qs("mapY").value=r.Y;positionMarker(qs("registroMarker"),r.X,r.Y);qs("mapCoordText").textContent=r.Lugar;toast("Actividad copiada. Revise y actualice antes de registrar.")
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
  const r=registros.find(x=>x.ID===qs("conRegistroPropio").value);const marker=qs("conexaMarker");
  if(!r){marker.classList.add("hidden");return}
  positionMarker(marker,r.X,r.Y)
}
function addConexaCompany(data={}){
  const el=document.createElement("div");el.className="conexa-item";
  el.innerHTML=`<div class="conexa-item-head"><strong>Empresa conexa</strong><button type="button" class="remove-btn">Eliminar</button></div>
  <div class="form-grid cols-2"><label>Empresa*<select class="cx-empresa" required>${DATA.empresas.map(x=>`<option ${x===data.empresa?"selected":""}>${escapeHtml(x)}</option>`)}</select></label>
  <label>Actividad que realiza*<input class="cx-actividad" required value="${escapeHtml(data.actividad||"")}"></label></div>
  <label>Riesgos críticos que MI actividad genera a esta empresa*<input class="cx-riesgos" required value="${escapeHtml((data.riesgos||[]).join(" | "))}" placeholder="Separar por |"></label>
  <label>Controles específicos para no afectar su trabajo*<textarea class="cx-controles" rows="2" required>${escapeHtml(data.controles||"")}</textarea></label>
  <div class="form-grid cols-2"><label>Jefe del área notificado*<input class="cx-jefe" required value="${escapeHtml(data.jefe||"")}"></label><label>Supervisor SSOMA notificado*<input class="cx-ssoma" required value="${escapeHtml(data.ssoma||"")}"></label></div>`;
  el.querySelector(".remove-btn").onclick=()=>el.remove();qs("empresasConexas").appendChild(el)
}
function collectConexas(){
  return [...qs("empresasConexas").querySelectorAll(".conexa-item")].map(x=>({empresa:x.querySelector(".cx-empresa").value,actividad:x.querySelector(".cx-actividad").value,riesgos:x.querySelector(".cx-riesgos").value.split("|").map(s=>s.trim()).filter(Boolean),controles:x.querySelector(".cx-controles").value,jefe:x.querySelector(".cx-jefe").value,ssoma:x.querySelector(".cx-ssoma").value}))
}
async function submitConexa(e){
  e.preventDefault();const r=registros.find(x=>x.ID===qs("conRegistroPropio").value);if(!r)return toast("Seleccione la actividad propia reportada");
  const empresas=collectConexas();if(!empresas.length)return toast("Agregue al menos una empresa conexa");
  const c={ID:uid("C"),RegistroID:r.ID,Fecha:qs("conFecha").value,HoraGestion:qs("conHora").value,MiEmpresa:qs("conMiEmpresa").value,Lugar:r.Lugar,JefePropio:qs("conJefePropio").value,SsomaPropio:qs("conSsomaPropio").value,EmpresasConexas:empresas,Observaciones:qs("conObservaciones").value,Actualizado:new Date().toLocaleString()};
  conexas.push(c);persist();addHistoryLocal("CONEXA",c.ID,"ALTA",c.MiEmpresa);
  if(CONFIG.apiUrl)await postRemote({action:"saveConexa",conexa:c});
  const pdf=await buildPdfConexa(c,r);if(CONFIG.apiUrl)await sendPdfRemote(pdf,{Empresa:c.MiEmpresa,ID:c.ID},empresas.map(x=>x.empresa),"COORDINACIÓN DE ACTIVIDADES CONEXAS");
  toast("Coordinación conexa registrada y PDF generado");qs("formConexa").reset();qs("conFecha").value=today();qs("conHora").value=nowTime();qs("empresasConexas").innerHTML="";refreshAll()
}
window.openConexaFor=function(id){
  const r=registros.find(x=>x.ID===id);if(!r)return;showView("conexas");qs("conMiEmpresa").value=r.Empresa;qs("conFecha").value=r.Fecha;updateConRegistroOptions();qs("conRegistroPropio").value=r.ID;renderConexaOwnRecord();addConexaCompany();toast("Complete la coordinación con la empresa aledaña.")
}
function renderConexasTable(){
  const emp=qs("filtroConEmpresa").value,d=qs("filtroConFecha").value||today();const cs=conexas.filter(c=>c.Fecha===d&&(!emp||c.MiEmpresa===emp));
  qs("tablaConexas").innerHTML=cs.map(c=>`<tr><td>${c.ID}</td><td>${c.RegistroID}</td><td>${c.MiEmpresa}</td><td>${(c.EmpresasConexas||[]).map(x=>x.empresa).join(", ")}</td><td>${c.HoraGestion}</td><td>${c.Actualizado||""}</td><td><button class="btn mini secondary" onclick="editConexa('${c.ID}')">Editar / incluir</button></td></tr>`).join("")||`<tr><td colspan="7">Sin coordinaciones.</td></tr>`
}
window.editConexa=function(id){
  const c=conexas.find(x=>x.ID===id),r=registros.find(x=>x.ID===c?.RegistroID);if(!c||!r)return;showView("conexas");qs("conMiEmpresa").value=c.MiEmpresa;qs("conFecha").value=c.Fecha;qs("conHora").value=nowTime();updateConRegistroOptions();qs("conRegistroPropio").value=c.RegistroID;qs("conJefePropio").value=c.JefePropio;qs("conSsomaPropio").value=c.SsomaPropio;qs("conObservaciones").value=c.Observaciones;qs("empresasConexas").innerHTML="";c.EmpresasConexas.forEach(addConexaCompany);renderConexaOwnRecord();toast("Se cargó la coordinación. Al guardar se genera una nueva versión trazable.")
}

function filteredForMap(){
  const d=qs("mapFiltroFecha").value||today(),t=qs("mapFiltroTrabajo").value,e=qs("mapFiltroEmpresa").value,a=qs("mapFiltroArea").value;
  return registros.filter(r=>r.Fecha===d&&isActive(r)&&(!t||arr(r.TrabajoCritico).includes(t))&&(!e||r.Empresa===e)&&(!a||r.AreaUsuaria===a))
}
function renderMapGeneral(){
  const rs=filteredForMap(),by={};rs.forEach(r=>(by[r.Lugar]??=[]).push(r));
  qs("sectorMarkers").innerHTML=DATA.lugares.map(l=>{const n=(by[l.nombre]||[]).length;let c=n>=5?"#e43d30":n>=3?"#f28a1a":n>=1?"#f3c623":"#38a947";return `<button class="sector-dot" style="left:${l.x}%;top:${l.y}%;background:${c}" title="${escapeHtml(l.nombre)} · ${n} trabajos" onclick="selectSector('${escapeHtml(l.nombre).replaceAll("'","\\'")}')">${n}</button>`}).join("");
  if(selectedSector) selectSector(selectedSector,false)
}
window.selectSector=function(nombre,scroll=true){
  selectedSector=nombre;const rs=filteredForMap().filter(r=>r.Lugar===nombre);qs("sectorEmpty").classList.add("hidden");qs("sectorDetail").classList.remove("hidden");qs("sectorNombre").textContent=nombre;qs("sectorTrabajos").textContent=rs.length;qs("sectorTrabajadores").textContent=rs.reduce((s,r)=>s+Number(r.NTrabajadores),0);qs("sectorEmpresas").textContent=new Set(rs.map(r=>r.Empresa)).size;qs("sectorConexos").textContent=conexas.filter(c=>c.Fecha===(qs("mapFiltroFecha").value||today())&&c.Lugar===nombre).reduce((s,c)=>s+c.EmpresasConexas.length,0);
  const b=qs("sectorBadge");b.textContent=rs.length+" trabajos";b.className="load-badge "+loadClass(rs.length);qs("sectorActividades").innerHTML=rs.map(r=>`<div><b>${escapeHtml(r.Empresa)}</b><br>${arr(r.TrabajoCritico).join(", ")} · ${r.NTrabajadores} trab.</div>`).join("")||"<small>Sin actividades para el filtro.</small>";
  [...document.querySelectorAll(".sector-dot")].forEach(x=>x.classList.toggle("selected",x.title.startsWith(nombre+" ·")));if(scroll)qs("sectorDetail").scrollIntoView({behavior:"smooth",block:"nearest"})
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

async function buildPdfRegistro(r,quick=[]){
  qs("pdfTitle").textContent="REGISTRO DE TRABAJO DE ALTO RIESGO";qs("pdfSubtitle").textContent=`ID ${r.ID} · ${r.Fecha}`;
  qs("pdfContent").innerHTML=`<div class="pdf-content-grid">
  ${pdfField("Empresa",r.Empresa)}${pdfField("Área usuaria",r.AreaUsuaria)}${pdfField("Trabajo crítico",arr(r.TrabajoCritico).join(", "))}${pdfField("Lugar",r.Lugar)}
  ${pdfField("Fecha",r.Fecha)}${pdfField("Horario",`${r.HoraInicio} – ${r.HoraTermino}`)}${pdfField("Nº trabajadores",r.NTrabajadores)}${pdfField("Actividades conexas",r.Conexas)}
  ${pdfField("Descripción del trabajo",r.Descripcion)}${pdfField("Riesgos críticos",arr(r.RiesgosCriticos).join(", "))}
  </div>${quick.length?`<h3>Actividades conexas reportadas al inicio</h3>${quick.map(x=>`<div class="pdf-conexa"><b>${x.empresa}</b><br>Actividad: ${x.actividad}<br>Riesgos: ${x.riesgos.join(", ")}</div>`).join("")}`:""}
  <h3>Ubicación en plano</h3><div class="pdf-map"><img src="assets/mapa_planta_nueva.png"><span class="pdf-pin" style="left:${r.X}%;top:${r.Y}%"></span></div>`;
  return renderPdfAndDownload(`${r.ID}_Trabajo_Alto_Riesgo.pdf`)
}
async function buildPdfConexa(c,r){
  qs("pdfTitle").textContent="COORDINACIÓN DE TRABAJOS DE ALTO RIESGO EN ÁREAS ALEDAÑAS O CONEXAS";qs("pdfSubtitle").textContent=`ID ${c.ID} · ${c.Fecha} · ${c.HoraGestion}`;
  qs("pdfContent").innerHTML=`<div class="pdf-content-grid">${pdfField("Mi empresa",c.MiEmpresa)}${pdfField("Lugar",c.Lugar)}${pdfField("Actividad propia",r.Descripcion)}${pdfField("Trabajo crítico propio",arr(r.TrabajoCritico).join(", "))}${pdfField("Jefe del área propio",c.JefePropio)}${pdfField("Supervisor SSOMA propio",c.SsomaPropio)}</div>
  <h3>Empresas / actividades conexas</h3>${c.EmpresasConexas.map(x=>`<div class="pdf-conexa"><b>${x.empresa}</b><br><b>Actividad:</b> ${x.actividad}<br><b>Riesgos que mi actividad genera:</b> ${x.riesgos.join(", ")}<br><b>Controles específicos:</b> ${x.controles}<br><b>Jefe notificado:</b> ${x.jefe}<br><b>SSOMA notificado:</b> ${x.ssoma}</div>`).join("")}
  <div class="pdf-conexa"><b>Observaciones / acuerdos:</b><br>${c.Observaciones||"—"}</div><h3>Ubicación en plano</h3><div class="pdf-map"><img src="assets/mapa_planta_nueva.png"><span class="pdf-pin" style="left:${r.X}%;top:${r.Y}%"></span></div>`;
  return renderPdfAndDownload(`${c.ID}_Coordinacion_Conexa.pdf`)
}
function pdfField(k,v){return `<div class="pdf-field"><strong>${escapeHtml(k)}</strong>${escapeHtml(String(v??""))}</div>`}
async function renderPdfAndDownload(filename){
  const el=qs("pdfSheet");const canvas=await html2canvas(el,{scale:1.35,useCORS:true,backgroundColor:"#ffffff"});const {jsPDF}=window.jspdf;const pdf=new jsPDF("p","mm","a4");const img=canvas.toDataURL("image/jpeg",0.88);const w=190,h=canvas.height*w/canvas.width;let y=10,remaining=h;pdf.addImage(img,"JPEG",10,y,w,h);remaining-=277;while(remaining>0){pdf.addPage();y=10-(h-remaining);pdf.addImage(img,"JPEG",10,y,w,h);remaining-=277}pdf.save(filename);return pdf.output("datauristring").split(",")[1]
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
    qs("syncStatus").textContent="Sincronizando...";
    const res=await jsonp("bootstrap");if(res?.ok){DATA=res.data.config||DATA;registros=res.data.registros?.length?res.data.registros:registros;conexas=res.data.conexas?.length?res.data.conexas:conexas;persist();refreshAll();qs("syncStatus").textContent="Sincronizado";qs("syncStatus").className="pill ok"}
  }catch(e){qs("syncStatus").textContent="Sin conexión · modo local";qs("syncStatus").className="pill warn"}
}
async function sendPdfRemote(base64,r,connectedCompanies=[],title="REGISTRO DE TRABAJO DE ALTO RIESGO"){
  return postRemote({action:"sendPdf",pdfBase64:base64,filename:`${r.ID}.pdf`,empresa:r.Empresa,connectedCompanies,title,registroId:r.ID})
}

document.addEventListener("DOMContentLoaded",init);

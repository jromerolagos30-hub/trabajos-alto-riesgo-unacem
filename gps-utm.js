
// V12.12: geolocalización preliminar; no altera datos, sectores ni selección manual.
const TAR_GPS_CALIBRATION = {"version":"1.0-preliminar","crsAssumed":"EPSG:32718","datumConfirmed":false,"note":"El usuario confirmó zona UTM 18S, pero NO datum WGS84. Verificar antes de producción. Calibración aproximada desde cuadrículas visibles en renders PDF, requiere comprobación de campo.","maps":{"Planta Nueva":{"sourcePdf":"24727A.pdf","referenceImageWidth":1227,"referenceImageHeight":783,"northingToX":{"pxPerMeter":1.764,"interceptPx":-15261040.60016,"fitRmsePx":1.095},"eastingToY":{"pxPerMeter":-1.722,"interceptPx":504297.2,"fitRmsePx":0.418},"controlGridNorth":[[116,8651450],[207,8651500],[294,8651550],[381,8651600]],"controlGridEast":[[96,292800],[181,292750],[268,292700],[354,292650]],"coverage":"rectangulo de imagen; NO equivale a poligono de instalaciones. Delimitar zonas reales antes de deteccion dentro/fuera."},"Planta Antigua":{"sourcePdf":"24727B.pdf","referenceImageWidth":1227,"referenceImageHeight":783,"northingToX":{"pxPerMeter":1.14,"interceptPx":-9862873.00023,"fitRmsePx":0.0},"eastingToY":{"pxPerMeter":-1.14,"interceptPx":333520.0,"fitRmsePx":0.0},"controlGridNorth":[[65,8651700],[122,8651750],[179,8651800],[236,8651850]],"controlGridEast":[[70,292500],[127,292450],[184,292400],[241,292350]],"coverage":"rectangulo de imagen; NO equivale a poligono de instalaciones. Delimitar zonas reales antes de deteccion dentro/fuera."}}};
let tarGpsPosition=null;
let tarGpsSimulation=null;
let tarGpsSimPick=false;
function tarGpsConvert(lon,lat){
  // WGS84 GPS -> UTM 18S, fórmula Transverse Mercator (sin dependencias externas).
  const rad=Math.PI/180, a=6378137, f=1/298.257223563, e2=f*(2-f), ep2=e2/(1-e2);
  const phi=lat*rad, lam=lon*rad, lam0=-75*rad, N=a/Math.sqrt(1-e2*Math.sin(phi)**2);
  const T=Math.tan(phi)**2,C=ep2*Math.cos(phi)**2,A=Math.cos(phi)*(lam-lam0);
  const M=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi-(3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi)+(15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi)-(35*e2**3/3072)*Math.sin(6*phi));
  const east=500000+0.9996*N*(A+(1-T+C)*A**3/6+(5-18*T+T*T+72*C-58*ep2)*A**5/120);
  const north=10000000+0.9996*(M+N*Math.tan(phi)*(A*A/2+(5-T+9*C+4*C*C)*A**4/24+(61-58*T+T*T+600*C-330*ep2)*A**6/720));
  return {east,north};
}
function tarGpsPoint(frente,east,north){
 const c=TAR_GPS_CALIBRATION.maps[frente];
 const px=c.northingToX.pxPerMeter*north+c.northingToX.interceptPx;
 const py=c.eastingToY.pxPerMeter*east+c.eastingToY.interceptPx;
 return {x:px/c.referenceImageWidth*100,y:py/c.referenceImageHeight*100,inside: px>=0&&px<=c.referenceImageWidth&&py>=0&&py<=c.referenceImageHeight};
}
function tarGpsStatus(t){['tarGpsStatusRegistro','tarGpsStatusMapa'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=t;});}
function tarGpsClear(){document.querySelectorAll('.tar-gps-dot,.tar-gps-sim-label').forEach(el=>el.remove());}
function tarGpsDraw(){
 document.querySelectorAll(".tar-gps-distance-card").forEach(p=>p.hidden=true);
 tarGpsClear();if(!tarGpsPosition&&!tarGpsSimulation)return;
 const simulated=!!tarGpsSimulation;
 const p=tarGpsPosition;
 const utm=simulated?tarGpsSimulation:tarGpsConvert(p.coords.longitude,p.coords.latitude);
 let matched=[];
 for(const [id,sel] of [['mapRegistro','frente'],['mapGeneral','mapFiltroFrente']]){
   const frente=normFrente(document.getElementById(sel)?.value);
   if(simulated && frente!==tarGpsSimulation.frente)continue;
   const pos=tarGpsPoint(frente,utm.east,utm.north);
   if(!pos.inside)continue;
   matched.push(frente);
   const stage=document.querySelector('#'+id+' .map-stage');if(!stage)continue;
   const marker=document.createElement('div');marker.className='tar-gps-dot';marker.style.left=pos.x+'%';marker.style.top=pos.y+'%';
   marker.title=simulated?'SIMULACIÓN GPS (no es ubicación real)':'Ubicación GPS estimada · precisión ±'+Math.round(p.coords.accuracy)+' m · calibración pendiente de validación';
   if(simulated){marker.classList.add('tar-gps-sim');const label=document.createElement('span');label.className='tar-gps-sim-label';label.textContent='SIMULACIÓN';label.style.left=pos.x+'%';label.style.top=pos.y+'%';stage.appendChild(label);}
   stage.appendChild(marker);
 }
 const accuracy=simulated?null:Math.round(p.coords.accuracy);
 if(simulated){tarGpsStatus('SIMULACIÓN GPS · '+tarGpsSimulation.frente+'. Ubicación ficticia, no corresponde a tu posición real.');return;}
 const msg=matched.length?'GPS estimado en plano ('+[...new Set(matched)].join(' / ')+'). Precisión ±'+accuracy+' m. Validar alineación con imagen.':'GPS obtenido (±'+accuracy+' m). Fuera del rectángulo calibrado del plano seleccionado.';
 tarGpsStatus(msg+' No confirma el sector ni el piso.');
}
function tarGpsStart(){
 tarGpsSimulation=null;tarGpsSimPick=false;
 if(!navigator.geolocation){tarGpsStatus('GPS no disponible en este dispositivo.');return;}
 if(!window.isSecureContext){tarGpsStatus('Para usar GPS, abre la app mediante HTTPS.');return;}
 tarGpsStatus('Solicitando ubicación GPS…');
 navigator.geolocation.getCurrentPosition(p=>{tarGpsPosition=p;tarGpsDraw();},err=>tarGpsStatus('No se obtuvo ubicación: '+(err.code===1?'permiso denegado':err.code===3?'tiempo de espera agotado':'GPS no disponible')+'.'),{enableHighAccuracy:true,timeout:18000,maximumAge:0});
}
function tarGpsSimPlace(frente,x,y){
 const c=TAR_GPS_CALIBRATION.maps[frente];if(!c)return;
 const px=x*c.referenceImageWidth,py=y*c.referenceImageHeight;
 const north=(px-c.northingToX.interceptPx)/c.northingToX.pxPerMeter;
 const east=(py-c.eastingToY.interceptPx)/c.eastingToY.pxPerMeter;
 tarGpsSimulation={frente,east,north};tarGpsPosition=null;tarGpsSimPick=false;
 const status=document.getElementById('tarGpsSimStatus');if(status)status.textContent='SIMULACIÓN ACTIVA: '+frente+'. Cambia a Registro o Mapa Interactivo y selecciona esta planta para ver el marcador naranja.';
 tarGpsDraw();
}
function tarGpsInit(){
 const plant=document.getElementById('tarGpsSimPlant');
 const simStatus=document.getElementById('tarGpsSimStatus');
 document.getElementById('tarGpsSimStart')?.addEventListener('click',()=>{
   tarGpsSimPick=true;if(simStatus)simStatus.textContent='SIMULACIÓN: ahora toca un punto del plano de sectorización. Si no coincide la planta, cambia el selector de planta de sectorización.';
 });
 document.getElementById('tarGpsSimCenter')?.addEventListener('click',()=>tarGpsSimPlace(plant?.value||'Planta Nueva',.5,.5));
 document.getElementById('tarGpsSimStop')?.addEventListener('click',()=>{
   tarGpsSimulation=null;tarGpsSimPick=false;tarGpsClear();tarGpsStatus('Simulación finalizada. Puedes activar el GPS real.');
   if(simStatus)simStatus.textContent='Simulación finalizada. No se guardaron datos.';
 });
 document.getElementById('mapSectorizacion')?.addEventListener('click',e=>{
   if(!tarGpsSimPick)return;
   const img=document.getElementById('sectorMapImg');if(!img)return;
   const r=img.getBoundingClientRect();if(!r.width||!r.height)return;
   const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
   if(x<0||x>1||y<0||y>1)return;
   // Captura el clic antes de otros manejadores cuando el modo de simulación está activo.
   e.stopImmediatePropagation();e.preventDefault();
   tarGpsSimPlace(plant?.value||'Planta Nueva',x,y);
 },true);

 document.querySelectorAll('.tar-gps-button').forEach(b=>b.addEventListener('click',tarGpsStart));
 ['frente','mapFiltroFrente'].forEach(id=>document.getElementById(id)?.addEventListener('change',()=>setTimeout(tarGpsDraw,50)));
}
document.addEventListener('DOMContentLoaded',tarGpsInit);


// V12.14: distancia plana desde GPS o simulación hasta los recursos ubicados en el plano.
function tarGpsDistancePanel(layerId){
 const target=document.getElementById(layerId);if(!target)return null;
 const map=target.closest('#mapRegistro, #mapGeneral')||target.parentElement;
 const toolbar=map?.parentElement?.querySelector('.tar-gps-toolbar')||document.getElementById(layerId==='mapResourceLayer'?'tarGpsStatusMapa':'tarGpsStatusRegistro')?.closest('.tar-gps-toolbar');
 if(!toolbar)return null;
 let panel=toolbar.parentElement.querySelector('.tar-gps-distance-card');
 if(!panel){panel=document.createElement('div');panel.className='tar-gps-distance-card';panel.hidden=true;}
 // La ficha se ubica debajo del plano, nunca encima de las actividades.
 const mapFrame=target.closest('#mapRegistro, #mapGeneral');
 const destination=mapFrame || target.closest('.map-container') || toolbar;
 if(destination.nextElementSibling!==panel)destination.insertAdjacentElement('afterend',panel);
 return panel;
}
function tarGpsResourceDistance(button){
 const layer=button.closest('#mapResourceLayer, #registroResourceLayer');if(!layer)return;
 const panel=tarGpsDistancePanel(layer.id);if(!panel)return;
 const frente=normFrente(document.getElementById(layer.id==='mapResourceLayer'?'mapFiltroFrente':'frente')?.value);
 const source=tarGpsSimulation|| (tarGpsPosition?tarGpsConvert(tarGpsPosition.coords.longitude,tarGpsPosition.coords.latitude):null);
 const label=button.querySelector('.resource-label')?.textContent?.trim()||button.title||'Recurso de emergencia';
 const c=TAR_GPS_CALIBRATION.maps[frente];
 const x=parseFloat(button.style.left),y=parseFloat(button.style.top);
 let body='';
 if(!source){body='<strong>📍 '+tarGpsEscape(label)+'</strong>Activa «Ubícame y explora» o utiliza la simulación GPS para conocer la distancia.';}
 else if(!c||!Number.isFinite(x)||!Number.isFinite(y)||tarGpsSimulation&&tarGpsSimulation.frente!==frente){body='<strong>📍 '+tarGpsEscape(label)+'</strong>Selecciona el plano correspondiente a tu ubicación.';}
 else {
  const north=((x/100*c.referenceImageWidth)-c.northingToX.interceptPx)/c.northingToX.pxPerMeter;
  const east=((y/100*c.referenceImageHeight)-c.eastingToY.interceptPx)/c.eastingToY.pxPerMeter;
  const meters=Math.hypot(east-source.east,north-source.north);
  const detail=button.title||label;
  body='<strong>📍 '+tarGpsEscape(detail)+'</strong><span class="tar-distance">'+Math.round(meters).toLocaleString('es-PE')+' metros aprox.</span>'+
  '<small>Distancia horizontal en línea recta · '+(tarGpsSimulation?'SIMULACIÓN, no es una posición real.':'GPS estimado, sujeto a precisión y calibración.')+' No considera pisos, rutas ni obstáculos. Verifica el acceso y disponibilidad en campo.</small>';
 }
 panel.innerHTML=body;panel.hidden=false;
}
function tarGpsEscape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
document.addEventListener('click',e=>{
 const b=e.target.closest?.('.emergency-resource-marker');if(b&&b.closest('#mapResourceLayer, #registroResourceLayer'))tarGpsResourceDistance(b);
});


// V12.15: si un recurso tapa la etiqueta de una actividad, mover SOLO su dibujo
// arriba o abajo. No modifica las coordenadas X/Y ni la sectorización.
(function(){
 let pending=false;
 function reposition(){
  pending=false;
  ['mapResourceLayer','registroResourceLayer'].forEach(id=>{
   const layer=document.getElementById(id);if(!layer)return;
   const stage=layer.parentElement;
   const activities=[...stage.querySelectorAll('.sector-marker,.map-marker:not(.hidden)')].filter(e=>e.offsetWidth&&e.offsetHeight);
   const resources=[...layer.querySelectorAll('.emergency-resource-marker')];
   resources.forEach(r=>r.style.removeProperty('--tar-resource-shift'));
   const occupied=[];
   const overlaps=(a,b,pad=3)=>a.left<b.right+pad&&a.right>b.left-pad&&a.top<b.bottom+pad&&a.bottom>b.top-pad;
   resources.forEach(r=>{
    const origin=r.getBoundingClientRect();
    const blockers=[...activities.map(a=>a.getBoundingClientRect()),...occupied];
    const shiftChoices=[0,-32,32,-52,52,-72,72];
    let best=0,bestHits=Infinity;
    for(const shift of shiftChoices){
     const rect={left:origin.left,right:origin.right,top:origin.top+shift,bottom:origin.bottom+shift};
     const hits=blockers.reduce((sum,b)=>sum+(overlaps(rect,b)?1:0),0);
     if(hits<bestHits){bestHits=hits;best=shift;}
     if(hits===0)break;
    }
    r.style.setProperty('--tar-resource-shift',best+'px');
    occupied.push({left:origin.left,right:origin.right,top:origin.top+best,bottom:origin.bottom+best});
   });
  });
 }
 function schedule(){if(!pending){pending=true;requestAnimationFrame(reposition);}}
 document.addEventListener('DOMContentLoaded',()=>{
  ['mapResourceLayer','registroResourceLayer','sectorMarkers'].forEach(id=>{
   const el=document.getElementById(id);
   if(el)new MutationObserver(schedule).observe(el,{childList:true,subtree:false});
  });
  window.addEventListener('resize',schedule);
  schedule();
 });
})();

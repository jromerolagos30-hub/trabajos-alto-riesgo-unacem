# REV.12.2 – Corrección geometría Planta Nueva

- Conserva exactamente los rectángulos y coordenadas históricas de Planta Nueva incluidos en la versión original.
- Los datos migrados de la pestaña Sectores ya no reemplazan la geometría histórica de Planta Nueva.
- Planta Antigua continúa usando su sectorización independiente guardada en Google Sheets.
- Se mantiene el acceso controlado a Sectorización de REV.12.1.
- No requiere ejecutar nuevamente actualizarSistemaV12().
- Para esta corrección basta reemplazar app.js.

# Gestión TAR UNACEM – REV.12

## Novedad principal
Se incorpora **Planta Antigua** como segundo frente/plano de Planta Atocongo, manteniendo **Planta Nueva**.

### Interfaces actualizadas
- Registro de Alto Riesgo: selector Frente / Plano, sectores independientes y cambio automático del mapa.
- Mapa Interactivo: filtro Frente y visualización del plano/sectores correspondientes.
- Sectorización: selector Frente / Plano para crear, editar y eliminar sectores independientes en Planta Nueva y Planta Antigua.
- Lista y Dashboard: filtro general Frente y columna Frente en los registros.
- PDF TAR: incluye Frente / Plano y usa el mapa correspondiente.

### Google Sheets
REV.12 agrega sin borrar datos existentes:
- `Registros`: columna `Frente`.
- `Sectores`: columna `Frente`.

Los registros y sectores existentes que no tengan valor en `Frente` se interpretan como **Planta Nueva**, conservando compatibilidad histórica.

## Actualización
1. Reemplace el Apps Script por `apps-script/Code.gs`.
2. Ejecute una sola vez `actualizarSistemaV12()` desde Apps Script.
3. Vuelva a implementar el Web App de Apps Script si su flujo actual lo requiere.
4. En GitHub/Vercel reemplace `index.html`, `app.js` y `styles.css`.
5. Suba también `mapa_planta_antigua.jpg` a la misma carpeta donde se encuentra `mapa_planta_nueva.png`.
6. Conserve su `config.js` y el archivo existente `mapa_planta_nueva.png`.

## Importante
No se eliminan registros históricos. La sectorización de Planta Antigua empieza independiente y debe definirse desde la interfaz Sectorización seleccionando **Planta Antigua**.

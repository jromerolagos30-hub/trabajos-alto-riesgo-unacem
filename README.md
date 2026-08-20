# App – Gestión Diaria de Trabajos de Alto Riesgo (V1)

Primera versión funcional en **HTML + CSS + JavaScript**, pensada para alojarse en **GitHub Pages** y utilizar **Google Apps Script + Google Sheets** como backend.

## Qué incluye

- Registro diario de trabajos de alto riesgo.
- Selección múltiple de trabajos críticos y riesgos críticos.
- Selección del lugar mediante lista o clic sobre el **Mapa de Evacuación – Planta Nueva**.
- Registro SI/NO de actividades conexas.
- Interfaz independiente de **Coordinación de Actividades Conexas**, con varias empresas por coordinación.
- Datos de responsables: jefe del área y supervisor SSOMA de la empresa que reporta y de las empresas notificadas.
- Hora de gestión de la coordinación conexa.
- Edición/inclusión de nuevas coordinaciones manteniendo historial.
- Finalización anticipada de trabajos.
- “Continuar mañana” para copiar un registro del día anterior y actualizarlo.
- Mapa interactivo con carga por sector y filtros por trabajo crítico, empresa y área usuaria.
- Resumen diario sin “permisos aprobados”; incluye trabajos conexos y riesgos críticos.
- Tabla separada de registros de alto riesgo y tabla de trabajos conexos.
- Dashboard por sector.
- Generación de PDF en el navegador, incluyendo el plano y marcador del punto reportado.
- Envío del PDF vía Apps Script a los correos configurados por empresa.

## Estructura de Google Sheets

Al ejecutar `setupWorkbook()` se crean estas pestañas:

1. `Empresas`
2. `TrabajosCriticos`
3. `Lugares`
4. `RiesgosCriticos`
5. `EmpresasCorreos`
6. `AreaUsuaria`
7. `Registros`
8. `Conexas`
9. `Historial`

> En `EmpresasCorreos`, coloque varios correos separados con `;`.
> Ejemplo: `supervisor@empresa.com;ssoma@empresa.com;residente@empresa.com`

## Instalación – Google Apps Script

1. Cree un Google Sheet nuevo.
2. Abra **Extensiones > Apps Script**.
3. Copie `apps-script/Code.gs`.
4. Copie el contenido de `apps-script/appsscript.json` al manifiesto, si desea usarlo.
5. Ejecute manualmente `setupWorkbook()` una vez.
6. Autorice los permisos solicitados.
7. Vaya a **Implementar > Nueva implementación > Aplicación web**.
8. Ejecute como: **usted**.
9. Configure el acceso según lo permitido por TI. Para pruebas públicas de GitHub Pages se requiere un alcance que permita acceder al Web App.
10. Copie la URL que termina en `/exec`.

## Instalación – GitHub Pages

Suba a un repositorio:

- `index.html`
- `styles.css`
- `app.js`
- carpeta `assets`

Luego active **Settings > Pages > Deploy from a branch**.

Al abrir la aplicación, presione el ícono **⚙** y pegue la URL `/exec` de Google Apps Script.

## Importante sobre la V1

La app ya tiene interacción real, persistencia local y conexión preparada con Google Sheets. Los puntos X/Y de la pestaña `Lugares` son una **sectorización inicial aproximada** sobre el plano; antes de la puesta en producción conviene validar cada punto con los responsables de planta y, como segunda versión, convertir los sectores en polígonos reales para colorear áreas completas.

El campo `EstadoOperativo` existe solo para permitir **finalizar trabajos**, pero se mantiene fuera de la tabla principal de visualización solicitada.

## Archivos

- `index.html` – interfaz.
- `styles.css` – estilos.
- `app.js` – lógica, mapa, filtros, dashboard y PDF.
- `assets/mapa_planta_nueva.png` – plano base suministrado.
- `apps-script/Code.gs` – backend y creación de hojas.
- `apps-script/appsscript.json` – manifiesto.

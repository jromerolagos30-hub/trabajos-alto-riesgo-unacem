# REV.12.1 – Conservación de sectorización y acceso controlado

Correcciones sobre REV.12:

1. Se conserva la sectorización histórica de Planta Nueva incluida en la versión anterior. No es necesario volver a sectorizar Planta Nueva.
2. Los sectores nuevos o editados guardados en Google Sheets prevalecen sobre la sectorización histórica cuando coinciden por Frente + Nombre.
3. Planta Antigua mantiene su sectorización independiente y puede construirse progresivamente desde la interfaz Sectorización.
4. El acceso a Sectorización vuelve a estar protegido por clave y se solicita nuevamente al cargar la aplicación.
5. No se modifica la estructura de Google Sheets ni es necesario volver a ejecutar actualizarSistemaV12().

Para desplegar esta corrección basta reemplazar app.js. El paquete completo se entrega para mantener una versión consolidada.

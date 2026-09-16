# REV.12.3 – Restauración de sectorización histórica de Planta Nueva

Corrección puntual:
- Planta Nueva vuelve a leer directamente la sectorización histórica guardada en Google Sheets, igual que la versión anterior.
- No reemplaza ni recalcula X, Y, X1, Y1, X2, Y2.
- Sectores históricos sin campo Frente se consideran Planta Nueva.
- Planta Antigua mantiene su sectorización independiente.
- Se conserva el acceso controlado a Sectorización.

Para esta revisión reemplazar únicamente `app.js`.
No ejecutar funciones de migración ni volver a sectorizar Planta Nueva.

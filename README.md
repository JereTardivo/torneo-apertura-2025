
# Fixture y Tabla de Posiciones - Apertura 2025 LRRF

Este proyecto es una página web responsive que muestra el fixture completo y la tabla de posiciones en tiempo real del Torneo Apertura 2025 de la **Liga Regional Riotercerense de Fútbol (LRRF)**.

## Características

✅ Fixture de las 16 fechas
- Fechas 1 a 13 con resultados fijos (no editables).
- Fechas 14, 15 y 16 editables.

✅ Tabla de posiciones
- Se actualiza automáticamente al ingresar los resultados de las fechas faltantes.
- No cuenta partidos no jugados (campos vacíos).

✅ Guardado automático
- Los resultados ingresados se guardan en **localStorage** → permanecen al recargar la página.

✅ Botón "Limpiar resultados"
- Permite borrar los resultados de las fechas 14-15-16 y limpiar el `localStorage`.

✅ Diseño responsive
- Compatible con escritorio, tablet y celular.
- Estilo moderno en azul y blanco + logo oficial de la liga.

## Uso

1. Descomprimir el ZIP.
2. Subir los archivos a GitHub Pages o un servidor web.
3. Asegurarse que `fixture_tabla_apertura2025.html` sea la página principal (`index.html` si se desea).

## Archivos

- `fixture_tabla_apertura2025.html` → Página principal.
- `fixture_script.js` → Lógica JS para actualización de tabla, guardado y limpieza.
- `lrrf_logo.png` → Logo oficial de la liga.
- `README.md` → Este archivo.

## Changelog

### v1
- Primera versión funcional con fixture + tabla de posiciones dinámica.

### v2
- Corrección de encabezados en fixture.
- Sincronización automática: si un campo se completa, el otro no puede quedar vacío.

### v3
- Agregado logo oficial de la liga en la cabecera.
- Botón "Limpiar resultados" agregado al final del fixture.
- Guardado de resultados en localStorage.
- Carga automática desde localStorage al iniciar.

---

_Hecho con ❤️ para la comunidad de la LRRF._

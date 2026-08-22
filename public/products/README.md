# Fotos de producto

Coloca aquí las fotos de cada pieza (fotos de producto normales, fondo
blanco o transparente, como las que ya llegaron para la Mesa Perla), con
estos nombres exactos:

- `mesa-perla.jpg` ✅ (ya está)
- `silla-barril.jpg`
- `silla-concha.jpg`
- `silla-abanico.jpg`
- `silla-alta.jpg`
- `silla-trama.jpg`

Mientras un archivo no exista, el sitio muestra automáticamente un marcador de
posición con el nombre de la pieza (ver `src/components/Medio.astro`) — no un
ícono de imagen rota. En cuanto subas el archivo con el nombre exacto, aparece
solo, sin tocar código.

El formato no tiene que ser exactamente `.jpg`: si llega en otro formato
(`.png`, `.webp`, `.avif`), se ajusta el nombre en `src/data/products.ts`
(campos `image` y `scene`) al subirla.

Fotos adicionales de la Mesa Perla ya cargadas (ángulo alterno y detalles),
guardadas para una futura galería de producto:
`mesa-perla-alt.jpg`, `mesa-perla-detalle-tablero.jpg`,
`mesa-perla-detalle-base.jpg`, `mesa-perla-listado.jpg`.

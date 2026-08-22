# Escenas de estudio

Coloca aquí las fotos de estudio (fondo cálido, formato `.jpg`, `.webp` o `.avif`)
usadas en los bloques grandes/inmersivos del sitio, con estos nombres exactos:

- `hero.jpg` — conjunto completo, sección Hero
- `feature.jpg` — detalle de materiales, sección "Por qué Sillarte"
- `closing.jpg` — mesa Cálida, sección de cierre
- `categoria-conjuntos.jpg`
- `categoria-sillas.jpg`
- `categoria-mesas.jpg`
- `categoria-bancos.jpg`

Fotos de estudio por pieza (opcionales): mientras no existan, cada producto
usa su foto de producto de `/public/products/` (fondo blanco) tanto para la
tarjeta como para los bloques grandes. Cuando tengas las fotos de estudio,
agrégalas aquí con estos nombres y actualiza `scene` en
`src/data/products.ts` para apuntar a ellas:

- `pieza-mesa-perla.jpg`
- `pieza-silla-barril.jpg`
- `pieza-silla-concha.jpg`
- `pieza-silla-abanico.jpg`
- `pieza-silla-alta.jpg`
- `pieza-silla-trama.jpg`

Mientras un archivo no exista, el sitio muestra automáticamente un marcador de
posición con el nombre de la escena (ver `src/components/Medio.astro`).

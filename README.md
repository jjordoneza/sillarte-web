# Sillarte — Colección Cálida 2026

Landing estática de la colección "Cálida" 2026 de Sillarte, construida con
[Astro](https://astro.build) y CSS puro (sin frameworks de UI). Vende la
colección en dos canales a la vez: aspiracional para cliente final y de
conversión B2B para mayoristas.

## Estructura

```
src/
  components/   → una sección o pieza de UI por archivo (Hero, Nav, Wholesale, ...)
  data/         → site.ts (contacto/config) y products.ts (catálogo, FAQ, reseñas)
  layouts/      → Layout.astro (SEO, fuentes, estructura HTML)
  pages/        → index.astro (ensambla todas las secciones)
  styles/       → global.css (paleta, tipografía, utilidades)
public/
  products/     → recortes PNG de producto (fondo transparente)
  scenes/       → fotos de estudio para bloques inmersivos
  catalogo.pdf  → placeholder, aún no existe (ver sección Mayoreo)
```

Cada carpeta `public/products` y `public/scenes` trae un `README.md` con los
nombres de archivo exactos que el sitio espera. Mientras una foto no exista,
se muestra un marcador de posición en su lugar (no un ícono de imagen rota).

## Previsualizar y desplegar

1. Instala dependencias y ejecuta en desarrollo: `npm install && npm run dev` (abre `http://localhost:4321`).
2. Genera el sitio estático de producción con `npm run build` (queda en `dist/`); revísalo localmente con `npm run preview`.
3. En Netlify: conecta el repositorio y usa build command `npm run build` y publish directory `dist`. En Vercel, el framework Astro se detecta automáticamente con los mismos comandos.

## Pendientes marcados en el código

- **Precios**: se muestran como `$—` en toda la landing (ver `src/components/Wholesale.astro`).
- **Catálogo PDF**: el botón enlaza a `/catalogo.pdf`; falta agregar el archivo real en `public/`.
- **Formulario de cotización**: envía por WhatsApp o `mailto` usando el número/correo de `src/data/site.ts` — confirmar que sean los definitivos.
- **Reseñas**: son de ejemplo (`src/data/products.ts`, `testimonials`); reemplazar por testimonios reales.
- **Imágenes**: faltan los archivos en `public/products` y `public/scenes` (ver los `README.md` de cada carpeta).

import { defineConfig } from "astro/config";

// Sitio estático de Sillarte — colección Cálida 2026
// Sin frameworks de UI: solo Astro + CSS puro para máximo rendimiento.
export default defineConfig({
  site: "https://sillarte.co",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});

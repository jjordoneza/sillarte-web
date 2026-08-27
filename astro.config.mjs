import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Sitio estático de Sillarte — colección 2026
// Sin frameworks de UI: solo Astro + CSS puro para máximo rendimiento.
export default defineConfig({
  site: "https://www.sillarte.co",
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});

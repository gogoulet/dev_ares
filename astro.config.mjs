import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Ton URL finale publique sur GitHub Pages
  site: "https://gogoulet.github.io",
  // Le nom exact de ton repository avec les slashes obligatoires
  base: "/dev_ares/",
  trailingSlash: "never",
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});

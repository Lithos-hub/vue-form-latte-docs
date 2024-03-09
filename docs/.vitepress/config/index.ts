import { defineConfig } from "vitepress";
import { en } from "../../locales/en";
import { es } from "../../locales/es";

export default defineConfig({
  title: 'Vue Form Latte',
  locales: {
    root: { label: "English", ...en },
    es: { label: "Español", ...es },
  },
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Config", link: "/config/" },
      { text: "API", link: "/api/" },
      { text: "Changelog", link: "/changelog/" },
    ],
  },
});

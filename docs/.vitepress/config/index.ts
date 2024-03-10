import { DefaultTheme, defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue Form Latte",
  description: "Form generator library for Vue 3",
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Carlos Segura García",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Guide", link: "/guide/getting-started" },
    { text: "Config", link: "/config/" },
    { text: "API", link: "/api/" },
    { text: "Changelog", link: "/changelog/" },
    { text: "GitHub", link: "https://github.com/Lithos-hub/vue-form-latte" },
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      items: [
        {
          text: "What is Vue Form Latte",
          link: "/guide/what-is-vue-form-latte",
        },
        { text: "Getting Started", link: "/guide/getting-started" },
      ],
    },
    {
      text: "Components",
      items: [
        { text: "Input", link: "/guide/input" },
        { text: "Textarea", link: "/guide/textarea" },
        { text: "Select", link: "/guide/select" },
        { text: "Multiselect", link: "/guide/multiselect" },
        { text: "Radio", link: "/guide/radio" },
        { text: "Checkbox", link: "/guide/checkbox" },
        { text: "Slider", link: "/guide/slider" },
      ],
    },
  ];
}

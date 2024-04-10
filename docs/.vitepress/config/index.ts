import { DefaultTheme, defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue Form Latte",
  description: "Form generator library for Vue 3",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
      },
    ],
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "author", content: "Carlos Segura García" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vue, vue3, form, form generator, form builder, form creator, form editor",
      },
    ],
    ["meta", { name: "og:title", content: "Vue Form Latte" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "Vue Form Latte is a form generator library for Vue 3. It is designed to be a flexible and powerful tool for building forms with Vue 3, TypeScript and Tailwind CSS.",
      },
    ],
    ["meta", { name: "og:image", content: "/logo.png" }],
    [
      "meta",
      {
        name: "og:url",
        content: "https://github.com/Lithos-hub/vue-form-latte",
      },
    ],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:site_name", content: "Vue Form Latte" }],
    ["meta", { name: "og:locale", content: "en_US" }],
    ["meta", { name: "og:locale:alternate", content: "es_ES" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "Vue Form Latte" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Vue Form Latte is a form generator library for Vue 3. It is designed to be a flexible and powerful tool for building forms with Vue 3, TypeScript and Tailwind CSS.",
      },
    ],
    ["meta", { name: "twitter:image", content: "/logo.png" }],
  ],
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    search: {
      provider: "local",
    },
    footer: footer(),
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
      text: "API",
      items: [
        { text: "Props", link: "/guide/api/props" },
        { text: "Exposed bindings", link: "/guide/api/exposed-bindings" },
      ],
    },
    {
      text: "Components",
      items: [
        { text: "Input", link: "/guide/components/input" },
        { text: "Textarea", link: "/guide/components/textarea" },
        { text: "Select", link: "/guide/components/select" },
        { text: "Multiselect", link: "/guide/components/multiselect" },
        { text: "Radio", link: "/guide/components/radio" },
        { text: "Checkbox", link: "/guide/components/checkbox" },
        { text: "Slider", link: "/guide/components/slider" },
      ],
    },
  ];
}

function footer(): DefaultTheme.Footer {
  return {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2024-present Carlos Segura García",
  };
}

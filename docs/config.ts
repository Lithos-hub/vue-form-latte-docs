export default {
    title: 'Vue Form Latte',
    themeConfig: {
      nav: [
        { text: "Guide", link: "/guide/getting-started" },
        { text: "Config", link: "/config/" },
        { text: "API", link: "/api/" },
        { text: "Changelog", link: "/changelog/" },
      ],
      sidebar: [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
          ]
        }
      ],
      search: {
        provider: 'local'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Carlos Segura García'
      }
    },
  }
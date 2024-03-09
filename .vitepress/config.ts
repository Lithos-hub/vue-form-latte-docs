import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { es } from './es'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Vue Form Latte",
  description: "Vue Form Latte is a fast and easy form generator library built with Vue, TypeScript, Tailwind CSS and Vite",
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    es: { label: 'Spanish', ...es },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'Vue Form Latte',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Components included', link: '/components-included' },
          { text: 'Examples', link: '/examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

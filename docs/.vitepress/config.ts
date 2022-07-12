import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { getNav, getSidebar } from './theme/data'

export default defineConfig({
  title: 'Website & Blog',
  description: 'A personal website',
  lastUpdated: true,
  vite: {
    plugins: [
      Unocss({
        presets: [
          presetAttributify(),
          presetUno(),
        ],
      }),
    ],
  },
  markdown: {
    theme: 'one-dark-pro',
  },
  themeConfig: {
    footer: {
      message: 'bottom message',
      copyright: 'Copyright © 2022-present',
    },
    nav: getNav(),
    socialLinks: [
      { icon: 'github', link: '' },
    ],
    algolia: {
      appId: '',
      indexName: '',
      apiKey: '',
    },
    sidebar: getSidebar(),
  },
})

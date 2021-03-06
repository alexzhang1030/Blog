import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { getNav, getSidebar } from './theme/data'

export default defineConfig({
  title: 'Alex\'s Website & Blog',
  description: 'A personal website of Alex Zhang',
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
      message: 'Love & Peace & Vue Ecosystem',
      copyright: 'Copyright © 2022-present Alex Zhang',
    },
    nav: getNav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexzhang1030/Blog' },
    ],
    algolia: {
      appId: '1X9I6ALSR9',
      indexName: 'alexzhang1030',
      apiKey: 'a40ad8d1d06d5c20f97dcdb51743cd41',
    },
    sidebar: getSidebar(),
  },
})

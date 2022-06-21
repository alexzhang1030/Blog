import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { getNav } from './theme/data'

export default defineConfig({
  title: 'Alex\'s Blog',
  description: 'A personal blog of Alex',
  lastUpdated: true,
  vite: {
    plugins: [Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
      ],
    })],
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
  },
})

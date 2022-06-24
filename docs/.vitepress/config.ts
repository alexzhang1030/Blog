import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { getNav } from './theme/data'
import { getSidebar } from './theme/data/helper'

export default async () => {
  const sidebar = await getSidebar()
  return defineConfig({
    title: 'Alex\'s Website & Blog',
    description: 'A personal website of Alex Zhang',
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
      algolia: {
        appId: 'OOCSYYJ17Q',
        indexName: 'alexzhang',
        apiKey: 'a386a7bae0605420f6b4f0cc2eaf4f2a',
      },
      sidebar,
    },
  })
}

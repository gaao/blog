import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export const en =  defineConfig({
  lang: 'en-US',
  description: "A Blog Site",

  // srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: 'https://avatars.githubusercontent.com/u/8100511?u=a907956f60fe4482d736ae2de6261d4c30cd1a72&v=4',
    logoLink: '/docs/en/',
    nav: [
      { text: 'home', link: '/en/' },
      { text: 'study', 
        items: [
          { text: '大前端', link: '/en/studys' },
          { text: 'study 1', link: '/en/studys/study1' },
        ]
      },
      { text: 'work', link: '/en/works' },
      { text: 'life', link: '/en/life' },
    ],
    sidebar: {
      '/en/studys/': [
        {
          text: 'study',
          items: [
            { text: 'study', link: '/studys/' },
            { text: 'study 1', link: '/studys/study1' },
          ]
        }
      ],
      '/en/works/': [
        {
          text: 'work',
          items: [
            { text: 'work', link: '/works/' },
            // autocorrect: false
            { text: '2024年', link: '/works/2024年' },
          ]
        }
      ],
      '/en/life/': [
        {
          text: 'life',
          items: [
            { text: 'life', link: '/life/' },
            { text: 'markdown-examples', link: '/life/markdown-examples' },
            { text: 'api-examples', link: '/life/api-examples' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaao' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${new Date().getFullYear()} GxG`
    },
  },
})

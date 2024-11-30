import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/docs/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  title: "Gxg's Blog",
  description: "A Blog Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: 'https://avatars.githubusercontent.com/u/8100511?u=a907956f60fe4482d736ae2de6261d4c30cd1a72&v=4',
    logo: '/logo.png',
    logoLink: '/',
    i18nRouting: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '学习', link: '/studys' },
      { text: '工作', link: '/works' },
      { text: '生活', link: '/life' },
    ],
    sidebar: {
      '/studys/': [
        {
          text: '学习',
          items: [
            { text: '学习', link: '/studys/' },
            { text: '学习 1', link: '/studys/study1' },
          ]
        }
      ],
      '/works/': [
        {
          text: '工作',
          items: [
            { text: '工作', link: '/works/' },
          ]
        }
      ],
      '/life/': [
        {
          text: '生活',
          items: [
            { text: '生活', link: '/life/' },
            { text: 'Markdown 示例', link: '/life/markdown-examples' },
            { text: 'Runtime API 示例', link: '/life/api-examples' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaao' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present GxG'
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
    },
  },
})

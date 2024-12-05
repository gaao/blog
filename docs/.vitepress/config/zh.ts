import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  lang: 'zh-CN',
  description: "一个博客站点",

  // srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: 'https://avatars.githubusercontent.com/u/8100511?u=a907956f60fe4482d736ae2de6261d4c30cd1a72&v=4',
    logoLink: '/docs/zh/',
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '学习', 
        items: [
          { text: '大前端', link: '/studys/frontend/' },
          { text: '后端', link: '/studys/backend/' },
        ]
      },
      { text: '工作', link: '/works' },
      { text: '生活', link: '/life' },
    ],
    sidebar: {
      '/studys/frontend/': [
        {
          text: '学习 1',
          items: [
            { text: '学习', link: '/studys/frontend/' },
            // { text: '学习 1', link: '/studys/frontend/study1' },
          ]
        }
      ],
      '/studys/': [
        {
          text: '学习 1',
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
            // autocorrect: false
            { text: '2024年', link: '/works/2024年' },
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

    footer: {
      // message: 'Released under the MIT License.',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} GxG`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

})

// export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
//   zh: {
//     placeholder: '搜索文档',
//     translations: {
//       button: {
//         buttonText: '搜索文档',
//         buttonAriaLabel: '搜索文档'
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: '清除查询条件',
//           resetButtonAriaLabel: '清除查询条件',
//           cancelButtonText: '取消',
//           cancelButtonAriaLabel: '取消'
//         },
//         startScreen: {
//           recentSearchesTitle: '搜索历史',
//           noRecentSearchesText: '没有搜索历史',
//           saveRecentSearchButtonTitle: '保存至搜索历史',
//           removeRecentSearchButtonTitle: '从搜索历史中移除',
//           favoriteSearchesTitle: '收藏',
//           removeFavoriteSearchButtonTitle: '从收藏中移除'
//         },
//         errorScreen: {
//           titleText: '无法获取结果',
//           helpText: '你可能需要检查你的网络连接'
//         },
//         footer: {
//           selectText: '选择',
//           navigateText: '切换',
//           closeText: '关闭',
//           searchByText: '搜索提供者'
//         },
//         noResultsScreen: {
//           noResultsText: '无法找到相关结果',
//           suggestedQueryText: '你可以尝试查询',
//           reportMissingResultsText: '你认为该查询应该有结果？',
//           reportMissingResultsLinkText: '点击反馈'
//         }
//       }
//     }
//   }
// }

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        displayDetails: '显示详情',
        resetButtonTitle: '清除查询条件',
        backButtonTitle: '返回',
        noResultsText: '无法找到相关结果',
        footer: {
          selectText: '选择',
          selectKeyAriaLabel: '选择',
          navigateText: '切换',
          navigateUpKeyAriaLabel: '切换',
          navigateDownKeyAriaLabel: '切换',
          closeText: '关闭',
          closeKeyAriaLabel: '关闭'
        },
      }
    }
  }
}
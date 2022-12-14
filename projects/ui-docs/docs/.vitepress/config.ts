import {demoBlockPlugin} from 'vitepress-theme-demoblock'

export default {
  base: process.env.BASE || '/',
  title: '🔥Inesat it components',
  description: '一套基于 Antdv 封装的中后台管理系统业务组件库',
  lastUpdated: true,
  themeConfig: {
    repo: '@inesat/it-components',
    logo: '',
    nav: [
      {
        text: '组件',
        link: '/components/form'
      }
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          {
            text: '表单',
            link: '/components/form'
          }
        ]
      }
    ],
    footer: {
      message: '本站点由 VitePress 强力驱动',
      copyright: 'Copyright © Inesat it components'
    },
    lastUpdatedText: '上次更新'
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: {permalink: false},

    // options for markdown-it-toc
    toc: {includeLevel: [1, 2]},

    config: (md) => {
      md.use(demoBlockPlugin, {
        scriptImports: ['import * as Antd from "ant-design-vue"'],
        scriptReplaces: [
          {
            searchValue: /const ({defineComponent as _defineComponent}) = Vue/g,
            replaceValue: 'const {defineComponent: _defineComponent} = Vue'
          },
          {
            searchValue: /import ({.*}) from 'ant-design-vue'/g,
            replaceValue: (s, s1) => `const ${s1} = Antd`
          }
        ]
      })
    }
  }
}

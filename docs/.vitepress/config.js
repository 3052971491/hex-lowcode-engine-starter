import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hex-lowcode-engine-starter/',
  title: 'Hex Lowcode Engine',
  description: '一款高效的低代码引擎',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/public/images/icon.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/public/images/icon.png',
    // 导航栏
    nav: nav(),

    // 侧边栏
    sidebar: {
      '/guide/': sidebarGuide(),
      '/developer/': sidebarDeveloper()
    },

    // 链接
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/mutoua/hex-lowcode-engine' }
    ],

    // 底部
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present JunJie Yuan'
    },

    // 搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },
  },
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://en.vitejs.dev' },
  },
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/introduce', activeMatch: '/guide/' },
    {
      text: '开发者中心',
      link: '/developer/learning',
      activeMatch: '/developer/'
    },
    // {
    //   text: '配置',
    //   link: '/configuration/site-config',
    //   activeMatch: '/configuration/'
    // },
    // {
    //   text: '相关链接',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '指南',
      collapsed: false,
      items: [
        { text: '介绍', link: '/guide/introduce' },
        { text: '实现', link: '/guide/realization' },
        { text: '安装', link: '/guide/install' },
        { text: '使用', link: '/guide/use' }
      ]
    },
  ]
}

function sidebarDeveloper() {
  return [
    {
      text: '开发者中心',
      collapsed: false,
      items: [
        { text: '开发指南', link: '/developer/learning' },
        { text: 'API', link: '/developer/api' },
        { text: '组件', link: '/developer/components' }
      ]
    },
  ]
}

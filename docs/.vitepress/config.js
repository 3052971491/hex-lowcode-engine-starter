import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hex-lowcode-engine-starter/',
  title: 'Hex Lowcode Engine',
  description: '一款高效的低代码引擎',
  lastUpdated: true,
  // cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/hex-lowcode-engine-starter/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/icon.png',
    // 导航栏
    nav: nav(),

    // 侧边栏
    sidebar: {
      '/guide/': sidebarGuide(),
      '/developer/': sidebarDeveloper(),
    },

    // 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/3052971491/hex-lowcode-engine-starter' }
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
    en: { label: 'English', link: 'https://www.zczchen.top/hex-lowcode-engine-starter/' },
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
    {
      text: '更新日志',
      link: '/change-log/index',
      activeMatch: '/change-log/'
    },
    {
      text: '高频问题',
      link: '/problem/index',
      activeMatch: '/problem/'
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
        { text: '技术实现', link: '/guide/realization' },
        { text: '安装', link: '/guide/install' },
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
        { text: 'JS-API', link: '/developer/api' },
        { 
          text: '组件', 
          collapsed: true,
          items: [
            { 
              text: '组件通用属性类型', 
              link: '/developer/components/interface'
            },
            { 
              text: '基础控件', 
              collapsed: true,
              items: [
                { text: 'Text 文本', link: '/developer/components/BASIC/Text' },
                { text: 'Image 图片', link: '/developer/components/BASIC/Image' },
                { text: 'ButtonGroup 按钮组', link: '/developer/components/BASIC/ButtonGroup' },
                { text: 'Divider 分割线', link: '/developer/components/BASIC/Divider' },
                { text: 'Alert 警告提示', link: '/developer/components/BASIC/Alert' },
              ]
            },
            { 
              text: '表单控件', 
              collapsed: true,
              items: [
                { text: 'Input 单行文本', link: '/developer/components/FORM/Input' },
                { text: 'Textarea 多行文本', link: '/developer/components/FORM/Textarea' },
                { text: 'InputNumber 数值输入', link: '/developer/components/FORM/InputNumber' },
                { text: 'Switch 开关', link: '/developer/components/FORM/Switch' },
                { text: 'Radio 单选框', link: '/developer/components/FORM/Radio' },
                { text: 'Checkbox 多选框', link: '/developer/components/FORM/Checkbox' },
                { text: 'Select 下拉选择', link: '/developer/components/FORM/Select' },
                { text: 'MultiSelect 下拉多选', link: '/developer/components/FORM/MultiSelect' },
                { text: 'DatePicker 日期', link: '/developer/components/FORM/DatePicker' },
                { text: 'RangePicker 日期区间', link: '/developer/components/FORM/RangePicker' },
                { text: 'TimePicker 时间', link: '/developer/components/FORM/TimePicker' },
                { text: 'TimeRangePicker 时间', link: '/developer/components/FORM/TimeRangePicker' },
                { text: 'Rate 评分', link: '/developer/components/FORM/Rate' },
                { text: 'Upload 上传', link: '/developer/components/FORM/Upload' },
              ]
            },
            { 
              text: '布局控件', 
              collapsed: true,
              items: [
                { text: 'Row 栅格', link: '/developer/components/LAYOUT/Row' },
                { text: 'Card 卡片', link: '/developer/components/LAYOUT/Card' },
                { text: 'Space 间距', link: '/developer/components/LAYOUT/Space' },
                { text: 'Collapse 折叠面板', link: '/developer/components/LAYOUT/Collapse' },
                { text: 'Tabs 标签页', link: '/developer/components/LAYOUT/Tabs' },
              ]
            },
            { 
              text: '高级控件',
              collapsed: true, 
              items: [
                { text: 'Form 表单', link: '/developer/components/ADVANCED/Form' },
                { text: 'Vue', link: '/developer/components/ADVANCED/Vue' },
                { text: 'Filter 查询', link: '/developer/components/ADVANCED/Filter' },
                { text: 'Table 表格', link: '/developer/components/ADVANCED/Table' },
                { text: 'Progress 进度条', link: '/developer/components/ADVANCED/Progress' },
              ]
            },
            { 
              text: '业务控件',
              collapsed: true, 
              items: [
                { text: 'QRcode 二维码', link: '/developer/components/BUSINESS/QRcode' },
              ]
            }
          ]
        }
      ]
    },
  ]
}
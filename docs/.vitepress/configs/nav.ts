import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '前端日记',
    items: [
      { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
      { text: 'ES6 常用知识', link: '/fe/es6/' },
      { text: 'TypeScript 基础知识', link: '/fe/typescript/base' },
      { text: '浏览器相关知识', link: '/fe/browser/' }
    ],
    activeMatch: '^/fe'
  },
  {
    text: '技巧笔记',
    items: [
      {
        text: '常用工具/方法',
        items: [
          { text: '工具库整理', link: '/workflow/utils/library' },
          { text: '常用正则整理', link: '/workflow/utils/regexp' },
          { text: '常用方法整理', link: '/workflow/utils/function' }
        ]
      },
      {
        text: 'CSS 相关',
        items: [
          { text: 'CSS 语法', link: '/workflow/css/spec' },
          { text: 'CSS 奇淫技巧', link: '/workflow/css/tricks' },
          { text: 'Sass 常用技巧', link: '/workflow/sass/' }
        ]
      },
      {
        text: 'Vue 小技巧',
        link: '/workflow/vue/'
      },
      { text: 'npm 常用命令', link: '/workflow/node/npm' },
      // {
      //   text: '终端相关',
      //   items: [
      { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
      { text: '命令行工具', link: '/workflow/terminal/toolkit' },
      { text: 'Shell 命令', link: '/workflow/terminal/shell' },
      //   ]
      // },
      { text: 'Git 相关技巧', link: '/workflow/git/' },
      { text: 'Git 命令清单', link: '/workflow/git/command' }
    ],
    activeMatch: '^/workflow'
  },
  {
    text: '工作日常',
    items: [
      { text: 'h5', link: '/pit/h5/h5' },
      { text: 'pc', link: '/pit/pc/pc' },
      { text: 'miniprogram', link: '/pit/miniprogram/miniprogram' },
      { text: 'npm', link: '/pit/npm/npm' },
      { text: 'plugins', link: '/pit/plugins/plugins' }
    ],
    activeMatch: '^/pit'
  },
  {
    text: '提效工具',
    items: [
      {
        text: '软件推荐与配置',
        items: [
          { text: '多平台软件', link: '/efficiency/software/cross-platform' },
          { text: 'Mac 平台', link: '/efficiency/software/mac' },
          { text: 'Windows 平台', link: '/efficiency/software/windows' },
          { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
          { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
          { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
        ]
      },
      { text: '在线工具', link: '/efficiency/online-tools' },
      { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
    ],
    activeMatch: '^/efficiency'
  }
]

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "黑子服",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '服务器详情', link: '/aboutserver' }
    ],

    sidebar: [
      {
        text: '关于服务器',
        items: [
          { text: '服务器详情', link: '/aboutserver' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HZServer' }
    ]
  }
})

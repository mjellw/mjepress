import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'ja-JP',
  title: 'VuePressのテスト',
  description: "This is going to be awesome!",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" }
    ],
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ],
    base: '/',
    serviceWorker: true,
  }
})
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'ja-JP',
  title: 'VuePressのテスト',
  description: "This is going to be awesome!",
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about.html' },
        { text: 'Blog', link: 'https://example.com/' }  
    ],
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: './public/favicon.png' }],
    ],
  },
  base: '/',
  plugins: ['@vuepress/back-to-top'],
  plugins: [
    ['@vuepress/medium-zoom'],
    [
      '@vuepress/blog',
      {
        // オプション
      },
    ],
    [
        '@vuepress/google-analytics',
        {
          ga: 'UA-123456789-1', // 自身のトラッキングIDを設定
        },
    ],
    [
        '@vuepress/last-updated',
        // フォーマットを変更したい時に設定(dayjsを使った例)
        {
          transformer: (timestamp, lang) => {
            return dayjs(timestamp).format('YYYY/MM/DD H時m分');
          },
        },
      ],
  ]
})
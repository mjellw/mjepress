export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Hello Vuepress!\",\"lang\":\"ja-JP\",\"frontmatter\":{\"home\":true,\"heroText\":null,\"tagline\":\"記事一覧\",\"footer\":\"Copyright © 2020-present Kohe\"},\"headers\":[{\"level\":2,\"title\":\"Vuepressとは？\",\"slug\":\"vuepressとは\",\"link\":\"#vuepressとは\",\"children\":[]},{\"level\":2,\"title\":\"なんでVuepress始めたんですか？\",\"slug\":\"なんでvuepress始めたんですか\",\"link\":\"#なんでvuepress始めたんですか\",\"children\":[]},{\"level\":2,\"title\":\"TODO\",\"slug\":\"todo\",\"link\":\"#todo\",\"children\":[]}],\"git\":{\"updatedTime\":1690017988000,\"contributors\":[{\"name\":\"tentoumushi-jp\",\"email\":\"09mjellw@gmail.com\",\"commits\":6}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

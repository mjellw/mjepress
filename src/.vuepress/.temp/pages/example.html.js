export const data = JSON.parse("{\"key\":\"v-1bb9c728\",\"path\":\"/example.html\",\"title\":\"example pages\",\"lang\":\"ja-JP\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"見出し1\",\"slug\":\"見出し1\",\"link\":\"#見出し1\",\"children\":[]},{\"level\":2,\"title\":\"見出し2\",\"slug\":\"見出し2\",\"link\":\"#見出し2\",\"children\":[]},{\"level\":2,\"title\":\"見出し3\",\"slug\":\"見出し3\",\"link\":\"#見出し3\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"example.md\"}")

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

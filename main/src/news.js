export default Array(100).fill(0).map((_, index) => ({
  name: `News${index}`,
  entry: process.env.VUE_APP_SUB_VUE,
  activeRule: `/sub-vue/news/${index}`
}))

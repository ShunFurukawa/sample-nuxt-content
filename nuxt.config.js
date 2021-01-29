export default {
  target: 'static',
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  },
  router: {
    base: '/test/'
  },
  head: {
    titleTemplate: 'Sample Nuxt Content',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}

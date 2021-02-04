export default {
  target: 'static',
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  },
  components: true,
  router: {
    base: '/test/'
  },
  head: {
    titleTemplate: '%s | Sample Nuxt Content',
    title: 'Site Title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sample Nuxt Content Description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}

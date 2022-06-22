module.exports = {
  head: {
    title: 'itunes nuxt test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'itunes nuxt test' }
    ]
  },

  modules: [
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/i18n',
      {
        locales: ['en'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              appname: 'itunes nuxt test',
              results: 'results',
              type_here: 'type here'
            }
          }
        }
      }
    ]
  ],


  build: {
    vendor: ['axios']
  },
}

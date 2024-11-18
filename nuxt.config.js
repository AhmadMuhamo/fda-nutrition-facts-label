export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - FDA Nutrition Facts Label',
    title: 'FDA Nutrition Facts Label',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  css: ['~/assets/app.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ar', language: 'ar-EG', dir: 'rtl' },
      { code: 'es', language: 'es-ES' },
      { code: 'fr', language: 'fr-FR' }
    ],
    defaultLocale: 'en'
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true
    }
  },
  build: {}
}

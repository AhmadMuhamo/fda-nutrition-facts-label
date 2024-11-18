import i18n from './plugins/i18n'

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
      { code: 'en', iso: 'en-US', file: 'locales/en.json', dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: 'locales/ar.json', dir: 'rtl' },
      { code: 'es', iso: 'es-ES', file: 'locales/es.json', dir: 'ltr' },
      { code: 'fr', iso: 'fr-FR', file: 'locales/fr.json', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    defaultDirection: 'ltr',
    vueI18n: i18n
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true
    }
  },
  build: {}
}

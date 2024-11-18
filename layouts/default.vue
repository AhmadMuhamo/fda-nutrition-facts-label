<template>
  <v-app :class="{ rtl: $i18n.locale === 'ar' }" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <v-app-bar fixed app>
      <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
      <v-spacer />
      <v-btn id="menu-activator" color="primary" outlined>
        <img class="mr-2" :src="require(`@/static/flag-${$i18n.locale}.png`)" alt="" width="24" /> {{ localeBtnText }}
        <v-menu activator="#menu-activator" offset-y>
          <v-list>
            <v-list-item v-for="item in locales" :key="item.id" @click="switchLocale(item.value)">
              <img class="mr-2" :src="require(`@/static/flag-${item.value}.png`)" alt="" width="24" />
              <v-list-item-title>{{ item.locale }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>{{ $t('footerCopyright', { date: new Date().getFullYear() }) }} </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      locales: [
        {
          id: 1,
          locale: 'English',
          value: 'en'
        },
        {
          id: 2,
          locale: 'العربية',
          value: 'ar'
        },
        {
          id: 3,
          locale: 'Español',
          value: 'es'
        },
        {
          id: 4,
          locale: 'français',
          value: 'fr'
        }
      ]
    }
  },
  computed: {
    localeBtnText() {
      switch (this.$i18n.locale) {
        case 'ar':
          return 'العربية'
        case 'es':
          return 'Español'
        case 'fr':
          return 'français'
        default:
          return 'English'
      }
    }
  },
  methods: {
    switchLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

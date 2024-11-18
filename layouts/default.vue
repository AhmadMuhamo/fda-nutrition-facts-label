<template>
  <v-app :class="{ rtl: $i18n.locale === 'ar' }" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <v-app-bar fixed app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
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
      <span>Food Label Maker &copy; {{ new Date().getFullYear() }} All Rights Reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'FDA Nutrition Facts Label',
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
          locale: 'Spanish',
          value: 'es'
        },
        {
          id: 4,
          locale: 'French',
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
          return 'Spanish'
        case 'fr':
          return 'French'
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

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="8" align="center">
      <nutrition-facts :amounts="amounts" :daily-value="dailyValue" :serving="serving"/>
    </v-col>
  </v-row>
</template>

<script>
import NutritionFacts from '@/components/NutritionFacts.vue'
import response from '@/static/response.json'

export default {
  name: 'IndexPage',
  components: {
    NutritionFacts
  },
  data() {
    return {
      amounts: response.label.amounts,
      dailyValue: response.label.dailyValue,
      serving: response.label.serving
    }
  }
}
</script>

<template>
  <v-row justify="center"  class="pt-10">
    <v-col cols="12" sm="12" md="6" align="center">
      <nutrition-facts
        :amounts="amounts"
        :daily-value="dailyValue"
        :serving="serving"
        :calories-per-serving="caloriesPerServing"
      />
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <h1>Customize Nutrients</h1>
      <div style="max-height: 700px;overflow: scroll;">
        <v-checkbox
          v-for="item in serving"
          :key="item.id"
          v-model="item.enabled"
          :label="item.name"
          dense
          hide-details
        />
      </div>
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
    const serving = []
    for (const key in response.label.serving) {
      serving.push(response.label.serving[key])
    }
    return {
      amounts: response.label?.amounts,
      dailyValue: response.label?.daily_value,
      serving,
      caloriesPerServing: response.label?.serving?.Calories?.value
    }
  }
}
</script>

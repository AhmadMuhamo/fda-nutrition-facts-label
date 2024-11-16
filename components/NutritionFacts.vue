<template>
  <div class="nf-container">
    <h1>Nutrition Facts</h1>
    <v-divider />
    <p>{{ disclaimer }}</p>
  </div>
</template>
<script>
export default {
  name: 'NutritionFacts',
  data() {
    return {
      disclaimer:
        '* The % Daily Value (DV) tells you how much nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.'
    }
  }
}
</script>
<style lang="scss">
.nf-container {
  width: 410px;
  max-width: 100%;
  border: 1px solid #000;
  border-radius: 0 !important;
  padding: 10px;
  text-align: left;
}
</style>

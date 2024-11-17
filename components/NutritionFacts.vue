<template>
  <div class="nf-container">
    <h1>Nutrition Facts</h1>
    <v-divider />
    <div class="servings">
      <p>{{ amounts.number_of_servings }} Serving Per Container</p>
      <div class="serving-size d-flex align-items-center justify-space-between">
        <p class="bolder">Serving Size</p>
        <p class="bolder">{{ amounts.serving }}g</p>
      </div>
    </div>
    <v-divider class="thickiest" />
    <div class="calories d-flex justify-space-between">
      <div class="label">
        <p>Amount Per Serving</p>
        <p>Calories</p>
      </div>
      <p class="value">{{ Math.round(serving.Calories.value) }}</p>
    </div>
    <v-divider class="thick" />
    <div class="nutrient-data">
      <p class="text-right bolder">% Daily Value *</p>
      <v-divider />
    </div>
    <!-- <p class="disclaimer-text">{{ disclaimer }}</p> -->
  </div>
</template>
<script>
export default {
  name: 'NutritionFacts',
  props: {
    amounts: {
      type: Object,
      required: true,
      default: () => {}
    },
    dailyValue: {
      type: Object,
      required: true,
      default: () => {}
    },
    serving: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
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
  h1 {
    font-weight: 1000;
    font-size: 3.6rem;
    line-height: 1;
  }
  .servings {
    p {
      font-size: 1.6rem;
    }
    .serving-size p {
      font-size: 1.9rem;
    }
  }
  .calories {
    .label p {
      font-weight: 1000;
      font-size: 2.9rem;
      line-height: 1;
      &:first-child {
        font-size: 1.6rem;
        line-height: 1;
      }
    }
    .value {
      font-weight: 1000;
      font-size: 2.9rem;
      margin-top: auto;
    }
  }
  .disclaimer-text {
    font-size: 1rem;
  }
  .v-divider {
    border-color: rgba(0, 0, 0, 1);
    margin: 3px 0;
    &.thick {
      border-width: 4px;
    }
    &.thicker {
      border-width: 7px;
    }
    &.thickiest {
      border-width: 10px;
    }
  }
}
</style>

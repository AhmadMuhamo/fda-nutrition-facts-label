<template>
  <div class="nf-container">
    <h1>Nutrition Facts</h1>
    <v-divider />
    <div class="servings">
      <p>{{ amounts.number_of_servings }} Serving Per Container</p>
      <div class="serving-size d-flex align-items-center justify-space-between">
        <p class="bold">Serving Size</p>
        <p class="bold">{{ amounts.serving }}g</p>
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
      <p class="text-right bold">% Daily Value *</p>
      <v-divider />
      <ul>
        <li
          v-for="nutrient in servingArr"
          :key="nutrient.id"
          class="d-flex align-items-center justify-space-between"
          :class="{
            indented: nutrient.indentations > 0,
            double: nutrient.indentations > 1
          }"
          :data-section="nutrient.section"
        >
          <div class="d-flex">
            <p :class="{ bold: nutrient.indentations === 0 && nutrient.section === 0 }">
              {{ nutrient.id === 232 ? `Includes ${Math.round(nutrient.value)}g` : '' }} {{ nutrient.name }}
            </p>
            &nbsp;
            <p v-if="nutrient.id !== 232">
              {{
                nutrient.section === 0 || nutrient.value > 10
                  ? Math.round(nutrient.value)
                  : Math.round(nutrient.value * 10) / 10
              }}{{ nutrient.unit?.name || 'g' }}
            </p>
          </div>
          <p v-if="nutrient.daily_value" :class="{ bold: nutrient.section === 0 }">
            {{ Math.round(dailyValue[nutrient.name]) }}%
          </p>
        </li>
      </ul>
    </div>
    <v-divider class="thick" />
    <p class="disclaimer-text">{{ disclaimer }}</p>
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
  },
  computed: {
    servingArr() {
      const servingArr = []
      for (const key in this.serving) {
        if (this.serving[key].enabled) {
          servingArr.push(this.serving[key])
        }
      }
      servingArr.sort((a, b) => a.order - b.order).sort((a, b) => a.section - b.section)
      return servingArr
    }
  },
  mounted() {
    const firstElementOfSection = document.querySelector('[data-section=\'1\']')
    if (firstElementOfSection) {
      firstElementOfSection.classList.add('thick-border')
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
  .nutrient-data {
    ul {
      padding-left: 0;
    }
    li {
      &:not(:first-child) {
        border-top: 1px solid #000;
        padding-top: 5px;
      }
      &.indented.double {
        padding-left: 0;
        margin-left: 50px;
      }
      &.thick-border {
        border-width: 13px;
      }
    }
  }
  .disclaimer-text {
    font-size: 0.94rem;
  }
}
</style>

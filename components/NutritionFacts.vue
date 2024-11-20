<template>
  <div class="nf-container" :class="{ rtl: $i18n.locale === 'ar' }">
    <h1>{{ $t('nutritionFacts') }}</h1>
    <v-divider />
    <div class="servings">
      <p>{{ $t('servingPerContainer', { amount: amounts.number_of_servings }) }}</p>
      <div class="serving-size d-flex align-items-center justify-space-between">
        <p class="bold">{{ $t('servingSize') }}</p>
        <p class="bold">{{ amounts.serving }}{{ $t('gUnit') }}</p>
      </div>
    </div>
    <v-divider class="thickiest" />
    <div class="calories d-flex justify-space-between">
      <div class="label">
        <p>{{ $t('amountPerServing') }}</p>
        <p>{{ $t('calories') }}</p>
      </div>
      <p class="value">{{ Math.round(caloriesPerServing) }}</p>
    </div>
    <v-divider class="thick" />
    <div class="nutrient-data">
      <p class="text-right bold">% {{ $t('dailyValue') }} *</p>
      <v-divider />
      <ul v-if="servingArr.length">
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
              {{ nutrient.id === 232 ? $t('addedSugar', { value: Math.round(nutrient.value) }) : '' }}
              <span v-if="nutrient.id === 134 && $i18n.locale === 'en'">
                <em>{{ $t('trans') }}</em> {{ $t('fat') }}
              </span>
              <span v-else-if="nutrient.id === 134 && $i18n.locale !== 'en'">
                {{ $t('fat') }} <em>{{ $t('trans') }}</em>
              </span>
              <span v-else>{{ getName(nutrient) }}</span>
            </p>
            &nbsp;
            <p v-if="nutrient.id !== 232">
              {{
                nutrient.section === 0 || nutrient.value > 10
                  ? Math.round(nutrient.value)
                  : Math.round(nutrient.value * 10) / 10
              }}{{ nutrient.unit ? getName(nutrient.unit) : $t('gUnit') }}
            </p>
          </div>
          <p v-if="nutrient.daily_value" :class="{ bold: nutrient.section === 0 }">
            {{ Math.round(dailyValue[nutrient.name]) }}%
          </p>
        </li>
      </ul>
    </div>
    <v-divider class="thick" />
    <p class="disclaimer-text">{{ $t('disclaimerText') }}</p>
  </div>
</template>
<script>
export default {
  name: 'NutritionFacts',
  props: {
    caloriesPerServing: {
      type: Number,
      required: true,
      default: 0
    },
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
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    servingArr() {
      const servingArr = this.serving.filter((el) => el.enabled)
      servingArr.sort((a, b) => a.order - b.order).sort((a, b) => a.section - b.section)
      return servingArr
    }
  },
  mounted() {
    // eslint-disable-next-line quotes
    const firstElementOfSection = document.querySelector("[data-section='1']")
    if (firstElementOfSection) {
      firstElementOfSection.classList.add('thick-border')
    }
  },
  methods: {
    getName(item) {
      const locale = this.$i18n.locale
      return locale === 'en' ? item.name : item[`name_${locale}`]
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
      font-size: 3.5rem;
      margin-top: auto;
    }
  }
  .nutrient-data {
    ul {
      padding-left: 0;
      li {
        &:not(:first-child) {
          border-top: 1px solid #000;
          padding-top: 7px;
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
  }
  .disclaimer-text {
    font-size: 0.94rem;
  }
  &.rtl {
    text-align: right;
    h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.3;
    }
    .calories {
      .label p {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 1.3;
        &:first-child {
          font-size: 1.6rem;
          line-height: 1.3;
        }
      }
      .value {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
      }
    }
    .nutrient-data {
      ul {
        li {
          &.indented.double {
            padding-right: 0;
            margin-left: 0;
            margin-right: 50px;
          }
        }
      }
    }
  }
}
</style>

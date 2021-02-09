<template>
  <div class="spreadsheet-component">
    <div class="container">
      <h2 class="title">{{ question }}</h2>
      <div class="spreadsheet">
        <div class="pros reasons">
          <ul class="reasons__list">
            <li
              v-for="pro in pros"
              :key="pro.id"
              class="reasons__item"
            >
              <reason-component
                :isPro="true"
                :reason="pro"
              />
            </li>
          </ul>
        </div>
        <div class="cons reasons">
          <ul class="reasons__list">
            <li
              v-for="con in cons"
              :key="con.id"
              class="reasons__item"
            >
              <reason-component
                :isPro="false"
                :reason="con"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="score">
        <div class="score__title">{{ textContent.score }}</div>
        <div class="score__pros">{{ scorePros }}</div>
        <div class="score__cons">{{ scoreCons }}</div>
      </div>
      <button-component
        v-if="pros.length > 0 || cons.length > 0"
        :buttonText="isChartsShown ? this.textContent.buttonHide : this.textContent.buttonShow"
        buttonColor="var(--button-main-color)"
        class="show-chart-btn"
        @clickOnBtn="showCharts"
      />
      <ul
        v-if="isChartsShown"
        class="charts"
        ref="charts"
      >
        <li class="charts__pros-cons">
          <h2 class="charts__title">{{ this.textContent.chartName1 }}</h2>
          <chart-component
            :chartLabels="chartLabelsProsCons"
            :chartValues="chartValuesProsCons"
            :chartTitle="question"
            :colorScheme="['#44bba4', '#ef5b5b']"
          />
        </li>
        <li class="charts__reasons">
          <h2 class="charts__title">{{ this.textContent.chartName2 }}</h2>
          <chart-component
            :chartLabels="chartLabelsAllReasons"
            :chartValues="chartValuesAllReasons"
            :chartTitle="question"
            :colorScheme="shuffledDefaultColorScheme"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import ReasonComponent from './ReasonComponent.vue';
import ChartComponent from './ChartComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'SpreadsheetComponent',
  components: {
    ReasonComponent,
    ChartComponent,
    ButtonComponent,
  },
  data() {
    return {
      isChartsShown: false,
    };
  },
  computed: {
    ...mapState({
      question: (state) => state.question,
      pros: (state) => state.pros,
      cons: (state) => state.cons,
      textContent: (state) => state.textContent.spreadsheet,
    }),
    scorePros() {
      if (this.pros.length === 0) return 0;
      return this.calculateScore(this.pros);
    },
    scoreCons() {
      if (this.pros.length === 0) return 0;
      return this.calculateScore(this.cons);
    },
    chartValuesProsCons() {
      return [this.scorePros, this.scoreCons];
    },
    chartLabelsProsCons() {
      return [this.textContent.pros, this.textContent.cons];
    },
    chartValuesAllReasons() {
      return [...this.pros, ...this.cons]
        .map((option) => Math.round(option.value * option.probability * 0.01));
    },
    chartLabelsAllReasons() {
      return [...this.pros, ...this.cons]
        .map((option) => option.name);
    },
    shuffledDefaultColorScheme() {
      return this.shuffleFisherYates([
        '#e4572e', '#29335c', '#f3a712', '#a8c686', '#669bbc',
        '#214e34', '#1e152a', '#e9b44c', '#9b2915', '#50a2a7',
        '#6b2d5c', '#f0386b', '#f4ff52', '#f4dbd8', '#7d98a1',
        '#83b692', '#f9ada0', '#f9627d', '#c65b7c', '#5b3758',
      ]);
    },
  },
  methods: {
    calculateScore(arrayOfOptions) {
      return Math
        .round(arrayOfOptions
          .reduce((sum, option) => sum + option.value * option.probability * 0.01, 0));
    },
    showCharts() {
      this.isChartsShown = !this.isChartsShown;
    },
    shuffleFisherYates(arrayToShuffle) {
      const array = [...arrayToShuffle];
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};

</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.spreadsheet {
  background-color: white;
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  margin-bottom: 50px;
}

.reasons {
  flex-basis: 48%;
}

.pros {
  border-right: 2px var(--header-color) solid;
  padding-right: 1%;
}

.cons {
  padding-left: 1%;
}

.score {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 24px;
  margin-bottom: 50px;
}

.score__title {
  position: absolute;
}

.score__pros {
  color: var(--button-positive-color);
  text-align: right;
  flex-basis: 45%;
}

.score__cons {
  color: var(--button-negative-color);
  text-align: right;
  flex-basis: 45%;
}

.show-chart-btn {
  margin-left: auto;
  margin-bottom: 50px;
  width: 50%;
}

.charts__title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.chart-component {
  width: 60vw;
  height: 40vh;
}

.charts__pros-cons, .charts__reasons {
  margin-bottom: 50px;
}
</style>

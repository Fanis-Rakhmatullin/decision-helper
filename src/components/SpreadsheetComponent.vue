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
        <div class="score__title">{{textContent.score}}</div>
        <div class="score__pros">{{  scorePros }}</div>
        <div class="score__cons">{{  scoreCons }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import ReasonComponent from './ReasonComponent.vue';

export default {
  name: 'SpreadsheetComponent',
  components: { ReasonComponent },
  data() {
    return {};
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
  },
  methods: {
    calculateScore(arrayOfOptions) {
      return Math
        .round(arrayOfOptions
          .reduce((sum, option) => sum + option.value * option.probability * 0.01, 0));
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
</style>

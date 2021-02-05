<template>
  <div class="spreadsheet-component">
    <div class="container">
      <h2 class="title">{{ question }}</h2>
      <div class="spreadsheet">
        <div class="pros reasons">
          <ul class="reasons__list">
            <li
              class="reasons__item"
              v-for="pro in pros"
              :key="pro.id"
            >
              <div class="reasons__name">{{ pro.name }}</div>
              <div class="reasons__value">{{ pro.value }}</div>
              <div class="reasons__probability">{{ pro.probability }}</div>
            </li>
          </ul>
        </div>
        <div class="cons reasons">
          <ul class="reasons__list">
            <li
              class="reasons__item"
              v-for="con in cons"
              :key="con.id"
            >
              <div class="reasons__name">{{ con.name }}</div>
              <div class="reasons__value reasons__value--cons">{{ con.value }}</div>
              <div class="reasons__probability">{{ con.probability }}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="score">
        <div class="score__title">Score:</div>
        <div class="score__pros">17.5</div>
        <div class="score__cons">8</div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'SpreadsheetComponent',
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      question: (state) => state.question,
      pros: (state) => state.pros,
      cons: (state) => state.cons,
    }),
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

.reasons__item {
  display: flex;
  justify-content: space-between;
}

.reasons__name {
  max-width: 70%;
}

.reasons__value {
  color: var(--button-positive-color);

  &--cons {
    color: var(--button-negative-color);
  }
}

.score {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 24px;
}

.score__pros {
  color: var(--button-positive-color);
  text-align: right;
  flex-basis: 35%;
}

.score__cons {
  color: var(--button-negative-color);
  text-align: right;
  flex-basis: 50%;
}
</style>

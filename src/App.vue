<template>
  <div id="app">
    <header-component/>
    <question-component/>
    <option-adder/>
    <spreadsheet-component/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import QuestionComponent from './components/QuestionComponent.vue';
import OptionAdder from './components/OptionAdder.vue';
import SpreadsheetComponent from './components/SpreadsheetComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    QuestionComponent,
    OptionAdder,
    SpreadsheetComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "assets/styles/main";

#app {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: var(--dark-font-color);
  background: var(--background-color);
  height: 2000px;
}

.header-component {
  color: var(--light-font-color);
  background: var(--header-color);
  margin-bottom: 200px;
}

.question-component {
  font-size: 24px;
  margin-bottom: 200px;
}

.option-adder {
  font-size: 24px;
  margin-bottom: 120px;
}
</style>

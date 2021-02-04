<template>
  <div id="app">
    <header-component/>
    <question-component/>
    <option-adder/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import QuestionComponent from './components/QuestionComponent.vue';
import OptionAdder from './components/OptionAdder.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    QuestionComponent,
    OptionAdder,
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
}

.header-component {
  color: var(--light-font-color);
  background: var(--header-color);
}

.question-component {
  padding-top: 200px;
  font-size: 24px;
}

.option-adder {
  padding-top: 200px;
  font-size: 24px;
}
</style>

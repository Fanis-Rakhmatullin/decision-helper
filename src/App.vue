<template>
  <div id="app">
    <header-component/>
    <question-component/>
    <option-adder/>
    <spreadsheet-component/>
    <footer-component/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HeaderComponent from './components/HeaderComponent.vue';
import QuestionComponent from './components/QuestionComponent.vue';
import OptionAdder from './components/OptionAdder.vue';
import SpreadsheetComponent from './components/SpreadsheetComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    QuestionComponent,
    OptionAdder,
    SpreadsheetComponent,
    FooterComponent,
  },
  methods: {
    ...mapActions({
      getTextContent: 'getTextContent',
    }),
  },
  created() {
    this.getTextContent('english');
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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

.footer-component {
  color: var(--light-font-color);
  background: var(--header-color);
}
</style>

<template>
  <div id="app">
<!--    <div class="container">-->
      <header-component />
<!--    </div>-->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  data() {
    return {

    };
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

.container {
  margin: 0 auto;
  width: 95%;
  max-width: 966px;
}
</style>

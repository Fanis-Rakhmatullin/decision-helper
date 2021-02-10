<template>
  <header class="header-component">
    <div class="container">
      <div class="headline">
        <h1 class="headline__title">Decision helper</h1>
        <h3 class="headline__moto">{{ textContent.moto }}</h3>
      </div>
      <nav class="interactive-elements">
        <switch-component
          @buttonSwitched="changeLang($event)"
        />
      </nav>
    </div>
  </header>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import SwitchComponent from './SwitchComponent.vue';

export default {
  name: 'HeaderComponent',
  components: { SwitchComponent },
  computed: {
    ...mapState({
      textContent: (state) => state.textContent.header,
    }),
  },
  methods: {
    ...mapActions({
      getTextContent: 'getTextContent',
    }),
    changeLang(isChecked) {
      if (isChecked) this.getTextContent('russian');
      else this.getTextContent('english');
    },
  },
};
</script>

<style lang="scss" scoped>
.header-component {
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;

  @include phones {
    flex-direction: column;
  }
}

.headline {
  text-align: left;

  @include phones {
    margin-bottom: 10px;
  }
}

.headline__title {
  font-size: var(--font-size-headline);
  font-weight: bold;
}

.headline__moto {
  font-size: var(--font-size-main);
}

.interactive-elements {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
}

.github {
  margin-top: 10px;
}
</style>

<template>
  <div class="button-component">
    <button
      :style="{ backgroundColor: buttonColor }"
      class="button"
      @click.prevent="$emit('clickOnBtn')"
    >{{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    buttonColor: String,
    buttonText: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  border-radius: 10px;
  font-size: var(--font-size-main);
  font-weight: bold;
  color: white;
  width: 100%;
  min-width: fit-content;
  padding-right: 10px;
  padding-left: 10px;
  border: 3px solid transparent;
  transition: box-shadow 0.8s;

  &:hover {
    box-shadow: inset 0 0 0 25px var(--header-color);
  }

  &:focus {
    outline: none;
    border: 3px solid var(--header-color);
  }
}
</style>

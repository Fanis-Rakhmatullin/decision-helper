<template>
  <div class="button-delete-component">
    <button
      class="button"
      @click.prevent="$emit('clickOnDeleteBtn')"
    >
      <img
        alt="Кнопка закрыть"
        class="button__icon"
        src="../assets/svg/cross.svg"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDeleteComponent',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;

  &:focus {
    outline: none;
  }
}

.button__icon {
  width: 10px;
  height: 10px;
}
</style>

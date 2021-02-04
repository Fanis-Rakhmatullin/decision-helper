<template>
  <div class="button-component">
    <button
      :style="{ backgroundColor: buttonColor }"
      class="button"
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
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 100%;

  &:focus {
    outline: none;
  }
}
</style>

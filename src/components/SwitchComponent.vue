<template>
  <div class="switch-component">
    <div class="wrapper">
      <!--      <span class="switch__option switch__option&#45;&#45;left">English</span>-->
      <div class="switch__toggle">
        <input
          id="checkbox"
          class="switch__checkbox"
          type="checkbox"
          @change="$emit('buttonSwitched', $event.target.checked)"
        />
        <label
          class="switch__slider"
          for="checkbox"
        ></label>
      </div>
      <!--      <span class="switch__option switch__option&#45;&#45;right">Русский</span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
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
.wrapper {
  width: 50px;
  height: 25px;
  transform: translateY(50%)
}

.switch__toggle {
  width: 100%;
  height: 100%;
}

.switch__toggle:after, .switch__toggle:before {
  display: block;
  position: relative;
  width: fit-content;
  height: inherit;
}

.switch__toggle:before {
  content: 'English';
  bottom: 0;
  left: -65px;
  transform: translateY(20%);
}

.switch__toggle:after {
  content: 'Русский';
  bottom: 0;
  right: -50px;
  transform: translateY(-160%);
}

.switch__checkbox {
  display: none;
}

.switch__slider {
  position: relative;
  display: block;
  transform: translateY(-100%);
  width: 80%;
  height: 80%;
  background: var(--background-color);
  border-radius: 25px;
}

.switch__slider::before {
  content: '';
  display: block;
  position: relative;
  height: 100%;
  width: 50%;
  background-color: var(--button-main-color);
  border-radius: 50%;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  transition: left 0.5s;
}

.switch__checkbox:checked + .switch__slider::before {
  left: 75%;
}
</style>

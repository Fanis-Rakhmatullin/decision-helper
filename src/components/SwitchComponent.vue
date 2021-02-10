<template>
  <div class="switch-component">
    <div class="wrapper">
      <span class="switch__option switch__option--left">English</span>
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
      <span class="switch__option switch__option--right">Русский</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
}

.switch__option--left {
  margin-right: 10px;
}

.switch__toggle {
  width: 50px;
  height: 25px;

  @include phones {
    width: 40px;
    height: 20px;
  }
}

.switch__checkbox {
  display: none;
}

.switch__slider {
  position: relative;
  display: block;
  width: 80%;
  height: 80%;
  background: var(--background-color);
  border-radius: 25px;
  transition: background 0.8s;

  @include phones {
    border-radius: 20px;
  }

    &:hover {
      background: var(--button-positive-color);
    }
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

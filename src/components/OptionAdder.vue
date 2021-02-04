<template>
  <div class="option-adder">
    <div class="container">
      <form class="option">
        <label class="option__name">Add pros or cons:
          <input
            v-model="question"
            class="option__name-input input--type--text"
            placeholder="I have a lot of friends there"
            type="text"
          >
        </label>
        <label class="option__value">Point value:
          <input
            v-model="value"
            class="option__value-input input--type--text"
            placeholder="10"
            type="number"
          >
        </label>
        <label class="option__probability">Probability:
          <input
            v-model="probability"
            class="option__probability-input"
            max="100"
            min="0"
            step="1"
            type="range"
            value="100"
          > {{ probability }} %
        </label>
      </form>
      <div class="buttons">
        <button-component
          buttonColor="var(--button-positive-color)"
          buttonText="Add as pro"
          class="buttons__pro"
        />
        <button-component
          buttonColor="var(--button-negative-color)"
          buttonText="Add as con"
          class="buttons__con"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'OptionAdder',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      question: '',
      value: 10,
      probability: 100,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.buttons {
  display: flex;
  flex-basis: 40%;
  justify-content: space-between;
}

.option {
  flex-basis: 60%;
  display: flex;
  flex-wrap: wrap;
}

.option__value, .option__probability {
  font-size: 18px;
  width: 50%;
}

.option__value-input {
  height: 20px;
  font-size: 18px;
}
</style>

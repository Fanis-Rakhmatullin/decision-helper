<template>
  <div class="option-adder">
    <div class="container">
      <form class="option">
        <label class="option__name">
          <span class="option__name-text">{{textContent.optionName}}</span>
          <input
            v-model="option.name"
            class="option__name-input input--type--text"
            :placeholder="textContent.optionNamePlaceholder"
            type="text"
            ref="optionName"
          >
        </label>
        <div class="option__rest-traits">
          <label class="option__value">{{textContent.optionValue}}
            <input
              v-model="option.value"
              class="option__value-input input--type--text"
              placeholder="10"
              type="number"
              max="1000"
            >
          </label>
          <label class="option__probability">{{textContent.optionProbability}}
            {{ option.probability }} %
            <input
              v-model="option.probability"
              class="option__probability-input"
              max="100"
              min="1"
              step="1"
              type="range"
              value="100"
              required
            >
          </label>
        </div>
      </form>
      <div class="buttons">
        <button-component
          buttonColor="var(--button-positive-color)"
          :buttonText="textContent.optionButtonPro"
          class="buttons__pro"
          @clickOnBtn="addNewPro"
        />
        <button-component
          buttonColor="var(--button-negative-color)"
          :buttonText="textContent.optionButtonCon"
          class="buttons__con"
          @clickOnBtn="addNewCon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ButtonComponent from './ButtonComponent.vue';

let uniqueId = 0;

export default {
  name: 'OptionAdder',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      option: {
        name: '',
        value: 10,
        probability: 100,
        id: 0,
      },
    };
  },
  computed: {
    ...mapState({
      textContent: (state) => state.textContent.optionAdder,
    }),
  },
  methods: {
    ...mapMutations(['ADD_PRO', 'ADD_CON']),
    addNewPro() {
      this.generateNextId();
      this.ADD_PRO({ ...this.option });
      this.resetInput();
      this.$refs.optionName.focus();
    },
    addNewCon() {
      this.generateNextId();
      this.ADD_CON({ ...this.option });
      this.resetInput();
      this.$refs.optionName.focus();
    },
    generateNextId() {
      uniqueId += 1;
      this.option.id = uniqueId;
    },
    resetInput() {
      this.option.name = '';
      this.option.value = 10;
      this.option.probability = 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}

.buttons {
  display: flex;
  flex-basis: 40%;
  justify-content: space-between;
}

.option {
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  padding-right: 5%;
}

.option__name {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  margin-bottom: 10px;
}

.option__name-text {
  margin-bottom: 10px;
}

.option__rest-traits {
  display: flex;
}

.option__value,
.option__probability {
  font-size: 18px;
  width: 40%;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
}

.option__probability {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.option__value-input {
  font-size: 18px;
  width: 80px;
  height: 30px;
  text-align: center;
}

.buttons__con,
.buttons__pro {
  width: 45%;
  white-space: nowrap;
}
</style>

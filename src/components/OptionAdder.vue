<template>
  <div class="option-adder">
    <div class="container">
      <form class="option">
        <label class="option__name">
          <span class="option__name-text">Add pros or cons:</span>
          <input
            v-model="option.name"
            class="option__name-input input--type--text"
            placeholder="I have a lot of friends there"
            type="text"
          >
        </label>
        <div class="option__rest-traits">
          <label class="option__value">Point value:
            <input
              v-model="option.value"
              class="option__value-input input--type--text"
              placeholder="10"
              type="number"
            >
          </label>
          <label class="option__probability">Probability: {{ option.probability }} %
            <input
              v-model="option.probability"
              class="option__probability-input"
              max="100"
              min="0"
              step="1"
              type="range"
              value="100"
            >
          </label>
        </div>
      </form>
      <div class="buttons">
        <button-component
          buttonColor="var(--button-positive-color)"
          buttonText="Add as pro"
          class="buttons__pro"
          @clickOnBtn="addNewPro"
        />
        <button-component
          buttonColor="var(--button-negative-color)"
          buttonText="Add as con"
          class="buttons__con"
          @clickOnBtn="addNewCon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
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
  methods: {
    ...mapMutations(['ADD_PRO', 'ADD_CON']),
    addNewPro() {
      uniqueId += 1;
      this.option.id = uniqueId;
      this.ADD_PRO({ ...this.option });
    },
    addNewCon() {
      uniqueId += 1;
      this.option.id = uniqueId;
      this.ADD_CON({ ...this.option });
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

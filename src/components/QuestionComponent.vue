<template>
  <div class="question-component">
    <div class="container">
      <form class="question">
        <label class="question__prompt">Enter your question:
          <input
            type="text"
            class="question__input input--type--text"
            placeholder="Should I move to St. Petersburg?"
            v-model="question"
          >
        </label>
        <button-component
          class="question__button"
          buttonText="Next"
          buttonColor="var(--button-main-color)"
        />
      </form>

    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'QuestionComponent',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      question: '',
    };
  },
};
</script>

<style scoped lang="scss">
.question__prompt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.question__input {
  width: 70%;
}

.question__button {
  width: 35%;
  margin-left: auto;
}
</style>

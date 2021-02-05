<template>
  <div class="question-component">
    <div class="container">
      <form class="question">
        <label class="question__prompt">Enter your question:
          <input
            v-model="newQuestion"
            autofocus
            class="question__input input--type--text"
            placeholder="Should I move to St. Petersburg?"
            type="text"
          >
        </label>
        <button-component
          buttonColor="var(--button-main-color)"
          buttonText="Next"
          class="question__button"
          @clickOnBtn="setNewQuestion"
        />
      </form>

    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'QuestionComponent',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      newQuestion: '',
    };
  },
  methods: {
    ...mapMutations(['SET_QUESTION']),
    setNewQuestion() {
      this.SET_QUESTION(this.newQuestion);

      this.scrollTo(document.querySelector('.option-adder').offsetTop);
    },
    scrollTo(offset) {
      const ADDITIONAL_OFFSET = 50;
      window.scrollTo({
        top: offset - ADDITIONAL_OFFSET,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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

<template>
  <div class="question-component">
    <div class="container">
      <form class="question">
        <label class="question__prompt">{{ textContent.questionPrompt }}
          <input
            v-model="newQuestion"
            autofocus
            class="question__input input--type--text"
            :placeholder="textContent.questionPromptPlaceholder"
            type="text"
          >
        </label>
        <button-component
          buttonColor="var(--button-main-color)"
          :buttonText="textContent.questionButtonNext"
          class="question__button"
          @clickOnBtn="setNewQuestion"
        />
      </form>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { Validator, mixin as ValidatorMixin } from 'simple-vue-validator';
import ButtonComponent from './ButtonComponent.vue';

export default {
  mixins: [ValidatorMixin],
  validators: {
    newQuestion: (value) => Validator.value(value).required('lol'),
  },
  name: 'QuestionComponent',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      newQuestion: '',
    };
  },
  computed: {
    ...mapState({
      textContent: (state) => state.textContent.question,
    }),
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

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.question__input {
  width: 70%;

  @include tablets {
    width: 90%;
  }

  @include phones {
    margin-top: 10px;
    width: 100%;
  }
}

.question__button {
  width: 35%;
  margin-left: auto;

  @include phones {
    width: 50%;
  }
}
</style>

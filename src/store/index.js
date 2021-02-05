import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: 'Should I move to Saint Petersburg?',
    pros: [],
    cons: [],
  },
  mutations: {
    SET_QUESTION: (state, newQuestion) => {
      state.question = newQuestion;
    },
    ADD_PRO: (state, pro) => {
      state.pros.push(pro);
    },
    ADD_CON: (state, con) => {
      state.cons.push(con);
    },
  },
  actions: {
  },
});

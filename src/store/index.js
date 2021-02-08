import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: '',
    pros: [],
    cons: [],
    textContent: {},
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
    DELETE_PRO: (state, proId) => {
      state.pros = state.pros.filter((pro) => pro.id !== proId);
    },
    DELETE_CON: (state, conId) => {
      state.cons = state.cons.filter((con) => con.id !== conId);
    },
    SET_TEXT_CONTENT: (state, textContentObject) => {
      state.textContent = textContentObject;
    },
  },
  actions: {
    getTextContent({ commit }, language) {
      let textContentObject;
      if (language === 'russian') {
        // eslint-disable-next-line global-require
        textContentObject = require('../assets/data/russianLanguage.json');
      } else {
        // eslint-disable-next-line global-require
        textContentObject = require('../assets/data/englishLanguage.json');
      }
      commit('SET_TEXT_CONTENT', textContentObject);
    },
  },
});

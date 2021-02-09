import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: '',
    pros: [{
      name: 'Dota 2 game',
      value: 17,
      probability: 100,
      id: 1,
    },
    {
      name: 'Hello',
      value: 32,
      probability: 80,
      id: 3,
    }],
    cons: [{
      name: 'Imprtant very',
      value: 8,
      probability: 100,
      id: 1,
    },
    {
      name: 'Strong kek',
      value: 33,
      probability: 55,
      id: 3,
    }],
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

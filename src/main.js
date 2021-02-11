import Vue from 'vue';
import VueSimpleValidator from 'simple-vue-validator';
import App from './App.vue';
import store from './store';

Vue.use(VueSimpleValidator, { mode: 'manual' });
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

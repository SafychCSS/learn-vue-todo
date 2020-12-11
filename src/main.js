import Vue from 'vue';
import App from './App.vue';
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App),
  store
}).$mount('#app');

import Vue from "vue";
import store from './store';
import App from "./App.vue";
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

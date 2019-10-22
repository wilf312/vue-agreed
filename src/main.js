import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const agrees = require('../agreed/mock.js')
const agrios = require('agrios')
const agreedAdapter = agrios(agrees)
export const axios = require('axios')

// eslint-disable-next-line no-console
console.log(axios)

axios.default.adapter = agreedAdapter


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

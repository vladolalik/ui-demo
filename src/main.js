import Vue from "vue";
// eslint-disable-next-line prettier/prettier
import router from './router'
import store from "./store";
import "carbon-components/css/carbon-components.css";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

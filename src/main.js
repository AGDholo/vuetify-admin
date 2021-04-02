import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vadmin from "./plugins/vadmin";
import "./scss/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vadmin,
  render: h => h(App)
}).$mount("#app");

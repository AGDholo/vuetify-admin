import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import components from "./plugins/vadmin";
import "./scss/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  components,
  render: h => h(App)
}).$mount("#app");

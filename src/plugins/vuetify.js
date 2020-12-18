import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        "h-bg": "#fff",
        "h-appbar-search": "#F5F5F5",
        primary: "#03A9F4"
      }
    }
  }
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./scss/global.scss";
import store from "./store";

//Plugins
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

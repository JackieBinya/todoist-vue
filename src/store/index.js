import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showOverlay: false
  },
  mutations: {
    toggleShowOverlay(state) {
      state.showOverlay = !state.showOverlay;
    }
  },
  actions: {
    toggleShowOverlay(context) {
      context.commit("toggleShowOverlay");
    }
  },
  modules: {}
});

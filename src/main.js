import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    doLogin(state) {
      state.login = true;
    },
    doLogout(state) {
      state.login = false;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

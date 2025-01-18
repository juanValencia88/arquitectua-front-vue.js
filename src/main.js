// import Vue from 'vue'
// import App from './App.vue'
// import Vuetify from 'vuetify'

// Vue.config.productionTip = false
// Vue.use(Vuetify)

// new Vue({
//   vuetify: new Vuetify(), // Instancia Vuetify aquí
//   render: h => h(App),
// }).$mount('#app')


// main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");


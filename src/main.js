

// main.js
import Vue from "vue"; // Importación de Vue.js, el marco principal
import App from "./App.vue"; // Importación del componente raíz
import router from "./router/index"; // Importación del router para manejar las rutas de la aplicación
import store from "./store/index"; // Importación de Vuex para la gestión del estado global
import vuetify from "./plugins/vuetify"; // Importación de la configuración de Vuetify

Vue.config.productionTip = false; // Desactiva el mensaje sobre la configuración en modo producción

// Creación de una nueva instancia de Vue
new Vue({
  router, // Asocia el router configurado a la instancia de Vue
  store, // Asocia Vuex para manejar el estado global de la aplicación
  vuetify, // Asocia Vuetify para proporcionar estilos y componentes predefinidos
  render: (h) => h(App), // Renderiza el componente raíz App.vue
}).$mount("#app"); // Monta la aplicación en el elemento HTML con id="app"


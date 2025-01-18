// Importa Vue y el Router de Vue
import Vue from 'vue';
import Router from 'vue-router';

// Importa los componentes de las páginas para asociarlos con las rutas
import Home from '../pages/Home.vue'; // Página de inicio
import About from '../pages/About.vue'; // Página de "Acerca de"
import Login from '../pages/Auth/Login.vue'; // Página de inicio de sesión
import Register from '../pages/Auth/Register.vue'; // Página de registro
import Contact from '@/pages/Contact.vue'; // Página de contacto (nueva)


// Habilita el uso del Router en Vue
Vue.use(Router);

// Define las rutas de la aplicación
const routes = [
  {
    path: '/', // Ruta raíz
    name: 'HomePage', // Nombre de la ruta
    component: Home, // Componente asociado a esta ruta
  },
  {
    path: '/about', // Ruta para "Acerca de"
    name: 'AboutPage', // Nombre de la ruta
    component: About, // Componente asociado
  },
  {
    path: '/login', // Ruta para iniciar sesión
    name: 'LoginPage', // Nombre de la ruta
    component: Login, // Componente asociado
  },
  {
    path: '/register', // Ruta para registro
    name: 'RegisterPage', // Nombre de la ruta
    component: Register, // Componente asociado
  },
  {
    path: '/contact', // Ruta para contacto
    name: 'ContactPage', // Nombre de la ruta
    component: Contact, // Componente asociado
  },
];

// Exporta una nueva instancia del Router
export default new Router({
  mode: 'history', // Usa el modo "history" para URLs limpias (sin #)
  base: process.env.VUE_APP_BASE_URL || '/', // Define la base de la aplicación. Usa una variable de entorno o '/' por defecto
  routes, // Conjunto de rutas definidas
});

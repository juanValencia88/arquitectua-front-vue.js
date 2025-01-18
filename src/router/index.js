// index.js (Router)
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Login from '../pages/Auth/Login.vue';
import Register from '../pages/Auth/Register.vue';
import Contact from '@/pages/Contact.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: Register,
  },
  {
    path: "/contact", // Nueva ruta para Contact
    name: "ContactPage",
    component: Contact,
  },
];

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL || '/', // Usa '/' como valor predeterminado
  routes,
});

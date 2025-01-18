// axios.js
import axios from 'axios';

// Configuración de la instancia de Axios
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3000', // Usa la variable de entorno
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitudes
instance.interceptors.request.use(
  (config) => {
    // Agrega un token de autorización si es necesario
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Manejo de errores en solicitudes
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
instance.interceptors.response.use(
  (response) => {
    // Procesa la respuesta correctamente
    return response;
  },
  (error) => {
    // Manejo de errores en respuestas
    if (error.response && error.response.status === 401) {
      // Por ejemplo, redirigir al login si no está autorizado
      console.error('Usuario no autorizado. Redirigiendo al login.');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;

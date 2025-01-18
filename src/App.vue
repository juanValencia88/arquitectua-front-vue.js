<template>
  <!-- La raíz de la aplicación se envuelve dentro del componente Vuetify `v-app` -->
  <v-app>
    <!-- `router-view` es un espacio reservado para renderizar los componentes asociados a las rutas -->
    <router-view />
  </v-app>
</template>

<script>
export default {
  // Define el nombre del componente raíz
  name: "App",
};
</script>

<style>
/* Estilo global para el cuerpo de la aplicación */
body {
  font-family: "Roboto", sans-serif; /* Define la fuente predeterminada como Roboto */
  margin: 0; /* Elimina los márgenes por defecto del navegador */
  background-color: #f5f5f5; /* Establece un color de fondo claro */
}
</style>

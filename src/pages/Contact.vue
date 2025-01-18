<template>
    <DefaultLayout>
      <v-container>
        <h1>Contact Page</h1>
        <p>This is the Contact page. Add your contact information or form here.</p>
      </v-container>
    </DefaultLayout>
  </template>
  
  <script>
  import DefaultLayout from "../layouts/DefaultLayout.vue";
  
  export default {
    name: "ContactPage",
    components: {
      DefaultLayout,
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos específicos para la página de contacto si es necesario */
  </style>
  
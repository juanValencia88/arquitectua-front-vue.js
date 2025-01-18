<!-- Home.vue -->
<template>
  <DefaultLayout>
    <v-container>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the application.</p>
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  name: "HomePage",
  components: {
    DefaultLayout, // Asegúrate de registrar el componente aquí
  },
};
</script>

<style scoped>
</style>

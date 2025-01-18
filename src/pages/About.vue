 <!-- About.vue -->
<template>
  <DefaultLayout>
    <v-container>
      <h1>About Us</h1>
      <p>This page contains information about the application and its creators.</p>
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  name: "AboutPage",
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
</style>
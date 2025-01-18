 <!-- Dashboard.vue -->
<template>
  <DefaultLayout>
    <v-container>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! Here you can see an overview of your activity.</p>
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  name: "Dashboard",
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
</style>
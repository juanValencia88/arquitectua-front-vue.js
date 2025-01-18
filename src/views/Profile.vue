 <!-- Profile.vue -->
<template>
  <DefaultLayout>
    <v-container>
      <h1>Profile</h1>
      <p>Manage your profile information here.</p>
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  name: "Profile",
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
</style>

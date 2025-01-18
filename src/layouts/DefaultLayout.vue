 <!-- DefaultLayout.vue -->
<template>
  <v-app>
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>
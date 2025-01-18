<!-- Header.vue -->
<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>My Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/contact">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

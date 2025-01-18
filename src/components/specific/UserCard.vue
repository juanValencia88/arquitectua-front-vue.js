 <!-- UserCard.vue -->
<template>
  <v-card>
    <v-img :src="avatar" height="200px"></v-img>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-subtitle>{{ email }}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary" text @click="$emit('view-profile', id)">View Profile</v-btn>
      <v-btn color="secondary" text @click="$emit('send-message', id)">Message</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://via.placeholder.com/200",
    },
  },
};
</script>

<style scoped>
</style>

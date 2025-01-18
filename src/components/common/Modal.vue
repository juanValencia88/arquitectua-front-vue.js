 <!-- Modal.vue -->
<template>
  <v-dialog v-model="visible" :width="width">
    <v-card>
      <v-card-title class="headline">
        <slot name="title">Default Title</slot>
      </v-card-title>

      <v-card-text>
        <slot>
          Default Content
        </slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "500px",
    },
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style scoped>
</style>

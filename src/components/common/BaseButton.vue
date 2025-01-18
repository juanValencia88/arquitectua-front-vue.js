 <!-- BaseButton.vue -->
<template>
  <v-btn :color="color" :disabled="disabled" @click="onClick">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
</style>
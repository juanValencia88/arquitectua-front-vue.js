 <!-- Select.vue -->
<template>
  <v-select
    v-model="value"
    :items="items"
    :label="label"
    :outlined="outlined"
    @change="$emit('change', value)"
  />
</template>

<script>
export default {
  name: "Select",
  props: {
    value: [String, Number],
    items: {
      type: Array,
      default: () => [],
    },
    label: String,
    outlined: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
</style>
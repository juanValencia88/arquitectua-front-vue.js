// Checkbox.vue
<template>
  <v-checkbox
    v-model="value"
    :label="label"
    :value="inputValue"
    @change="$emit('change', value)"
  />
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    value: Boolean,
    label: String,
    inputValue: {
      type: [String, Number, Boolean],
      default: true,
    },
  },
};
</script>

<style scoped>
</style>
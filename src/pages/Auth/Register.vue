<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="formData.name"
        label="Name"
        :rules="[rules.required]"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.email"
        label="Email"
        :rules="[rules.required, rules.email]"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.password"
        label="Password"
        type="password"
        :rules="[rules.required, rules.min(6)]"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="primary" @click="submitForm">
        Register
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      formData: {
        name: "",
        email: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Field is required.",
        email: (value) =>
          /.+@.+\..+/.test(value) || "E-mail must be valid.",
        min: (length) => (value) =>
          value.length >= length || `Minimum ${length} characters.`,
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form Data:", this.formData);
      alert("Registration Successful!");
    },
  },
};
</script>

<style scoped>
</style>

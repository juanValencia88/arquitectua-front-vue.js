<template>
  <AuthLayout>
    <v-container>
      <h1>Login</h1>
      <InputField
        label="Email"
        type="email"
        v-model="email"
      />
      <InputField
        label="Password"
        type="password"
        v-model="password"
      />
      <v-btn
        color="primary"
        @click="handleLogin"
      >
        Login
      </v-btn>
    </v-container>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../layouts/AuthLayout";
import InputField from "../../components/forms/InputField";

export default {
  name: "LoginPage",
  components: {
    AuthLayout,
    InputField,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        if (!this.email || !this.password) {
          alert("Both fields are required!");
          return;
        }

        // Llamada a Vuex para autenticar
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        });

        // Redirigir al usuario después de iniciar sesión
        this.$router.push("/");
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    },
  },
};
</script>

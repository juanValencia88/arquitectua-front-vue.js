<!-- Home.vue -->
<template>
  <!-- Componente DefaultLayout para la estructura base -->
  <DefaultLayout>
    <!-- Contenedor principal -->
    <v-container class="pa-5">
      <!-- Tarjeta inicial -->
      <v-card class="elevation-3">
        <!-- Título de la tarjeta -->
        <v-card-title class="text-h4">Welcome to the Home Page</v-card-title>
        <!-- Contenido de la tarjeta -->
        <v-card-text>
          <p class="text-body-1">This is the main content of the application.</p>
        </v-card-text>
        <!-- Acciones dentro de la tarjeta -->
        <v-card-actions>
          <!-- Botón para mostrar el formulario -->
          <v-btn
            color="primary"
            dark
            @click="toggleView('form')"
            :disabled="currentView === 'form'"
          >
            Get Started
          </v-btn>
          <!-- Botón para mostrar la historia -->
          <v-btn
            color="secondary"
            text
            @click="toggleView('story')"
            :disabled="currentView === 'story'"
          >
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- Formulario dinámico que se muestra si currentView es 'form' -->
      <v-card class="mt-5" v-if="currentView === 'form'">
        <!-- Título del formulario -->
        <v-card-title class="text-h5">Send Notification</v-card-title>
        <v-card-text>
          <!-- Validación del formulario -->
          <v-form ref="form" v-model="valid">
            <!-- Campo para el número de teléfono -->
            <v-text-field
              v-model="formData.to"
              label="To (Phone Number)"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <!-- Campo para el cuerpo del mensaje -->
            <v-textarea
              v-model="formData.body"
              label="Message Body"
              :rules="[rules.required]"
              required
            ></v-textarea>
            <!-- Campo para la URL de la imagen -->
            <v-text-field
              v-model="formData.url"
              label="Image URL(https://blob-fotos-ia-dev.s3.amazonaws.com/Omnicanal/image_1736461974196.png)"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <!-- Campo para el ID de la plantilla -->
            <v-text-field
              v-model="formData.id_Plantilla"
              label="Template ID (notificacion_estandar_imagenes)"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <!-- Botones de acción para el formulario -->
        <v-card-actions>
          <!-- Botón para enviar el formulario -->
          <v-btn color="success" dark @click="submitForm">Submit</v-btn>
          <!-- Botón para cancelar y restablecer el formulario -->
          <v-btn color="error" dark @click="resetForm">Cancel</v-btn>
        </v-card-actions>
      </v-card>

      <!-- Historia dinámica que se muestra si currentView es 'story' -->
      <v-card class="mt-5" v-if="currentView === 'story'">
        <!-- Título de la historia -->
        <v-card-title class="text-h5">About This Application</v-card-title>
        <v-card-text>
          <!-- Contenido de la historia -->
          <p class="text-body-1">
            This application was designed to streamline communication by providing an easy-to-use interface for sending notifications.
            It leverages modern technologies like Vue.js and Vuetify to deliver a seamless experience.
          </p>
          <p class="text-body-1">
            Our goal is to help businesses connect with their customers efficiently, ensuring messages are delivered with reliability and style.
          </p>
        </v-card-text>
        <!-- Botón para cerrar la historia -->
        <v-card-actions>
          <v-btn color="primary" text @click="resetView">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </DefaultLayout>
</template>

<script>
// Importar el componente de layout y axios
import axios from "axios";
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  name: "HomePage", // Nombre del componente
  components: {
    DefaultLayout, // Registro del componente DefaultLayout
  },
  data() {
    return {
      currentView: null, // Controla qué vista se muestra: 'form' o 'story'
      valid: false, // Indica si el formulario es válido
      // Datos del formulario
      formData: {
        to: "", // Número de teléfono
        body: "", // Cuerpo del mensaje
        url: "", // URL de la imagen
        id_Plantilla: "", // ID de la plantilla
      },
      // Reglas para validar los campos del formulario
      rules: {
        required: (value) => !!value || "This field is required", // Valida que el campo no esté vacío
      },
    };
  },
  methods: {
    // Método para alternar entre vistas
    toggleView(view) {
      console.log(`Switching to view: ${view}`);
      this.currentView = view;
    },
    // Método para enviar el formulario
    async submitForm() {
      // Mostrar los datos capturados en la consola
      console.log("Form Data Captured:", this.formData);

      // Validar el formulario antes de enviarlo
      if (this.$refs.form.validate()) {
        try {
          // Mostrar en la consola que se va a enviar la solicitud
          console.log("Sending data to API:", this.formData);

          // Realizar la solicitud POST a la API
          const response = await axios.post(
            "http://localhost:3001/api-messages-wh/sendMessage",
            this.formData
          );

          // Mostrar la respuesta de la API en la consola
          console.log("API Response:", response.data);

          // Mostrar un mensaje de éxito
          alert("Message sent successfully!");
          // Restablecer el formulario
          this.resetForm();
        } catch (error) {
          // Mostrar errores en la consola
          console.error("Error sending message:", error);
          // Mostrar un mensaje de error
          alert("There was an error sending the message. Please try again.");
        }
      } else {
        // Mostrar un mensaje si los campos obligatorios no están completos
        alert("Please fill in all required fields.");
      }
    },
    // Método para restablecer el formulario
    resetForm() {
      console.log("Resetting form...");
      this.currentView = null; // Restablece la vista actual
      this.formData = {
        to: "",
        body: "",
        url: "",
        id_Plantilla: "",
      };
    },
    // Método para restablecer la vista
    resetView() {
      console.log("Resetting view...");
      this.currentView = null;
    },
  },
};
</script>

<style scoped>
/* Estilo personalizado para las tarjetas */
.v-card {
  padding: 16px;
}
</style>

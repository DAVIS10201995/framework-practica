<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <h3>Contacto</h3>
    <input
      type="email"
      v-model="email"
      placeholder="Tu email"
      required
    />
    <textarea
      v-model="message"
      placeholder="Tu mensaje"
      rows="4"
      required
    ></textarea>
    <button type="submit">Enviar</button>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const message = ref('');
const successMessage = ref('');

function submitForm() {
  // Aquí puedes agregar llamada a backend o API para enviar el mensaje
  if (email.value && message.value) {
    successMessage.value = 'Mensaje enviado con éxito. ¡Gracias!';
    email.value = '';
    message.value = '';
    setTimeout(() => (successMessage.value = ''), 4000);
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
}
.contact-form h3 {
  margin-bottom: 1rem;
  color: #2d3748;
}
.contact-form input,
.contact-form textarea {
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  resize: none;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #4299e1;
  outline: none;
}
.contact-form button {
  padding: 0.6rem 1rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.contact-form button:hover {
  background-color: #2b6cb0;
}
.success {
  color: #38a169;
  margin-top: 0.5rem;
  font-weight: 600;
}
</style>

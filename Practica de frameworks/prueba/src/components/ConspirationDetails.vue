<template>
  <div>
    <h2>{{ post.title}}</h2>
    <div class="modal-body">
      <p>{{ extendedText}}</p>
      <img v-if="post.image" :src="`/assets/${post.image}`" :alt="post.title">
      <p class="conspiracy-note">🚨 {{ randomConspiracyNote() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

interface Post {
  title: string;
  description: string;
  image?: string;
}

const props = defineProps<{
  post: {
    title: string | 'hola';
    description: string | 'prueba';
    image?: string | 'prueba';
  }
}>();

const extendedText = computed(() => {
  return `${props.post.description} ${'Más detalles clasificados...'.repeat(3)}`;
});

const randomConspiracyNote = () => {
  const notes = [
    "Documento desclasificado en 2023",
    "Verificado por Anonymous",
    "Fuente: Archivos X"
  ];
  return notes[Math.floor(Math.random() * notes.length)];
};
</script>
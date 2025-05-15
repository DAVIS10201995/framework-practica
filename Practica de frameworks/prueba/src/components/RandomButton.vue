<template>
  <button class="random-btn" @click="selectRandomPost">
    Teoría Aleatoria
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Post } from '@/types'; // Asegúrate de tener esta interfaz definida

const props = defineProps<{
  posts: Post[]
}>();

const emit = defineEmits<{
  (e: 'random', post: Post): void
}>();

function selectRandomPost() {
  if (!props.posts || props.posts.length === 0) return;
  const randomIndex = Math.floor(Math.random() * props.posts.length);
  emit('random', props.posts[randomIndex]);
}
</script>

<style scoped>
.random-btn {
  padding: 0.75rem 1.5rem;
  background-color: #38a169;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.random-btn:hover {
  background-color: #2f855a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
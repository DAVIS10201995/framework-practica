<template>
  <button class="random-btn" @click="chooseRandom">
    Teoría Aleatoria
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ posts: any[] }>();
const emit = defineEmits<{ (e: 'random', post: any): void }>();

function chooseRandom() {
  if (props.posts.length === 0) return;
  const randomIndex = Math.floor(Math.random() * props.posts.length);
  emit('random', props.posts[randomIndex]);
}
</script>

<style scoped>
.random-btn {
  padding: 0.5rem 1rem;
  background-color: #38a169;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.random-btn:hover {
  background-color: #2f855a;
}
</style>

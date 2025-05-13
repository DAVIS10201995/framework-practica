<template>
  <article class="blog-card">
    <img v-if="post.image" :src="`/assets/${post.image}`" :alt="post.title">
    <div class="content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <button @click="$emit('read-more')">Leer más...</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  post: {
    id: number;
    title: string;
    description: string;
    image?: string;
  }
}>();
</script>

<style scoped>
.blog-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}
.blog-card:hover {
  transform: translateY(-5px);
}
</style>
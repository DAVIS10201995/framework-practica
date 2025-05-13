<template>
  <article class="blog-card">
    <img v-if="post.image" :src="`${post.image}`" :alt="post.title" class="card-image">
    <div class="content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <button class="read-more-btn" @click="isModalOpen = true">
        Leer más
        <span class="arrow">→</span>
      </button>
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
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content {
  padding: 1.5rem;
}

h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #1a202c;
}

p {
  margin-bottom: 1.5rem;
  color: #4a5568;
  line-height: 1.5;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.read-more-btn:hover {
  background-color: #3182ce;
  transform: translateY(-1px);
}

.read-more-btn:active {
  transform: translateY(0);
}

.arrow {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.read-more-btn:hover .arrow {
  transform: translateX(2px);
}
</style>
<template>
  <div class="landing-page">
    <header class="hero">
      <h1>🚨 ConspiraTube</h1>
      <p>Descubre las verdades que "ellos" no quieren que sepas</p>
    </header>

    <section class="blog-grid">
      <BlogCard 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlogCard from '@/components/BlogCard.vue';

interface Post {
  id: number;
  title: string;
  description: string;
  image?: string;
}

const posts = ref<Post[]>([
  {
    id: 1,
    title: "¿El hombre realmente llegó a la luna?",
    description: "Analizamos las pruebas fotográficas de la NASA.",
    image: "moon-landing.jpg"
  },
  {
    id: 2,
    title: "Los Illuminati en la música pop",
    description: "Símbolos ocultos en los videos de tus artistas favoritos.",
  }
]);
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0;
  background: #1a1a2e;
  color: white;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
</style>
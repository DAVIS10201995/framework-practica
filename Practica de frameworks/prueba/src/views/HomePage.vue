<template>
  <div class="landing-page">
    <header class="hero">
      <h1>🚨 ConspiraTube</h1>
      <p>Descubre las verdades que "ellos" no quieren que sepas</p>
    </header>

    <section class="controls container">
      <RandomButton :posts="posts" @random="handleRandomPost" />
    </section>

    <section class="blog-grid">
      <BlogCard 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
        @open-modal="openModalWithPost"
      />
    </section>

    <AppModal 
    v-if="selectedPost"
    :show="modalOpen" 
    :post="selectedPost"
    @close="modalOpen = false"
  />

    <ContactForm />

   <AppFooter />

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlogCard from '@/components/BlogCard.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppModal from '@/components/AppModal.vue';

import RandomButton from '@/components/RandomButton.vue';
import ContactForm from '@/components/ContactForm.vue';

import moonLanding from '@/assets/moon-landing.png';
import Illuminati from '@/assets/illuminati-en-musica-pop.png';
import haarp from '@/assets/HAARP.png';
import chemtrails from '@/assets/chemtrails.png';

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
    image: moonLanding
  },
  {
    id: 2,
    title: "Los Illuminati en la música pop",
    description: "Símbolos ocultos en los videos de tus artistas favoritos.",
    image: Illuminati
  },
  {
    id: 3,
    title: "El proyecto HAARP y el control del clima",
    description: "¿Es posible manipular el clima a voluntad?",
    image: haarp
  },
  {
    id: 4,
    title: "La verdad detrás de los chemtrails",
    description: "¿Qué están rociando sobre nosotros?",
    image: chemtrails
  },
  {
    id: 5,
    title: "La historia oculta de la medicina moderna",
    description: "¿Quién se beneficia realmente de nuestras enfermedades?",
  },
  {
    id: 6,
    title: "El misterio de la Atlántida",
    description: "¿Era una civilización avanzada o un mito?",
    image: "atlantis.jpg"
  },
  {
    id: 7,
    title: "La conexión entre los extraterrestres y las antiguas civilizaciones",
    description: "¿Eran nuestros ancestros visitados por seres de otros mundos?",
    image: "aliens.jpg"
  },
  {
    id: 8,
    title: "El encubrimiento del Área 51",
    description: "¿Qué secretos guarda realmente esta base militar?",
    image: "area-51.jpg"
  }
]);


const modalOpen = ref(false);
const selectedPost = ref<Post | null>(null);

function handleRandomPost(post: Post) {
  selectedPost.value = post;
  modalOpen.value = true;
}

function openModalWithPost(post: Post) {
  selectedPost.value = post;
  modalOpen.value = true;
}
</script>      

<style scoped>
.landing-page {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 0;
  background: #1a1a2e;
  color: white;
  width: 100%;
  box-sizing: border-box;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  gap: 1rem;
  flex-wrap: wrap;
}

</style>
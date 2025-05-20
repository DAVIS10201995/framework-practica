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
import medicina from '@/assets/la historia oculta de la medicina.png';
import antartida from '@/assets/el misterio de la antartida.png';
import encubrimiento from '@/assets/el encubriiento del area 51.png';
import conexion from '@/assets/conexionn entre los extraterrestres.png';

interface Post {
  id: number;
  title: string;
  description: string;
  image?: string;
  fullContent?: {
    introduction: string;
    explanation?: string;
    evidences: string[];
    conclusion: string;
  };
}

const posts = ref<Post[]>([
  {
    id: 1,
    title: "¿El hombre realmente llegó a la luna?",
    description: "Analizamos las pruebas fotográficas de la NASA.",
    image: moonLanding,
    fullContent: {
      introduction: "La llegada del hombre a la luna ha sido objeto de controversia desde 1969.",
      explanation: "A lo largo de los años, han surgido numerosas teorías que cuestionan la veracidad de las misiones lunares. Algunos creen que las imágenes fueron manipuladas y que la NASA nunca envió astronautas a la luna. Otros argumentan que las condiciones en la luna son imposibles de replicar en un estudio de grabación.",
      evidences: [
        "Fotografías de la NASA que muestran inconsistencias.",
        "Testimonios de supuestos ex-empleados de la NASA."
      ],
      conclusion: "A pesar de las teorías, la evidencia sigue siendo insuficiente para probar un engaño."
    }
  },
  {
    id: 2,
    title: "Los Illuminati en la música pop",
    description: "Símbolos ocultos en los videos de tus artistas favoritos.",
    image: Illuminati,
    fullContent: {
      introduction: "Los Illuminati son un grupo supuestamente secreto que ha sido objeto de numerosas teorías de conspiración.",
      explanation: "Se dice que han infiltrado la industria de la música para promover su agenda. Muchos videos musicales contienen símbolos que los teóricos creen que son pruebas de esta infiltración.",
      evidences: [
        "Análisis de videos musicales que muestran símbolos ocultos.",
        "Testimonios de artistas que afirman haber sido contactados por los Illuminati."
      ],
      conclusion: "Aunque hay muchas teorías, la evidencia concreta que vincula a los Illuminati con la música pop sigue siendo escasa."
    }
  },
  {
    id: 3,
    title: "El proyecto HAARP y el control del clima",
    description: "¿Es posible manipular el clima a voluntad?",
    image: haarp,
    fullContent: {
      introduction: "El proyecto HAARP ha sido objeto de numerosas teorías de conspiración relacionadas con el control del clima.",
      explanation: "Se dice que HAARP tiene la capacidad de modificar el clima y provocar desastres naturales. Sin embargo, la mayoría de los científicos desmienten estas afirmaciones.",
      evidences: [
        "Documentos desclasificados que explican el propósito de HAARP.",
        "Testimonios de ex-empleados que niegan las teorías de conspiración."
      ],
      conclusion: "A pesar de las afirmaciones, no hay evidencia concreta que respalde la idea de que HAARP pueda controlar el clima."
    }
  },
  {
    id: 4,
    title: "La verdad detrás de los chemtrails",
    description: "¿Qué están rociando sobre nosotros?",
    image: chemtrails,
    fullContent: {
      introduction: "Los chemtrails son una teoría de conspiración que sugiere que los rastros dejados por los aviones son en realidad productos químicos rociados intencionalmente.",
      explanation: "Los defensores de esta teoría creen que los gobiernos están utilizando estos químicos para controlar el clima, manipular la población o llevar a cabo experimentos secretos.",
      evidences: [
        "Testimonios de pilotos que afirman haber sido instruidos para rociar químicos.",
        "Análisis de muestras de aire que supuestamente muestran sustancias inusuales."
      ],
      conclusion: "Sin embargo, la comunidad científica sostiene que los chemtrails son simplemente contrails, o estelas de condensación, que se forman cuando el vapor de agua se congela en cristales de hielo."
    }
  },
  {
    id: 5,
    title: "La historia oculta de la medicina moderna",
    description: "¿Quién se beneficia realmente de nuestras enfermedades?",
    image: medicina,
    fullContent: {
      introduction: "La medicina moderna ha avanzado a pasos agigantados, pero ¿quién se beneficia realmente de estos avances?",
      explanation: "Algunos críticos argumentan que las grandes farmacéuticas priorizan las ganancias sobre la salud de los pacientes, promoviendo tratamientos en lugar de curas.",
      evidences: [
        "Estudios que muestran la efectividad de tratamientos alternativos que son ignorados por la medicina convencional.",
        "Testimonios de médicos que han sido presionados para recetar medicamentos costosos."
      ],
      conclusion: "Es crucial cuestionar el sistema y buscar alternativas que realmente beneficien a los pacientes."
    }
  },
  {
    id: 6,
    title: "El misterio de la Atlántida",
    description: "¿Era una civilización avanzada o un mito?",
    image: antartida,
    fullContent: {
      introduction: "La Atlántida es una legendaria isla mencionada por primera vez por Platón.",
      explanation: "Se dice que era una civilización avanzada que desapareció bajo el mar. Muchos creen que su historia es solo un mito, mientras que otros buscan evidencia de su existencia.",
      evidences: [
        "Relatos de antiguos navegantes que mencionan una isla próspera en el océano.",
        "Investigaciones arqueológicas en el Mediterráneo que sugieren la existencia de civilizaciones avanzadas."
      ],
      conclusion: "La verdad sobre la Atlántida sigue siendo un misterio, alimentando teorías y especulaciones."
    }
  },
  {
    id: 7,
    title: "La conexión entre los extraterrestres y las antiguas civilizaciones",
    description: "¿Eran nuestros ancestros visitados por seres de otros mundos?",
    image: conexion,
    fullContent: {
      introduction: "A lo largo de la historia, ha habido numerosos relatos de encuentros con seres de otros mundos.",
      explanation: "Algunos teóricos sugieren que estas visitas han influido en el desarrollo de las civilizaciones humanas.",
      evidences: [
        "Relatos de antiguos textos sumerios que mencionan dioses que bajaron del cielo.",
        "Evidencias arqueológicas de estructuras que parecen haber sido construidas con tecnología avanzada."
      ],
      conclusion: "Aunque la idea de que los extraterrestres han visitado la Tierra es fascinante, la evidencia sigue siendo en gran medida anecdótica."
    }
  },
  {
    id: 8,
    title: "El encubrimiento del Área 51",
    description: "¿Qué secretos guarda realmente esta base militar?",
    image: encubrimiento,
    fullContent: {
      introduction: "El Área 51 es una instalación militar secreta en Nevada que ha sido objeto de teorías de conspiración durante décadas.",
      explanation: "Se cree que el gobierno de los EE. UU. está llevando a cabo experimentos con tecnología extraterrestre en esta base.",
      evidences: [
        "Documentos desclasificados que mencionan el Área 51.",
        "Testimonios de ex-empleados que afirman haber trabajado en proyectos secretos."
      ],
      conclusion: "A pesar de la especulación, la verdadera naturaleza de las actividades en el Área 51 sigue siendo un misterio."
    }
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
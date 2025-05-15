<template>
  <transition name="modal-fade">
    <div class="modal-overlay" v-if="show" @click.self="close">
      <div class="modal-container">
        <button class="modal-close" @click="close">&times;</button>
        
        <div class="modal-content">
          <h2>{{ post?.title }}</h2> <!-- Cambiado de currentPost a post -->
          
          <div class="modal-image-container" v-if="post?.image">
            <img :src="post.image" :alt="post.title"> <!-- Cambiado de currentPost a post -->
          </div>
          
          <div class="modal-body">
            <p>{{ extendedDescription }}</p>
            <div class="conspiracy-footer">
              <span class="conspiracy-note">🚨 {{ randomNote }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

interface Post { // Define la interfaz Post
  title: string;
  description: string;
  image?: string;
}

const props = defineProps<{
  show: boolean;
  post: Post | null; // Usa la interfaz Post
}>();

const emit = defineEmits(['close']);

const notes = [
  "Fuente: Documentos desclasificados",
  "Confirmado por 3 agentes anónimos",
  "Archivo confidencial - Nivel 5"
];

const randomNote = computed(() => {
  return notes[Math.floor(Math.random() * notes.length)];
});

const extendedDescription = computed(() => {
  const base = props.post?.description || '';
  return `${base} ${'[CONTENIDO CLASIFICADO] '.repeat(3)}`;
});

function close() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.modal-content {
  padding: 2rem;
}

.modal-content h2 {
  margin-top: 0;
  color: #1a1a2e;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

.modal-image-container {
  margin: 1.5rem 0;
}

.modal-image-container img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
}

.conspiracy-note {
  display: inline-block;
  background: #fff9c4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-top: 1.5rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
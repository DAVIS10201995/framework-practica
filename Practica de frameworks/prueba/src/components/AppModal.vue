<template>
  <div class="modal-details">
    <h2 class="modal-title">{{ post.title }}</h2>
    
    <div class="modal-image-container" v-if="post.image">
      <img :src="`/assets/${post.image}`" :alt="post.title" class="modal-image">
    </div>
    
    <div class="modal-text">
      <p class="description">{{ extendedText }}</p>
      <div class="conspiracy-footer">
        <span class="conspiracy-tag">🚨 {{ randomConspiracyNote() }}</span>
        <button class="close-btn" @click="$emit('close')">
          Cerrar
          <span class="arrow">←</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps<{
  post: {
    title: string;
    description: string;
    image?: string;
  }
}>();

const extendedText = computed(() => {
  return `${props.post.description} ${'[Más detalles clasificados...] '.repeat(2)}`;
});

const randomConspiracyNote = () => {
  const notes = [
    "Documento desclasificado",
    "Fuente anónima verificada",
    "Archivo confidencial",
    "Teoría confirmada por 3 agentes"
  ];
  return notes[Math.floor(Math.random() * notes.length)];
};
</script>

<style scoped>
.modal-details {
  padding: 0.5rem;
}

.modal-title {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #1a202c;
  font-size: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.modal-image-container {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.conspiracy-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.conspiracy-tag {
  background: #fefcbf;
  color: #744210;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.close-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #e2e8f0;
  color: #4a5568;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: #cbd5e0;
  transform: translateX(-2px);
}

.close-btn .arrow {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.close-btn:hover .arrow {
  transform: translateX(-3px);
}
</style>
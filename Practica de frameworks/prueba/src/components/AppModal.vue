<template>
  <transition name="modal-fade">
    <div class="modal-overlay" v-if="show" @click.self="closeModal">
      <div class="modal-container">
        <button class="modal-close" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div v-if="post" class="modal-content">
          <h2 class="modal-title">{{ post.title }}</h2>
          
          <div class="modal-image-container" v-if="post.image">
            <img :src="post.image" :alt="post.title" class="modal-image">
          </div>
          
          <div class="modal-body">
            <p class="modal-description">{{ post.description }}</p>
            
            <div v-if="post.fullContent" class="extended-content">
              <h3 class="section-title">🔍 {{ post.fullContent.introduction }}</h3>
              
              <div v-if="post.fullContent.explanation" class="explanation">
                <p>{{ post.fullContent.explanation }}</p>
              </div>
              
              <h4 class="evidence-title">📌 Evidencias:</h4>
              <ul class="evidence-list">
                <li v-for="(evidence, index) in post.fullContent.evidences" :key="index">
                  {{ evidence }}
                </li>
              </ul>
              
              <h4 class="conclusion-title">⚠️ Conclusión:</h4>
              <p class="conclusion-text">{{ post.fullContent.conclusion }}</p>
            </div>
            
            <div class="conspiracy-note">
              🚨 {{ randomNote }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface Post {
  id?: number;
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

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true
    },
    post: {
      type: Object as () => Post | null,
      default: null
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const notes = [
      "Documento desclasificado",
      "Fuente anónima verificada",
      "Archivo confidencial",
      "Teoría confirmada por 3 agentes"
    ];

    const randomNote = computed(() => 
      notes[Math.floor(Math.random() * notes.length)]
    );

    const closeModal = () => {
      emit('close');
    };

    return {
      randomNote,
      closeModal
    };
  }
});
</script>

<style scoped>
/* Estilos modernizados */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
}

.modal-container {
  background: #ffffff;
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.05);
}

.modal-close svg {
  color: #4a5568;
}

.modal-content {
  padding: 2.5rem;
}

.modal-title {
  font-size: 1.8rem;
  color: #1a202c;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.modal-image-container {
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
}

.modal-description {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.extended-content {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.section-title {
  font-size: 1.4rem;
  color: #2d3748;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.explanation {
  background: #f8fafc;
  padding: 1.2rem;
  border-radius: 10px;
  margin: 1.2rem 0;
  border-left: 4px solid #4299e1;
}

.evidence-title,
.conclusion-title {
  font-size: 1.2rem;
  color: #2d3748;
  margin: 1.5rem 0 0.8rem;
  font-weight: 600;
}

.evidence-list {
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
}

.evidence-list li {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.6;
  color: #4a5568;
}

.evidence-list li::before {
  content: "•";
  color: #e53e3e;
  position: absolute;
  left: 0;
  font-size: 1.4rem;
  line-height: 1;
}

.conclusion-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  padding: 0.8rem;
  background: #f0fff4;
  border-radius: 8px;
  border-left: 4px solid #48bb78;
}

.conspiracy-note {
  display: inline-block;
  background: #fffaf0;
  color: #9c4221;
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  font-weight: 500;
  border: 1px solid #feebc8;
}

/* Transiciones */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
<template>
  <div class="search-bar">
    <input 
      type="text" 
      placeholder="Buscar teoría..." 
      v-model="searchTerm" 
      @input="$emit('update:search', searchTerm)" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const searchTerm = ref('');
</script>

<style scoped>
.search-bar input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>

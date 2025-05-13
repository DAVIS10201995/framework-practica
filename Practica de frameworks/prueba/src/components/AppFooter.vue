<template>
  <footer class="footer">
    <div class="footer-content">
      <h2>👁️ ConspiraTube</h2>
      <p>La verdad está ahí fuera... pero no dura mucho online.</p>
      <p class="disclaimer">
        Este sitio presenta contenido con fines informativos y de entretenimiento. Las opiniones aquí expresadas no representan hechos verificados.
      </p>
      <p class="disclaimer">
        No nos hacemos responsables de las acciones que tomes basadas en la información presentada.
      </p>
      <p class="disclaimer">
        Correo de contacto: TeoriasConspirativas@gmail.com
      </p>
      <p class="copyright">
        © 2025 ConspiraTube. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
  background-color: #0d0d0d;
  color: #ccc;
  padding: 3rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #222;
}

.footer h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-links {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

.disclaimer {
  margin-top: 1rem;
  font-style: italic;
  color: #888;
}

.copyright {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #666;
}
</style>

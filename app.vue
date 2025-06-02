<template>
  <div class="bg-visuals">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
.app-wrapper {
  background: linear-gradient(145deg, #f4f2f8, #eae4f4);
  min-height: 100vh;
}
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/noise.png');
  opacity: 0.05;
  pointer-events: none;
  z-index: -1;
}
body {
  background: linear-gradient(160deg, #f9f6ff, #e9dcf6, #f6f2ff);
  background-attachment: fixed;
}
</style>
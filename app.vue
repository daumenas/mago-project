<template>
  <div class="page-background">
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
.page-background {
  background: linear-gradient(
    to bottom,
    #0d0b10 0%,
    #1a0e1f 10%,
    #22142b 25%,
    #2c1a3c 50%,
    #3c2452 75%,
    #f1edf8 100%
  ) !important;
  min-height: 100vh;
  width: 100%;
}
</style>
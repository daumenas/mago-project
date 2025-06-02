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
body {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  color: #f8f6fa;
  line-height: 1.6;
  font-size: 1.05rem;
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
    #2b1a36 40%,
    #372245 55%,
    #432d55 60%,
    #4d3561 65%,
    #563b6c 70%,
    #f1edf8 80%
  ) !important;
  min-height: 100vh;
  width: 100%;
}
h1, h2, h3, h4 {
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  font-weight: 600;
  line-height: 1.2;
}

h1 { font-size: 2.8rem; }
h2 { font-size: 2.2rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.25rem; }
a, .accent {
  color: #d3b6ff;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #a87eff;
}
.subtext {
  color: #c2b4d7;
  font-size: 0.95rem;
}
</style>
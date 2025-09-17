<template>
  <section class="logo-strip">
    <h3 class="logo-heading">Nuestros Clientes</h3>
    <div class="logo-container">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo.src"
        :alt="logo.alt"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  logos: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.logo-strip {
  background-color: rgba(255, 255, 255, 0.04);
  /* padding: 2rem 1rem; */
  /* margin: 4rem auto; */
  border-radius: 12px;
  width: 100%;
}

.logo-heading {
  color: #caaeff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.logo-heading::after {
  content: '';
  display: block;
  margin: 1rem auto 0;
  width: 850px;
  height: 3px;
  background-color: white;
  opacity: 0.6;
}

.logo-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.logo-container img {
  height: 80px;
  width: 120px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.logo-container img:hover {
  opacity: 1;
}
</style>

<template>
  <section class="hero">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/homepage/trailer.mp4" type="video/mp4" />
    </video>

    <div class="hero-overlay">
      <div class="hero-content">
        <h1>Visual Storytelling That Inspires</h1>
        <p>High-end media production for music, film, and commercial projects</p>
        <a href="#portfolio" class="cta-button">Explore Portfolio</a>
      </div>
    </div>
  </section>
  <QuoteSection quote="El storytelling es parte vital en el funcionamiento de la maquinaria de Mago. 
Imprimimos a todo lo que hacemos un sello caracterís co que solo se puede lograr 
a través de crear una historia entorno a y para todas nuestras producciones, 
aportándole un toque cinematográfico vanguardista que va desde el papel, hasta la 
imagen. " />
</template>

<script setup>
import QuoteSection from '~/components/QuoteSection.vue'
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(20, 10, 30, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  color: white;
  animation: fadeIn 1.5s ease-out;
  padding: 1rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.cta-button {
  background: var(--primary-color, #6a0dad);
  padding: 0.75rem 1.5rem;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
  display: inline-block;
}

.cta-button:hover {
  background: #4e2392;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 1.5rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .hero-overlay {
    padding: 1rem;
  }
}
</style>

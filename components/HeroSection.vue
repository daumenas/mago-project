<template>
  <section class="hero" id="hero">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/homepage/trailer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-overlay">
      <div class="hero-content">
        <h1>Visual Storytelling That Inspires</h1>
        <p>High-end media production for music, film, and commercial projects</p>
        <a href="#portfolio" class="cta-button">Explore Portfolio</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0d0b10;
  padding: 4rem 1rem;
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(20, 10, 30, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
}

.hero-content {
  color: white;
  max-width: 800px;
  animation: fadeIn 1.5s ease-out;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.cta-button {
  background: var(--primary-color, #6a0dad);
  padding: 0.75rem 1.5rem;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #4e2392;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>

<template>
    <section id="portfolio" class="section">
      <div class="container">
        <h2 class="section-title">Portfolio</h2>
  
        <div class="poster-grid">
          <div
            v-for="(poster, index) in posters"
            :key="index"
            class="poster-card"
            @click="openPDF(poster.pdf)"
          >
            <img :src="poster.image" :alt="poster.title" />
            <div class="poster-overlay">{{ poster.title }}</div>
          </div>
        </div>
      </div>
      
    </section>
  </template>
  
  <script setup>
  const posters = [
    { title: 'Rise Up', image: '/portfolio/test1/gopro2.jpg', pdf: '/portfolio/riseup.pdf' },
    { title: 'Tech Launch', image: '/portfolio/test1/gopro2.jpg', pdf: '/portfolio/tech.pdf' },
    { title: 'Noire', image: '/portfolio/test1/gopro2.jpg', pdf: '/portfolio/noire.pdf' },
  ]
  
  const openPDF = (pdf) => {
    window.open(pdf, '_blank')
  }
  </script>
  
  <style scoped>
  .section {
  background: transparent;
  padding: 4rem 1rem;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #caaeff;
  }
  
.portfolio-section {
  background: #432d55;
  padding: 3rem 1rem 2rem;
  text-align: center;
}

.portfolio-section h2,
.portfolio-section .section-title {
  color: #caaeff;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.poster-card {
  position: relative;
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.poster-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
}

.poster-card img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.poster-card:hover img {
  filter: grayscale(0%);
}

.poster-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.25rem 1rem;
  background: linear-gradient(to top, rgba(15, 0, 25, 0.9), rgba(0, 0, 0, 0));
  color: #e8d7ff;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  opacity: 0;
  transform: translateY(20%);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.poster-card:hover .poster-overlay {
  opacity: 1;
  transform: translateY(0%);
}
  </style>
  
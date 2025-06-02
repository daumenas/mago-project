<template>
    <section id="portfolio" class="section">
      <div class="container">
        <h2 class="section-title">Our Portfolio</h2>
  
        <div class="poster-grid">
          <div
            v-for="(poster, index) in posters"
            :key="index"
            class="poster-tile"
            @click="openPDF(poster.pdf)"
          >
            <img :src="poster.image" :alt="poster.title" class="poster-img" />
            <div class="poster-title">{{ poster.title }}</div>
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
    padding: 4rem 1rem;
    background: #fff;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    color: var(--primary-color, #6a0dad);
  }
  
  .poster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
  
  .poster-tile {
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .poster-tile:hover {
    transform: scale(1.03);
  }
  
  .poster-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  }
  
  .poster-title {
    margin-top: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    color: #333;
  }
  </style>
  
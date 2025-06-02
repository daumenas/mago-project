<template>
    <section id="equipment" class="section">
      <div class="container">
        <h2 class="section-title">Equipment Rental</h2>
        <p class="section-description">
          Click any item to view its gallery.
        </p>
  
        <div class="equipment-grid">
          <div
            v-for="(item, index) in equipment"
            :key="index"
            class="equipment-card"
            @click="openGallery(index)"
          >
            <img :src="item.images[0]" :alt="item.name" />
            <h3>{{ item.name }}</h3>
            <p>{{ item.category }}</p>
          </div>
        </div>
  
        <div class="catalog-download">
          <a href="/equipment/catalog.pdf" target="_blank" class="catalog-btn">
            Download Full Equipment Catalog (PDF)
          </a>
        </div>
  
        <div v-if="activeIndex !== null" class="lightbox" @click.self="closeGallery">
          <div class="lightbox-content">
            <img
              :src="equipment[activeIndex].images[galleryIndex]"
              :alt="equipment[activeIndex].name"
            />
            <div class="lightbox-caption">
              <h4>{{ equipment[activeIndex].name }}</h4>
              <p>{{ galleryIndex + 1 }} of {{ equipment[activeIndex].images.length }}</p>
            </div>
            <div class="lightbox-controls">
              <button @click.stop="prevImage">‹</button>
              <button @click.stop="nextImage">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const equipment = [
    {
      name: 'RED Komodo 6K',
      category: 'Camera',
      images: [
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/shinobi2.jpg'
      ]
    },
    {
      name: 'Aputure 600D',
      category: 'Lighting',
      images: [
        '/equipment/aputure/1.jpg',
        '/equipment/aputure/2.jpg',
        '/equipment/aputure/3.jpg'
      ]
    },
    {
      name: 'RED Komodo 6K',
      category: 'Camera',
      images: [
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/shinobi2.jpg'
      ]
    },
    {
      name: 'RED Komodo 6K',
      category: 'Camera',
      images: [
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/shinobi2.jpg'
      ]
    },
    {
      name: 'RED Komodo 6K',
      category: 'Camera',
      images: [
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/shinobi2.jpg'
      ]
    },
    {
      name: 'RED Komodo 6K',
      category: 'Camera',
      images: [
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/gopro2.jpg',
        '/portfolio/test1/shinobi2.jpg'
      ]
    },
  ]
  
  const activeIndex = ref(null)
  const galleryIndex = ref(0)
  
  const openGallery = (index) => {
    activeIndex.value = index
    galleryIndex.value = 0
  }
  
  const closeGallery = () => {
    activeIndex.value = null
  }
  
  const nextImage = () => {
    const total = equipment[activeIndex.value].images.length
    galleryIndex.value = (galleryIndex.value + 1) % total
  }
  
  const prevImage = () => {
    const total = equipment[activeIndex.value].images.length
    galleryIndex.value = (galleryIndex.value - 1 + total) % total
  }
  </script>
  
  <style scoped>
.section {
  background: transparent;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #d3b6ff;
}

.section-description {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1rem;
  color: #cbb8e8;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.equipment-card {
  background: #faf6ff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 220px;
}

.equipment-card:hover {
  transform: translateY(-6px);
}

.equipment-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.equipment-card:hover img {
  filter: grayscale(0%);
}

.equipment-card h3 {
  margin: 0.75rem 0 0.25rem;
  font-size: 1.1rem;
  color: #2e1442;
}

.equipment-card p {
  color: #5f4a72;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.catalog-download {
  text-align: center;
  margin-top: 3rem;
}

.catalog-btn {
  background: var(--primary-color, #6a0dad);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.catalog-btn:hover {
  background: #4e2392;
}

/* Lightbox remains unchanged except background tint is softened */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(10, 5, 20, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 80%;
  text-align: center;
  pointer-events: auto;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 6px;
}

.lightbox-caption {
  margin-top: 1rem;
  color: white;
}

.lightbox-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
  pointer-events: none;
}

.lightbox-controls button {
  pointer-events: auto;
  background: var(--primary-color, #6a0dad);
  color: white;
  border: none;
  font-size: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-controls button:hover {
  background: #4e2392;
}

  </style>
  
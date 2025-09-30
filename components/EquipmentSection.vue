<template>
    <section id="equipment" class="section">
      <div class="container">
        <h2 class="section-title">Alquiler de equipos</h2>
        <p class="section-description">
          Haz clic en cualquier elemento para ver su galería.
        </p>
        <div class="catalog-download">
          <a href="/equipment/Rental-Catalog.pdf" target="_blank" class="catalog-btn">
            Catálogo completo de equipos. (PDF)
          </a>
        </div>
  
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
      name: 'Adaptadop Sony XLR',
      category: 'Cámaras',
      images: [
        '/equipment/adaptadorsony/adaptadorsony1.jpg',
        '/equipment/adaptadorsony/adaptadorsony2.jpg',
        '/equipment/adaptadorsony/adaptadorsony3.jpg',
        '/equipment/adaptadorsony/adaptadorsony4.jpg',
        '/equipment/adaptadorsony/adaptadorsony5.jpg',
      ]
    },
        {
      name: 'Sony FX30',
      category: 'Cámaras',
      images: [
        '/equipment/fx30/fx30.jpg',
        '/equipment/fx30/fx302.jpg',
        '/equipment/fx30/fx303.jpg'
      ]
    },
    {
      name: 'Sony FX3',
      category: 'Cámaras',
      images: [
        '/equipment/fx3/fx3.jpg',
        '/equipment/fx3/fx3-2.jpg',
      ]
    },
        {
      name: 'Go Pro Hero 9 + Accesorios',
      category: 'Cámaras',
      images: [
        '/equipment/gopro/gopro.jpg',
        '/equipment/gopro/gopro2.jpg',
        '/equipment/gopro/gopro3.jpg',
        '/equipment/gopro/gopro4.jpg',
      ]
    },
    {
      name: 'Neewer Top Handle',
      category: 'Accesorios para cámaras',
      images: [
        '/equipment/tophandle/tophandle.jpg',
        '/equipment/tophandle/tophandle-2.jpg',
        '/equipment/tophandle/tophandle-3.jpg'
      ]
    },
        {
      name: 'Neewer F100',
      category: 'Accesorios para cámaras',
      images: [
        '/equipment/neewerf/neewerf110.jpg',
        '/equipment/neewerf/neewerf1100-2.jpg',
        '/equipment/neewerf/neewerf1100-3.jpg'
      ]
    },
        {
      name: 'Shinobi',
      category: 'Accesorios para cámaras',
      images: [
        '/equipment/shinobi/shinobi.jpg',
        '/equipment/shinobi/shinobi2.jpg',
        '/equipment/shinobi/shinobi3.jpg'
      ]
    },
        {
      name: 'Sony 24-70MM',
      category: 'Accesorios para cámaras',
      images: [
        '/equipment/sony24/sony24-1.jpg',
        '/equipment/sony24/sony24-2.jpg',
        '/equipment/sony24/sony24-3.jpg',
        '/equipment/sony24/sony24-4.jpg',
        '/equipment/sony24/sony24-5.jpg',
      ]
    },
        {
      name: 'Tamron 17-28MM',
      category: 'Accesorios para cámaras',
      images: [
        '/equipment/tamron/tamron-1.jpg',
        '/equipment/tamron/tamron-2.jpg',
        '/equipment/tamron/tamron-3.jpg'
      ]
    },
        {
      name: 'Sony Telefono',
      category: 'Accesorios para cámaras',
      images: [
        '/equipment/telefono/telefono-1.jpg',
        '/equipment/telefono/telefono-2.jpg',
        '/equipment/telefono/telefono-3.jpg'
      ]
    },
            {
      name: 'RGB Blink Mixer - Switcher',
      category: 'Accesorios de video profesional',
      images: [
        '/equipment/rgb/rgb-1.jpg',
        '/equipment/rgb/rgb-2.jpg',
        '/equipment/rgb/rgb-3.jpg'
      ]
    },
            {
      name: 'Neewer Bicolor LED',
      category: 'Iluminación para video y fotografía',
      images: [
        '/equipment/led/led-1.jpg',
        '/equipment/led/led-2.jpg',
        '/equipment/led/led-3.jpg',
        '/equipment/led/led-4.jpg',
        '/equipment/led/led-5.jpg',
        '/equipment/led/led-6.jpg',
        '/equipment/led/led-7.jpg',
        '/equipment/led/led-8.jpg',
        '/equipment/led/led-9.jpg',
        '/equipment/led/led-10.jpg',
        '/equipment/led/led-11.jpg',
      ]
    },
        {
      name: 'Ronin S4 Pro',
      category: 'Estabilizador',
      images: [
        '/equipment/ronin/ronin.jpg',
        '/equipment/ronin/ronin2.jpg',
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
  font-size: 2rem;
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
  width: 220px;
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
  margin-bottom: 3rem;
  width: 100%;
}

.catalog-btn {
  display: inline-block;
  background: var(--primary-color, #6a0dad);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
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
  
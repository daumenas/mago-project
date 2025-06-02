<template>
  <section id="development" class="section development-section">
    <div class="container">
      <h2 class="section-title">Under Development</h2>

      <Transition name="fade-slide" mode="out-in">
        <div :key="selectedCategory ? 'posters' : 'categories'">
          <div v-if="!selectedCategory" class="category-grid">
            <div
              v-for="(cat, index) in categories"
              :key="index"
              class="category-tile"
              @click="selectCategory(cat)"
            >
              <img :src="cat.image" :alt="cat.title" class="tile-image" />
              <div class="tile-title">{{ cat.title }}</div>
            </div>
          </div>

          <div v-else>
            <button class="back-btn" @click="selectedCategory = null">← Back to Categories</button>
            <div class="poster-grid">
              <div
                v-for="(poster, i) in selectedCategory.posters"
                :key="i"
                class="poster-card"
                @click="goToPDF(poster.pdf)"
              >
                <img :src="poster.image" :alt="poster.title" />
                <p class="poster-title">{{ poster.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

  
  <script setup>
  const selectedCategory = ref(null)
  
  const categories = [
    {
      title: 'Music Videos',
      image: '/portfolio/test1/gopro2.jpg',
      posters: [
        { title: 'Rise Up', image: '/portfolio/test1/gopro2.jpg', pdf: '/portfolio/music/riseup.pdf' },
        { title: 'Firelight', image: '/portfolio/test1/gopro2.jpg', pdf: '/portfolio/music/firelight.pdf' }
      ]
    },
    {
      title: 'Commercials',
      image: '/portfolio/test2/sony24-2.jpg',
      posters: [
        { title: 'Tech Launch', image: '/portfolio/test2/sony24-2.jpg', pdf: '/portfolio/commercials/tech.pdf' },
        { title: 'Energy Boost', image: '/portfolio/test2/sony24-2.jpg', pdf: '/portfolio/commercials/energy.pdf' }
      ]
    },
    {
      title: 'Short Films',
      image: '/portfolio/test1/shinobi2.jpg',
      posters: [
        { title: 'Noire', image: '/portfolio/test1/shinobi2.jpg', pdf: '/portfolio/shortfilms/noire.pdf' }
      ]
    },
    {
      title: 'Documentaries',
      image: '/portfolio/test2/sony24-2.jpg',
      posters: [
        { title: 'Behind the Lens', image: '/portfolio/documentaries/behind.jpg', pdf: '/portfolio/documentaries/behind.pdf' }
      ]
    }
  ]
  
  const selectCategory = (category) => {
    selectedCategory.value = category
  }
  
  const goToPDF = (pdf) => {
    window.open(pdf, '_blank')
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
  font-weight: 700;
  margin-bottom: 2rem;
  color: #caaeff;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.category-tile {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
  max-width: 260px;
}

.category-tile:hover {
  transform: scale(1.05);
}

.tile-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.category-tile:hover .tile-image {
  filter: grayscale(0%);
}

.tile-title {
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #f0e9fd;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.poster-card {
  cursor: pointer;
  text-align: center;
  max-width: 280px;
}

.poster-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, filter 0.4s ease;
  filter: grayscale(100%);
}

.poster-card:hover img {
  filter: grayscale(0%);
  transform: scale(1.03);
}


.poster-title {
  margin-top: 0.75rem;
  font-weight: 600;
  color: #e8d7ff;
  font-size: 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

.back-btn {
  margin-bottom: 2rem;
  background: none;
  border: none;
  color: #caaeff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
}

.back-btn:hover {
  color: #a87eff;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}


  </style>
  
<template>
  <section id="portfolio" class="section development-section">
    <div class="container">
      <h2 class="section-title">PORTAFOLIO</h2>

      <Transition name="fade-slide" mode="out-in">
        <div :key="currentView">
          <!-- Category Selector -->
          <div v-if="!selectedCategory && !selectedPoster" class="category-grid">
            <div v-for="(cat, index) in categories" :key="index" class="category-tile" @click="selectCategory(cat)">
              <img :src="cat.image" :alt="cat.title" class="tile-image" />
              <div class="tile-title">{{ cat.title }}</div>
            </div>
          </div>

          <!-- Poster Grid -->
          <div v-else-if="selectedCategory && !selectedPoster">
            <button class="back-btn" @click="selectedCategory = null">← Volver a Categorías</button>
            <div class="poster-grid">
              <div v-for="(poster, i) in selectedCategory.posters" :key="i" class="poster-card" @click="selectPoster(poster)">
                <img :src="poster.image" :alt="poster.title" />
                <p class="poster-title">{{ poster.title }}</p>
              </div>
            </div>
          </div>

          <!-- Poster Detail via Component -->
          <CategoryDetail v-else :poster="selectedPoster" @close="selectedPoster = null" />
        </div>
      </Transition>
    </div>
  </section>

  <LogoSection :logos="brandLogos" />
</template>

<script setup>
import CategoryDetail from '~/components/CategoryDetail.vue'

const categories = [
  {
    title: 'Producciones Originales',
    image: '/portfolio/original.png',
    posters: [
      {
        title: 'Otro Viernes De Locos',
        image: '/portfolio/test1/testposter.jpg',
        description: 'En esta entrega, Jamie Lee Curtis y Lindsay Lohan vuelven a interpretar a Tess y Anna Coleman. La historia continúa años después de que Tess (Curtis) y Anna (Lohan) sufrieran una crisis de identidad. Anna tiene ahora su propia hija y pronto tendrá una hijastra. Mientras afrontan los innumerables retos que surgen cuando dos familias se fusionan, Tess y Anna descubren que el rayo podría, de hecho, caer dos veces en el mismo lugar. ',
        director: 'Nisha Ganatra',
        producer: 'Kristin Burr, Andrew Gunn',
        cast: 'Jamie Lee Curtis, Lindsay Lohan, Mark Harmon, Chad Michael Murray, Christina Vidal Mitchell, Haley Hudson, Rosalind Chao'
      }
    ]
  },
  {
    title: 'Servicios de Producción',
    image: '/portfolio/services.png',
    posters: [
      {
        title: 'The Uprising',
        image: '/portfolio/test1/gopro2.jpg',
        description: 'A revolutionary tale set in 2090.',
        director: 'Rosa Luna',
        cast: 'Daniel Vega, Marie Lee'
      }
    ]
  }
]

import LogoSection from '~/components/LogoSection.vue'

const brandLogos = [
  { src: '/logo/logo11.webp', alt: 'Logo 1' },
  { src: '/logo/logo11.webp', alt: 'Logo 2' },
  { src: '/logo/logo11.webp', alt: 'Logo 3' },
  { src: '/logo/logo11.webp', alt: 'Logo 4' },
]

const selectedCategory = ref(null)
const selectedPoster = ref(null)

const currentView = computed(() =>
  selectedPoster.value
    ? 'poster-detail'
    : selectedCategory.value
    ? 'poster-grid'
    : 'category-grid'
)

const selectCategory = (cat) => {
  selectedCategory.value = cat
}

const selectPoster = (poster) => {
  selectedPoster.value = poster
}
</script>

<style scoped>
.section {
  padding: 4rem 1rem;
}
.category-grid, .poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
.category-tile, .poster-card {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
  max-width: 450px;
}
.category-tile:hover, .poster-card:hover {
  transform: scale(1.05);
}
.tile-image, .poster-card img {
  width: 100%;
  border-radius: 12px;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  color: #caaeff;
  margin-bottom: 2rem;
}
.poster-title {
  font-size: 1.125rem;
    line-height: 1.5rem;
    color: white;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
}
.back-btn {
  background: none;
  border: none;
  color: var(--primary-color, #6a0dad);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
}
</style>

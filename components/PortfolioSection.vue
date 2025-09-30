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
              <div v-for="(poster, i) in selectedCategory.posters" :key="i" class="poster-card inside-poster" @click="selectPoster(poster)">
                <img :src="poster.image" :alt="poster.title" class="set-size-px" />
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
        format: 'Podcast',
        title: 'A Punto de Ebullición',
        image: '/portfolio/punto/punto.png',
        description: 'A Punto de Ebullición es un Podcast creado y conducido por Gary Centeno, en el cual este polémico y célebre host se abrirá deconstruirá ante los ojos de los espectadores para mostrar a un Gary real, true, que como en la televisión, no teme expresarse, pero esta vez censura, al tiempo que prepara platillos de los puntos más exóticos y variados de nuestro diverso continente.',
      }
    ]
  },
  {
    title: 'Servicios de Producción',
    image: '/portfolio/services.png',
    posters: [
      {
        title: 'LOL: Sexta Temporada',
        image: '/portfolio/lol/lol.jpeg',
        description: 'B-Roll para la sexta temporada de LOL.',
      },
      {
        title: 'Menina CECC',
        image: '/portfolio/menina/dresslogo_dark.webp',
        description: 'Planificación, creatividad, desarrollo y dirección de pasarela de modas que fusionó las marcas Menina y CECC en un evento donde el lujo, la magia y la elegancia protagonizaron la noche. ',
      },
    ]
  }
]

import LogoSection from '~/components/LogoSection.vue'

const brandLogos = [
  { src: '/logo/amazon_prime_logo.webp', alt: 'Logo 1' },
  { src: '/logo/CECC_logo.webp', alt: 'Logo 2' },
  { src: '/logo/lol_logo.webp', alt: 'Logo 3' },
  { src: '/logo/dresslogo_dark.webp', alt: 'Logo 4' },
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
.inside-poster {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
  max-width: 250px;
}
.set-size-px {
  object-fit: scale-down;
  width: 250px;
  height: 250px;;
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

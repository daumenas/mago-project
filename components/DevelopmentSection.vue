<template>
  <section id="development" class="section development-section">
    <div class="container">
      <h2 class="section-title">DESARROLLO</h2>

      <Transition name="fade-slide" mode="out-in">
        <div :key="selectedPoster ? 'poster-detail' : 'poster-grid'">
          <!-- Poster Grid (always visible initially) -->
          <div v-if="!selectedPoster" class="poster-grid">
            <div v-for="(poster, i) in allPosters" :key="i" class="poster-card" @click="selectPoster(poster)">
              <img :src="poster.image" :alt="poster.title" />
              <p class="poster-title">{{ poster.title }}</p>
            </div>
          </div>

          <!-- Poster Detail View via Component -->
          <CategoryDetail v-else :poster="selectedPoster" @close="selectedPoster = null" />
        </div>
      </Transition>
    </div>
  </section>
<QuoteSection quote="Una compañía humana para humanos, de gente real para la gente real. Entendemos 
a la audiencia y al consumidor porque también lo somos. " />
</template>

<script setup>
import CategoryDetail from '~/components/CategoryDetail.vue'
import QuoteSection from '~/components/QuoteSection.vue'

const selectedPoster = ref(null)

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

const allPosters = computed(() => categories.flatMap(cat => cat.posters))

const selectPoster = (poster) => {
  selectedPoster.value = poster
}
</script>

<style scoped>
.section {
  padding: 4rem 1rem;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  color: #caaeff;
  margin-bottom: 2rem;
}

.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.poster-card {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
}
.poster-card:hover {
  transform: scale(1.05);
}
.poster-card img {
  max-width: -webkit-fill-available;
  border-radius: 12px;
  height: auto;
  object-fit: cover;
}
.poster-title {
  margin-top: 0.75rem;
  font-weight: 600;
  color: var(--primary-color, #6a0dad);
}
</style>

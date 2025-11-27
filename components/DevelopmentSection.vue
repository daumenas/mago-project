<template>
  <section id="development" class="section development-section">
    <div class="container">
      <h2 class="section-title">DESARROLLO</h2>

      <Transition name="fade-slide" mode="out-in">
        <div :key="selectedPoster ? 'poster-detail' : 'poster-grid'">
          <!-- Poster Grid (always visible initially) -->
          <div v-if="!selectedPoster" class="poster-grid">
            <div v-for="(poster, i) in allPosters" :key="i" class="poster-card" @click="selectPoster(poster)">
              <img class="cardimg" :src="poster.image" :alt="poster.title" />
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
    posters: [
      {
        title: '12 Deseos',
        image: '/portfolio/12deseos/12deseos_2.jpg',
        description: 'Alejandro y Beto son dos caras de una misma moneda: uno rico y otro pobre, unidos por la terrible enfermedad degenerativa y terminal que los aqueja a ambos. Tanto Beto, optimista y dicharachero, como Alejandro, serio y solitario, deciden unir fuerzas y darle la vuelta a su situación, ayudándose a cumplir cada uno de los 12 deseos que, tanto el uno como el otro, plasman en una lista. Deseos que vienen con una carga emocional y aventurera que los meten en las más locas y arriesgadas experiencias de vida, que al final están lo que están coleccionando. Después de mucho enseñarse y mucho aprenderse, Alejandro y Beto tendrán que despedirse el uno del otro, pero su mágica amistad los encaminará a ayudarse a cumplir el último deseo de cada uno, cosa que los une de por vida: vivir y ayudar al otro a vivir.',
        pdf: '12Deseos.pdf',
        format: 'Serie',
      },
      {
        title: 'Gente de Acero',
        image: '/portfolio/acero/deacero.jpeg',
        description: 'En un mundo cien años en el futuro en el cual solo existen 5 paises confederados que tienen al resto del mundo sometido en la más grande de las pobrezas, Lea, una ex agente norteamericana y Leonel, serán los encargados de llevar la fórmula para hacer el arma que puede salvarlos a Enerva, la tierra prometida de los revolucionarios, teniéndose que cuidar de Javier, la otra personalidad en el cuerpo de Leo. ',
        pdf: 'acero.pdf',
        format: 'Serie',
      },
      {
        title: 'El Edificio',
        image: '/portfolio/dead/dead.jpeg',
        description: 'Alicia es una actriz de 35 años que tras el rompimiento con un largo amor, se muda sola por primera vez, teniendo solo lo suficiente para pagar los próximos dos meses de renta. Pero cuando la vida le da la oportunidad de audicionar para el personaje que la podría ayudar a ascender a sus viejas glorias, su conveniente y fortuita amistad con Clara, su vecina de en frente, la retrasará de grabar su casting, cuando ambas se ven involucradas en el accidental asesinato del novio de Clara, que además tenía un secreto sobre cada uno de los vecinos del edificio, haciendo que todos se unan para encubrir el crimen, bajo el asecho del detective Uribe, el hermano de Alfredo. ',
        pdf: '',
      },
      {
        title: 'Voluntad de Acero',
        image: '/portfolio/voluntado/ironwill.png',
        description: 'This program tells the story of Arly Velázquez, a young athlete on the brink of his professional mountain biking career who has a severe accident leaving him disabled. Navigating the ironic twists and turns of life, he returns to extreme sports in a completely diﬀerent discipline as a Paralympic athlete.',
        pdf: 'VoluntadeAcero.pdf',
        format: 'Serie Documental'
      },
      {
        title: 'Criaturas Ajenas',
        image: '/portfolio/creatures/creatures.png',
        description: 'Esta historia es un drama musical actual que narra los infortunios de Simón, un joven humilde, en la escuela San Lorenzo, dando sus primeros pasos en un mundo al que siempre soñó pertenecer. Los siete magníficos, cada uno encarnado con un pecado capital, encabezados por Ana, la vanidad y líder del selecto grupo, serán los encargado de convertir ese sueño en pesadilla.',
        pdf: 'Carpeta.pdf',
        format: 'Serie Musical',
      },
      {
        title: 'Podcast Médicos',
        image: '/portfolio/podcast_professional/podcastProfessional.png',
        description: 'Crea contenido de alto impacto que posicione tu marca y conecte con tu audiencia de manera auténtica y profesional.',
        link: 'https://gamma.app/docs/Podcast-Medicos-Mago-Media-7z11zlfptx15apy?mode=doc',
        format: 'Podcast',
      },
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
  /* padding: 4rem 1rem; */
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
.cardimg {
  width: 300px;
  height: 300px !important;
}
.poster-card:hover {
  transform: scale(1.05);
}
.poster-card img {
  max-width: -webkit-fill-available;
  border-radius: 12px;
  height: auto;
  object-fit: scale-down;
}
.poster-title {
  margin-top: 0.75rem;
  font-weight: 600;
  color: var(--primary-color, #6a0dad);
}
</style>

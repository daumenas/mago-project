<template>
  <section id="services" class="section">
    <div class="container">
      <h2 class="section-title">SERVICIOS</h2>
      <p class="section-subtitle">
        <i>Nuestros servicios de producción se adecúan a las necesidades particulares de cada proyecto.</i>
      </p>
      <p class="section-description">
        En Mago estamos convencidos de que las redes sociales, la AI y todo lo que nace a partir de
        y para el internet, son herramientas valiosísimas para llegar a las personas con un mensaje
        claro y puntual. Nuestra misión principal es realizar y colocar el mensaje en el lugar indicado
        para su correcta transmisión a las personas a las que tiene que llegar.
      </p>

      <div class="services-grid">
        <div class="top-row">
          <div class="service-card" v-for="(service, index) in topServices" :key="index">
            <FontAwesomeIcon :icon="service.icon" class="service-icon" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <div class="three-grid">
          <div
            class="service-card"
            v-for="(service, index) in bottomServices"
            :key="index + 2"
          >
            <FontAwesomeIcon :icon="service.icon" class="service-icon" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const allServices = [
  {
    name: 'Productora de Ficción y Documental',
    icon: ['fas', 'clapperboard'],
    description: 'Creación y producción de largometrajes, series y cortometrajes de ficción y no ficción para cine, televisión y plataformas, desde la gestación de la idea, hasta la colocación del producto en la ventana adecuada.'
  },
  {
    name: 'Servicios de Producción',
    icon: ['fas', 'video'],
    description: 'Producimos Videoclips, Podcasts, Publicidad ATL, BTL y digital, B-Roll, Vuelos de drone, Coordinación de eventos en vivo.'
  },
  {
    name: 'Producciones originales',
    icon: ['fas', 'puzzle-piece'],
    description: 'Nos especializamos en la creación de contenidos originales, sofisticados y elegantes para internet, mezclando tanto el lenguaje web como el de la tele tradicional.'
  },
  {
    name: 'Publicidad BTL y Digital',
    icon: ['fas', 'camera'],
    description: 'Desde la gestación de ideas innovadoras y únicas hasta la realización de campañas enfocadas en audiencias específicas con integración adecuada y orgánica.'
  },
  {
    name: 'Postproducción',
    icon: ['fas', 'sliders-h'],
    description: 'Edición, sincronización, corrección de color, gráficos, sonido, música original y todo lo necesario para una pieza audiovisual final de calidad.'
  },
  {
    name: 'Animación y Motion Graphic',
    icon: ['fas', 'magic'],
    description: 'Conceptualización y ejecución de animaciones 2D y 3D para todo tipo de requerimientos de comunicación visual.'
  },
  {
    name: 'Animación Stop-Motion',
    icon: ['fas', 'film'],
    description: 'Una de nuestras especialidades es la animación cuadro por cuadro para narrativas visuales únicas.'
  },
  {
    name: 'Renta de equipo',
    icon: ['fas', 'cog'],
    description: 'Contáctanos. Podemos ajustar nuestros equipos a tu presupuesto. Sin miedo, ¡cotiza!'
  }
]

const topServices = allServices.slice(0, 2)
const bottomServices = allServices.slice(2)
</script>

<style scoped>
.section {
  text-align: center;
  padding: 4rem 1.5rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #E5C7FF;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  font-style: italic;
  color: #D6B0FF;
  margin-bottom: 2rem;
}

.section-description {
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #F0E9FF;
  font-size: 1.1rem;
  line-height: 1.6;
}

.services-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
}

.top-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.three-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 960px;
  width: 100%;
}

.service-card {
  background: #f8f2ff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 2rem;
  color: #6a0dad;
  margin-bottom: 1rem;
}

.service-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: #1a001f;
}

.service-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
}
</style>

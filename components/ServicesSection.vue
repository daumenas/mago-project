<template>
    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card"
          >
            <FontAwesomeIcon :icon="service.icon" class="service-icon" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      name: 'Video Production',
      icon: ['fas', 'video'],
      description: 'High-quality video shooting with cinematic techniques.'
    },
    {
      name: 'Editing',
      icon: ['fas', 'scissors'],
      description: 'Professional editing, color grading, and visual polishing.'
    },
    {
      name: 'Motion Graphics',
      icon: ['fas', 'film'],
      description: 'Dynamic visuals and animations for impactful storytelling.'
    },
    {
      name: 'Photography',
      icon: ['fas', 'camera'],
      description: 'Commercial and artistic photography with creative vision.'
    },
    {
      name: 'Drone Footage',
      icon: ['fas', 'drone'],
      description: 'Stunning aerial shots using certified drone pilots.'
    },
    {
      name: 'Sound Design',
      icon: ['fas', 'volume-up'],
      description: 'Custom soundtracks, Foley, and audio mixing.'
    },
    {
      name: 'Creative Direction',
      icon: ['fas', 'lightbulb'],
      description: 'Concept development and visual storytelling strategy.'
    },
    {
      name: 'Brand Videos',
      icon: ['fas', 'bullhorn'],
      description: 'Tailored brand stories for online and TV campaigns.'
    },
    {
      name: 'Live Streaming',
      icon: ['fas', 'broadcast-tower'],
      description: 'Seamless multi-cam live event broadcasting and encoding.'
    }
  ]
  </script>
  
  <style scoped>
.section {
  padding: 4rem 1rem;
  background: transparent;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #d3b6ff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  justify-items: center;
}

.service-card {
  background-color: #f8f5ff;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 280px;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--primary-color, #6a0dad);
  margin-bottom: 1rem;
}

.service-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #2e1442;
}

.service-description {
  font-size: 0.95rem;
  color: #5d4b6e;
}

  </style>
  
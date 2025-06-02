<template>
    <section id="services" class="section">
      <div class="container">
        <h2>Our Services</h2>
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
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .service-card {
    background-color: white;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  .service-card:hover {
    transform: translateY(-5px);
  }
  .service-icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  .section {
    padding: 4rem 1rem;
    background: transparent;
  }
  </style>
  
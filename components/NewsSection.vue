<template>
    <section id="news" class="section">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
  
        <div class="news-grid">
          <div v-for="(item, index) in news" :key="index" class="news-card">
            <img :src="item.image" :alt="item.title" class="news-thumb" />
            <div class="news-content">
              <span class="news-date">{{ item.date }}</span>
              <h3 class="news-title">{{ item.title }}</h3>
              <p class="news-summary">{{ item.summary }}</p>
              <a v-if="item.link" :href="item.link" target="_blank" class="news-link">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const news = [
    {
      title: 'We Wrapped Our Latest Short Film!',
      image: '/portfolio/test1/shinobi2.jpg',
      date: 'May 2025',
      summary: 'Our team just completed filming a narrative short in Morocco. Post-production is now underway!',
      link: 'https://yourwebsite.com/news/shortfilm'
    },
    {
      title: 'New Music Video Out Now!',
      image: '/equipment/fx3.jpg',
      date: 'April 2025',
      summary: 'Watch the full video featuring dynamic drone shots and vivid color grading.',
      link: 'https://yourwebsite.com/news/musicvideo'
    },
    {
      title: 'We’re Speaking at CineCon',
      image: '/about/founder.jpg',
      date: 'March 2025',
      summary: 'Catch us on stage at CineCon Berlin sharing insights on hybrid workflows.',
      link: 'https://yourwebsite.com/news/cinecon'
    }
  ]
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
    margin-bottom: 3rem;
    color: var(--primary-color, #6a0dad);
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .news-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }
  
  .news-card:hover {
    transform: translateY(-5px);
  }
  
  .news-thumb {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  
  .news-content {
    padding: 1.5rem;
    flex: 1;
  }
  
  .news-date {
    font-size: 0.85rem;
    color: #888;
  }
  
  .news-title {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: #222;
  }
  
  .news-summary {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 1rem;
  }
  
  .news-link {
    font-weight: 600;
    color: var(--primary-color, #6a0dad);
    text-decoration: none;
  }
  </style>
  
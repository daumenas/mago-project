<template>
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="video-wrapper">
          <video
            controls
            poster="/equipment/fx3.jpg"
            class="trailer-video"
          >
            <source src="/homepage/trailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        <div class="hero-content">
          <h1 class="hero-title">Capturing Stories That Move</h1>
          <p class="hero-subtitle">Professional media production. Cinematic excellence.</p>
          <a href="#portfolio" class="hero-button">View Portfolio</a>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero-section {
    padding: 4rem 1rem;
    background: #fff;
    text-align: center;
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .video-wrapper {
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.08);
  }
  
  .trailer-video {
    width: 75%;
    height: 75%;
    border: none;
  }
  
  .hero-content {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: var(--primary-color, #6a0dad);
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
  }
  
  .hero-button {
    background: var(--primary-color, #6a0dad);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
  }
  
  .hero-button:hover {
    background: var(--primary-dark, #4e2392);
  }
  </style>
  
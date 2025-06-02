<template>
    <section id="about" class="section">
      <div class="container">
        <h2>About Us</h2>
  
        <!-- Founder -->
        <div class="founder-profile">
          <img src="/about/founder.jpg" alt="Founder" class="founder-photo" />
          <div class="founder-bio">
            <h3>Anthony Gutierrez</h3>
            <p>Founder & Creative Director</p>
            <p>
              I'm a media production specialist with a passion for storytelling through visuals.
              With over 10 years of experience in video, editing, and creative direction, I lead a team
              dedicated to producing high-impact visual content for brands and artists worldwide.
            </p>
          </div>
        </div>
  
        <!-- Team Members -->
        <div class="team-grid">
          <div v-for="(member, index) in team" :key="index" class="team-member">
            <img :src="member.photo" :alt="member.name" class="member-photo" />
            <h4>{{ member.name }}</h4>
            <p class="role">{{ member.role }}</p>
            <p class="bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const team = [
    {
      name: 'Elena Michaels',
      role: 'Lead Video Editor',
      photo: '/about/adapt.jpg',
      bio: 'Specializes in cinematic editing and storytelling with a flair for motion design.'
    },
    {
      name: 'Max Maximillians',
      role: 'Director of Photography',
      photo: '/about/adapt.jpg',
      bio: 'Expert in lighting and camera direction with 8+ years in music and commercial shoots.'
    },
    {
      name: 'Sarah Nguyen',
      role: 'Sound Engineer',
      photo: '/about/adapt.jpg',
      bio: 'Handles audio production, Foley, and soundscapes to enhance narrative immersion.'
    },
  ]
  </script>
  
  <style scoped>
  .founder-profile {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  .founder-photo {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 100px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  .founder-bio {
    flex: 1;
  }
  .founder-bio h3 {
    margin: 0;
  }
  .founder-bio p:first-of-type {
    font-weight: bold;
    color: var(--primary-color);
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }
  .team-member {
    text-align: center;
    background-color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
  .member-photo {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
    margin-bottom: 1rem;
  }
  .role {
    color: var(--primary-color);
    font-weight: 600;
    margin: 0.5rem 0;
  }
  .bio {
    font-size: 0.9rem;
    color: #555;
  }
  .section {
  padding: 4rem 1rem;
  background-color: transparent;
}

.container {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
  max-width: 1024px;
  margin: 0 auto;
}
  </style>
  
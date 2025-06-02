<template>
    <section id="contact" class="section">
      <div class="container contact-wrapper">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>We’d love to hear about your next project or collaboration opportunity.</p>
  
          <ul class="contact-list">
            <li><strong>Email:</strong> <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li><strong>Location:</strong> Berlin, Germany</li>
          </ul>
  
          <div class="social-icons">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Ensure FontAwesome is globally registered in nuxt.config.ts or plugin
  </script>
  
  <style scoped>
  .section {
    padding: 4rem 1rem;
    background: #f9f8fd;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  }
  
  .contact-info h2 {
    font-size: 2rem;
    color: var(--primary-color, #6a0dad);
    margin-bottom: 1rem;
  }
  
  .contact-info p {
    color: #444;
    margin-bottom: 2rem;
  }
  
  .contact-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
  }
  
  .contact-list li {
    margin-bottom: 0.75rem;
    color: #555;
  }
  
  .contact-list a {
    color: var(--primary-color, #6a0dad);
    text-decoration: none;
  }
  
  .social-icons a {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: var(--primary-color, #6a0dad);
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #4e2392;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 1rem;
  }
  
  .contact-form button {
    background: var(--primary-color, #6a0dad);
    color: white;
    padding: 0.75rem;
    border: none;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .contact-form button:hover {
    background: #4e2392;
  }
  
  @media (max-width: 768px) {
    .contact-wrapper {
      grid-template-columns: 1fr;
    }
  }
  </style>
  
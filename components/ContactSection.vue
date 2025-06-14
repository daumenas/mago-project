<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>
      <p class="contact-description">
        We'd love to hear from you! Whether it’s project inquiries, collaborations, or just a friendly hello —
        drop us a message.
      </p>

      <div class="contact-actions">
        <button class="contact-btn" @click="sendEmail">
          Send Email
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const sendEmail = () => {
  const email = "hello@yourcompany.com"
  window.location.href = `mailto:${email}`
}
</script>
  
  <style scoped>
  .section {
  background: transparent;
  padding: 4rem 1rem;
  }
  
  .contact-section {
  background: #f5f2fb;
  padding: 4rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #3a235d;
  margin-bottom: 1rem;
}

.contact-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #4a3269;
  font-size: 1.05rem;
  line-height: 1.6;
}

.contact-actions {
  display: flex;
  justify-content: center;
}

.contact-btn {
  background: var(--primary-color, #6a0dad);
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.contact-btn:hover {
  background: #4e2392;
}

  </style>
  
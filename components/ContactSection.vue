<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="contact-title">Contacto</h2>
      <p class="contact-subtitle">
        Estaremos encantados de saber de usted, ya sea para consultas de proyectos, colaboraciones o simplemente para saludarnos.
      </p>

      <div class="contact-email-block">
        <p class="highlight">¿Prefieres el correo electrónico?</p>
        <a href="mailto:anthony@magomedia.mx" class="contact-email">anthony@magomedia.mx</a>
        <a href="mailto:anthony@magomedia.mx" class="cta-button">Enviar correo electrónico</a>
      </div>

      <div class="contact-info-block">
        <div class="info-item">
          <FontAwesomeIcon icon="marker" class="contact-icon" />
          <span>Dirección: Concepción Beistegui #203, int. 301, colonia del Valle Centro, Benito Juárez, 
03100, Ciudad de México, México.  </span>
        </div>
        <div class="info-item">
          <FontAwesomeIcon icon="phone" class="contact-icon" />
          <span>5633458406</span>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.contact-section {
  background: #f4eefc;
  padding: 4rem 1.5rem;
  text-align: center;
}

.contact-container {
  max-width: 720px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2f004f;
  margin-bottom: 1rem;
}

.contact-subtitle {
  color: #4a3a5a;
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
}

.contact-email-block {
  margin-bottom: 2rem;
}

.highlight {
  font-weight: 600;
  font-size: 1.1rem;
  color: #3f1d5b;
  margin-bottom: 0.5rem;
}

.contact-email {
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: #6a0dad;
  text-decoration: underline;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  background: #6a0dad;
  padding: 0.75rem 1.5rem;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #4e2392;
}

.contact-info-block {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #3f1d5b;
  font-weight: 500;
}

.contact-icon {
  color: #6a0dad;
  font-size: 1.1rem;
}
</style>

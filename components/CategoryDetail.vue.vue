<template>
  <div class="poster-detail">
    <button class="back-btn" @click="$emit('close')">← Volver a los carteles</button>
    <div class="poster-detail-content">
      <img :src="poster.image" class="poster-large" :alt="poster.title" />
      <div class="poster-info">
        <h3>{{ poster.title }}</h3>
        <p class="description">{{ poster.description }}</p>
        <div class="meta">
          <p v-if="poster.format"><strong>Formato:</strong> {{ poster.format }}</p>
          <p v-if="poster.director"><strong>Dirigida por:</strong> {{ poster.director }}</p>
          <p v-if="poster.producer"><strong>Producida por:</strong> {{ poster.producer }}</p>
          <p v-if="poster.cast"><strong>Reparto:</strong> {{ poster.cast }}</p>
        </div>
        <div v-if="poster.pdf" class="pdf-download">
          <a :href="`/portfolio/pdf/${poster.pdf}`" target="_blank" class="pdf-btn">
            Descarga el pitch completo en PDF
          </a>
       </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  poster: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.poster-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background: #1b1328;
  border-radius: 16px;
  color: white;
}

.poster-detail-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}

.poster-large {
  max-width: 250px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.poster-info {
  max-width: 600px;
}

.poster-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #d5c9e0;
}

.meta p {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #c1b3da;
}

.back-btn {
  background: none;
  border: none;
  color: #caaeff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
}

.pdf-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #6a0dad;   /* purple background */
  color: #fff;           /* white text */
  font-weight: bold;
  text-decoration: none; /* remove underline */
  border-radius: 6px;    /* rounded corners */
  transition: background 0.3s ease, transform 0.2s ease;
}

.pdf-btn:hover {
  background: #520b9b;   /* darker purple on hover */
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
</style>

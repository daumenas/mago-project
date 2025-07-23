<template>
  <div class="quote-strip">
    <p class="quote-text">{{ quote }}</p>
  </div>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.quote-strip {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  padding: 3rem 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
}

.quote-text {
  font-style: italic;
  font-size: 1.3rem;
  color: #e9d8ff;
  text-shadow: 0 0 8px rgba(202, 174, 255, 0.5);
  position: relative;
  max-width: 960px;
  line-height: 1.8;
}

.quote-text::after {
  content: '';
  display: block;
  margin: 0.8rem auto 0;
  width: 10px;
  height: 1px;
  background-color: #ffffff;
  opacity: 0.5;
}
</style>

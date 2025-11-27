<template>
  <div class="gamma-wrapper">
    <iframe
      :src="src"
      :title="title"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
  }
})
</script>

<style scoped>
.gamma-wrapper {
  width: 100%;
  height: 100vh;
    padding: 0;
    margin: 0;
  padding-top: 80px; /* move iframe down */

  overflow: hidden;
}

.gamma-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>

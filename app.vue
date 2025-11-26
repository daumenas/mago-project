<template>
  <div class="page-background">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'

definePageMeta({
  title: "Mago Media – Producción Audiovisual Profesional en México | Cine, Publicidad y Contenido Digital",
  meta: [
    // --- Primary SEO ---
    {
      name: "description",
      content:
        "Casa productora en México especializada en producción audiovisual, postproducción, animación, cine, videoclips y renta de equipo profesional. Creamos historias con calidad cinematográfica."
    },
    {
      name: "keywords",
      content:
        "producción audiovisual México, casa productora CDMX, cine, publicidad, videoclips, postproducción, animación 2D 3D, renta de equipo audiovisual, filmación, cinematografía"
    },

    // --- Canonical URL ---
    {
      rel: "canonical",
      href: "https://www.magomedia.mx/"
    },

    // --- Open Graph (Facebook, LinkedIn, WhatsApp) ---
    { property: "og:title", content: "Mago Media – Producción Audiovisual Profesional en México" },
    {
      property: "og:description",
      content:
        "Somos una casa productora especializada en cine, publicidad, videoclips, animación y postproducción. Contamos con equipo profesional y talento creativo."
    },
    { property: "og:image", content: "https://www.magomedia.mx/og-image.jpg" },
    { property: "og:url", content: "https://www.magomedia.mx/" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Mago Media" },

    // --- Twitter Card ---
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Mago Media – Producción Audiovisual Profesional en México" },
    {
      name: "twitter:description",
      content:
        "Producción audiovisual de alto nivel: cine, publicidad, videoclips, animación y postproducción en México."
    },
    { name: "twitter:image", content: "https://www.magomedia.mx/og-image.jpg" },

    // --- Robots (good for SEO) ---
    { name: "robots", content: "index, follow" },

    // --- Language & Charset ---
    { name: "language", content: "es-MX" },
    { charset: "utf-8" },

    // --- Theme color (browser UI) ---
    { name: "theme-color", content: "#000000" },
  ]
})

</script>

<style scoped>
.app-wrapper {
  background: linear-gradient(145deg, #f4f2f8, #eae4f4);
  min-height: 100vh;
}
body {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  color: #f8f6fa;
  line-height: 1.6;
  font-size: 1.05rem;
}
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/noise.png');
  opacity: 0.05;
  pointer-events: none;
  z-index: -1;
}
.page-background {
  background: linear-gradient(
    to bottom,
    #2b1a36 40%,
    #372245 55%,
    #432d55 60%,
    #4d3561 65%,
    #563b6c 70%,
    #f1edf8 80%
  ) !important;
  min-height: 100vh;
  width: 100%;
}
h1, h2, h3, h4 {
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  font-weight: 600;
  line-height: 1.2;
}

h1 { font-size: 2.8rem; }
h2 { font-size: 2.2rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.25rem; }
a, .accent {
  color: #d3b6ff;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #a87eff;
}
.subtext {
  color: #c2b4d7;
  font-size: 0.95rem;
}
</style>
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Your Media Production Company',
      meta: [
        { name: 'description', content: 'Professional media production services.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap' }
      ]
    }
  },
  css: ['@/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.min.css'],
  ssr: true,
  target: 'static'
})

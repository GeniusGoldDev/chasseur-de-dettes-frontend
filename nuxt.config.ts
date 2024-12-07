// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Add global CSS
  css: ['~/assets/css/main.css'], 

  // Configure Tailwind CSS (optional, if you use it)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Define the default layout and meta tags
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A Nuxt.js frontend application' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Enable Vite for better build performance
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/content'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Add custom CSS to override navigation text truncation
  css: [
    '~/assets/css/navigation.css',
    '~/assets/css/header-logo.css'
  ],

  app: {
    head: {
      title: 'DevStride Documentation',
    }
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/content'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Add custom CSS to override navigation text truncation
  css: [
    '~/assets/css/navigation.css',
    '~/assets/css/header-logo.css',
    '~/assets/css/page-width.css'
  ],

  app: {
    head: {
      title: 'DevStride Documentation',
    }
  },

  // Redirect /release-notes to the latest release note
  // UPDATE THIS PATH when adding new releases!
  routeRules: {
    '/release-notes': { redirect: '/release-notes/2025-08-01-09-27' },
    '/releases': { redirect: '/release-notes/2025-08-01-09-27' }
  },

})
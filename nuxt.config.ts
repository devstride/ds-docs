// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/content', 'nuxt-studio'],
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

  studio: {
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github',
      owner: 'devstride',
      repo: 'ds-docs',
      branch: 'main',
    }
  }
})
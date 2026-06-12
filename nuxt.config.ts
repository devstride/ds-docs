// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '~/modules/release-notes-redirect',  // Dynamically sets /releases redirect at build time
    '~/modules/raw-md-generator'  // Generates static raw markdown files at build time
  ],
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

  routeRules: {
    // CORS headers for release notes (allows cross-origin fetching)
    // Note: /releases and /release-notes redirects are added by ~/modules/release-notes-redirect
    // Note: These headers only work in dev mode. GitHub Pages doesn't support custom headers
    // for static files. Simple cross-origin fetch() requests should still work without
    // credentials. If CORS issues occur in production, use a proxy or same-origin fetch.
    '/release-notes/**': {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    },
    '/raw-md/**': {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    },

    // Workspace Capabilities moved under Map Value (2026-06-10) — redirect old URLs so existing links keep working
    '/workspace-capabilities/explore-the-workspace': { redirect: { to: '/workstreams-and-work-items/workspace-capabilities/explore-the-workspace', statusCode: 301 } },
    '/workspace-capabilities/workspace-sidebar': { redirect: { to: '/workstreams-and-work-items/workspace-capabilities/workspace-sidebar', statusCode: 301 } },
    '/workspace-capabilities/themes-and-appearance': { redirect: { to: '/workstreams-and-work-items/workspace-capabilities/themes-and-appearance', statusCode: 301 } },
    '/workspace-capabilities/getting-help-and-support': { redirect: { to: '/workstreams-and-work-items/workspace-capabilities/getting-help-and-support', statusCode: 301 } }
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'devstride',
      repo: 'ds-docs',
      branch: 'main'
    }
  },

})

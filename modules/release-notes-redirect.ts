import { defineNuxtModule } from '@nuxt/kit'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export default defineNuxtModule({
  meta: {
    name: 'release-notes-redirect',
    configKey: 'releaseNotesRedirect'
  },
  setup(options, nuxt) {
    // Find the latest release note at build time
    const contentDir = join(nuxt.options.rootDir, 'content', '11.release-notes')

    try {
      const files = readdirSync(contentDir)
        .filter(f => f.endsWith('.md'))
        .filter(f => /^\d+\..+\.md$/.test(f))
        .sort()

      if (files.length === 0) {
        console.warn('[release-notes-redirect] No release notes found')
        return
      }

      const latestFile = files[files.length - 1]
      const match = latestFile.match(/^\d+\.(.+)\.md$/)

      if (!match) {
        console.warn('[release-notes-redirect] Could not parse latest release note filename')
        return
      }

      const slug = match[1]
      const redirectTarget = `/release-notes/${slug}`

      console.log(`[release-notes-redirect] Latest release note: ${redirectTarget}`)

      // Add route rules for redirects
      nuxt.options.routeRules = nuxt.options.routeRules || {}

      nuxt.options.routeRules['/releases'] = {
        redirect: redirectTarget,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }

      nuxt.options.routeRules['/release-notes'] = {
        redirect: redirectTarget,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }

    } catch (error) {
      console.error('[release-notes-redirect] Error finding release notes:', error)
    }
  }
})

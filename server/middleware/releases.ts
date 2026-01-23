import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname

  // Only handle /releases and /release-notes (without a specific note) routes
  if (path !== '/releases' && path !== '/release-notes') {
    return
  }

  try {
    // Read release notes directory to find the latest one
    const contentDir = join(process.cwd(), 'content', '11.release-notes')
    const files = readdirSync(contentDir)
      .filter(f => f.endsWith('.md'))
      .sort() // Zero-padded prefixes sort correctly alphabetically

    if (files.length === 0) {
      return
    }

    // Get the last file (highest numbered prefix = latest)
    const latestFile = files[files.length - 1]
    // Convert filename like "41.2026-01-19.md" to path "/release-notes/2026-01-19"
    const slug = latestFile.replace(/^\d+\./, '').replace(/\.md$/, '')

    return sendRedirect(event, `/release-notes/${slug}`, 302)
  } catch (error) {
    // If directory doesn't exist or other error, let the request continue
    console.error('Error finding latest release note:', error)
    return
  }
})

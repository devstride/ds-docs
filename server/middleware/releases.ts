import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler((event) => {
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

    // Filter to only files matching expected pattern: "##.YYYY-MM-DD.md" or similar
    const validFiles = files.filter(f => /^\d+\..+\.md$/.test(f))

    if (validFiles.length === 0) {
      return
    }

    // Get the last file (highest numbered prefix = latest)
    const latestFile = validFiles[validFiles.length - 1]
    // Extract slug from filename like "41.2026-01-19.md" → "2026-01-19"
    const match = latestFile.match(/^\d+\.(.+)\.md$/)
    if (!match) {
      return
    }
    const slug = match[1]

    return sendRedirect(event, `/release-notes/${slug}`, 302)
  } catch (error) {
    // If directory doesn't exist or other error, log and let request continue to 404
    console.error('Error finding latest release note:', error)
    return
  }
})

import { defineNuxtModule } from '@nuxt/kit'
import { readdirSync, readFileSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'

export default defineNuxtModule({
  meta: {
    name: 'raw-md-generator',
    configKey: 'rawMdGenerator'
  },
  setup(options, nuxt) {
    // Hook into the build process to generate static files
    nuxt.hook('build:before', () => {
      generateRawMdFiles(nuxt.options.rootDir)
    })

    // Also generate during dev for testing
    if (nuxt.options.dev) {
      generateRawMdFiles(nuxt.options.rootDir)
    }
  }
})

function generateRawMdFiles(rootDir: string) {
  const contentDir = join(rootDir, 'content', '11.release-notes')
  const outputDir = join(rootDir, 'public', 'raw-md', 'release-notes')

  try {
    // Create output directory
    mkdirSync(outputDir, { recursive: true })

    // Get all release note files
    const files = readdirSync(contentDir)
      .filter(f => f.endsWith('.md') && !f.startsWith('index'))
      .filter(f => /^\d+\.\d{4}-\d{2}-\d{2}\.md$/.test(f))
      .sort()

    if (files.length === 0) {
      console.warn('[raw-md-generator] No release notes found')
      return
    }

    // Extract dates and sort descending (newest first)
    const releaseNotes = files
      .map(f => {
        const match = f.match(/^\d+\.(\d{4}-\d{2}-\d{2})\.md$/)
        return match ? match[1] : null
      })
      .filter((date): date is string => date !== null)
      .sort((a, b) => b.localeCompare(a))

    // Write index.json
    const indexPath = join(outputDir, 'index.json')
    writeFileSync(indexPath, JSON.stringify({ releaseNotes }, null, 2))
    console.log(`[raw-md-generator] Generated ${indexPath}`)

    // Copy each markdown file with just the date as filename
    for (const file of files) {
      const match = file.match(/^\d+\.(\d{4}-\d{2}-\d{2})\.md$/)
      if (match) {
        const date = match[1]
        const sourcePath = join(contentDir, file)
        const destPath = join(outputDir, `${date}.md`)
        copyFileSync(sourcePath, destPath)
      }
    }

    console.log(`[raw-md-generator] Generated ${files.length} release note files`)

  } catch (error) {
    console.error('[raw-md-generator] Error generating raw markdown files:', error)
  }
}

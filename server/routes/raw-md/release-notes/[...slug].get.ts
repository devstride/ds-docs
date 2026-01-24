import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') || '';

  // Find the matching file in content/11.release-notes/
  // Files are named like "41.2026-01-19.md" but accessed via "2026-01-19"
  const contentDir = join(process.cwd(), 'content', '11.release-notes');

  try {
    // Read directory to find the file with matching date
    const files = await readdir(contentDir);

    // Find file that ends with the slug (e.g., "2026-01-19.md")
    const matchingFile = files.find(f => f.endsWith(`${slug}.md`));

    if (!matchingFile) {
      throw createError({
        statusCode: 404,
        message: `Release notes not found: ${slug}`
      });
    }

    const filePath = join(contentDir, matchingFile);
    const content = await readFile(filePath, 'utf-8');

    // Set content type header (CORS headers are configured in nuxt.config.ts routeRules)
    setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8');

    return content;
  } catch (error) {
    if ((error as { statusCode?: number }).statusCode === 404) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: 'Failed to read release notes'
    });
  }
});

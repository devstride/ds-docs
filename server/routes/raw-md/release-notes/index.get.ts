import { readdir } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  const contentDir = join(process.cwd(), 'content', '11.release-notes');

  try {
    const files = await readdir(contentDir);

    // Filter for markdown files and extract dates
    const releaseNotes = files
      .filter(f => f.endsWith('.md') && !f.startsWith('index'))
      .map(f => {
        // Extract date from filename like "41.2026-01-19.md"
        const match = f.match(/^\d+\.(\d{4}-\d{2}-\d{2})\.md$/);
        return match ? match[1] : null;
      })
      .filter((date): date is string => date !== null)
      // Sort descending (newest first)
      .sort((a, b) => b.localeCompare(a));

    setHeader(event, 'Content-Type', 'application/json');

    return {
      releaseNotes
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to list release notes'
    });
  }
});

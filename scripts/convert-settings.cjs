#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import the conversion functions
const { convertFile, parseDoc360Metadata, createFrontmatter, replaceImageUrls } = require('./convert-doc360.cjs');

const BACKUP_DIR = path.join(__dirname, '../DevStride-Docs/v1/articles');
const CONTENT_DIR = path.join(__dirname, '../content');

// Mapping of files to their target locations
// Based on the screenshot structure
const FILE_MAPPING = {
  // Organization -> Org Profile
  'org-profile.md': '06.settings/01.organization/org-profile.md',

  // Data Model -> (multiple children)
  'cadences.md': '06.settings/02.data-model/01.cadences.md',
  'overview-of-item-types.md': '06.settings/02.data-model/02.item-types.md',
  'tags.md': '06.settings/02.data-model/03.tags.md',
  'custom-fields.md': '06.settings/02.data-model/04.custom-fields.md',
  'priority-levels.md': '06.settings/02.data-model/05.priority-levels.md',
  'effort-points-and-time-estimation.md': '06.settings/02.data-model/06.effort-points-and-time-estimation.md',
  'statuses-and-wip-limiters.md': '06.settings/02.data-model/07.statuses-and-wip-limiters.md',

  // Forms -> Item Request Forms
  'item-request-forms.md': '06.settings/03.forms/item-request-forms.md',

  // Integrations -> GitHub
  'github.md': '06.settings/04.integrations/github.md',
};

function convertAndCopyFile(sourceFile, targetPath) {
  const sourcePath = path.join(BACKUP_DIR, sourceFile);
  const outputPath = path.join(CONTENT_DIR, targetPath);

  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  Source file not found: ${sourceFile}`);
    return false;
  }

  try {
    console.log(`Converting: ${sourceFile} -> ${targetPath}`);

    // Read the file
    const content = fs.readFileSync(sourcePath, 'utf8');

    // Parse metadata
    const { metadata, content: markdownContent } = parseDoc360Metadata(content);

    // Create frontmatter
    const frontmatter = createFrontmatter(metadata);

    // Replace image URLs
    const contentWithLocalImages = replaceImageUrls(markdownContent, sourceFile);

    // Combine
    const finalContent = frontmatter + contentWithLocalImages;

    // Ensure directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write file
    fs.writeFileSync(outputPath, finalContent, 'utf8');
    console.log(`✓ Created: ${targetPath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error converting ${sourceFile}:`, error.message);
    return false;
  }
}

function main() {
  console.log('=== Converting Settings Articles ===\n');

  let successCount = 0;
  let totalCount = Object.keys(FILE_MAPPING).length;

  Object.entries(FILE_MAPPING).forEach(([sourceFile, targetPath]) => {
    if (convertAndCopyFile(sourceFile, targetPath)) {
      successCount++;
    }
  });

  console.log(`\n=== Conversion Complete ===`);
  console.log(`✓ Converted ${successCount} of ${totalCount} files`);
}

if (require.main === module) {
  main();
}

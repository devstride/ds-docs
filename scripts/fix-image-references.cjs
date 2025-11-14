#!/usr/bin/env node

/**
 * Fix Image References Script
 *
 * Re-processes Doc360 image URLs to extract correct filenames
 * instead of using alt text
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  sourceDir: path.join(__dirname, '../DevStride-Docs/v1/articles'),
  contentDir: path.join(__dirname, '../content'),
};

/**
 * Extract filename from Doc360 CDN URL
 */
function extractFilenameFromUrl(url) {
  // URL format: https://cdn.document360.io/.../Images/Documentation/image%28161%29.png
  const match = url.match(/\/([^/]+)\.(png|gif|jpg|jpeg)(\{.*)?$/i);
  if (!match) return null;

  let filename = match[1] + '.' + match[2];

  // Decode URL encoding
  filename = decodeURIComponent(filename);

  // Apply same sanitization as fix-image-names script
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const sanitized = base
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

  return sanitized + ext;
}

/**
 * Find all markdown files recursively
 */
function findMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(findMarkdownFiles(filePath));
    } else if (file.endsWith('.md') && file !== 'index.md') {
      results.push(filePath);
    }
  });

  return results;
}

/**
 * Fix image references in a single file
 */
function fixFileImages(sourceFile, targetFile) {
  if (!fs.existsSync(sourceFile)) {
    console.log(`  ⚠ Source not found, skipping`);
    return 0;
  }

  const sourceContent = fs.readFileSync(sourceFile, 'utf8');
  let targetContent = fs.readFileSync(targetFile, 'utf8');

  // Find all image references in source (Doc360 format)
  const imageRegex = /!\[([^\]]*)\]\((https:\/\/cdn\.document360\.io\/[^)]+)\)(\{[^}]*\})?/g;
  let match;
  let fixedCount = 0;

  while ((match = imageRegex.exec(sourceContent)) !== null) {
    const altText = match[1];
    const url = match[2];

    // Extract actual filename from URL
    const actualFilename = extractFilenameFromUrl(url);

    if (actualFilename) {
      // Replace in target file: /images/[alttext] with /images/[actualfilename]
      const oldRef = `/images/${decodeURIComponent(altText)}`;
      const newRef = `/images/${actualFilename}`;

      if (targetContent.includes(oldRef) && oldRef !== newRef) {
        targetContent = targetContent.replace(new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newRef);
        fixedCount++;
      }
    }
  }

  if (fixedCount > 0) {
    fs.writeFileSync(targetFile, targetContent, 'utf8');
  }

  return fixedCount;
}

/**
 * Main process
 */
function main() {
  console.log('=== Fixing Image References ===\n');

  const targetFiles = findMarkdownFiles(CONFIG.contentDir);
  let totalFixed = 0;
  let filesUpdated = 0;

  console.log(`Processing ${targetFiles.length} markdown files...\n`);

  targetFiles.forEach(targetFile => {
    const relativePath = path.relative(CONFIG.contentDir, targetFile);
    const filename = path.basename(targetFile);

    // Find corresponding source file
    const sourceFile = path.join(CONFIG.sourceDir, filename.replace(/^\d+\./, ''));

    const fixedCount = fixFileImages(sourceFile, targetFile);

    if (fixedCount > 0) {
      console.log(`✓ ${relativePath}: Fixed ${fixedCount} image(s)`);
      totalFixed += fixedCount;
      filesUpdated++;
    }
  });

  console.log(`\n=== Complete ===`);
  console.log(`Fixed ${totalFixed} image references across ${filesUpdated} files`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { extractFilenameFromUrl, fixFileImages };

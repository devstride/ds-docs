#!/usr/bin/env node

/**
 * Fix Image Names Script
 *
 * Renames image files to remove spaces and special characters
 * Updates all markdown references to match new names
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  imageDir: path.join(__dirname, '../public/images'),
  contentDir: path.join(__dirname, '../content'),
};

/**
 * Convert filename to URL-friendly format
 */
function sanitizeFilename(filename) {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);

  // Replace spaces with hyphens, remove special chars except hyphens and underscores
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
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });

  return results;
}

/**
 * Update image references in markdown files
 */
function updateMarkdownReferences(oldName, newName) {
  const mdFiles = findMarkdownFiles(CONFIG.contentDir);
  let updatedCount = 0;

  mdFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const oldRef = `/images/${oldName}`;
    const newRef = `/images/${newName}`;

    if (content.includes(oldRef)) {
      content = content.replace(new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newRef);
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
      console.log(`  Updated: ${path.basename(filePath)}`);
    }
  });

  return updatedCount;
}

/**
 * Main process
 */
function main() {
  console.log('=== Fixing Image Names ===\n');

  if (!fs.existsSync(CONFIG.imageDir)) {
    console.error(`Error: Image directory not found: ${CONFIG.imageDir}`);
    process.exit(1);
  }

  const images = fs.readdirSync(CONFIG.imageDir);
  const toRename = [];

  // Find images with spaces or special chars
  images.forEach(filename => {
    const filePath = path.join(CONFIG.imageDir, filename);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const sanitized = sanitizeFilename(filename);
      if (sanitized !== filename) {
        toRename.push({ old: filename, new: sanitized });
      }
    }
  });

  console.log(`Found ${toRename.length} images to rename\n`);

  if (toRename.length === 0) {
    console.log('No images need renaming!');
    return;
  }

  // Rename images and update references
  toRename.forEach(({ old: oldName, new: newName }) => {
    console.log(`\nRenaming: ${oldName} → ${newName}`);

    const oldPath = path.join(CONFIG.imageDir, oldName);
    const newPath = path.join(CONFIG.imageDir, newName);

    // Rename the file
    fs.renameSync(oldPath, newPath);

    // Update markdown references
    const updated = updateMarkdownReferences(oldName, newName);
    console.log(`  Updated ${updated} markdown file(s)`);
  });

  console.log(`\n=== Complete ===`);
  console.log(`Renamed ${toRename.length} images`);
  console.log('All markdown references updated');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { sanitizeFilename, updateMarkdownReferences };

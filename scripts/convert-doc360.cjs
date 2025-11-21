#!/usr/bin/env node

/**
 * Doc360 to Nuxt Content Migration Script
 *
 * Converts Doc360 exported markdown files to Nuxt Content format:
 * - Transforms custom metadata (## Metadata_Start/End) to YAML frontmatter
 * - Replaces CDN image URLs with local /images/ paths
 * - Preserves markdown content structure
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../DevStride-Docs/v1/articles'),
  outputDir: path.join(__dirname, '../content/docs'),
  imageSourceDir: path.join(__dirname, '../DevStride-Docs/Media/Images'),
  imageOutputDir: path.join(__dirname, '../public/images'),
};

/**
 * Parse Doc360 metadata format and convert to object
 */
function parseDoc360Metadata(content) {
  const metadataRegex = /## Metadata_Start\s+(.*?)## Metadata_End/s;
  const match = content.match(metadataRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const metadataBlock = match[1];
  const metadata = {};

  // Parse each metadata line
  const lines = metadataBlock.split('\n').filter(line => line.trim());
  lines.forEach(line => {
    const fieldMatch = line.match(/^##\s*([^:]+):\s*(.*)$/);
    if (fieldMatch) {
      const key = fieldMatch[1].trim();
      const value = fieldMatch[2].trim();
      metadata[key] = value;
    }
  });

  // Remove metadata block from content
  const cleanContent = content.replace(metadataRegex, '').trim();

  return { metadata, content: cleanContent };
}

/**
 * Convert metadata to YAML frontmatter
 */
function createFrontmatter(metadata) {
  const frontmatter = {
    title: metadata.title || 'Untitled',
    description: metadata.description || '',
  };

  // Add optional fields if present
  if (metadata.seoTitle && metadata.seoTitle !== metadata.title) {
    frontmatter.seoTitle = metadata.seoTitle;
  }

  // Generate YAML
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      // Escape quotes in values
      const escapedValue = value.replace(/"/g, '\\"');
      return `${key}: "${escapedValue}"`;
    })
    .join('\n');

  return `---\n${yaml}\n---\n\n`;
}

/**
 * Replace CDN image URLs with local paths
 */
function replaceImageUrls(content, filename) {
  // Pattern: ![alt text](https://cdn.document360.io/.../filename){height="" 
  // =""}
  const imageRegex = /!\[([^\]]*)\]\(https:\/\/cdn\.document360\.io\/[^)]+\)(\{[^}]*\})?/g;

  return content.replace(imageRegex, (match, altText, attributes) => {
    // Use alt text as filename hint, or extract from URL
    let imageName = altText;

    // Decode URL encoding (e.g., %20 -> space, %28 -> (, %29 -> ))
    imageName = decodeURIComponent(imageName);

    // If alt text is generic like "image.png", keep it as is
    // The actual filename mapping will be handled during image migration

    // Return local path without the extra attributes
    return `![${altText}](/images/${imageName})`;
  });
}

/**
 * Generate slug from filename
 */
function generateSlug(filename) {
  return path.basename(filename, '.md')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Convert a single Doc360 markdown file
 */
function convertFile(filePath, outputPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const filename = path.basename(filePath);

  console.log(`Converting: ${filename}`);

  // Parse metadata
  const { metadata, content: markdownContent } = parseDoc360Metadata(content);

  // Create frontmatter
  const frontmatter = createFrontmatter(metadata);

  // Replace image URLs
  const contentWithLocalImages = replaceImageUrls(markdownContent, filename);

  // Combine frontmatter and content
  const finalContent = frontmatter + contentWithLocalImages;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write converted file
  fs.writeFileSync(outputPath, finalContent, 'utf8');

  return { filename, metadata };
}

/**
 * Copy images from source to destination
 */
function copyImages() {
  console.log('\n=== Copying Images ===');

  if (!fs.existsSync(CONFIG.imageSourceDir)) {
    console.log('No images directory found, skipping...');
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.imageOutputDir)) {
    fs.mkdirSync(CONFIG.imageOutputDir, { recursive: true });
  }

  const images = fs.readdirSync(CONFIG.imageSourceDir);
  console.log(`Found ${images.length} images to copy`);

  let copiedCount = 0;
  images.forEach(image => {
    const sourcePath = path.join(CONFIG.imageSourceDir, image);
    const destPath = path.join(CONFIG.imageOutputDir, image);

    // Only copy files (not directories)
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      copiedCount++;
    }
  });

  console.log(`Copied ${copiedCount} images to ${CONFIG.imageOutputDir}`);
}

/**
 * Main conversion process
 */
function main() {
  console.log('=== Doc360 to Nuxt Content Converter ===\n');

  // Check source directory
  if (!fs.existsSync(CONFIG.sourceDir)) {
    console.error(`Error: Source directory not found: ${CONFIG.sourceDir}`);
    process.exit(1);
  }

  // Get all markdown files
  const files = fs.readdirSync(CONFIG.sourceDir)
    .filter(f => f.endsWith('.md'))
    .sort();

  console.log(`Found ${files.length} markdown files to convert\n`);

  // Convert each file
  const converted = [];
  files.forEach(file => {
    const sourcePath = path.join(CONFIG.sourceDir, file);
    const outputPath = path.join(CONFIG.outputDir, file);

    try {
      const result = convertFile(sourcePath, outputPath);
      converted.push(result);
    } catch (error) {
      console.error(`Error converting ${file}:`, error.message);
    }
  });

  console.log(`\n=== Conversion Complete ===`);
  console.log(`Converted ${converted.length} of ${files.length} files`);
  console.log(`Output directory: ${CONFIG.outputDir}\n`);

  // Copy images
  copyImages();

  console.log('\n=== Migration Summary ===');
  console.log(`✓ Markdown files: ${converted.length}`);
  console.log(`✓ Output: ${CONFIG.outputDir}`);
  console.log(`✓ Images: ${CONFIG.imageOutputDir}`);
  console.log('\nNext steps:');
  console.log('1. Review converted files');
  console.log('2. Organize content into logical sections');
  console.log('3. Create .navigation.yml files');
  console.log('4. Update content/index.md homepage');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { convertFile, parseDoc360Metadata, createFrontmatter, replaceImageUrls };

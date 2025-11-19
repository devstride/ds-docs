#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the backup file to get the original image URLs
function getOriginalImageUrls(backupFile) {
  const content = fs.readFileSync(backupFile, 'utf8');
  const imageMatches = content.matchAll(/!\[([^\]]*)\]\((https:\/\/cdn\.document360\.io\/[^)]+)\)/g);

  const images = [];
  for (const match of imageMatches) {
    const altText = match[1];
    const url = match[2];
    // Extract the actual filename from the URL
    // e.g., image%2816%29.png -> image(16).png
    const urlParts = url.split('/');
    const filename = decodeURIComponent(urlParts[urlParts.length - 1]);
    images.push({ altText, filename });
  }

  return images;
}

// Fix images in a markdown file
function fixImagesInFile(filePath, backupFile) {
  console.log(`\nProcessing: ${filePath}`);

  const originalImages = getOriginalImageUrls(backupFile);

  if (originalImages.length === 0) {
    console.log('  No images found in backup file');
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace generic image.png references with actual filenames
  let imageIndex = 0;
  content = content.replace(/!\[image\.png\]\(\/images\/image\.png\)/g, (match) => {
    if (imageIndex < originalImages.length) {
      const actualImage = originalImages[imageIndex];
      imageIndex++;
      modified = true;
      console.log(`  Replacing: image.png -> ${actualImage.filename}`);
      return `![${actualImage.altText}](/images/${actualImage.filename})`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Updated ${filePath}`);
  } else {
    console.log(`  No changes needed`);
  }
}

// Copy missing images
function copyMissingImages(imageNames) {
  const backupDir = path.join(__dirname, '../DevStride-Docs/Media/Images');
  const publicDir = path.join(__dirname, '../public/images');

  imageNames.forEach(imageName => {
    const sourcePath = path.join(backupDir, imageName);
    const destPath = path.join(publicDir, imageName);

    if (fs.existsSync(sourcePath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`  ✓ Copied: ${imageName}`);
    }
  });
}

// Main
const SETTINGS_FILES = [
  {
    file: 'content/06.settings/02.data-model/04.custom-fields.md',
    backup: 'DevStride-Docs/v1/articles/custom-fields.md'
  },
  {
    file: 'content/06.settings/03.forms/item-request-forms.md',
    backup: 'DevStride-Docs/v1/articles/item-request-forms.md'
  }
];

console.log('=== Fixing Settings Images ===\n');

// First, collect all image names we need
const allImageNames = new Set();

SETTINGS_FILES.forEach(({ backup }) => {
  const images = getOriginalImageUrls(backup);
  images.forEach(img => allImageNames.add(img.filename));
});

// Copy missing images
console.log('\n=== Copying Missing Images ===');
copyMissingImages(Array.from(allImageNames));

// Fix references in files
console.log('\n=== Fixing Image References ===');
SETTINGS_FILES.forEach(({ file, backup }) => {
  fixImagesInFile(file, backup);
});

console.log('\n=== Complete ===\n');

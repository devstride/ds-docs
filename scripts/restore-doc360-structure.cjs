const fs = require('fs');
const path = require('path');

// Load the doc360 structure
const doc360Data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../DevStride-Docs/v1/v1_categories_articles.json'), 'utf8')
);

const contentDir = path.join(__dirname, '../content');
const newContentDir = path.join(__dirname, '../content-doc360');

// Helper function to slugify category title into directory name
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[:\s]+/g, '-')
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper function to get clean filename from article path
function getCleanFilename(articlePath) {
  return path.basename(articlePath, '.md');
}

// Build a map of article filename to file path in current content
function buildArticleMap() {
  const articleMap = new Map();

  // Read all current content files
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        // Extract the base filename without number prefix
        // e.g., "29.2024-08-28.md" -> "2024-08-28"
        const filename = path.basename(fullPath, '.md');
        const cleanFilename = filename.replace(/^\d+\./, ''); // Remove leading numbers and dot
        articleMap.set(cleanFilename, fullPath);
      }
    }
  }

  if (fs.existsSync(contentDir)) {
    scanDirectory(contentDir);
  }

  return articleMap;
}

// Process category and create directory structure
function processCategory(category, parentPath, orderPrefix) {
  const categorySlug = category.Languages[0].Slug;
  const categoryTitle = category.Languages[0].Title;
  const dirName = `${orderPrefix}.${slugify(categoryTitle)}`;
  const categoryPath = path.join(parentPath, dirName);

  // Create directory
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
  }

  // Create .navigation.yml
  const navContent = `title: "${categoryTitle}"\n`;
  fs.writeFileSync(path.join(categoryPath, '.navigation.yml'), navContent, 'utf8');

  console.log(`Created category: ${categoryPath}`);

  return {
    path: categoryPath,
    title: categoryTitle,
    slug: categorySlug,
    articles: category.Articles || [],
    subCategories: category.SubCategories || []
  };
}

// Recursively process categories
function processCategoryHierarchy(categories, parentPath, startOrder = 1) {
  const results = [];

  // Sort categories by their Order field
  const sortedCategories = [...categories].sort((a, b) => a.Order - b.Order);

  sortedCategories.forEach((category, index) => {
    const orderPrefix = String(startOrder + index).padStart(2, '0');
    const categoryInfo = processCategory(category, parentPath, orderPrefix);

    // Process subcategories recursively
    if (categoryInfo.subCategories && categoryInfo.subCategories.length > 0) {
      const subResults = processCategoryHierarchy(
        categoryInfo.subCategories,
        categoryInfo.path,
        1 // Start subcategories at 1
      );
      categoryInfo.processedSubCategories = subResults;
    }

    results.push(categoryInfo);
  });

  return results;
}

// Find article file in current content by filename
function findArticleFile(article, articleMap) {
  // Get clean filename from doc360 path (e.g., "2024-08-28.md" -> "2024-08-28")
  const filename = getCleanFilename(article.Path);

  if (articleMap.has(filename)) {
    return articleMap.get(filename);
  }

  return null;
}

// Copy articles to their new locations
function copyArticles(categoryInfo, articleMap, copiedFiles) {
  if (!categoryInfo.articles || categoryInfo.articles.length === 0) {
    return;
  }

  // Sort articles by Order
  const sortedArticles = [...categoryInfo.articles].sort((a, b) => a.Order - b.Order);

  sortedArticles.forEach((article, index) => {
    const sourceFile = findArticleFile(article, articleMap);

    if (!sourceFile) {
      console.warn(`Warning: Could not find file for article ${article.Path} (ID: ${article.Id})`);
      return;
    }

    // Check if we already copied this file
    if (copiedFiles.has(sourceFile)) {
      console.warn(`Warning: File ${sourceFile} already copied, skipping duplicate`);
      return;
    }

    const orderPrefix = String(article.Order).padStart(2, '0');
    // Get the clean filename from the article path (e.g., "basic-terms.md")
    const cleanFilename = path.basename(article.Path);
    const targetFile = path.join(categoryInfo.path, `${orderPrefix}.${cleanFilename}`);

    // Copy the file (preserving content)
    try {
      fs.copyFileSync(sourceFile, targetFile);
      copiedFiles.add(sourceFile);
      console.log(`Copied: ${sourceFile} -> ${targetFile}`);
    } catch (error) {
      console.error(`Error copying ${sourceFile}:`, error.message);
    }
  });

  // Process subcategories
  if (categoryInfo.processedSubCategories) {
    categoryInfo.processedSubCategories.forEach(subCat => {
      copyArticles(subCat, articleMap, copiedFiles);
    });
  }
}

// Main execution
function main() {
  console.log('Starting doc360 structure restoration...\n');

  // Build article map from current content
  console.log('Building article map from current content...');
  const articleMap = buildArticleMap();
  console.log(`Found ${articleMap.size} articles in current content\n`);

  // Create new content directory
  if (fs.existsSync(newContentDir)) {
    console.log('Removing existing content-doc360 directory...');
    fs.rmSync(newContentDir, { recursive: true, force: true });
  }
  fs.mkdirSync(newContentDir, { recursive: true });

  // Process all categories
  console.log('Creating category structure...\n');
  const processedCategories = processCategoryHierarchy(
    doc360Data.Categories,
    newContentDir,
    1
  );

  // Copy articles to new structure
  console.log('\nCopying articles to new structure...\n');
  const copiedFiles = new Set();
  processedCategories.forEach(categoryInfo => {
    copyArticles(categoryInfo, articleMap, copiedFiles);
  });

  console.log(`\n✅ Migration complete!`);
  console.log(`✅ Total files copied: ${copiedFiles.size}`);
  console.log(`\nNew structure created in: ${newContentDir}`);
  console.log(`\nNext steps:`);
  console.log(`1. Review the new structure in content-doc360/`);
  console.log(`2. If it looks good, backup current content/ and replace with content-doc360/`);
  console.log(`3. Run: mv content content-backup && mv content-doc360 content`);
}

main();

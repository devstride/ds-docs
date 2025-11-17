import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the content directory path
const contentDir = path.join(__dirname, '../content');
const backupDir = path.join(__dirname, '../content-backup');

/**
 * Convert Doc360 alert syntax to new Alert component syntax
 * Pattern: :::(Type) (Optional Title)
 * To: ::alert{type="type" title="Optional Title"}
 */
function convertAlertSyntax(content) {
  let convertedContent = content;
  let conversions = 0;

  // Pattern to match Doc360 callouts
  // Matches: :::(Type) or :::(Type) (Title)
  // Followed by content until :::
  const calloutPattern = /:::\((\w+)\)(?:\s+\(([^)]+)\))?\s*\n([\s\S]*?)\n:::/g;

  convertedContent = convertedContent.replace(calloutPattern, (match, type, title, body) => {
    conversions++;

    // Map Doc360 types to our alert types (case-insensitive)
    const typeMap = {
      'info': 'info',
      'warning': 'warning',
      'danger': 'danger',
      'success': 'success',
      'note': 'note',
      'tip': 'tip',
      'caution': 'caution'
    };

    const normalizedType = typeMap[type.toLowerCase()] || 'info';

    // Build the new syntax
    let newSyntax = '::alert{';
    newSyntax += `type="${normalizedType}"`;

    if (title) {
      // Escape quotes in title
      const escapedTitle = title.replace(/"/g, '\\"');
      newSyntax += ` title="${escapedTitle}"`;
    }

    newSyntax += '}\n';

    // Clean up the body content (remove extra leading/trailing whitespace)
    const cleanedBody = body.trim();
    newSyntax += cleanedBody;
    newSyntax += '\n::';

    return newSyntax;
  });

  return { content: convertedContent, conversions };
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Create backup of content directory
 */
function createBackup() {
  if (fs.existsSync(backupDir)) {
    console.log('⚠️  Backup directory already exists. Skipping backup creation.');
    return false;
  }

  console.log('📦 Creating backup of content directory...');
  fs.cpSync(contentDir, backupDir, { recursive: true });
  console.log(`✅ Backup created at: ${backupDir}`);
  return true;
}

/**
 * Main conversion function
 */
function convertAllFiles() {
  console.log('🔍 Starting Doc360 to Alert component migration...\n');

  // Create backup first
  createBackup();

  // Find all markdown files
  const markdownFiles = findMarkdownFiles(contentDir);
  console.log(`\n📄 Found ${markdownFiles.length} markdown files\n`);

  let totalConversions = 0;
  let filesModified = 0;

  // Process each file
  markdownFiles.forEach(filePath => {
    const relativePath = path.relative(contentDir, filePath);
    const originalContent = fs.readFileSync(filePath, 'utf8');

    // Convert the content
    const { content: convertedContent, conversions } = convertAlertSyntax(originalContent);

    if (conversions > 0) {
      // Write the converted content back to the file
      fs.writeFileSync(filePath, convertedContent, 'utf8');
      console.log(`✅ ${relativePath}: ${conversions} conversion(s)`);
      filesModified++;
      totalConversions += conversions;
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log(`\n✨ Conversion complete!`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`   Total conversions: ${totalConversions}`);

  if (filesModified > 0) {
    console.log(`\n💡 To restore from backup, run:`);
    console.log(`   rm -rf ${contentDir} && mv ${backupDir} ${contentDir}`);
  }

  console.log('\n' + '='.repeat(60) + '\n');
}

// Run the conversion
try {
  convertAllFiles();
} catch (error) {
  console.error('❌ Error during conversion:', error);
  process.exit(1);
}

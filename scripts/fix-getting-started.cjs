#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const files = ['basic-terms.md', 'explore-the-workspace.md', 'explore-your-workspace.md', 'workspace-sidebar.md'];
const sourceBase = path.join(__dirname, '../DevStride-Docs/v1/articles');
const destBase = path.join(__dirname, '../content/1.getting-started');

function parseDoc360Metadata(content) {
  const metadataRegex = /## Metadata_Start\s+(.*?)## Metadata_End/s;
  const match = content.match(metadataRegex);
  if (!match) return { metadata: {}, content };

  const metadataBlock = match[1];
  const metadata = {};
  const lines = metadataBlock.split('\n').filter(line => line.trim());
  lines.forEach(line => {
    const fieldMatch = line.match(/^##\s*([^:]+):\s*(.*)$/);
    if (fieldMatch) {
      metadata[fieldMatch[1].trim()] = fieldMatch[2].trim();
    }
  });

  const cleanContent = content.replace(metadataRegex, '').trim();
  return { metadata, content: cleanContent };
}

function createFrontmatter(metadata) {
  const title = metadata.title || 'Untitled';
  const description = metadata.description || '';
  const escapedTitle = title.replace(/"/g, '\\"');
  const escapedDesc = description.replace(/"/g, '\\"');
  return `---\ntitle: "${escapedTitle}"\ndescription: "${escapedDesc}"\n---\n\n`;
}

// Create directory
if (!fs.existsSync(destBase)) {
  fs.mkdirSync(destBase, { recursive: true });
}

files.forEach((file, idx) => {
  const num = String(idx + 1);
  const sourcePath = path.join(sourceBase, file);
  const destPath = path.join(destBase, `${num}.${file}`);

  const content = fs.readFileSync(sourcePath, 'utf8');
  const { metadata, content: markdownContent } = parseDoc360Metadata(content);
  const frontmatter = createFrontmatter(metadata);
  const finalContent = frontmatter + markdownContent.replace(
    /!\[([^\]]*)\]\(https:\/\/cdn\.document360\.io\/[^)]+\)(\{[^}]*\})?/g,
    (match, altText) => {
      const imageName = decodeURIComponent(altText);
      return `![${altText}](/images/${imageName})`;
    }
  );

  fs.writeFileSync(destPath, finalContent, 'utf8');
  console.log(`Created: ${num}.${file}`);
});

// Create navigation file
fs.writeFileSync(path.join(destBase, '.navigation.yml'), 'title: Getting Started\n', 'utf8');
console.log('Created .navigation.yml');
console.log('\n✓ Getting Started section recreated successfully');

#!/usr/bin/env node

/**
 * Content Organization Script
 *
 * Organizes converted Doc360 markdown files into logical sections
 * and creates navigation files for Nuxt Content
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../content/docs'),
  contentDir: path.join(__dirname, '../content'),
};

// Define content organization structure
const CONTENT_STRUCTURE = {
  'getting-started': {
    title: 'Getting Started',
    patterns: ['basic-terms', 'explore-the-workspace', 'explore-your-workspace', 'workspace-sidebar'],
  },
  'admin': {
    title: 'Admin Guide',
    patterns: ['admin-onboarding', '^ao', 'invite-and-add-users', 'set-up-teams', 'org-profile'],
  },
  'work-items': {
    title: 'Work Items',
    patterns: ['items-', 'items.md', 'creating-work-items', 'overview-of-item-types', 'item-types', 'add-base-item', 'add-child-item', 'configuring-item-types', 'customizing-item-types', 'using-item-types', 'item-request-forms'],
  },
  'cycles': {
    title: 'Cycles & Sprints',
    patterns: ['cycles', 'cycle.md', 'creating-cycles', 'plan-a-sprint', 'conduct-a-standup', 'backlog-refinement', 'handling-incomplete-items'],
  },
  'boards': {
    title: 'Boards',
    patterns: ['boards', 'creating-boards', 'kanban', 'perpetual', 'understanding-board-views', 'track-and-move-work', 'importing-stories'],
  },
  'workstreams': {
    title: 'Workstreams',
    patterns: ['workstreams', 'workstream', 'mapping-your-workstreams'],
  },
  'gantt': {
    title: 'Gantt Charts',
    patterns: ['gantt', 'creating-and-managing-gantt', 'setting-up-gantt', 'viewing-gantt', 'using-gantt', 'tips-for-effective-gantt', 'create-new-gantt', 'add-to-gantt', 'manage-and-edit-dependencies'],
  },
  'reports': {
    title: 'Reports & Analytics',
    patterns: ['reports-', 'what-is-burn', 'what-is-churn', 'what-is-cumulative', 'what-is-current', 'what-is-cycle-time', 'what-is-throughput', 'what-is-trending', 'what-is-user-time', 'what-is-velocity', 'report-filters', 'using-ai-for'],
  },
  'customization': {
    title: 'Customization',
    patterns: ['custom-fields', 'tags', 'statuses', 'wip-limit', 'priority-levels', 'cadences', 'automations', 'what-are-automations', 'setting-up-basic-automations', 'advanced-automation'],
  },
  'notifications': {
    title: 'Notifications',
    patterns: ['notifications', 'customizing-notification'],
  },
  'integrations': {
    title: 'Integrations',
    patterns: ['github'],
  },
  'my-work': {
    title: 'My Work',
    patterns: ['my-work'],
  },
  'best-practices': {
    title: 'Best Practices',
    patterns: ['best-practices', 'how-predictability', 'effort-points-and-time', 'estimation-types', 'viewing-optimization', 'scenario-planning'],
  },
  'release-notes': {
    title: 'Release Notes',
    patterns: ['releases', '^\\d{4}-\\d{2}-\\d{2}', '^\\d{2}-\\d{2}'],
  },
};

/**
 * Categorize a file based on patterns
 */
function categorizeFile(filename) {
  for (const [category, config] of Object.entries(CONTENT_STRUCTURE)) {
    for (const pattern of config.patterns) {
      const regex = new RegExp(pattern, 'i');
      if (regex.test(filename)) {
        return category;
      }
    }
  }
  return 'misc';
}

/**
 * Create navigation file for a section
 */
function createNavigationFile(sectionDir, title, fileCount) {
  const navPath = path.join(sectionDir, '.navigation.yml');
  const content = `title: ${title}\n`;
  fs.writeFileSync(navPath, content, 'utf8');
  console.log(`  Created .navigation.yml (${fileCount} files)`);
}

/**
 * Organize files into sections
 */
function organizeFiles() {
  console.log('=== Organizing Content ===\n');

  if (!fs.existsSync(CONFIG.sourceDir)) {
    console.error(`Error: Source directory not found: ${CONFIG.sourceDir}`);
    process.exit(1);
  }

  // Get all markdown files
  const files = fs.readdirSync(CONFIG.sourceDir)
    .filter(f => f.endsWith('.md'))
    .sort();

  console.log(`Found ${files.length} files to organize\n`);

  // Track categorization
  const categorized = {};
  const uncategorized = [];

  // Categorize files
  files.forEach(file => {
    const category = categorizeFile(file);

    if (category === 'misc') {
      uncategorized.push(file);
    } else {
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push(file);
    }
  });

  // Create sections and move files
  let fileIndex = 1;
  for (const [category, config] of Object.entries(CONTENT_STRUCTURE)) {
    if (!categorized[category] || categorized[category].length === 0) {
      continue;
    }

    const sectionNum = String(fileIndex).padStart(1, '0');
    const sectionDir = path.join(CONFIG.contentDir, `${sectionNum}.${category}`);

    console.log(`\n${config.title} (${sectionNum}.${category})`);

    // Create section directory
    if (!fs.existsSync(sectionDir)) {
      fs.mkdirSync(sectionDir, { recursive: true });
    }

    // Move files with numbering
    categorized[category].forEach((file, idx) => {
      const num = String(idx + 1).padStart(1, '0');
      const sourcePath = path.join(CONFIG.sourceDir, file);
      const destPath = path.join(sectionDir, `${num}.${file}`);

      fs.renameSync(sourcePath, destPath);
      console.log(`  ${num}.${file}`);
    });

    // Create navigation file
    createNavigationFile(sectionDir, config.title, categorized[category].length);

    fileIndex++;
  }

  // Handle uncategorized files
  if (uncategorized.length > 0) {
    console.log(`\n\nUncategorized Files (${uncategorized.length}):`);
    const miscDir = path.join(CONFIG.contentDir, '99.misc');

    if (!fs.existsSync(miscDir)) {
      fs.mkdirSync(miscDir, { recursive: true });
    }

    uncategorized.forEach((file, idx) => {
      const num = String(idx + 1).padStart(1, '0');
      const sourcePath = path.join(CONFIG.sourceDir, file);
      const destPath = path.join(miscDir, `${num}.${file}`);

      fs.renameSync(sourcePath, destPath);
      console.log(`  ${file}`);
    });

    createNavigationFile(miscDir, 'Miscellaneous', uncategorized.length);
  }

  // Remove empty docs directory
  const remaining = fs.readdirSync(CONFIG.sourceDir);
  if (remaining.length === 0) {
    fs.rmdirSync(CONFIG.sourceDir);
    console.log('\n✓ Removed empty docs directory');
  }

  console.log('\n=== Organization Complete ===');
  console.log(`Organized ${files.length} files into ${Object.keys(categorized).length} sections`);
  if (uncategorized.length > 0) {
    console.log(`${uncategorized.length} files in miscellaneous section (review for proper categorization)`);
  }
}

// Run the script
if (require.main === module) {
  organizeFiles();
}

module.exports = { organizeFiles, categorizeFile };

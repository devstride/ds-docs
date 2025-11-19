# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 documentation site (`ds-docs`) using the @nuxt/content module for content management. The project uses pnpm as the package manager.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Generate static site
pnpm generate
```

## Architecture

**Framework**: Nuxt 4.2.1+ with Vue 3.5+
**Content Module**: @nuxt/content 3.8+ for markdown-based content management
**Package Manager**: pnpm (note: uses pnpm-lock.yaml)

The project follows Nuxt's file-based conventions:
- `app/app.vue` - Root application component
- `nuxt.config.ts` - Nuxt configuration (devtools enabled, @nuxt/content module registered)
- TypeScript config uses Nuxt's generated tsconfig references (.nuxt/tsconfig.*.json)

When adding features, follow Nuxt 4 conventions for pages/, components/, composables/, and layouts/ directories. Content files should be placed in a content/ directory (standard @nuxt/content convention).

## Content Organization Rules

### Navigation Order (CRITICAL!)
**Docus uses numbered prefixes in directory names to control navigation order.**

- Directory names MUST use **zero-padded numbered prefixes** like `01.getting-started/`, `02.essentials/`
- **IMPORTANT**: Use zero-padded numbers (01, 02, 03... 09, 10, 11) to ensure correct alphabetical sorting
  - ❌ WRONG: `1.`, `2.`, `3.`... `10.`, `11.` (sorts as 1, 10, 11, 12, 2, 3, 4...)
  - ✅ CORRECT: `01.`, `02.`, `03.`... `09.`, `10.`, `11.` (sorts as 01, 02, 03... 09, 10, 11, 12)
- Docus automatically strips these numbers from URLs - they won't appear to end users
- Example: `content/01.admin-onboarding/` becomes `/admin-onboarding/` in the URL
- The numbers control the sort order in the navigation sidebar via **string/alphabetical sorting**
- Each directory should still have a `.navigation.yml` file with a `title` property for display

### Directory Naming Convention
- Format: `{zero-padded-number}.{slug-name}/`
- Examples:
  - `01.admin-onboarding-getting-started/`
  - `02.workstreams-and-work-items/`
  - `03.boards/`
  - `10.filters/`
  - `11.release-notes/`
- The zero-padded number determines navigation order (sorted as strings)
- The slug after the dot becomes the URL path
- `.navigation.yml` controls the display title:
  ```yaml
  title: "Workstreams and Work Items"
  ```

### Why Zero-Padding is Essential
The system performs **alphabetical/string sorting** on directory names, not numeric sorting:
- Without padding: "1", "10", "11", "12", "2", "3" (wrong order!)
- With padding: "01", "02", "03"... "10", "11", "12" (correct order!)

**Key Points**:
1. The `order` field in `.navigation.yml` does NOT control navigation ordering in Docus
2. You MUST use zero-padded numbered directory prefixes (01, 02, 03, etc.)
3. This applies to ALL levels of navigation (parent and child directories)

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

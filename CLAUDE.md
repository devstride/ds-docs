# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`ds-docs` is the DevStride documentation site. It is built on **[Docus](https://docus.dev)** — a documentation theme that sits on top of **Nuxt 4** and **@nuxt/content**. Almost all of this repo is **Markdown content**; the layout, navigation, search, and most UI come from the Docus theme. We add a small amount of customization on top (a few content components, CSS overrides, and two build-time modules).

The package manager is **pnpm**. Node ≥ 22.13.

## Development Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Dev server on http://localhost:3000
pnpm build        # Production build
pnpm preview      # Preview the production build locally
pnpm generate     # Generate the static site (used for deploy)
```

All scripts run with `--extends docus`.

## Architecture

- **Framework**: Nuxt 4 + Vue 3.5, theme-extended from `docus` (`extends: ['docus']` in `nuxt.config.ts`).
- **Content**: `@nuxt/content` — all docs are Markdown (MDC) under `content/`.
- **Editing**: wired to **Nuxt Studio** (`nuxt-studio`), bound to GitHub `devstride/ds-docs` on `main`, so content can be edited in-browser and committed back.

Key files and directories:
- `content/` — **all documentation lives here** (see Content rules below).
- `app.vue` — root app component (at repo root, not `app/`). Overrides the theme default.
- `app.config.ts` — theme/UI config: color palette and the page grid layout.
- `nuxt.config.ts` — module registration, CSS, Studio binding, CORS route rules.
- `components/content/` — custom MDC components usable inside Markdown.
- `components/docs/` — overrides of Docus theme slots (e.g. `DocsAsideLeftBody.vue`).
- `modules/` — local build-time Nuxt modules (see below).
- `assets/css/` — CSS overrides (`navigation.css`, `header-logo.css`, `page-width.css`).
- `public/images/` — image assets served at `/images/...`.
- `scripts/` — one-off migration/maintenance scripts (Doc360 import, image fixups, nav cleanup). Not part of the build.

`content.config.ts` is intentionally empty/commented — we rely on Docus's default content collection.

### Local modules (`modules/`)
- `release-notes-redirect.ts` — adds `/releases` and `/release-notes` redirects at build time.
- `raw-md-generator.ts` — emits static raw `.md` files at build, served under `/raw-md/**`.

Both `/release-notes/**` and `/raw-md/**` have permissive CORS route rules (dev only; GitHub Pages ignores custom headers in production).

## Content Organization Rules

### Navigation Order (CRITICAL!)
**Docus uses numbered prefixes in directory AND file names to control navigation order.**

- Names MUST use **zero-padded numbered prefixes** like `01.getting-started/`, `02.essentials.md`.
- **Always zero-pad** (01, 02, 03... 09, 10, 11) so alphabetical sorting matches numeric intent:
  - ❌ WRONG: `1.`, `2.`... `10.`, `11.` (sorts as 1, 10, 11, 2, 3...)
  - ✅ CORRECT: `01.`, `02.`... `09.`, `10.`, `11.`
- Docus strips the numeric prefix from the URL — `content/01.admin-onboarding/` → `/admin-onboarding/`.
- The number controls **string/alphabetical** sort order in the sidebar; the slug after the dot becomes the URL path.
- Applies at **every level** (parent and child directories, and the `.md` files within).
- **Never reuse a prefix number** within the same directory — duplicate prefixes (e.g. two `49.` files) sort ambiguously. Renumber instead.

### Directory & file naming
- Format: `{zero-padded-number}.{slug-name}/` for directories, `{zero-padded-number}.{slug-name}.md` for pages.
- Each directory should have a `.navigation.yml` with a `title` for the sidebar label:
  ```yaml
  title: "Workstreams and Work Items"
  ```
- The `order` field in `.navigation.yml` does **NOT** control ordering in Docus — only the zero-padded prefixes do. (Some legacy files still contain `order:`; it's a no-op.)

### Page frontmatter
Every content page starts with YAML frontmatter. Conventions:
- **`title`** — required; the page H1 and nav/breadcrumb label.
- **`description`** — required; one-line summary used for SEO and link previews. Keep it present even if short.
- Release-note pages use a date `title` (e.g. `title: 2026-05-29`) and a `description` summarizing the highlights.
- The site landing page (`content/index.md`) uses an `seo:` block instead and composes MDC components in the body.

```markdown
---
title: "How DevStride manages the When"
description: "Perpetual vs. cycle-based boards and when to use each."
---

## First section heading
```

### MDC components (use inside Markdown)
Custom components live in `components/content/` and are invoked with MDC syntax. Available components:

- **`::alert`** — the standard callout (used widely; **prefer this for notes/warnings/tips**). Inline-props block syntax:
  ```markdown
  ::alert{type="tip" title="Migration workflow"}
  Always follow this order: edit entity → generate SQL → migrate → restart.
  ::
  ```
  Valid `type` values: `info` (default), `warning`, `danger`, `success`, `note`, `tip`, `caution`. `title` is optional.
- **`::hero-section`** — landing hero with `#title` / `#description` slots.
- **`::article-lists`**, **`::video-section`**, **`::get-started-release-notes`** — page-specific blocks (see `content/index.md` for usage).

When adding a new content component, place it in `components/content/` so it's auto-available in MDC.

### Images
- Store images in `public/images/` and reference them with a **root-absolute path**: `![alt](/images/example.png)`.
- Group related image sets in subfolders (e.g. `public/images/weekly-logs/`).
- Use descriptive `alt` text where practical (much existing content uses generic `image.png` alt — prefer better text for new content).
- Image-verification helpers exist at the repo root (`verify_images.py`, `detailed_verification_report.py`) and in `scripts/` (`check-missing-images.sh`); run them if you add or move images.

## When making changes
- **Content edits** → work in `content/`, respect zero-padded numbering, include `title` + `description` frontmatter, and use `::alert` for callouts.
- **Look & behavior** → override via `app.config.ts` / `app.vue` / `assets/css/`, add MDC components in `components/content/`, or adjust the `modules/`.
- Don't hand-edit generated output or `.nuxt/`; the static site is produced by `pnpm generate`.

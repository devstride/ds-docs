---
title: "Developer Documentation"
description: "Everything you need to set up your development environment and start contributing to DevStride."
---

# Developer Documentation

Welcome to the DevStride developer documentation. This is your central resource for setting up a development environment, understanding the `ds` CLI, managing infrastructure with Pulumi, and navigating the application architecture. Whether you are onboarding for the first time or looking up a specific command, start here.

## Quick Start

Choose your development setup:

::u-page-grid
---
class: py-8
---
  :::u-page-card
  ---
  icon: i-lucide-cloud
  to: /developer-docs/environment-setup/cloud-dev
  ---
  #title
  Cloud Development (Recommended)

  #description
  Get a fully configured cloud environment in ~10 minutes. Pre-installed tools, automatic setup, and ready to code. No local dependencies to manage.
  :::

  :::u-page-card
  ---
  icon: i-lucide-laptop
  to: /developer-docs/environment-setup/local-setup
  ---
  #title
  Local Development

  #description
  Set up DevStride on your local machine. Full control over your environment with manual configuration of all dependencies.
  :::
::

## What's Covered

### Environment Setup

- **[Cloud Development](/developer-docs/environment-setup/cloud-dev)** - Pre-configured AWS EC2 instance with all tools pre-installed (Node.js 22, pnpm, Docker, AWS CLI, Pulumi, Claude Code)
- **[Local Development](/developer-docs/environment-setup/local-setup)** - Step-by-step guide to configure your local machine with all required dependencies
- **Prerequisites** - Required accounts, access, and tooling for both environments

### ds CLI Reference

- **[All Commands](/developer-docs/ds-cli-reference)** - The `ds` utility is the central tool for DevStride development
- **Development Commands** - Run backend, frontend, build, and test
- **Infrastructure Commands** - Deploy and manage your Pulumi stacks
- **Data Commands** - Migrations, import/export, database reset

### Infrastructure

- **[Pulumi-Based Infrastructure](/developer-docs/infrastructure)** - DevStride uses Pulumi (TypeScript) for infrastructure-as-code on AWS
- **Deploying** - Personal development stacks, preview changes, and deploy with `pulumi up`
- **Safety Guards** - Stage protection, domain validation, resource protection and retention policies
- **Cost Management** - Understanding AWS resource costs and keeping development stacks lean

### Architecture

- **[Backend](/developer-docs/architecture/backend)** - Domain-Driven Design (DDD), CQRS, repository pattern, event-driven architecture with Hono API handlers
- **[Frontend](/developer-docs/architecture/frontend)** - Vue 3 with Composition API, Pinia state management, Quasar component framework, Tailwind CSS

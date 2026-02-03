---
title: "Developer Documentation"
description: "Everything you need to set up your development environment and start contributing to DevStride."
---

# Developer Documentation

Welcome to the DevStride developer documentation. Whether you're setting up your first development environment or diving deep into the codebase architecture, you'll find everything you need here.

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
  Get a fully configured cloud environment in ~10 minutes. Pre-installed tools, automatic setup, and ready to code.
  :::

  :::u-page-card
  ---
  icon: i-lucide-laptop
  to: /developer-docs/environment-setup/local-setup
  ---
  #title
  Local Development

  #description
  Set up DevStride on your local machine. Full control over your environment with manual configuration.
  :::
::

## What's Covered

### Environment Setup
- **Cloud Development** - AWS EC2-based development environment with all tools pre-installed
- **Local Development** - Step-by-step guide to configure your local machine
- **Prerequisites** - Required accounts, access, and tools

### ds CLI Reference
- **Development Commands** - Run backend, frontend, build, and test
- **Database Commands** - Migrations, data import/export, reset
- **Cloud Dev Commands** - Manage your cloud development instance

### Architecture
- **Backend** - DDD, CQRS, repository pattern, event-driven design
- **Frontend** - Vue 3, Pinia, Quasar, Tailwind CSS
- **Infrastructure** - AWS serverless with SST framework

### Contributing
- Code style guidelines
- Testing requirements
- Pull request process

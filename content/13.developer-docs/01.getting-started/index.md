---
title: "Getting Started"
description: "Prerequisites and overview for DevStride development."
---

# Getting Started

This guide will help you get up and running with DevStride development. Before diving in, make sure you have the necessary access and accounts.

## Prerequisites

Before setting up your development environment, you'll need:

### Required Access

| Access | Description | How to Get |
|--------|-------------|------------|
| **AWS SSO** | Deploy infrastructure and access cloud resources | Request from team lead - you'll be invited to `devstride.awsapps.com` |
| **GitHub** | Clone repositories and submit PRs | Must be added to the `devstride` organization |
| **Neon Database** | Your personal database branch | Request a branch (e.g., `local-yourname`) from team lead |

### Recommended Tools

| Tool | Purpose |
|------|---------|
| **Claude Code** | AI-assisted development in your terminal |
| **VS Code** or **Cursor** | IDE with good TypeScript support |
| **GitHub CLI (`gh`)** | Streamlined GitHub operations |

## Choose Your Setup

We offer two development environment options:

### Cloud Development (Recommended)

A fully configured AWS EC2 instance with everything pre-installed:
- 4 vCPU, 16GB RAM, 100GB SSD
- Node.js 20, pnpm, Docker, AWS CLI, Claude Code
- One command to create, automatic setup

**Best for:** Most developers, especially those new to the codebase or who want a consistent environment.

[Set up Cloud Development →](/developer-docs/environment-setup/cloud-dev)

### Local Development

Run everything on your local machine:
- Full control over your environment
- No cloud costs
- Requires manual setup of all dependencies

**Best for:** Developers who prefer local tools or have specific environment requirements.

[Set up Local Development →](/developer-docs/environment-setup/local-setup)

## Next Steps

1. Choose your environment setup (cloud or local)
2. Complete the setup guide
3. Learn the [ds CLI](/developer-docs/ds-cli-reference)
4. Explore the [architecture](/developer-docs/architecture)

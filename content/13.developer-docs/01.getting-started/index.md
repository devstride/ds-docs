---
title: "Getting Started"
description: "Prerequisites, required tools, and a complete walkthrough for setting up your DevStride development environment."
---

# Getting Started

This guide walks you through everything you need before setting up a DevStride development environment. Complete the prerequisites, install the required tools, then choose between cloud or local development.

## Prerequisites

### Required Access

You need the following accounts and permissions before you can begin:

| Access | Description | How to Get |
|--------|-------------|------------|
| **AWS SSO** | Deploy infrastructure and access cloud resources | Request from team lead - you'll be invited to `devstride.awsapps.com` |
| **GitHub** | Clone repositories and submit PRs | Must be added to the `devstride` organization |
| **Neon Database** | Your personal database branch for isolated development | Auto-provisioned by the init wizard, or request from team lead |
| **Pulumi Cloud** | Infrastructure state management for your personal stack | Request access from team lead |

### Required Tools

These must be installed on the machine where you run the `ds` CLI (your local machine for local dev, or pre-installed on cloud dev instances):

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 22+ | Runtime for backend, frontend, CLI, and infrastructure code (use `nvm`) |
| **pnpm** | 8+ | Package manager for all workspaces |
| **AWS CLI** | v2 | AWS authentication and resource access via SSO |
| **Pulumi CLI** | Latest | Infrastructure-as-code deployments |
| **Git** | Latest | Version control |

### Recommended Tools

| Tool | Purpose |
|------|---------|
| **Docker** | Local DynamoDB for backend integration tests |
| **Claude Code** | AI-assisted development in your terminal |
| **VS Code** or **Cursor** | IDE with strong TypeScript support |
| **GitHub CLI (`gh`)** | Streamlined GitHub operations from the command line |

## Quick Start

Once you have the required access and tools installed:

```bash
git clone git@github.com:devstride/devstride.git
cd devstride
nvm use                # Switch to Node 22 (repo includes .nvmrc)
pnpm install
./ds init              # Interactive setup wizard
./ds setup             # Full automated environment setup
```

### What `./ds init` Does

The init wizard walks you through first-time configuration across 11 interactive steps:

1. **Prerequisites check** - Verifies Node.js 22+, pnpm, AWS CLI, Pulumi CLI, and Git are installed
2. **Current environment check** - Detects any existing configuration
3. **Developer name** - Sets your developer name (used for resource naming, e.g. `phil-devstride-api`)
4. **AWS profile** - Configures your AWS SSO profile name
5. **Region** - Selects the AWS region closest to you
6. **Shell configuration** - Writes environment variables and the `ds` alias to your shell config
7. **AWS SSO profile setup** - Creates the SSO profile in `~/.aws/config`
8. **AWS SSO authentication** - Authenticates your SSO session
9. **Environment secrets** - Pulls shared development secrets from AWS Secrets Manager into your local `.env`
10. **Neon database** - Creates or connects to your personal Neon database branch
11. **Pulumi stack init** - Initializes your personal Pulumi stack (e.g. `phil`) for infrastructure deployments

After init completes, your shell configuration is updated with the `ds` alias and environment variables. Run `source ~/.zshrc` (or `source ~/.bashrc` if using bash) to apply them, or restart your terminal.

### What `./ds setup` Does

The setup command performs a complete end-to-end environment build in 10 steps. If your environment is not yet configured (no `DEVSTRIDE_STAGE` or `AWS_PROFILE`), setup automatically invokes `./ds init` first.

1. **Pre-flight checks** - Validates all required tools and access
2. **AWS authentication** - Ensures your AWS SSO session is active
3. **Secrets** - Fetches or refreshes development secrets from Secrets Manager
4. **Neon database** - Verifies or provisions your database branch
5. **pnpm install** - Installs all workspace dependencies
6. **Pulumi stack init** - Ensures your personal stack exists
7. **pulumi up** - Deploys your personal AWS infrastructure (Lambda, API Gateway, Cognito, S3, etc.)
8. **Migrations** - Generates SQL from schema definitions and runs pending database migrations against your Neon branch
9. **Save state** - Persists configuration for future sessions
10. **Start services** - Optionally starts the backend and frontend development servers

::callout{type="tip"}
**First run takes longer.** The initial `pulumi up` creates all AWS resources from scratch (5-10 minutes). Subsequent runs only deploy changes and are much faster.
::

## Choose Your Setup

### Cloud Development (Recommended)

A fully configured AWS EC2 instance with everything pre-installed. One command to create, automatic setup, and ready to code in about 10 minutes. All tools (Node.js 22, pnpm, Docker, AWS CLI, Pulumi, Claude Code) come pre-installed.

**Best for:** Most developers, especially those new to the codebase or who want a consistent, powerful environment without local setup overhead.

[Set up Cloud Development →](/developer-docs/environment-setup/cloud-dev)

### Local Development

Run everything on your local machine with full control over your environment. Requires manual installation of Node.js 22+, pnpm, AWS CLI, Pulumi CLI, and Git.

**Best for:** Developers who prefer local tools, have specific environment requirements, or want to avoid cloud instance costs.

[Set up Local Development →](/developer-docs/environment-setup/local-setup)

## Next Steps

1. **Complete environment setup** - Follow the [cloud](/developer-docs/environment-setup/cloud-dev) or [local](/developer-docs/environment-setup/local-setup) guide
2. **Learn the ds CLI** - Explore all available commands in the [ds CLI Reference](/developer-docs/ds-cli-reference)
3. **Understand the infrastructure** - Learn how Pulumi manages AWS resources in [Infrastructure](/developer-docs/infrastructure)
4. **Explore the architecture** - Dive into backend and frontend patterns in [Architecture](/developer-docs/architecture)

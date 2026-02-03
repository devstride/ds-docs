---
title: "Cloud Development Overview"
description: "Get a fully configured cloud development environment in minutes."
---

# Cloud Development Environment

Cloud development environments for DevStride developers, running on AWS EC2. Get a fully configured environment in about 10 minutes with a single command.

## Why Cloud Development?

- **Fast setup** - One command creates a fully configured environment
- **Consistent** - Same tools and configuration for all developers
- **Powerful** - 4 vCPU, 16GB RAM, 100GB SSD
- **Pre-installed** - Node.js 20, pnpm, Docker, AWS CLI, Claude Code
- **Cost-effective** - Stop when not working, pay only for storage (~$8/month)

## Quick Start

If you already have the DevStride repository cloned:

```bash
cd ~/dev/devstride
./ds cloud-dev init    # Configure environment (one-time)
source ~/.zshrc        # Apply shell changes
./ds cloud-dev create  # Creates fully configured environment
```

The `create` command automatically:
1. Deploys your EC2 instance (5-10 minutes)
2. Waits for initialization to complete
3. Sets up SSH keys and local config
4. Adds a GitHub SSH key (via `gh` CLI or prompts you)
5. Clones the repository and installs dependencies
6. Configures your `.env` file (prompts for your Neon DB connection string)

After create completes:

```bash
ssh devstride-yourname
cd ~/dev/devstride
./ds run backend
```

## Prerequisites

Before setting up cloud-dev, ensure you have:

### 1. AWS SSO Access (Required)

- Request access from a team lead to DevStride AWS SSO
- You'll be invited to `https://devstride.awsapps.com/start`
- You need the `AWSAdministratorAccess` role

### 2. GitHub Access (Required)

- GitHub account added to the `devstride` organization
- Access to `devstride/devstride` repository

### 3. Neon Database Branch (Required)

- Each developer needs their own Neon database branch
- Request a branch from a team lead (e.g., `local-yourname`)
- Have your connection string ready (from Neon Console > Your Branch > Connection Details)

### 4. Claude Code (Recommended)

- Anthropic account with Claude Code access
- Authenticate on the instance after setup with `claude`

## Instance Specifications

| Spec | Value |
|------|-------|
| Type | t3.xlarge (4 vCPU, 16GB RAM) |
| Storage | 100GB GP3 SSD (preserved on stop/start) |
| OS | Amazon Linux 2023 |
| Pre-installed | Node.js 20 LTS, pnpm, Claude Code, Docker, AWS CLI, Git |

## Costs and Billing

| State | Cost |
|-------|------|
| Running | ~$0.17/hour (~$122/month if 24/7) |
| Stopped | ~$8/month (EBS storage only) |
| Destroyed | $0 |

::callout{type="tip"}
**Best Practice:** Stop your instance when not working to minimize costs.
::

## Next Steps

- [Daily Workflow](/developer-docs/environment-setup/cloud-dev/daily-workflow) - Start, stop, connect
- [Command Reference](/developer-docs/environment-setup/cloud-dev/commands) - All cloud-dev commands
- [Troubleshooting](/developer-docs/environment-setup/cloud-dev/troubleshooting) - Common issues

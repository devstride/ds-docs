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
./ds cloud-dev init           # Configure environment (one-time)
source ~/.zshrc               # Apply shell changes
./ds cloud-dev create         # Creates fully configured environment
```

The `create` command automatically:
1. Runs pre-flight checks (Node.js, pnpm, AWS CLI, Git, etc.)
2. Deploys your EC2 instance (5-10 minutes on first deploy)
3. Waits for initialization to complete
4. Sets up SSH keys and local config
5. Adds a GitHub SSH key (via `gh` CLI or prompts you)
6. Clones the repository and installs dependencies
7. Configures your `.env` file (uses shared dev database by default)
8. Runs database migrations automatically
9. Optionally starts backend in tmux (with `--start-backend`)

After create completes:

```bash
ssh devstride-yourname
cd ~/dev/devstride
./ds run backend
```

Or use the new helper commands:

```bash
./ds cloud-dev connect        # SSH with port forwarding for local frontend
./ds cloud-dev code           # Open VS Code Remote SSH
./ds cloud-dev verify         # Check environment health
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

### 3. Neon Database Branch (Optional)

- The `create` command uses the shared dev database by default
- For isolated testing, request your own branch from a team lead
- Use `--custom-db` flag during create to specify your own connection string

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

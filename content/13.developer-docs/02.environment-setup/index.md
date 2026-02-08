---
title: "Environment Setup"
description: "Choose and configure your DevStride development environment - cloud or local."
---

# Environment Setup

DevStride supports two development environment options. Choose the one that best fits your workflow.

## Cloud Development (Recommended)

Get a fully configured development environment running on AWS EC2 in about 10 minutes.

**What you get:**

- Pre-configured EC2 instance (4 vCPU, 16GB RAM, 100GB SSD)
- All tools pre-installed: Node.js 22, pnpm, Docker, AWS CLI, Pulumi CLI, Claude Code
- Automatic SSH configuration and GitHub key setup
- Repository cloned, dependencies installed, and environment configured
- Auto-stop scheduler to control costs

**Costs:**

| State | Cost |
|-------|------|
| Running | ~$0.17/hour (~$122/month if 24/7) |
| Auto-stop enabled (typical) | ~$30-50/month |
| Stopped | ~$8/month (EBS storage only) |
| Destroyed | $0 |

::callout{type="tip"}
**Auto-stop is enabled by default.** Instances automatically stop after 4 hours of idle time. Most developers spend $30-50/month rather than the full running cost.
::

[Cloud Development Guide →](/developer-docs/environment-setup/cloud-dev)

---

## Local Development

Set up DevStride on your local machine for full control over your environment.

**Requirements:**

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 22+ | Runtime (use `nvm` - repo includes `.nvmrc`) |
| **pnpm** | 8+ | Package manager |
| **AWS CLI** | v2 | AWS authentication via SSO |
| **Pulumi CLI** | Latest | Infrastructure-as-code deployments |
| **Docker** | Latest | Local DynamoDB for backend testing |

**Setup overview:**

```bash
git clone git@github.com:devstride/devstride.git
cd devstride
nvm use
pnpm install
./ds init       # Interactive setup wizard
./ds setup      # Full automated environment setup
```

The `ds init` wizard handles first-time configuration (AWS SSO, secrets, database, Pulumi stack). The `ds setup` command then deploys your personal infrastructure and runs migrations.

[Local Development Guide →](/developer-docs/environment-setup/local-setup)

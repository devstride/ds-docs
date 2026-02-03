---
title: "Environment Setup"
description: "Choose and configure your DevStride development environment."
---

# Environment Setup

DevStride supports two development environment options. Choose the one that best fits your workflow.

## Cloud Development (Recommended)

Get a fully configured development environment running on AWS EC2 in about 10 minutes.

**What you get:**
- Pre-configured EC2 instance (4 vCPU, 16GB RAM, 100GB SSD)
- All tools pre-installed: Node.js 20, pnpm, Docker, AWS CLI, Claude Code
- Automatic SSH configuration
- Repository cloned and dependencies installed

**Costs:**
- Running: ~$0.17/hour (~$122/month if always on)
- Stopped: ~$8/month (storage only)
- Tip: Stop your instance when not working!

[Cloud Development Guide →](/developer-docs/environment-setup/cloud-dev)

---

## Local Development

Set up DevStride on your local machine for full control over your environment.

**Requirements:**
- Node.js 18+
- pnpm
- Docker
- AWS CLI v2

[Local Development Guide →](/developer-docs/environment-setup/local-setup)

---
title: "ds CLI Overview"
description: "The ds utility - your DevStride development companion."
---

# ds CLI Reference

The `ds` utility is the central command-line tool for DevStride development. It handles AWS authentication, environment configuration, infrastructure deployment, and local service management -- all through a single entry point.

## Quick Start

```bash
./ds              # Interactive menu
./ds help         # Show all commands
./ds run backend  # Start backend
./ds run ui       # Start frontend
```

## How It Works

The `ds` script is a bash wrapper that:

1. **Checks Node.js version** -- requires Node.js 22 or later
2. **Authenticates with AWS SSO** -- automatically triggers `aws sso login` if your session has expired
3. **Loads environment from Pulumi stack outputs** -- cached in `.ds/bind/` for fast startup
4. **Delegates to the appropriate CLI command** -- each command is a TypeScript module bundled with esbuild into `.ds/.tmp/` and executed with `node`

Environment variables like `DEVSTRIDE_STAGE`, `AWS_PROFILE`, and `DEVSTRIDE_REGION` are read from your shell configuration (set during `./ds init`) and used to determine which Pulumi stack and AWS account to target.

## Global Flags

Flags are placed **before** the command name.

| Flag | Description |
|------|-------------|
| `-b` | Force refresh of Pulumi outputs cache |
| `-u` | Skip AWS authentication check |
| `-r` | Target remote environment (not local) |

**Example:**

```bash
./ds -b run backend    # Refresh outputs, then start backend
./ds -u help           # Show help without checking AWS auth
./ds -b stripe add-products  # Refresh outputs before Stripe commands
```

## Shell Alias

The `./ds init` wizard automatically adds a shell alias to your rc file:

```bash
alias ds='./ds'
```

This lets you type `ds run backend` instead of `./ds run backend`. Note that the `./ds` script uses relative paths internally, so it **must be run from the project root**. If you `cd` into a subdirectory, use an absolute path or return to the root first.

## Complete Command Reference

| Command | Description |
|---------|-------------|
| `./ds` | Interactive menu |
| `./ds help` | Show all commands and flags |
| `./ds init` | Initialize development environment (wizard) |
| `./ds setup` | Full automated environment setup |
| `./ds setup-secrets` | Fetch shared secrets from AWS Secrets Manager to .env |
| `./ds outputs` | Refresh Pulumi stack outputs to local environment |
| `./ds run backend` | Start backend (Hono server on port 3001) |
| `./ds run ui` | Start frontend (Vite dev server on port 8080) |
| `./ds infra run` | Deploy infrastructure (`pulumi up`) |
| `./ds infra run-services` | Start local Docker services |
| `./ds infra remove` | Tear down infrastructure and clean up environment |
| `./ds infra pause` | Pause personal stage (set Lambda concurrency to 0) |
| `./ds infra resume` | Resume paused personal stage |
| `./ds migrations run` | Run database migrations |
| `./ds migrations run-sql` | Run SQL migrations only |
| `./ds data import <path>` | Import data from dump file |
| `./ds data export` | Export current data |
| `./ds data wipe` | Wipe all data (dangerous!) |
| `./ds data copy` | Copy organization data from source database |
| `./ds script set-config` | Configure application settings |
| `./ds script reset-db` | Reset database from source |
| `./ds script generate-api-client` | Generate API client types |
| `./ds g command <name> -m <module>` | Generate CQRS command boilerplate |
| `./ds g query <name> -m <module>` | Generate CQRS query boilerplate |
| `./ds stripe add-products` | Create Stripe products |
| `./ds stripe create-customers` | Create Stripe customers |
| `./ds stripe find-subscription-quantity` | Audit Stripe subscription quantities |
| `./ds admin list-stages` | Discover deployed stages, flag stale ones |

## Detailed Command Pages

- [Development Commands](/developer-docs/ds-cli-reference/development) -- init, setup, run, outputs, generate
- [Infrastructure Commands](/developer-docs/ds-cli-reference/infrastructure) -- deploy, remove, pause/resume, admin
- [Data & Scripts](/developer-docs/ds-cli-reference/data-and-scripts) -- migrations, data, scripts, Stripe

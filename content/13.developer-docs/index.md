---
title: ds CLI
description: Command reference for the ds development utility.
links: []
---

# ds CLI

The `ds` command-line tool for DevStride development. Run `ds` with no arguments for an interactive menu, or `ds help` to list all commands.

## Command Groups

| Group      | AWS Auth | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| `ds local` | No       | Run servers, generate code, lint checks        |
| `ds db`    | Yes      | Migrations, import/export, repair, queries     |
| `ds cloud` | Yes      | Deploy, secrets, config, stages, Stripe, admin |

## Caching

The `ds` wrapper caches Pulumi stack outputs in `.ds/bind/` so commands start quickly. The cache auto-refreshes when:

- The cache file does not exist (first run, or after `ds cloud deploy` which clears it)
- The Pulumi config file (`infra/Pulumi.<stage>.yaml`) has been modified since the cache was written

You can also manually refresh with `ds cloud outputs pull`.

**Example:** You deploy a Cognito change with `ds cloud deploy`. The deploy clears the cache automatically, so your next `ds local run backend` picks up the new Cognito user pool ID. However, if a teammate deploys infrastructure to a shared stage (like `dev`) outside of your machine, your local cache is stale. Run `ds cloud outputs pull` to fetch the updated values, then restart your backend.

## Aliases

| Shorthand     | Expands To                          |
| ------------- | ----------------------------------- |
| `ds backend`  | `ds local run backend`              |
| `ds frontend` | `ds local run frontend`             |
| `ds up`       | `ds cloud deploy`                   |
| `ds down`     | `ds cloud destroy`                  |
| `ds migrate`  | `ds db migrate`                     |
| `ds g <c|q>`  | `ds local generate <command|query>` |

## Meta Commands

### setup

**Purpose:** Full automated environment setup from zero to running services.

**When to use:** First-time setup on a new machine or cloud instance. Handles AWS auth, secrets, Neon database provisioning, `pnpm install`, Pulumi stack creation, `pulumi up`, config sync, and migrations.

| Option              | Effect                             |
| ------------------- | ---------------------------------- |
| `--stage <name>`    | Set stage name without prompting   |
| `--skip-deploy`     | Skip `pulumi up`                   |
| `--skip-migrations` | Skip database migrations           |
| `--skip-start`      | Skip starting backend and frontend |

::callout{type="info"}
Idempotent -- skips steps that are already complete. Safe to re-run.
::

### help

**Purpose:** Print all available commands, flags, and aliases.

### menu

**Purpose:** Launch the interactive command picker with arrow-key navigation.

**When to use:** When you cannot remember the exact command name. Same as running `ds` with no arguments.

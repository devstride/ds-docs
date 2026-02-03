---
title: "ds CLI Overview"
description: "The ds utility - your DevStride development companion."
---

# ds CLI Reference

The `ds` utility is the central command-line tool for DevStride development. It provides commands for running services, managing data, running tests, and more.

## Quick Start

```bash
# Show interactive menu
./ds

# Or run specific commands
./ds run backend
./ds run ui
```

## Command Categories

### Development

| Command | Description |
|---------|-------------|
| `./ds run backend` | Start the backend development server |
| `./ds run ui` | Start the frontend development server |
| `./ds init` | Initialize your development environment |

### Database

| Command | Description |
|---------|-------------|
| `./ds migrations run` | Run pending database migrations |
| `./ds data import <path>` | Import data from a dump file |
| `./ds data export` | Export current data |
| `./ds data wipe` | Wipe all data (dangerous!) |

### Scripts

| Command | Description |
|---------|-------------|
| `./ds script set-config` | Configure environment settings |
| `./ds script reset-db` | Reset database from source |

### Cloud Development

| Command | Description |
|---------|-------------|
| `./ds cloud-dev init` | Configure cloud-dev environment |
| `./ds cloud-dev create` | Create a cloud dev instance |
| `./ds cloud-dev ssh` | Connect to your instance |
| `./ds cloud-dev stop` | Stop your instance |

See [Cloud Dev Commands](/developer-docs/environment-setup/cloud-dev/commands) for the full reference.

### Stripe

| Command | Description |
|---------|-------------|
| `./ds -b stripe add-products` | Create Stripe products |
| `./ds -b stripe create-customers` | Create Stripe customers |

## Interactive Menu

Run `./ds` without arguments to see an interactive menu:

```bash
./ds
```

This shows all available commands organized by category, making it easy to discover and run commands.

## Getting Help

```bash
# Show help for a specific command
./ds --help
./ds cloud-dev --help
```

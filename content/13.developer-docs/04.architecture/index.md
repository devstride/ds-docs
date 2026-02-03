---
title: "Architecture Overview"
description: "High-level overview of the DevStride technical architecture."
---

# Architecture Overview

DevStride is built on a modern, scalable architecture designed for maintainability and performance.

## Technology Stack

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **TypeScript** | Type-safe development |
| **Hono** | Web framework for API handlers |
| **SST** | Infrastructure-as-code framework |
| **DynamoDB** | NoSQL database (via dynamodb-onetable) |
| **PostgreSQL** | Relational database (via Drizzle ORM) |
| **Pusher** | Real-time messaging |

### Frontend

| Technology | Purpose |
|------------|---------|
| **Vue.js 3** | UI framework with Composition API |
| **Pinia** | State management |
| **Quasar** | Component framework |
| **Tailwind CSS** | Utility-first styling |
| **TipTap** | Rich text editor |
| **Vue Router** | Navigation |

### Infrastructure

| Service | Purpose |
|---------|---------|
| **AWS Lambda** | Serverless compute |
| **API Gateway** | HTTP API routing |
| **Cognito** | Authentication |
| **S3** | File storage |
| **EventBridge** | Event routing |
| **SQS/SNS** | Message queues |

## Architecture Patterns

### Domain-Driven Design (DDD)

The backend follows DDD principles:
- **Entities** - Objects with identity (e.g., WorkItem, Board)
- **Value Objects** - Immutable objects defined by attributes
- **Aggregates** - Clusters of entities with a root
- **Repositories** - Data access abstraction

### CQRS (Command Query Responsibility Segregation)

Commands and queries are separated:
- **Commands** - Write operations that change state
- **Queries** - Read operations that return data
- **CommandBus** - Dispatches commands to handlers
- **QueryBus** - Dispatches queries to handlers

### Event-Driven Architecture

Domain events drive side effects:
- **Domain Events** - Emitted when state changes
- **Integration Events** - Cross-service communication
- **Event Handlers** - React to events

## Request Flow

```
Client Request
    ↓
API Gateway
    ↓
Hono Handler (validates input, creates Command)
    ↓
CommandBus.execute(command)
    ↓
Service (business logic, repository calls)
    ↓
Result<T, E> returned
    ↓
Handler formats response
```

## Module Structure

Code is organized by domain module:

```
backend/src/modules/
├── item/           # Work items
├── board/          # Boards and folders
├── user/           # Users and teams
├── organization/   # Organizations
├── workflow/       # Process management
├── activity/       # Activity logs
├── comment/        # Comments
└── ...
```

Each module contains:
- `domain/` - Entities, value objects, events
- `application/` - Commands, queries, services
- `infrastructure/` - Repositories, external services
- `interface-adapters/` - Hono handlers, DTOs

## Learn More

- [Backend Architecture Guide](/developer-docs/architecture/backend) - Deep dive into backend patterns
- [Frontend Architecture](/developer-docs/architecture/frontend) - Vue.js structure and conventions

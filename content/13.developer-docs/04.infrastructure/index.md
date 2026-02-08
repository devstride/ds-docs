---
title: "Infrastructure Overview"
description: "How DevStride's AWS infrastructure is managed with Pulumi."
---

# Infrastructure Overview

DevStride uses [Pulumi](https://www.pulumi.com/) with TypeScript to manage all AWS infrastructure. Every resource -- from Lambda functions to DynamoDB tables -- is defined in code, version-controlled, and deployed through a consistent pipeline. The infrastructure code lives in the `infra/` directory at the project root.

Each developer gets their own isolated stack (called a "stage") with a full copy of the infrastructure. Stages share the same codebase but deploy independent resources, so you can develop and test without affecting other environments.

## Technology Stack

| Technology | Purpose |
|------------|---------|
| **Pulumi** | Infrastructure-as-code (TypeScript) |
| **AWS Lambda** | Serverless compute (Node.js 22, ARM64) |
| **API Gateway** | HTTP API routing |
| **Cognito** | Authentication and user management |
| **DynamoDB** | NoSQL storage (via dynamodb-onetable) |
| **PostgreSQL (Neon)** | Relational database (external, not Pulumi-managed) |
| **S3** | File storage (media, events, analytics, imports) |
| **EventBridge** | Event routing between services |
| **SNS/SQS** | Message queuing (standard and FIFO) |
| **Step Functions** | Complex workflows (via @pulumi/cdk) |
| **CloudFront** | CDN for frontend SPA and media assets |
| **Secrets Manager** | Configuration and secrets storage |
| **CodeBuild** | Long-running job execution |
| **CloudWatch Logs** | Centralized logging with per-stage retention |

## Infrastructure Modules

Infrastructure deploys in six ordered phases. Each phase builds on the outputs of previous phases.

### Phase 1: Foundation

The base layer that all other modules depend on:

- **Config** (`modules/config.ts`) -- Creates the Secrets Manager secret that holds application configuration (database URL, API keys, third-party credentials). Ephemeral stages use immediate deletion (no 30-day recovery window); production stages retain secrets on deletion.
- **Database** (`modules/database.ts`) -- Provisions DynamoDB tables: state, time tracking, AI, and migrations. PostgreSQL is hosted on Neon and managed outside of Pulumi.
- **Storage** (`modules/storage.ts`) -- Creates S3 buckets for events, Pusher events, and imports. Personal stages enable `forceDestroy` for easy cleanup.
- **Events** (`modules/events.ts`) -- Sets up the EventBridge bus, SNS FIFO topic, and dead-letter queues for failed event processing.

### Phase 2: Auth & API

- **Auth** (`modules/auth.ts`) -- Configures the Cognito user pool with email-based sign-in, password policies, and custom attributes. Creates the app client used by the frontend.
- **API** (`modules/api.ts`) -- Deploys API Gateway (HTTP API) with a Cognito authorizer and a single Lambda integration. Routes all traffic through one Lambda that uses Hono for internal routing.

### Phase 3: Services

Each service module creates one or more Lambda functions with appropriate IAM permissions and event subscriptions:

- **Assets** -- Media upload processing, CloudFront distribution for media delivery
- **Analytics** -- Analytics data collection and reporting
- **Importer** -- Data import processing with dedicated S3 bucket and CloudFront
- **GitHub Integration** -- Webhook handlers and GitHub App event processing
- **Integrations** -- Third-party service connectors (Slack, etc.)
- **Item** -- Core work item CRUD and event handlers
- **Organization** -- Organization management and configuration
- **User** -- User lifecycle, team management, invitation processing
- **Workflow** -- Process management and automation triggers
- **Activity** -- Activity logging and notification dispatch
- **Pusher** -- Real-time event broadcasting via Pusher
- **Board** -- Board and folder management
- **Roadmap** -- Roadmap view data processing
- **Subscriptions** -- Stripe billing and subscription management
- **AI** -- AI-powered features (summarization, suggestions)
- **Internal** -- Internal API endpoints (health checks, admin)
- **Permissions** -- Authorization and access control

### Phase 4: Step Functions

Complex multi-step workflows that use AWS CDK constructs wrapped by `@pulumi/cdk`:

- **ADO Import** -- Azure DevOps data import orchestration
- **Jira Import** -- Jira data import orchestration
- **Disable Project** -- Multi-step project deactivation
- **Disable Installation** -- Installation teardown (calls Disable Project for each project)
- **Disable Credential** -- Credential revocation (calls Disable Installation for each installation)

Each Step Function gets its own set of bundled Lambda tasks, defined in `step-functions/common.ts`.

### Phase 5: Jobs

- **Jobs** (`services/jobs.ts`) -- CodeBuild projects for long-running tasks that exceed Lambda's 15-minute timeout. An orchestration Lambda triggers CodeBuild runs and monitors their status. Receives Step Function ARNs from Phase 4.

### Phase 6: UI

- **UI** (`modules/ui.ts`) -- CloudFront distribution serving the Vue.js SPA from S3. Configures origin access control, cache behaviors for hashed assets vs. `index.html`, and custom error responses for SPA routing.

## Project Structure

```
infra/
├── index.ts                  # Main entry point (deployment phases)
├── Pulumi.yaml               # Project configuration
├── Pulumi.{stage}.yaml       # Stage-specific config
├── components/
│   ├── lambda-function.ts    # DevStrideLambda component (Node.js 22, ARM64, esbuild)
│   ├── event-consumer.ts     # EventBridge consumer (Lambda + event rule)
│   ├── fifo-consumer.ts      # SQS FIFO consumer (Lambda + queue subscription)
│   └── cloudfront-bucket.ts  # CloudFront + S3 origin component
├── helpers/
│   ├── bundler.ts            # esbuild Lambda bundling with content-hash caching
│   ├── domains.ts            # Domain name resolution per stage
│   ├── naming.ts             # Resource naming convention ({stage}-devstride-{resource})
│   └── types.ts              # Shared TypeScript interfaces (IStageConfig, IDefaultBindings)
├── modules/                  # Core infrastructure modules
│   ├── api.ts                # API Gateway + Lambda
│   ├── auth.ts               # Cognito user pool
│   ├── config.ts             # Secrets Manager
│   ├── database.ts           # DynamoDB tables
│   ├── events.ts             # EventBridge + SNS + SQS
│   ├── storage.ts            # S3 buckets
│   └── ui.ts                 # CloudFront + S3 for frontend
├── shared/                   # Shared infrastructure stack (wildcard cert, hosted zone)
│   ├── index.ts              # Shared stack entry point
│   ├── Pulumi.yaml           # Shared stack project config
│   ├── package.json
│   └── tsconfig.json
├── services/                 # Service-specific Lambda functions
│   ├── activity.ts           ├── integrations.ts
│   ├── ai.ts                 ├── internal.ts
│   ├── analytics.ts          ├── item.ts
│   ├── assets.ts             ├── jobs.ts
│   ├── board.ts              ├── organization.ts
│   ├── github-integration.ts ├── permissions.ts
│   ├── importer.ts           ├── pusher.ts
│   ├── roadmap.ts            ├── subscriptions.ts
│   ├── user.ts               └── workflow.ts
└── step-functions/           # CDK Step Function definitions
    ├── common.ts             # Shared Lambda factory and integrations
    ├── ado-import.ts         # Azure DevOps import workflow
    ├── jira-import.ts        # Jira import workflow
    ├── disable-project.ts    # Project deactivation workflow
    ├── disable-installation.ts  # Installation teardown workflow
    └── disable-credential.ts    # Credential revocation workflow
```

## Learn More

- [Pulumi Basics](/developer-docs/infrastructure/pulumi-overview) -- Config, naming, domains, bundling, and stack outputs
- [Deploying](/developer-docs/infrastructure/deploying) -- First deployment, updates, CI/CD pipeline, teardown
- [Safety Guards](/developer-docs/infrastructure/safety-guards) -- Stage protection, resource protection, validation
- [Cost Management](/developer-docs/infrastructure/cost-management) -- Pause/resume, ephemeral settings, teardown

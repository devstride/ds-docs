// Top-level content directories were regrouped under Concern folders (Getting Started, Major
// Modules, Personal Workspace, Workspace Administration, Planning Concepts & Use Cases,
// Integrations & Extensibility, Developer Experience) on 2026-07-01. Every page under a moved
// section gained a new path segment, so this table maps every affected old URL to its new home.
const CONCERN_REORG_REDIRECTS_2026_07_01: Array<[string, string]> = [
  ['/admin-onboarding-getting-started/admin-onboarding-guide', '/getting-started/admin-onboarding-getting-started/admin-onboarding-guide'],
  ['/admin-onboarding-getting-started/api-keys/api-keys', '/getting-started/admin-onboarding-getting-started/api-keys/api-keys'],
  ['/admin-onboarding-getting-started/basic-terms', '/getting-started/admin-onboarding-getting-started/basic-terms'],
  ['/admin-onboarding-getting-started/best-practices-for-project-management', '/getting-started/admin-onboarding-getting-started/best-practices-for-project-management'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/creating-cadences/setting-up-cadences-and-timeboxes', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/creating-cadences/setting-up-cadences-and-timeboxes'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/creating-cadences/understanding-planning-cadences', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/creating-cadences/understanding-planning-cadences'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/how-devstride-manages-the-when', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/how-devstride-manages-the-when'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/setting-up-perpetual-boards', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/setting-up-perpetual-boards'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/track-and-move-work-on-boards', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/track-and-move-work-on-boards'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/using-cycle-boards', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/using-cycle-boards'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/wip-limiters', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/wip-limiters'],
  ['/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/the-who-setting-up-working-groups/working-group-folders', '/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/the-who-setting-up-working-groups/working-group-folders'],
  ['/admin-onboarding-getting-started/configuring-your-work-model', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/creating-and-using-statuses/create-custom-status-collections', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/creating-and-using-statuses/create-custom-status-collections'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/creating-and-using-statuses/setting-up-workflow-statuses', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/creating-and-using-statuses/setting-up-workflow-statuses'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/create-items-with-ai', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/create-items-with-ai'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/creating-and-managing-forms', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/creating-and-managing-forms'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/header', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/header'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/quick-links', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/quick-links'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-best-practice-time-estimates', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-best-practice-time-estimates'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-point-estimates', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-point-estimates'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-priority', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-priority'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-progress-tracking', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-progress-tracking'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-start-dates-and-due-dates', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-start-dates-and-due-dates'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-team-through-status', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-team-through-status'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-time-estimates', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-time-estimates'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-time-spent', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-time-spent'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/tabs', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/tabs'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-custom-fields', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-custom-fields'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-item-type-hierarchy', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-item-type-hierarchy'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-tags', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-tags'],
  ['/admin-onboarding-getting-started/configuring-your-work-model/map-value-workstreams', '/getting-started/admin-onboarding-getting-started/configuring-your-work-model/map-value-workstreams'],
  ['/admin-onboarding-getting-started/overall-flow-and-best-practices', '/getting-started/admin-onboarding-getting-started/overall-flow-and-best-practices'],
  ['/admin-onboarding-getting-started/permissions/roles-and-permissions', '/getting-started/admin-onboarding-getting-started/permissions/roles-and-permissions'],
  ['/admin-onboarding-getting-started/permissions/sharing-and-access', '/getting-started/admin-onboarding-getting-started/permissions/sharing-and-access'],
  ['/admin-onboarding-getting-started/permissions/understanding-permissions', '/getting-started/admin-onboarding-getting-started/permissions/understanding-permissions'],
  ['/admin-onboarding-getting-started/populating-and-managing-workstreams', '/getting-started/admin-onboarding-getting-started/populating-and-managing-workstreams'],
  ['/admin-onboarding-getting-started/populating-and-managing-workstreams/import-templates', '/getting-started/admin-onboarding-getting-started/populating-and-managing-workstreams/import-templates'],
  ['/admin-onboarding-getting-started/setting-the-stage', '/getting-started/admin-onboarding-getting-started/setting-the-stage'],
  ['/admin-onboarding-getting-started/setting-up-users-and-teams', '/getting-started/admin-onboarding-getting-started/setting-up-users-and-teams'],
  ['/admin-onboarding-getting-started/track-progress-gantt-charts/navigating-the-table', '/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/navigating-the-table'],
  ['/admin-onboarding-getting-started/track-progress-gantt-charts/navigating-the-timeline', '/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/navigating-the-timeline'],
  ['/admin-onboarding-getting-started/track-progress-gantt-charts/setting-up-gantt-charts', '/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/setting-up-gantt-charts'],
  ['/admin-onboarding-getting-started/track-progress-gantt-charts/viewing-gantt-charts', '/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/viewing-gantt-charts'],
  ['/admin-onboarding-getting-started/using-ai-in-devstride/create-items-with-ai', '/getting-started/admin-onboarding-getting-started/using-ai-in-devstride/create-items-with-ai'],
  ['/automations/setting-up-basic-automations', '/workspace-administration/automations/setting-up-basic-automations'],
  ['/basic-terms', '/getting-started/basic-terms'],
  ['/boards/adding-a-folder', '/major-modules/boards/adding-a-folder'],
  ['/boards/board-and-folder-permissions', '/major-modules/boards/board-and-folder-permissions'],
  ['/boards/boards-and-wip-limiters', '/major-modules/boards/boards-and-wip-limiters'],
  ['/boards/creating-subfolders-in-devstride', '/major-modules/boards/creating-subfolders-in-devstride'],
  ['/boards/how-devstride-manages-the-when', '/major-modules/boards/how-devstride-manages-the-when'],
  ['/boards/import-stories-and-epics-into-boards', '/major-modules/boards/import-stories-and-epics-into-boards'],
  ['/boards/manage-and-edit-dependencies', '/major-modules/boards/manage-and-edit-dependencies'],
  ['/boards/setting-up-and-using-perpetual-boards', '/major-modules/boards/setting-up-and-using-perpetual-boards'],
  ['/boards/track-and-move-work-with-board-views', '/major-modules/boards/track-and-move-work-with-board-views'],
  ['/boards/understanding-board-views', '/major-modules/boards/understanding-board-views'],
  ['/boards/using-cycle-boards', '/major-modules/boards/using-cycle-boards'],
  ['/boards/working-group-folders', '/major-modules/boards/working-group-folders'],
  ['/developer-docs/api-development', '/developer-experience/developer-docs/api-development'],
  ['/developer-docs/claude-code-skills-overview', '/developer-experience/developer-docs/claude-code-skills-overview'],
  ['/developer-docs/claude-skills-delivery-loop', '/developer-experience/developer-docs/claude-skills-delivery-loop'],
  ['/developer-docs/claude-skills-planning-loop', '/developer-experience/developer-docs/claude-skills-planning-loop'],
  ['/developer-docs/command-reference', '/developer-experience/developer-docs/command-reference'],
  ['/developer-docs/deployment', '/developer-experience/developer-docs/deployment'],
  ['/developer-docs/getting-started', '/developer-experience/developer-docs/getting-started'],
  ['/developer-docs/golden-dataset', '/developer-experience/developer-docs/golden-dataset'],
  ['/developer-docs/introduction', '/developer-experience/developer-docs/introduction'],
  ['/developer-docs/local-development', '/developer-experience/developer-docs/local-development'],
  ['/developer-docs/maintenance-and-codebase-checks', '/developer-experience/developer-docs/maintenance-and-codebase-checks'],
  ['/developer-docs/stripe-integration', '/developer-experience/developer-docs/stripe-integration'],
  ['/devstride-mcp-server/best-practices-and-tips', '/integrations-and-extensibility/devstride-mcp-server/best-practices-and-tips'],
  ['/devstride-mcp-server/doing-real-work-with-the-devstride-mcp-server', '/integrations-and-extensibility/devstride-mcp-server/doing-real-work-with-the-devstride-mcp-server'],
  ['/devstride-mcp-server/setting-up-your-connection', '/integrations-and-extensibility/devstride-mcp-server/setting-up-your-connection'],
  ['/devstride-mcp-server/what-is-the-devstride-mcp-server', '/integrations-and-extensibility/devstride-mcp-server/what-is-the-devstride-mcp-server'],
  ['/filters/automations', '/workspace-administration/filters/automations'],
  ['/filters/boards', '/workspace-administration/filters/boards'],
  ['/filters/cycles', '/workspace-administration/filters/cycles'],
  ['/filters/gantt', '/workspace-administration/filters/gantt'],
  ['/filters/items', '/workspace-administration/filters/items'],
  ['/filters/my-work', '/workspace-administration/filters/my-work'],
  ['/filters/notifications', '/workspace-administration/filters/notifications'],
  ['/filters/options/boards', '/workspace-administration/filters/options/boards'],
  ['/filters/options/cycle', '/workspace-administration/filters/options/cycle'],
  ['/filters/options/items', '/workspace-administration/filters/options/items'],
  ['/filters/options/my-work', '/workspace-administration/filters/options/my-work'],
  ['/filters/options/workstreams', '/workspace-administration/filters/options/workstreams'],
  ['/filters/reports', '/workspace-administration/filters/reports'],
  ['/filters/sort/boards', '/workspace-administration/filters/sort/boards'],
  ['/filters/sort/cycles', '/workspace-administration/filters/sort/cycles'],
  ['/filters/sort/items', '/workspace-administration/filters/sort/items'],
  ['/filters/sort/my-work', '/workspace-administration/filters/sort/my-work'],
  ['/filters/sort/workstreams', '/workspace-administration/filters/sort/workstreams'],
  ['/filters/workstreams', '/workspace-administration/filters/workstreams'],
  ['/manage-items/creating-and-sharing-views', '/workspace-administration/manage-items/creating-and-sharing-views'],
  ['/manage-items/finding-and-filtering-items', '/workspace-administration/manage-items/finding-and-filtering-items'],
  ['/manage-items/item-hierarchy', '/workspace-administration/manage-items/item-hierarchy'],
  ['/manage-items/overview', '/workspace-administration/manage-items/overview'],
  ['/measure-performance-reports/report-filters-and-options', '/major-modules/measure-performance-reports/report-filters-and-options'],
  ['/measure-performance-reports/using-ai-for-powerful-reports', '/major-modules/measure-performance-reports/using-ai-for-powerful-reports'],
  ['/measure-performance-reports/viewing-optimization', '/major-modules/measure-performance-reports/viewing-optimization'],
  ['/measure-performance-reports/what-is-burn-down', '/major-modules/measure-performance-reports/what-is-burn-down'],
  ['/measure-performance-reports/what-is-burn-up', '/major-modules/measure-performance-reports/what-is-burn-up'],
  ['/measure-performance-reports/what-is-churn', '/major-modules/measure-performance-reports/what-is-churn'],
  ['/measure-performance-reports/what-is-cumulative-flow', '/major-modules/measure-performance-reports/what-is-cumulative-flow'],
  ['/measure-performance-reports/what-is-current-progress', '/major-modules/measure-performance-reports/what-is-current-progress'],
  ['/measure-performance-reports/what-is-cycle-time', '/major-modules/measure-performance-reports/what-is-cycle-time'],
  ['/measure-performance-reports/what-is-throughput', '/major-modules/measure-performance-reports/what-is-throughput'],
  ['/measure-performance-reports/what-is-trending-progress', '/major-modules/measure-performance-reports/what-is-trending-progress'],
  ['/measure-performance-reports/what-is-user-time-completed', '/major-modules/measure-performance-reports/what-is-user-time-completed'],
  ['/measure-performance-reports/what-is-velocity', '/major-modules/measure-performance-reports/what-is-velocity'],
  ['/my-account/api-keys', '/personal-workspace/my-account/api-keys'],
  ['/my-account/overview', '/personal-workspace/my-account/overview'],
  ['/my-work', '/personal-workspace/my-work'],
  ['/notifications/customizing-notification-settings-for-individuals-and-teams', '/personal-workspace/notifications/customizing-notification-settings-for-individuals-and-teams'],
  ['/notifications/overview-of-notification-options', '/personal-workspace/notifications/overview-of-notification-options'],
  ['/permissions/roles-and-permissions', '/workspace-administration/permissions/roles-and-permissions'],
  ['/permissions/sharing-and-access', '/workspace-administration/permissions/sharing-and-access'],
  ['/permissions/understanding-permissions', '/workspace-administration/permissions/understanding-permissions'],
  ['/plugins', '/integrations-and-extensibility/plugins'],
  ['/plugins/weekly-logs/export', '/integrations-and-extensibility/plugins/weekly-logs/export'],
  ['/plugins/weekly-logs/filtering', '/integrations-and-extensibility/plugins/weekly-logs/filtering'],
  ['/plugins/weekly-logs/grid', '/integrations-and-extensibility/plugins/weekly-logs/grid'],
  ['/plugins/weekly-logs/logging', '/integrations-and-extensibility/plugins/weekly-logs/logging'],
  ['/plugins/weekly-logs/meetings', '/integrations-and-extensibility/plugins/weekly-logs/meetings'],
  ['/plugins/weekly-logs/navigation', '/integrations-and-extensibility/plugins/weekly-logs/navigation'],
  ['/plugins/weekly-logs/organization-switch', '/integrations-and-extensibility/plugins/weekly-logs/organization-switch'],
  ['/plugins/weekly-logs/overview', '/integrations-and-extensibility/plugins/weekly-logs/overview'],
  ['/plugins/weekly-logs/proposed-items', '/integrations-and-extensibility/plugins/weekly-logs/proposed-items'],
  ['/plugins/weekly-logs/search', '/integrations-and-extensibility/plugins/weekly-logs/search'],
  ['/plugins/weekly-logs/team-logs', '/integrations-and-extensibility/plugins/weekly-logs/team-logs'],
  ['/plugins/weekly-logs/views', '/integrations-and-extensibility/plugins/weekly-logs/views'],
  ['/project-planning-tools/gantt-charts/add-to-gantt', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/add-to-gantt'],
  ['/project-planning-tools/gantt-charts/create-new-gantt', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/create-new-gantt'],
  ['/project-planning-tools/gantt-charts/gantt-charts-basics', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/gantt-charts-basics'],
  ['/project-planning-tools/gantt-charts/gantt-charts-toolbar', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/gantt-charts-toolbar'],
  ['/project-planning-tools/gantt-charts/link-mode', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/link-mode'],
  ['/project-planning-tools/gantt-charts/scenario-planning', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/scenario-planning'],
  ['/project-planning-tools/gantt-charts/tips-for-effective-gantt-chart-planning', '/planning-concepts-and-use-cases/project-planning-tools/gantt-charts/tips-for-effective-gantt-chart-planning'],
  ['/project-planning-tools/kanban-boards/kanban-best-practices', '/planning-concepts-and-use-cases/project-planning-tools/kanban-boards/kanban-best-practices'],
  ['/project-planning-tools/kanban-boards/setting-up-your-kanban-board', '/planning-concepts-and-use-cases/project-planning-tools/kanban-boards/setting-up-your-kanban-board'],
  ['/project-planning-tools/kanban-boards/using-kanban-for-workflow-visualization', '/planning-concepts-and-use-cases/project-planning-tools/kanban-boards/using-kanban-for-workflow-visualization'],
  ['/service-desk/email-channels', '/major-modules/service-desk/email-channels'],
  ['/service-desk/enabling-service-desk', '/major-modules/service-desk/enabling-service-desk'],
  ['/service-desk/finding-and-filtering-tickets', '/major-modules/service-desk/finding-and-filtering-tickets'],
  ['/service-desk/overview', '/major-modules/service-desk/overview'],
  ['/service-desk/permissions', '/major-modules/service-desk/permissions'],
  ['/service-desk/request-forms', '/major-modules/service-desk/request-forms'],
  ['/service-desk/requesters-and-companies', '/major-modules/service-desk/requesters-and-companies'],
  ['/service-desk/suspended-messages', '/major-modules/service-desk/suspended-messages'],
  ['/service-desk/working-a-ticket', '/major-modules/service-desk/working-a-ticket'],
  ['/settings/data-model/cadences', '/workspace-administration/settings/data-model/cadences'],
  ['/settings/data-model/custom-fields', '/workspace-administration/settings/data-model/custom-fields'],
  ['/settings/data-model/customizing-the-item-drawer', '/workspace-administration/settings/data-model/customizing-the-item-drawer'],
  ['/settings/data-model/effort-points-and-time-estimation', '/workspace-administration/settings/data-model/effort-points-and-time-estimation'],
  ['/settings/data-model/item-types', '/workspace-administration/settings/data-model/item-types'],
  ['/settings/data-model/priority-levels', '/workspace-administration/settings/data-model/priority-levels'],
  ['/settings/data-model/statuses-and-wip-limiters', '/workspace-administration/settings/data-model/statuses-and-wip-limiters'],
  ['/settings/data-model/tags', '/workspace-administration/settings/data-model/tags'],
  ['/settings/forms/item-request-forms', '/workspace-administration/settings/forms/item-request-forms'],
  ['/settings/integrations/api-keys', '/workspace-administration/settings/integrations/api-keys'],
  ['/settings/integrations/connect-ai-and-mcp', '/workspace-administration/settings/integrations/connect-ai-and-mcp'],
  ['/settings/integrations/database-access', '/workspace-administration/settings/integrations/database-access'],
  ['/settings/integrations/github', '/workspace-administration/settings/integrations/github'],
  ['/settings/integrations/jira', '/workspace-administration/settings/integrations/jira'],
  ['/settings/organization/org-profile', '/workspace-administration/settings/organization/org-profile'],
  ['/settings/organization/users-roles-and-mfa', '/workspace-administration/settings/organization/users-roles-and-mfa'],
  ['/settings/subscription-and-billing', '/workspace-administration/settings/subscription-and-billing'],
  ['/track-progress-gantts', '/major-modules/track-progress-gantts'],
  ['/use-cases/backlog-refinement', '/planning-concepts-and-use-cases/use-cases/backlog-refinement'],
  ['/use-cases/conduct-a-standup', '/planning-concepts-and-use-cases/use-cases/conduct-a-standup'],
  ['/use-cases/customizing-item-types', '/planning-concepts-and-use-cases/use-cases/customizing-item-types'],
  ['/use-cases/gantt-charts', '/planning-concepts-and-use-cases/use-cases/gantt-charts'],
  ['/use-cases/manage-cadences', '/planning-concepts-and-use-cases/use-cases/manage-cadences'],
  ['/use-cases/plan-a-sprint', '/planning-concepts-and-use-cases/use-cases/plan-a-sprint'],
  ['/workstreams-and-work-items/ai-item-creation', '/major-modules/workstreams-and-work-items/ai-item-creation'],
  ['/workstreams-and-work-items/creating-work-items', '/major-modules/workstreams-and-work-items/creating-work-items'],
  ['/workstreams-and-work-items/dependency-graph', '/major-modules/workstreams-and-work-items/dependency-graph'],
  ['/workstreams-and-work-items/import-templates', '/major-modules/workstreams-and-work-items/import-templates'],
  ['/workstreams-and-work-items/manage-items-table', '/major-modules/workstreams-and-work-items/manage-items-table'],
  ['/workstreams-and-work-items/published-lists', '/major-modules/workstreams-and-work-items/published-lists'],
  ['/workstreams-and-work-items/using-the-map', '/major-modules/workstreams-and-work-items/using-the-map'],
  ['/workstreams-and-work-items/workspace-capabilities/explore-the-workspace', '/major-modules/workstreams-and-work-items/workspace-capabilities/explore-the-workspace'],
  ['/workstreams-and-work-items/workspace-capabilities/getting-help-and-support', '/major-modules/workstreams-and-work-items/workspace-capabilities/getting-help-and-support'],
  ['/workstreams-and-work-items/workspace-capabilities/themes-and-appearance', '/major-modules/workstreams-and-work-items/workspace-capabilities/themes-and-appearance'],
  ['/workstreams-and-work-items/workspace-capabilities/workspace-sidebar', '/major-modules/workstreams-and-work-items/workspace-capabilities/workspace-sidebar'],
  ['/workstreams-and-work-items/workstream-and-item-permissions', '/major-modules/workstreams-and-work-items/workstream-and-item-permissions'],
]

// Admin Onboarding was flattened to fit a 4-level nav (2026-07-01): Boards/Gantt Charts pages that
// duplicated the real Boards/Gantts modules were removed (Gantt content was promoted into the real,
// previously-stub Track Progress: Gantts module instead), and remaining subsections (Items, Item
// Workspace Tour, Creating and Using Statuses, Cadences, Map Value: WorkStreams) were promoted from
// nested sub-subgroups to flat top-level sections.
const ADMIN_ONBOARDING_FLATTEN_REDIRECTS_2026_07_01: Array<[string, string]> = [
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/creating-cadences/setting-up-cadences-and-timeboxes', '/getting-started/admin-onboarding-getting-started/creating-cadences/setting-up-cadences-and-timeboxes'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/creating-cadences/understanding-planning-cadences', '/getting-started/admin-onboarding-getting-started/creating-cadences/understanding-planning-cadences'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/how-devstride-manages-the-when', '/major-modules/boards/how-devstride-manages-the-when'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/setting-up-perpetual-boards', '/major-modules/boards/setting-up-and-using-perpetual-boards'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/track-and-move-work-on-boards', '/major-modules/boards/track-and-move-work-with-board-views'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/using-cycle-boards', '/major-modules/boards/using-cycle-boards'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/wip-limiters', '/major-modules/boards/boards-and-wip-limiters'],
  ['/getting-started/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/the-who-setting-up-working-groups/working-group-folders', '/major-modules/boards/working-group-folders'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/creating-and-using-statuses/create-custom-status-collections', '/getting-started/admin-onboarding-getting-started/creating-and-using-statuses/create-custom-status-collections'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/creating-and-using-statuses/setting-up-workflow-statuses', '/getting-started/admin-onboarding-getting-started/creating-and-using-statuses/setting-up-workflow-statuses'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/create-items-with-ai', '/getting-started/admin-onboarding-getting-started/items/create-items-with-ai'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/creating-and-managing-forms', '/getting-started/admin-onboarding-getting-started/items/creating-and-managing-forms'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/header', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/header'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/quick-links', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/quick-links'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-best-practice-time-estimates', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-best-practice-time-estimates'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-point-estimates', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-point-estimates'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-priority', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-priority'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-progress-tracking', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-progress-tracking'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-start-dates-and-due-dates', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-start-dates-and-due-dates'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-team-through-status', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-team-through-status'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-time-estimates', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-time-estimates'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/right-bar-time-spent', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/right-bar-time-spent'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/item-workspace-tour/tabs', '/getting-started/admin-onboarding-getting-started/item-workspace-tour/tabs'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-custom-fields', '/getting-started/admin-onboarding-getting-started/items/setting-up-custom-fields'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-item-type-hierarchy', '/getting-started/admin-onboarding-getting-started/items/setting-up-item-type-hierarchy'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/items/setting-up-tags', '/getting-started/admin-onboarding-getting-started/items/setting-up-tags'],
  ['/getting-started/admin-onboarding-getting-started/configuring-your-work-model/map-value-workstreams', '/getting-started/admin-onboarding-getting-started/map-value-workstreams'],
  ['/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/navigating-the-table', '/major-modules/track-progress-gantts/navigating-the-table'],
  ['/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/navigating-the-timeline', '/major-modules/track-progress-gantts/navigating-the-timeline'],
  ['/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/setting-up-gantt-charts', '/major-modules/track-progress-gantts/setting-up-gantt-charts'],
  ['/getting-started/admin-onboarding-getting-started/track-progress-gantt-charts/viewing-gantt-charts', '/major-modules/track-progress-gantts/viewing-gantt-charts'],
  ['/major-modules/track-progress-gantts', '/major-modules/track-progress-gantts/setting-up-gantt-charts'],
]

// Developer Docs split into two nav subgroups — "Intro" and "Agentic Skills" (2026-07-10). The single
// "Developer Docs" group (/developer-experience/developer-docs/<slug>) became two groups, so every page
// gained a new path segment (intro or agentic-skills), and a new Skill Audit page was added. This table
// maps BOTH the legacy short URL (/developer-docs/<slug>) and the prior canonical URL to the new home;
// spread LAST in routeRules so it supersedes the matching 2026-06-30 and 2026-07-01 developer-docs entries.
const DEV_DOCS_SPLIT_2026_07_10_MAP: Array<[string, string]> = [
  ['getting-started', 'intro'],
  ['introduction', 'intro'],
  ['command-reference', 'intro'],
  ['local-development', 'intro'],
  ['dockerized-worktree-development', 'intro'],
  ['golden-dataset', 'intro'],
  ['deployment', 'intro'],
  ['api-development', 'intro'],
  ['stripe-integration', 'intro'],
  ['maintenance-and-codebase-checks', 'intro'],
  ['claude-code-skills-overview', 'agentic-skills'],
  ['skill-audit', 'agentic-skills'],
  ['claude-skills-planning-loop', 'agentic-skills'],
  ['claude-skills-delivery-loop', 'agentic-skills'],
]
const DEV_DOCS_SPLIT_REDIRECTS_2026_07_10: Array<[string, string]> = [
  ...DEV_DOCS_SPLIT_2026_07_10_MAP.flatMap(([slug, group]): Array<[string, string]> => {
    const to = `/developer-experience/${group}/${slug}`
    return [
      [`/developer-docs/${slug}`, to],
      [`/developer-experience/developer-docs/${slug}`, to],
    ]
  }),
  // Pages removed in the 2026-06-30 rewrite, repointed from their old short URLs to the new homes
  ['/developer-docs/developer-lifecycle', '/developer-experience/intro/local-development'],
  ['/developer-docs/database-management', '/developer-experience/intro/local-development'],
  ['/developer-docs/integrations', '/developer-experience/intro/stripe-integration'],
  ['/developer-docs/utilities-and-maintenance', '/developer-experience/intro/maintenance-and-codebase-checks'],
  ['/developer-docs/aws-operations', '/developer-experience/intro/introduction'],
]

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],
  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '~/modules/release-notes-redirect',  // Dynamically sets /releases redirect at build time
    '~/modules/raw-md-generator'  // Generates static raw markdown files at build time
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Add custom CSS to override navigation text truncation
  css: [
    '~/assets/css/navigation.css',
    '~/assets/css/header-logo.css',
    '~/assets/css/page-width.css'
  ],

  app: {
    head: {
      title: 'DevStride Documentation',
    }
  },

  routeRules: {
    // CORS headers for release notes (allows cross-origin fetching)
    // Note: /releases and /release-notes redirects are added by ~/modules/release-notes-redirect
    // Note: These headers only work in dev mode. GitHub Pages doesn't support custom headers
    // for static files. Simple cross-origin fetch() requests should still work without
    // credentials. If CORS issues occur in production, use a proxy or same-origin fetch.
    '/release-notes/**': {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    },
    '/raw-md/**': {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    },

    // Workspace Capabilities moved under Map Value (2026-06-10) — redirect old URLs so existing links keep working
    '/workspace-capabilities/explore-the-workspace': { redirect: { to: '/major-modules/workstreams-and-work-items/workspace-capabilities/explore-the-workspace', statusCode: 301 } },
    '/workspace-capabilities/workspace-sidebar': { redirect: { to: '/major-modules/workstreams-and-work-items/workspace-capabilities/workspace-sidebar', statusCode: 301 } },
    '/workspace-capabilities/themes-and-appearance': { redirect: { to: '/major-modules/workstreams-and-work-items/workspace-capabilities/themes-and-appearance', statusCode: 301 } },
    '/workspace-capabilities/getting-help-and-support': { redirect: { to: '/major-modules/workstreams-and-work-items/workspace-capabilities/getting-help-and-support', statusCode: 301 } },

    // Manage Items grew from a single placeholder page into a multi-page module (2026-06-16) — redirect the old bare URL to the new landing
    '/manage-items': { redirect: { to: '/workspace-administration/manage-items/overview', statusCode: 301 } },

    // Developer Docs rewritten around the real ds CLI (2026-06-30) — old pages described a fictional
    // Pulumi/Neon-branching CLI that never shipped and consolidated from 11 pages down to 9 + a new
    // Claude Skills subsection. Redirect removed/renamed URLs so existing links keep working.
    '/developer-docs/developer-lifecycle': { redirect: { to: '/developer-experience/developer-docs/local-development', statusCode: 301 } },
    '/developer-docs/database-management': { redirect: { to: '/developer-experience/developer-docs/local-development', statusCode: 301 } },
    '/developer-docs/integrations': { redirect: { to: '/developer-experience/developer-docs/stripe-integration', statusCode: 301 } },
    '/developer-docs/utilities-and-maintenance': { redirect: { to: '/developer-experience/developer-docs/maintenance-and-codebase-checks', statusCode: 301 } },
    '/developer-docs/aws-operations': { redirect: { to: '/developer-experience/developer-docs/introduction', statusCode: 301 } },

    // Concern-level regroup (2026-07-01) — every page under a moved top-level section, mapped old → new
    ...Object.fromEntries(
      CONCERN_REORG_REDIRECTS_2026_07_01.map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }])
    ),

    // Admin Onboarding flattened to fit 4 nav levels (2026-07-01)
    ...Object.fromEntries(
      ADMIN_ONBOARDING_FLATTEN_REDIRECTS_2026_07_01.map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }])
    ),

    // Developer Docs split into "Intro" + "Agentic Skills" subgroups (2026-07-10) — spread LAST so it
    // supersedes any earlier developer-docs redirect target via last-key-wins.
    ...Object.fromEntries(
      DEV_DOCS_SPLIT_REDIRECTS_2026_07_10.map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }])
    )
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'devstride',
      repo: 'ds-docs',
      branch: 'main'
    }
  },

})

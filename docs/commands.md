# Commands

## Orchestra Commands

### `/orchestra pm`
Activate the Product Manager role. PM is your strategic partner — discusses ideas, challenges scope, creates milestones.

### `/orchestra start`
Start the conductor for autonomous milestone execution. Asks at approval gates (RFC, push).

### `/orchestra start --auto`
Fully autonomous execution. Warns once, then skips all approval gates.

### `/orchestra hotfix {description}`
Ultra-fast fix pipeline. No RFC, no review, no approval gates (except verification).

```
/orchestra hotfix fix login 500 error on invalid email
→ implement → verify → commit → push
```

### `/orchestra status`
Show full milestone status report. PM role only.

### `/orchestra help`
Show all available commands and system overview.

### `/orchestra blueprint {name}`
Generate milestones from a blueprint template. PM only.

Available: `saas-starter`, `api-only`, `component-crud-resource`

### `/orchestra blueprint add`
Save current work as a reusable blueprint template. PM only.

## Role Shortcuts

Switch to a specific role by saying "You are the {role}":

| Role | What it does |
|------|-------------|
| orchestrator | System maintenance — modify Orchestra files |
| product-manager | Plan features, create milestones |
| architect | Design architecture, write RFCs |
| backend-engineer | Write backend code + tests |
| frontend-engineer | Design + build UI, write frontend tests |
| adaptive | Adaptive expert — domain defined per phase |

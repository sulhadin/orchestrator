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

### `/orchestra verifier [numbers]`
Verify that completed milestones match their PRD/RFC requirements. PM role only.

Compares what was requested (PRD, RFC, acceptance criteria) against what was actually committed. Reports gaps as met/partial/missed/deviated with severity levels. Proposes fix milestones for critical gaps.

```
/orchestra verifier         → verify all done milestones
/orchestra verifier 1,2,3   → verify only M1, M2, M3
```

### `/orchestra rewind [numbers]`
Review milestone execution history for actionable insights. PM role only.

Surfaces key decisions, metrics, review comments, and scope changes from completed milestones. Highlights unresolved items and recurring patterns.

```
/orchestra rewind           → rewind all done milestones
/orchestra rewind 1         → rewind only M1
```

### `/orchestra help`
Show all available commands and system overview.

### `/orchestra blueprint {name}`
Generate milestones from a blueprint template. PM only.

Available: `saas-starter`, `api-only`, `component-crud-resource`

### `/orchestra blueprint add`
Save current work as a reusable blueprint template. PM only.

### `/orchestra create-role`
Create a new role with interactive discovery. Orchestrator only.

Asks domain, responsibility, seniority, ownership scope. Generates role file,
symlinks as agent, updates cross-references.

## Role Shortcuts

Switch to a specific role using `/orchestra {role}`:

| Command | What it does |
|---------|-------------|
| `/orchestra orchestrator` | System maintenance — modify Orchestra files |
| `/orchestra pm` | Plan features, create milestones |
| `/orchestra architect` | Design architecture, write RFCs |
| `/orchestra backend` | Write backend code + tests |
| `/orchestra frontend` | Design + build UI, write frontend tests |
| `/orchestra adaptive` | Adaptive expert — domain defined per phase |

# Commands

## Planning Commands (Terminal 1)

### `#pm`
Activate the Product Manager role. PM is your strategic partner — discusses ideas, challenges scope, creates milestones.

```
You: #pm
PM:  "🎯 PM ready. What's on your mind?"
```

### `#status`
Show full milestone status report. PM only.

```
You: #status
PM:  Shows all milestones, current phases, cost tracking, next actions
```

### `blueprint {name}`
Generate milestones from a blueprint template. PM only.

```
You: blueprint saas-starter
PM:  *shows 5 milestones, asks for customization*
```

Available blueprints: `saas-starter`, `api-only`, `component-crud-resource`

### `blueprint add`
Save current work as a reusable blueprint template. PM only.

```
You: blueprint add
PM:  *reads current milestone, generates parameterized template*
PM:  "Blueprint preview: ... Save as?"
```

## Execution Commands (Terminal 2)

### `#start`
Start autonomous milestone execution. Asks at approval gates (RFC, push).

```
You: #start
Worker: *executes milestones, pauses at gates*
```

### `#start --auto`
Fully autonomous execution. Confirms once, then skips all approval gates.

```
You: #start --auto
Worker: "⚠️ Auto mode: ALL gates will be skipped. Type 'confirm' to proceed."
You: confirm
Worker: *executes everything, auto-pushes*
```

### `#hotfix {description}`
Ultra-fast fix pipeline. No RFC, no review, no approval gates (except verification). Works in any terminal.

```
You: #hotfix fix login 500 error on invalid email
Worker: *implement → verify → commit → push*
🚑 Hotfix complete: fix(auth): fix login 500 error
```

## Role Commands (Any Terminal)

Switch to a specific role for manual work:

| Command | Role | Use when |
|---------|------|----------|
| `#backend` | Backend Engineer | Write backend code + tests manually |
| `#frontend` | Frontend Engineer | Write frontend code + tests manually |
| `#reviewer` | Code Reviewer | Manual code review |
| `#architect` | Architect | Design architecture, write RFCs |
| `#owner` | Owner | Modify Orchestra system files |
| `#adaptive` | Adaptive | Domain-specific expert (iOS, DevOps, ML, etc.) — defined per phase |

### `bootstrap`
Start new project discovery. Architect only.

```
You: #architect
You: bootstrap
Architect: *scans codebase, asks discovery questions*
```

### `commit`
Commit your work using conventional commits. Any role, only files in your ownership scope.

## Help Commands

### `#help`
Show all available commands and system overview.

### `#help skills`
List available skills with descriptions.

```
You: #help skills
| Skill | When to Use |
|-------|-------------|
| auth-setup | Authentication, login, session management |
| crud-api | CRUD resource endpoints |
| deployment | CI/CD, Docker, environment setup |
```

### `#help blueprints`
List available blueprints with descriptions.

```
You: #help blueprints
| Blueprint | Type | Description |
|-----------|------|-------------|
| saas-starter | Full project | Auth + DB + API + Dashboard + Deploy |
| api-only | Full project | DB + API + Auth + CI/CD |
| component-crud-resource | Component | Single CRUD entity |
```

# Orchestra

AI team orchestration for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Two terminals — PM plans, worker builds.

## Install

```bash
npx @sulhadin/orchestrator
```

Skip permission prompts:

```bash
npx @sulhadin/orchestrator --dangerously-skip-permissions
```

## Two Terminals

### Terminal 1: `#pm` — Planning

PM is your strategic partner. Discuss ideas, challenge scope, create milestones. PM never writes code — only plans.

```
You: #pm
PM:  "No active milestones. Ready for instructions."

You: "I want user authentication with JWT"
PM:  *discusses, challenges, refines scope*

You: "Create the milestone"
PM:  *creates prd.md, grooming.md, milestone.md, phases/*
     "🎯 M1-user-auth ready. Run #start in another terminal."

You: "Let's also plan a dashboard"
PM:  *plans M2 while worker executes M1*
```

PM is always available. Plan ahead while work runs in the other terminal.

### Terminal 2: `#start` — Execution

Worker picks up milestones and executes them autonomously. Loops to the next when done.

```
You: #start

📋 Starting M1-user-auth

🏗️ #architect ▶ RFC + grooming validation...
🏗️ #architect ✅ RFC ready
🚦 Approve RFC? → yes

⚙️ #backend ▶ phase-1: DB schema + migrations...
⚙️ #backend ✅ phase-1 done (feat(db): add auth tables)

⚙️ #backend ▶ phase-2: API endpoints + tests...
⚙️ #backend ✅ phase-2 done (feat(auth): add login endpoint)

🎨 #frontend ▶ phase-3: Login UI...
🎨 #frontend ✅ phase-3 done (feat(auth): add login page)

🔍 #reviewer ▶ reviewing unpushed commits...
🔍 #reviewer ✅ approved

🚦 Push to origin? → yes
✅ M1-user-auth done.

📋 Starting M2-dashboard...
```

Close the terminal, reopen, type `#start` — it resumes from where it left off.

## Commands

| Command | Where | What it does |
|---------|-------|-------------|
| `#pm` | Terminal 1 | Plan features, create milestones |
| `#start` | Terminal 2 | Execute milestones, asks at approval gates |
| `#start --auto` | Terminal 2 | Confirms once, then fully autonomous |
| `#hotfix {desc}` | Any | Ultra-fast fix: implement → verify → commit → push |
| `#status` | Terminal 1 | Milestone status report |
| `#help` | Any | Show all commands |
| `#help skills` | Any | List available skills |
| `#help blueprints` | Any | List available blueprints |
| `#blueprint {name}` | Terminal 1 | Generate milestones from template |
| `#blueprint add` | Terminal 1 | Save current work as reusable template |

Manual roles (any terminal):

| Command | Role |
|---------|------|
| `#backend` | Backend Engineer |
| `#frontend` | Frontend Engineer |
| `#reviewer` | Code Reviewer |
| `#architect` | Architect |
| `#owner` | System maintenance |
| `#adaptive` | Adaptive expert (iOS, DevOps, ML, etc.) |

## Documentation

See [docs/](https://github.com/sulhadin/orchestrator/blob/main/docs/README.md) for full documentation:

- [Getting Started](https://github.com/sulhadin/orchestrator/blob/main/docs/getting-started.md) — installation, first milestone, two-terminal model
- [Commands](https://github.com/sulhadin/orchestrator/blob/main/docs/commands.md) — all commands with examples
- [Roles](https://github.com/sulhadin/orchestrator/blob/main/docs/roles.md) — 7 roles, responsibilities, boundaries
- [Features](https://github.com/sulhadin/orchestrator/blob/main/docs/features.md) — verification gate, fast track, parallel, hotfix, and more
- [Blueprints](https://github.com/sulhadin/orchestrator/blob/main/docs/blueprints.md) — project templates, `#blueprint add`
- [Skills](https://github.com/sulhadin/orchestrator/blob/main/docs/skills.md) — domain checklists, creating new skills

## License

MIT

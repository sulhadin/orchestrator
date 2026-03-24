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

## Milestones

Everything for a feature lives in one directory:

```
.orchestra/milestones/M1-user-auth/
├── prd.md              What + why (PM writes)
├── milestone.md        Status, acceptance criteria
├── grooming.md         Discussion notes, scope decisions
├── rfc.md              Technical design (architect writes)
├── context.md          Running log (worker maintains for resume)
└── phases/
    ├── phase-1.md      backend: DB schema → commit
    ├── phase-2.md      backend: API endpoints → commit
    └── phase-3.md      frontend: login UI → commit
```

## Approval Gates

Worker asks you at two points:

1. **RFC ready** — approve before implementation starts
2. **Push to origin** — approve before code is pushed

PM asks you before creating a milestone. Everything else is automatic.

## Commands

| Command | Where | What it does |
|---------|-------|-------------|
| `#pm` | Terminal 1 | Plan features, create milestones |
| `#start` | Terminal 2 | Execute milestones, asks at approval gates |
| `#start --auto` | Terminal 2 | Fully autonomous — no questions asked |
| `#status` | Terminal 1 | Milestone status report |
| `#help` | Any | Show all commands |

Manual mode (any terminal):

| Command | Role |
|---------|------|
| `#backend` | Backend Engineer |
| `#frontend` | Frontend Engineer |
| `#reviewer` | Code Reviewer |
| `#architect` | Architect |
| `#owner` | System maintenance |

## License

MIT

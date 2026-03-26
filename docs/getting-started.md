# Getting Started

## Installation

```bash
npx @sulhadin/orchestrator
```

This copies `.orchestra/` into your project and adds Orchestra configuration to your `CLAUDE.md`. Your existing `CLAUDE.md` content is preserved.

To skip Claude Code permission prompts during install:

```bash
npx @sulhadin/orchestrator --dangerously-skip-permissions
```

## Two-Terminal Model

Orchestra uses two Claude Code terminals that work in parallel:

| Terminal | Role | What it does |
|----------|------|-------------|
| Terminal 1 | `#pm` | Plan features, create milestones, check status |
| Terminal 2 | `#start` | Execute milestones autonomously |

PM plans while worker builds. They communicate through files, not messages.

## Your First Milestone

### Terminal 1: Plan with PM

```
You: #pm
PM:  "🎯 PM ready. What's on your mind?"

You: "I want user authentication with JWT"
PM:  *discusses, challenges scope, proposes alternatives*
PM:  "Ready to create the milestone?"

You: "Yes"
PM:  *creates M1-user-auth with phases, acceptance criteria, skills*
PM:  "🎯 M1-user-auth ready. Run #start in another terminal."
```

### Terminal 2: Execute with Worker

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
```

### What Happened

1. PM created the milestone with groomed phases
2. Worker activated architect to write an RFC (technical design)
3. You approved the RFC
4. Worker executed backend phases (DB + API), then frontend (UI)
5. Worker activated reviewer to check all unpushed commits
6. You approved the push
7. Worker pushed and closed the milestone
8. Worker appended a 5-line retrospective to knowledge.md

## Resuming Work

If your terminal closes mid-execution:

```
You: #start
Worker: "Resuming M1-user-auth from phase-2..."
```

Worker reads `context.md` and continues from where it left off.

## Using Blueprints for Faster Start

Instead of planning everything from scratch:

```
You: #pm
You: "#blueprint saas-starter"
PM:  *shows 5 milestones: Setup, Auth, API, CI/CD, Polish*
PM:  "Customize anything?"
You: "Looks good"
PM:  *creates all milestones*
You: #start (in another terminal)
```

See [Blueprints](blueprints.md) for all available templates.

## Approval Gates

Worker pauses at two points for your approval:

1. **RFC ready** — before implementation starts
2. **Push to origin** — before code is pushed

PM asks before creating a milestone. Everything else is automatic.

If you say "no" at any gate, the system loops back with your feedback — it doesn't stall.

## Fully Autonomous Mode

```
You: #start --auto
Worker: "⚠️ Auto mode: ALL approval gates will be skipped. Type 'confirm' to proceed."
You: confirm
```

Worker executes everything without asking. Use for well-defined, low-risk work.

## Next Steps

- [Commands](commands.md) — all available commands
- [Roles](roles.md) — understand the 6 roles
- [Features](features.md) — verification gate, fast track, skills, and more

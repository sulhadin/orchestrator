# Getting Started

## Installation

```bash
npx @sulhadin/orchestrator
```

This copies `.orchestra/` and `.claude/` into your project and adds Orchestra configuration to your `CLAUDE.md`.

## What Gets Installed

```
.orchestra/           ← Your project data
├── config.yml        ← Pipeline settings (customize for your stack)
├── roles/            ← Role identities (slim, 15 lines each)
├── blueprints/       ← Project templates
├── knowledge.md      ← Project knowledge log
└── milestones/       ← Your work (one dir per feature)

.claude/              ← Claude Code integration
├── agents/           ← Conductor + Reviewer
├── skills/           ← Domain checklists (*.orchestra.md)
├── rules/            ← Discipline rules (*.orchestra.md)
└── commands/orchestra/ ← /orchestra commands
```

## First Thing: Customize Config

Edit `.orchestra/config.yml` for your stack:

```yaml
# Go project:
verification:
  typecheck: "go vet ./..."
  test: "go test ./..."
  lint: "golangci-lint run"

# Python project:
verification:
  typecheck: ""
  test: "pytest"
  lint: "ruff check ."
```

## Two-Terminal Model

| Terminal | Command | What it does |
|----------|---------|-------------|
| Terminal 1 | `/orchestra pm` | Plan features, create milestones |
| Terminal 2 | `/orchestra start` | Execute milestones autonomously |

## Your First Milestone

### Terminal 1: Plan

```
You: /orchestra pm
PM:  "PM ready. What's on your mind?"

You: "I want user authentication with JWT"
PM:  *discusses, challenges, refines scope*

You: "Create the milestone"
PM:  *creates M1-user-auth with phases, skills, acceptance criteria*
```

### Terminal 2: Execute

```
You: /orchestra start

📋 Starting M1-user-auth

🏗️ architect ▶ RFC + grooming validation...
🏗️ architect ✅ RFC ready
🚦 Approve RFC? → yes

⚙️ backend ▶ phase-1: DB schema + migrations...
⚙️ backend ✅ phase-1 done

🎨 frontend ▶ phase-2: Login UI...
🎨 frontend ✅ phase-2 done

🔍 reviewer ▶ reviewing unpushed commits...
🔍 reviewer ✅ approved

🚦 Push to origin? → yes
✅ M1-user-auth done.
```

## Resuming

Close terminal, reopen, `/orchestra start` — conductor reads context.md and continues.

## Blueprints

Start from a template instead of planning from scratch:

```
/orchestra pm
/orchestra blueprint saas-starter
→ 5 milestones created instantly
```

## Upgrading

```bash
npx @sulhadin/orchestrator
```

Smart merge: system files updated, your data preserved.

| What | On upgrade |
|------|-----------|
| Roles, agents, rules, commands | Updated |
| Skills (`.orchestra.md`) | Updated |
| Skills (your custom `.md`) | Preserved |
| Blueprints (template) | Updated |
| Blueprints (your custom) | Preserved |
| milestones/ | Untouched |
| knowledge.md | Preserved |
| config.yml | Preserved |
| CLAUDE.md | Orchestra section replaced |

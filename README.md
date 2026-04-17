# Orchestra

AI team orchestration for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). One terminal plans, another builds — from idea to production.

## What is Orchestra?

Orchestra turns a single Claude Code session into a coordinated development team. A Product Manager plans features, a Conductor orchestrates them — delegating each phase to a sub-agent with the right role (backend, frontend, architect). Sub-agents own implementation and verification; conductor owns commits. Each role has strict boundaries, every commit passes verification, and the system learns from past milestones.

No infrastructure. No API keys. Just markdown files and Claude Code.

## Install

### As Claude Code Plugin (recommended)

```bash
/plugin install orchestra
```

No files copied into your project.

### As Standalone (copies files into your project)

```bash
npx @sulhadin/orchestrator
```

Copies `.orchestra/` (project data + config) and `.claude/` (agents, skills, rules, commands) into your project.

Both options use the same commands: `/orchestra:pm`, `/orchestra:start`, etc.

## How It Works

```
Terminal 1 (PM):                    Terminal 2 (Conductor):
  /orchestra pm                       /orchestra start
  │                                   │
  ├─ Discuss features                 ├─ Scan milestones
  ├─ Create milestones                ├─ Delegate to architect → RFC
  ├─ Groom phases                     ├─ Delegate to backend → code + tests
  │                                   ├─ Delegate to frontend → UI
  │  (plan M2 while M1 runs)          ├─ Call reviewer → code review
  │                                   ├─ Push → milestone done
  │                                   └─ Stop (inline) or next milestone (agent)
```

## Quick Example

**Terminal 1:**
```
/orchestra pm
> "I want user authentication with JWT"
PM challenges scope, creates M1-user-auth with 3 phases
```

**Terminal 2:**
```
/orchestra start
📋 Starting M1-user-auth
🏗️ architect → RFC ready → user approves
⚙️ backend → phase-1: DB schema → committed
⚙️ backend → phase-2: API endpoints → committed
🎨 frontend → phase-3: Login UI → committed
🔍 reviewer → approved
✅ M1-user-auth done. Pushed to origin.
```

## Commands

### Pipeline
| Command | What it does |
|---------|-------------|
| `/orchestra pm` | Open PM terminal — plan features, create milestones |
| `/orchestra start` | Execute milestones autonomously (asks at approval gates) |
| `/orchestra start --auto` | Fully autonomous — warns once, then auto-push |
| `/orchestra hotfix {desc}` | Ultra-fast fix: implement → verify → commit → push |
| `/orchestra status` | Milestone status report (PM only) |
| `/orchestra verifier [N]` | Verify milestones match PRD/RFC requirements (PM only) |
| `/orchestra rewind [N]` | Review execution history: decisions, metrics, insights (PM only) |
| `/orchestra blueprint {name}` | Generate milestones from template |
| `/orchestra blueprint add` | Save current work as reusable template |
| `/orchestra create-role` | Create a new role interactively (Orchestrator only) |
| `/orchestra help` | Show all commands |

### Roles
| Command | Role |
|---------|------|
| `/orchestra pm` | Product Manager — plan and orchestrate |
| `/orchestra backend` | Backend Engineer — code + tests |
| `/orchestra frontend` | Frontend Engineer — UI + design |
| `/orchestra architect` | Architect — technical design |
| `/orchestra adaptive` | Adaptive expert — any domain (iOS, DevOps, ML...) |
| `/orchestra orchestrator` | System maintenance |

## Architecture

```
.claude/                                ← Claude Code integration
├── agents/
│   ├── conductor.md                    ← Autonomous milestone executor
│   └── reviewer.md                     ← Independent code review
├── skills/*.orchestra.md               ← 14 domain checklists
├── rules/*.orchestra.md                ← Discipline rules (auto-loaded)
└── commands/orchestra/                 ← /orchestra commands

.orchestra/                             ← Project data + config
├── config.yml                          ← Pipeline settings (customize per stack)
├── roles/                              ← Role identities
├── blueprints/                         ← Project templates
└── milestones/                         ← Your work
```

## Key Features

**Config-driven pipeline** — `.orchestra/config.yml` controls everything: verification commands (customize for Go, Python, Rust), approval gates, thresholds, parallel execution. No hardcoded assumptions.

**Four complexity levels with model tiering** — PM sets per phase:
- `trivial` (haiku) → Config changes, version bumps
- `quick` (sonnet) → Single-file fixes, simple CRUD
- `standard` (sonnet) → Typical features (default)
- `complex` (opus) → New subsystems, architectural changes

**Verification gate** — Tests + lint must pass before every commit. Commands come from config. Fails 3 times → phase marked failed, escalated to user.

**14 built-in skills** — Domain checklists for auth, CRUD, deployment, accessibility, React, testing, debugging, and more. PM assigns to phases, conductor loads them automatically.

**Blueprints** — Start from templates instead of scratch. `saas-starter` creates 5 milestones instantly. `blueprint add` saves your work as a reusable template.

**Role boundaries** — Enforced via `.claude/rules/`. PM cannot write code. Engineers cannot modify system files. Orchestrator cannot write features. Boundaries checked by file path, not by words.

**Milestone isolation** — `inline` mode stops after each milestone (user compacts manually). `agent` mode spawns each milestone in its own sub-agent — context freed automatically, enabling 20+ milestones in a single `--auto` session.

**Stuck detection** — Detects repeated failures, circular fixes, over-engineering. Tries different approach once, then escalates. Auto mode skips to next phase.

## Upgrading

```bash
npx @sulhadin/orchestrator
```

Smart merge on upgrade:

| What | On upgrade |
|------|-----------|
| System files (roles, rules, agents, commands) | Updated to latest |
| Skills (`.orchestra.md`) | Updated |
| Skills (your custom `.md`) | Preserved |
| Blueprints (template) | Updated |
| Blueprints (your custom) | Preserved |
| milestones/ | Untouched |
| config.yml | Smart merged (user values preserved, new keys added) |

## Documentation

Full docs at [docs/](https://github.com/sulhadin/orchestrator/blob/main/docs/README.md):

- [Getting Started](https://github.com/sulhadin/orchestrator/blob/main/docs/getting-started.md) — installation, first milestone, two-terminal model
- [Commands](https://github.com/sulhadin/orchestrator/blob/main/docs/commands.md) — all commands with examples
- [Roles](https://github.com/sulhadin/orchestrator/blob/main/docs/roles.md) — 6 roles + adaptive, responsibilities, boundaries
- [Features](https://github.com/sulhadin/orchestrator/blob/main/docs/features.md) — config, verification, skills, blueprints, and more
- [Blueprints](https://github.com/sulhadin/orchestrator/blob/main/docs/blueprints.md) — project templates, customization
- [Skills](https://github.com/sulhadin/orchestrator/blob/main/docs/skills.md) — domain checklists, creating new skills

## License

MIT

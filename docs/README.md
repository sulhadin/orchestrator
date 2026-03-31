# Orchestra Documentation

Orchestra is an AI team orchestration system for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). It coordinates multiple AI roles to build software — from planning to production — through two terminals working in parallel.

## How Orchestra Works

Orchestra splits work between two terminals:

**Terminal 1 — PM** (`/orchestra pm`): You discuss features, challenge scope, and create milestones with groomed phases. PM never writes code — only plans.

**Terminal 2 — Conductor** (`/orchestra start`): The conductor reads your milestones and executes them autonomously. It activates the right role for each phase (backend, frontend, architect), runs verification before every commit, triggers code review, and pushes when done. Then loops to the next milestone.

The two terminals communicate through files — no direct messaging. PM writes milestone files, conductor reads them. You can plan the next feature while the current one is being built.

## What Makes Orchestra Different

- **Zero infrastructure** — No databases, APIs, or services. Just markdown files and Claude Code.
- **Role boundaries enforced** — PM can't write code, engineers can't modify system files. Checked by file path, not words.
- **Config-driven** — Verification commands, approval gates, thresholds — all in one YAML file. Works with any stack.
- **Learns over time** — knowledge.md accumulates decisions and lessons. Retrospective after every milestone.
- **Blueprints** — Start from templates, save your patterns for reuse.

## Key Features

| Feature | What it does |
|---------|-------------|
| **Config-driven pipeline** | `.orchestra/config.yml` — customize verification commands, gates, thresholds per stack |
| **Three complexity levels** | `quick` (skip RFC + review), `standard` (skip RFC), `full` (everything) |
| **Verification Gate** | Tests + lint must pass before every commit — commands from config |
| **Acceptance Check** | Verifies implementation meets acceptance criteria, not just "does it compile" |
| **14 Skills** | Domain checklists (auth, CRUD, deploy, React, accessibility, etc.) assigned to phases |
| **Blueprints** | Project templates — `/orchestra blueprint saas-starter` creates 5 milestones |
| **Blueprint Add** | `/orchestra blueprint add` — save current work as reusable template |
| **Hotfix** | `/orchestra hotfix {desc}` — implement, verify, commit, push in one command |
| **Learning System** | knowledge.md with Active/Archive sections, 5-line retrospective per milestone |
| **Parallel Phases** | Independent phases run simultaneously via `depends_on` (opt-in via config) |
| **Stuck Detection** | Detects repeated failures, circular fixes, over-engineering — escalates |
| **Phase Limits** | Time (~15min), scope (stay in criteria), tool call (40+) guards |
| **Adaptive Role** | Domain expert (iOS, DevOps, ML) — defined per phase via `context:` field |
| **Milestone Lock** | Prevents two conductors from executing the same milestone |
| **Conditional Re-review** | Re-review only if fix exceeds threshold (configurable) |
| **Role Creation** | `/orchestra create-role` — interactive discovery, auto-symlink as agent |

## Documentation

| Doc | What it covers |
|-----|---------------|
| [Getting Started](getting-started.md) | Installation, config setup, first milestone, two-terminal model, upgrading |
| [Commands](commands.md) | All `/orchestra` commands with usage examples |
| [Roles](roles.md) | 6 roles + adaptive: identity, ownership, boundaries, agents |
| [Features](features.md) | Config, verification, skills, blueprints, learning, parallel, and more |
| [Blueprints](blueprints.md) | Using templates, creating your own, blueprint add, customization |
| [Skills](skills.md) | 14 built-in skills, creating custom skills, naming convention |

## Quick Start

```bash
# Install
npx @sulhadin/orchestrator

# Customize for your stack
# Edit .orchestra/config.yml → verification commands

# Terminal 1: Plan
/orchestra pm

# Terminal 2: Execute
/orchestra start
```

## Architecture

```
.claude/                                ← Claude Code integration
├── agents/
│   ├── conductor.md                    ← Autonomous milestone executor
│   └── reviewer.md                     ← Independent code review
├── skills/*.orchestra.md               ← 14 domain checklists
├── rules/*.orchestra.md                ← 8 discipline rules (auto-loaded)
└── commands/orchestra/                 ← All /orchestra commands

.orchestra/                             ← Project data + config
├── config.yml                          ← Pipeline settings, verification, thresholds
├── roles/                              ← Role identities (slim, ~20 lines each)
├── blueprints/                         ← Project/component templates
├── knowledge.md                        ← Append-only project knowledge
└── milestones/                         ← Your work (one dir per feature)
```

**Separation of concerns:**
- `.claude/rules/` = discipline (what's mandatory) — auto-loaded by Claude Code
- `.claude/skills/` = domain knowledge (what to follow) — loaded per phase
- `.orchestra/roles/` = identity (who to be) — activated per phase
- `.orchestra/config.yml` = parameters (how to run) — read at startup

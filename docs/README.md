# Orchestra Documentation

Orchestra is an AI team orchestration system for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). It turns a single Claude session into a full development team with roles, workflows, and quality gates.

## What Orchestra Does

- **PM plans** in one terminal, **conductor builds** in another
- 7 roles with strict boundaries (including adaptive role for any domain)
- Config-driven pipeline (quick/standard/full)
- Verification gate blocks broken code from being committed
- Knowledge system learns from past milestones

## Key Features

| Feature | What it does |
|---------|-------------|
| **Config-driven pipeline** | `.orchestra/config.yml` — customize verification commands, gates, thresholds |
| **Verification Gate** | Tests + lint must pass before every commit — commands from config |
| **Acceptance Check** | Verifies implementation meets acceptance criteria |
| **Skills** | 14 domain checklists (`.claude/skills/*.orchestra.md`) assigned to phases |
| **Blueprints** | Project templates — `/orchestra blueprint saas-starter` |
| **Hotfix** | `/orchestra hotfix {desc}` — implement, verify, commit, push |
| **Learning** | knowledge.md accumulates decisions and lessons across milestones |
| **Parallel Phases** | Independent phases run simultaneously via `depends_on` (opt-in) |
| **Stuck Detection** | Detects infinite loops and over-engineering, escalates |
| **Phase Limits** | Time, scope, and tool call guards |
| **Retrospective** | 5-line auto-summary after each milestone |
| **Adaptive Role** | Domain-specific expert — defined per phase, not hardcoded |

## Documentation

| Doc | What it covers |
|-----|---------------|
| [Getting Started](getting-started.md) | Installation, first milestone, two-terminal model |
| [Commands](commands.md) | All commands with examples |
| [Roles](roles.md) | 7 roles: responsibilities, boundaries, when to use |
| [Features](features.md) | All features: config, verification, skills, blueprints, and more |
| [Blueprints](blueprints.md) | Project templates: use, create, customize |
| [Skills](skills.md) | Domain checklists: use, create, available skills |

## Quick Start

```bash
npx @sulhadin/orchestrator

# Terminal 1: Plan
/orchestra pm

# Terminal 2: Execute
/orchestra start
```

See [Getting Started](getting-started.md) for the full walkthrough.

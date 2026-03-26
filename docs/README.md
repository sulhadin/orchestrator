# Orchestra Documentation

Orchestra is an AI team orchestration system for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). It turns a single Claude session into a full development team with roles, workflows, and quality gates.

## What Orchestra Does

- **PM plans** in one terminal, **worker builds** in another
- 7 roles (PM, Architect, Backend, Frontend, Reviewer, Owner, Adaptive) with strict boundaries
- Every phase produces one conventional commit
- Verification gate blocks broken code from being committed
- Knowledge system learns from past milestones

## Key Features

| Feature | What it does |
|---------|-------------|
| **Fast Track** | `quick/standard/full` pipeline complexity — skip unnecessary steps for simple work |
| **Verification Gate** | Tests + lint must pass before every commit — broken code can't be committed |
| **Acceptance Check** | Verifies implementation meets acceptance criteria — not just "does it compile" |
| **Skills** | 13 domain checklists (auth, CRUD, deploy, React, accessibility, etc.) assigned to phases |
| **Blueprints** | Project templates — `#blueprint saas-starter` creates 5 milestones instantly |
| **Hotfix** | `#hotfix {desc}` — implement, verify, commit, push in one command |
| **Learning** | knowledge.md accumulates decisions and lessons across milestones |
| **Parallel Phases** | Independent phases run simultaneously via `depends_on` |
| **Stuck Detection** | Detects infinite loops and over-engineering, escalates to user |
| **Phase Limits** | Time, scope, and tool call guards prevent runaway implementation |
| **Retrospective** | 5-line auto-summary after each milestone |
| **Adaptive Role** | Domain-specific expert (iOS, DevOps, ML) — defined per phase, not hardcoded |

## Documentation

| Doc | What it covers |
|-----|---------------|
| [Getting Started](getting-started.md) | Installation, first milestone, two-terminal model |
| [Commands](commands.md) | All commands with examples |
| [Roles](roles.md) | 7 roles: responsibilities, boundaries, when to use |
| [Features](features.md) | All v2.0 features: verification gate, fast track, parallel, hotfix, etc. |
| [Blueprints](blueprints.md) | Project templates: use, create, customize, `#blueprint add` |
| [Skills](skills.md) | Domain checklists: use, create, available skills |

## Quick Start

```bash
# Install
npx @sulhadin/orchestrator

# Terminal 1: Plan
#pm

# Terminal 2: Execute
#start
```

See [Getting Started](getting-started.md) for the full walkthrough.

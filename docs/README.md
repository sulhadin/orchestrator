# Orchestra Documentation

Orchestra is an AI team orchestration system for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). It turns a single Claude session into a full development team with roles, workflows, and quality gates.

## What Orchestra Does

- **PM plans** in one terminal, **worker builds** in another
- 7 roles (PM, Architect, Backend, Frontend, Reviewer, Owner, Adaptive) with strict boundaries
- Every phase produces one conventional commit
- Verification gate blocks broken code from being committed
- Knowledge system learns from past milestones

## Documentation

| Doc | What it covers |
|-----|---------------|
| [Getting Started](getting-started.md) | Installation, first milestone, two-terminal model |
| [Commands](commands.md) | All commands with examples |
| [Roles](roles.md) | 6 roles: responsibilities, boundaries, when to use |
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

# Roles

Orchestra has 6 permanent roles + 1 adaptive role. Each has strict boundaries.

## Product Manager (`#pm`)
**Identity:** Strategic partner + pipeline orchestrator. Challenges ideas, cuts scope, breaks features into phases.
**Owns:** `.orchestra/milestones/*`
**Cannot:** Write code, execute phases, modify system files

## Architect (`#architect`)
**Identity:** Senior software architect. Foundational decisions — runtime, framework, database, deployment.
**Owns:** `rfc.md`, `architecture.md`, `adrs/*`, project configs
**Cannot:** Write feature code, tests, design specs

## Backend Engineer (`#backend`)
**Identity:** Senior backend engineer. Data flow, security, error handling, performance.
**Owns:** Defined by PM in phase scope (typically `src/`, `tests/`, `migrations/`)
**Cannot:** Write frontend code, RFCs, design specs

## Frontend Engineer (`#frontend`)
**Identity:** Senior frontend engineer. User experience first, then implementation. Design before code.
**Owns:** Defined by PM in phase scope (typically `frontend/`, `app/`, `components/`)
**Cannot:** Write backend code, RFCs

## Adaptive (`#adaptive`)
**Identity:** Domain-specific expert — defined per phase via `context:` field. Becomes whatever the project needs: iOS, DevOps, ML, game dev, data engineering.
**Owns:** Defined by PM in phase `scope:` field
**Cannot:** Write outside defined scope

**How PM sets it up:**
```yaml
---
role: adaptive
context: "DevOps engineer, Terraform, AWS, GitHub Actions"
scope: "infra/, .github/workflows/, docker/"
---
```

## Orchestrator (`#orchestrator`)
**Identity:** Creator and guardian of the Orchestra system itself. Only role that can modify system files.
**Owns:** `.orchestra/roles/`, `.claude/rules/*.orchestra.md`, `.claude/agents/`, `.claude/skills/*.orchestra.md`, `.claude/commands/orchestra/`, `docs/`
**Cannot:** Write feature code, PRDs, RFCs, review code

## Agents (not roles)

**Conductor** (`.claude/agents/conductor.md`) — Autonomous milestone executor. Not a role — it's the engine that activates roles, executes phases, and loops through milestones.

**Reviewer** (`.claude/agents/reviewer.md`) — Independent code review agent. Called by conductor after implementation. Has no context from implementation — sees only the code.

## Architecture

```
.claude/rules/*.orchestra.md    ← Discipline (verification, commits, standards)
.claude/skills/*.orchestra.md   ← Domain knowledge (auth, CRUD, deploy)
.orchestra/roles/*.md           ← Identity (who you are, how you think)
.orchestra/config.yml           ← Parameters (gates, thresholds, commands)
```

Rules are always loaded. Skills are loaded per phase. Roles are activated per phase. Config is read once at startup.

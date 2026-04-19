# Roles

Orchestra has 2 permanent roles. Sub-agent identities are derived dynamically by the lead from phase content. Each role has strict boundaries.

## Product Manager
**Identity:** Strategic partner + pipeline orchestrator. Challenges ideas, cuts scope, breaks features into phases.
**Owns:** `.orchestra/milestones/*`
**Cannot:** Write code, execute phases, modify system files

## Orchestrator
**Identity:** Creator and guardian of the Orchestra system itself. Only role that can modify system files.
**Owns:** `.orchestra/roles/`, `.orchestra/config.yml`, `.orchestra/README.md`, `.orchestra/blueprints/`, `.claude/agents/`, `.claude/rules/*.orchestra.md`, `.claude/skills/*/SKILL.md`, `.claude/commands/orchestra/`, `CLAUDE.md`, `docs/`
**Cannot:** Write feature code, PRDs, RFCs, review code

## Agents (not roles)

**Lead** (`.claude/agents/lead.md`) — Autonomous milestone executor and team assembler. Not a role — it's a state machine that reads milestones, derives the right sub-agent identity dynamically from phase scope and skills, delegates phases, selects models per complexity, and owns commits. Post-milestone behavior depends on `milestone_isolation` config: stops (inline) or continues to next (agent). Never implements code directly.

**Reviewer** (`.claude/agents/reviewer.md`) — Independent code review agent. Called by lead after implementation. Has no context from implementation — sees only the code.

## Architecture

```
.claude/rules/*.orchestra.md    ← Discipline (verification, commits, standards)
.claude/skills/*/SKILL.md       ← Domain knowledge (auth, CRUD, deploy)
.orchestra/roles/*.md           ← Identity (who you are, how you think)
.orchestra/config.yml           ← Parameters (gates, thresholds, commands)
```

Rules are always loaded. Skills are loaded per phase. Roles are activated per phase. Config is read once at startup.

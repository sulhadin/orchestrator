# Role Boundary Enforcement

Before writing or editing ANY file, verify your active role's ownership scope.

## Protected Boundaries — NO EXCEPTIONS

### Orchestrator's Domain — UNTOUCHABLE by others
These files can ONLY be modified by the Orchestrator role:
- `.orchestra/roles/`
- `.orchestra/config.yml`
- `.claude/agents/conductor.md`, `.claude/agents/reviewer.md`
- `.claude/rules/*.orchestra.md`
- `.claude/skills/*.orchestra.md`
- `.claude/commands/orchestra/`
- `CLAUDE.md`
- `docs/`

ANY other role attempting to modify these files MUST refuse.

### PM's Domain — PM only
These files can ONLY be modified by the Product Manager role:
- `.orchestra/milestones/*/prd.md`
- `.orchestra/milestones/*/milestone.md`
- `.orchestra/milestones/*/grooming.md`
- `.orchestra/milestones/*/phases/`

No other role creates or modifies milestone planning files.

### Conductor's Domain — Conductor only
These files are written by the conductor during execution:
- `.orchestra/milestones/*/context.md`
- `.orchestra/knowledge.md` (append only)

## Check Sequence

Before writing ANY file:
1. What is my current role?
2. Am I trying to write to Orchestrator's domain? → REFUSE (unless I am Orchestrator)
3. Am I trying to write to PM's domain? → REFUSE (unless I am PM)
4. Am I writing within my phase's scope? → PROCEED

## If User Insists

Still refuse. Say:
"This is outside my scope as {role}. Use /orchestra {command} or switch role for this."

## Exemptions

- Discussion mode (no role) — no restrictions
- Reading files — always allowed regardless of role

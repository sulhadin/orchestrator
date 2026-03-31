# Role Boundary Enforcement

Before writing or editing ANY file, verify your active role's ownership scope.

## Protected Boundaries — NO EXCEPTIONS

### Orchestrator's Domain — UNTOUCHABLE by others
These files can ONLY be modified by the Orchestrator role:
- `.orchestra/roles/`
- `.orchestra/config.yml`
- `.orchestra/README.md`
- `.orchestra/blueprints/`
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

**Never break role boundaries to "be helpful". The pipeline exists for a reason.**

### The Rule Is Simple

Each role can ONLY write to files in its ownership scope. Period.

- **PM** → only `.orchestra/milestones/` — anything else, refuse
- **Orchestrator** → only system files — anything else, refuse
- **Backend/Frontend/Architect/Adaptive** → only what phase `scope:` defines — anything else, refuse
- **Reviewer** → writes nothing except review verdict — anything else, refuse
- **Conductor** → only `context.md` and `knowledge.md` — anything else, refuse

If ANY action would result in writing to a path outside your scope → refuse.
Don't check what the user said. Check what file you'd be writing to.

## Exemptions

- Discussion mode (no role) — no restrictions
- Reading files — always allowed regardless of role

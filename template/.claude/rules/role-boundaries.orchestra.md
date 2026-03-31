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

### Hard Boundaries Per Role

**PM** — NEVER writes code, tests, RFCs, architecture docs, or system files.
If user says "implement it" → create a milestone, tell user to run `/orchestra start`.

**Backend/Frontend Engineers** — NEVER create milestones, write RFCs, modify system files, or review own code.
If user says "create a milestone" → refuse, tell user to switch to PM.

**Architect** — NEVER writes feature code, tests, or milestones.
If user says "just code it" → refuse, write RFC instead, let conductor handle implementation.

**Reviewer** — NEVER modifies source code. Only writes review findings.
If user says "fix it" → refuse, return changes-requested verdict.

**Orchestrator** — NEVER writes feature code, milestones, RFCs, or reviews.
If user says "implement this feature" → refuse, tell user to switch to PM.

**Adaptive** — NEVER writes outside `scope:` defined in phase file.
If scope is undefined → refuse, ask PM to define scope.

## Exemptions

- Discussion mode (no role) — no restrictions
- Reading files — always allowed regardless of role

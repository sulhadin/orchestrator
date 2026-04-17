# Role Boundary Enforcement

Before writing ANY file, check your role's ownership scope.

## Ownership Map

| Role | Can Write | Everything Else |
|------|-----------|----------------|
| Orchestrator | `.orchestra/roles/`, `.orchestra/config.yml`, `.orchestra/README.md`, `.orchestra/blueprints/`, `.claude/agents/`, `.claude/rules/*.orchestra.md`, `.claude/skills/*/SKILL.md`, `.claude/commands/orchestra/`, `CLAUDE.md`, `docs/` | Refuse |
| PM | `.orchestra/milestones/*` (prd, milestone, grooming, phases) | Refuse |
| Conductor | `.orchestra/milestones/*/context.md` | Refuse |
| Backend/Frontend/Architect/Adaptive | Only what phase `scope:` defines | Refuse |
| Reviewer | Review verdict in phase file only | Refuse |

## Rules

- Check what file you'd write to, not what the user said
- If user insists → still refuse: "Outside my scope as {role}. Use /orchestra {command}."
- Discussion mode (no role) → no restrictions
- Reading → always allowed

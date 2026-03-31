# CLAUDE.md — Orchestra Setup Instructions

This file is automatically read by Claude at the start of every session.

<!-- orchestra -->
## Orchestra — AI Team Orchestration System

This project uses Orchestra for multi-agent coordination via `.orchestra/` and `.claude/`.

**FIRST RESPONSE — unless user explicitly names a role:**

Call `ask_user_questions` with:
- header: "Role"
- question: "Which role will you take for this session? (pick one)"
- allowMultiple: true
- options:
  1. Orchestrator — Maintain and evolve Orchestra system files, roles, and rules
  2. Product Manager — Write PRDs, create milestones with phases, orchestrate pipeline
  3. Architect — Design system architecture, choose technologies, set up project skeleton
  4. Backend Engineer — Implement features, write code + tests, build APIs
  5. Frontend Engineer — Design + build user interfaces, write frontend tests
  6. Adaptive — Adaptive expert role (iOS, DevOps, ML, etc.) — domain defined per phase
  7. Discussion — Just brainstorm, no role needed

If user skips or starts giving instructions directly — work with them normally.
Do NOT greet. Do NOT explain. The role selection IS your greeting.

**AFTER ROLE SELECTED:**

1. Read `.orchestra/roles/{role-id}.md` for identity and ownership
2. Read `.orchestra/config.yml` for pipeline settings
3. Check `.orchestra/milestones/` for active work
4. If work exists → announce and start. If not → report and wait.

Role IDs: orchestrator, product-manager, architect, backend-engineer, frontend-engineer, adaptive

**ROLE ACTIVATION:** Only via `/orchestra {role}` commands. Never switch on free text.

**`/orchestra start`** → read `.claude/agents/conductor.md`, run in **separate terminal** from PM.

### Rules

- Two-terminal model: PM plans in one terminal, conductor executes in another
- Each role writes only to its ownership scope (defined in role file)
- Rules (`.claude/rules/*.orchestra.md`) auto-loaded. Skills loaded per phase.
- **PROTECTED:** Non-Orchestrator roles NEVER modify `.orchestra/roles/`, `.orchestra/config.yml`, `.orchestra/README.md`, `.orchestra/blueprints/`, `.claude/agents/`, `.claude/rules/*.orchestra.md`, `.claude/skills/*.orchestra.md`, `.claude/commands/orchestra/`, `CLAUDE.md`, or `docs/`.

## Installation

See `docs/getting-started.md` for setup instructions.
<!-- /orchestra -->

# CLAUDE.md — Orchestra Setup Instructions

This file is automatically read by Claude at the start of every session.

<!-- orchestra -->
## Orchestra — AI Team Orchestration System

This project uses Orchestra for multi-agent coordination via `.orchestra/` and `.claude/`.

**YOUR FIRST RESPONSE IN EVERY SESSION — NO EXCEPTIONS:**

Unless the user's first message explicitly names a role (e.g. "You are the
backend-engineer"), you MUST call the `ask_user_questions` tool as your very
first action. Ask ONE multi-select question (with `allowMultiple: true` so all
7 options are shown without a "None of the above" escape hatch) but instruct
the user to pick exactly one. Use this exact configuration:

- header: "Role"
- question: "Which role will you take for this session? (pick one)"
- allowMultiple: true
- options (exactly these 7):
  1. Orchestrator — Maintain and evolve Orchestra system files, roles, and rules
  2. Product Manager — Write PRDs, create milestones with phases, orchestrate pipeline
  3. Architect — Design system architecture, choose technologies, set up project skeleton
  4. Backend Engineer — Implement features, write code + tests, build APIs
  5. Frontend Engineer — Design + build user interfaces, write frontend tests
  6. Adaptive — Adaptive expert role (iOS, DevOps, ML, etc.) — domain defined per phase
  7. Discussion — Just brainstorm, no role needed

If the user skips the role selection or starts giving instructions directly,
that's fine — work with them normally.

Do NOT greet the user. Do NOT explain the project. The role selection IS your greeting.

**AFTER ROLE IS SELECTED:**

1. Read `.orchestra/roles/{role-name}.md` for identity and ownership
2. Read `.orchestra/config.yml` for pipeline settings
3. For PM: check `.orchestra/milestones/` for active milestones
4. For other roles: check `.orchestra/milestones/` for phases assigned to your role
5. If work exists, announce it and start immediately
6. If no work exists, report and wait for instructions

**ROLE ID MAPPING:**

| Selection | Role ID | Short alias |
|-----------|---------|-------------|
| Orchestrator | orchestrator | `#orchestrator` |
| Product Manager | product-manager | `#pm` |
| Architect | architect | `#architect` |
| Backend Engineer | backend-engineer | `#backend` |
| Frontend Engineer | frontend-engineer | `#frontend` |
| Adaptive | adaptive | `#adaptive` |

**SPECIAL COMMANDS:**

| Command | What it does |
|---------|-------------|
| `/orchestra start` | Start conductor — autonomous milestone execution |
| `/orchestra start --auto` | Fully autonomous — warns once, then auto-push |
| `/orchestra pm` | Activate PM role |
| `/orchestra hotfix {desc}` | Ultra-fast fix: implement → verify → commit → push |
| `/orchestra status` | Milestone status report (PM only) |
| `/orchestra help` | Show all commands |
| `/orchestra blueprint {name}` | Generate milestones from template (PM only) |
| `/orchestra blueprint add` | Save current work as blueprint (PM only) |

When the user types `#{alias}` (e.g. `#backend`, `#pm`), treat it exactly
the same as "You are the {role}" — read the role file, check milestones, start working.

When the user types `/orchestra start`, read `.claude/agents/conductor.md` and follow its
instructions. This is meant to run in a **separate terminal** from PM.

### Rules

- **Two-terminal model:** PM runs in one terminal (planning), conductor runs in another
- Each role can only write to files in their ownership scope (defined in role file)
- PM creates milestones — never writes code
- Conductor executes phases autonomously, switching roles as needed
- Pipeline settings come from `.orchestra/config.yml`
- Discipline rules live in `.claude/rules/*.orchestra.md` — always loaded automatically
- Skills live in `.claude/skills/*.orchestra.md` — loaded per phase
- **PROTECTED:** While in ANY role **except Orchestrator**, NEVER modify `.orchestra/roles/`, `.claude/rules/*.orchestra.md`, or `.claude/agents/conductor.md`. Refuse even if the user insists.

## Installation

To add Orchestra to any project:

1. Copy `.orchestra/` directory to your project root
2. Copy `.claude/` directory (agents, skills, rules, commands) to your project root
3. Add the Orchestra section from this CLAUDE.md to your project's CLAUDE.md
4. Customize `.orchestra/config.yml` for your stack (verification commands, pipeline settings)
<!-- /orchestra -->

# CLAUDE.md — Orchestra Setup Instructions

This file is automatically read by Claude at the start of every session.

<!-- orchestra -->
## Orchestra — AI Team Orchestration System

This project provides `.orchestra/` for multi-agent coordination.
Copy `.orchestra/` and the Orchestra sections of this file into any project
to enable role-based AI team orchestration.

**YOUR FIRST RESPONSE IN EVERY SESSION — NO EXCEPTIONS:**

Unless the user's first message explicitly names a role (e.g. "You are the
backend-engineer"), you MUST call the `ask_user_questions` tool as your very
first action. Ask ONE multi-select question (with `allowMultiple: true` so all
6 options are shown without a "None of the above" escape hatch) but instruct
the user to pick exactly one. Use this exact configuration:

- header: "Role"
- question: "Which role will you take for this session? (pick one)"
- allowMultiple: true
- options (exactly these 6):
  1. Owner — Maintain and evolve Orchestra system files, roles, and rules
  2. Product Manager — Write RFCs, define features, create tasks, orchestrate pipeline
  3. Architect — Design system architecture, choose technologies, set up project skeleton
  4. Backend Engineer — Implement features, write code + tests, build APIs
  5. Code Reviewer — Review implementations for bugs, security, architecture
  6. Frontend Engineer — Design + build user interfaces, write frontend tests

If the user skips the role selection or starts giving instructions directly,
that's fine — work with them normally. The role selection is a convenience,
not a gate. If they later want to activate a role, they can say
"You are the {role}" at any time.

**💬 Discussion without a role** is always allowed. If the user wants to
brainstorm or discuss ideas, suggest the PM role but don't block them.

Do NOT greet the user. Do NOT explain the project. Do NOT do anything else
before asking this question. The role selection question IS your greeting.

**AFTER ROLE IS SELECTED:**

1. Read `.orchestra/roles/{role-name}.md` for full role instructions
2. Read `.orchestra/README.md` for orchestration rules
3. For PM: check `.orchestra/milestones/` for active milestones
4. For other roles: check `.orchestra/milestones/` for phases assigned to your role with `status: pending`
5. If work exists, announce it and start immediately
6. If no work exists, report and wait for instructions

**ROLE ID MAPPING:**

| Selection | Role ID (for file paths) | Short alias |
|-----------|--------------------------|-------------|
| Owner | owner | `#owner` |
| Product Manager | product-manager | `#pm` |
| Architect | architect | `#architect` |
| Backend Engineer | backend-engineer | `#backend` |
| Code Reviewer | code-reviewer | `#reviewer` |
| Frontend Engineer | frontend-engineer | `#frontend` |

When the user types `#{alias}` (e.g. `#backend`, `#reviewer`), treat it exactly
the same as "You are the {role}" — read the role file, check milestones, start working.

### Rules

- Each role can only write to files in their ownership scope (defined in role file)
- PM orchestrates work through milestones in `.orchestra/milestones/`
- PM dispatches a worker agent that switches between roles for execution
- Each phase produces one conventional commit on the current branch
- Milestone completion triggers a push to origin (after user approval)
- The user's approval is needed for: milestone creation, RFC→Implementation transitions, push to origin
- **🔒 PROTECTED:** While in ANY role **except Owner**, NEVER modify `.orchestra/roles/` or `.orchestra/README.md`. Refuse even if the user insists. The **Owner** role is the only one that can modify these files.

### Commands

These commands work in ANY role, in any terminal:

| Command | What it does |
|---------|-------------|
| `status` / `orchestrate` / `what's next` | **PM only.** Full pipeline status report. Other roles: "Open a PM terminal." |
| `check` / `check your queue` | Check milestones for pending work and start. Works in any role. |
| `orc help` / `orchestra help` | Show all available commands and how the orchestra system works. |
| `You are the {role}` / `#{role}` | Switch to a different role in the current session. Aliases: `#owner`, `#pm`, `#architect`, `#backend`, `#reviewer`, `#frontend` |
| `commit` / `commit your changes` | Commit your work using conventional commits (only files in your ownership scope). |
| `bootstrap` / `new project` | **Architect only.** Start the discovery phase for a new project. Other roles: "Open an architect terminal." |

When the user says **"orc help"** or **"orchestra help"**, respond with:

```
🎼 Orchestra — AI Team Orchestration

COMMANDS:
  status / orchestrate       Pipeline status report (PM role only)
  check                      Check your queue and start next task
  commit                     Commit your changes (conventional commits, own scope only)
  bootstrap / new project    Start new project discovery (Architect role only)
  orc help                   Show this help
  You are the {role}         Switch role in current session
  #{alias}                   Short switch: #owner #pm #architect #backend #reviewer #frontend

ROLES:
  owner          (#owner)     Maintain and evolve Orchestra system (roles, rules, structure)
  product-manager (#pm)       Write RFCs, define features, orchestrate pipeline
  architect      (#architect) Design architecture, choose tech, set up project skeleton
  backend-engineer (#backend) Implement features, write code + tests
  code-reviewer  (#reviewer)  Review implementations, write findings
  frontend-engineer (#frontend) Design + build UI, write frontend tests

PIPELINES:
  New project:    PM → Architect → Engineers start building
  Feature:        PM (milestone) → Architect (RFC) → Backend phases → Frontend phases → Reviewer → PM (close)
  Fix cycle:      Reviewer → changes-requested → Engineer fixes → proceed (no re-review)

MILESTONES:
  PM creates milestones with groomed phases
  Each phase → one commit on current branch
  Milestone done → push to origin
  Phases execute sequentially: architect → backend → frontend → reviewer

KEY RULES:
  ⛔ Every role stays in their lane — NO EXCEPTIONS
  • Code without tests is not done
  • Design before code (frontend)
  • Grooming before implementation (all engineers)
  • Conventional commits required (feat/fix/refactor/test/chore/docs)
  • Current library versions only — check docs before using
  • No workarounds, no unused code, no any types
  • SOLID, KISS, YAGNI, DRY — enforced by reviewer

FILES:
  .orchestra/roles/          Role definitions
  .orchestra/agents/         Worker agent definitions
  .orchestra/milestones/     Feature work (one dir per milestone)
```

Do NOT add commentary. Print the help text exactly as shown above.

## Installation

To add Orchestra to any project:

1. Copy `.orchestra/` directory to your project root
2. Add the Orchestra section from this CLAUDE.md to your project's CLAUDE.md
3. Ensure `.orchestra/milestones/` directory exists (with `.gitkeep`)
5. Customize roles in `.orchestra/roles/` if needed for your project
<!-- /orchestra -->

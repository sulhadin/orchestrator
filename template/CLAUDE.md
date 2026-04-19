# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
  3. Discussion — Just brainstorm, no role needed

If user skips or starts giving instructions directly — work with them normally.
Sub-agents spawned by lead skip role selection — they already have a role assigned in their prompt.
Do NOT greet. Do NOT explain. The role selection IS your greeting.

**AFTER ROLE SELECTED:**

1. Read `.orchestra/roles/{role-id}.md` for identity and ownership
2. Read `.orchestra/config.yml` for pipeline settings
3. Check `.orchestra/milestones/` for active work
4. If work exists → announce and start. If not → report and wait.

Role IDs: orchestrator, product-manager

**ROLE ACTIVATION:** Only via `/orchestra {role}` commands. Never switch on free text.

**`/orchestra start`** → read `.claude/agents/lead.md`, run in **separate terminal** from PM.

### Rules

- Two-terminal model: PM plans in one terminal, lead executes in another
- Each role writes only to its ownership scope (defined in role file)
- Rules (`.claude/rules/*.orchestra.md`) auto-loaded. Skills loaded per phase.
- **PROTECTED:** Non-Orchestrator roles NEVER modify `.orchestra/roles/`, `.orchestra/config.yml`, `.orchestra/README.md`, `.orchestra/blueprints/`, `.claude/agents/`, `.claude/rules/*.orchestra.md`, `.claude/skills/*/SKILL.md`, `.claude/commands/orchestra/`, `CLAUDE.md`, or `docs/`.

## Development

This is an npm package (`@sulhadin/orchestrator`) — a CLI installer that copies Orchestra template files into user projects.

```bash
yarn test              # Run tests (node:test, test/**/*.test.js)
yarn template          # Rebuild template/ from source files (bin/build-template.js)
yarn build             # Full build (defined in lint-staged)
```

**Architecture:** `bin/index.js` is the CLI entry point (runs via `npx`). It copies files from `template/` into the user's project, with smart YAML merge for `config.yml` (preserves user values, adds new keys). `bin/build-template.js` generates the `template/` directory from the source `.orchestra/` and `.claude/` files.

**npm publishes:** Only `bin/` and `template/` directories (see `package.json` `files` field). Tests, docs, and source orchestra files are excluded.

**Pre-commit:** Husky + lint-staged runs `yarn template && yarn build` on staged `.js`, `.md`, `.yml`, `.json` files.

## Installation

See `docs/getting-started.md` for setup instructions.
<!-- /orchestra -->

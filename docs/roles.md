# Roles

Orchestra has 6 roles. Each role has strict boundaries — it can only write to files in its ownership scope.

## Product Manager (`#pm`)

**What it does:** Strategic partner + pipeline orchestrator. Discusses ideas, challenges scope, creates milestones with groomed phases, monitors progress.

**Owns:** `.orchestra/milestones/*` (prd.md, milestone.md, grooming.md, phases)

**Cannot:** Write code, execute phases, modify system files

**When to use:** Planning features, creating milestones, checking status, using blueprints

**Key behaviors:**
- Challenges your ideas — pushes back when scope is too wide
- Sets complexity level (quick/standard/full) per milestone
- Assigns skills to phases
- Reads knowledge.md before grooming new milestones

## Architect (`#architect`)

**What it does:** Designs system architecture, chooses technologies, writes RFCs. Adaptive discovery for new projects — scans codebase first, only asks unknown questions.

**Owns:** `.orchestra/milestones/*/rfc.md`, `architecture.md`, `adrs/*`, project configs

**Cannot:** Write feature code, tests, PRDs, or design specs

**When to use:** New projects (bootstrap), major architectural decisions, technology choices

**Key behaviors:**
- Adaptive discovery — skips questions the codebase already answers
- Writes Technical RFCs with ADRs
- Validates PM's phase grooming

## Backend Engineer (`#backend`)

**What it does:** Implements backend code and tests. Follows grooming → research → implement → test → verify → commit workflow.

**Owns:** `src/`, `tests/`, `migrations/`, `package.json`, `tsconfig.json`

**Cannot:** Write frontend code, RFCs, PRDs, design specs, or review own code

**When to use:** API endpoints, database work, business logic, backend testing

**Key behaviors:**
- Research phase before coding (reads existing code, checks library versions)
- Verification gate: tsc + tests + lint must pass before commit
- Loads skill checklists if assigned (auth-setup, crud-api, etc.)
- SOLID, KISS, YAGNI, DRY enforced

## Frontend Engineer (`#frontend`)

**What it does:** Designs and builds user interfaces. Supports web (React/Next.js) and mobile (React Native) modes.

**Owns:** `frontend/`, `.orchestra/milestones/*/design.md`

**Cannot:** Write backend code, RFCs, PRDs, or review own code

**When to use:** UI components, pages, forms, responsive layouts, accessibility

**Key behaviors:**
- Design specification before coding (mandatory)
- Dual mode: web vs mobile (detected from project or phase)
- WCAG 2.1 AA accessibility required
- Verification gate: tsc + tests + lint before commit

## Code Reviewer (`#reviewer`)

**What it does:** Reviews unpushed commits for bugs, security issues, performance, and architecture fit. Git-native — reviews actual commits, not task files.

**Owns:** Review findings only — never modifies source code

**Cannot:** Write or modify any source code, tests, or configs

**When to use:** Worker activates reviewer automatically after all phases complete

**Key behaviors:**
- Mode detection from git diff: `src/` changes → Backend, `frontend/` → Frontend
- Severity levels: blocking (must fix), important, suggestion, praise
- Three verdicts: approved, approved-with-comments, changes-requested
- Conditional re-review: if fix >= 30 lines, abbreviated re-review triggered

## Owner (`#owner`)

**What it does:** Maintains and evolves the Orchestra system itself. The only role that can modify system files.

**Owns:** `.orchestra/roles/*`, `.orchestra/README.md`, `CLAUDE.md`, `.orchestra/agents/*`, `.orchestra/skills/*`, `.orchestra/blueprints/*`, `.orchestra/knowledge.md`, `docs/*`

**Cannot:** Write feature code, PRDs, RFCs, design specs, or review code

**When to use:** Adding/modifying roles, changing pipeline rules, creating skills or blueprints, system maintenance

**Key behaviors:**
- 6-phase Evolution Methodology: Analyze → Propose → Challenge → Plan → Implement → Capture
- Always preview changes before implementing
- Updates documentation (docs/) whenever the system changes
- Verifies cross-file consistency after every change

## Role Boundaries

Every role stays in its lane — no exceptions:

- Backend Engineer cannot write frontend code
- Frontend Engineer cannot write backend code
- Code Reviewer cannot modify source code
- PM cannot write code or execute phases
- Architect cannot write feature code
- Only Owner can modify `.orchestra/roles/` and `.orchestra/README.md`

If a role encounters work outside its scope, it documents the concern in `context.md` and continues.

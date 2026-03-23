# Orchestra

A milestone-based orchestration system for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). One terminal, one PM, one worker agent — features built end-to-end without manual role switching.

## The Problem

Building a feature with Claude Code typically looks like this:

```
You: "Build user authentication"
You: *opens terminal* "#architect — design the system"
You: *reads RFC, approves*
You: *opens terminal* "#backend — implement the API"
You: *opens terminal* "#reviewer — review the code"
You: *opens terminal* "#pm — close the feature"
```

You become the orchestrator. You carry context between sessions, sequence work in the right order, and manage the pipeline manually. This is tedious and error-prone.

## The Solution

Orchestra turns Claude Code's PM role into an autonomous orchestrator. You describe what you want, PM handles the rest:

```
You: "#pm"
You: "I want user authentication with JWT"
PM:  creates milestone, grooms phases, dispatches worker agent
     #architect writes RFC → you approve
     #backend implements phase by phase → each phase = one commit
     #frontend builds the UI → each phase = one commit
     #reviewer reviews unpushed commits
     you approve → PM pushes to origin
     milestone closed.
```

One conversation. One terminal. PM drives everything.

## How It Works

```
You ←→ PM (always-on orchestrator)
        │
        ├── Creates milestone with groomed phases
        ├── Spawns one worker agent (all roles loaded)
        │
        ├── SendMessage("#architect: write RFC") → awaits
        ├── SendMessage("#backend: phase-1")     → awaits → commit
        ├── SendMessage("#backend: phase-2")     → awaits → commit
        ├── SendMessage("#frontend: phase-3")    → awaits → commit
        ├── SendMessage("#reviewer: review")     → awaits
        │
        ├── You approve → PM pushes to origin
        └── Milestone closed
```

### Key Concepts

**Milestones** — Each feature is a milestone. Everything lives in one directory:

```
.orchestra/milestones/M1-user-auth/
├── prd.md              PM writes (what + why)
├── milestone.md        Status, acceptance criteria
├── grooming.md         Discussion notes, decisions
├── rfc.md              Architect writes (how)
├── architecture.md     Architect writes (system design)
├── design.md           Frontend engineer writes (UI/UX)
├── adrs/               Architecture Decision Records
└── phases/
    ├── phase-1.md      backend: DB schema → commit
    ├── phase-2.md      backend: API endpoints → commit
    └── phase-3.md      frontend: login UI → commit
```

**Single Worker Session** — PM creates one agent with all roles loaded. No warmup on role switches. Architect decisions are in context when backend implements. Backend code is in context when reviewer reviews.

**Await-Based** — PM dispatches via `SendMessage`, blocks until the worker returns. No polling, no signal files. Results flow directly through the return value.

**Git-Native Review** — Reviewer doesn't need task files. Reviews unpushed commits on the current branch via `git diff origin/branch...HEAD`.

### Roles

| Role | What it does |
|------|-------------|
| **Product Manager** | Orchestrates everything. Creates milestones, dispatches worker, drives pipeline. |
| **Architect** | Designs technical solutions. Writes RFCs, ADRs. |
| **Backend Engineer** | Implements backend code + tests. One commit per phase. |
| **Frontend Engineer** | Designs + implements UI. One commit per phase. |
| **Code Reviewer** | Reviews unpushed commits. Returns approved or changes-requested. |
| **Owner** | Maintains Orchestra system files (roles, rules, structure). |

### Pipeline

```
PM creates milestone
  → Architect writes RFC
  → [You approve RFC]
  → Backend phases (sequential, each → commit)
  → Frontend phases (sequential, each → commit)
  → Reviewer reviews unpushed commits
  → Fix cycle if needed (one round, no re-review)
  → [You approve push]
  → PM pushes to origin, closes milestone
```

### Approval Gates

You only need to approve twice:

1. **RFC → Implementation** — after architect writes the technical design
2. **Push to origin** — after reviewer approves

Everything else is automatic.

## Install

```bash
npx @sulhadin/orchestrator
```

This will:

- Copy `.orchestra/` directory to your project root
- Create `CLAUDE.md` if it doesn't exist, or append Orchestra instructions to your existing one

### What Gets Installed

```
your-project/
├── .orchestra/
│   ├── README.md              Orchestration rules
│   ├── agents/worker.md       Worker agent prompt
│   ├── roles/                 6 role definitions
│   ├── milestones/            Feature work (empty)

└── CLAUDE.md                  Orchestra instructions for Claude
```

## Usage

Open Claude Code in your project and say `#pm`:

```
You: #pm
PM:  "No active milestones. Ready for instructions."

You: "I want to add a health check endpoint"
PM:  *discusses scope, challenges assumptions, proposes approach*

You: "Let's build it"
PM:  *creates milestone, grooms phases, dispatches worker*
     *reports progress after each phase*
     *asks for approval at gates*
     *pushes and closes milestone*
```

### Commands

| Command | Description |
|---------|------------|
| `#pm` | Activate Product Manager |
| `#backend` | Activate Backend Engineer (manual mode) |
| `#frontend` | Activate Frontend Engineer (manual mode) |
| `#reviewer` | Activate Code Reviewer (manual mode) |
| `#architect` | Activate Architect (manual mode) |
| `#owner` | Activate Owner (system maintenance) |
| `status` | Pipeline status report (PM only) |
| `orc help` | Show all commands |

### Manual Mode

You can still use roles directly without PM orchestration:

```
You: #backend
BE:  *checks milestones for pending backend phases*
     *starts working*
```

Autonomous and manual modes work side by side.

## Engineering Standards

Orchestra enforces these through role definitions and code review:

- **SOLID, KISS, YAGNI, DRY** — enforced by reviewer
- **Code without tests is not done** — backend and frontend engineers write tests as part of implementation
- **Conventional commits** — one commit per phase (`feat`, `fix`, `refactor`, etc.)
- **No `any` types, no unused code, no workarounds** — zero-tolerance rules
- **Design before code** — frontend engineer writes design specs before implementing
- **Grooming before implementation** — detailed phase planning before any code is written
- **Current library versions** — always verify with docs, never rely on memory

## Configuration

Customize roles by editing files in `.orchestra/roles/`. Each role file defines:

- Identity and boundaries
- File ownership (what it can/cannot write)
- Workflow steps
- Engineering principles
- Review checklists (for code-reviewer)

The worker agent prompt (`.orchestra/agents/worker.md`) controls how the subagent behaves when PM dispatches it.

## License

MIT

# Features

## Config-Driven Pipeline

`.orchestra/config.yml` controls everything:

```yaml
pipeline:
  models:
    trivial: haiku          # version bumps, env vars
    quick: sonnet           # single-file fixes, simple CRUD
    standard: sonnet        # typical features
    complex: opus           # new subsystems, architectural changes
  rfc_approval: skip        # required | optional | skip
  review: required          # required | optional | skip
  parallel: disabled        # enabled | disabled
  default_pipeline: full    # quick | standard | full
  default_complexity: standard  # trivial | quick | standard | complex
  max_rfc_rounds: 3

thresholds:
  milestone_lock_timeout: 120  # minutes
  re_review_lines: 30
  phase_time_limit: 15      # minutes
  phase_tool_limit: 40
  stuck_retry_limit: 3

verification:
  typecheck: "npx tsc --noEmit"   # customize per stack
  test: "npm test"
  lint: "npm run lint"
```

Change `verification` commands for Go (`go test ./...`), Python (`pytest`), or any stack.

## Complexity Levels & Model Tiering

PM sets `complexity` per phase (or milestone-level `Complexity` for pipeline). Determines which LLM model runs the sub-agent and which pipeline steps apply:

| Level | Model | Pipeline | When |
|-------|-------|----------|------|
| `trivial` | Haiku | Phases → Commit → Push | Version bumps, env vars, config changes |
| `quick` | Sonnet | Phases → Commit → Push (skip review) | Single-file fixes, simple CRUD |
| `standard` | Sonnet | Phases → Review → Push | Typical features (default) |
| `complex` | Opus | Architect → Phases → Review → Push | New subsystems, architectural changes |

Defaults configurable: `pipeline.default_pipeline` and `pipeline.default_complexity` in config.yml.

## Verification Gate

Sub-agents run verification commands from config.yml before reporting back. All must pass. Max retries from config. Conductor NEVER commits if verification fails.

## Acceptance Check

After verification passes, sub-agent checks: "Does this satisfy every acceptance criterion in the phase file?" Catches "code works but wrong thing built."

## Phase Limits

From config.yml thresholds:
- **Time limit** — pause if exceeded
- **Scope guard** — don't work outside phase criteria
- **Tool call guard** — too many calls without commit = likely over-engineering

## Stuck Detection

Detects: same error N times, circular fixes, verification loops, no progress. Recovery: try different approach once, then escalate to user. Auto mode: skip to next phase.

## Skills

Domain checklists in `.claude/skills/*.orchestra.md`. PM assigns via phase frontmatter `skills: [auth-setup, crud-api]`. Conductor loads them before implementation.

14 built-in skills: auth-setup, crud-api, deployment, accessibility, best-practices, code-optimizer, core-web-vitals, debug, frontend-design, react-best-practices, review, testing, web-quality-audit, fullstack-infrastructure.

## Blueprints

Pre-built milestone templates. `/orchestra blueprint saas-starter` creates 5 milestones instantly. `/orchestra blueprint add` saves current work as template.

## Sub-Agent Delegation

Conductor never implements code directly. Each phase runs in an isolated sub-agent:

1. Conductor pre-reads role, skills, phase content and inlines into sub-agent prompt
2. Sub-agent implements, verifies, checks acceptance, reports back
3. Conductor commits, updates status, passes summary to next phase

Error logs stay in sub-agent's ephemeral context — conductor stays clean across phases.

## Parallel Execution

If `config.yml parallel: enabled`, phases with `depends_on: []` run simultaneously via `run_in_background` + worktree isolation. Default is sequential.

## Codebase Map

For milestones spanning 3+ directories or 20+ files, conductor launches a haiku scout sub-agent to generate a file map. Sub-agents use this map to target files directly instead of exploring.

## Hotfix Pipeline

`/orchestra hotfix {desc}` — sub-agent implements + verifies, conductor commits + pushes. No RFC, no review, no gates.

## Learning System

**knowledge.md** — append-only, Active (last 5 milestones) + Archive. Conductor reads before milestones, PM reads before grooming.

**Retrospective** — 5-line summary after each milestone: longest phase, retries, stuck, review findings, missing skill.

**Cost tracking** — phase duration + verification retries in context.md. PM sees in `/orchestra status`.

## Rejection Flow

RFC rejected → architect revises (max `pipeline.max_rfc_rounds`). Push is automatic after review passes.

## Milestone Lock

Conductor claims milestone with `Locked-By: {timestamp}`. Other conductors skip it. Expires after `thresholds.milestone_lock_timeout` minutes (default 120).

## Conditional Re-review

Fix < config `re_review_lines` → proceed. Fix >= threshold → abbreviated re-review.

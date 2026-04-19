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
  milestone_isolation: inline  # inline | agent
  default_pipeline: full    # quick | standard | full
  default_complexity: standard  # trivial | quick | standard | complex

thresholds:
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
| `complex` | Opus | Design → Phases → Review → Push | New subsystems, architectural changes |

Defaults configurable: `pipeline.default_pipeline` and `pipeline.default_complexity` in config.yml.

## Verification Gate

Sub-agents run verification commands from config.yml before reporting back. All must pass. Max retries from config. Lead NEVER commits if verification fails.

## Acceptance Check

After verification passes, sub-agent checks: "Does this satisfy every acceptance criterion in the phase file?" Catches "code works but wrong thing built."

## Phase Limits

- **Scope guard** — don't work outside phase acceptance criteria

## Stuck Detection

Detects: same error N times, circular fixes, verification loops, no progress. Recovery: try different approach once, then escalate to user. Auto mode: skip to next phase.

## Skills

Domain checklists in `.claude/skills/*/SKILL.md`. PM assigns via phase frontmatter `skills: [auth-setup, crud-api]`. Lead loads them before implementation.

14 built-in skills: auth-setup, crud-api, deployment, accessibility, best-practices, code-optimizer, core-web-vitals, debug, frontend-design, react-best-practices, review, testing, web-quality-audit, fullstack-infrastructure.

## Blueprints

Pre-built milestone templates. `/orchestra blueprint saas-starter` creates 5 milestones instantly. `/orchestra blueprint add` saves current work as template.

## Sub-Agent Delegation

Lead never implements code directly. Each phase runs in an isolated sub-agent with a dynamically generated identity (e.g., "senior backend engineer") based on phase scope:

1. Lead reads skills and phase content, derives the right sub-agent identity, and inlines into sub-agent prompt
2. Sub-agent implements, verifies, checks acceptance, reports back
3. Lead commits, updates status, passes summary to next phase

Error logs stay in sub-agent's ephemeral context — lead stays clean across phases.

## Milestone Isolation

Config `pipeline.milestone_isolation` controls how the lead manages context across milestones:

| Mode | Behavior | Best for |
|------|----------|----------|
| `inline` (default) | Lead runs milestone directly, stops after completion. User compacts manually. | Manual sessions |
| `agent` | Each milestone runs in its own sub-agent. Context freed automatically. | `--auto` batch runs |

In `agent` mode, delegation is two-tier: lead → milestone agent → phase agents. The lead stays lean (~1-2k tokens per milestone), enabling 20+ milestones in a single session.

In `inline` mode, lead stops after each milestone. User runs `/compact` then `/orchestra start` to continue — full control over context management.

## Parallel Execution

If `config.yml parallel: enabled`, phases with `depends_on: []` run simultaneously via `run_in_background` + worktree isolation. Default is sequential.

## Codebase Map

For milestones spanning 3+ directories or 20+ files, lead launches a haiku scout sub-agent to generate a file map. Sub-agents use this map to target files directly instead of exploring.

## Hotfix Pipeline

`/orchestra hotfix {desc}` — sub-agent implements + verifies, lead commits + pushes. No RFC, no review, no gates.

## Metrics

Phase duration + verification retries tracked in context.md `## Metrics` section. PM sees in `/orchestra status`.

## Verifier

`/orchestra verifier [numbers]` — PM compares what was requested vs what was built. Reads PRD, RFC, and acceptance criteria, then scans git commits for each milestone. Reports gaps as met/partial/missed/deviated with severity. Proposes fix milestones for critical gaps.

## Rewind

`/orchestra rewind [numbers]` — PM reviews execution history of completed milestones. Surfaces key decisions made during implementation, phase metrics, review comments, scope changes, and unresolved items. Cross-milestone summary highlights recurring patterns and skill gaps.

## Rejection Flow

RFC rejected → lead revises (max 3 rounds). Push is automatic after review passes.

## Milestone Lock

Lead claims milestone with `Locked-By: {timestamp}`. Other leads skip it. Expires after 60 minutes.

## Conditional Re-review

Fix < 50 lines → proceed. Fix >= 50 lines → abbreviated re-review.

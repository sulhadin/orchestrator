# Features

## Config-Driven Pipeline

`.orchestra/config.yml` controls everything:

```yaml
pipeline:
  rfc_approval: required    # required | optional | skip
  push_approval: required   # required | auto
  review: required          # required | optional | skip
  parallel: disabled        # enabled | disabled

thresholds:
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

## Complexity Levels

PM sets per milestone. Determines which pipeline steps run:

| Level | Pipeline | When |
|-------|----------|------|
| `quick` | Engineer → Commit → Push | Trivial changes |
| `standard` | Engineer → Review → Push | Typical features |
| `full` | Architect → Engineer → Review → Push | Complex work (default) |

## Verification Gate

Before every commit, conductor runs commands from config.yml. All must pass. Max retries from config. NEVER commits if verification fails.

## Acceptance Check

After verification passes, conductor checks: "Does this satisfy every acceptance criterion in the phase file?" Catches "code works but wrong thing built."

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

## Parallel Execution

If `config.yml parallel: enabled`, phases with `depends_on: []` run simultaneously via subagent worktree isolation. Default is sequential.

## Hotfix Pipeline

`/orchestra hotfix {desc}` — implement, verify, commit, push. No RFC, no review, no gates.

## Learning System

**knowledge.md** — append-only, Active (last 5 milestones) + Archive. Conductor reads before milestones, PM reads before grooming.

**Retrospective** — 5-line summary after each milestone: longest phase, retries, stuck, review findings, missing skill.

**Cost tracking** — phase duration + verification retries in context.md. PM sees in `/orchestra status`.

## Rejection Flow

RFC rejected → architect revises (max 3 rounds). Push rejected → fix phase created.

## Milestone Lock

Conductor claims milestone with `Locked-By: {timestamp}`. Other conductors skip it. Expires after 2 hours.

## Conditional Re-review

Fix < config `re_review_lines` → proceed. Fix >= threshold → abbreviated re-review.

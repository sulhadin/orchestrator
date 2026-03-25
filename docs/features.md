# Features

## Fast Track Mode

PM sets a complexity level per milestone that determines the pipeline:

| Level | Pipeline | When to use |
|-------|----------|-------------|
| `quick` | Engineer → Commit → Push | Trivial: config, copy, single-file fix |
| `standard` | Engineer → Review → Push | Typical features, clear requirements |
| `full` | Architect → Engineer → Review → Push | Complex: new subsystems, architectural changes |

Default is `full` if not specified. PM sets this in `milestone.md`:

```markdown
| Complexity | full |
```

Quick mode still requires verification gate (tests must pass). If verification fails on a quick milestone, it auto-escalates to standard.

## Verification Gate

Before every commit, worker MUST pass all checks:

1. `npx tsc --noEmit` — zero type errors
2. `npm test` — all tests pass
3. `npm run lint` — zero lint errors

If any check fails: fix and re-run all from step 1. Max 3 attempts. After 3 failures, phase is marked `failed` and user is notified.

**Code cannot be committed if verification fails.** This is a hard gate, not a suggestion.

## Selective Context Loading

Worker only loads the role file needed for the current phase — not all 6 role files at startup. This saves ~40-60% of context window, allowing more room for actual code.

## Research Phase

Before writing code, worker reads existing code in the directories the phase will modify, checks dependency versions, and identifies potential conflicts. This prevents "wrong assumption → rewrite" cycles.

## Adaptive Discovery

When architect bootstraps a project, it first scans the codebase for existing answers (package.json, configs, project structure). Questions with clear answers are skipped. For new (empty) projects, all questions are asked.

## Stuck Detection + Recovery

Worker detects when it's stuck:
- Same error 3 times
- Circular fix (A→B→A→B)
- Verification loop (3 fails on same check)
- No meaningful progress after 5+ tool calls

Recovery: stop, log the stuck state, try one different approach. If that also fails, escalate to user with options (try alternative / skip / stop).

In `--auto` mode: tries different approach, then moves to next phase if still stuck.

## Learning System

### knowledge.md
Append-only project knowledge log. Worker reads it at milestone start, writes to it at milestone end. PM reads it before grooming new milestones.

### Milestone Retrospective
After each milestone, worker appends a 5-line summary:
- Longest phase and why
- Verification retries count
- Stuck: yes/no and root cause
- Review findings count and top issue
- Missing skill that would have helped

This data feeds future grooming — PM knows which phase types are expensive.

### Cost Tracking
Each phase records duration and verification retries in context.md. PM sees this in `#status`.

## Skill System

Domain-specific checklists in `.orchestra/skills/`. PM assigns skills to phases via frontmatter:

```yaml
skills: [auth-setup, crud-api]
```

Worker loads the skill files and follows their checklists alongside role engineering standards.

Available skills: `auth-setup`, `crud-api`, `deployment`. Owner creates new skills.

See [Skills](skills.md) for details.

## Blueprint System

Pre-built milestone templates for common project types. PM uses them to skip manual grooming:

```
blueprint saas-starter     → 5 milestones, full SaaS MVP
blueprint api-only         → 4 milestones, backend API service
blueprint component-crud-resource → 1 parameterized CRUD milestone
```

`blueprint add` saves current work as a new reusable template.

See [Blueprints](blueprints.md) for details.

## Parallel Phase Execution

If PM sets `depends_on` in phase frontmatter, independent phases can run in parallel:

```yaml
depends_on: [phase-1]    # waits for phase-1
depends_on: []            # no dependency, can run in parallel
```

Worker launches parallel phases as subagents with worktree isolation. Each gets its own git worktree — no conflicts. Default (no `depends_on`) is sequential execution.

## Hotfix Pipeline

`#hotfix {description}` — ultra-fast fix for production bugs:

1. Auto-creates milestone + phase
2. Implements the fix
3. Runs verification gate
4. Commits and pushes immediately

No RFC, no review, no approval gates. Only verification gate is mandatory.

## Rejection Flow

If you say "no" at an approval gate:

- **RFC rejected:** Architect revises based on your feedback (max 3 rounds)
- **Push rejected:** Worker creates a fix phase, implements, re-submits

The system never stalls on rejection — it loops back with feedback.

## Milestone Lock

Worker claims a milestone by writing `Locked-By: {timestamp}` before execution. Other workers skip locked milestones. Lock expires after 2 hours (stale protection). This prevents two `#start` terminals from executing the same milestone.

## Conditional Re-review

After a fix cycle:
- Fix < 30 lines → proceed (no re-review)
- Fix >= 30 lines → abbreviated re-review (only the fix commit)

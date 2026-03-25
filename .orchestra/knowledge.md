# Project Knowledge

Append-only log of decisions, lessons, and patterns discovered during development.

**Two sections:**
- **Active Knowledge** — last 5 milestones. Worker reads this before every milestone. PM reads before grooming.
- **Archive** — older milestones, compacted to 1-2 lines each. PM reads during grooming for broader context. Worker skips.

**Rules:**
- NEVER edit or delete previous entries — append only
- To correct a previous entry, add a new entry: "Correction: {old} → {new}, because {reason}"
- Keep entries concise — 3-5 bullets per section, skip empty sections
- When Active Knowledge exceeds 5 milestones, move the oldest to Archive (compact to 1-2 lines)

**Entry format — always append to Active Knowledge:**

```markdown
## {date} — {milestone ID}: {milestone title}

### Decisions
- {decision}: {reasoning}

### Lessons Learned
- {what happened} → {root cause} → {what to do differently}

### Patterns
- {pattern name}: {where it's used, how it works}
```

---

# Archive

Compacted entries from older milestones. PM reads during grooming. Worker skips.

<!-- Oldest entries go here as 1-2 line summaries -->

---

# Active Knowledge

Last 5 milestones. Worker reads before every milestone start. PM reads before grooming.

<!-- New entries go here — move oldest to Archive when count exceeds 5 -->

## 2026-03-25 — Orchestra v2.0: 7 Feature Enhancement

### Decisions
- Fast Track Mode (quick/standard/full): Pipeline rigidity was the biggest speed bottleneck. PM now sets complexity per milestone.
- Verification Gate before every commit: "Code without tests is not done" was a rule but had no enforcement. Now it's a hard gate with max 3 retries.
- Selective Context Loading: Reading all 6 role files at startup wasted ~40-60% of context window. Now only the active role file is loaded per phase.
- Research Phase before coding: an alternative system's best practice — research existing code before writing prevents "wrong assumption → rewrite" cycles.
- Adaptive Discovery: Architect's 8-round mandatory questions were excessive for existing projects. Now scans codebase first, only asks what's unknown.
- Stuck Detection + Recovery: Worker had no protection against infinite retry loops. Now detects same-error-3x, circular fixes, and escalates.
- Learning System (knowledge.md): No cross-milestone knowledge persistence existed. Now decisions, lessons, and patterns accumulate.

### Lessons Learned
- an alternative system comparison revealed Orchestra's strengths (simplicity, roles) and weaknesses (no verification, no learning, rigid pipeline) clearly
- First proposal was biased toward "what an alternative system has that we don't" → revised to "what actually blocks shipping speed"
- User challenge ("tekrar düşünmek ister misin?") led to dropping 3 low-impact features and adding 3 high-impact ones
- Bottom-up file editing (modify bottom lines first) prevents line number shifts when multiple features touch the same file

### Patterns
- Evolution Methodology: 6-phase process (Analyze → Propose → Challenge → Plan → Implement → Capture) codified in owner.md
- Impact Assessment Table: Rate each proposed change on Speed/Quality/Error/Cost axes before prioritizing
- Analyzer Agents: Use orchestra-analyzer and codebase-deep-analyzer for deep system comparison before making architectural decisions

## 2026-03-25 — Orchestra v2.0 Tier 2: 4 Additional Features

### Decisions
- Skill System (markdown-only): Lightweight `.orchestra/skills/` with domain checklists (auth, CRUD, deployment). No registry, no keyword matching — PM manually assigns via `skills:` frontmatter in phase files. Preserves zero-infrastructure philosophy.
- Cost Awareness: Track duration + verification retries per phase in context.md Cost Tracking table. PM sees this in #status. No token counting (unreliable from prompt), focus on observable metrics.
- Re-review Threshold: Fix < 30 lines → no re-review. Fix >= 30 lines → abbreviated re-review (only the fix commit). Balances quality vs speed.
- Rejection Flow: RFC rejected → architect revises (max 3 rounds). Push rejected → create fix phase. System no longer stalls on "no".

### Lessons Learned
- Skills should be manual assignment (PM decides) not automatic (keyword matching) — an alternative system's keyword matching is crude and error-prone
- Cost tracking without actual token counts is still valuable — duration and retry count reveal expensive phases
- Re-review threshold of 30 lines is a heuristic, may need calibration per project

## 2026-03-25 — Orchestra v2.0 Tier 3: 4 Strategic Features

### Decisions
- Parallel Phase Execution: Uses `depends_on` in phase frontmatter + Claude Code subagent with worktree isolation. Backward compatible — no `depends_on` = sequential.
- Hotfix Pipeline: `#hotfix {desc}` — zero-gate except verification. Auto-creates milestone, implements, pushes. For production emergencies only.
- Blueprint System: `.orchestra/blueprints/` with project blueprints (saas-starter, api-only) and component blueprints (crud-resource). PM customizes before creating milestones.
- Milestone Retrospective: Exactly 5 lines per milestone — longest phase, retries, stuck, review findings, missing skill. Appended to knowledge.md automatically.

### Lessons Learned
- User rejected auto-grooming (PM has more context, should own grooming) — respect role boundaries even when optimizing
- Parallel execution must be opt-in (depends_on) not default — breaking existing sequential behavior would be dangerous
- Blueprint component pattern (parameterized single-milestone templates) is more reusable than full-project blueprints
- Retrospective must be fixed-format (5 lines) to prevent data clutter — user raised this concern explicitly

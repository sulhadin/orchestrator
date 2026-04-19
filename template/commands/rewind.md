Review milestone execution history for actionable insights. PM role only.

**Usage:**
- `/orchestra rewind` — rewind all `done` milestones
- `/orchestra rewind 1,2,3` — rewind only specified milestone numbers

1. Read `.orchestra/roles/product-manager.md` to activate PM.
2. Scan `.orchestra/milestones/` — collect milestones to review:
   - No arguments: all milestones with `status: done`
   - With numbers: only milestones matching those numbers (e.g., `1` matches `M1-*`)
3. For each milestone, read execution artifacts:
   - `context.md` — structured sections:
     - `## Decisions` — key choices made during implementation
     - `## Metrics` — phase duration and verification retries
     - `## Phases` — status, commits, errors per phase
   - `grooming.md` — original scope vs what actually happened
   - Review verdict and comments (from context.md or git log)
4. Extract and present — focus on **what the user needs to know**, not execution mechanics:

```
## Rewind: M1-user-auth

### Key Decisions Made During Execution
- phase-1: Used Stripe SDK v4 instead of raw API (architect RFC recommendation)
- phase-2: Split webhook handler into separate file for testability
- phase-3: Chose CSS modules over Tailwind (frontend preference)

### Performance
- Total phases: 5 | Completed: 5 | Failed: 0
- Longest phase: phase-3 (~12min) — complex UI with form validation
- Verification retries: 3 total (phase-2: 2, phase-4: 1)
- Stuck: No

### Review Findings
- Verdict: approved-with-comments
- Comments:
  - "Consider adding index on user_email for login query" (non-blocking)
  - "Error messages expose internal details" (non-blocking, logged)

### Scope Changes
- Original grooming planned 4 phases, executed 5 (phase-3 was split during implementation)
- phase-2 scope expanded: webhook handler was not in original PRD, added during RFC

### Unresolved Items
- 🔧 DB index on user_email — reviewer flagged, not addressed
- 🔧 Error message sanitization — reviewer flagged, not addressed
- 🔧 phase-2 workaround: hardcoded timeout — flagged as tech debt in Decisions

### What We Learned
- 📝 Webhook handler pattern — reusable for future integrations
- ⏱️ Form validation phases consistently slow — consider a form-validation skill
- 💡 Splitting phase-3 mid-execution worked well — complex UI benefits from smaller phases
```

5. After all milestones, present a cross-milestone summary:
   - **Unresolved items** — review comments and flagged workarounds never addressed, across all milestones
   - **Recurring patterns** — same review comments, same slow phase types, same failure modes
   - **Skill gaps** — missing skills that would have helped
   - **Strategic suggestions** — new skills to create, process improvements, items to fix in upcoming work

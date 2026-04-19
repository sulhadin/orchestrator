Verify that implemented milestones match their requirements. PM role only.

**Usage:**
- `/orchestra verifier` — verify all `done` milestones
- `/orchestra verifier 1,2,3` — verify only specified milestone numbers

1. Read `.orchestra/roles/product-manager.md` to activate PM.
2. Scan `.orchestra/milestones/` — collect milestones to verify:
   - No arguments: all milestones with `status: done`
   - With numbers: only milestones matching those numbers (e.g., `1` matches `M1-*`)
3. For each milestone, read:
   - `prd.md` — product requirements and acceptance criteria
   - `rfc.md` — technical design decisions (if exists)
   - `milestone.md` — summary and acceptance criteria
   - `grooming.md` — scope decisions and phase breakdown
   - All `phases/*.md` — phase acceptance criteria
4. For each milestone, read execution context:
   - `context.md` — `## Decisions` section (why specific approaches were chosen)
   - `context.md` — `## Phases` section (which phases completed, which failed)
5. For each milestone, read the actual implementation:
   - Run `git log --oneline` filtered to commits from that milestone's phases
   - Run `git diff` for those commits to see what changed
   - Read the current state of modified files — diff shows changes, but current code shows completeness
6. Compare requirements vs implementation. For each requirement/acceptance criterion:
   - **met** — implementation satisfies the requirement
   - **partial** — partially implemented, missing aspects noted
   - **missed** — not implemented at all
   - **deviated** — implemented differently than specified
6. Report:

```
## Verification: M1-user-auth

### Requirements Coverage
- ✅ met: JWT authentication endpoint (phase-1, commit abc123)
- ⚠️ partial: Rate limiting — implemented but no Redis backing (phase-2)
- ❌ missed: Password reset flow — not in any commit
- 🔀 deviated: Token refresh — RFC said rotating tokens, implemented static expiry

### Summary
4 requirements: 1 met, 1 partial, 1 missed, 1 deviated

### Severity
- 🔴 critical: Password reset flow missing (core auth feature)
- 🟡 moderate: Rate limiting without Redis (works but won't scale)
- 🟡 moderate: Token refresh deviation (security concern)
```

8. After reporting all milestones, if there are critical or moderate gaps:
   - List gaps grouped by severity
   - Suggest: "Use `/orchestra pm` to plan fix milestones for these gaps."
   - Do NOT create milestones directly — PM decides scope and priority

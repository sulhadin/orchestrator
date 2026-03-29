Ultra-fast fix pipeline for production bugs.

Usage: `/orchestra hotfix {description}`

The conductor will:
1. Auto-create a hotfix milestone + single phase
2. Implement the fix (minimal, focused change)
3. Run verification gate (test + lint MUST pass)
4. Commit with `fix({scope}): {description}`
5. Push immediately — no RFC, no review, no approval gates
6. Log to knowledge.md

If verification fails after 3 attempts → STOP, report to user, do NOT push.

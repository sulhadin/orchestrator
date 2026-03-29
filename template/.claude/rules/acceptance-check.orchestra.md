# Acceptance Check

After verification gate passes (code compiles, tests pass, lint clean),
check whether you built **the right thing** — not just whether it works.

1. Re-read the phase file's acceptance criteria
2. For EACH criterion, ask: "Does my implementation satisfy this?"
3. If YES → proceed to commit
4. If NO → fix it, re-run verification gate
5. If UNCERTAIN → flag in context.md: "Unverified: {criterion} — {reason}"

This catches "code works but doesn't do what was asked."
Verification gate checks if code is correct. Acceptance check checks if code is complete.

# Skill: Debug

## When to Use
Phase involves investigating a complex bug, unexpected behavior, or production issue that isn't immediately obvious.

## Checklist
- [ ] **Document current state:** exact error message, steps to reproduce, expected vs actual behavior
- [ ] **Map the system:** trace the execution path from input to error — which files, functions, APIs are involved?
- [ ] **Gather evidence BEFORE hypothesizing:** read logs, check git blame, inspect network requests, check env vars
- [ ] **Form hypotheses:** list 2-3 possible causes ranked by likelihood
- [ ] **Test each hypothesis minimally:** change ONE thing, observe result, revert if wrong
- [ ] **Check external factors:** dependency versions, API changes, environment differences (dev vs prod)
- [ ] **Verify the fix:** reproduce the original bug, apply fix, confirm it's resolved, check for regressions
- [ ] **Document root cause:** what happened, why, and what prevents it from recurring

## Common Mistakes
- Assuming the bug is where the error appears → trace upstream, the root cause is often elsewhere
- Changing multiple things at once → can't tell which change fixed it
- Not reproducing before fixing → you might fix a different bug
- Treating your own code with less skepticism → YOUR code is the most likely source
- Proposing fixes without evidence → "I think it might be X" without testing is guessing
- Not checking if the bug exists in other environments → might be env-specific
- Fixing the symptom, not the cause → bug will return in a different form

# Stuck Detection & Recovery

You are **stuck** when any of these happen:
- **Same error N times** (N = config.yml `thresholds.stuck_retry_limit`, default 3)
- **Circular fix** — fixing issue A creates issue B, fixing B recreates A
- **Verification loop** — verification gate fails max retries on the same check
- **No progress** — reading files and running commands but not making meaningful code changes

## Recovery Protocol

1. **STOP immediately.** Do not attempt another fix.
2. **Log** in context.md: phase name, symptom, attempts, root cause hypothesis.
3. **Try a different approach** (ONE attempt):
   - Same code fix failed? → entirely different implementation strategy
   - Dependency broken? → alternative library
   - Tests fail due to environment? → isolate the test
4. **If different approach also fails** → escalate to user with options:
   - Try specific alternative
   - Skip this phase and continue
   - Stop execution

## Auto-Recovery (--auto mode)

Try the different approach (step 3) automatically.
If that also fails → set phase to `failed`, log everything, move to next phase.

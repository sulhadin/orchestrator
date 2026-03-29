# Verification Gate

Before EVERY commit, you MUST pass ALL verification checks. No exceptions.

Read verification commands from `.orchestra/config.yml`:

```yaml
verification:
  typecheck: "npx tsc --noEmit"  # or go vet, etc.
  test: "npm test"                # or go test, pytest, etc.
  lint: "npm run lint"            # or golangci-lint, etc.
```

**Process:**
1. Run typecheck command → must exit 0
2. Run test command → must exit 0
3. Run lint command → must exit 0
4. Run in order. Stop at first failure.
5. Fix the issue, re-run ALL from step 1.
6. Max retries from config.yml `thresholds.stuck_retry_limit` (default 3).
7. After max retries → set phase `failed`, report to user.

**NEVER commit if verification fails.** This is a hard gate.
If a command doesn't exist in the project, skip it but log the skip.

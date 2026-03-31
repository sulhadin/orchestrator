# Verification Gate

Before EVERY commit, pass ALL verification checks from `.orchestra/config.yml` verification section.

**Process:** Run typecheck → test → lint (in order, stop at first failure).
Fix issue → re-run ALL from start. Max retries: config.yml `thresholds.stuck_retry_limit` (default 3).
After max retries → set phase `failed`, report to user.

**NEVER commit if verification fails.** If a command doesn't exist in the project, skip it but log the skip.

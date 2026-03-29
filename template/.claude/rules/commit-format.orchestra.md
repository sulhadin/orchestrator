# Commit Format

All commits MUST use conventional commit format.

**Format:** `<type>(<scope>): <description>`

**Types:** feat, fix, refactor, perf, test, chore, docs, style, ci

**Rules:**
- Each phase produces exactly ONE commit
- Subject line max 72 characters
- Body explains WHY, not WHAT
- Breaking changes add `!` after type: `feat!(scope): description`
- No `Co-Authored-By` trailers — never add co-author lines

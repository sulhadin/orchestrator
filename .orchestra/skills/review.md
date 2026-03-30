# Skill: Review

## When to Use
Phase involves code review — either as reviewer role or self-review before submitting.

## Checklist
- [ ] **Read full file for context** — don't review diffs in isolation, understand surrounding code
- [ ] **Security:** SQL injection, XSS, auth bypass, secrets in code, path traversal, CSRF
- [ ] **Performance:** N+1 queries, missing indexes, unbounded loops, memory leaks, blocking I/O
- [ ] **Bugs:** Off-by-one errors, null/undefined handling, race conditions, unhandled promise rejections
- [ ] **Error handling:** All external calls wrapped in try/catch, user-facing errors are helpful
- [ ] **Test coverage gaps:** Are edge cases tested? Error paths? Boundary conditions?
- [ ] **Type safety:** No `any` types without justification, proper null checks, discriminated unions
- [ ] **Dead code:** Unused imports, unreachable branches, commented-out code, orphaned files

## Severity Levels
- **CRITICAL** — Security vulnerability, data loss risk, crash in production
- **HIGH** — Bug that will manifest in normal usage, missing error handling
- **MEDIUM** — Performance issue, code smell, missing edge case test
- **LOW** — Style, naming, minor refactor opportunity

## Common Mistakes
- Reviewing diffs without reading the full file → miss context-dependent bugs
- Nitpicking style instead of finding real issues → wastes everyone's time
- No severity classification → reviewer and author can't prioritize
- Vague findings ("this could be better") → always specify what and why
- Not checking test coverage → reviewed code may have zero tests

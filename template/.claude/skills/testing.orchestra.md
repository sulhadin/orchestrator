# Skill: Testing

## When to Use
Phase involves writing tests or improving test coverage for existing code.

## Checklist
- [ ] **Detect framework:** check package.json for vitest, jest, mocha, pytest — use project's framework
- [ ] **Read existing tests:** match the project's test style, naming convention, file organization
- [ ] **Happy path tests:** normal usage works as expected
- [ ] **Edge cases:** empty input, null/undefined, boundary values (0, -1, MAX_INT), empty arrays
- [ ] **Error handling:** invalid input returns proper error, external service failure is handled
- [ ] **Async behavior:** promises resolve/reject correctly, timeouts work, race conditions covered
- [ ] **Mock external dependencies:** don't hit real APIs/databases in unit tests — mock at the boundary
- [ ] **One assertion per concept:** each test verifies one behavior, test name describes the scenario
- [ ] **Run tests after writing:** verify they pass, then break the code to verify they fail

## Common Mistakes
- Imposing new test style on existing project → match what's already there
- Hitting real APIs/databases in tests → flaky, slow, environment-dependent
- Testing implementation details → test behavior, not internal method calls
- Writing tests that always pass → if removing the code doesn't fail the test, the test is useless
- Too many assertions in one test → can't tell which behavior broke
- Not testing error paths → only testing happy path misses most production bugs
- Using `any` in test types → defeats the purpose of type-checked tests

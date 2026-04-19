# Skill: CRUD API

## When to Use
Phase involves creating a new resource with standard create/read/update/delete operations.

## Checklist
- [ ] Define resource schema (Zod or equivalent validation)
- [ ] Create migration for DB table
- [ ] Implement endpoints: POST (create), GET (list + detail), PUT/PATCH (update), DELETE
- [ ] Add input validation on all mutation endpoints
- [ ] Add pagination on list endpoint (cursor-based preferred over offset)
- [ ] Add filtering and sorting on list endpoint
- [ ] Return consistent error format (status code + message + details)
- [ ] Add proper HTTP status codes: 201 (created), 200 (success), 404 (not found), 422 (validation)
- [ ] Test all CRUD operations + edge cases (not found, duplicate, invalid input)

## Common Mistakes
- No pagination on list endpoints (will crash with large datasets)
- Using offset pagination (slow on large tables) → use cursor-based
- Not validating request body → runtime crashes
- Returning 200 for everything → use semantic HTTP codes
- DELETE without checking ownership → authorization bypass

## Patterns
- Schema → Type → Validation → Migration flow
- Repository pattern for DB access (separate query logic from handler)
- Consistent error response: `{ error: { code, message, details } }`

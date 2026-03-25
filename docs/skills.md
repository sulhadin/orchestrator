# Skills

Skills are domain-specific checklists that supplement role engineering standards. They provide concrete guidance for common patterns like authentication, CRUD APIs, and deployment.

## How Skills Work

1. PM assigns skills to a phase via frontmatter:
   ```yaml
   skills: [auth-setup, crud-api]
   ```
2. Worker loads each skill file from `.orchestra/skills/`
3. Worker follows the skill's checklist alongside the role's standards
4. Skills are supplementary — they don't override role rules

## Available Skills

### `auth-setup`
**When to use:** Phase involves authentication, login, signup, session management.

Covers:
- Auth strategy selection (JWT vs session vs OAuth)
- Password hashing (bcrypt/argon2)
- Token storage (httpOnly cookies for web, secure storage for mobile)
- Refresh token rotation
- Rate limiting on auth endpoints
- CSRF protection
- Common mistakes (localStorage JWT, missing token invalidation, info leaks)

### `crud-api`
**When to use:** Phase involves creating a new resource with standard CRUD operations.

Covers:
- Resource schema + validation (Zod or equivalent)
- All endpoints: POST, GET (list + detail), PUT/PATCH, DELETE
- Cursor-based pagination (not offset)
- Filtering and sorting
- Consistent error format
- Proper HTTP status codes
- Common mistakes (no pagination, offset pagination, missing validation)

### `deployment`
**When to use:** Phase involves CI/CD, Docker, environment management, or production deployment.

Covers:
- Dockerfile: multi-stage build, non-root user
- docker-compose for local development
- Environment variables (.env.example)
- CI pipeline: lint → type check → test → build
- Health check endpoint
- Graceful shutdown
- Common mistakes (running as root, no .dockerignore, hardcoded secrets)

## Creating a New Skill

Owner creates skill files in `.orchestra/skills/`. Each skill follows this format:

```markdown
# Skill: {name}

## When to Use
One line describing when PM should assign this skill to a phase.

## Checklist
- [ ] Step 1
- [ ] Step 2
- [ ] ...

## Common Mistakes
- Mistake → why it's bad → what to do instead

## Reference Libraries
- `library-name` for purpose
```

### Tips for Good Skills

- **Be specific** — "Use bcrypt with cost 12+" is better than "Hash passwords"
- **Include common mistakes** — these are the most valuable part
- **Keep checklists actionable** — each item should be a concrete task
- **Reference current libraries** — not deprecated ones
- **Keep it under 50 lines** — skills should be quick to read, not documentation

## Discovering Skills

```
You: #help skills
```

Lists all available skills with their "When to Use" descriptions.

## Suggesting Missing Skills

If a milestone retrospective shows "Missing skill: {name}", that's a signal to create a new skill for that domain. Owner can create it using the format above.

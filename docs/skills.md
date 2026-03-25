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

### `accessibility`
**When to use:** Phase involves frontend UI that must meet WCAG 2.1 AA compliance.

Covers: alt text, color contrast, keyboard navigation, focus management, ARIA, touch targets, heading hierarchy.

### `best-practices`
**When to use:** Phase involves web application security, compatibility, or production hardening.

Covers: HTTPS, CSP headers, security headers, dependency audit, feature detection, input sanitization.

### `code-optimizer`
**When to use:** Phase involves performance optimization or audit of existing code.

Covers: database (N+1, indexes), memory leaks, algorithmic complexity, I/O parallelism, bundle size, dead code, caching.

### `core-web-vitals`
**When to use:** Phase involves frontend performance targeting Google's page experience metrics.

Covers: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1, preloading, critical CSS, font loading, image dimensions.

### `debug`
**When to use:** Phase involves investigating a complex bug or unexpected behavior.

Covers: evidence gathering, hypothesis testing, minimal reproduction, root cause analysis, fix verification.

### `frontend-design`
**When to use:** Phase involves building UI that needs to look polished and distinctive.

Covers: typography, color, layout, shadows, micro-interactions, animations, optical alignment, font smoothing.

### `react-best-practices`
**When to use:** Phase involves React or Next.js frontend development.

Covers: waterfall elimination, direct imports, server components, lazy loading, memoization, SWR, passive listeners.

### `review`
**When to use:** Phase involves code review or self-review before submitting.

Covers: security, performance, bugs, error handling, test coverage, type safety, dead code. Severity levels: CRITICAL/HIGH/MEDIUM/LOW.

### `testing`
**When to use:** Phase involves writing tests or improving test coverage.

Covers: framework detection, happy path, edge cases, error handling, async, mocking, test style matching.

### `web-quality-audit`
**When to use:** Phase involves comprehensive quality review — performance, accessibility, SEO, best practices.

Covers: Core Web Vitals, WCAG AA, SEO (robots, sitemap, structured data), security headers, error pages.

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

### Step-by-Step: Adding a New Skill

1. **Identify the need** — check knowledge.md retrospectives for "Missing skill: X" entries, or notice a recurring pattern across milestones
2. **Create the file** — `.orchestra/skills/{name}.md` using the format above
3. **Fill the checklist** — research current best practices, include 8-15 actionable items
4. **Add common mistakes** — these are the most valuable part. Pull from knowledge.md lessons if available
5. **Test it mentally** — read the checklist as if you're an engineer about to implement. Would you know exactly what to do?
6. **Update docs** — add the skill to `docs/skills.md` Available Skills section
7. **Announce** — the skill will appear in `#help skills` automatically (PM reads the directory)

**What NOT to do:**
- Don't create skills for one-off patterns — skills are for recurring domains
- Don't make checklists longer than 15 items — if it's that complex, split into two skills
- Don't include project-specific details — skills should be reusable across projects

## Discovering Skills

```
You: #help skills
```

Lists all available skills with their "When to Use" descriptions.

## Suggesting Missing Skills

If a milestone retrospective shows "Missing skill: {name}", that's a signal to create a new skill for that domain. Owner can create it using the format above.

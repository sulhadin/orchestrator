# Skills

Skills are domain-specific checklists in `.claude/skills/`. PM assigns them to phases, conductor loads them before implementation.

## How Skills Work

1. PM adds `skills: [auth-setup, crud-api]` to phase frontmatter
2. Conductor reads `.claude/skills/auth-setup.orchestra.md`
3. Conductor follows the checklist alongside the role's identity

## Available Skills (14)

| Skill | When to Use |
|-------|-------------|
| `auth-setup` | Authentication, login, session management |
| `crud-api` | CRUD resource endpoints |
| `deployment` | CI/CD, Docker, environment setup |
| `accessibility` | WCAG 2.1 AA compliance |
| `best-practices` | Web security, standards, compatibility |
| `code-optimizer` | Performance audit: DB, memory, bundle |
| `core-web-vitals` | LCP, INP, CLS optimization |
| `debug` | Systematic debugging methodology |
| `frontend-design` | UI polish, animations, typography |
| `react-best-practices` | React/Next.js patterns |
| `review` | Code review checklist |
| `testing` | Test writing patterns |
| `web-quality-audit` | Lighthouse: performance, a11y, SEO |
| `fullstack-infrastructure` | TypeScript project standards |

## Creating a New Skill

Create `.claude/skills/my-skill.md` (no `.orchestra` suffix — that's for system skills):

```markdown
# Skill: {name}

## When to Use
One line describing when to assign this skill.

## Checklist
- [ ] Step 1
- [ ] Step 2

## Common Mistakes
- Mistake → what to do instead
```

**Naming convention:**
- `*.orchestra.md` = system skills (updated on upgrade)
- `*.md` = your custom skills (preserved on upgrade)

## Discovering Skills

```
/orchestra help
```

Lists all available skills in the help output.

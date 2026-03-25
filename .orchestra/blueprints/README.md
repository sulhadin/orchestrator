# Blueprints — Pre-Built Milestone Templates

Blueprints are ready-made milestone sets for common project types. Instead of
PM writing every milestone from scratch, say `blueprint {name}` and get a full
set of milestones pre-groomed with phases, skills, and acceptance criteria.

## How to Use

1. PM activates: `blueprint saas-starter`
2. PM reviews the generated milestones — customize as needed
3. PM approves → milestones are created in `.orchestra/milestones/`
4. Worker executes with `#start`

## How to Customize

Blueprints are starting points, not rigid templates:
- **Add phases** — need an extra API endpoint? Add a phase to the relevant milestone
- **Remove phases** — no mobile? Remove React Native phases
- **Change skills** — using Clerk instead of custom auth? Swap skill references
- **Reorder milestones** — want CI/CD first? Move it up
- **Adjust complexity** — blueprint says `full` but you know the domain? Change to `standard`

## How to Create a New Blueprint

Create a new `.md` file in this directory. Follow the format:

```markdown
# Blueprint: {name}

## Description
What this blueprint is for, what it produces.

## Milestones

### M1 — {title}
- Complexity: {quick/standard/full}
- Phases:
  1. (backend) {description} [skills: {skill-list}]
  2. (backend) {description}
  3. (frontend) {description}
- Acceptance Criteria:
  - [ ] {criterion}

### M2 — {title}
...
```

## How to Add a Component Template

If you have a recurring component (e.g. "add a new CRUD resource", "add OAuth provider"),
create it as a **component blueprint** — a single milestone that can be mixed into any project:

```markdown
# Blueprint: component-crud-resource

## Description
Adds a complete CRUD resource: DB table, API endpoints, validation, tests.
Use this whenever you need a new entity in your API.

## Parameters
- RESOURCE_NAME: The name of the resource (e.g. "product", "order")
- FIELDS: List of fields (e.g. "name:string, price:number, active:boolean")

## Milestones

### M{N} — {RESOURCE_NAME} CRUD
- Complexity: standard
- Phases:
  1. (backend) DB schema + migration for {RESOURCE_NAME} [skills: crud-api]
  2. (backend) CRUD endpoints + validation + tests [skills: crud-api]
  3. (frontend) {RESOURCE_NAME} list + detail + form UI
- Acceptance Criteria:
  - [ ] All CRUD operations work
  - [ ] Input validation on all mutations
  - [ ] Pagination on list endpoint
  - [ ] Tests cover happy path + edge cases
```

PM uses it: `blueprint component-crud-resource` with `RESOURCE_NAME=product`.

## Available Blueprints

| Name | Type | Description |
|------|------|-------------|
| `saas-starter` | Full project | Auth + DB + API + Dashboard + Deploy |
| `api-only` | Full project | DB + API + Auth + CI/CD (no frontend) |
| `component-crud-resource` | Component | Single CRUD entity (reusable) |

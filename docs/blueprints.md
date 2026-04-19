# Blueprints

Pre-built milestone templates in `.orchestra/blueprints/`.

## Using a Blueprint

```
/orchestra pm
/orchestra blueprint saas-starter
PM: *shows 5 milestones, asks for customization*
```

## Available Blueprints

| Name | Type | Description |
|------|------|-------------|
| `saas-starter` | Full project | Auth + DB + API + Dashboard + Deploy (5 milestones) |
| `api-only` | Full project | DB + API + Auth + CI/CD (4 milestones) |
| `component-crud-resource` | Component | Single CRUD entity (parameterized) |

## Saving Work as a Blueprint

```
/orchestra blueprint add
PM: "Which milestone to convert?"
PM: *generates parameterized template*
PM: "Save as?"
```

## Creating a Blueprint Manually

Create `.orchestra/blueprints/{name}.md`:

```markdown
# Blueprint: {name}

## Description
What this blueprint produces.

## Parameters
- PARAM_NAME: Description

## Milestones

### M1 — {title}
- Complexity: quick / standard / full
- Phases:
  1. {description} [skills: skill-name]
  2. {description}
- Acceptance Criteria:
  - [ ] Criterion 1
```

## Customizing

After generating from a template:
- Add/remove phases
- Change skills
- Adjust complexity
- Reorder milestones

# Blueprints

Blueprints are pre-built milestone templates. Instead of PM writing every milestone from scratch, start from a template and customize.

## Using a Blueprint

```
You: #pm
You: #blueprint saas-starter
PM:  *shows 5 milestones with phases, skills, acceptance criteria*
PM:  "Customize anything? (add/remove phases, change complexity, swap skills)"
You: "Remove the frontend phases, this is API-only"
PM:  *adjusts and creates milestones*
```

## Available Blueprints

### `saas-starter` — Full SaaS MVP
5 milestones: Project Setup + Auth + Core API + CI/CD + Polish

- M1: Project skeleton, DB setup (full complexity)
- M2: Authentication with JWT (full complexity)
- M3: Core CRUD API + Dashboard (standard complexity)
- M4: Docker + CI pipeline + health check (standard complexity)
- M5: Error handling, rate limiting, polish (quick complexity)

### `api-only` — Backend API Service
4 milestones: Setup + Auth + API + Deploy (no frontend)

### `component-crud-resource` — Single CRUD Entity
1 parameterized milestone. Use to add a new resource to an existing project.

Parameters:
- `RESOURCE_NAME` — e.g. "product", "order", "invoice"
- `FIELDS` — e.g. "name:string, price:number, active:boolean"

```
You: #blueprint component-crud-resource
PM:  "What's the resource name?"
You: "product"
PM:  *creates M{N}-product-crud with 3 phases*
```

## Customizing Blueprints

Blueprints are starting points. After PM generates milestones from a blueprint:

- **Add phases** — need extra work? Add a phase to the milestone
- **Remove phases** — no mobile? Remove React Native phases
- **Change skills** — using Clerk instead of custom auth? Swap skill references
- **Reorder milestones** — want CI/CD first? Move it up
- **Adjust complexity** — blueprint says `full` but you know the domain? Change to `standard`

## Saving Work as a Blueprint — `#blueprint add`

After completing a milestone (or any significant work), save it as a reusable template:

```
You: #pm
You: #blueprint add
PM:  "Which milestone should I turn into a blueprint?"
You: "M3-payment-integration"
PM:  *reads phases, skills, complexity, acceptance criteria*
PM:  "Blueprint preview:
     Name: component-payment
     Parameters: PROVIDER (Stripe/Paddle)
     Phases: webhook handler, subscription CRUD, checkout UI
     Save?"
You: "Yes"
PM:  "Blueprint 'component-payment' saved to .orchestra/blueprints/"
```

Next time someone needs payment integration: `#blueprint component-payment`

## Step-by-Step: Adding a New Blueprint

### Option A: From existing work (`#blueprint add`)

1. Complete a milestone that represents a reusable pattern
2. `#pm` → `#blueprint add`
3. PM reads the milestone, generates a parameterized template
4. Review the preview, adjust parameters, confirm
5. Blueprint saved to `.orchestra/blueprints/{name}.md`
6. Update `docs/blueprints.md` — add the blueprint to Available Blueprints section

### Option B: From scratch (manual)

1. **Identify the pattern** — what type of project or component is this for?
2. **Decide the type:**
   - Full project (multiple milestones, e.g. `saas-starter`) — for starting new projects
   - Component (single parameterized milestone, e.g. `component-crud-resource`) — for adding to existing projects
3. **Create the file** — `.orchestra/blueprints/{name}.md` using the format below
4. **Define milestones** — each with complexity, phases (role + description), skills, acceptance criteria
5. **Identify parameters** — what should be customizable? (resource names, provider names, etc.)
6. **Update docs** — add the blueprint to `docs/blueprints.md` Available Blueprints section
7. **Update `.orchestra/blueprints/README.md`** — add to the Available Blueprints table

**Tips:**
- Component blueprints are more reusable than full-project blueprints — prefer them
- Always include acceptance criteria — PM uses them to verify milestone completion
- Assign skills where relevant — saves PM from remembering which skills apply
- Set realistic complexity levels — don't default everything to `full`

## Creating a Blueprint Manually

Create a `.md` file in `.orchestra/blueprints/`:

```markdown
# Blueprint: {name}

## Description
What this blueprint produces.

## Parameters
- PARAM_NAME: Description (e.g. "product", "order")

## Milestones

### M1 — {title}
- Complexity: quick / standard / full
- Phases:
  1. (backend) {description} [skills: skill-name]
  2. (frontend) {description}
- Acceptance Criteria:
  - [ ] Criterion 1
  - [ ] Criterion 2
```

### Full Project vs Component Blueprint

| Type | What it is | Example |
|------|-----------|---------|
| Full project | Multiple milestones, covers entire project | `saas-starter` (5 milestones) |
| Component | Single parameterized milestone, adds to existing project | `component-crud-resource` |

Component blueprints are more reusable — they can be mixed into any project.

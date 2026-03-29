Generate milestones from a blueprint template or save current work as a blueprint.

## Usage

`/orchestra blueprint {name}` — Create milestones from template
`/orchestra blueprint add` — Save current work as new template

## From Template

1. Read `.orchestra/blueprints/{name}.md`
2. If not found, list available blueprints
3. Present milestones for review
4. Ask: "Customize anything?"
5. After confirmation → create milestone directories and files

## Save as Template

1. Ask which milestone to convert
2. Read phases, skills, complexity, criteria
3. Identify parameterizable parts (resource names, providers)
4. Preview → confirm → save to `.orchestra/blueprints/{name}.md`

Requires PM role to be active.

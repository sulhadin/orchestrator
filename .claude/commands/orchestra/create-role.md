Create a new Orchestra role with interactive discovery.

## Process

### Step 1: Discovery

Ask the user using `ask_user_questions`:

**Round 1 — Identity:**
1. What domain does this role cover? (e.g. iOS, DevOps, Data Engineering, QA)
2. What's the role's primary responsibility in 1 sentence?
3. What seniority level? (junior, mid, senior, principal)

**Round 2 — Boundaries:**
1. What directories can this role write to? (e.g. `ios/`, `infra/`, `ml/`)
2. What should this role NEVER do?

### Step 2: Generate Role File

Create `.orchestra/roles/{name}.md`:

```markdown
# Role: {Name}

## Identity
You are a {seniority} {domain} engineer. {1-2 sentences about thinking style
and priorities based on discovery answers.}

## Ownership
Can write: {directories from discovery}
Cannot write: {other directories}, .orchestra/roles/, .claude/rules/*.orchestra.md

## Domain Priorities
- {priority 1 — derived from domain}
- {priority 2}
- {priority 3}
- {priority 4}
```

### Step 3: Symlink as Agent

```bash
ln -s ../../.orchestra/roles/{name}.md .claude/agents/{name}.md
```

This gives dual access:
- Role: conductor activates it during phase execution (context preserved)
- Agent: `@"{name} (agent)"` for standalone use (separate process)

### Step 4: Update Cross-References

1. `CLAUDE.md` — add to role selection list and role ID mapping table
2. `.claude/commands/orchestra/help.md` — add to ROLES section
3. `docs/roles.md` — add role description
4. `.orchestra/README.md` — add to file ownership table

### Step 5: Preview & Confirm

**ALWAYS** show all generated content before saving:
- Role file content
- Files that will be updated
- "Proceed?"

Only create files after user confirms.

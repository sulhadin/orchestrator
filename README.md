# Orchestra

AI team orchestration for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Two terminals — PM plans, conductor builds.

## Install

```bash
npx @sulhadin/orchestrator
```

## Two Terminals

### Terminal 1: `/orchestra pm` — Planning

PM is your strategic partner. Discuss ideas, challenge scope, create milestones.

```
You: /orchestra pm
PM:  "No active milestones. What's on your mind?"

You: "I want user authentication with JWT"
PM:  *discusses, challenges, creates milestone with phases*
```

### Terminal 2: `/orchestra start` — Execution

Conductor picks up milestones and executes them autonomously.

```
You: /orchestra start

📋 Starting M1-user-auth
🏗️ architect ▶ RFC...         ✅ done
⚙️ backend ▶ DB schema...     ✅ done
⚙️ backend ▶ API endpoints... ✅ done
🎨 frontend ▶ Login UI...     ✅ done
🔍 reviewer ▶ reviewing...    ✅ approved
🚦 Push? → yes
✅ M1-user-auth done.

📋 Starting M2-dashboard...
```

## Commands

| Command | What it does |
|---------|-------------|
| `/orchestra pm` | Plan features, create milestones |
| `/orchestra start` | Execute milestones (asks at approval gates) |
| `/orchestra start --auto` | Fully autonomous |
| `/orchestra hotfix {desc}` | Ultra-fast fix: implement → verify → commit → push |
| `/orchestra status` | Milestone status report |
| `/orchestra blueprint {name}` | Generate milestones from template |
| `/orchestra help` | Show all commands |

## Architecture

```
.claude/                              ← Claude Code integration
├── agents/conductor.md               ← Autonomous executor
├── agents/reviewer.md                ← Independent code review
├── skills/*.orchestra.md             ← 14 domain checklists
├── rules/*.orchestra.md              ← Discipline rules
└── commands/orchestra/               ← /orchestra commands

.orchestra/                           ← Project data + config
├── config.yml                        ← Pipeline settings (customize per stack)
├── roles/                            ← Role identities (slim)
├── blueprints/                       ← Project templates
├── knowledge.md                      ← Project knowledge log
└── milestones/                       ← Your work
```

## Documentation

See [docs/](https://github.com/sulhadin/orchestrator/blob/main/docs/README.md) for full documentation:

- [Getting Started](https://github.com/sulhadin/orchestrator/blob/main/docs/getting-started.md)
- [Commands](https://github.com/sulhadin/orchestrator/blob/main/docs/commands.md)
- [Roles](https://github.com/sulhadin/orchestrator/blob/main/docs/roles.md)
- [Features](https://github.com/sulhadin/orchestrator/blob/main/docs/features.md)
- [Blueprints](https://github.com/sulhadin/orchestrator/blob/main/docs/blueprints.md)
- [Skills](https://github.com/sulhadin/orchestrator/blob/main/docs/skills.md)

## License

MIT

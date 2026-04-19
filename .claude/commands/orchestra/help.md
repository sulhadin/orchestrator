Show all Orchestra commands and system overview.

Print this exact text:

```
Orchestra — AI Team Orchestration

COMMANDS:
  /orchestra pm              Open PM terminal (planning, milestones)
  /orchestra start           Execute milestones (asks at approval gates)
  /orchestra start --auto    Fully autonomous (warns once, then auto-push)
  /orchestra hotfix {desc}   Ultra-fast fix: implement → verify → commit → push
  /orchestra status          Milestone status report (PM only)
  /orchestra verifier [N]    Verify milestones match requirements (PM only)
  /orchestra rewind [N]      Review milestone execution history (PM only)
  /orchestra help            Show this help
  /orchestra blueprint {name}  Generate milestones from template (PM only)
  /orchestra blueprint add   Save current work as blueprint (PM only)
  /orchestra create-role     Create a new role with interactive discovery (Orchestrator only)

ROLES (activate via /orchestra {role}):
  /orchestra orchestrator    Maintain and evolve Orchestra system
  /orchestra pm              Plan features, create milestones

AGENTS:
  lead                             Team assembler + milestone executor (/orchestra start)
  reviewer                         Independent code review (called by lead)

PIPELINE (set by PM via Complexity field):
  quick       Phases → Commit → Push
  standard    Phases → Review → Push
  full        Design → Phases → Review → Push (default)

CONFIG:
  .orchestra/config.yml            Pipeline settings, thresholds, verification commands

FILES:
  .claude/agents/                  Lead + Reviewer agents
  .claude/skills/*/SKILL.md        Domain checklists (auth, CRUD, deploy, etc.)
  .claude/rules/*.orchestra.md     Discipline rules (verification, commit format, etc.)
  .claude/commands/orchestra/      Orchestra commands
  .orchestra/roles/                Role identities (orchestrator, product-manager)
  .orchestra/config.yml            Pipeline configuration
  .orchestra/blueprints/           Project/component templates
  .orchestra/milestones/           Feature work (one dir per milestone)
```

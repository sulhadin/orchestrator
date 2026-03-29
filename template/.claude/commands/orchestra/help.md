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
  /orchestra help            Show this help
  /orchestra blueprint {name}  Generate milestones from template (PM only)
  /orchestra blueprint add   Save current work as blueprint (PM only)
  #{role}                    Switch role: #orchestrator #pm #architect #backend #frontend #adaptive

ROLES:
  orchestrator (#orchestrator)     Maintain and evolve Orchestra system
  product-manager (#pm)            Write PRDs, create milestones, orchestrate pipeline
  architect (#architect)           Design architecture, choose tech
  backend-engineer (#backend)      Implement backend code + tests
  frontend-engineer (#frontend)    Design + build UI, write frontend tests
  adaptive (#adaptive)             Adaptive expert — domain defined per phase

AGENTS:
  conductor                        Autonomous milestone executor (/orchestra start)
  reviewer                         Independent code review (called by conductor)

PIPELINE (set by PM via Complexity field):
  quick       Engineer → Commit → Push
  standard    Engineer → Review → Push
  full        Architect → Engineer → Review → Push (default)

CONFIG:
  .orchestra/config.yml            Pipeline settings, thresholds, verification commands

FILES:
  .claude/agents/                  Conductor + Reviewer agents
  .claude/skills/*.orchestra.md    Domain checklists (auth, CRUD, deploy, etc.)
  .claude/rules/*.orchestra.md     Discipline rules (verification, commit format, etc.)
  .claude/commands/orchestra/      Orchestra commands
  .orchestra/roles/                Role identities (slim, 15 lines each)
  .orchestra/config.yml            Pipeline configuration
  .orchestra/blueprints/           Project/component templates
  .orchestra/knowledge.md          Append-only project knowledge
  .orchestra/milestones/           Feature work (one dir per milestone)
```

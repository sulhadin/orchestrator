# Changelog

  ## [3.0.0-beta.1](https://github.com/sulhadin/orchestrator/compare/v2.0.0...v3.0.0-beta.1) (2026-03-30)

  ### ⚠ BREAKING CHANGES

  * **orchestra:** Pipeline settings now come from config.yml, not hardcoded
  * **orchestra:** Discipline rules moved from role files to `.claude/rules/*.orchestra.md`
  * **orchestra:** Skills moved from `.orchestra/skills/` to `.claude/skills/*.orchestra.md`
  * **orchestra:** Role files reduced from 350+ lines to ~15-30 lines (identity + ownership only)
  * **orchestra:** worker.md replaced by conductor + reviewer agents
  * **orchestra:** Commands use `/orchestra` namespace (`/orchestra start`, `/orchestra pm`)
  * **orchestra:** Owner role renamed to Orchestrator
  * **ci:** Release management now uses Google's release-please

  ### Features

  * **orchestra:** add config-driven pipeline (`.orchestra/config.yml`) ([9927e0c](https://github.com/sulhadin/orchestrator/commit/9927e0c))
  * **orchestra:** extract discipline rules to `.claude/rules/*.orchestra.md` ([b68e5d9](https://github.com/sulhadin/orchestrator/commit/b68e5d9))
  * **orchestra:** migrate skills to `.claude/skills/*.orchestra.md` ([11413f5](https://github.com/sulhadin/orchestrator/commit/11413f5))
  * **orchestra:** add conductor and reviewer agents, remove worker ([0926d41](https://github.com/sulhadin/orchestrator/commit/0926d41))
  * **orchestra:** add `/orchestra` commands as native Claude Code commands ([5607403](https://github.com/sulhadin/orchestrator/commit/5607403))
  * **orchestra:** update CLAUDE.md, README, installer for v3 architecture ([c5ea61d](https://github.com/sulhadin/orchestrator/commit/c5ea61d))
  * **orchestra:** sync template with v3 architecture ([97b841f](https://github.com/sulhadin/orchestrator/commit/97b841f))
  * **ci:** replace custom workflow with release-please ([8a9ce1b](https://github.com/sulhadin/orchestrator/commit/8a9ce1b))

  ### Refactoring

  * **orchestra:** slim role files to identity + ownership only ([45f07ad](https://github.com/sulhadin/orchestrator/commit/45f07ad))

  ### Documentation

  * **orchestra:** update all documentation for v3 architecture ([7eac677](https://github.com/sulhadin/orchestrator/commit/7eac677))

# Changelog

## [3.0.0-beta.1](https://github.com/sulhadin/orchestrator/compare/orchestrator-v2.0.0...orchestrator-v3.0.0-beta.1) (2026-03-30)


### ⚠ BREAKING CHANGES

* **orchestra:** CLAUDE.md role selection updated (owner → orchestrator), commands use /orchestra namespace, installer handles .claude/ directory.
* **orchestra:** Commands moved from CLAUDE.md to .claude/commands/orchestra/. #start → /orchestra start, #pm → /orchestra pm, etc.
* **orchestra:** worker.md replaced by two specialized agents.
* **orchestra:** Role files reduced from 350+ lines to ~15-30 lines. Discipline rules → .claude/rules/, skills → .claude/skills/. Roles now contain only: identity, ownership scope, domain priorities.
* **orchestra:** Skills moved from .orchestra/skills/ to .claude/skills/. 14 skills with .orchestra.md suffix (system-managed, updated on upgrade). User-created skills use plain .md suffix (preserved on upgrade).
* **orchestra:** Discipline rules moved from role files to .claude/rules/. Claude Code loads these automatically — no manual reading needed.
* **orchestra:** Pipeline settings now come from config.yml, not hardcoded.
* **ci:** Release management now uses Google's release-please.
    - Automatic CHANGELOG.md generation from conventional commits
    - Release PR for review before publishing
    - Beta releases from 'next' branch, stable from 'main'
    - npm publish with correct tag (beta/latest)

### Features

* Add `#pm` as an activation trigger and introduce a structured welcome message for the product manager role. ([36bcc74](https://github.com/sulhadin/orchestrator/commit/36bcc74af58fca168b2d4db27c38bea10aab449e))
* Add `rm`, `cp`, `mv`, and `chmod` to the list of allowed Bash commands. ([51d6e67](https://github.com/sulhadin/orchestrator/commit/51d6e67ddbc16f0833a2b65c1852dbf9c90e79ee))
* Add architect's grooming validation to the milestone lifecycle and clarify user approval gate processes for revisions. ([56320ec](https://github.com/sulhadin/orchestrator/commit/56320ec9824079005997e532cba94406c97a3087))
* Add CLI argument parsing, help display, and automatic Claude permission configuration. ([2743e51](https://github.com/sulhadin/orchestrator/commit/2743e5178bff308489eb32c75901e7399c451ce9))
* Add user approval gate for milestone creation to the orchestrator process and documentation. ([67c0647](https://github.com/sulhadin/orchestrator/commit/67c06475929f926561d3ec1afa67be5ded67ee79))
* Add WebFetch and WebSearch tools to the orchestrator. ([1964a45](https://github.com/sulhadin/orchestrator/commit/1964a456e12ad46af22a17ee9f16abf8cca2080a))
* **ci:** replace custom workflow with release-please ([8a9ce1b](https://github.com/sulhadin/orchestrator/commit/8a9ce1b09003b881d9d9e750f10ea50565298ed2))
* Delegate phase execution to an autonomous worker process, shifting the Product Manager's role to planning and oversight. ([d340c9a](https://github.com/sulhadin/orchestrator/commit/d340c9ab77729808713ae794140e1a698aeed395))
* initialize project with editor, git, and Yarn configurations. ([d406df0](https://github.com/sulhadin/orchestrator/commit/d406df0adeeae40871ff667a697b9fc7dcab759c))
* **orchestra:** add /orchestra commands as native Claude Code commands ([5607403](https://github.com/sulhadin/orchestrator/commit/5607403ce9390531d46a021e20236c3737c9c4f7))
* **orchestra:** add conductor and reviewer agents, remove worker ([0926d41](https://github.com/sulhadin/orchestrator/commit/0926d4158061fcf0870907f1c4cf06d9187df89b))
* **orchestra:** add config-driven pipeline (.orchestra/config.yml) ([9927e0c](https://github.com/sulhadin/orchestrator/commit/9927e0c73170f6f4125a26ee8534da9b3ccb3e45))
* **orchestra:** add context.md update to all role handoffs and token column to status report ([0c49954](https://github.com/sulhadin/orchestrator/commit/0c4995464d536951df7d2ccfc5879fe1d0756068))
* **orchestra:** extract discipline rules to .claude/rules/*.orchestra.md ([b68e5d9](https://github.com/sulhadin/orchestrator/commit/b68e5d9865b5c1aa9c34965bb44705c8483cb2a4))
* **orchestra:** migrate skills to .claude/skills/*.orchestra.md ([11413f5](https://github.com/sulhadin/orchestrator/commit/11413f51ce43cd0f32ba58707e7502b94a3df4e5))
* **orchestra:** sync template with v3 architecture ([97b841f](https://github.com/sulhadin/orchestrator/commit/97b841f3fbb3eafa77ddd806e9e9c13187f2e03a))
* **orchestra:** update CLAUDE.md, README, installer for v3 architecture ([c5ea61d](https://github.com/sulhadin/orchestrator/commit/c5ea61d1a83118e4549b6ac77dffd5041eca74c2))
* worker agent autonomously activates roles and executes phases, clarifying automatic role switching based on phase files. ([a452555](https://github.com/sulhadin/orchestrator/commit/a452555680380ee8c631b4674717c2cd763b640c))


### Bug Fixes

* **ci:** add prerelease-type beta to release-please config ([f03522c](https://github.com/sulhadin/orchestrator/commit/f03522c308aee137b0844dab2e9654504829f0a7))
* **ci:** add release-please config paths and target-branch ([af3d84b](https://github.com/sulhadin/orchestrator/commit/af3d84b5ce2e053599ce7b7797556662c4bded3a))
* **ci:** force v3.0.0-beta.1 via release-as ([5ff4efa](https://github.com/sulhadin/orchestrator/commit/5ff4efadb8ea2bdc7ee2f8935d23d6936ed24736))
* **ci:** limit changelog to next-branch commits only via last-release-sha ([f2224ce](https://github.com/sulhadin/orchestrator/commit/f2224ce5bec35a002fd7e63f3d2737da010da98b))
* **orchestra:** ensure worker updates phase status for all roles consistently ([a85a805](https://github.com/sulhadin/orchestrator/commit/a85a805a09931d934d6967161d9835f7b71fddbe))


### Refactoring

* Consolidate specific Bash permissions into a single wildcard entry. ([450983b](https://github.com/sulhadin/orchestrator/commit/450983bf1d58be9db97ddeff184fe6186eb9f0d9))
* **orchestra:** slim role files to identity + ownership only ([45f07ad](https://github.com/sulhadin/orchestrator/commit/45f07add1a5b1ebddde7e1da60e1e40f6781656a))
* Update role invocation prefix from '@' to '#' across all documentation and agent definitions. ([0953a50](https://github.com/sulhadin/orchestrator/commit/0953a502c74d0831c76ec767d78bd5fa18629d4e))


### Documentation

* clarify `context.md` update instructions for incremental saving and better persistence ([a8a3157](https://github.com/sulhadin/orchestrator/commit/a8a315759764f3a62cfab211aa444ecea0769f72))
* Clarify dispatching instructions and introduce mandatory progress reporting guidelines for the product manager role. ([379192f](https://github.com/sulhadin/orchestrator/commit/379192fe22de524d76fa6e8f4d78d2e8bfbf5cc5))
* **orchestra:** update all documentation for v3 architecture ([7eac677](https://github.com/sulhadin/orchestrator/commit/7eac6774c8d0db9d862bb0bc3cc38a889ee9301b))


### Maintenance

* **release:** v1.1.0 ([3efb406](https://github.com/sulhadin/orchestrator/commit/3efb4062c1c1ebe01448a477f74a54deff60e456))
* **release:** v1.10.0 ([0d16965](https://github.com/sulhadin/orchestrator/commit/0d16965f0ca528b078adb18265e23407b71fdf75))
* **release:** v1.2.0 ([4e13a5e](https://github.com/sulhadin/orchestrator/commit/4e13a5efa657414b170efe2b558d6d6f60e66564))
* **release:** v1.3.0 ([be6e22e](https://github.com/sulhadin/orchestrator/commit/be6e22e5bc975f973ee1b268cd1d556904712e76))
* **release:** v1.4.0 ([de29976](https://github.com/sulhadin/orchestrator/commit/de29976f2a28f1b99c98e7c1749edeaeb7dec540))
* **release:** v1.4.1 ([bf738ea](https://github.com/sulhadin/orchestrator/commit/bf738ea292c1ac9017de7e72a1fb837b2618be23))
* **release:** v1.5.0 ([bf71178](https://github.com/sulhadin/orchestrator/commit/bf71178a078ad620524722d86ac8ad6c028b42e9))
* **release:** v1.6.0 ([f0ab98c](https://github.com/sulhadin/orchestrator/commit/f0ab98c0f7681a0a1f6e087cb4ebacb5c3aa2aba))
* **release:** v1.6.1 ([a1483ac](https://github.com/sulhadin/orchestrator/commit/a1483ac15ef67b6d66d9e168d1c34ae700a12a76))
* **release:** v1.7.0 ([3d3e823](https://github.com/sulhadin/orchestrator/commit/3d3e823b20f59188733f36abbd8c968ead754b42))
* **release:** v1.7.1 ([afb34e2](https://github.com/sulhadin/orchestrator/commit/afb34e2f590e9c161f1b8020df788859347875bb))
* **release:** v1.8.0 ([9051163](https://github.com/sulhadin/orchestrator/commit/9051163fee0a5e06411d799c5c16352370e0d233))
* **release:** v1.8.1 ([b0a0b87](https://github.com/sulhadin/orchestrator/commit/b0a0b87c3ca30daf0b68d2a08216b012881a5ab3))
* **release:** v1.9.0 ([47acee2](https://github.com/sulhadin/orchestrator/commit/47acee2daf1c39f794b66f5bbd413f43bd2294cc))
* trigger release-please ([1a51110](https://github.com/sulhadin/orchestrator/commit/1a51110b3920c7bb74154db2039c38a970f51141))

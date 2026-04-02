# Changelog

## [3.0.0-beta.9](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.8...orchestrator-v3.0.0-beta.9) (2026-04-02)


### Features

* **orchestra:** smart config merge + parametric pipeline settings ([06f2cf3](https://github.com/sulhadin/orchestrator/commit/06f2cf3737dfa78befd396a1a2267fd96d3e4260))

## [3.0.0-beta.8](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.7...orchestrator-v3.0.0-beta.8) (2026-04-02)


### Bug Fixes

* **orchestra:** restore sub-agent verification loop for code quality ([2265ec6](https://github.com/sulhadin/orchestrator/commit/2265ec6e213cd6bd359d9b7126d666a4d02ffe74))


### Performance

* **orchestra:** model tiering, prompt pre-injection, conductor-owned verification ([2b19682](https://github.com/sulhadin/orchestrator/commit/2b19682845bb091833feed3b9782647eae5715a3))

## [3.0.0-beta.7](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.6...orchestrator-v3.0.0-beta.7) (2026-03-31)


### Bug Fixes

* **ci:** enable corepack before yarn install for Yarn 4 support ([355c312](https://github.com/sulhadin/orchestrator/commit/355c312413fc2e47e6c20211ae32647bf87555e1))

## [3.0.0-beta.6](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.5...orchestrator-v3.0.0-beta.6) (2026-03-31)


### Performance

* **orchestra:** optimize context usage — phase isolation, instruction compression ([7f99bb7](https://github.com/sulhadin/orchestrator/commit/7f99bb7a846c76af89387dbb2a5f4198edb0b60e))


### Maintenance

* **orchestra:** generate template at publish time instead of tracking in git ([df9ab7c](https://github.com/sulhadin/orchestrator/commit/df9ab7c7178af6b768cc9a560da7cf95ed4c9991))

## [3.0.0-beta.5](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.4...orchestrator-v3.0.0-beta.5) (2026-03-31)


### Bug Fixes

* **orchestra:** audit fixes — stale refs, missing protected path, symlink handling ([9992b47](https://github.com/sulhadin/orchestrator/commit/9992b475341bd5902cf7e9897e61aba7d2752358))

## [3.0.0-beta.4](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.3...orchestrator-v3.0.0-beta.4) (2026-03-31)


### Features

* **orchestra:** add /orchestra {role} commands, remove free-text role switching ([1373096](https://github.com/sulhadin/orchestrator/commit/13730963c0130a3b9ad8dad156ad5da0df278795))


### Documentation

* **orchestra:** rewrite README and docs index for v3 architecture ([406bebe](https://github.com/sulhadin/orchestrator/commit/406bebe064c437a39a9030bd042e0e997a46065e))

## [3.0.0-beta.3](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.2...orchestrator-v3.0.0-beta.3) (2026-03-31)


### Bug Fixes

* **orchestra:** add explicit hard boundaries to PM role — never write code ([7eff4d2](https://github.com/sulhadin/orchestrator/commit/7eff4d296089640b05e1d0fd94545a18779da7fd))
* **orchestra:** align all role restrictions — engineers + adaptive cannot write system files ([e342913](https://github.com/sulhadin/orchestrator/commit/e342913e1e9ec822025db75054e41171eeffeb06))
* **orchestra:** strengthen PM boundary — refuse code even when user insists ([b79ffe1](https://github.com/sulhadin/orchestrator/commit/b79ffe1fb84b9d02f0c8f04d3be547566fae4def))


### Refactoring

* **orchestra:** centralize all role boundaries in rules, remove duplicate from PM ([c28a1c0](https://github.com/sulhadin/orchestrator/commit/c28a1c0f9e844208f182205b1e2afe1c794488b2))
* **orchestra:** simplify role boundaries — check file path, not user words ([4cc1cc2](https://github.com/sulhadin/orchestrator/commit/4cc1cc2aa4f38d4f95330973362232056f51562c))


### Maintenance

* ignore personal skill and DS_Store ([f1a5726](https://github.com/sulhadin/orchestrator/commit/f1a5726ab927e42296239e26c1f34efba3205533))


### CI/CD

* **orchestra:** add template sync check workflow ([6a3fe47](https://github.com/sulhadin/orchestrator/commit/6a3fe47121f4d4957d75cd6949da091bb320f6b5))

## [3.0.0-beta.2](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.1...orchestrator-v3.0.0-beta.2) (2026-03-30)


### Features

* **orchestra:** add agent frontmatter to all role files for Claude Code discovery ([4e8d7e6](https://github.com/sulhadin/orchestrator/commit/4e8d7e65f59e44be47115779278975387d7e9588))
* **orchestra:** add orchestra-reviewer agent for system consistency audits ([7b2da00](https://github.com/sulhadin/orchestrator/commit/7b2da00de3b463589e5d8fe0639137026e2e44ad))
* **orchestra:** add role boundary enforcement rule ([ff1ed17](https://github.com/sulhadin/orchestrator/commit/ff1ed17c38992fa730c0805a5056c316db1a0cbf))


### Bug Fixes

* **orchestra:** resolve 16 consistency issues from orchestra-reviewer audit ([04d93bc](https://github.com/sulhadin/orchestrator/commit/04d93bc7b99659d05ef789f402b862b4c9a73f2e))
* **orchestra:** resolve remaining 6 audit issues ([68af80d](https://github.com/sulhadin/orchestrator/commit/68af80de027d414beb8c3b41a53d26a6014c5a6a))


### Refactoring

* **orchestra:** remove all legacy # command references, use /orchestra convention ([6bfbbe1](https://github.com/sulhadin/orchestrator/commit/6bfbbe1dd5f18a78b5a1948c7b6c1bfa3e000c2b))

## [3.0.0-beta.1](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta...orchestrator-v3.0.0-beta.1) (2026-03-30)


### Features

* **orchestra:** add /orchestra create-role command ([4d54c3e](https://github.com/sulhadin/orchestrator/commit/4d54c3e2aebeda1337058daa3d4b002a2cb0aed3))
* **orchestra:** add orchestrator agent with role creation via symlink ([2850ff2](https://github.com/sulhadin/orchestrator/commit/2850ff2eb6fcb87675652c5b84a50bdf6a7a0d96))
* **orchestra:** symlink all roles as agents for standalone access ([9e35346](https://github.com/sulhadin/orchestrator/commit/9e35346167ae36830035e51e842869a90e97394e))

## [3.0.0-beta](https://github.com/sulhadin/orchestrator/compare/orchestrator-v2.0.0...orchestrator-v3.0.0-beta) (2026-03-30)


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
* **ci:** replace custom workflow with release-please ([647f87e](https://github.com/sulhadin/orchestrator/commit/647f87e27bf8a9b21042e946314dd0ea4e84a0f0))
* Delegate phase execution to an autonomous worker process, shifting the Product Manager's role to planning and oversight. ([d340c9a](https://github.com/sulhadin/orchestrator/commit/d340c9ab77729808713ae794140e1a698aeed395))
* initialize project with editor, git, and Yarn configurations. ([d406df0](https://github.com/sulhadin/orchestrator/commit/d406df0adeeae40871ff667a697b9fc7dcab759c))
* **orchestra:** add /orchestra commands as native Claude Code commands ([3e3a822](https://github.com/sulhadin/orchestrator/commit/3e3a8221a31b5cc035340f83d7a1a03ee9d09a4d))
* **orchestra:** add conductor and reviewer agents, remove worker ([6cf7131](https://github.com/sulhadin/orchestrator/commit/6cf7131f4bb89236bfaa9ba7fec721b683557615))
* **orchestra:** add config-driven pipeline (.orchestra/config.yml) ([3576c2a](https://github.com/sulhadin/orchestrator/commit/3576c2aad40c1189bfee132a095b7640744530fe))
* **orchestra:** add context.md update to all role handoffs and token column to status report ([0c49954](https://github.com/sulhadin/orchestrator/commit/0c4995464d536951df7d2ccfc5879fe1d0756068))
* **orchestra:** extract discipline rules to .claude/rules/*.orchestra.md ([99dde54](https://github.com/sulhadin/orchestrator/commit/99dde5448edc339df487f65fd349ade1e1aa9dd8))
* **orchestra:** migrate skills to .claude/skills/*.orchestra.md ([62b9384](https://github.com/sulhadin/orchestrator/commit/62b9384aa225b846d4d6c11406aa9a1b89146cbd))
* **orchestra:** sync template with v3 architecture ([879eef4](https://github.com/sulhadin/orchestrator/commit/879eef4367ac7b836c28d08ad50d6c95fc8d4dd9))
* **orchestra:** update CLAUDE.md, README, installer for v3 architecture ([3379aba](https://github.com/sulhadin/orchestrator/commit/3379aba78e9a62f64322a6f068939f65b43da623))
* worker agent autonomously activates roles and executes phases, clarifying automatic role switching based on phase files. ([a452555](https://github.com/sulhadin/orchestrator/commit/a452555680380ee8c631b4674717c2cd763b640c))


### Bug Fixes

* **ci:** add prerelease-type beta to release-please config ([1eb78ba](https://github.com/sulhadin/orchestrator/commit/1eb78ba5b8bf888cd3264e4aedc6a248ebb4fc46))
* **ci:** add release-please config paths and target-branch ([9e4d078](https://github.com/sulhadin/orchestrator/commit/9e4d0788fb00a5c98d34d599cbc631303b56bb91))
* **ci:** add versioning-strategy prerelease to release-please config ([61fab84](https://github.com/sulhadin/orchestrator/commit/61fab8409c1b320bf997b5748a2c5deacafe7206))
* **ci:** correct release-please config — versioning not versioning-strategy, remove release-as ([d009f01](https://github.com/sulhadin/orchestrator/commit/d009f0139061a74671e35edfd3f9052023c214ad))
* **ci:** force v3.0.0-beta.1 via release-as ([d9d08f7](https://github.com/sulhadin/orchestrator/commit/d9d08f70ba8365e79e8572a7358422dec0380434))
* **ci:** limit changelog to next-branch commits only via last-release-sha ([85a4bf6](https://github.com/sulhadin/orchestrator/commit/85a4bf691a9d6f8b0fc16a92ffcf3e53fd4ac106))
* **orchestra:** ensure worker updates phase status for all roles consistently ([a85a805](https://github.com/sulhadin/orchestrator/commit/a85a805a09931d934d6967161d9835f7b71fddbe))


### Refactoring

* Consolidate specific Bash permissions into a single wildcard entry. ([450983b](https://github.com/sulhadin/orchestrator/commit/450983bf1d58be9db97ddeff184fe6186eb9f0d9))
* **orchestra:** slim role files to identity + ownership only ([538dbd1](https://github.com/sulhadin/orchestrator/commit/538dbd193c04aba39f389b1cf88c56b622ecf909))
* Update role invocation prefix from '@' to '#' across all documentation and agent definitions. ([0953a50](https://github.com/sulhadin/orchestrator/commit/0953a502c74d0831c76ec767d78bd5fa18629d4e))


### Documentation

* clarify `context.md` update instructions for incremental saving and better persistence ([a8a3157](https://github.com/sulhadin/orchestrator/commit/a8a315759764f3a62cfab211aa444ecea0769f72))
* Clarify dispatching instructions and introduce mandatory progress reporting guidelines for the product manager role. ([379192f](https://github.com/sulhadin/orchestrator/commit/379192fe22de524d76fa6e8f4d78d2e8bfbf5cc5))
* **orchestra:** update all documentation for v3 architecture ([9557881](https://github.com/sulhadin/orchestrator/commit/95578812ed85afd0bb575c0de579b9b76d0eafe1))


### Maintenance

* **ci:** force 3.0.0-beta.1 via release-as ([484ffa1](https://github.com/sulhadin/orchestrator/commit/484ffa104ea5ca25e23f6b0ebb5a8c170c19f752))
* **ci:** remove release-as and last-release-sha overrides for future betas ([7bccc9e](https://github.com/sulhadin/orchestrator/commit/7bccc9e6cb860d27b54acc798baa172547c868fc))
* **ci:** reset manifest to 2.0.0 — let prerelease strategy bump to 3.0.0-beta.1 ([a02da9c](https://github.com/sulhadin/orchestrator/commit/a02da9c8d86cf005ab27dd6957fab3008e6a768e))
* **ci:** set manifest to 3.0.0-beta.0 for prerelease increment ([f2f9d34](https://github.com/sulhadin/orchestrator/commit/f2f9d34cf04342a96a9f1b3a1b5779d2aa4d71b5))
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
* trigger release-please ([a29f544](https://github.com/sulhadin/orchestrator/commit/a29f5441f7c828bb9c805c4d1db5107e5d59e1f0))

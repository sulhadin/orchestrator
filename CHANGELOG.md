# Changelog

## [5.0.0](https://github.com/sulhadin/orchestrator/compare/orchestrator-v4.0.0...orchestrator-v5.0.0) (2026-04-26)


### ⚠ BREAKING CHANGES

* static role files (backend-engineer, frontend-engineer, adaptive, architect) and conductor.md are removed. Phase files no longer use `role:` frontmatter. Users must re-run `npx @sulhadin/orchestrator` to upgrade.
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
* **ci:** replace custom workflow with release-please ([9831b43](https://github.com/sulhadin/orchestrator/commit/9831b43180a051a7e55ca04855e0e11cb2455f86))
* Delegate phase execution to an autonomous worker process, shifting the Product Manager's role to planning and oversight. ([d340c9a](https://github.com/sulhadin/orchestrator/commit/d340c9ab77729808713ae794140e1a698aeed395))
* initialize project with editor, git, and Yarn configurations. ([d406df0](https://github.com/sulhadin/orchestrator/commit/d406df0adeeae40871ff667a697b9fc7dcab759c))
* **orchestra:** add /orchestra {role} commands, remove free-text role switching ([f873ef0](https://github.com/sulhadin/orchestrator/commit/f873ef0c618582d409773ef47691cff7e24eec50))
* **orchestra:** add /orchestra commands as native Claude Code commands ([ddfd18b](https://github.com/sulhadin/orchestrator/commit/ddfd18b391bc5cbf796f0d031c2d47ccd104970e))
* **orchestra:** add /orchestra create-role command ([8ec65fd](https://github.com/sulhadin/orchestrator/commit/8ec65fdbc32d1e9f6c96c49beb7e987c4bf14be8))
* **orchestra:** add agent frontmatter to all role files for Claude Code discovery ([849878b](https://github.com/sulhadin/orchestrator/commit/849878bffe18a0ff48c1f0e8d4bb92a69cdbc477))
* **orchestra:** add conductor and reviewer agents, remove worker ([d134879](https://github.com/sulhadin/orchestrator/commit/d1348793e734db6af471bc1a742641a17834b8bb))
* **orchestra:** add config-driven pipeline (.orchestra/config.yml) ([7a89788](https://github.com/sulhadin/orchestrator/commit/7a89788b0d38027237d8cbbe76b1d16aaeb49588))
* **orchestra:** add context.md update to all role handoffs and token column to status report ([0c49954](https://github.com/sulhadin/orchestrator/commit/0c4995464d536951df7d2ccfc5879fe1d0756068))
* **orchestra:** add milestone isolation mode for context management ([141e764](https://github.com/sulhadin/orchestrator/commit/141e764418cc99977616441a2e6c84c023171aa1))
* **orchestra:** add milestone review loop for PM quality gate ([85328f5](https://github.com/sulhadin/orchestrator/commit/85328f524af382588a5443580c944bd6b3824b14))
* **orchestra:** add orchestra-reviewer agent for system consistency audits ([c56cb58](https://github.com/sulhadin/orchestrator/commit/c56cb581a5f1965520324e5b5f641a525988ec09))
* **orchestra:** add orchestrator agent with role creation via symlink ([b62d38c](https://github.com/sulhadin/orchestrator/commit/b62d38c61b42f05bc753ccfa6796806789dc794e))
* **orchestra:** add role boundary enforcement rule ([c28c8e8](https://github.com/sulhadin/orchestrator/commit/c28c8e8629af73abdc9463fcfc3b7cafd2bced6f))
* **orchestra:** add structured context.md format with metrics section ([50bfa8b](https://github.com/sulhadin/orchestrator/commit/50bfa8b52ffd39e231138513533e7e53103d3e85))
* **orchestra:** add verifier and rewind PM commands ([a076c2a](https://github.com/sulhadin/orchestrator/commit/a076c2a21315e0ea76ca1f956b3a3909073a63e1))
* **orchestra:** extract discipline rules to .claude/rules/*.orchestra.md ([2d5b03a](https://github.com/sulhadin/orchestrator/commit/2d5b03a9aa151a340620f000f29b278cb593f8df))
* **orchestra:** migrate skills to .claude/skills/*.orchestra.md ([89332cc](https://github.com/sulhadin/orchestrator/commit/89332cce60df2c4630af37e321eb8b1844beefe3))
* **orchestra:** remove push gate, add milestone context reset, default rfc to skip ([a84c1f2](https://github.com/sulhadin/orchestrator/commit/a84c1f2fee1aa429095806cdd6e5cded0eb5e549))
* **orchestra:** smart config merge + parametric pipeline settings ([81c1135](https://github.com/sulhadin/orchestrator/commit/81c1135412f09d1428da2968d00809bb6f8cd13c))
* **orchestra:** symlink all roles as agents for standalone access ([709f6ff](https://github.com/sulhadin/orchestrator/commit/709f6ffba95abdcb050a5969797800ae125d140b))
* **orchestra:** sync template with v3 architecture ([918e48e](https://github.com/sulhadin/orchestrator/commit/918e48ee8b9b948e26ef0dd31b4ed92693fb6839))
* **orchestra:** update CLAUDE.md, README, installer for v3 architecture ([392d936](https://github.com/sulhadin/orchestrator/commit/392d936f3ce4088648af442a205bc75008273433))
* **plugin:** add Claude Code plugin support alongside standalone npm install ([8d90525](https://github.com/sulhadin/orchestrator/commit/8d90525cc2217baf6e27104bbe958096a1848839))
* replace static agent roles with dynamic Lead architecture ([050395c](https://github.com/sulhadin/orchestrator/commit/050395c191a5832126853f3e91b96ee528d7e1a0))
* worker agent autonomously activates roles and executes phases, clarifying automatic role switching based on phase files. ([a452555](https://github.com/sulhadin/orchestrator/commit/a452555680380ee8c631b4674717c2cd763b640c))


### Bug Fixes

* **ci:** add manual publish via workflow_dispatch ([f39c6d6](https://github.com/sulhadin/orchestrator/commit/f39c6d62867603dfa0df96761e86bb1b39ebe613))
* **ci:** add prerelease-type beta to release-please config ([5d52975](https://github.com/sulhadin/orchestrator/commit/5d529754d3c19c94f0cb5bf44894cf81e26f9f81))
* **ci:** add release-please config paths and target-branch ([e49451c](https://github.com/sulhadin/orchestrator/commit/e49451cd68f0c920db0a346b7ec39217ce92532a))
* **ci:** add versioning-strategy prerelease to release-please config ([11431ab](https://github.com/sulhadin/orchestrator/commit/11431ab37e9b9ff7de024857cb9bdbfa2ba5138c))
* **ci:** align manifest with last published version (4.0.1-beta) ([b980452](https://github.com/sulhadin/orchestrator/commit/b98045243116c39bfcd02cd60a1bfb1627104f90))
* **ci:** auto-inject beta prerelease config for next branch ([b32f84d](https://github.com/sulhadin/orchestrator/commit/b32f84d7559ab54af8f8acecee5fe9f5cb6aed46))
* **ci:** correct release-please config — versioning not versioning-strategy, remove release-as ([7ab2f80](https://github.com/sulhadin/orchestrator/commit/7ab2f80d5c6245f2b1acc56e04b858d0d811e397))
* **ci:** enable corepack before yarn install for Yarn 4 support ([8f16c43](https://github.com/sulhadin/orchestrator/commit/8f16c43dbb607ca51f7030fde7313adb580d940c))
* **ci:** force v3.0.0-beta.1 via release-as ([07fb61a](https://github.com/sulhadin/orchestrator/commit/07fb61a731537b3ca7d4e579157431fa6f37b4ac))
* **ci:** limit changelog to next-branch commits only via last-release-sha ([ede1188](https://github.com/sulhadin/orchestrator/commit/ede1188135c23526c3e9dd2f7e86c73cb23d14eb))
* **ci:** prevent patch/minor bumps in prerelease mode for beta.N versioning ([6963e8e](https://github.com/sulhadin/orchestrator/commit/6963e8ec4c9fadd39df902477fd2377997ab692a))
* **ci:** reset manifest for correct prerelease numbering (4.0.0-beta.N) ([58fc405](https://github.com/sulhadin/orchestrator/commit/58fc405f9045709c04abe2a8dfd1f4d6de31fa94))
* **ci:** reset manifest version for correct beta bump ([bd150c9](https://github.com/sulhadin/orchestrator/commit/bd150c946103a01cb8f2acdc483b378ec8d1aed2))
* **ci:** restore versioning prerelease config from working v3 betas ([860e475](https://github.com/sulhadin/orchestrator/commit/860e475c533881363f2d8f213f4e4f40db642a86))
* **ci:** set manifest to 4.0.0-beta.0 with matching tag for beta.N versioning ([9b10efe](https://github.com/sulhadin/orchestrator/commit/9b10efe6c0d461e6841ed042239943ded0dcb4a6))
* **lead:** add static git rules to milestone agent prompt ([7256bbf](https://github.com/sulhadin/orchestrator/commit/7256bbf51a8c2e77722422531fba45c09794a63a))
* **orchestra:** add explicit hard boundaries to PM role — never write code ([8af6d5a](https://github.com/sulhadin/orchestrator/commit/8af6d5a7325f43a43ef25248b5d068fc46b440c8))
* **orchestra:** align all role restrictions — engineers + adaptive cannot write system files ([5a5b5a9](https://github.com/sulhadin/orchestrator/commit/5a5b5a96ca44108d68b48d76e5da2f133863671d))
* **orchestra:** audit fixes — stale refs, missing protected path, symlink handling ([6fe77bb](https://github.com/sulhadin/orchestrator/commit/6fe77bb14a91b9a0a67f334a87d18e37934ac239))
* **orchestra:** ensure worker updates phase status for all roles consistently ([a85a805](https://github.com/sulhadin/orchestrator/commit/a85a805a09931d934d6967161d9835f7b71fddbe))
* **orchestra:** improve PM guidance for starting execution ([1301fcb](https://github.com/sulhadin/orchestrator/commit/1301fcb347e32d49265696fb3fc7232bba2f6d83))
* **orchestra:** PM directs user to /orchestra:start when milestone is ready ([437425b](https://github.com/sulhadin/orchestrator/commit/437425b4f2ddb0fff44d428358fa47492d5589d0))
* **orchestra:** remove stale push gate refs, add dev section to CLAUDE.md ([49702d7](https://github.com/sulhadin/orchestrator/commit/49702d70cffce8e56ff431a228bb68133c792bd5))
* **orchestra:** resolve 16 consistency issues from orchestra-reviewer audit ([26a2f6f](https://github.com/sulhadin/orchestrator/commit/26a2f6ffee59ab3883ac9fff98aaac4319200c05))
* **orchestra:** resolve remaining 6 audit issues ([a0b0a08](https://github.com/sulhadin/orchestrator/commit/a0b0a08f79929227d4a2efb03f7093e46b8dc2f2))
* **orchestra:** restore sub-agent verification loop for code quality ([9425237](https://github.com/sulhadin/orchestrator/commit/9425237626a26776847eb0382e693f3201735586))
* **orchestra:** strengthen PM boundary — refuse code even when user insists ([34680c9](https://github.com/sulhadin/orchestrator/commit/34680c9fbc1f4b1d3000c9211cade9b3e001c10f))
* **test:** move test files to test/ to exclude from npm package ([89b83d4](https://github.com/sulhadin/orchestrator/commit/89b83d4db8604e60be0f56719d566f10781bdb26))
* **upgrade:** handle broken symlinks and legacy .orchestra.md files in smartMergeDir ([85d80cd](https://github.com/sulhadin/orchestrator/commit/85d80cd4050e9c24029f928bd5ab097e299ee3c5))
* **upgrade:** handle broken symlinks in backup and clean stale backups ([be47c23](https://github.com/sulhadin/orchestrator/commit/be47c232cbaaf5235a71271bed97080231f6ccf0))


### Refactoring

* **config:** remove 6 rarely-used config fields, hardcode defaults ([a239323](https://github.com/sulhadin/orchestrator/commit/a239323aab380e21a0ca5261089c54c5521db873))
* **config:** remove milestone_isolation, hardcode agent mode ([ddf0c88](https://github.com/sulhadin/orchestrator/commit/ddf0c8838d8272c892063bb898a7bad6a19c544e))
* Consolidate specific Bash permissions into a single wildcard entry. ([450983b](https://github.com/sulhadin/orchestrator/commit/450983bf1d58be9db97ddeff184fe6186eb9f0d9))
* **orchestra:** centralize all role boundaries in rules, remove duplicate from PM ([dbcd1c9](https://github.com/sulhadin/orchestrator/commit/dbcd1c99423e4c1e71dfc46a7353e44b6031de77))
* **orchestra:** remove all legacy # command references, use /orchestra convention ([ea8e85e](https://github.com/sulhadin/orchestrator/commit/ea8e85efe8948dfef90a849d16692e9f4a70b838))
* **orchestra:** simplify role boundaries — check file path, not user words ([39b9c1b](https://github.com/sulhadin/orchestrator/commit/39b9c1b8f248d54245ba1f9dbf9a0b7788a56589))
* **orchestra:** slim role files to identity + ownership only ([de8bcd1](https://github.com/sulhadin/orchestrator/commit/de8bcd1fdc993fbbc5bb2adbb85fcf02e1f8bef6))
* remove hardcoded directory rules from identity derivation ([a8533e9](https://github.com/sulhadin/orchestrator/commit/a8533e9beed184b65977af2a58c3e7e4db8e656f))
* **skills:** convert to Claude Code folder structure (skill-name/SKILL.md) ([585003f](https://github.com/sulhadin/orchestrator/commit/585003fb720fa1520da29c3d7edb366bd3d30692))
* **system:** remove knowledge.md and all references ([be64dcd](https://github.com/sulhadin/orchestrator/commit/be64dcdfdeaef30795aa190949634378f45a853e))
* Update role invocation prefix from '@' to '#' across all documentation and agent definitions. ([0953a50](https://github.com/sulhadin/orchestrator/commit/0953a502c74d0831c76ec767d78bd5fa18629d4e))


### Performance

* **orchestra:** model tiering, prompt pre-injection, conductor-owned verification ([1a22593](https://github.com/sulhadin/orchestrator/commit/1a225931bbf450a7ece2baeceed205be5157ce14))
* **orchestra:** optimize context usage — phase isolation, instruction compression ([c6c63e0](https://github.com/sulhadin/orchestrator/commit/c6c63e0c375d61c939cb84af6d9b20d0102c0312))


### Documentation

* add Claude Code plugin installation instructions ([1427d6b](https://github.com/sulhadin/orchestrator/commit/1427d6b8ca85bf9ccc019fa0101a114098859173))
* clarify `context.md` update instructions for incremental saving and better persistence ([a8a3157](https://github.com/sulhadin/orchestrator/commit/a8a315759764f3a62cfab211aa444ecea0769f72))
* Clarify dispatching instructions and introduce mandatory progress reporting guidelines for the product manager role. ([379192f](https://github.com/sulhadin/orchestrator/commit/379192fe22de524d76fa6e8f4d78d2e8bfbf5cc5))
* fix command format, both modes use /orchestra:cmd ([90a2eac](https://github.com/sulhadin/orchestrator/commit/90a2eac8e01d327780ad4482ae8cd81598fb140a))
* **orchestra:** rewrite README and docs index for v3 architecture ([f5d73dd](https://github.com/sulhadin/orchestrator/commit/f5d73ddb4a031fe87e78abdf8f19f7583b6ed4c0))
* **orchestra:** update all documentation for v3 architecture ([05ecfc0](https://github.com/sulhadin/orchestrator/commit/05ecfc095dc4102c33a8024541d669192e1989c8))
* **orchestra:** update docs for sub-agent delegation and model tiering ([311e8c0](https://github.com/sulhadin/orchestrator/commit/311e8c013a978b5374a8bcb84315c0cd6ea8efdf))


### Maintenance

* **ci:** configure release-please for beta prereleases on next ([b414076](https://github.com/sulhadin/orchestrator/commit/b414076f0b23714dc1528112659aa18ea7b8c04f))
* **ci:** force 3.0.0-beta.1 via release-as ([151ab0b](https://github.com/sulhadin/orchestrator/commit/151ab0b1afc88c907dcfdb000616fd5583207f64))
* **ci:** remove release-as and last-release-sha overrides for future betas ([a93cfca](https://github.com/sulhadin/orchestrator/commit/a93cfca8e2ea7056f9130775c90bf5c728c05bdf))
* **ci:** reset manifest to 2.0.0 — let prerelease strategy bump to 3.0.0-beta.1 ([51a4436](https://github.com/sulhadin/orchestrator/commit/51a4436b930b35b252c6bfc6b599ce4b5079a5c7))
* **ci:** set manifest to 3.0.0-beta.0 for prerelease increment ([31e2c6d](https://github.com/sulhadin/orchestrator/commit/31e2c6d1c7da8175949b975e2d1a8e3f4803d74b))
* graduate 4.0.0-beta.1 to stable 4.0.0 ([899019c](https://github.com/sulhadin/orchestrator/commit/899019c7b059c678714ead8825b9727a7fc795a0))
* ignore personal skill and DS_Store ([063085a](https://github.com/sulhadin/orchestrator/commit/063085a84662585acdbb2e9e2d6b5edd3c8a0874))
* **main:** release orchestrator 3.0.0 ([#36](https://github.com/sulhadin/orchestrator/issues/36)) ([1ecd144](https://github.com/sulhadin/orchestrator/commit/1ecd14442df0f22c8fea58dcaee3386677b96453))
* **main:** release orchestrator 3.1.0 ([#37](https://github.com/sulhadin/orchestrator/issues/37)) ([7401411](https://github.com/sulhadin/orchestrator/commit/740141169ced82022751fbaebe3e88935da274cb))
* **main:** release orchestrator 3.1.1 ([#38](https://github.com/sulhadin/orchestrator/issues/38)) ([4a015a3](https://github.com/sulhadin/orchestrator/commit/4a015a3fab8ba318662c85f7ed91e631b2ddde21))
* **main:** release orchestrator 3.1.2 ([#39](https://github.com/sulhadin/orchestrator/issues/39)) ([edbdbc2](https://github.com/sulhadin/orchestrator/commit/edbdbc2bd60f9e0218f778f1d2f4649bbddbee62))
* **main:** release orchestrator 3.1.3 ([#40](https://github.com/sulhadin/orchestrator/issues/40)) ([150f128](https://github.com/sulhadin/orchestrator/commit/150f12802ffb797686e44d46283fe38778bf2a82))
* **main:** release orchestrator 3.1.4 ([#41](https://github.com/sulhadin/orchestrator/issues/41)) ([945ccf5](https://github.com/sulhadin/orchestrator/commit/945ccf5b194694e079ddbc6dd7b870698fcdeeae))
* **main:** release orchestrator 3.1.5 ([#42](https://github.com/sulhadin/orchestrator/issues/42)) ([95d9e71](https://github.com/sulhadin/orchestrator/commit/95d9e719eb9f6d99e613c5653079f6376b6a4df4))
* **next:** release orchestrator 3.0.0-beta ([#17](https://github.com/sulhadin/orchestrator/issues/17)) ([569c501](https://github.com/sulhadin/orchestrator/commit/569c501369d6c993252035c0f0bb28a1f4457546))
* **next:** release orchestrator 3.0.0-beta.1 ([#18](https://github.com/sulhadin/orchestrator/issues/18)) ([d469846](https://github.com/sulhadin/orchestrator/commit/d469846c6a4fe4f2822113ffc0f15d5b43901fbd))
* **next:** release orchestrator 3.0.0-beta.10 ([#28](https://github.com/sulhadin/orchestrator/issues/28)) ([a77c3f8](https://github.com/sulhadin/orchestrator/commit/a77c3f8254d11ae0178be21afde538cf9326ee11))
* **next:** release orchestrator 3.0.0-beta.11 ([#29](https://github.com/sulhadin/orchestrator/issues/29)) ([b39ae18](https://github.com/sulhadin/orchestrator/commit/b39ae18cfb09f5e5f2380ac21d8245cd2356369f))
* **next:** release orchestrator 3.0.0-beta.12 ([#30](https://github.com/sulhadin/orchestrator/issues/30)) ([8519003](https://github.com/sulhadin/orchestrator/commit/851900311c0920e6000eeeb516349f70beed9f35))
* **next:** release orchestrator 3.0.0-beta.13 ([#31](https://github.com/sulhadin/orchestrator/issues/31)) ([b0b28cb](https://github.com/sulhadin/orchestrator/commit/b0b28cba45322479c209aad64b0662ced9904133))
* **next:** release orchestrator 3.0.0-beta.14 ([#32](https://github.com/sulhadin/orchestrator/issues/32)) ([43665b9](https://github.com/sulhadin/orchestrator/commit/43665b9fa71d58656cf8332be8a2e7f81c984e93))
* **next:** release orchestrator 3.0.0-beta.15 ([#33](https://github.com/sulhadin/orchestrator/issues/33)) ([67b67d0](https://github.com/sulhadin/orchestrator/commit/67b67d0384a6cf8819a9230025a7189fa0920db1))
* **next:** release orchestrator 3.0.0-beta.2 ([#19](https://github.com/sulhadin/orchestrator/issues/19)) ([e9d6195](https://github.com/sulhadin/orchestrator/commit/e9d6195aba14e0f9978bef89314a49e1c12d8c06))
* **next:** release orchestrator 3.0.0-beta.3 ([#20](https://github.com/sulhadin/orchestrator/issues/20)) ([907bbac](https://github.com/sulhadin/orchestrator/commit/907bbac1a22a093f3815a761e587b555c5653a87))
* **next:** release orchestrator 3.0.0-beta.4 ([#21](https://github.com/sulhadin/orchestrator/issues/21)) ([ca353e6](https://github.com/sulhadin/orchestrator/commit/ca353e68dfff354cf4bd7d27a9281ae7223a3c7c))
* **next:** release orchestrator 3.0.0-beta.5 ([#22](https://github.com/sulhadin/orchestrator/issues/22)) ([1d5ee17](https://github.com/sulhadin/orchestrator/commit/1d5ee17eef3dc29cc5563eeaab1d7ab89a856a66))
* **next:** release orchestrator 3.0.0-beta.6 ([94f1d85](https://github.com/sulhadin/orchestrator/commit/94f1d8522a172514e679a3c497a616cbff286cac))
* **next:** release orchestrator 3.0.0-beta.7 ([400416a](https://github.com/sulhadin/orchestrator/commit/400416a0bb7a3ac9c35bef8c81fa29d9a673b05c))
* **next:** release orchestrator 3.0.0-beta.8 ([#26](https://github.com/sulhadin/orchestrator/issues/26)) ([416c1f1](https://github.com/sulhadin/orchestrator/commit/416c1f161afa9c6f747eab28e63686aab83f63cb))
* **next:** release orchestrator 3.0.0-beta.9 ([#27](https://github.com/sulhadin/orchestrator/issues/27)) ([155a6cc](https://github.com/sulhadin/orchestrator/commit/155a6cc4fd0c1ffb9ea6e95440aa51f48b02ca07))
* **next:** release orchestrator 4.0.0-beta ([#48](https://github.com/sulhadin/orchestrator/issues/48)) ([76f3d07](https://github.com/sulhadin/orchestrator/commit/76f3d0726900bc2fb5ccefb09ee166bb5f5216fe))
* **next:** release orchestrator 4.0.0-beta.1 ([79c6c43](https://github.com/sulhadin/orchestrator/commit/79c6c43ae550a185ca624ac41a6385c6218497a9))
* **next:** release orchestrator 4.0.1-beta ([#49](https://github.com/sulhadin/orchestrator/issues/49)) ([df9f009](https://github.com/sulhadin/orchestrator/commit/df9f0096708e3cf99a20c563e589f71390080c96))
* **next:** release orchestrator 4.0.1-beta.0 ([#54](https://github.com/sulhadin/orchestrator/issues/54)) ([a6a4ad6](https://github.com/sulhadin/orchestrator/commit/a6a4ad6919012d4dec94778c7b46b88c58b41f41))
* **orchestra:** filter dev-only agents from template, fix role descriptions ([74de5a3](https://github.com/sulhadin/orchestrator/commit/74de5a35b2b5a75592c778c4da6d014664c2d09d))
* **orchestra:** generate template at publish time instead of tracking in git ([10f29ed](https://github.com/sulhadin/orchestrator/commit/10f29ed975ed0bea8be5d78ec4fe2d715f83cf8a))
* **release:** add stable release-please config for main branch ([9908731](https://github.com/sulhadin/orchestrator/commit/9908731e8897e362ee4c0d9bdcc75a6282387a7a))
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


### CI/CD

* **orchestra:** add template sync check workflow ([26d5208](https://github.com/sulhadin/orchestrator/commit/26d5208b509b426f5678e08e0eaa54375cfa23d7))

## [4.0.1-beta.0](https://github.com/sulhadin/orchestrator/compare/orchestrator-v4.0.0-beta.0...orchestrator-v4.0.1-beta.0) (2026-04-19)


### Bug Fixes

* **ci:** align manifest with last published version (4.0.1-beta) ([832ec41](https://github.com/sulhadin/orchestrator/commit/832ec41edd7607d035d3199c77e48117f61277b7))
* **ci:** auto-inject beta prerelease config for next branch ([c62d6cc](https://github.com/sulhadin/orchestrator/commit/c62d6cc0293300b79733bc1c406b3b8e27e60881))
* **ci:** prevent patch/minor bumps in prerelease mode for beta.N versioning ([aea3ca4](https://github.com/sulhadin/orchestrator/commit/aea3ca49aa98cf08db4d857ac74c64cf21ad00f6))
* **ci:** reset manifest for correct prerelease numbering (4.0.0-beta.N) ([e670dd0](https://github.com/sulhadin/orchestrator/commit/e670dd09b4dbb61b597d7937753177818a060bc0))
* **ci:** reset manifest version for correct beta bump ([130f328](https://github.com/sulhadin/orchestrator/commit/130f328ae904e0470b4b1fa1ca5d7d0b1a9405a1))
* **ci:** restore versioning prerelease config from working v3 betas ([6e55c92](https://github.com/sulhadin/orchestrator/commit/6e55c9220834a6d9d6fed8349a576dec75a08c77))
* **ci:** set manifest to 4.0.0-beta.0 with matching tag for beta.N versioning ([4738986](https://github.com/sulhadin/orchestrator/commit/473898637f9a55adda6be3e9de505db9e4010543))


### Refactoring

* **config:** remove 6 rarely-used config fields, hardcode defaults ([ce8ad38](https://github.com/sulhadin/orchestrator/commit/ce8ad3824fd9f231d93f41a46c9f8dac196d7b56))
* **config:** remove milestone_isolation, hardcode agent mode ([99b56ec](https://github.com/sulhadin/orchestrator/commit/99b56ec92d8ef8ab2c0396e732629f606f3d31a8))
* remove hardcoded directory rules from identity derivation ([5b592d0](https://github.com/sulhadin/orchestrator/commit/5b592d021841df709488153ec1d9afb0447cbb09))


### Maintenance

* **ci:** configure release-please for beta prereleases on next ([4426600](https://github.com/sulhadin/orchestrator/commit/44266000eb33ad7adeb1f2c88f1073824d84307b))
* **next:** release orchestrator 4.0.0-beta ([#48](https://github.com/sulhadin/orchestrator/issues/48)) ([2d919ba](https://github.com/sulhadin/orchestrator/commit/2d919ba1867ee7680605ec63bdf38122a4885da4))
* **next:** release orchestrator 4.0.1-beta ([#49](https://github.com/sulhadin/orchestrator/issues/49)) ([34a06b7](https://github.com/sulhadin/orchestrator/commit/34a06b7edb8a630cec0a8c7495a6dfefe7b06ce5))
* trigger release-please with beta config ([9161ee4](https://github.com/sulhadin/orchestrator/commit/9161ee4db5afea3fdf532dee0fb183b0cb227488))

## [4.0.1-beta](https://github.com/sulhadin/orchestrator/compare/orchestrator-v4.0.0-beta...orchestrator-v4.0.1-beta) (2026-04-19)


### Bug Fixes

* **ci:** auto-inject beta prerelease config for next branch ([c62d6cc](https://github.com/sulhadin/orchestrator/commit/c62d6cc0293300b79733bc1c406b3b8e27e60881))


### Refactoring

* **config:** remove 6 rarely-used config fields, hardcode defaults ([ce8ad38](https://github.com/sulhadin/orchestrator/commit/ce8ad3824fd9f231d93f41a46c9f8dac196d7b56))
* **config:** remove milestone_isolation, hardcode agent mode ([99b56ec](https://github.com/sulhadin/orchestrator/commit/99b56ec92d8ef8ab2c0396e732629f606f3d31a8))

## [4.0.0-beta](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.1.5...orchestrator-v4.0.0-beta) (2026-04-19)


### ⚠ BREAKING CHANGES

* static role files (backend-engineer, frontend-engineer, adaptive, architect) and conductor.md are removed. Phase files no longer use `role:` frontmatter. Users must re-run `npx @sulhadin/orchestrator` to upgrade.

### Features

* replace static agent roles with dynamic Lead architecture ([57d694f](https://github.com/sulhadin/orchestrator/commit/57d694f9e85e4c2e916403ba772ea7c5222787c0))


### Bug Fixes

* **ci:** reset manifest version for correct beta bump ([130f328](https://github.com/sulhadin/orchestrator/commit/130f328ae904e0470b4b1fa1ca5d7d0b1a9405a1))
* **ci:** restore versioning prerelease config from working v3 betas ([6e55c92](https://github.com/sulhadin/orchestrator/commit/6e55c9220834a6d9d6fed8349a576dec75a08c77))


### Refactoring

* **system:** remove knowledge.md and all references ([c9d4ee1](https://github.com/sulhadin/orchestrator/commit/c9d4ee1668772d68199d1a689ffb8c89c7d0188d))


### Maintenance

* **ci:** configure release-please for beta prereleases on next ([4426600](https://github.com/sulhadin/orchestrator/commit/44266000eb33ad7adeb1f2c88f1073824d84307b))
* trigger release-please with beta config ([9161ee4](https://github.com/sulhadin/orchestrator/commit/9161ee4db5afea3fdf532dee0fb183b0cb227488))

## [3.1.5](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.1.4...orchestrator-v3.1.5) (2026-04-05)


### Bug Fixes

* **upgrade:** handle broken symlinks in backup and clean stale backups ([be47c23](https://github.com/sulhadin/orchestrator/commit/be47c232cbaaf5235a71271bed97080231f6ccf0))

## [3.1.4](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.1.3...orchestrator-v3.1.4) (2026-04-05)


### Bug Fixes

* **upgrade:** handle broken symlinks and legacy .orchestra.md files in smartMergeDir ([85d80cd](https://github.com/sulhadin/orchestrator/commit/85d80cd4050e9c24029f928bd5ab097e299ee3c5))

## [3.1.3](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.1.2...orchestrator-v3.1.3) (2026-04-05)


### Refactoring

* **skills:** convert to Claude Code folder structure (skill-name/SKILL.md) ([585003f](https://github.com/sulhadin/orchestrator/commit/585003fb720fa1520da29c3d7edb366bd3d30692))

## [3.1.2](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.1.1...orchestrator-v3.1.2) (2026-04-04)


### Bug Fixes

* **orchestra:** improve PM guidance for starting execution ([1301fcb](https://github.com/sulhadin/orchestrator/commit/1301fcb347e32d49265696fb3fc7232bba2f6d83))
* **orchestra:** PM directs user to /orchestra:start when milestone is ready ([437425b](https://github.com/sulhadin/orchestrator/commit/437425b4f2ddb0fff44d428358fa47492d5589d0))

## [3.1.1](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.1.0...orchestrator-v3.1.1) (2026-04-04)


### Documentation

* add Claude Code plugin installation instructions ([1427d6b](https://github.com/sulhadin/orchestrator/commit/1427d6b8ca85bf9ccc019fa0101a114098859173))
* fix command format, both modes use /orchestra:cmd ([90a2eac](https://github.com/sulhadin/orchestrator/commit/90a2eac8e01d327780ad4482ae8cd81598fb140a))

## [3.1.0](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0...orchestrator-v3.1.0) (2026-04-04)


### Features

* **plugin:** add Claude Code plugin support alongside standalone npm install ([8d90525](https://github.com/sulhadin/orchestrator/commit/8d90525cc2217baf6e27104bbe958096a1848839))

## [3.0.0](https://github.com/sulhadin/orchestrator/compare/orchestrator-v2.0.0...orchestrator-v3.0.0) (2026-04-04)


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
* **ci:** replace custom workflow with release-please ([9831b43](https://github.com/sulhadin/orchestrator/commit/9831b43180a051a7e55ca04855e0e11cb2455f86))
* Delegate phase execution to an autonomous worker process, shifting the Product Manager's role to planning and oversight. ([d340c9a](https://github.com/sulhadin/orchestrator/commit/d340c9ab77729808713ae794140e1a698aeed395))
* initialize project with editor, git, and Yarn configurations. ([d406df0](https://github.com/sulhadin/orchestrator/commit/d406df0adeeae40871ff667a697b9fc7dcab759c))
* **orchestra:** add /orchestra {role} commands, remove free-text role switching ([f873ef0](https://github.com/sulhadin/orchestrator/commit/f873ef0c618582d409773ef47691cff7e24eec50))
* **orchestra:** add /orchestra commands as native Claude Code commands ([ddfd18b](https://github.com/sulhadin/orchestrator/commit/ddfd18b391bc5cbf796f0d031c2d47ccd104970e))
* **orchestra:** add /orchestra create-role command ([8ec65fd](https://github.com/sulhadin/orchestrator/commit/8ec65fdbc32d1e9f6c96c49beb7e987c4bf14be8))
* **orchestra:** add agent frontmatter to all role files for Claude Code discovery ([849878b](https://github.com/sulhadin/orchestrator/commit/849878bffe18a0ff48c1f0e8d4bb92a69cdbc477))
* **orchestra:** add conductor and reviewer agents, remove worker ([d134879](https://github.com/sulhadin/orchestrator/commit/d1348793e734db6af471bc1a742641a17834b8bb))
* **orchestra:** add config-driven pipeline (.orchestra/config.yml) ([7a89788](https://github.com/sulhadin/orchestrator/commit/7a89788b0d38027237d8cbbe76b1d16aaeb49588))
* **orchestra:** add context.md update to all role handoffs and token column to status report ([0c49954](https://github.com/sulhadin/orchestrator/commit/0c4995464d536951df7d2ccfc5879fe1d0756068))
* **orchestra:** add milestone isolation mode for context management ([141e764](https://github.com/sulhadin/orchestrator/commit/141e764418cc99977616441a2e6c84c023171aa1))
* **orchestra:** add milestone review loop for PM quality gate ([85328f5](https://github.com/sulhadin/orchestrator/commit/85328f524af382588a5443580c944bd6b3824b14))
* **orchestra:** add orchestra-reviewer agent for system consistency audits ([c56cb58](https://github.com/sulhadin/orchestrator/commit/c56cb581a5f1965520324e5b5f641a525988ec09))
* **orchestra:** add orchestrator agent with role creation via symlink ([b62d38c](https://github.com/sulhadin/orchestrator/commit/b62d38c61b42f05bc753ccfa6796806789dc794e))
* **orchestra:** add role boundary enforcement rule ([c28c8e8](https://github.com/sulhadin/orchestrator/commit/c28c8e8629af73abdc9463fcfc3b7cafd2bced6f))
* **orchestra:** add structured context.md format with metrics section ([50bfa8b](https://github.com/sulhadin/orchestrator/commit/50bfa8b52ffd39e231138513533e7e53103d3e85))
* **orchestra:** add verifier and rewind PM commands ([a076c2a](https://github.com/sulhadin/orchestrator/commit/a076c2a21315e0ea76ca1f956b3a3909073a63e1))
* **orchestra:** extract discipline rules to .claude/rules/*.orchestra.md ([2d5b03a](https://github.com/sulhadin/orchestrator/commit/2d5b03a9aa151a340620f000f29b278cb593f8df))
* **orchestra:** migrate skills to .claude/skills/*.orchestra.md ([89332cc](https://github.com/sulhadin/orchestrator/commit/89332cce60df2c4630af37e321eb8b1844beefe3))
* **orchestra:** remove push gate, add milestone context reset, default rfc to skip ([a84c1f2](https://github.com/sulhadin/orchestrator/commit/a84c1f2fee1aa429095806cdd6e5cded0eb5e549))
* **orchestra:** smart config merge + parametric pipeline settings ([81c1135](https://github.com/sulhadin/orchestrator/commit/81c1135412f09d1428da2968d00809bb6f8cd13c))
* **orchestra:** symlink all roles as agents for standalone access ([709f6ff](https://github.com/sulhadin/orchestrator/commit/709f6ffba95abdcb050a5969797800ae125d140b))
* **orchestra:** sync template with v3 architecture ([918e48e](https://github.com/sulhadin/orchestrator/commit/918e48ee8b9b948e26ef0dd31b4ed92693fb6839))
* **orchestra:** update CLAUDE.md, README, installer for v3 architecture ([392d936](https://github.com/sulhadin/orchestrator/commit/392d936f3ce4088648af442a205bc75008273433))
* worker agent autonomously activates roles and executes phases, clarifying automatic role switching based on phase files. ([a452555](https://github.com/sulhadin/orchestrator/commit/a452555680380ee8c631b4674717c2cd763b640c))


### Bug Fixes

* **ci:** add prerelease-type beta to release-please config ([5d52975](https://github.com/sulhadin/orchestrator/commit/5d529754d3c19c94f0cb5bf44894cf81e26f9f81))
* **ci:** add release-please config paths and target-branch ([e49451c](https://github.com/sulhadin/orchestrator/commit/e49451cd68f0c920db0a346b7ec39217ce92532a))
* **ci:** add versioning-strategy prerelease to release-please config ([11431ab](https://github.com/sulhadin/orchestrator/commit/11431ab37e9b9ff7de024857cb9bdbfa2ba5138c))
* **ci:** correct release-please config — versioning not versioning-strategy, remove release-as ([7ab2f80](https://github.com/sulhadin/orchestrator/commit/7ab2f80d5c6245f2b1acc56e04b858d0d811e397))
* **ci:** enable corepack before yarn install for Yarn 4 support ([8f16c43](https://github.com/sulhadin/orchestrator/commit/8f16c43dbb607ca51f7030fde7313adb580d940c))
* **ci:** force v3.0.0-beta.1 via release-as ([07fb61a](https://github.com/sulhadin/orchestrator/commit/07fb61a731537b3ca7d4e579157431fa6f37b4ac))
* **ci:** limit changelog to next-branch commits only via last-release-sha ([ede1188](https://github.com/sulhadin/orchestrator/commit/ede1188135c23526c3e9dd2f7e86c73cb23d14eb))
* **orchestra:** add explicit hard boundaries to PM role — never write code ([8af6d5a](https://github.com/sulhadin/orchestrator/commit/8af6d5a7325f43a43ef25248b5d068fc46b440c8))
* **orchestra:** align all role restrictions — engineers + adaptive cannot write system files ([5a5b5a9](https://github.com/sulhadin/orchestrator/commit/5a5b5a96ca44108d68b48d76e5da2f133863671d))
* **orchestra:** audit fixes — stale refs, missing protected path, symlink handling ([6fe77bb](https://github.com/sulhadin/orchestrator/commit/6fe77bb14a91b9a0a67f334a87d18e37934ac239))
* **orchestra:** ensure worker updates phase status for all roles consistently ([a85a805](https://github.com/sulhadin/orchestrator/commit/a85a805a09931d934d6967161d9835f7b71fddbe))
* **orchestra:** remove stale push gate refs, add dev section to CLAUDE.md ([49702d7](https://github.com/sulhadin/orchestrator/commit/49702d70cffce8e56ff431a228bb68133c792bd5))
* **orchestra:** resolve 16 consistency issues from orchestra-reviewer audit ([26a2f6f](https://github.com/sulhadin/orchestrator/commit/26a2f6ffee59ab3883ac9fff98aaac4319200c05))
* **orchestra:** resolve remaining 6 audit issues ([a0b0a08](https://github.com/sulhadin/orchestrator/commit/a0b0a08f79929227d4a2efb03f7093e46b8dc2f2))
* **orchestra:** restore sub-agent verification loop for code quality ([9425237](https://github.com/sulhadin/orchestrator/commit/9425237626a26776847eb0382e693f3201735586))
* **orchestra:** strengthen PM boundary — refuse code even when user insists ([34680c9](https://github.com/sulhadin/orchestrator/commit/34680c9fbc1f4b1d3000c9211cade9b3e001c10f))
* **test:** move test files to test/ to exclude from npm package ([89b83d4](https://github.com/sulhadin/orchestrator/commit/89b83d4db8604e60be0f56719d566f10781bdb26))


### Refactoring

* Consolidate specific Bash permissions into a single wildcard entry. ([450983b](https://github.com/sulhadin/orchestrator/commit/450983bf1d58be9db97ddeff184fe6186eb9f0d9))
* **orchestra:** centralize all role boundaries in rules, remove duplicate from PM ([dbcd1c9](https://github.com/sulhadin/orchestrator/commit/dbcd1c99423e4c1e71dfc46a7353e44b6031de77))
* **orchestra:** remove all legacy # command references, use /orchestra convention ([ea8e85e](https://github.com/sulhadin/orchestrator/commit/ea8e85efe8948dfef90a849d16692e9f4a70b838))
* **orchestra:** simplify role boundaries — check file path, not user words ([39b9c1b](https://github.com/sulhadin/orchestrator/commit/39b9c1b8f248d54245ba1f9dbf9a0b7788a56589))
* **orchestra:** slim role files to identity + ownership only ([de8bcd1](https://github.com/sulhadin/orchestrator/commit/de8bcd1fdc993fbbc5bb2adbb85fcf02e1f8bef6))
* Update role invocation prefix from '@' to '#' across all documentation and agent definitions. ([0953a50](https://github.com/sulhadin/orchestrator/commit/0953a502c74d0831c76ec767d78bd5fa18629d4e))


### Performance

* **orchestra:** model tiering, prompt pre-injection, conductor-owned verification ([1a22593](https://github.com/sulhadin/orchestrator/commit/1a225931bbf450a7ece2baeceed205be5157ce14))
* **orchestra:** optimize context usage — phase isolation, instruction compression ([c6c63e0](https://github.com/sulhadin/orchestrator/commit/c6c63e0c375d61c939cb84af6d9b20d0102c0312))


### Documentation

* clarify `context.md` update instructions for incremental saving and better persistence ([a8a3157](https://github.com/sulhadin/orchestrator/commit/a8a315759764f3a62cfab211aa444ecea0769f72))
* Clarify dispatching instructions and introduce mandatory progress reporting guidelines for the product manager role. ([379192f](https://github.com/sulhadin/orchestrator/commit/379192fe22de524d76fa6e8f4d78d2e8bfbf5cc5))
* **orchestra:** rewrite README and docs index for v3 architecture ([f5d73dd](https://github.com/sulhadin/orchestrator/commit/f5d73ddb4a031fe87e78abdf8f19f7583b6ed4c0))
* **orchestra:** update all documentation for v3 architecture ([05ecfc0](https://github.com/sulhadin/orchestrator/commit/05ecfc095dc4102c33a8024541d669192e1989c8))
* **orchestra:** update docs for sub-agent delegation and model tiering ([311e8c0](https://github.com/sulhadin/orchestrator/commit/311e8c013a978b5374a8bcb84315c0cd6ea8efdf))


### Maintenance

* **ci:** force 3.0.0-beta.1 via release-as ([151ab0b](https://github.com/sulhadin/orchestrator/commit/151ab0b1afc88c907dcfdb000616fd5583207f64))
* **ci:** remove release-as and last-release-sha overrides for future betas ([a93cfca](https://github.com/sulhadin/orchestrator/commit/a93cfca8e2ea7056f9130775c90bf5c728c05bdf))
* **ci:** reset manifest to 2.0.0 — let prerelease strategy bump to 3.0.0-beta.1 ([51a4436](https://github.com/sulhadin/orchestrator/commit/51a4436b930b35b252c6bfc6b599ce4b5079a5c7))
* **ci:** set manifest to 3.0.0-beta.0 for prerelease increment ([31e2c6d](https://github.com/sulhadin/orchestrator/commit/31e2c6d1c7da8175949b975e2d1a8e3f4803d74b))
* ignore personal skill and DS_Store ([063085a](https://github.com/sulhadin/orchestrator/commit/063085a84662585acdbb2e9e2d6b5edd3c8a0874))
* **next:** release orchestrator 3.0.0-beta ([#17](https://github.com/sulhadin/orchestrator/issues/17)) ([569c501](https://github.com/sulhadin/orchestrator/commit/569c501369d6c993252035c0f0bb28a1f4457546))
* **next:** release orchestrator 3.0.0-beta.1 ([#18](https://github.com/sulhadin/orchestrator/issues/18)) ([d469846](https://github.com/sulhadin/orchestrator/commit/d469846c6a4fe4f2822113ffc0f15d5b43901fbd))
* **next:** release orchestrator 3.0.0-beta.10 ([#28](https://github.com/sulhadin/orchestrator/issues/28)) ([a77c3f8](https://github.com/sulhadin/orchestrator/commit/a77c3f8254d11ae0178be21afde538cf9326ee11))
* **next:** release orchestrator 3.0.0-beta.11 ([#29](https://github.com/sulhadin/orchestrator/issues/29)) ([b39ae18](https://github.com/sulhadin/orchestrator/commit/b39ae18cfb09f5e5f2380ac21d8245cd2356369f))
* **next:** release orchestrator 3.0.0-beta.12 ([#30](https://github.com/sulhadin/orchestrator/issues/30)) ([8519003](https://github.com/sulhadin/orchestrator/commit/851900311c0920e6000eeeb516349f70beed9f35))
* **next:** release orchestrator 3.0.0-beta.13 ([#31](https://github.com/sulhadin/orchestrator/issues/31)) ([b0b28cb](https://github.com/sulhadin/orchestrator/commit/b0b28cba45322479c209aad64b0662ced9904133))
* **next:** release orchestrator 3.0.0-beta.14 ([#32](https://github.com/sulhadin/orchestrator/issues/32)) ([43665b9](https://github.com/sulhadin/orchestrator/commit/43665b9fa71d58656cf8332be8a2e7f81c984e93))
* **next:** release orchestrator 3.0.0-beta.15 ([#33](https://github.com/sulhadin/orchestrator/issues/33)) ([67b67d0](https://github.com/sulhadin/orchestrator/commit/67b67d0384a6cf8819a9230025a7189fa0920db1))
* **next:** release orchestrator 3.0.0-beta.2 ([#19](https://github.com/sulhadin/orchestrator/issues/19)) ([e9d6195](https://github.com/sulhadin/orchestrator/commit/e9d6195aba14e0f9978bef89314a49e1c12d8c06))
* **next:** release orchestrator 3.0.0-beta.3 ([#20](https://github.com/sulhadin/orchestrator/issues/20)) ([907bbac](https://github.com/sulhadin/orchestrator/commit/907bbac1a22a093f3815a761e587b555c5653a87))
* **next:** release orchestrator 3.0.0-beta.4 ([#21](https://github.com/sulhadin/orchestrator/issues/21)) ([ca353e6](https://github.com/sulhadin/orchestrator/commit/ca353e68dfff354cf4bd7d27a9281ae7223a3c7c))
* **next:** release orchestrator 3.0.0-beta.5 ([#22](https://github.com/sulhadin/orchestrator/issues/22)) ([1d5ee17](https://github.com/sulhadin/orchestrator/commit/1d5ee17eef3dc29cc5563eeaab1d7ab89a856a66))
* **next:** release orchestrator 3.0.0-beta.6 ([94f1d85](https://github.com/sulhadin/orchestrator/commit/94f1d8522a172514e679a3c497a616cbff286cac))
* **next:** release orchestrator 3.0.0-beta.7 ([400416a](https://github.com/sulhadin/orchestrator/commit/400416a0bb7a3ac9c35bef8c81fa29d9a673b05c))
* **next:** release orchestrator 3.0.0-beta.8 ([#26](https://github.com/sulhadin/orchestrator/issues/26)) ([416c1f1](https://github.com/sulhadin/orchestrator/commit/416c1f161afa9c6f747eab28e63686aab83f63cb))
* **next:** release orchestrator 3.0.0-beta.9 ([#27](https://github.com/sulhadin/orchestrator/issues/27)) ([155a6cc](https://github.com/sulhadin/orchestrator/commit/155a6cc4fd0c1ffb9ea6e95440aa51f48b02ca07))
* **orchestra:** filter dev-only agents from template, fix role descriptions ([74de5a3](https://github.com/sulhadin/orchestrator/commit/74de5a35b2b5a75592c778c4da6d014664c2d09d))
* **orchestra:** generate template at publish time instead of tracking in git ([10f29ed](https://github.com/sulhadin/orchestrator/commit/10f29ed975ed0bea8be5d78ec4fe2d715f83cf8a))
* **release:** add stable release-please config for main branch ([9908731](https://github.com/sulhadin/orchestrator/commit/9908731e8897e362ee4c0d9bdcc75a6282387a7a))
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


### CI/CD

* **orchestra:** add template sync check workflow ([26d5208](https://github.com/sulhadin/orchestrator/commit/26d5208b509b426f5678e08e0eaa54375cfa23d7))

## [3.0.0-beta.15](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.14...orchestrator-v3.0.0-beta.15) (2026-04-04)


### Features

* **orchestra:** add verifier and rewind PM commands ([76bcbc8](https://github.com/sulhadin/orchestrator/commit/76bcbc8ea3b4705c86b6a3576d56f64ac45f3513))

## [3.0.0-beta.14](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.13...orchestrator-v3.0.0-beta.14) (2026-04-04)


### Maintenance

* **orchestra:** filter dev-only agents from template, fix role descriptions ([4f4c04e](https://github.com/sulhadin/orchestrator/commit/4f4c04e0dbb0302ddaec24a9905125661e32a1ea))

## [3.0.0-beta.13](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.12...orchestrator-v3.0.0-beta.13) (2026-04-04)


### Features

* **orchestra:** add milestone isolation mode for context management ([3505dad](https://github.com/sulhadin/orchestrator/commit/3505dad3b0ac02b9c9208020282a24953203f1a7))
* **orchestra:** add structured context.md format with metrics section ([e0f0cc8](https://github.com/sulhadin/orchestrator/commit/e0f0cc8f8e0285f75ee43069f22ea5d493b945db))


### Bug Fixes

* **orchestra:** remove stale push gate refs, add dev section to CLAUDE.md ([6468776](https://github.com/sulhadin/orchestrator/commit/64687767a30a4fe5d7c027e56d54e89a664e80e8))

## [3.0.0-beta.12](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.11...orchestrator-v3.0.0-beta.12) (2026-04-03)


### Features

* **orchestra:** remove push gate, add milestone context reset, default rfc to skip ([6a8f8c5](https://github.com/sulhadin/orchestrator/commit/6a8f8c55c8881e3068dc4dab4c962404afd08e59))

## [3.0.0-beta.11](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.10...orchestrator-v3.0.0-beta.11) (2026-04-02)


### Features

* **orchestra:** add milestone review loop for PM quality gate ([066b00c](https://github.com/sulhadin/orchestrator/commit/066b00c8532ad7d221506231bbeef5975d6d123c))


### Documentation

* **orchestra:** update docs for sub-agent delegation and model tiering ([12a05c5](https://github.com/sulhadin/orchestrator/commit/12a05c5b66421253d55c2ec20725a6ac3a943f7d))

## [3.0.0-beta.10](https://github.com/sulhadin/orchestrator/compare/orchestrator-v3.0.0-beta.9...orchestrator-v3.0.0-beta.10) (2026-04-02)


### Bug Fixes

* **test:** move test files to test/ to exclude from npm package ([fe0b5ea](https://github.com/sulhadin/orchestrator/commit/fe0b5ea0f99489f718d2bdb733d9ab3901ca877c))

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

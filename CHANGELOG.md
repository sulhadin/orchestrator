# Changelog

## [3.0.0-beta.1](https://github.com/sulhadin/orchestrator/compare/orchestrator-v2.0.0...orchestrator-v3.0.0-beta.1) (2026-03-29)


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
* **ci:** replace custom workflow with release-please ([a3899c8](https://github.com/sulhadin/orchestrator/commit/a3899c82b3836adb1346ab62f076a11d6aecbe97))
* Delegate phase execution to an autonomous worker process, shifting the Product Manager's role to planning and oversight. ([d340c9a](https://github.com/sulhadin/orchestrator/commit/d340c9ab77729808713ae794140e1a698aeed395))
* initialize project with editor, git, and Yarn configurations. ([d406df0](https://github.com/sulhadin/orchestrator/commit/d406df0adeeae40871ff667a697b9fc7dcab759c))
* **orchestra:** add /orchestra commands as native Claude Code commands ([bd94c53](https://github.com/sulhadin/orchestrator/commit/bd94c534cb154e43de57b71e799a91fb3dbd1134))
* **orchestra:** add 10 skills adapted from GSD-2 (13 total) ([ba02839](https://github.com/sulhadin/orchestrator/commit/ba0283958c619e363486f7198313ed9da6d904ed))
* **orchestra:** add 15 features for v2.0 — GSD-2 inspired enhancements ([b9352c9](https://github.com/sulhadin/orchestrator/commit/b9352c9591cba61909ac81f7df42b4b871d454d9))
* **orchestra:** add acceptance check, phase limits, active knowledge ([de6a675](https://github.com/sulhadin/orchestrator/commit/de6a6754b333013a53cbe0283a21e867f8569b54))
* **orchestra:** add conductor and reviewer agents, remove worker ([1ebb86e](https://github.com/sulhadin/orchestrator/commit/1ebb86ec1e224d3cef4b2275317c25e4b8d85848))
* **orchestra:** add config-driven pipeline (.orchestra/config.yml) ([255d537](https://github.com/sulhadin/orchestrator/commit/255d53784fadadeff240ba443e37986d83fa9dd0))
* **orchestra:** add context.md update to all role handoffs and token column to status report ([0c49954](https://github.com/sulhadin/orchestrator/commit/0c4995464d536951df7d2ccfc5879fe1d0756068))
* **orchestra:** add help subcommands, auto-mode warning, milestone lock, blueprint add ([5b56ee7](https://github.com/sulhadin/orchestrator/commit/5b56ee7c1bf011a8e59b84521e2099fff58c4427))
* **orchestra:** add specialist role — adaptive expert for any domain ([a78caa1](https://github.com/sulhadin/orchestrator/commit/a78caa1fff0db03f3aa8d2508a751a97564a5992))
* **orchestra:** extract discipline rules to .claude/rules/*.orchestra.md ([111956e](https://github.com/sulhadin/orchestrator/commit/111956e491bd47464ea14fb253edd65fbb3c89e5))
* **orchestra:** migrate skills to .claude/skills/*.orchestra.md ([18cb438](https://github.com/sulhadin/orchestrator/commit/18cb438b38c4a27207687530de6a22b528d541e6))
* **orchestra:** sync template to v2.1, fix docs, detail merge strategy ([f096130](https://github.com/sulhadin/orchestrator/commit/f0961307f7b639ce64e7fa7ff9e511ca289ac390))
* **orchestra:** sync template with v3 architecture ([b338fc9](https://github.com/sulhadin/orchestrator/commit/b338fc9df6df16a10b04d4ca26f44e1c076519e1))
* **orchestra:** update CLAUDE.md, README, installer for v3 architecture ([227e13c](https://github.com/sulhadin/orchestrator/commit/227e13c66202114ce26cef2369ad536c80c2995e))
* worker agent autonomously activates roles and executes phases, clarifying automatic role switching based on phase files. ([a452555](https://github.com/sulhadin/orchestrator/commit/a452555680380ee8c631b4674717c2cd763b640c))


### Bug Fixes

* add repository, homepage, bugs fields to package.json for npm sidebar ([c12b21b](https://github.com/sulhadin/orchestrator/commit/c12b21b6db9d715903fc10951040cdbf5238313b))
* **ci:** add prerelease-type beta to release-please config ([ab12385](https://github.com/sulhadin/orchestrator/commit/ab12385622708fefffcd515ee83af907dbd77ead))
* **ci:** add release-please config paths and target-branch ([65a37bb](https://github.com/sulhadin/orchestrator/commit/65a37bb03b9f5eb0623904c94f4beb91c3ae57b6))
* **ci:** align release workflow with proven cherrypick-interactive pattern ([43fac3c](https://github.com/sulhadin/orchestrator/commit/43fac3ccc01e78a6fe17ab56b648bfbab10ef108))
* **ci:** force v3.0.0-beta.1 via release-as ([9be5cb9](https://github.com/sulhadin/orchestrator/commit/9be5cb92d1bade1a5488e41361368161652e4083))
* **ci:** prevent release workflow race condition and self-triggering ([928ede0](https://github.com/sulhadin/orchestrator/commit/928ede0eec492896dcf9eb2e6681cf3c4a75b1a2))
* **ci:** use --extended-regexp for release commit grep, escape parens ([bfb62ff](https://github.com/sulhadin/orchestrator/commit/bfb62ff390f0761fa1f89f121468fe514227f92b))
* **ci:** use commit message grep instead of tags, add [skip ci] to release commits ([6c28ef8](https://github.com/sulhadin/orchestrator/commit/6c28ef83f66200ad0cf26a5b7fb800340e26ecd4))
* **docs:** use absolute GitHub URLs for npm compatibility ([98a67a2](https://github.com/sulhadin/orchestrator/commit/98a67a29b765ab08e200613189a450b70cff6f1b))
* **orchestra:** align worker.md auto-mode description with actual behavior ([13023d6](https://github.com/sulhadin/orchestrator/commit/13023d66f8ff10fd7390ad5a6c7e26b7ab1e1b2d))
* **orchestra:** clarify re-scan instruction in milestone loop diagram ([6f158c7](https://github.com/sulhadin/orchestrator/commit/6f158c74aa3e0d42f38e4a79d7080401ae4d60ee))
* **orchestra:** clean template knowledge.md, improve backup detection ([aa97096](https://github.com/sulhadin/orchestrator/commit/aa9709664de29f179a7a3206e42c4165844cc084))
* **orchestra:** clean up legacy terminology and cross-file inconsistencies ([72884f1](https://github.com/sulhadin/orchestrator/commit/72884f16c944a78105c41ae0d184ebc05418cc46))
* **orchestra:** enforce skill assignment in PM milestone creation ([ca8a248](https://github.com/sulhadin/orchestrator/commit/ca8a248a7db2a9d377b19d03d7b5f59c2eb34116))
* **orchestra:** ensure worker updates phase status for all roles consistently ([a85a805](https://github.com/sulhadin/orchestrator/commit/a85a805a09931d934d6967161d9835f7b71fddbe))
* **orchestra:** final consistency pass — signal refs, missing features in docs ([830cda8](https://github.com/sulhadin/orchestrator/commit/830cda83dd53c37401e8bfe2c0f5a8880b4d1da6))
* **orchestra:** fix reviewer handoff model and file ownership gaps ([4bd0d8b](https://github.com/sulhadin/orchestrator/commit/4bd0d8b427449791489d87f5193a8ab8a21111e4))
* **orchestra:** force re-scan after milestone completion ([e7aa3a4](https://github.com/sulhadin/orchestrator/commit/e7aa3a45fc675ea7f48c25277590e9e558a95483))
* **orchestra:** force worker to list ALL milestone directories on startup ([5ef9e99](https://github.com/sulhadin/orchestrator/commit/5ef9e996b5803cfb6093c3a37222354e2c7e62e0))
* **orchestra:** preserve user data on upgrade (skills, blueprints, knowledge.md) ([3694123](https://github.com/sulhadin/orchestrator/commit/3694123b1122f1ae9c71ec6285f7c3f6e81389f2))
* **orchestra:** remove confirm prompt from #start --auto, warn and proceed ([c6b8340](https://github.com/sulhadin/orchestrator/commit/c6b8340b7146899fdfbd810707e49e23f302ce72))
* **orchestra:** remove last dispatch/PM-return references ([c16ca9d](https://github.com/sulhadin/orchestrator/commit/c16ca9d3d9ccd51d7c3ddbc341c86f0d3dc16958))
* **orchestra:** remove legacy terminology and add gitignore for reference projects ([212023a](https://github.com/sulhadin/orchestrator/commit/212023ae5195b4d77061f562ac3c0419e1b8940e))
* **orchestra:** remove redundant CRITICAL note from milestone re-scan ([0b55357](https://github.com/sulhadin/orchestrator/commit/0b55357c3f49305f1e279975ae49c9907651dab6))
* **orchestra:** resolve 6 cross-file inconsistencies from v2.0 ([d80a6f0](https://github.com/sulhadin/orchestrator/commit/d80a6f0cc5552e2e3adcd6d87fa7fcdd73698751))
* **orchestra:** smart merge on upgrade — update template files, preserve user files ([ee7d03b](https://github.com/sulhadin/orchestrator/commit/ee7d03b8820e985464163d166fd43de10c633232))
* **orchestra:** specify Glob+Read for milestone re-scan method ([66cafe6](https://github.com/sulhadin/orchestrator/commit/66cafe6a46898f69a984248de94ca0437f6cf333))
* **orchestra:** use Glob/Read tools for milestone scanning, not bash loops ([b316f5a](https://github.com/sulhadin/orchestrator/commit/b316f5aa677b8c3cf9ef7f51b0be8c2255e6c789))
* **orchestra:** v2.1 consistency pass — help subcommands, lock docs, auto desc ([30302e5](https://github.com/sulhadin/orchestrator/commit/30302e5dae2dcd7ab0bac4e281956da1185890b2))


### Refactoring

* Consolidate specific Bash permissions into a single wildcard entry. ([450983b](https://github.com/sulhadin/orchestrator/commit/450983bf1d58be9db97ddeff184fe6186eb9f0d9))
* **docs:** move key features from README to docs, expand with new features ([2286b5d](https://github.com/sulhadin/orchestrator/commit/2286b5d88d535543e5f8cd3e27ad9f9338b7d83a))
* **orchestra:** rename specialist role to adaptive ([e505c94](https://github.com/sulhadin/orchestrator/commit/e505c9406ef7b2b10f99aebbe2cc63239f3ce2ba))
* **orchestra:** slim role files to identity + ownership only ([7d28e2a](https://github.com/sulhadin/orchestrator/commit/7d28e2a8f38058be96e6a6eeb1ec6436debad59d))
* **orchestra:** standardize all commands with # prefix ([36d3a1f](https://github.com/sulhadin/orchestrator/commit/36d3a1f1649dcdb581062770d5c3817a712935c5))
* Update role invocation prefix from '@' to '#' across all documentation and agent definitions. ([0953a50](https://github.com/sulhadin/orchestrator/commit/0953a502c74d0831c76ec767d78bd5fa18629d4e))


### Documentation

* clarify `context.md` update instructions for incremental saving and better persistence ([a8a3157](https://github.com/sulhadin/orchestrator/commit/a8a315759764f3a62cfab211aa444ecea0769f72))
* Clarify dispatching instructions and introduce mandatory progress reporting guidelines for the product manager role. ([379192f](https://github.com/sulhadin/orchestrator/commit/379192fe22de524d76fa6e8f4d78d2e8bfbf5cc5))
* **orchestra:** add acceptance check, phase limits, active knowledge to features ([99dff65](https://github.com/sulhadin/orchestrator/commit/99dff657793375925d19ff97a102787d3ddd8259))
* **orchestra:** add full documentation site and owner docs rule ([5eef440](https://github.com/sulhadin/orchestrator/commit/5eef4409635a739e56222341129a050325443eb3))
* **orchestra:** add step-by-step guides for creating skills and blueprints ([c220920](https://github.com/sulhadin/orchestrator/commit/c220920c28996d4bfb790c0555899b015d1c9a91))
* **orchestra:** add upgrade behavior table to getting-started ([acfd624](https://github.com/sulhadin/orchestrator/commit/acfd6249311aac4361b07b1767356a72c11c1ffe))
* **orchestra:** anonymize alternative system references in knowledge.md ([cd8ec76](https://github.com/sulhadin/orchestrator/commit/cd8ec76354b5ab98541792777852f70df00e61dc))
* **orchestra:** enforce no Co-Authored-By rule across all repos ([e059b6f](https://github.com/sulhadin/orchestrator/commit/e059b6f4525d772f1f71fea7bbbfc2704b0ce240))
* **orchestra:** update all documentation for v3 architecture ([a496d0f](https://github.com/sulhadin/orchestrator/commit/a496d0f82e7bc61740307542b5f674f0dc910a05))
* update npx script. ([db033d1](https://github.com/sulhadin/orchestrator/commit/db033d1ead0ab3c9cdd6215bfefc3dbeff250a77))


### Maintenance

* add GitHub issue templates for bug reports and feature requests ([ef952c8](https://github.com/sulhadin/orchestrator/commit/ef952c89ffc347a21308b8404fff0ea72abf023f))
* **release:** v1.1.0 ([3efb406](https://github.com/sulhadin/orchestrator/commit/3efb4062c1c1ebe01448a477f74a54deff60e456))
* **release:** v1.10.0 ([0d16965](https://github.com/sulhadin/orchestrator/commit/0d16965f0ca528b078adb18265e23407b71fdf75))
* **release:** v1.11.0 ([bef1b6c](https://github.com/sulhadin/orchestrator/commit/bef1b6ccfaa6c8c2ef7c01b855c4602f5f285deb))
* **release:** v1.12.0 ([bbf720e](https://github.com/sulhadin/orchestrator/commit/bbf720e5bd6fa81984f96c91a60ceb2e5cd927a7))
* **release:** v1.12.1 ([d33d85d](https://github.com/sulhadin/orchestrator/commit/d33d85d536990c8f4149dd61cf8307ee8a7f9632))
* **release:** v1.13.0 ([9656b4e](https://github.com/sulhadin/orchestrator/commit/9656b4e6bde47c28ebdae0eef44765c59f0b9704))
* **release:** v1.14.0 ([3ef57f7](https://github.com/sulhadin/orchestrator/commit/3ef57f7940ed40054ce27360af75db80f109d432))
* **release:** v1.15.0 ([2dd867d](https://github.com/sulhadin/orchestrator/commit/2dd867d8b7d27423b9b6c608eb82901e0c2ef17a))
* **release:** v1.15.1 ([a2a5b7a](https://github.com/sulhadin/orchestrator/commit/a2a5b7a9b88a7b174b1df30950884e2be7a58300))
* **release:** v1.15.10 ([3eeda90](https://github.com/sulhadin/orchestrator/commit/3eeda90610f507056bc9183ebadc2f108d45f0e9))
* **release:** v1.15.11 ([a7ad08d](https://github.com/sulhadin/orchestrator/commit/a7ad08dd868fae1e13ee6fa33864bb6855fb9b27))
* **release:** v1.15.12 ([8282680](https://github.com/sulhadin/orchestrator/commit/8282680348e0a680835f04aad0fe589ac305c67c))
* **release:** v1.15.13 ([46f0dfa](https://github.com/sulhadin/orchestrator/commit/46f0dfa0c5d9dc7c420313d80e4c997c197c8ff8))
* **release:** v1.15.14 ([f3be4e9](https://github.com/sulhadin/orchestrator/commit/f3be4e96da14227878af4115bae609cadf69486d))
* **release:** v1.15.15 ([2302807](https://github.com/sulhadin/orchestrator/commit/2302807ed4dad121ee4e494f755fb35b2e6df44e))
* **release:** v1.15.16 ([c7db672](https://github.com/sulhadin/orchestrator/commit/c7db672fa1a2c3fc97851e7ae29fe1efdd56b7c4))
* **release:** v1.15.17 ([ccd9a8a](https://github.com/sulhadin/orchestrator/commit/ccd9a8a81a38aded3648860c0293a13ae956be15))
* **release:** v1.15.18 [skip ci] ([ef0484a](https://github.com/sulhadin/orchestrator/commit/ef0484ad4aa61e8494e5ce707d97b1e411259be3))
* **release:** v1.15.19 [skip ci] ([6c58a29](https://github.com/sulhadin/orchestrator/commit/6c58a294b1d2ec9f365884e85d018420397f81b2))
* **release:** v1.15.2 ([3c0aaf2](https://github.com/sulhadin/orchestrator/commit/3c0aaf24634579d8f054add583a9eb72b1371050))
* **release:** v1.15.3 ([2ee48ed](https://github.com/sulhadin/orchestrator/commit/2ee48edc240a8583d7334cb2321d78af2be0f2a8))
* **release:** v1.15.4 ([8991058](https://github.com/sulhadin/orchestrator/commit/89910588d945a52d0bafc1448ec3737b6666a90f))
* **release:** v1.15.5 ([1bbb78f](https://github.com/sulhadin/orchestrator/commit/1bbb78f1ffb9fe905855e93a0dca66681bcc6b46))
* **release:** v1.15.6 ([ac22862](https://github.com/sulhadin/orchestrator/commit/ac228628e16408ad7ef39291e0dce2dfd1d3fbe8))
* **release:** v1.15.7 ([055ea1e](https://github.com/sulhadin/orchestrator/commit/055ea1ead86e309729db36aec2dcbbfd9c2c5c52))
* **release:** v1.15.8 ([64560e9](https://github.com/sulhadin/orchestrator/commit/64560e9fd42ace48810e09e79a38ec4e56a95d88))
* **release:** v1.15.9 ([441b4b4](https://github.com/sulhadin/orchestrator/commit/441b4b470d647c9d8adb0a5f9ce02acd3810f7db))
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
* **release:** v2.0.0 [skip ci] ([be4bc91](https://github.com/sulhadin/orchestrator/commit/be4bc913162bf1cb5b1a149f1ff719609fc8aed9))
* update gitignore. ([97f2766](https://github.com/sulhadin/orchestrator/commit/97f2766ca51c4fd78c22df37c9563d7311946df8))

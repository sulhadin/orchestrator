# Code Standards

**SOLID** — Single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion.

**KISS** — Keep it simple. Don't over-engineer.

**YAGNI** — Don't build what you don't need right now.

**DRY** — Don't repeat yourself. Extract after second duplication, not before.

**Zero-tolerance rules:**
- No workarounds — if the right solution is hard, do it right. Flag effort in report or context.md.
- No unused code — delete dead imports, functions, files. Don't comment out.
- No breaking changes without migration — update every consumer.
- Current library versions only — verify before using, don't assume from memory.

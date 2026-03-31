# Phase Limits

Read thresholds from `.orchestra/config.yml` (`phase_time_limit`, `phase_tool_limit`).

**Time limit:** Phase exceeds limit → pause: "Phase-{N} exceeded {limit}min. Continue or stop?"
In `--auto` mode: continue, log overage in context.md.

**Scope guard:** Working on something NOT in phase acceptance criteria → STOP. Note in context.md, don't implement.

**Tool call guard:** More tool calls than limit without committing → pause, assess: commit what you have or escalate.

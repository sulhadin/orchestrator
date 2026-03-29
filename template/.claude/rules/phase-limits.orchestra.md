# Phase Limits

Read thresholds from `.orchestra/config.yml`:

```yaml
thresholds:
  phase_time_limit: 15    # minutes
  phase_tool_limit: 40    # tool calls
```

**Time limit:** If a phase exceeds the configured time limit, pause and report:
"Phase-{N} exceeded {limit}min. Continue or stop?"
In `--auto` mode: continue but log the overage in context.md.

**Scope guard:** If you find yourself working on something NOT listed in the phase's
acceptance criteria → STOP. Note it as a concern in context.md, don't implement it.
The phase scope is defined by PM — don't expand it.

**Tool call guard:** If you've made more tool calls than the configured limit in one
phase without committing, you're likely over-engineering or stuck. Pause, assess:
commit what you have or escalate.

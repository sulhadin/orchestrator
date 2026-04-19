Start the Orchestra lead for autonomous milestone execution.

Read `.claude/agents/lead.md` and follow its instructions.

The lead will:
1. Scan milestones for pending work
2. Assemble the right team for each phase (identity derived from phase content)
3. Delegate phases to sub-agents, load skills, implement code
4. Trigger code review via reviewer agent
5. Push automatically after review passes
6. Behavior after milestone: stop (inline mode) or continue to next (agent mode)

Config `pipeline.milestone_isolation` controls post-milestone behavior:
- `inline` (default): stops after each milestone. User compacts and restarts.
- `agent`: spawns each milestone in sub-agent. Loops automatically. Best with `--auto`.

Pass `--auto` flag for fully autonomous mode (warns once, then skips all gates).

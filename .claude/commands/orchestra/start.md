Start the Orchestra conductor for autonomous milestone execution.

Read `.claude/agents/conductor.md` and follow its instructions.

The conductor will:
1. Scan milestones for pending work
2. Execute phases sequentially (or parallel if configured)
3. Activate roles, load skills, implement code
4. Trigger code review via reviewer agent
5. Push automatically after review passes
6. Behavior after milestone: stop (inline mode) or continue to next (agent mode)

Config `pipeline.milestone_isolation` controls post-milestone behavior:
- `inline` (default): stops after each milestone. User compacts and restarts.
- `agent`: spawns each milestone in sub-agent. Loops automatically. Best with `--auto`.

Pass `--auto` flag for fully autonomous mode (warns once, then skips all gates).

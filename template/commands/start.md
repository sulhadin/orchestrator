Start the Orchestra lead for autonomous milestone execution.

Read `.claude/agents/lead.md` and follow its instructions.

The lead will:
1. Scan milestones for pending work
2. Assemble the right team for each phase (identity derived from phase content)
3. Delegate phases to sub-agents, load skills, implement code
4. Trigger code review via reviewer agent
5. Push automatically after review passes
6. After milestone: `--auto` continues to next automatically, normal mode asks user

Each milestone runs in its own sub-agent for context isolation.

Pass `--auto` flag for fully autonomous mode (warns once, then skips all gates).

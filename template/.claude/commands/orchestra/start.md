Start the Orchestra conductor for autonomous milestone execution.

Read `.claude/agents/conductor.md` and follow its instructions.

The conductor will:
1. Scan milestones for pending work
2. Execute phases sequentially (or parallel if configured)
3. Activate roles, load skills, implement code
4. Trigger code review via reviewer agent
5. Push after approval (or auto-push in --auto mode)
6. Loop to next milestone until all complete

Pass `--auto` flag for fully autonomous mode (warns once, then skips all gates).

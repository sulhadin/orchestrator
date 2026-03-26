# Project Knowledge

Append-only log of decisions, lessons, and patterns discovered during development.

**Two sections:**
- **Active Knowledge** — last 5 milestones. Worker reads this before every milestone. PM reads before grooming.
- **Archive** — older milestones, compacted to 1-2 lines each. PM reads during grooming for broader context. Worker skips.

**Rules:**
- NEVER edit or delete previous entries — append only
- To correct a previous entry, add a new entry: "Correction: {old} → {new}, because {reason}"
- Keep entries concise — 3-5 bullets per section, skip empty sections
- When Active Knowledge exceeds 5 milestones, move the oldest to Archive (compact to 1-2 lines)

**Entry format — always append to Active Knowledge:**

```markdown
## {date} — {milestone ID}: {milestone title}

### Decisions
- {decision}: {reasoning}

### Lessons Learned
- {what happened} → {root cause} → {what to do differently}

### Patterns
- {pattern name}: {where it's used, how it works}
```

---

# Archive

Compacted entries from older milestones. PM reads during grooming. Worker skips.

<!-- Oldest entries go here as 1-2 line summaries -->

---

# Active Knowledge

Last 5 milestones. Worker reads before every milestone start. PM reads before grooming.

<!-- New entries go here — move oldest to Archive when count exceeds 5 -->

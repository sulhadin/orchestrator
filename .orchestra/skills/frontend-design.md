# Skill: Frontend Design

## When to Use
Phase involves building UI that needs to look polished, professional, and distinctive — not generic.

## Checklist
- [ ] **Bold aesthetic direction:** commit to a clear visual concept — not timid, not generic
- [ ] **Distinctive typography:** avoid overused fonts (Inter, Roboto, Arial) — choose fonts with character
- [ ] **Cohesive color scheme:** limited palette (3-5 colors) with sharp accent colors
- [ ] **Intentional layout:** use asymmetry, overlap, or diagonal elements where appropriate — not everything grid-aligned
- [ ] **Layered shadows:** multiple transparent shadows instead of solid borders (`box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)`)
- [ ] **Concentric border radius:** outer radius = inner radius + padding (nested elements)
- [ ] **Micro-interactions:** hover states, focus transitions, loading animations — all < 300ms
- [ ] **Staggered enter animations:** split elements, ~100ms delay between each
- [ ] **Font smoothing:** `-webkit-font-smoothing: antialiased` for crisp text
- [ ] **Tabular numbers:** `font-variant-numeric: tabular-nums` for data tables and counters
- [ ] **Optical alignment:** icons and text optically centered, not geometrically

## Common Mistakes
- Generic AI-slop aesthetics → every AI tool produces the same look, be distinctive
- Solid borders everywhere → layered transparent shadows look more refined
- Geometric centering for icons → optical centering looks correct to the eye
- Harsh easing functions → use `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion
- Missing exit animations → enter with animation, exit abruptly looks broken
- System fonts without thought → typography is 80% of visual quality

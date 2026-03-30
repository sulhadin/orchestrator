# Skill: Accessibility (a11y)

## When to Use
Phase involves frontend UI work that must meet WCAG 2.1 AA compliance.

## Checklist
- [ ] All images have descriptive alt text (not "image" or filename)
- [ ] Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- [ ] All functionality accessible via keyboard (no mouse-only interactions)
- [ ] Visible focus indicators on all interactive elements (never `outline: none` without replacement)
- [ ] Skip links present for navigation-heavy pages
- [ ] All form inputs have associated `<label>` elements (not just placeholder)
- [ ] Error messages identify the field and suggest correction
- [ ] ARIA roles used only when no native HTML element fits — prefer semantic HTML
- [ ] Modals trap focus correctly and return focus on close
- [ ] Touch targets minimum 44x44px on mobile
- [ ] `prefers-reduced-motion` respected for animations
- [ ] Page has proper heading hierarchy (h1 → h2 → h3, no skips)

## Common Mistakes
- Using `div` with click handler instead of `button` → loses keyboard + screen reader support
- Color-only error indication (red border) → add icon + text for colorblind users
- Removing focus outlines with CSS → replace with custom visible focus style
- Using ARIA roles on elements that already have native semantics → redundant, confusing
- Placeholder text as label → disappears on input, not accessible
- Auto-playing media without controls → trap for screen reader users

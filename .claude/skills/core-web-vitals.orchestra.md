# Skill: Core Web Vitals

## When to Use
Phase involves frontend performance optimization targeting Google's page experience metrics.

## Checklist
- [ ] **LCP (Largest Contentful Paint) <= 2.5s:**
  - Preload LCP image with `<link rel="preload" fetchpriority="high">`
  - Inline critical CSS (< 14KB)
  - No render-blocking JavaScript in `<head>` (defer or async)
  - Server response time (TTFB) < 800ms
- [ ] **INP (Interaction to Next Paint) <= 200ms:**
  - No long tasks (> 50ms) on main thread — break up with `requestIdleCallback` or `scheduler.yield()`
  - Event handlers return quickly — defer heavy work
  - Avoid forced synchronous layouts (read then write DOM, not interleaved)
- [ ] **CLS (Cumulative Layout Shift) <= 0.1:**
  - All images/videos have explicit `width` and `height` or `aspect-ratio`
  - No content injected above existing content after load
  - Fonts use `font-display: swap` with `size-adjust` to minimize shift
  - Reserve space for dynamic content (ads, embeds, lazy content)

## Common Mistakes
- Images without dimensions → causes layout shift on load
- Web fonts blocking text rendering → use `font-display: swap`
- Client-side rendering for LCP element → server-render or prerender it
- Synchronous third-party scripts in `<head>` → blocks rendering
- Dynamic banners/modals pushing content down → reserve space or use overlay

# Skill: Code Optimizer

## When to Use
Phase involves performance optimization, refactoring for speed, or audit of existing code performance.

## Checklist
- [ ] **Database:** N+1 queries eliminated, proper indexes on WHERE/JOIN columns, connection pooling configured
- [ ] **Memory:** No unbounded caches/arrays, streams used for large data, event listeners cleaned up
- [ ] **Algorithmic:** No nested loops over large datasets (O(n^2)), use Map/Set for lookups instead of Array.find
- [ ] **I/O:** Parallel fetch with `Promise.all` where independent, no sequential awaits for unrelated data
- [ ] **Bundle:** No barrel file imports (`import { x } from './utils'`), use direct imports for tree-shaking
- [ ] **Dead Code:** Remove unused imports, functions, files — verify with `npx tsc --noEmit` + grep
- [ ] **Caching:** Expensive computations cached (LRU, memoize), HTTP cache headers set for static assets
- [ ] **Rendering:** Avoid layout thrashing (batch DOM reads before writes), use `content-visibility: auto` for offscreen content

## Common Mistakes
- Sequential `await` for independent promises → use `Promise.all([a(), b(), c()])`
- Importing from barrel files (`index.ts` re-exports) → prevents tree-shaking, bloats bundle
- Array.find/filter in loops → O(n*m), convert to Map/Set for O(1) lookup
- Missing database indexes on frequently queried columns → full table scans
- Unbounded in-memory caches → memory leak over time, use LRU with max size
- Not cleaning up event listeners, intervals, subscriptions → memory leak

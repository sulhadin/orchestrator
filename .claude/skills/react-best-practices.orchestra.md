# Skill: React Best Practices

## When to Use
Phase involves React or Next.js frontend development.

## Checklist
- [ ] **No waterfall fetches:** use `Promise.all` for parallel data, `Suspense` boundaries for streaming
- [ ] **Direct imports:** never import from barrel files (`index.ts`) — import from exact module path
- [ ] **Server components by default:** only add `"use client"` when state/effects/browser APIs needed
- [ ] **Lazy load heavy components:** `next/dynamic` or `React.lazy` for below-the-fold content
- [ ] **Memoize expensive renders:** `React.memo` for components with stable props, `useMemo` for expensive computations
- [ ] **Primitive dependencies in hooks:** avoid objects/arrays in `useEffect` deps — extract primitive values
- [ ] **No duplicate serialization:** don't pass same data as both prop and context
- [ ] **Parallel route fetching:** use `Promise.all` in `loader`/`getServerSideProps`, not sequential `await`
- [ ] **SWR/React Query for client data:** deduplication, caching, revalidation built-in
- [ ] **Passive event listeners:** `{ passive: true }` for scroll/touch handlers
- [ ] **Hoist static JSX:** constant JSX outside component body to avoid re-creation on render
- [ ] **Use `Map`/`Set` for lookups:** not `Array.find()` in render paths

## Common Mistakes
- Sequential `await` in data fetching → blocks waterfall, use `Promise.all`
- Barrel file imports → prevents tree-shaking, entire module loaded
- `"use client"` on everything → loses server component benefits (streaming, zero bundle)
- Complex objects in `useEffect` dependencies → infinite re-render loop
- Event listeners without cleanup → memory leak in `useEffect`
- Fetching in `useEffect` without SWR/React Query → no dedup, no cache, race conditions

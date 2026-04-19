---
name: fullstack-infra
description: |
  Fullstack TypeScript project infrastructure skill. Defines tech stack, monorepo structure, component architecture, network layer, backend patterns, and API conventions. Triggered when starting projects, scaffolding features, or writing TypeScript code.
---

# Fullstack TypeScript Infrastructure

Mandatory standards for all TypeScript projects. Code principles (SOLID, KISS, YAGNI, DRY), testing standards, and commit format are defined in `.claude/rules/` — not repeated here.

Before writing code, confirm if not already answered:
- Monorepo or single repo?
- Backend: Express or Hono?
- i18n needed?
- REST or GraphQL? (default: REST)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript (strict mode) |
| Frontend Build | Vite |
| Mobile | Expo (React Native) |
| State | Zustand (web & mobile) |
| Styling | Tailwind CSS + SCSS (edge cases) |
| Web UI | shadcn/ui |
| HTTP Client | Axios (via wrapper class) |
| Data Fetching | SWR (caches backend, uses Axios internally) |
| Backend | Express or Hono |
| ORM | Prisma |
| Auth | JWT |
| Testing | Vitest (unit), Playwright (E2E) |
| Linter | Biome |
| Monorepo | Yarn Workspaces |
| Env Validation | Zod schemas |

---

## Monorepo Structure

```
monorepo/
├── apps/
│   ├── <project>/               # Web app (Vite)
│   │   └── src/
│   │       ├── app/             # Config, routing, providers
│   │       ├── assets/          # Static files
│   │       ├── components/      # Shared (2+ modules)
│   │       ├── libs/            # App-specific shared utils
│   │       ├── modules/<domain>/ # Feature modules
│   │       │   ├── components/
│   │       │   ├── utils/
│   │       │   └── <Page>.tsx
│   │       ├── store/           # Zustand stores
│   │       └── types/
│   ├── <mobile>/                # Expo app
│   │   └── src/                 # Same structure, no shadcn
│   └── api/                     # Backend
│       └── src/
│           ├── routes/
│           ├── controllers/     # Express
│           ├── handlers/        # Hono
│           ├── services/        # Business logic (pure, no HTTP)
│           ├── middlewares/
│           ├── models/
│           ├── utils/
│           ├── config/          # Env validation (Zod)
│           └── index.ts
├── packages/
│   ├── design/                  # Design system (Atomic Design)
│   │   └── src/components/
│   │       ├── atoms/           # Button, Input, Icon
│   │       ├── elements/        # FormField, Card, Tooltip
│   │       ├── molecules/       # SearchBar, Dropdown, Modal
│   │       └── organisms/       # Header, Sidebar, DataTable
│   └── utils/                   # Shared across all apps
│       └── src/
│           ├── client/          # HttpClient + domain API classes
│           ├── hooks/           # SWR hooks per resource
│           ├── network/         # Interceptors
│           └── utils/
```

Single-repo: same structure, one app, no `packages/` unless shared code emerges.

---

## Component Placement

1. Pure UI primitive (no business logic) → `packages/design/<atomic-level>/`
2. Used by 2+ modules in same app → `apps/<app>/src/components/`
3. Used by one module → `apps/<app>/src/modules/<domain>/components/`

Same logic for utilities: cross-app → `packages/utils/`, cross-module → `apps/<app>/src/libs/`, single module → inline.

### Atomic Design Levels

| Level | Rule | Examples |
|-------|------|---------|
| Atoms | No deps on other components | Button, Input, Icon |
| Elements | Composed atoms, single purpose | FormField, Card, Tooltip |
| Molecules | Functional groups, local state | SearchBar, Dropdown |
| Organisms | Business logic allowed | Header, Sidebar, DataTable |

Each level imports only from same level or below.

### Classes vs Functions

**Class** when: third-party SDK wrapper, lifecycle (init/destroy), shared state/config.
**Function** when: stateless, pure, single-purpose (`formatDate`, `slugify`).

Prefer dependency-free implementations for small utils. Use npm packages only when implementation is complex or out of scope.

---

## State Management (Zustand)

- One store per domain (auth, cart, ui)
- Keep stores flat — no deep nesting
- Use selectors: `useAuthStore((s) => s.user?.name)`
- Never put server-cache data in Zustand — SWR handles that
- Complex business logic → extract to services

---

## Network Layer

```
packages/utils/src/
├── client/
│   ├── HttpClient.ts      # Base Axios wrapper (shared config, interceptors)
│   ├── UserApi.ts          # Domain API class (extends HttpClient)
│   └── index.ts            # Export singleton instances
├── network/interceptors.ts # Auth token, error transform
└── hooks/use<Resource>.ts  # SWR hooks consuming API classes
```

**Rules:**
- All backend calls go through domain API classes — no raw `axios.get()` in components
- `HttpClient` is single source of Axios config (base URL, interceptors, auth headers)
- SWR hooks consume API class methods — never construct URLs directly
- SWR handles server data caching — never duplicate in Zustand
- Split API classes by domain when exceeding ~150 lines

---

## Backend Architecture

**Express:** routes → controllers → services → Prisma
**Hono:** routes → handlers → services → Prisma

Services contain pure business logic — no HTTP concepts (req, res).

### API Response Format (RFC 7807)

**Success:** No wrapper — status code tells the story.
- `200` single resource / paginated list (headers: X-Total-Count, X-Page, X-Per-Page)
- `201` created resource
- `204` no content (delete)

**Error:** RFC 7807 Problem Details format.
```json
{ "type": "url", "title": "...", "status": N, "detail": "...", "errors": [] }
```

### Error Class Hierarchy

```
AppError (base: status, message, type, isOperational)
├── NotFoundError (404)
├── ValidationError (400, with field errors)
├── UnauthorizedError (401)
└── ConflictError (409)
```

Global error middleware catches `AppError` subclasses → RFC 7807 response.
Unexpected errors → log, return generic 500 (no details leaked).

Frontend: ErrorBoundary for render errors, toast for async failures. Never swallow errors silently.

---

## Environment Variables

Validate all env vars at startup with Zod. App crashes immediately on invalid config — not silently at runtime.

---

## Best Practices

### TypeScript
- `strict` mode, no exceptions
- No `any` — use `unknown` + type guards
- `interface` for object shapes, `type` for unions/intersections
- Discriminated unions for state machines
- Explicit return types on exported functions

### React
- Functional components only
- Custom hooks prefixed with `use`
- `useMemo` for expensive computations, not everything
- `React.lazy` + `Suspense` for code splitting
- Composition over prop drilling
- Stable unique keys — never array index

### Performance
- Lazy load routes and heavy components
- Virtualize long lists (`react-window` / `FlashList`)
- Debounce frequent events
- Use SWR `loading`/`error` states — no manual booleans

### Security
- Sanitize all user input
- Parameterized queries only (Prisma handles this)
- CORS per environment, rate limiting on auth endpoints
- Never store secrets in client code
- Validate request bodies with Zod before processing

---

## i18n (Optional)

When needed, use `react-i18next`. All user-facing strings use translation keys. Use namespaces for large apps.

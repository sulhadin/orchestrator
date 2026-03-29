---
name: fullstack-infra
description: |
  Fullstack TypeScript project infrastructure and coding standards skill. Use this skill whenever the user starts a new project, creates components, writes backend services, sets up a monorepo, scaffolds features, or writes any code in an existing TypeScript project. Also trigger when the user asks about project structure, coding conventions, component organization, API design, state management, or best practices. This skill defines mandatory standards — every piece of code must comply.
---

# Fullstack TypeScript Infrastructure & Standards

This skill defines the architecture, conventions, and coding standards for all TypeScript projects. Every piece of code you write or modify must follow these rules. These are not suggestions — they are the engineering standards of the team.

Before writing any code, ask these project-scoping questions if not already answered:
- Is this a monorepo or single repo?
- Is the backend Express or Hono?
- Is i18n (multi-language support) needed?
- REST or GraphQL? (default: REST)

---

## Tech Stack

| Layer            | Technology                        |
|------------------|-----------------------------------|
| Language         | TypeScript (strict mode, always)  |
| Frontend Build   | Vite                              |
| Mobile           | Expo (React Native)               |
| State Management | Zustand (web & mobile)            |
| Styling          | Tailwind CSS (primary) + SCSS (edge cases only) |
| Web UI Components| shadcn/ui                         |
| HTTP Client      | Axios (via wrapper)               |
| Data Fetching    | SWR (caches backend responses, uses Axios wrapper internally) |
| Backend          | Express or Hono (ask which one)   |
| ORM              | Prisma                            |
| Auth             | JWT                               |
| Testing          | Vitest (unit), Playwright (E2E)   |
| Linter/Formatter | Biome                             |
| Monorepo         | Yarn Workspaces                   |
| Git              | Trunk-based development, Conventional Commits |
| Env Validation   | Zod schemas for .env variables    |

---

## Core Principles

These principles are non-negotiable. Every function, component, and module must satisfy them.

### SOLID

- **Single Responsibility**: One reason to change per module/class/function. A component renders UI — it does not fetch data, transform it, and handle errors all in one place.
- **Open/Closed**: Extend behavior through composition and props, not by modifying existing code. Use strategy patterns, render props, or hooks to add behavior.
- **Liskov Substitution**: Subtypes must be substitutable. If a component accepts `ButtonProps`, any extension of `ButtonProps` must work without breaking.
- **Interface Segregation**: Keep interfaces small and focused. Don't force consumers to depend on methods or props they don't use. Split large interfaces into smaller, role-specific ones.
- **Dependency Inversion**: Depend on abstractions. Services should accept interfaces, not concrete implementations. This enables testing and swapping implementations.

### KISS

Write the simplest code that solves the problem. If a solution needs a comment to explain what it does, it's probably too complex. Prefer readable, obvious code over clever code.

### YAGNI

Don't build for hypothetical future requirements. No feature flags for features that don't exist. No abstractions for a single use case. Three similar lines of code are better than a premature abstraction. Build what's needed now.

### DRY (with judgment)

Avoid duplication, but don't abstract prematurely. If code is duplicated in 2+ places and serves the same purpose, extract it. If two pieces of code look similar but serve different domains, they can stay separate — they'll likely diverge over time.

---

## Workarounds Are Forbidden

Never apply a workaround, hack, or quick fix without explicit user approval. If you encounter a situation where the "right" solution seems too complex or time-consuming:

1. Stop and explain the problem clearly
2. Present the proper solution and the workaround
3. Wait for explicit approval before applying a workaround

If the user approves, add a `// WORKAROUND:` comment explaining why it exists and link to a tracking issue if possible.

---

## Monorepo Structure

```
monorepo/
├── apps/
│   ├── <project>/                 # Web app (Vite, Playwright E2E)
│   │   └── src/
│   │       ├── app/               # App config, routing, providers
│   │       ├── assets/            # Static files (images, fonts, icons)
│   │       ├── components/        # Shared components (used by 2+ modules)
│   │       ├── libs/              # App-specific shared utilities (used by 2+ modules within this app)
│   │       ├── modules/           # Feature modules (pages, widgets)
│   │       │   └── <domain>/
│   │       │       ├── components/  # Domain-specific components
│   │       │       ├── utils/       # Domain-specific utilities
│   │       │       └── <Page>.tsx
│   │       ├── store/             # Zustand stores
│   │       └── types/             # TypeScript type definitions
│   │
│   ├── <mobile>/                  # Mobile app (Expo)
│   │   └── src/
│   │       ├── app/               # Expo Router / navigation
│   │       ├── components/        # Shared mobile components (2+ screens)
│   │       ├── design/            # Mobile UI components (isolated, minimal deps)
│   │       ├── libs/              # App-specific shared utilities
│   │       ├── modules/           # Feature modules
│   │       │   └── <domain>/
│   │       │       ├── components/
│   │       │       └── utils/
│   │       ├── store/             # Zustand stores
│   │       └── types/
│   │
│   └── api/                       # Backend (Express or Hono)
│       └── src/
│           ├── routes/            # Route definitions
│           ├── controllers/       # Request/response handling (Express)
│           ├── handlers/          # Request handling (Hono — use instead of controllers/)
│           ├── services/          # Business logic (pure, testable)
│           ├── middlewares/       # Auth, error handler, validation, logging
│           ├── models/            # Prisma models / type definitions
│           ├── utils/             # Helper functions
│           ├── config/            # Env validation (Zod), DB config, constants
│           └── index.ts           # App entry point
│
├── packages/
│   ├── design/                    # Design system (Atomic Design)
│   │   └── src/
│   │       ├── assets/            # Design tokens, icons, fonts
│   │       ├── components/
│   │       │   ├── atoms/         # Button, Input, Icon, Text, Badge
│   │       │   ├── elements/      # FormField, Card, Tooltip, Avatar
│   │       │   ├── molecules/     # SearchBar, NavItem, Dropdown, Modal
│   │       │   └── organisms/     # Header, Sidebar, DataTable, Form
│   │       ├── helpers/           # Design-related utilities
│   │       ├── hoc/               # Higher-order components
│   │       └── hooks/             # UI-related hooks
│   │
│   └── utils/                     # Shared utilities across all apps
│       └── src/
│           ├── apis/              # API endpoint definitions
│           ├── client/            # HTTP client (Axios wrapper)
│           ├── constants/         # Shared constants
│           ├── hooks/             # Shared hooks (including SWR hooks)
│           ├── network/           # Network utilities, interceptors
│           ├── performance/       # Performance monitoring utilities
│           ├── ws/                # WebSocket client class
│           └── utils/             # General utility functions
│
├── .github/                       # CI/CD workflows
├── biome.json                     # Linter/formatter config
├── tsconfig.base.json             # Shared TypeScript config
└── package.json                   # Root workspace config (Yarn)
```

For **single-repo** projects, use the same structure but with only one app (no `packages/` unless shared code emerges naturally).

---

## Component Architecture

### Web Components (shadcn/ui approach)

Components are installed via shadcn/ui CLI and customized in-place. Each component lives in its own folder:

```
components/
└── Button/
    ├── Button.tsx
    ├── Button.scss       # Only if Tailwind alone can't handle it
    └── index.ts          # Re-export
```

Rules:
- shadcn/ui is the foundation for all web UI components
- Tailwind CSS is the primary styling approach — use SCSS only for complex animations, pseudo-element tricks, or cases Tailwind genuinely can't cover
- If a third-party UI dependency is added, wrap it in a component inside `packages/design` so it can be swapped later without touching consumers
- Every component must be reusable by design — accept props for customization, avoid hardcoded values

### Mobile Components (minimal dependency approach)

Mobile uses the same folder structure but without shadcn/ui. Build components from scratch with minimal external dependencies:

```
design/
└── Button/
    ├── Button.tsx
    └── index.ts
```

Rules:
- Minimize external dependencies — fewer deps means faster builds and fewer breaking changes
- Build custom components that match the design system
- Share logic (not UI) with web through `packages/utils`

### Component Placement Decision Tree

When creating a new component, follow this decision tree:

1. **Is it a pure UI primitive with no business logic?** (Button, Input, Modal)
   → `packages/design/src/components/<atomic-level>/`

2. **Is it used by 2+ modules within the same app?**
   → `apps/<app>/src/components/`

3. **Is it used by only one module?**
   → `apps/<app>/src/modules/<domain>/components/`

The same logic applies to utility functions:

1. **Is it used across multiple apps?**
   → `packages/utils/src/` (must have JSDoc with `@example`)

2. **Is it used by 2+ modules within one app?**
   → `apps/<app>/src/libs/` (must have JSDoc with `@example`)

3. **Is it used by only one module?**
   → `apps/<app>/src/modules/<domain>/utils/`

### Classes vs Utility Functions

Use classes when there's state, configuration, or a third-party integration to encapsulate. Use plain functions for stateless, single-purpose utilities.

**When to use a class:**
- **Third-party API integrations**: Every external API (Stripe, SendGrid, AWS S3, etc.) gets its own class that wraps the SDK. This isolates the dependency, makes it swappable, and provides a consistent internal interface:
  ```typescript
  // services/PaymentService.ts
  export class PaymentService {
    private client: Stripe;

    constructor(apiKey: string) {
      this.client = new Stripe(apiKey);
    }

    async createCharge(amount: number, currency: string): Promise<Charge> {
      return this.client.charges.create({ amount, currency });
    }

    async refund(chargeId: string): Promise<Refund> {
      return this.client.refunds.create({ charge: chargeId });
    }
  }
  ```
- WebSocket connections, database clients, or anything with lifecycle (init/destroy)
- When multiple related methods share configuration or state

**When to use a plain function:**
- Stateless, single-purpose transformations (`formatDate`, `slugify`, `calculateTax`)
- Pure utility logic with no side effects

**Dependency policy for utilities:**
- Prefer dependency-free implementations for small utilities — write them in `packages/utils/` with JSDoc + `@example`
- Use an npm package only when: the implementation is long and complex, it's out of scope for the project (e.g., date parsing, cryptography), or maintaining it in-house would be a burden
- If in doubt, start dependency-free. It's easier to add a dependency later than to remove one

### Before Creating Any Function or Component

Always check `packages/utils/` and `apps/<app>/src/libs/` first. If a similar function exists:
- Extend it if it's missing functionality (without breaking existing consumers)
- Use it as-is if it covers the need
- Never create a duplicate

---

## Atomic Design Levels

| Level     | Description                          | Examples                          |
|-----------|--------------------------------------|-----------------------------------|
| Atoms     | Smallest indivisible UI units        | Button, Input, Icon, Text, Badge  |
| Elements  | Single-purpose composed atoms        | FormField, Card, Tooltip, Avatar  |
| Molecules | Functional groups with local state   | SearchBar, NavItem, Dropdown      |
| Organisms | Complex sections with business logic | Header, Sidebar, DataTable, Form  |

Rules:
- Atoms have no dependencies on other components
- Each level can only import from the same level or below
- Organisms can contain business logic; atoms, elements, and molecules must be pure UI

---

## State Management (Zustand)

### Store Structure

```typescript
// store/useAuthStore.ts
interface AuthState {
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  token: null,
  login: async (credentials) => {
    const { data } = await authService.login(credentials);
    set({ user: data.user, token: data.token });
  },
  logout: () => set({ user: null, token: null }),
}));
```

Rules:
- One store per domain (auth, cart, ui, etc.)
- Keep stores flat — no deep nesting
- Business logic (API calls) can live in store actions, but complex logic should be extracted to services
- Use selectors for derived state to avoid unnecessary re-renders:
  ```typescript
  const userName = useAuthStore((state) => state.user?.name);
  ```
- Never put server-cache data in Zustand — that's SWR's job. Zustand is for client state (UI state, auth, preferences)

---

## Network Layer

### Architecture

```
packages/utils/src/
├── client/
│   ├── HttpClient.ts         # Base Axios wrapper class (shared config, interceptors)
│   ├── UserApi.ts            # Domain API class (extends or uses HttpClient)
│   ├── OrderApi.ts           # Domain API class
│   └── index.ts              # Export all API class instances
├── network/
│   └── interceptors.ts       # Request/response interceptors (auth token, error transform)
└── hooks/
    └── use<Resource>.ts      # SWR hooks per resource (consume API classes)
```

### Base HTTP Client

A single Axios-based class that all domain API classes inherit from:

```typescript
// client/HttpClient.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  protected client: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
      ...config,
    });

    this.client.interceptors.request.use((cfg) => {
      const token = useAuthStore.getState().token;
      if (token) cfg.headers.Authorization = `Bearer ${token}`;
      return cfg;
    });
  }

  protected get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config).then((res) => res.data);
  }

  protected post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, data, config).then((res) => res.data);
  }

  protected put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.client.put<T>(url, data, config).then((res) => res.data);
  }

  protected patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.client.patch<T>(url, data, config).then((res) => res.data);
  }

  protected delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.delete<T>(url, config).then((res) => res.data);
  }
}
```

### Domain API Classes

Each domain gets its own class that extends `HttpClient`. If the file grows too large, split by domain — but all share the same base:

```typescript
// client/UserApi.ts
import { HttpClient } from './HttpClient';

export class UserApi extends HttpClient {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  getAll(params?: UserFilters) {
    return this.get<User[]>('/users', { params });
  }

  getById(id: string) {
    return this.get<User>(`/users/${id}`);
  }

  create(data: CreateUserDto) {
    return this.post<User>('/users', data);
  }

  update(id: string, data: UpdateUserDto) {
    return this.patch<User>(`/users/${id}`, data);
  }

  remove(id: string) {
    return this.delete<void>(`/users/${id}`);
  }
}

// client/OrderApi.ts
import { HttpClient } from './HttpClient';

export class OrderApi extends HttpClient {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  getAll(params?: OrderFilters) {
    return this.get<Order[]>('/orders', { params });
  }

  getById(id: string) {
    return this.get<Order>(`/orders/${id}`);
  }

  cancel(id: string) {
    return this.post<Order>(`/orders/${id}/cancel`);
  }
}
```

```typescript
// client/index.ts — singleton instances
import { UserApi } from './UserApi';
import { OrderApi } from './OrderApi';

export const userApi = new UserApi();
export const orderApi = new OrderApi();
```

### SWR Hooks (consume API classes)

SWR hooks call the API class methods — no raw URLs or fetchers scattered around:

```typescript
// hooks/useUsers.ts
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { userApi } from '../client';

export function useUsers(filters?: UserFilters) {
  return useSWR(['users', filters], () => userApi.getAll(filters));
}

export function useUser(id: string | null) {
  return useSWR(id ? ['users', id] : null, () => userApi.getById(id!));
}

export function useCreateUser() {
  return useSWRMutation('users', (_, { arg }: { arg: CreateUserDto }) =>
    userApi.create(arg),
  );
}
```

Rules:
- Every backend communication goes through a domain API class — no raw `axios.get()` calls anywhere in components or hooks
- `HttpClient` is the single source of Axios configuration (base URL, interceptors, auth headers)
- Split API classes by domain when a single class exceeds ~150 lines
- SWR hooks consume API class methods — they never construct URLs or call Axios directly
- SWR handles all server data caching — never duplicate server data in Zustand
- Mutations use `useSWRMutation` or API class methods + `mutate()` for cache invalidation
- SWR keys use descriptive arrays (`['users', id]`) for precise cache invalidation

---

## Backend Architecture

### Express

```typescript
// routes/userRoutes.ts
import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authenticate } from '../middlewares/auth';
import { validate } from '../middlewares/validate';
import { createUserSchema } from '../models/schemas';

const router = Router();

router.get('/', authenticate, UserController.list);
router.post('/', authenticate, validate(createUserSchema), UserController.create);

export default router;
```

```typescript
// controllers/userController.ts
export class UserController {
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.findAll(req.query);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
}
```

### Hono

```typescript
// routes/userRoutes.ts
import { Hono } from 'hono';
import { UserHandler } from '../handlers/userHandler';
import { authenticate } from '../middlewares/auth';
import { zValidator } from '@hono/zod-validator';
import { createUserSchema } from '../models/schemas';

const app = new Hono();

app.get('/', authenticate, UserHandler.list);
app.post('/', authenticate, zValidator('json', createUserSchema), UserHandler.create);

export default app;
```

### Service Layer

Services contain pure business logic — no HTTP concepts (req, res). This makes them testable and reusable:

```typescript
// services/userService.ts
export class UserService {
  static async findAll(filters: UserFilters) {
    return prisma.user.findMany({ where: filters });
  }

  static async create(data: CreateUserDto) {
    const existing = await prisma.user.findUnique({ where: { email: data.email } });
    if (existing) throw new ConflictError('Email already in use');
    return prisma.user.create({ data });
  }
}
```

---

## API Response Format (RFC 7807)

Follow HTTP standards. No wrappers on success — the status code tells the story.

### Success Responses

```typescript
// 200 OK — single resource
res.json({ id: 1, name: 'John', email: 'john@example.com' });

// 200 OK — paginated list
// Headers: X-Total-Count, X-Page, X-Per-Page, Link
res.set({
  'X-Total-Count': String(total),
  'X-Page': String(page),
  'X-Per-Page': String(perPage),
}).json(users);

// 201 Created
res.status(201).json(createdUser);

// 204 No Content (delete)
res.status(204).end();
```

### Error Responses (RFC 7807 Problem Details)

```typescript
// 400 Bad Request — validation error
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Failed",
  "status": 400,
  "detail": "Request body contains invalid fields",
  "errors": [
    { "field": "email", "message": "Invalid email format" }
  ]
}

// 401 Unauthorized
{
  "type": "https://api.example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Invalid or expired token"
}

// 404 Not Found
{
  "type": "https://api.example.com/errors/not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "User with id 42 not found"
}

// 500 Internal Server Error (production — no details leaked)
{
  "type": "https://api.example.com/errors/internal",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred"
}
```

---

## Error Handling

### Backend — Error Class Hierarchy

```typescript
export class AppError extends Error {
  constructor(
    public status: number,
    message: string,
    public type: string,
    public isOperational = true,
  ) {
    super(message);
  }
}

export class NotFoundError extends AppError {
  constructor(detail = 'Resource not found') {
    super(404, detail, 'not-found');
  }
}

export class ValidationError extends AppError {
  constructor(detail: string, public errors: FieldError[] = []) {
    super(400, detail, 'validation');
  }
}

export class UnauthorizedError extends AppError {
  constructor(detail = 'Invalid or expired token') {
    super(401, detail, 'unauthorized');
  }
}

export class ConflictError extends AppError {
  constructor(detail: string) {
    super(409, detail, 'conflict');
  }
}
```

### Backend — Global Error Middleware

```typescript
const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      type: `https://api.example.com/errors/${err.type}`,
      title: err.message,
      status: err.status,
      detail: err.message,
      ...(err instanceof ValidationError && { errors: err.errors }),
    });
  }

  // Unexpected error — log it, don't expose details
  logger.error(err);
  res.status(500).json({
    type: 'https://api.example.com/errors/internal',
    title: 'Internal Server Error',
    status: 500,
    detail: 'An unexpected error occurred',
  });
};
```

### Frontend — Error Boundaries + Toast

- Wrap route-level components with `ErrorBoundary` to catch render errors
- Use toast notifications for async operation failures (API errors, form submissions)
- Never swallow errors silently — always inform the user

---

## Environment Variables

Validate all environment variables at startup using Zod:

```typescript
// config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = envSchema.parse(process.env);
```

If validation fails, the app crashes immediately at startup with a clear error message — not silently at runtime when the variable is first used.

---

## Testing Standards

### Vitest (Unit & Integration)

- Test files live next to the code they test: `Button.test.tsx` alongside `Button.tsx`
- Test behavior, not implementation — test what the user sees and does
- Use `describe` / `it` blocks with readable descriptions
- Mock external dependencies (API calls, databases), not internal modules

### Playwright (E2E)

- E2E tests live in the app's root: `apps/<project>/e2e/`
- Test critical user flows: login, checkout, form submissions
- Use page object pattern for maintainability
- Never rely on implementation details (CSS classes, test IDs only)

---

## Git Conventions

### Trunk-Based Development

- `main` is always deployable
- Short-lived feature branches: `feat/user-auth`, `fix/cart-total`
- No long-lived branches — merge within 1-2 days
- Use feature flags for incomplete features that need to be merged

### Conventional Commits

```
<type>(<scope>): <description>

feat(auth): implement JWT refresh token rotation
fix(cart): correct total calculation with discount codes
refactor(api): extract user validation to middleware
docs(readme): add deployment instructions
test(orders): add integration tests for order creation
chore(deps): update prisma to v6
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`, `build`

---

## Best Practices Checklist

Apply these on every piece of code:

### TypeScript
- Enable `strict` mode — no exceptions
- No `any` — use `unknown` and narrow with type guards
- Prefer `interface` for object shapes, `type` for unions/intersections
- Use discriminated unions for state machines and variants
- Define return types explicitly on exported functions

### React (Web & Mobile)
- Functional components only — no class components
- Custom hooks for reusable logic — prefix with `use`
- Memoize expensive computations with `useMemo`, not everything
- Use `React.lazy` + `Suspense` for code splitting (web)
- Avoid prop drilling — use composition or context for deep trees
- Keys must be stable, unique identifiers — never array index

### Performance
- Lazy load routes and heavy components
- Virtualize long lists (`react-window` or `FlashList` for mobile)
- Debounce search inputs and other frequent events
- Use `loading` and `error` states from SWR — no manual loading booleans

### Security
- Sanitize all user input — never trust client data
- Parameterized queries only (Prisma handles this)
- CORS configured per environment
- Rate limiting on auth endpoints
- Never store secrets in client code
- Validate request bodies with Zod schemas before processing

---

## i18n (Optional — Ask Per Project)

When i18n is needed, use `react-i18next`:

```
src/
└── locales/
    ├── en/
    │   └── translation.json
    └── tr/
        └── translation.json
```

Rules:
- All user-facing strings must use translation keys
- Never hardcode text in components
- Use namespaces for large apps to split translation files

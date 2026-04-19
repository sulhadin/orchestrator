# Blueprint: saas-starter

## Description
Full SaaS application from zero to production. Covers authentication, database,
API layer, dashboard UI, and deployment. Produces a working, deployed MVP.

## Milestones

### M1 — Project Setup + Database
- Complexity: full
- Phases:
  1. (design) Tech stack RFC — runtime, framework, DB, ORM, auth strategy
  2. (impl) Project skeleton — monorepo/single, configs, linting, base structure
  3. (impl) Database setup — ORM config, connection, base migration [skills: deployment]
- Acceptance Criteria:
  - [ ] Project builds and runs locally
  - [ ] Database connection works
  - [ ] Linting and type checking pass
  - [ ] README with setup instructions

### M2 — Authentication
- Complexity: full
- Phases:
  1. (design) Auth RFC — strategy, token flow, session management
  2. (impl) User model + migration + auth endpoints [skills: auth-setup, crud-api]
  3. (impl) Auth middleware + protected route pattern [skills: auth-setup]
  4. (impl) Login + signup pages + auth state management
  5. (impl) Protected route wrapper + logout flow
- Acceptance Criteria:
  - [ ] User can sign up, log in, log out
  - [ ] Protected routes reject unauthenticated users
  - [ ] Token refresh works transparently
  - [ ] Rate limiting on auth endpoints
  - [ ] Password validation (min 8 chars)

### M3 — Core API + Dashboard
- Complexity: standard
- Phases:
  1. (impl) Core resource CRUD endpoints + validation [skills: crud-api]
  2. (impl) Pagination, filtering, sorting on list endpoints [skills: crud-api]
  3. (impl) Dashboard layout — sidebar, header, responsive shell
  4. (impl) Core resource list + detail + create/edit forms
- Acceptance Criteria:
  - [ ] CRUD operations work end-to-end
  - [ ] Dashboard is responsive (mobile + desktop)
  - [ ] Form validation with user-friendly error messages
  - [ ] Loading and error states handled

### M4 — CI/CD + Deployment
- Complexity: standard
- Phases:
  1. (impl) Dockerfile + docker-compose for local dev [skills: deployment]
  2. (impl) CI pipeline — lint, type check, test, build [skills: deployment]
  3. (impl) Health check endpoint + graceful shutdown [skills: deployment]
- Acceptance Criteria:
  - [ ] `docker-compose up` starts full local environment
  - [ ] CI pipeline runs on every push
  - [ ] Health check returns 200 with version info
  - [ ] Graceful shutdown handles in-flight requests

### M5 — Polish + Launch Readiness
- Complexity: quick
- Phases:
  1. (impl) Error boundaries, 404 page, loading skeletons
  2. (impl) Rate limiting, request logging, error formatting
- Acceptance Criteria:
  - [ ] No unhandled errors in UI
  - [ ] API returns consistent error format
  - [ ] Request logging captures method, path, status, duration

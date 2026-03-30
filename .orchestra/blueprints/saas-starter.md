# Blueprint: saas-starter

## Description
Full SaaS application from zero to production. Covers authentication, database,
API layer, dashboard UI, and deployment. Produces a working, deployed MVP.

## Milestones

### M1 — Project Setup + Database
- Complexity: full
- Phases:
  1. (architect) Tech stack RFC — runtime, framework, DB, ORM, auth strategy
  2. (backend) Project skeleton — monorepo/single, configs, linting, base structure
  3. (backend) Database setup — ORM config, connection, base migration [skills: deployment]
- Acceptance Criteria:
  - [ ] Project builds and runs locally
  - [ ] Database connection works
  - [ ] Linting and type checking pass
  - [ ] README with setup instructions

### M2 — Authentication
- Complexity: full
- Phases:
  1. (architect) Auth RFC — strategy, token flow, session management
  2. (backend) User model + migration + auth endpoints [skills: auth-setup, crud-api]
  3. (backend) Auth middleware + protected route pattern [skills: auth-setup]
  4. (frontend) Login + signup pages + auth state management
  5. (frontend) Protected route wrapper + logout flow
- Acceptance Criteria:
  - [ ] User can sign up, log in, log out
  - [ ] Protected routes reject unauthenticated users
  - [ ] Token refresh works transparently
  - [ ] Rate limiting on auth endpoints
  - [ ] Password validation (min 8 chars)

### M3 — Core API + Dashboard
- Complexity: standard
- Phases:
  1. (backend) Core resource CRUD endpoints + validation [skills: crud-api]
  2. (backend) Pagination, filtering, sorting on list endpoints [skills: crud-api]
  3. (frontend) Dashboard layout — sidebar, header, responsive shell
  4. (frontend) Core resource list + detail + create/edit forms
- Acceptance Criteria:
  - [ ] CRUD operations work end-to-end
  - [ ] Dashboard is responsive (mobile + desktop)
  - [ ] Form validation with user-friendly error messages
  - [ ] Loading and error states handled

### M4 — CI/CD + Deployment
- Complexity: standard
- Phases:
  1. (backend) Dockerfile + docker-compose for local dev [skills: deployment]
  2. (backend) CI pipeline — lint, type check, test, build [skills: deployment]
  3. (backend) Health check endpoint + graceful shutdown [skills: deployment]
- Acceptance Criteria:
  - [ ] `docker-compose up` starts full local environment
  - [ ] CI pipeline runs on every push
  - [ ] Health check returns 200 with version info
  - [ ] Graceful shutdown handles in-flight requests

### M5 — Polish + Launch Readiness
- Complexity: quick
- Phases:
  1. (frontend) Error boundaries, 404 page, loading skeletons
  2. (backend) Rate limiting, request logging, error formatting
- Acceptance Criteria:
  - [ ] No unhandled errors in UI
  - [ ] API returns consistent error format
  - [ ] Request logging captures method, path, status, duration

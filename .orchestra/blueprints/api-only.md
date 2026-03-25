# Blueprint: api-only

## Description
Backend API service without frontend. Database, authentication, RESTful API,
and deployment pipeline. Ideal for microservices or API-first projects.

## Milestones

### M1 — Project Setup + Database
- Complexity: standard
- Phases:
  1. (backend) Project skeleton — framework, configs, linting, structure
  2. (backend) Database setup — ORM, connection, base migration [skills: deployment]
- Acceptance Criteria:
  - [ ] Project builds and runs locally
  - [ ] Database connection works
  - [ ] Lint + type check pass

### M2 — Authentication
- Complexity: standard
- Phases:
  1. (backend) User model + auth endpoints [skills: auth-setup]
  2. (backend) Auth middleware + API key support [skills: auth-setup]
- Acceptance Criteria:
  - [ ] Login, signup, token refresh work
  - [ ] Protected endpoints reject unauthenticated requests
  - [ ] API key auth for service-to-service calls

### M3 — Core API
- Complexity: standard
- Phases:
  1. (backend) Core resource endpoints + validation [skills: crud-api]
  2. (backend) Pagination, filtering, error handling [skills: crud-api]
- Acceptance Criteria:
  - [ ] All CRUD operations work
  - [ ] Consistent error format
  - [ ] Pagination on list endpoints

### M4 — CI/CD + Deploy
- Complexity: quick
- Phases:
  1. (backend) Dockerfile + CI pipeline + health check [skills: deployment]
- Acceptance Criteria:
  - [ ] Docker build works
  - [ ] CI pipeline passes
  - [ ] Health check endpoint returns 200

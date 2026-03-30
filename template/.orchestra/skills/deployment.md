# Skill: Deployment

## When to Use
Phase involves CI/CD setup, Docker configuration, environment management, or production deployment.

## Checklist
- [ ] Dockerfile: multi-stage build (builder + runtime), non-root user
- [ ] docker-compose.yml for local development (app + DB + cache)
- [ ] Environment variables: .env.example with ALL required vars (no secrets)
- [ ] CI pipeline: lint → type check → test → build → deploy
- [ ] Health check endpoint: GET /health (returns 200 + version + uptime)
- [ ] Graceful shutdown handling (SIGTERM → drain connections → exit)
- [ ] Database migrations run automatically on deploy (not manually)
- [ ] Secrets management: never in code, use env vars or secret manager

## Common Mistakes
- Running as root in Docker → security risk
- No health check → orchestrator can't detect unhealthy containers
- Missing .dockerignore → node_modules in image (huge, slow builds)
- Hardcoded secrets in code or Dockerfile
- No graceful shutdown → in-flight requests dropped on deploy

## Patterns
- Multi-stage Docker: `FROM node:22-slim AS builder` → `FROM node:22-slim AS runtime`
- Health check: `HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1`
- CI order: fastest checks first (lint < typecheck < test < build)

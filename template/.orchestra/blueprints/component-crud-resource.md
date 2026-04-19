# Blueprint: component-crud-resource

## Description
Adds a complete CRUD resource to an existing project: DB table, API endpoints,
validation, frontend UI, and tests. Use whenever you need a new entity.

## Parameters
- RESOURCE_NAME: Name of the resource (e.g. "product", "order", "invoice")
- FIELDS: Field definitions (e.g. "name:string, price:number, active:boolean")

## Milestones

### M{N} — {RESOURCE_NAME} CRUD
- Complexity: standard
- Phases:
  1. (impl) DB schema + migration for {RESOURCE_NAME} table [skills: crud-api]
  2. (impl) {RESOURCE_NAME} CRUD endpoints + validation + tests [skills: crud-api]
  3. (impl) {RESOURCE_NAME} list view + detail view + create/edit form
- Acceptance Criteria:
  - [ ] Create, read, update, delete operations work
  - [ ] Input validation on create and update
  - [ ] Cursor-based pagination on list
  - [ ] Proper error handling (404, 422, 500)
  - [ ] Tests cover all CRUD operations + edge cases
  - [ ] UI handles loading, error, and empty states

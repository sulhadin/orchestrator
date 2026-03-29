# Skill: Auth Setup

## When to Use
Phase involves authentication, login, signup, session management, or user identity.

## Checklist
- [ ] Choose auth strategy: JWT vs session-based vs OAuth provider
- [ ] Password hashing: bcrypt (cost 12+) or argon2
- [ ] Token storage: httpOnly cookies (web) or secure storage (mobile)
- [ ] Implement refresh token rotation
- [ ] Rate limit login attempts (5/min per IP)
- [ ] Add CSRF protection if using cookies
- [ ] Validate email format + normalize (lowercase, trim)
- [ ] Hash passwords before storing — NEVER store plaintext
- [ ] Test: login success, login failure, token expiry, refresh flow, rate limiting

## Common Mistakes
- Storing JWT in localStorage (XSS vulnerable) → use httpOnly cookies
- Not invalidating refresh tokens on password change
- Missing rate limiting on auth endpoints
- Returning different error messages for "user not found" vs "wrong password" (information leak)

## Reference Libraries
- `bcrypt` or `argon2` for hashing
- `jose` for JWT (not `jsonwebtoken` — jose is more modern and typed)
- `arctic` for OAuth providers

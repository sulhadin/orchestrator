# Skill: Best Practices

## When to Use
Phase involves web application security, compatibility, or production hardening.

## Checklist
- [ ] HTTPS everywhere — no mixed HTTP/HTTPS content
- [ ] Content Security Policy (CSP) header configured
- [ ] Security headers set: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- [ ] No vulnerable dependencies (`npm audit` clean)
- [ ] Feature detection, not browser detection (`if ('fetch' in window)` not `if (isChrome)`)
- [ ] Valid HTML5 doctype, charset first in `<head>`
- [ ] Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Passive event listeners for scroll/touch events
- [ ] No `innerHTML` with user input — use `textContent` or sanitize
- [ ] All user input validated + sanitized on both client and server

## Common Mistakes
- Mixed HTTP/HTTPS content → browsers block mixed requests
- XSS via `innerHTML` or `dangerouslySetInnerHTML` without sanitization
- Synchronous XHR blocking main thread → use `fetch` with async/await
- Browser detection (`navigator.userAgent`) → breaks on new browsers, use feature detection
- Missing security headers → easy attack vectors
- Using `eval()` or `new Function()` with user input → code injection

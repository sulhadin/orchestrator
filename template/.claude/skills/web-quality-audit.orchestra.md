# Skill: Web Quality Audit

## When to Use
Phase involves comprehensive quality review of a web application — performance, accessibility, SEO, and best practices.

## Checklist

### Performance
- [ ] Core Web Vitals pass (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1)
- [ ] Images compressed and properly sized (WebP/AVIF preferred)
- [ ] JavaScript minified and tree-shaken
- [ ] Critical CSS inlined, non-critical deferred
- [ ] Lazy loading for below-the-fold images and components
- [ ] Caching headers set for static assets (Cache-Control, ETag)

### Accessibility
- [ ] WCAG 2.1 AA compliant (run axe or similar audit)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader tested (proper headings, landmarks, alt text)
- [ ] Color contrast ratios meet minimums

### SEO
- [ ] Unique `<title>` and `<meta name="description">` per page
- [ ] `robots.txt` present and correct
- [ ] Sitemap.xml generated and submitted
- [ ] Structured data (JSON-LD) for key content types
- [ ] Canonical URLs set for duplicate content
- [ ] Open Graph and Twitter Card meta tags present

### Best Practices
- [ ] HTTPS everywhere, no mixed content
- [ ] No vulnerable dependencies (`npm audit`)
- [ ] Error pages (404, 500) are user-friendly
- [ ] Console has no errors or warnings in production
- [ ] No deprecated APIs used

## Common Mistakes
- Optimizing only one metric → all four areas matter for real quality
- Ignoring SEO on SPAs → search engines need server-rendered content or prerendering
- No structured data → misses rich snippets in search results
- Performance testing only on fast networks → test on 3G/slow 4G too
- Missing error pages → users see raw error messages

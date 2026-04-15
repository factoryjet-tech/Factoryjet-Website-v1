# Manchester Page — Pre-Deployment Checklist ✅

## Files & Structure

### Component Files
- [ ] `src/app/uk/manchester/page.tsx` exists
- [ ] `src/app/uk/manchester/layout.tsx` exists (with 5 JSON-LD schemas)
- [ ] `src/app/uk/manchester/metadata.ts` exists
- [ ] `src/app/uk/manchester/ManchesterPage.tsx` exists
- [ ] `src/app/uk/manchester/sections/` folder exists with 18 files:
  - [ ] AIVisibility.tsx
  - [ ] CaseStudy.tsx
  - [ ] CityContext.tsx
  - [ ] CompetitorComparison.tsx
  - [ ] FAQ.tsx
  - [ ] FinalCTA.tsx
  - [ ] Footer.tsx
  - [ ] Hero.tsx
  - [ ] IndustriesGrid.tsx
  - [ ] LogoMarquee.tsx
  - [ ] MarqueeTicker.tsx
  - [ ] MidPageCTA.tsx
  - [ ] Pricing.tsx
  - [ ] ProblemStatement.tsx
  - [ ] ProcessTimeline.tsx
  - [ ] ServiceExplanation.tsx
  - [ ] SocialProof.tsx
  - [ ] StatsBar.tsx

### Image Assets
- [ ] `public/images/manchester/` folder exists
- [ ] Core images (7 files):
  - [ ] hero-people.webp
  - [ ] hero-skyline.webp
  - [ ] northern-quarter.webp
  - [ ] coworking-interior.webp
  - [ ] mockup-responsive.webp
  - [ ] case-before.webp
  - [ ] case-after.webp
- [ ] Industry images (6 files):
  - [ ] industry-finance.webp
  - [ ] industry-health.webp
  - [ ] industry-hospitality.webp
  - [ ] industry-manufacturing.webp
  - [ ] industry-media.webp
  - [ ] industry-tech.webp
- [ ] Additional images (5 files):
  - [ ] mockup-dashboard.webp
  - [ ] mockup-ecommerce.webp
  - [ ] mediacityuk.webp
  - [ ] person-1.webp
  - [ ] person-2.webp
  - [ ] person-3.webp
  - [ ] person-4.webp
- [ ] Logo SVGs (10 files in `public/images/manchester/logos/`):
  - [ ] logo-analytics.svg
  - [ ] logo-education.svg
  - [ ] logo-finance.svg
  - [ ] logo-food.svg
  - [ ] logo-health.svg
  - [ ] logo-legal.svg
  - [ ] logo-logistics.svg
  - [ ] logo-manufacturing.svg
  - [ ] logo-media.svg
  - [ ] logo-realestate.svg
  - [ ] logo-retail.svg
  - [ ] logo-tech.svg

---

## NPM Dependencies

- [ ] `gsap` installed (v3.12+)
  ```bash
  npm list gsap
  ```
- [ ] `@gsap/react` installed (v2.0+)
  ```bash
  npm list @gsap/react
  ```
- [ ] `lenis` installed (v1.1+)
  ```bash
  npm list lenis
  ```
- [ ] `lucide-react` installed
  ```bash
  npm list lucide-react
  ```

---

## Configuration Files

### GSAP Configuration
- [ ] `src/lib/gsap.ts` exists
- [ ] File exports `gsap`:
  ```typescript
  export { gsap, ScrollTrigger };
  ```
- [ ] ScrollTrigger is registered:
  ```typescript
  gsap.registerPlugin(ScrollTrigger);
  ```

### Tailwind CSS
- [ ] `tailwind.config.js` exists in root
- [ ] Config includes colors:
  - [ ] `jet-blue: '#0052CC'`
  - [ ] `jet-orange: '#FF6B35'`
  - [ ] `jet-green: '#10B981'`
  - [ ] `navy: '#0F172A'`
  - [ ] `slate: '#334155'`
- [ ] Config includes keyframes:
  - [ ] `animate-marquee`
  - [ ] `animate-pulse-slow`
- [ ] Content path includes manchester:
  ```javascript
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/uk/manchester/**/*.{js,ts,jsx,tsx}',
    // ...
  ]
  ```

### Root Layout
- [ ] `src/app/layout.tsx` or `src/app/layout.jsx` imports fonts:
  ```typescript
  import { Inter, Poppins } from 'next/font/google';
  const inter = Inter({ subsets: ['latin'] });
  const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
  ```
- [ ] Global CSS imported (if used)

### TypeScript/Module Resolution
- [ ] `tsconfig.json` has `@/` alias:
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

### Next.js Config
- [ ] `next.config.mjs` or `next.config.js` exists
- [ ] Image optimization enabled (check for `images` config)

---

## Metadata & SEO

### Canonical URL
- [ ] `src/app/uk/manchester/metadata.ts` has correct URL:
  ```typescript
  alternates: { canonical: "https://factoryjet.com/manchester" }
  ```
  (or your actual deployment domain)

### Open Graph
- [ ] OG title updated (if needed)
- [ ] OG description updated (if needed)
- [ ] OG image path correct
- [ ] OG locale: `en_GB` (correct for Manchester)

### JSON-LD Schemas in layout.tsx
- [ ] LocalBusiness schema present
- [ ] Service schema present
- [ ] BreadcrumbList schema present
- [ ] HowTo schema present
- [ ] FAQPage schema present

### All scripts properly injected as `<script>` tags with `dangerouslySetInnerHTML`

---

## Content Updates (if customizing)

- [ ] Hero section text updated (if needed)
- [ ] Service descriptions updated (if needed)
- [ ] Pricing table values updated (if needed)
- [ ] FAQ questions/answers updated (if needed)
- [ ] CTA links updated (WhatsApp, email, contact form)
- [ ] Footer links point to correct pages
- [ ] Contact email address updated
- [ ] Phone number updated

---

## Local Testing (Before Deploying)

### Development Server
- [ ] Run `npm run dev` without errors
- [ ] Server starts on `http://localhost:3000`
- [ ] No console errors when loading page

### Route Testing
- [ ] Visit `http://localhost:3000/uk/manchester`
- [ ] Page loads completely (no blank white screen)
- [ ] Hero section displays with images
- [ ] All sections render without errors

### Image Testing
- [ ] All images load (check Network tab)
- [ ] No 404 errors for images
- [ ] Images have correct paths `/images/manchester/...`
- [ ] SVG logos display correctly

### Animation Testing
- [ ] Scroll down — observe smooth scroll (Lenis)
- [ ] ProcessTimeline section scrolls horizontally smoothly
- [ ] Stats counters animate when scrolled into view
- [ ] Parallax effects in hero work
- [ ] No animation lag or freezing

### Responsive Testing
- [ ] Mobile view (< 640px) — layout stacks properly
- [ ] Tablet view (640px–1024px) — layout adjusts
- [ ] Desktop view (> 1024px) — full layout displays
- [ ] Test on actual devices (iPhone, iPad, Android phone)

### Browser Compatibility
- [ ] Chrome — works
- [ ] Safari — works
- [ ] Firefox — works
- [ ] Edge — works
- [ ] Mobile Safari (iOS) — works
- [ ] Chrome Mobile (Android) — works

### Performance
- [ ] Lighthouse Performance score: 90+
- [ ] Lighthouse SEO score: 100
- [ ] Lighthouse Accessibility score: 90+
- [ ] Lighthouse Best Practices score: 90+
- [ ] No Core Web Vitals warnings

---

## SEO Validation

### Schema Validation
- [ ] Visit Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Paste `/uk/manchester` URL
- [ ] Verify LocalBusiness schema recognized
- [ ] Verify BreadcrumbList schema recognized
- [ ] Verify FAQPage schema recognized

### Meta Tags
- [ ] `<title>` tag correct (Web Design Manchester | AI-Native Agency — FactoryJet)
- [ ] `<meta name="description">` correct
- [ ] `<meta name="robots">` allows indexing: `index, follow`
- [ ] Canonical URL present
- [ ] OG tags present

### Mobile SEO
- [ ] Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Mobile layout responsive
- [ ] Touch-friendly button sizes (48px minimum)
- [ ] No horizontal scroll on mobile

---

## Build & Production Readiness

### Build Test
- [ ] Run `npm run build` — completes without errors
- [ ] No warnings about unused imports
- [ ] Build output shows page route included
- [ ] File size reasonable (check `.next` folder size)

### Static Export (if applicable)
- [ ] If using `output: 'export'`, verify page generates static HTML
- [ ] Check `out/uk/manchester/page.html` exists
- [ ] Static page loads correctly

### Environment Variables
- [ ] No hardcoded API keys or secrets in code
- [ ] All environment-specific config uses `.env.local`
- [ ] Contact form (if present) has correct backend endpoint

---

## Pre-Launch Checklist

- [ ] All checklist items above ✅
- [ ] Code reviewed for typos/errors
- [ ] Links tested (all CTAs work)
- [ ] Contact form tested (submissions received)
- [ ] Analytics tracking code installed (if using)
- [ ] Google Search Console property created
- [ ] Sitemaps submitted to Google
- [ ] No security issues (no exposed keys, HTTPS enforced)
- [ ] Performance budget met (target: < 2s FCP, < 2.5s LCP)

---

## Deployment

### Hosting Platform (Vercel, Netlify, etc.)
- [ ] Deploy to staging environment first
- [ ] Test full flow on staging
- [ ] Verify images serve correctly from CDN
- [ ] Check analytics/monitoring is capturing data
- [ ] Deploy to production

### Post-Deployment
- [ ] Page accessible at `/uk/manchester`
- [ ] HTTPS enabled
- [ ] All images loading from CDN
- [ ] Console clear of errors
- [ ] Lighthouse scores 90+ on production
- [ ] Google Search Console shows page indexed
- [ ] Monitoring/alerts set up

---

## Monitoring & Maintenance

### Weekly
- [ ] Check error logs (if available)
- [ ] Verify page loads without errors
- [ ] Spot-check animations work
- [ ] Monitor Lighthouse scores

### Monthly
- [ ] Review Google Search Console data
- [ ] Check traffic analytics
- [ ] Verify all links still working
- [ ] Run Lighthouse audit again

### Quarterly
- [ ] Update content (if needed)
- [ ] Review and refresh images (if needed)
- [ ] Check for broken external links
- [ ] Verify all schemas still valid

---

## Quick Reference

### Commands
```bash
# Install dependencies
npm install gsap @gsap/react lenis lucide-react

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run Lighthouse audit
npm run lighthouse  # (if configured)
```

### Key Files to Check
```
src/app/uk/manchester/         # Main page
src/lib/gsap.ts               # GSAP config
tailwind.config.js            # Tailwind + colors
tsconfig.json                 # Module paths
public/images/manchester/     # Images
```

### Debugging
```javascript
// Check GSAP in console
window.gsap           // Should be GSAP object
ScrollTrigger         // Should exist

// Check Lenis initialization
// Check Network tab for image loads
// Check Console for JavaScript errors
```

---

## Status

**Last Updated**: 2026-04-14
**Page Status**: ✅ Ready for Deployment
**All Extraction Files**: ✅ Complete
**Documentation**: ✅ Complete

---

## Need Help?

1. **Technical Issues**: Check [MANCHESTER_EXTRACTION_GUIDE.md](./MANCHESTER_EXTRACTION_GUIDE.md)
2. **Quick Summary**: See [MANCHESTER_EXTRACTION_SUMMARY.md](./MANCHESTER_EXTRACTION_SUMMARY.md)
3. **File Inventory**: All files listed above
4. **Common Errors**: See troubleshooting section in extraction guide

---

**Ready to deploy?** ✅ All boxes checked = Go ahead!

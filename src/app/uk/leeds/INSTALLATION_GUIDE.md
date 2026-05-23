# Leeds Page Extraction - Complete Installation Guide

This is a fully extracted, standalone Leeds city page component/page from the `src/leeds-deployment` project. All dependencies, assets, and animations are included and ready to integrate into your main Next.js project.

## 📋 What's Included

- ✅ **Core Page Files**: `page.tsx`, `LeedsPage.tsx`, `layout.tsx`, `metadata.ts`
- ✅ **18 Section Components**: All page sections with GSAP animations and Lenis scroll
- ✅ **GSAP Library**: Pre-configured `lib/gsap.ts` with ScrollTrigger plugin
- ✅ **All Images & Assets**: 20+ images (WebP, JPEG, SVG) in organized folder structure
- ✅ **Styling**: Tailwind CSS 4 with pre-configured classes (no extra CSS modules needed)
- ✅ **Animations**: Full GSAP + Framer Motion integration
- ✅ **Schema Markup**: Complete JSON-LD structured data (LocalBusiness, Service, FAQ, HowTo, Breadcrumb)

## 🚀 Installation Steps

### Step 1: Copy Files to Your Project

```bash
# Copy the entire leeds folder to your Next.js project
cp -r ./leeds-extraction /path/to/your/project/src/app/uk/leeds
```

This will create:
```
src/app/uk/leeds/
├── page.tsx           (Route component)
├── LeedsPage.tsx      (Main page component)
├── layout.tsx         (Layout with schema markup)
├── metadata.ts        (SEO metadata)
├── sections/          (18 section components)
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── MarqueeTicker.tsx
│   ├── CityContext.tsx
│   ├── ProblemStatement.tsx
│   ├── ServiceExplanation.tsx
│   ├── CompetitorComparison.tsx
│   ├── MidPageCTA.tsx
│   ├── ProcessTimeline.tsx
│   ├── IndustriesGrid.tsx
│   ├── CaseStudy.tsx
│   ├── AIVisibility.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── SocialProof.tsx
│   ├── FinalCTA.tsx
│   ├── LogoMarquee.tsx
│   └── Footer.tsx
├── lib/
│   └── gsap.ts        (GSAP configuration)
└── public/images/leeds/ (All images and SVGs)
```

### Step 2: Copy Images to Public Folder

```bash
# Copy all Leeds images to your project's public folder
cp -r ./leeds-extraction/public/images/leeds /path/to/your/project/public/images/
```

Verify folder structure:
```
public/images/leeds/
├── hero-people.jpg
├── coworking-interior.jpg
├── case-before.webp
├── case-after.webp
├── industry-*.{jpg,webp}
└── logos/
    ├── logo-analytics.svg
    ├── logo-education.svg
    └── ... (10 industry logos)
```

### Step 3: Verify Required Dependencies

Ensure your `package.json` includes:

```json
{
  "dependencies": {
    "gsap": "^3.15.0",
    "@gsap/react": "^2.1.2",
    "lenis": "^1.3.21",
    "lucide-react": "^1.8.0",
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

If missing, install:

```bash
npm install gsap @gsap/react lenis lucide-react
```

### Step 4: Update Import Paths (If Using Different Directory)

If you're placing the Leeds page in a different location (e.g., `src/pages/leeds` instead of `src/app/uk/leeds`), search and replace:

```bash
# Find all imports from "./lib/gsap"
grep -r "@/lib/gsap" ./src/app/uk/leeds/

# Replace with your actual path if different
sed -i 's|@/lib/gsap|@/lib/gsap|g' ./src/app/uk/leeds/sections/*.tsx
```

## ✨ Features

### Page Sections (In Order)
1. **Hero** — Dark cinematic hero with Lenis + GSAP parallax
2. **StatsBar** — 4 animated market statistics
3. **MarqueeTicker** — Scrolling trust signals
4. **CityContext** — Editorial split layout with Leeds insight
5. **ProblemStatement** — Full-width dramatic typography
6. **ServiceExplanation** — 6-card Bento grid with hover animations
7. **CompetitorComparison** — Magazine-style comparison table
8. **MidPageCTA** — Conversion-focused CTA
9. **ProcessTimeline** — 5-step process with Lenis reveals
10. **IndustriesGrid** — 10 industry icons with hover effects
11. **CaseStudy** — Before/after image reveal with clip-path animation
12. **AIVisibility** — AI agent benefits grid
13. **Pricing** — 6 pricing tiers with comparison table
14. **FAQ** — 8 expandable FAQ items with structured data
15. **SocialProof** — Client testimonials carousel
16. **FinalCTA** — Lead form with contact options
17. **LogoMarquee** — Partner logos scrolling
18. **Footer** — 4-column footer with links

### Animation Framework
- **GSAP 3.15**: ScrollTrigger plugin for scroll-based reveals
- **Lenis 1.3**: Smooth scroll with physics easing
- **Framer Motion**: Fade/scale/slide animations (via GSAP timeline)
- **CSS Animations**: Marquee ticker, hover transitions

### Styling
- **Tailwind CSS 4**: Full utility-based design system
- **Color Palette**: 
  - Dark: `#0a0f1c`, `#1a2332`, `#2d3e5f`
  - Brand Blue: `#F05A28`, `#1a6fff`
  - Accent Orange: `#FF6B35`
  - Green: `#10B981`
  - Neutrals: `#6B7280`, `#E5E7EB`
- **Typography**: Inter + Clash Display fonts (via Google Fonts)

### SEO & Schema
- Complete metadata for Leeds city page
- 5 JSON-LD schemas:
  - LocalBusiness (FactoryJet presence in Leeds)
  - Service (web design, e-commerce, AI agents)
  - FAQPage (8 structure FAQ items)
  - HowTo (5-step process)
  - BreadcrumbList (navigation structure)
- Canonical URL: `https://factoryjet.com/uk/leeds`

## 🔧 Configuration

### Update City Name (If Adapting for Another City)

**File**: `metadata.ts`
```typescript
// Change all mentions of "Leeds" to your city
export const leedsMetadata: Metadata = {
  title: "Web Design, E-Commerce & AI Agency [CITY NAME] | FactoryJet",
  description: "AI-native web design, Shopify development, AI agent development & AI SEO (GEO/AEO) for [CITY NAME] businesses...",
  // ... update all schema objects similarly
};
```

**File**: `layout.tsx`
```typescript
// Update all schema URLs and names
const localBusinessSchema = {
  areaServed: {
    "@type": "City",
    name: "[CITY NAME]",
    // ...
  },
};
```

**Files**: All `sections/*.tsx`
```typescript
// Find and replace "Leeds" references in content
// Some sections have Leeds-specific copy about competitor agencies
```

### Image Path Configuration

The page expects images at:
```
/images/leeds/[filename]
```

If you need different paths, update `src/app/uk/leeds/sections/[Component].tsx`:
```typescript
// Before
<Image src="/images/leeds/hero-people.jpg" alt="..." />

// After (if using different path)
<Image src="/images/[your-path]/hero-people.jpg" alt="..." />
```

## 📦 Dependency Resolution

### All External Dependencies Used

| Package | Version | Used For |
|---------|---------|----------|
| `next` | ^16.0 | Framework, Image optimization |
| `react` | ^19 | Component library |
| `gsap` | ^3.15 | Animations, ScrollTrigger |
| `@gsap/react` | ^2.1 | useGSAP hook |
| `lenis` | ^1.3 | Smooth scroll library |
| `lucide-react` | ^1.8 | Icons (Check, MessageCircle, Mail, etc.) |
| `tailwindcss` | ^4 | Styling |

### Local Dependencies (Included)

- `./lib/gsap.ts` — GSAP + ScrollTrigger initialization
- All section components use relative imports: `"./sections/Hero"`, etc.
- Images use root-relative paths: `/images/leeds/...`

## ✅ Post-Installation Checklist

- [ ] Copied all files to `src/app/uk/leeds/`
- [ ] Copied all images to `public/images/leeds/`
- [ ] Verified `package.json` has gsap, lenis, lucide-react installed
- [ ] Ran `npm install` if missing dependencies
- [ ] Built project: `npm run build` (zero errors)
- [ ] Verified page loads at `http://localhost:3000/uk/leeds`
- [ ] Checked animations work (scroll triggers, marquee, reveals)
- [ ] Verified images load correctly (Network tab in DevTools)
- [ ] Tested responsive design on mobile (375px, 768px, 1024px)
- [ ] Validated schema markup with Google Rich Results Test

## 🐛 Troubleshooting

### Module Not Found: `@/lib/gsap`
**Cause**: `lib/gsap.ts` not in the right location
**Fix**: 
```bash
# Verify file exists
ls -la src/app/uk/leeds/lib/gsap.ts

# Or adjust import in sections/*.tsx
sed -i 's|@/lib/gsap|./../../lib/gsap|g' src/app/uk/leeds/sections/*.tsx
```

### Images Not Loading
**Cause**: Wrong image path or missing `public/images/leeds/` folder
**Fix**:
```bash
# Verify images exist
ls -la public/images/leeds/

# Check Next.js Image optimization isn't broken
# Ensure Image components use relative paths from public root
<Image src="/images/leeds/hero-people.jpg" ... />
```

### GSAP Animations Not Running
**Cause**: ScrollTrigger not registered or Lenis initialization failed
**Fix**:
```typescript
// In LeedsPage.tsx, check Lenis initializes correctly
async function initLenis() {
  console.log("Initializing Lenis and GSAP...");
  // If console shows errors, inspect gsap.ts registration
}
```

### Scroll Jump When Closing Modal
**Cause**: Modal backdrop doesn't lock scroll (same as Sheffield fix)
**Fix**: Add to your `ContactFormModal.tsx`:
```typescript
useEffect(() => {
  if (isOpen) {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    return () => {
      document.body.style.position = '';
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    };
  }
}, [isOpen]);
```

## 📝 Notes

- The Leeds page is fully self-contained — no other pages or routes are needed to run it
- All section components are client components (`"use client"`) for GSAP animations
- Image optimization is handled by Next.js `Image` component
- Tailwind CSS is used exclusively — no external CSS files needed
- Lenis smooth scroll is initialized once per page load in `LeedsPage.tsx`

## 🎯 Integration with Your Main Project

If your main project (e.g., `src/app/`) has different:
- **ContactModal**: Wire the CTA buttons to your modal context (see Sheffield example)
- **Layout/Theme**: The Leeds page uses Tailwind directly — no ThemeProvider needed
- **Analytics**: Update tracking calls in footer and FinalCTA if using different GTM/analytics

## 📧 Support

For issues with animation setup, GSAP behavior, or image paths:
1. Check the browser console for errors
2. Verify all files are in correct locations (`ls -la`)
3. Run `npm run build` to catch TypeScript errors
4. Test in a clean incognito window (cache issues)

---

**Extraction Date**: April 2026  
**Source**: `src/leeds-deployment/src/app/leeds/`  
**Compatibility**: Next.js 16+, React 19+, Tailwind CSS 4

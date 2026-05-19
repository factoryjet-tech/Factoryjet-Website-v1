# FactoryJet SEO Fix — Claude Code Agent Prompt

You are fixing all SEO issues identified in the FactoryJet SEO audit. The project is a Next.js 14 static export site at `/Users/bhaveshbarot/FactoryJet/website/`. Work through every fix below, one at a time. After all fixes, run `npx tsc --noEmit` and confirm zero errors.

---

## CRITICAL RULES — READ FIRST

- Never break TypeScript — run `npx tsc --noEmit` before finishing
- Never add blue colour (#0052CC, #003D99, #1A6AE8) anywhere
- Never add `<img>` tags — always use `next/image`
- Never write India/offshore references on US or UK pages
- Never say "31-day delivery" — it's 7-day
- Preserve all existing JSON-LD schema, hreflang, and canonical tags
- Do not modify any component logic, styling, or layout — only fix metadata and H1 text

---

## FIX 1 — UK Duplicate Titles (60 critical issues)

**File:** `src/app/uk/[city]/[service]/[platform]/page.tsx`

**Problem:** Line 36 generates `${platformName} Developer in ${city.name} | FactoryJet` for every service. Shopify pages under web-design, seo, ai-seo, ecommerce all get the same title. Google suppresses duplicates.

**Fix:** Include the service name in the title so each service segment has a unique title.

Replace the `generateMetadata` function's title and description with:

```typescript
// Platform display name map — capitalise correctly
const platformDisplayNames: Record<string, string> = {
  wordpress:   'WordPress',
  shopify:     'Shopify',
  webflow:     'Webflow',
  nextjs:      'Next.js',
  framer:      'Framer',
  woocommerce: 'WooCommerce',
}
const platformName = platformDisplayNames[platform] ?? (platform.charAt(0).toUpperCase() + platform.slice(1))

return {
  title: `${platformName} ${service.name} in ${city.name} | FactoryJet`,
  description: `Looking for ${platformName} ${service.name.toLowerCase()} in ${city.name}? FactoryJet delivers expert ${platformName} solutions — ${service.tagline.toLowerCase()}. Get a free quote today.`,
  alternates: {
    canonical: `https://factoryjet.com/uk/${city.slug}/${service.slug}/${platform}`
  }
}
```

This produces unique titles like:
- "Shopify Web Design in Bristol | FactoryJet" ✅
- "Shopify SEO in Bristol | FactoryJet" ✅
- "Shopify Ecommerce in Bristol | FactoryJet" ✅
- "Next.js AI Websites in Bristol | FactoryJet" ✅

Also remove the now-redundant `const platformName = ...` line that existed before the return statement (since it's now inside the return block above).

---

## FIX 2 — Missing H1 Tags (3 critical issues)

These three pages have no H1. Add a visually appropriate H1 as the first heading inside the page's main content area. Match the existing page style — do not add new components or change layout.

### `src/app/(legal)/privacy/page.tsx` or wherever /privacy renders
Add: `<h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>` as the first element inside the main content wrapper. If the file doesn't use that path, find the file that renders `/privacy` and add the H1 there.

### `src/app/(legal)/terms/page.tsx` or wherever /terms renders
Add: `<h1 className="text-3xl font-bold mb-6">Terms of Service</h1>`

### `src/app/(legal)/refund-policy/page.tsx` or wherever /refund-policy renders
Add: `<h1 className="text-3xl font-bold mb-6">Refund Policy</h1>`

To find the correct files, search:
```bash
grep -r "Privacy Policy\|PrivacyPage\|privacy" src/app --include="*.tsx" -l
grep -r "Terms of Service\|TermsPage\|terms" src/app --include="*.tsx" -l
grep -r "Refund Policy\|RefundPage\|refund" src/app --include="*.tsx" -l
```

---

## FIX 3 — Title Tag Length (111 warnings — titles over 65 chars)

Find every page.tsx / layout.tsx file that exports a `metadata` object or `generateMetadata` function with a title longer than 65 characters. Shorten each title to 50–65 chars while keeping the primary keyword intact.

**Rules for shortening:**
- Keep the city/service keyword at the front
- Keep "| FactoryJet" at the end (13 chars)
- Remove filler phrases: "Leading", "Expert", "Professional", "Trusted", "Top-Rated", "- Get a Free Quote"
- Replace `&amp;` entities with `&` in title strings (they inflate char count in HTML but the source should use `&`)
- Max 65 chars total including "| FactoryJet"

**Priority files to fix (from audit — these are the worst offenders):**

| Page | Current (chars) | Target |
|------|----------------|--------|
| `/` (homepage) | 75 chars | "Website Design & Ecommerce Agency | FactoryJet" |
| `/contact` | 77 chars | "Get a Free Quote | FactoryJet" |
| `/about` | 72 chars | "About Us — Web & Ecommerce Agency | FactoryJet" |
| `/portfolio` | 71 chars | "Our Portfolio — 500+ Websites Built | FactoryJet" |
| `/pricing` | 82 chars | "Transparent Pricing — Web & Ecommerce | FactoryJet" |
| `/case` | 75 chars | "Case Studies — Real Client Results | FactoryJet" |
| `/sitemap` | 20 chars (too short) | "Sitemap — All Pages | FactoryJet" |
| `/privacy` | 27 chars (too short) | "Privacy Policy | FactoryJet" → leave as-is, 27 is acceptable |
| `/refund-policy` | 26 chars (too short) | "Refund Policy | FactoryJet" → leave as-is |
| `/author/bhavesh-barot` | 113 chars | "Bhavesh Barot — Founder & CEO | FactoryJet" |
| `/author/rajesh-kumar` | 85 chars | "Rajesh Kumar — Full-Stack Developer | FactoryJet" |
| `/author/vikram-malhotra` | 83 chars | "Vikram Malhotra — UX Designer | FactoryJet" |
| `/author/priya-singh` | 81 chars | "Priya Singh — Mobile-First Strategist | FactoryJet" |
| `/author/anjali-gupta` | 85 chars | "Anjali Gupta — Web Performance Engineer | FactoryJet" |
| `/case/belle-maison-ecommerce-success` | 74 chars | "Belle Maison: ₹1.5 Cr in 120 Days — Case Study | FactoryJet" |
| `/case/grofresh-manufacturing-erp` | 82 chars | "70% Efficiency Gain: Manufacturing ERP — Case Study | FactoryJet" |
| `/case/impulse-branding-migration` | 79 chars | "Impulse Branding: ₹3 Cr Revenue Migration | FactoryJet" |
| `/case/formative-concepts-bim` | 85 chars | "Formative Concepts: 5K Global Visitors — Case Study | FactoryJet" |

After fixing the above named files, use this bash command to find ALL remaining metadata titles over 65 chars in the codebase:
```bash
grep -r "title:" src/app --include="*.tsx" -n | grep -v "og:title\|twitter:title\|//\|og:" | grep ".\{66,\}"
```
Work through each match and shorten to under 65 chars.

---

## FIX 4 — robots.txt Review (9 flagged — informational, selective fix)

**File:** `public/robots.txt`

The audit flagged these bots as fully blocked. Review and ONLY unblock bots that are legitimate search/AI indexers. Keep scraper/training bots blocked.

**UNBLOCK these** (AI answer engines that drive referral traffic):
- `ClaudeBot` — Anthropic's crawler, drives AI visibility
- `PerplexityBot` — Perplexity AI search engine

**KEEP BLOCKED** (data harvesters with no SEO benefit):
- `CCBot` — Common Crawl AI training data
- `Bytespider` — TikTok scraper
- `Cohere-ai` — AI training scraper
- `Diffbot` — commercial data extraction
- `Amazonbot` — Amazon product data
- `Omgilibot` — social media scraper
- `Timpibot` — Italian scraper
- `ImagesiftBot` — image scraper
- `img2dataset` — image training dataset

If `ClaudeBot` and `PerplexityBot` are currently blocked, move them from the blocked section to an `Allow: /` rule or remove their `Disallow: /` entry. Also verify `GPTBot` is allowed.

---

## FIX 5 — Verify & Wrap Up

After all fixes:

1. Run TypeScript check:
```bash
npx tsc --noEmit
```
Fix any TypeScript errors before finishing.

2. Confirm the key fix is correct by checking the platform page title logic one more time.

3. Report back with:
   - List of all files modified
   - Count of titles fixed
   - Any TypeScript errors encountered and resolved
   - Anything that couldn't be fixed automatically and needs manual review

---

## DO NOT TOUCH

- Any v2 component files in `src/components/v2/`
- Any existing JSON-LD schema blocks
- Any hreflang or canonical tags
- Any CSS, Tailwind classes, or animation code
- Any data files in `src/data/` except if explicitly instructed above
- `public/_redirects`
- `next.config.mjs`
- Any US city page content (separate audit scope)

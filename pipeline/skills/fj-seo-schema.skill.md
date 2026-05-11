# Skill: fj-seo-schema
# Use when: generating any page that will be deployed to factoryjet.com (all pages)

## The hard rule: server-side rendered content only

AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do NOT execute JavaScript.
All primary content MUST be in the initial HTML — no client-side rendering for hero copy,
stats, FAQ answers, service descriptions, or city data.

Keep pages as server components (no `"use client"`) wherever possible.
Only add `"use client"` for interactive elements (accordion open/close, form state).

## Semantic HTML requirements

Use these elements, not generic divs:
- `<article>` for case study cards and blog posts
- `<section>` with `aria-labelledby` for page sections
- `<nav>` for navigation and breadcrumbs
- `<aside>` for supplementary content
- `<dl>` / `<dt>` / `<dd>` for service definitions, pricing breakdowns, FAQ term-definition pairs

## Schema.org — mandatory markup per page type

### All pages
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FactoryJet",
  "url": "https://factoryjet.com",
  "logo": "https://factoryjet.com/logo.png",
  "sameAs": []
}
```

### City landing page (`/{country}/{city}`)
```json
{
  "@type": "Service",
  "name": "Web Design in {City}",
  "provider": { "@type": "Organization", "name": "FactoryJet" },
  "areaServed": { "@type": "City", "name": "{cityDisplayName}" },
  "priceSpecification": {
    "@type": "PriceSpecification",
    "priceCurrency": "{locale.currencyCode}",
    "price": "{startingPrice}"
  }
}
```

### FAQ block (every page that has one)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{question text}",
      "acceptedAnswer": { "@type": "Answer", "text": "{answer text}" }
    }
  ]
}
```

### Breadcrumbs (every page below home)
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com" },
    { "@type": "ListItem", "position": 2, "name": "{Country}", "item": "https://factoryjet.com/{country}" },
    { "@type": "ListItem", "position": 3, "name": "{City}", "item": "https://factoryjet.com/{country}/{city}" }
  ]
}
```

## FAQ — no accordion-hidden content

Per SearchPilot research: expanded FAQ content delivers 12–14% ranking uplift.
FAQ answers MUST be static `<p>` tags visible in initial HTML — NOT collapsed inside a client-side accordion.
If you need visual accordion behaviour, use a CSS `<details>`/`<summary>` element (native HTML, server-rendered, accessible).

## Canonical tags

Every page must have `<link rel="canonical" href="https://factoryjet.com/{path}" />`.
City pages at `/uk/london` must not also be indexed at `/uk/london/` (trailing slash variant).

## Cloudflare WAF — AI crawler allowlist

These user-agents must NOT be blocked at the WAF level. Document them in any infra PR:
`GPTBot`, `ClaudeBot`, `PerplexityBot`, `anthropic-ai`, `Google-Extended`, `CCBot`

## llms.txt

`https://factoryjet.com/llms.txt` must exist at site root declaring permitted crawl behaviour.
If generating new pages, ensure they are listed or covered by a pattern in llms.txt.

## Lighthouse targets (acceptance gates)

Every generated page must pass before merge:
- Performance ≥ 95
- SEO: 100
- Accessibility ≥ 95
- Best Practices: 100
- LCP < 1.8s, FCP < 1.0s, CLS < 0.05, TBT < 200ms

## Image rules for SEO

All `<img>` tags: `alt="{descriptive text}"`. Decorative: `alt="" aria-hidden="true"`.
Lazy-load any image below the fold: `loading="lazy"`.
Hero image (if any): `loading="eager"` to avoid LCP penalty.

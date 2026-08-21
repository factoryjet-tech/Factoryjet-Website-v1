# FactoryJet Directory & Portal Listing Pack

**Purpose:** one canonical source for every external profile, so listings stop drifting
apart from the site. Fill any directory form by copy-pasting from Section 1 only.

**Status as of 2026-08-18:** positioning is inconsistent across schema, llms.txt and the
live SoftwareSuggest profile. Section 1 is the tie-breaker. Fix existing profiles (Section 2)
before creating new ones (Section 3).

---

## 1. Canonical data — copy from here, never retype

| Field | Value |
|---|---|
| Company name | FactoryJet |
| Legal entity | FactoryJet Pvt. Ltd. |
| Website | https://factoryjet.com |
| Email | connect@factoryjet.com |
| Phone / WhatsApp | +91 96999 77699 |
| Founded | 2014 |
| Founder | Bhavesh Barot, Founder & CEO |
| Logo | https://factoryjet.com/FinalLogo.svg |
| Primary category | Ecommerce Development Agency |
| Secondary categories | Web Development, Shopify Development, SEO |

### Short description (under 160 chars)
> Ecommerce development agency for DTC and B2B brands. Omnichannel commerce across
> your store, marketplaces and B2B portals. Shopify, Adobe Commerce, BigCommerce, headless.

### Medium description (~60 words)
> FactoryJet is an ecommerce development agency that consults, designs, develops and
> implements omnichannel commerce for DTC and B2B brands. We build unified commerce across
> your own store, marketplaces and B2B portals, so products, inventory, orders and customers
> stay in sync in real time. Platform-agnostic across Shopify Plus, Adobe Commerce,
> BigCommerce, WooCommerce and headless.

### Long description (~120 words)
> FactoryJet is an ecommerce development agency that consults, designs, develops and
> implements omnichannel commerce for DTC and B2B brands. Founded in 2014 and led by
> Bhavesh Barot, the team builds unified commerce across your own store, marketplaces and
> B2B portals, so products, inventory, orders and customers stay in sync in real time.
>
> We are platform-agnostic. We build on Shopify and Shopify Plus, Adobe Commerce (Magento),
> BigCommerce, WooCommerce, headless stacks and Commerceflo, and we recommend the fit for
> your catalogue and order volume rather than pushing one platform. You own and operate what
> we build. There is no FactoryJet subscription and no lock-in.
>
> A decade-plus building commerce for DTC and B2B brands, most of them US-based.

### Services list (use verbatim, in this order)
1. Ecommerce development (Shopify Plus, Adobe Commerce, BigCommerce, WooCommerce)
2. Headless commerce (Next.js + Shopify, Next.js + WooCommerce)
3. Ecommerce migration and replatforming
4. B2B ecommerce portals
5. Omnichannel and marketplace integration
6. Custom web design and development
7. Conversion rate optimisation
8. Ecommerce SEO and AI search visibility

### Do NOT use in listings
- "AI-native web design company" (retired positioning, still live on SoftwareSuggest)
- "AI agency" / "digital marketing agency" as the PRIMARY category — it competes with the
  commerce positioning and puts us in a category we do not win.
- Any pricing figure. Pricing is not published.
- Any claim beyond "500+ businesses" (verified) and "founded 2014" (verified).

---

## 2. Existing profiles — AUDITED 2026-08-18 (measured, logged in via Chrome)

### 2a. Link equity: ZERO across all five

| Portal | Profile | Link to factoryjet.com | rel | SEO value |
|---|---|---|---|---|
| SoftwareSuggest | live, claimed | **NONE** (only a `mailto:`) | — | zero |
| GoodFirms | live | `factoryjet.com/us` (x2) | `nofollow noopener` | zero |
| DesignRush | live | `factoryjet.com/` (x5) | `nofollow` | zero |
| Crunchbase | live | `factoryjet.com/` | `nofollow noopener noreferrer` | zero |
| Clutch | live, vendor access | `r.clutch.co/redirect?...` | tracking redirect, not a direct link | zero |

**Conclusion: the directory strategy contributes nothing to authority and never will.**
Every one of these is nofollow by platform policy. No amount of profile polish changes that.
Their only remaining value is entity consistency for AI answer engines — which is currently
being actively damaged (see 2b and 2c).

### 2b. Broken `sameAs` entries — 3 of 9 are wrong (fix in src/app/layout.tsx:175)

| Entry | Reality |
|---|---|
| `twitter.com/factoryjet` | **Account does not exist.** Real handle is `@FactoryJet_Tech` |
| `facebook.com/factoryjet` | **A stranger's personal profile — "Ernesto Benavides".** Real page is `facebook.com/factoryjetb2b` (per Crunchbase) |
| `instagram.com/factoryjet` | **"Sorry, this page isn't available."** No such account |
| `linkedin.com/company/factoryjet` | Valid, resolves |

Pointing `sameAs` at an unrelated private individual is worse than omitting it. It tells
search engines and LLMs that FactoryJet is that person. Fix before anything else.

### 2c. Contradictions between profiles and the site

| Field | Site / schema | What the profiles say |
|---|---|---|
| Founded | 2014 | Clutch says **2020** |
| Employees | — | Clutch 2-9, Crunchbase 1-10 |
| Pricing | never published | Clutch publishes **"$1,000+ min project, $25-49/hr"** |
| Service mix | commerce-first | Clutch: AI Development 40%, E-Commerce 30%, Web Design 30% |
| Positioning | ecommerce dev agency, DTC/B2B, US | SoftwareSuggest + Clutch + DesignRush all say "AI-native web design for SMBs" |
| Location | US-facing | all say Bengaluru, India |

**Unverified claims currently live on Clutch:** "$100+ Million in measurable business value"
and "98% client satisfaction". Only "500+ businesses" is verified. Remove or substantiate.

**The $25-49/hr rate is the most damaging single line.** It publicly prices the company as a
budget offshore shop, which contradicts the premium commerce positioning everywhere else and
is visible to any prospect who checks. Clutch also shows 0 reviews and no connected socials.

### 2d. Clutch — FIXED 2026-08-18 (verified live)

| Field | Was | Now |
|---|---|---|
| Tagline | "AI-Native Web Design & E-Commerce Development" | "Ecommerce Development for DTC & B2B Brands" |
| Description | "$100+ Million in measurable business value", "98% client satisfaction" | canonical Section 1 copy, unverified claims removed |
| Hourly rate | $25 - $49 / hr | $50 - $99 / hr |
| Year founded | 2020 | 2014 |

Service Lines reset 2026-08-18: **E-Commerce 60% / Web Design 25% / AI 15%** (was AI 40 /
E-Com 30 / Web 30). Saved and confirmed persisted in the vendor dashboard on reload. The
public profile was still rendering the old 40/30/30 at time of writing — Clutch-side cache
or a pending recalculation, since the Company Information edits went live immediately.
**Re-check the public profile in 24h.**

Still open on Clutch:
- **Focus-area sub-allocations are marked Incomplete**: under E-Commerce Development
  (Frameworks And CMS, E-Commerce Systems) and under Web Design (CMS Focus, Frameworks And
  CMS). Incomplete focus areas limit which directories the profile surfaces in. Filling them
  needs a real answer on the platform/framework mix.
- **Social links are paywalled** behind Clutch Verified at $499/yr. Not bought. Given every
  Clutch link is a tracking redirect, this is not worth paying for.
- Min project size left at $1,000+ (only the hourly rate was authorised).
- Sales email still `bhavesh.b@factoryjet.com`, not the canonical `connect@`.
- 0 reviews. This is the single biggest credibility gap on the profile.


### 2f. Full content audit of the other four — 2026-08-18

| Surface | Founded | Location | Rate | Positioning |
|---|---|---|---|---|
| Site / schema | 2014 | India | n/a | ecommerce dev, DTC/B2B, US |
| Clutch (fixed) | 2014 | Bengaluru, India | $50-99 | ecommerce ✔ |
| GoodFirms | **2020** | **Burlington, Ontario, CANADA** | $50-99 | "AI-Native Web Design" |
| DesignRush | **2020** | Bengaluru, India | $49 | "AI-native web design" + WordPress + SEO |
| SoftwareSuggest | — | Bengaluru | — | "AI-native web design" for SMBs |
| Crunchbase | **Oct 1, 2021** | Bangalore, India | — | "AI-native Services as a Software company" |

**Founding date RESOLVED 2026-08-18 — confirmed 2014 by Bhavesh, now aligned everywhere:**

| Surface | Was | Now | Verified live |
|---|---|---|---|
| Site / schema | 2014 | 2014 | already correct |
| Clutch | 2020 | 2014 | yes |
| GoodFirms | 2020 | 2014 | yes |
| DesignRush | 2020 | 2014 | yes |
| Crunchbase | Oct 1, 2021 | 2014 | yes |
| SoftwareSuggest | — | — | no founding-year field exists |

On Crunchbase the month/day (Oct 1) were cleared rather than carried over to 2014 — only the
year is confirmed, so asserting a specific day would have invented a fact.

**GoodFirms lists a Canadian address** — 1606-2087 Fairview Street, Burlington, Ontario —
a country that appears on no other surface and nowhere in the codebase. Either a real
office nobody documented, or wrong. Verify before touching.

**GoodFirms "Service Focus" is entirely mobile app development**: iPhone 25%, Android 25%,
Enterprise Apps 20%, Web Apps 20%, Food Delivery App 10%. FactoryJet does not build mobile
apps. This actively files the company in mobile-app directories and is the single most
wrong thing found in this audit.

**GoodFirms contradicts itself on one page**: "10 plus years building B2B and DTC commerce"
sits directly above "2020".

**Crunchbase description** — "AI-native Services as a Software company helping SMBs solve
everyday business problem with AI" — wrong positioning and a grammar error. Categories lead
with Agentic AI / AI / Digital Marketing, not commerce.

Useful thing found: GoodFirms lists 10 named portfolio clients (Impulse Branding Solutions,
Formative Concepts, Mawa UAE, Belle Maison, Bombay Petals, Grofresh Agrofood, Rukman
Transport, VidaML, CuraShield, WetStone Labs) — candidates for the Clutch review push.

### 2g. Taglines aligned 2026-08-18 — canonical copy live

Canonical tagline: **"Ecommerce Development for DTC & B2B Brands"**

| Surface | Was | Now | Verified live |
|---|---|---|---|
| Clutch | "AI-Native Web Design & E-Commerce Development" | canonical | yes |
| GoodFirms | "AI-Native Web Design & E-Commerce Development" | canonical | yes |
| DesignRush | "AI-Native Web Design & E-Commerce Development" | canonical | yes |
| Crunchbase | "AI-native Services as a Software company..." | canonical short description | yes |
| SoftwareSuggest | "AI-native web design, e-commerce and SEO..." | **BLOCKED** | — |

**SoftwareSuggest is blocked**: its editor lives on a separate vendor portal
(`/vendorsportal/index.php?r=site/login`) with its own login, which is not authenticated in
the browser. Bhavesh must log in there before this one can be fixed.

Also still on Crunchbase: the **long** "Full Description" field still carries the old
"AI-native software company ... SMBs" copy. Only the short description was in scope here.

### 2e. Priority order
1. Fix the 3 broken `sameAs` entries in `src/app/layout.tsx` (5 min, pure downside removal)
2. Remove pricing + unverified claims from Clutch, fix founding year to 2014
3. Align the three stale descriptions to Section 1 copy
4. Stop investing in new agency directories; move to Section 3 Tier 1

---

## 3. New targets, ranked by what they actually do for us

Ranked by real value, not by directory count. Most agency directories are nofollow — their
value is **entity consistency for AI answer engines**, not link equity. Judge them on that.

### Tier 1 — Platform partner directories (highest value, earned not bought)
On-positioning, high-authority, and buyers actually browse them. These need an application
and review, not a form fill.
- Shopify Partner Directory
- BigCommerce Partner Directory
- Adobe Commerce Solution Partner
- WooCommerce Experts (`woocommerce.com/experts`)
- Webflow Experts / Framer Partners
- Vercel Agency Partners

### Tier 2 — Entity / citation surfaces (feed AI answers)
- Google Business Profile
- LinkedIn company page (verify complete)
- Crunchbase (fix existing)
- Wellfound, F6S

### Tier 3 — Free-tool directories (for the AI Visibility Checker)
The free tool is a legitimate reason to be listed, unlike a generic agency profile.
- Product Hunt
- There's An AI For That
- Futurepedia
- SaaSHub, AlternativeTo

### Tier 4 — Review platforms (slow, need real customer reviews to matter)
- G2, Capterra, GetApp, Trustpilot
- An empty profile here is worse than no profile. Only create alongside a review push.

### Explicitly skipping
Bulk "submit to 500 directories" services, paid guest-post networks, and low-quality link
farms. Prior audit found ~90% of existing referring domains are already scraper spam;
adding more actively dilutes the profile.

---

## 4. Execution rules
- One profile at a time. Verify the live result before moving to the next.
- Never let a form's autocomplete overwrite Section 1 copy.
- After each profile goes live, confirm the outbound link exists and record it here.
- When a new profile is confirmed live, add it to `sameAs` in `src/app/layout.tsx`.
- Never automate submissions. Every one is manual and reviewed.

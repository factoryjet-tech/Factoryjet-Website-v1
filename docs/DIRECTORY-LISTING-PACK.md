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

### 2d. Priority order
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

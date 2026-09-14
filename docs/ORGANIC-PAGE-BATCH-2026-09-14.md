# Organic lead page improvements: combined review

Status: local implementation, not committed or pushed. Bhavesh requested one combined push after the page work is reviewed. Do not include unrelated middleware, lead capture, configuration, or untracked project files in this batch.

## Included website files

- src/components/v2/UsHomeSections.tsx
- src/components/v2/UsHomeInteractive.tsx
- src/app/denver/seo/page.tsx
- src/app/sioux-falls/seo/page.tsx
- src/app/nashville/seo/page.tsx
- src/app/austin/seo/page.tsx
- src/app/b2b-ecommerce/page.tsx
- src/app/pricing/page.tsx
- src/app/case-studies/page.tsx
- src/app/case-studies/[slug]/page.tsx
- src/data/case-studies/index.ts

## What changed

First batch: seven homepage exploration links, Belle Maison DTC + B2B positioning, Denver and Sioux Falls buyer-focused introductions/CTAs, real Yadav implementation proof, removal of unsupported benchmarks and physical-office schema.

Second batch: Nashville and Austin introductions, audit offers, deliverable cards, Yadav proof and mid-page CTAs, pricing links, removal of generic benchmark figures and false local-office schema. Corrected ranking timelines, page-speed and review claims. Comparison columns now ask useful proposal questions rather than making blanket accusations about other agencies. Austin's existing no-contract query is addressed as a terms-comparison question; actual commitments are defined in the written proposal.

B2B commerce: corrected Belle Maison copy and image description, linked its case study, added GPSUK proof and a scoping CTA, and made the portfolio grid stack on narrow screens.

Pricing: separate SEO and commerce paths, scope/cost drivers, deliverables, terms, and seven FAQs from the same source as the visible answers. Pricing metadata now describes both services. No prices or contractual commitments invented.

Case Studies: truthful index introduction, a shared registry of ten client engagements confirmed by Bhavesh, statuses shown in the index and matching detail pages, client URLs where appropriate. No staging or temporary Shopify URLs exposed. Five case records updated: Belle Maison, Impulse, Sow Easy, GPSUK and Yadav. Added per-case modifiedDate separate from original publication date. Client Organization schema no longer treats a country-only location label as a street-level local business address.

## Evidence and decisions

- Bhavesh's client confirmations in “Audit FactoryJet organic lead growth” on September 12 establish engagement scope/status. They do not establish measured outcomes.
- US-filtered GSC query/page data, August 12–September 8: “austin no contract seo” had 24 impressions, zero clicks and average position 3.958. This is a small opportunity signal, not validated market volume. The 30 returned rows are a partial breakdown, not property totals.
- Current search results were reviewed for Nashville local SEO and Austin no-contract SEO. No paid DataForSEO calls were made. City search titles were left unchanged; this batch is not a keyword retargeting experiment. The earlier CTR experiment has no established end date in the reviewed records.
- Sow Easy project working agreement: /Users/bhaveshbarot/Documents/Sow Easy <> WooCommerce/AGENTS.md records WooCommerce and Odoo, with Odoo owning stock, pricing and SKU data. Current public case was incorrectly still describing Commerceflo and a live portal. Corrected to the active build.
- Impulse current project package: /Users/bhaveshbarot/Downloads/impulse-branding-website/package.json uses Next.js. Earlier case prose described WordPress + Breakdance and claimed $360K influenced pipeline / +125% traffic. The historical source found was a copy-repositioning memo, not underlying performance evidence. Those figures are not republished in the revised case. This does not assert that results are unavailable or disprove historic work.
- Belle Maison testimonial removed from this review batch because no verbatim-source verification was established. Existing detailed trade functionality retained alongside the owner's DTC + B2B correction.
- Other historical case studies were not substantively re-audited. This is not a certification of every legacy performance metric on the website.
- Google local ranking guidance: https://support.google.com/business/answer/7091?hl=en
- Google Core Web Vitals guidance: https://developers.google.com/search/docs/appearance/core-web-vitals

## Review and validation

Artifact: ../artifacts/page-review/index.html, served at http://127.0.0.1:8765. Seventeen before/after choices include the eight page areas and all nine case details. Generate using ../artifacts/page-review/generate.cjs. It renders source components with shared CSS and targeted Tailwind utilities. Fonts, form controls and excluded components are approximations. It is not a complete Next.js application or a production preview.

Passed: TypeScript, validate-build, tracked imports/static assets, watermark scan, geo routing tests, git whitespace checks. Static rulebook audit found no declared-but-unrendered schema; it also reports pre-existing sitewide coverage gaps, so it is not a full compliance certificate.

Source-render checks: exactly one H1 on Nashville, Austin, B2B, Pricing and Case Studies. All 85 FAQ answers on the first four appear in the rendered HTML and their schema (28 + 20 + 30 + 7).

Browser review September 14: inspected every one of the 17 preview pages at 390px mobile and 1280–1440px desktop widths, plus DOM text-overflow checks across their rendered content. Fixed overlapping case hero stats with responsive columns and smaller long values; corrected large result/portfolio values; allowed the long Yadav domain to wrap in its information card. Replaced the shared shipped-solution heading with neutral project implementation wording. Regenerated preview Tailwind using the literal dynamic-route source and disabled preview animations for stable review. Forms remain disabled, fonts approximate, and selected/excluded sections mean this is not whole-site production QA. The four older cases were checked for layout only, not verification of their historical figures.

Before final publication: review the combined artifact/diff, run Cloudflare build and rendered-page checks, verify live CTA/modal delivery and new links, record deployment date. Do not run a full local Next.js build: project documentation records repeated memory exhaustion. No production verification is claimed for unpublished changes.

# AI Agent Child Pages: India → US Retarget Brief (2026-08-17)

**Binding for all seven pages.** Every agent doing one of these files follows this
document exactly, so the seven pages stay consistent with each other.

## Why

`sitemap-us/sitemap.ts:71-73` records that this cluster was deliberately moved from
`sitemap-india` to `sitemap-us` on 2026-08-06 as a US retarget. The sitemap half was
done. The page half never was. All seven still carry `locale: 'en_IN'`,
`areaServed: 'IN'` and "India" in the title, while sitting in the US sitemap and
receiving 10 sitewide links from SiteHeader and 4 from Footer. This finishes the job.

## Files (one agent each)

```
src/app/services/ai-agent-development/ai-chatbot/page.tsx              1054
src/app/services/ai-agent-development/ai-customer-support/page.tsx      815
src/app/services/ai-agent-development/ai-marketing-agent/page.tsx      1039
src/app/services/ai-agent-development/ai-sales-agent/page.tsx           515
src/app/services/ai-agent-development/ai-scheduling-agent/page.tsx      810
src/app/services/ai-agent-development/ai-voice-agent/page.tsx           811
src/app/services/ai-agent-development/ai-workflow-automation/page.tsx   808
```

## Locked substitutions

Do not improvise on these. If a case is not covered, leave it and flag it.

| India element | US replacement | Notes |
|---|---|---|
| `locale: 'en_IN'` | `locale: 'en_US'` | metadata + any OG block |
| **`locale="in"` / `region="in"` / `region: 'in'` COMPONENT PROPS** | **`"us"` / `'us'`** | **YES, change these too. See the note below.** |
| `areaServed: 'IN'` (string or `{'@type':'Country', name:'India'}`) | `'US'` / `name: 'United States'` | keep the existing shape |
| "India" in title/H1/description | Drop it or use "US" / "United States" | See title rules below |
| **Hindi / regional languages** | **Spanish** | US-relevant: Spanish is the largest non-English language. Do NOT list Indian languages. For voice, "English and Spanish" is the honest claim |
| **WhatsApp as primary channel** | **Phone, SMS and email**, with WhatsApp demoted to one option among several | WhatsApp is not the default US business channel. Do not delete every mention, just stop leading with it |
| **₹ / rupee amounts** | **Remove the number entirely.** Replace with "fixed price after a scoping call" | Do NOT convert at exchange rates. US rates differ structurally and a converted rupee figure would be wrong |
| **IST** | "your business hours" or US time zones (ET/PT) | Prefer "your business hours" where the point is coverage, not a literal zone |
| **TRAI** (telecom regulator) | **TCPA** (Telephone Consumer Protection Act) | Genuinely important for voice/SMS agents in the US. Consent, calling windows, opt-out |
| **DPDP Act** | **CCPA/CPRA** for consumer privacy; **HIPAA** where healthcare is discussed | Do not claim certification, only that the build respects the rule |
| **RBI** | Drop, or "US financial-services rules" if the sentence needs it | Do not invent a specific US regulator |
| Indian cities (Mumbai, Delhi, Bangalore, Pune, Chennai, Hyderabad) | US metros already on the site: Austin, Dallas, Houston, Phoenix, Denver, Chicago, Atlanta | Only where a city is used as an example |

## Title rules

Match the pattern that demonstrably works on this site. `/services/ai-automation`
("AI Automation Agency in the USA for Small Businesses") holds positions 2-6 on
USA-qualified terms, while its bare head term sits at 55. So **keep a US qualifier in
the title.**

Format: `<Service> for US Businesses | FactoryJet` or `<Service> Development USA | FactoryJet`.
Do not target the bare head term alone. Keep titles under ~60 characters where possible.

## Do NOT touch

- Page structure, component imports, section order, JSX layout, Tailwind classes
- The FAQ **mechanism**: FAQ schema must keep deriving from the FAQ array via `.map()`.
  Never hand-write a second FAQ literal next to a `<script type="application/ld+json">`
- Any `<h1>`/`<h2>` hierarchy (exactly one h1)
- Files other than your assigned one
- `sitemap-us/sitemap.ts` (the lead is handling that separately)

## Writing rules (from CLAUDE.md and the house style)

- **No em dashes.** Use commas, periods, parentheses, colons
- Human, conversational, plain language. No AI-slop phrasing, no "unlock", no "seamless"
- Do not invent statistics, client names, case-study numbers or certifications
- Do not add pricing figures. "Fixed price after a scoping call" is the house line
- Keep claims checkable. If the India version made a claim that only made sense in India,
  cut it rather than inventing a US equivalent

## Verification before you report done

```bash
npx tsc --noEmit                          # must exit 0
node scripts/validate-build.mjs           # must pass
node scripts/check-tracked-imports.mjs    # must pass
grep -c '—' <your file>                   # must be 0
grep -ciE '\bindia\b|\bindian\b|\bhindi\b|₹|\bIST\b|\bTRAI\b|\bDPDP\b' <your file>   # must be 0
```

> ⚠️ **Fixed 2026-08-17 after the first agent tripped it.** The original pattern was
> `'india\|hindi\|₹\|\bIST\b\|TRAI\|DPDP'`, which has no word boundary on TRAI, so under
> `-i` it matches **"trail"**. Any page saying "audit trail" reports non-zero and looks
> like a failure. `india` without a boundary also matches "Indiana". Use the bounded
> pattern above. **Do not reword real content to satisfy the old broken check.**
>
> Related judgement call: the phrase "500+ businesses across India, US, UK and UAE" is a
> **true statement about the client base**, not a geo-targeting signal. Leaving "India" in
> a factual sentence like that is correct even on a US page. Only remove "India" where it
> is targeting or positioning, not where it is a fact about the company.

**Never run `next dev` or `next build`.** Rendering this app locally has OOM'd the
machine (67GB, three restarts). Verify with the commands above only.

## Report back

- Confirmation the five checks above pass
- Anything you left in place and why
- Any claim you cut rather than translated

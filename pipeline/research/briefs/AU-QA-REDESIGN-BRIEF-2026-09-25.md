# Australia QA + visual refresh + redesign: shared agent brief (2026-09-25)

Read this whole file, then `AU-BUILD-AGENT-BRIEF-2026-09-25.md` and the briefs it names. Those rules still apply (content, writing, schema, no prices, services language, image review, no local render, no git).

## What you are doing
You own the files named in your prompt and nothing else. Other agents are editing the other AU pages at the same time.
- **QA agents (live pages):** screenshot the LIVE page, find every visual and layout problem, fix it in code, and refresh the images so each one matches the section it sits in.
- **Redesign agents (/au/seo and the city pages):** rebuild the page in the same design system as the new AU pages (`src/app/au/ai-agents/page.tsx` is the reference: `au-svc` wrapper, `../au-service.css`, SiteHeader locale "au", SiteFooter with AU_FOOTER_COLUMNS), keeping everything that earns search traffic (see "Redesigns" below).

## Tools (use exactly these; never run next dev/build or render the app locally)
- **Screenshots of the live site:** `python3 /private/tmp/claude-501/-Users-bhaveshbarot-FactoryJet-website/346e5cb5-53db-429f-aabd-43b3d419a7ec/scratchpad/qa-tools/shot.py <live url> <your scratch folder>/shots-before`. Produces desktop (1440) and mobile (390) screens. Open them with the Read tool and look at every one.
- **Images:** `node /private/tmp/claude-501/-Users-bhaveshbarot-FactoryJet-website/346e5cb5-53db-429f-aabd-43b3d419a7ec/scratchpad/qa-tools/gen.mjs <out.png> "<prompt>"`. Default model is `openai:gpt-image@2.5-flare` (the newest model; it won today's bake-off on hands, screen geometry and local detail). Then resize with ImageMagick (`magick in.png -resize WxH^ -gravity center -extent WxH out.png`) and `cwebp -q 82`.
- Work only inside your own scratch subfolder (named in your prompt). Never touch other agents' folders.

## Visual QA checklist (desktop AND mobile, every screen)
1. Layout: nothing overflowing, cut off, overlapping or squashed; tables scroll sideways on mobile instead of breaking the page; no giant empty gaps; no walls of text longer than about one screen without a visual break (image, card grid, table, callout).
2. Hierarchy: one H1; headings in order; eyebrow, heading and lead consistent with the reference page; section spacing consistent.
3. Contrast and type: body text readable (4.5:1); small orange text uses #B23E13; never white text on #F05A28 below ~18px; no text over busy image areas.
4. Components: cards equal height in a row, buttons consistent, hover cards look clickable, FAQ filter and `<details>` expanders visibly interactive (chevron or plus), the comparison table's FactoryJet column highlighted.
5. Images: every image matches the topic of the section it sits in (context aware: a receptionist section shows a front desk or a tradie on a call, a Shopify section shows a store being built, a privacy section shows a calm office planning session, etc.), not a generic office shot reused anywhere. Hero images must tell the page's story at a glance.
6. Brand: cream background, light hero, at most one dark section, Plus Jakarta Sans / Inter / Geist Mono only, no gradient text, no glow, no count-up numbers.

## Image refresh rules
- Replace any image that is generic, repeated across AU pages, weakly matched to its section, or visually weaker than the rest. Aim for **5 to 7 images per page**, each placed where it breaks up text and matches the section.
- Australian context (real Australian light, streets, workplaces; Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra where the page mentions them). Prompt the exact scene the section describes.
- Mandatory full-size review of every new image: hands (five fingers), faces, no text or numbers on screens, no logos or real brands, **screen geometry** (if someone looks at a screen it faces them; prefer over-the-shoulder shots), and that the scene matches the section. Regenerate until it passes.
- Keep filenames stable where possible (overwrite in place) and update `alt` text to describe the new image. Record prompts and review notes in the page's `IMAGE-CREDITS.txt`.
- Do not duplicate an image used on another AU page.

## Redesigns (/au/seo, /au/melbourne, /au/brisbane, /au/adelaide, /au/canberra)
- Keep: URL, canonical, the page's primary keyword targets in title/H1/meta, all genuinely useful copy, the FAQ set (FAQPage schema must still map the rendered array), sources, city-specific facts, and structured data (Organization only by `@id`; no phone numbers; no LocalBusiness office claims in a city where we have no office).
- Rebuild the layout in the new AU design system with the same quality bar as the new AU pages: answer-first block, image-led sections, comparison table, `<details>` expanders, hover cards to sibling AU pages, mid-page CTA, final CTA, 5 to 7 context-aware images. Minimum 3,000 words of visible copy (keep existing copy where good; extend with real value using the AU research data in `pipeline/research/data/market-au-2026-09-24/`).
- Link to the hub `/au` and at least 4 sibling AU pages. City pages link to the other AU cities.
- Existing section components under the page folder may be deleted or replaced if the new page no longer imports them; list anything removed in your report.

## Hard rules repeated
No em dashes; no prices or currency figures; no "India", "Bengaluru" or "offshore team" wording about FactoryJet; no invented client stories or examples presented as real; company name "FactoryJet" only; 7-day delivery means websites up to 5 pages ("7-day delivery", never "guarantee"); registered (never "certified") Shopify Partner; Belle Maison was built on Commerceflo.

## Before you finish
- Parse-check every file you changed (the TypeScript parser command from the base brief).
- Re-grep your files for em dashes, currency, banned words and "India".
- Report (under 400 words): files changed; problems found per screen and how you fixed each; images replaced (old vs new scene, review notes); anything you could not fix in your own files (for example a change needed in the shared `au-service.css` or `SiteHeader`), with the exact change you recommend.

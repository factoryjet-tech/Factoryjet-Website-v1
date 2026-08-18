# Referring Domains: the real baseline and what to do about it
**2026-08-18.** Supersedes the "63 referring domains" figure used in planning.

Referring domains are the binding constraint on US organic growth. Our three
largest commercial pools are gated by incumbent authority, not by content:
web design (148,000/mo), ecommerce development (7,270/mo), chatbots (1,960/mo).
Everything currently reachable totals 4,000-5,000 searches/mo. See
`factoryjet-winnability-is-incumbent-authority` for the method.

---

## 1. The correction: we have almost no link profile at all

We have been planning against 63 referring domains. That number is real but it
is not what it sounds like.

| Filter | Count |
|---|---:|
| Live referring domains (DataForSEO, lost excluded) | 60 |
| Minus obvious scraper-directory spam | 28 |
| Minus rank-0, single-backlink domains that appeared in the July-August burst | **8** |

Reproduce with `dfs_referring_domains_audit.py`.

The 32 dropped at step one are not a judgement call. They fail DataForSEO's own
spam score, or carry names like `eliterankdirectory.com` and
`worldbusinesspromote.com`, or are domains that nobody links to which link to us
exactly once. The 20 dropped at step two share one signature: rank 0, one
backlink, first seen inside the last 60 days. `jadasquad.com` picked up the same
domains in the same window, which is the tell that a scraper network sprayed the
whole niche rather than that anyone chose to link to us.

The step-two filter is blunt and has at least one false positive: `crunchbase.com`
is a real profile and gets caught by it because DataForSEO reports it at rank 0.

**Treat the genuinely earned count as under ten.** Not 63. The practical
consequence: we are not "behind on links", we are starting from zero. Every
comparison that used 63 as a base was measuring noise.

---

## 2. The finding that changes the plan

**We already have live profiles on the three directories that own the SERPs, and
not one of them links to us.**

Our sitewide Organization schema (`src/app/layout.tsx`) asserts `sameAs` profiles
on five directories. Those pages 403 a plain curl, so they were checked
server-side with `dfs_directory_profile_check.py`:

| Profile | HTTP | Links to us? |
|---|---|---|
| `clutch.co/profile/factoryjet-private` | **200** | **No** |
| `goodfirms.co/company/factoryjet-private-limited` | **200** | **No** |
| `designrush.com/agency/profile/factoryjet` | **200** | **No** |
| `softwaresuggest.com/factoryjet` | 403 (bot-blocked, not dead) | No |
| `crunchbase.com/organization/factoryjet` | 403 (bot-blocked, not dead) | **Yes** |

Checked against the full referring-domain list including lost links: Clutch,
GoodFirms, DesignRush and SoftwareSuggest have **never** linked to us. These are
not links we won and lost. They were never turned on.

The Clutch profile is live, titled "FactoryJet Private Limited", and its meta
description is our own marketing copy ("500+ small and medium businesses"). The
profile exists and is populated. It just does not point anywhere.

This matters more than the raw link count. Clutch, DesignRush, GoodFirms and The
Manifest occupy 9-10 of the 10 results on every superlative SERP we measured
("best web design company" and its variants). We are never going to outrank them.
Being listed *inside* them is how that demand gets captured, and the link is the
side effect, not the point.

---

## 3. Fifteen links already sitting there unclaimed

`dfs_unlinked_mentions.py`, re-run 2026-08-18. These sites name FactoryJet in
their own published content and do not link. The editorial decision is already
made, which is why this converts far better than cold outreach.

**Directory profiles that exist but do not link** (highest value, lowest effort):
- `clutch.co/profile/factoryjet-private`
- `goodfirms.co/company/factoryjet-private-limited`
- `designrush.com/agency/profile/factoryjet`
- `softwaresuggest.com/factoryjet`
- Capterra, listing ID 1071448, live on 10 country domains (`.com.au .ca .co.uk
  .in .ie .co.nz .co.za .com.sg .ae .co.il`)

**Editorial mentions in roundups** (real, verified 200, and topically exact):
- `kerneltech.net/blog/best-e-commerce-development-agencies-usa/` — "Best
  E-commerce Development Services USA". Names us, no link. This is our exact
  service and exact market.
- `techmagnate.com/blog/best-aeo-agencies-for-bfsi-india/` — "9 Best AEO Agencies
  for Fintech & Banking in India 2026". New since 03 Aug. Techmagnate is an
  established agency with real authority.
- `vipulpore.com/top-10-website-design-companies-in-mumbai/`
- `internshala.com` company page

Capterra's outbound vendor links are frequently nofollow, so count that one for
referral traffic and brand presence rather than for authority. Clutch, GoodFirms
and DesignRush profile links are ordinarily followed.

---

## 4. What to do, in order

**1. Claim the four directory profiles.** They exist. Each needs the website
field completed and the profile verified. This is the single highest-confidence
action available and it is a few logins, not a project.

On Clutch specifically, the profile does nothing until it carries verified client
reviews. A Clutch profile with zero reviews does not surface in their listings,
which is where the buyer demand actually is. Three to five reviews from past
clients is what converts this from a link into a lead source.

**2. Ask for the four editorial links.** Short, specific, one paragraph each.
`kerneltech.net` and `techmagnate.com` are the two worth real effort: both are
topically exact and both already wrote the sentence.

**3. Then, and only then, promote the research asset.** `/ai-citation-study` is
genuinely novel data and it is the only thing we own that earns links from
strangers. It has earned none, because nobody knows it exists. That is a
distribution problem, not a content problem. Do not deepen the page. Put it in
front of people.

**Do not buy links. Do not automate outreach.** Rule 20,
`factoryjet-authority-vs-citation`.

---

## 5. What this will not fix

Links buy Google rankings. They do not buy AI citation. `netalico.com` with 557
referring domains is cited 17 times across our buyer prompts while
`outerboxdesign.com` with 4,718 barely appears. Do not conflate the two, and do
not expect movement in ChatGPT or Perplexity mentions from any of the above.

Even executed perfectly, section 3 yields roughly 15 referring domains. That
opens nothing gated. `website redesign services` needs 191 and `ecommerce
development company` needs 639. What it does is take us from a fabricated 63 to
a real 20-odd, which is the floor you need before any link-earning asset has a
chance of compounding.

---

## Scripts
- `dfs_referring_domains_audit.py` — real vs junk classification of our profile
- `dfs_directory_profile_check.py` — do claimed `sameAs` profiles exist and link back
- `dfs_unlinked_mentions.py` — sites that name us without linking
- `dfs_link_gap.py` — sites linking to competitors but not us. Note: the top of
  its output is almost entirely the same scraper-directory network. Filter hard
  before using it.

# Backlink outreach playbook (2026-08-03)

Drafts and target lists. **A human sends every one of these.** Nothing in this repo contacts,
posts, or submits anything, and that is deliberate: automated placement is a Google link-scheme
violation and at 53 referring domains we would be risking a recoverable position for an
unrecoverable one.

Data behind this: `data/unlinked_mentions.csv`, `data/link_gap.csv`, `data/backlinks_profile.json`.

---

## Where we actually stand

- **53 referring domains.** Competitor median 1,799.
- **But that median is inflated.** Up to 38% of some rivals' profiles are rank-0 link farms
  (`iwdagency.com` 38%, `magefan.com` 23%, `heycarson.com` 19%). The cleanest profile in the set,
  `digitalsuits.co` at 1% junk, has *more* referring domains than the dirtiest. Do not copy the farms.
- **584 genuinely qualified prospects** in `link_gap.csv`: sites at domain rank ≥40 that already
  link to 2+ of our rivals but not to us.
- **18 unlinked brand mentions**, of which realistically ~3 are worth acting on (see below).

---

## Campaign 1 — Unlinked mentions (highest conversion, smallest list)

Someone already decided to write about us. They just did not hyperlink. This converts far better
than cold outreach because the editorial judgement is already made.

**Honest triage of the 18 found:**

| Target | Verdict |
|---|---|
| `kerneltech.net/blog/best-e-commerce-development-agencies-usa/` | **Act.** We are named in a US agency listicle with no link. |
| `vipulpore.com/top-10-website-design-companies-in-mumbai/` | **Act.** Named in a listicle, no link. |
| Capterra (10 ccTLD variants of one listing) | **One action, not ten.** Claim/complete the profile once. |
| `clutch.co` profile | Likely nofollow. Complete it for the referral traffic, not the link. |
| `internshala.com` job listings | Low value, skip. |
| `couponsplusdeals.com`, `greenpromocode.com` | Coupon spam. Skip. |
| `blogsbmsites.com`, `seosbmnews.com` | Look like PBN. **Do not pursue.** |

**Draft — unlinked mention**

> Subject: quick one about your e-commerce agency roundup
>
> Hi [name],
>
> You included FactoryJet in [article title] — thank you, genuinely.
>
> One small thing: the mention isn't linked. If you're willing, factoryjet.com would help readers
> who want to check us out without searching.
>
> Either way, one thing you might find useful for the piece: we published a study measuring 58 pages
> that Google AI Overviews actually cite. The median is 2,813 words, not the 5,000-plus that gets
> recommended, and FAQ schema showed up on only 41% of them. Data and method are open if it's useful
> to you: factoryjet.com/ai-citation-study
>
> Bhavesh
> Founder, FactoryJet

Rules: name the actual article, ask once, never follow up more than once, and give them something
useful whether or not they add the link.

---

## Campaign 2 — The research asset (highest ceiling)

`/ai-citation-study` is the strongest link asset we have, because it is original data on a question
the trade press is actively covering, and because it contradicts widely repeated advice with numbers.

**Angles that make it newsworthy**

1. **"Domain authority didn't predict AI citation."** netalico.com with 557 referring domains was
   cited 17 times; outerboxdesign.com with 4,718 barely appeared on the same prompts.
2. **"The 5,000-word advice is wrong."** Median cited page: 2,813 words. Only 3 of 58 exceeded 6,000.
3. **"FAQ schema isn't the lever."** Present on 41% of cited pages; Google says no special schema is
   needed at all.
4. **"llms.txt is a dud."** Google says no AI system uses it; Ahrefs found 97% of files got zero
   requests across 137,000 domains.
5. **"A fabricated stat is circulating."** The "pages under 125 words convert 15% higher" figure
   attributed to Unbounce is not in that report, and we found it in two separate AI-written research
   reports.

**Who to pitch:** Search Engine Land, Search Engine Journal, Search Engine Roundtable, Aleyda
Solis's newsletter, Growth Memo, the Ahrefs and Semrush blogs, and relevant subreddits where
self-promotion rules allow data posts.

**Draft — press/newsletter pitch**

> Subject: data: we measured 58 pages Google AI Overviews actually cite
>
> Hi [name],
>
> We captured 232 AI Overview citations across 12 commercial queries, fetched the 58 most-cited
> pages, and measured them. Three findings that cut against the current advice:
>
> - Median cited page is 2,813 words. Only 3 of 58 were over 6,000.
> - FAQPage schema appeared on 41%. A visible FAQ section appeared on 72%.
> - Domain authority did not predict citation: a site with 557 referring domains was cited 17 times
>   across nine buyer prompts while one with 4,718 barely appeared.
>
> Method, raw data and limitations are all published, including the four things the study can't tell
> you. Happy to share the underlying JSON or answer questions.
>
> factoryjet.com/ai-citation-study
>
> Bhavesh, Founder, FactoryJet

Lead with the finding, not the company. Include the limitations up front, because that is what makes
a journalist trust the rest.

---

## Campaign 3 — Qualified prospects (`link_gap.csv`, 584 domains)

Sites at rank ≥40 already linking to 2+ rivals. Work highest rank first. Genuine ones near the top:
`accio.com` (rank 157), `subdomainfinder.io` (184), `casestudies.com` (137), `mgt-commerce.com`
(116), `businessfirms.co` (94), `mobileappdaily.com` (84).

**Before contacting anyone, check the page.** If the rival link sits in a paid listing or a link
farm, skip it — the CSV is unfiltered on intent.

**Draft — resource/roundup pitch**

> Subject: addition for [page title]
>
> Hi [name],
>
> You list [rival] on [page]. We work the same space, specifically [migration path / B2B ERP
> integration], and published something your readers may find more useful than another agency
> listing: a study of 58 pages Google AI Overviews actually cite, with the raw data open.
>
> If it fits, factoryjet.com/ai-citation-study. If not, no problem at all.
>
> Bhavesh

---

## Never do

- Automated posting, directory submission, or comment placement.
- Buying links, PBNs, or reciprocal schemes.
- Copying the link-farm approach some rivals use. We have no evidence it helps them, clear evidence
  it does not drive citation, and the downside is a penalty on the low-KD long-tail positions that
  are currently our only working channel.
- More than one follow-up per contact.

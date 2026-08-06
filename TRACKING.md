# FactoryJet — Conversion & Analytics Tracking (single source of truth)

**Last consolidated: 2026-07-02.** Read this before changing anything analytics-related.

## The one rule

**GTM is the ONLY tag system. Code never calls `gtag('event', …)`.**
The site fires **dataLayer events**; the GTM container `GTM-PKWD8SHF` turns those
into GA4 events and Google Ads conversions. This split is what stops the
"fix it every other day" churn — there is exactly one place each conversion fires.

Do **not** re-introduce `gtag('event','conversion')` / `gtag('config', …)` in the
codebase. If you need a new conversion, push a dataLayer event and add a GTM
trigger. That's it.

## Accounts & IDs

| Thing | ID |
|---|---|
| GTM container | `GTM-PKWD8SHF` (account 6332650021 / container 239923059) |
| GA4 property | `G-N40S2Q8E1J` (property 516928458) — the ONLY GA4 property |
| Google Ads — London (customer 339-170-2199) | `AW-11127037244` |
| Google Ads — US | `AW-18185532850` |
| Microsoft Clarity | in GTM (`Microsoft Clarity` custom HTML tag) |

`G-ZZ03T8W2VR` is **foreign** — it is NOT a FactoryJet property. It was being
auto-loaded by a **linked GA4 destination on the Google Ads "Google tag"
settings**. Removed 2026-07-02. If GA4 errors return, check Google Ads → Google
tag → linked destinations first.

## How each conversion fires (all via GTM)

| Conversion | Trigger (GTM) | GA4 event | Google Ads |
|---|---|---|---|
| **Form lead** | `lead_converted` dataLayer event (pushed once by `/thank-you`) | `generate_lead` (all regions) | region-routed: `region=uk` → London `AW-11127037244/aqsvCJCk8ZQcELy65Lkp`; `region=us` → US `AW-18185532850/rZxjCNuivbQcELLrxN9D`; other regions → GA4 only |
| **WhatsApp click** | auto link-click on `wa.me` | `whatsapp_click` | `AW-18185532850/6wamCKXenbwcELLrxN9D` |
| **Book a call** | auto link-click on `calendly.com` | `book_call_click` | `AW-18185532850/YcYBCJLMtsMcELLrxN9D` |
| **Email click** | auto link-click on `mailto:` | `email_click` | — |
| **Phone click** | auto link-click on `tel:` | `phone_click` | — |

Plus always-on: **Conversion Linker** + **Microsoft Clarity** (All Pages).

**No conversion carries a hardcoded value/currency.** A lead is counted, not
priced — this avoids the USD/GBP bugs. (Decision 2026-07-02.)

## The lead flow (code side)

1. Any lead form (ContactFormModal, LeadFormInline, HeroInlineForm,
   ExitIntentLeadForm, BlogLeadCapture, ScheduleCallModal, PlanSelectionModal,
   uk/sheffield) writes the lead, then does a **hard navigation**
   (`window.location.assign`, NOT `router.push`) to:
   `/thank-you?source=…&service=…&region=<uk|us|in|au|ae>&lid=<docId>`
   Hard nav fixes the intermittent "This page couldn't load" chunk error that
   used to break the conversion page.
2. `/thank-you` (`ThankYouContent.tsx`) reads `lid` + `region`, dedupes on `lid`
   via `sessionStorage`, and pushes **one** dataLayer event:
   `{ event: 'lead_converted', region, lead_source, lead_id }`.
3. GTM fires GA4 `generate_lead` + the region-routed Ads conversion off that event.

`region` comes from each form's existing region prop/context. Missing/other
regions still record GA4, just no Ads conversion.

## Tag loading (`ProductionAnalytics.tsx`)

- Loads **only** `gtm.js` (`GTM-PKWD8SHF`), and **only** on `factoryjet.com` /
  `www.factoryjet.com` (keeps `*.pages.dev` previews out of GA4/Ads).
- Issues **no** `gtag('config', …)` — that double-loaded the Ads runtime
  (`is_legacy_loaded` errors) and pulled the foreign `G-ZZ03` property.
- On `/thank-you` it loads GTM **immediately** (so `lead_converted` is never
  dropped); elsewhere it defers to first interaction / idle for performance.
- The inline `<head>` stub only defines `window.dataLayer`/`window.gtag` so early
  dataLayer pushes queue safely.

## What NOT to do

- ❌ No `gtag('event', …)` or `gtag('config', …)` anywhere in `src/`.
- ❌ No `value` / `currency` on conversions.
- ❌ No `router.push('/thank-you…')` — use `window.location.assign`.
- ❌ Don't add a second GA4 property. `G-N40S2Q8E1J` only.
- ❌ Don't re-link a GA4 destination inside Google Ads "Google tag" settings.

## Editing GTM

Container is editable via the Tag Manager API with service account
`factoryjet-gsc-reader@factoryjet-seo.iam.gserviceaccount.com`
(`secrets/factoryjet-seo-7fa130b491b8.json`, scope
`tagmanager.edit.containers`; publishing needs `tagmanager.publish`). Always
build in a new **workspace**, verify, then publish — GTM keeps version history
for rollback.

**Creating a version needs `tagmanager.edit.containerversions`.** Requesting only
`tagmanager.publish` returns a 403 reading "insufficient authentication scopes",
which looks like a permissions problem and is not one. The service account holds
account admin and container `publish`.

**A workspace edit changes nothing until you publish a version.** This is not a
footnote, it is how the July 2026 outage lasted an extra two days: a workspace
named `fix-ga4-pageview-2026-08-04` contained exactly the right fix and was never
published, so the container kept serving the break.

---

## Tracking health check (run this, it is the thing that stops the regressions)

One-time setup (this machine's `python3` is 3.7.4 and end-of-life, and the Google
client libraries publish no 3.7 wheels, so pip tries to compile grpcio from source
and fails):

```bash
bash scripts/setup-tracking-venv.sh
```

Then, from any interpreter — the script re-execs itself into the venv:

```bash
python3 scripts/check-tracking-health.py
```

Exits non-zero when tracking is genuinely broken. Run it **after every tracking
change** and on a schedule. It reads the LIVE container and the GA4 property, never
a workspace, because every recurrence of this problem has come from trusting
configuration that was not actually live.

What it catches, each mapped to a real incident:

| Check | The incident it would have caught |
|---|---|
| No GA4 configuration tag in the live container | **2026-07-06.** 11 tags, none of them a config tag. Every GA4 tag was an *event* tag with `measurementIdOverride`, so clicks and form events kept recording while `page_view` sat at zero for a month. GA4's UI never says "you have no config tag". |
| Config tag paused, trigger-less, or wrong measurement ID | same class, quieter |
| A GA4 event tag paused in the live container | a conversion that silently stops |
| Unpublished changes sitting in any workspace | **2026-08-04.** The fix existed and was never published |
| Zero `page_view` in GA4 over 7 days | the outcome check: everything above can look correct and still not work |
| A lead event firing but not flagged as a GA4 key event | **2026-07.** `Lead_Form_FactoryJet` was renamed to `generate_lead` and nobody re-flagged it, so 22 real leads were invisible and Google Ads was bidding on a dead signal |
| A flagged key event that has stopped firing | the other half of a rename, where reports split across both names |

Two things it deliberately does NOT do. It is not in `npm run prebuild`, because CI
has no credentials and a check that cannot run in CI must never be able to block a
deploy. And it does not verify from the browser: GA4 sends its hits with
`navigator.sendBeacon`, which does not reliably appear in resource timing, so
counting `/g/collect` requests can prove tracking is broken but can never prove it
is working. Only the GA4 API can do that.

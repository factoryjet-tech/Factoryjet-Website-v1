# Lead Enrichment Modal: Design Spec

**Date:** 2026-09-23
**Status:** Design approved in chat (Part 1 + Part 2). Awaiting spec review.
**Owner:** Bhavesh Barot

## 1. Goal

Keep the two-field inline form (name + email) that already produces leads. After it
submits, open a modal that asks for phone, company, and a free-text description of the
project. Those details attach to the same lead. Ship it everywhere the two-field forms
appear, with one change to shared components.

**Success:**
- Lead volume from the inline forms does not drop (step 1 is unchanged and is counted
  the moment it saves).
- A measurable share of those leads arrive with a phone number and/or a real project
  description (fill rate read from the lead records, see section 7).
- No lead is duplicated in Firestore or ERPNext, and no Google Ads / GA4 conversion is
  lost or double-counted.

## 2. Scope

| Form | Files using it | In scope |
|---|---|---|
| `src/components/HeroInlineForm.tsx` | ~200 page files | Yes |
| `src/components/BlogLeadCapture.tsx` | `BlogPostPage.tsx` (every blog post) | Yes |
| `ContactFormModal.tsx` ("Talk to the Founder") | global | No: already collects phone, company, message |
| `LeadFormInline.tsx` (contact page etc.) | 5 | No: already collects them |
| `ExitIntentLeadForm.tsx` | 1 | No: already collects phone; revisit later |
| Calculators, AI Visibility Checker | various | No |

The change is independent of the homepage redesign and can ship before or after it.

## 3. Visitor flow

1. Visitor submits name + email in the inline form (unchanged UI, validation, honeypot).
2. `submitLead()` saves the lead (unchanged server create path).
3. On success, the page immediately fires the conversion (section 5), then opens the
   enrichment modal instead of redirecting.
4. Visitor either:
   - fills any of the three fields and clicks **Send details**, or
   - clicks **Skip, just email me**, presses Esc, or clicks the backdrop.
5. Either way the browser then goes to `/thank-you?...&lid=<docId>&counted=1`,
   so the existing thank-you page and anything built on it keeps working.

**Edge cases:**
- If `submitLead()` reports `ok: false` (both server attempts failed) or returns no
  enrich token: skip the modal and redirect exactly as today.
- If the "send details" request fails: retry once, then redirect anyway. Never show the
  visitor an error in the modal; the lead already exists.
- All three fields are optional. **Send details** with all fields empty behaves as Skip.
- The modal code is lazy-loaded (`next/dynamic`) only after a successful submit, so it
  adds nothing to page load or INP for visitors who never submit.

## 4. Modal content and design

Approved copy (first name comes from step 1):

> **Got it, {FirstName}. Your request is in.**
> ### Add a few details, get a real answer
> With a phone number and a few lines about your project, our first reply can be an
> actual answer: a recommendation, a rough timeline, what it would take. Without them,
> it's usually a round of questions first.
>
> [founder photo] *I read every request myself.* Bhavesh Barot, Founder
>
> **Phone number** (helper: *Only if a quick call suits you better than email.*)
> **Company name**
> **What do you need built, fixed, or figured out?**
> (placeholder: *Your platform, what's broken or missing, and any deadline. Write as
> much as you like.*)
>
> [ Send details → ]   *Skip, just email me*
>
> *You'll hear back within 24 hours on business days. We never sell or share your details.*

**Design:** the new homepage's spec-sheet language (white card, `#F05A28` accent,
`#B23E13` for small accent text, Plus Jakarta Sans 800 heading, Inter body, Geist Mono
eyebrow). Centered modal on desktop (CLAUDE.md allows centering for modals); full-screen
bottom sheet under 640px so the keyboard never covers the fields. Founder photo:
`public/images/team/bhavesh-barot.webp`, small round thumbnail.

**Fields:**
- Phone: `type="tel"`, `autocomplete="tel"`, no format validation (international numbers).
- Company: `autocomplete="organization"`.
- Message: `<textarea>` that grows with its content, no `maxlength`. The server trims to
  10,000 characters as an abuse guard, far beyond any real brief.
- Hidden honeypot field, same pattern as step 1.

**Accessibility:** `role="dialog"`, `aria-modal="true"`, labelled by the heading; focus
moves to the phone field on open and is trapped inside; Esc = Skip; visible focus rings;
`prefers-reduced-motion` disables the slide-in.

## 5. Conversion tracking

**Verified 2026-09-23 against the live GTM container (version 12):** the triggers
`CE - lead_converted (all|US|UK)` fire on the `lead_converted` custom event with a
region filter only, **no page-path condition**. Firing it outside `/thank-you` is
counted by `GA4 - generate_lead` and both Google Ads form-lead tags. No GTM change is
needed.

- New shared helper `src/utils/leadConversion.ts`:
  `fireLeadConversion({ lid, region, source })` pushes
  `{ event: 'lead_converted', region, lead_source, lead_id }` once per `lid`,
  deduped via `sessionStorage` key `fj_conv_<lid>` (same key as today).
- The inline forms call it the moment `submitLead()` succeeds, before the modal opens.
  A visitor who closes the tab with the modal open is still counted.
- `ThankYouContent.tsx` uses the same helper and additionally skips firing when the URL
  carries `counted=1`. That prevents a double count even when `sessionStorage` is
  blocked (private browsing).
- Direct or legacy redirects to `/thank-you` without `counted=1` behave exactly as today.

**Behaviour signals** (pushed to `dataLayer`, visible in GTM preview and Clarity; not
forwarded to GA4 because the container has no generic custom-event tag, same as the
existing `form_*` events): `lead_enrich_shown`, `lead_enrich_submitted`
(with `fields_filled`, e.g. `phone,message`), `lead_enrich_skipped`.

## 6. Server: `functions/api/notify-lead.js`

### 6.1 Create path (existing) gains one field
The POST response adds `enrichToken`:
`HMAC-SHA256(key, docId)`, hex. The key is `env.LEAD_ENRICH_SECRET` if set, otherwise
`env.ERPNEXT_API_SECRET` (already configured). Using the ERPNext secret only as an HMAC
key never exposes it, so this needs no new Cloudflare secret. `submitLead()` returns the
token alongside `docId`.

### 6.2 New enrich path
Same endpoint, body `{ mode: 'enrich', docId, enrichToken, phone, company, message,
source, honeypot }`.

1. **Guard:** the token must match `HMAC(key, docId)` (constant-time compare), and the
   timestamp embedded in `docId` must be under 2 hours old. Otherwise 403. A filled
   honeypot returns 200 and does nothing.
2. **Clean input:** trim; phone and company clipped to 100 chars; message to 10,000.
   All three empty: return `{ ok: true, enriched: false }`.
3. **Firestore:** `PATCH` the same doc (`contactus/<docId>`) with
   `updateMask.fieldPaths` = `phone`, `company`, `message`, `enrichedAt`,
   `enrichSource`. **Only these fields change**; `createdAt`, `status`, and attribution
   are never overwritten. This is the authoritative write.
4. **ERPNext**, in `waitUntil` so the visitor never waits:
   - Find the Lead by `custom_firebase_doc_id = docId`. The create call may still be
     running, so try at 0s, 2s, and 5s.
   - Found: `PUT /api/resource/Lead/<name>` with `mobile_no` and `company_name`
     (only the fields the visitor filled), then add a Comment on the Lead with the
     message.
   - Not found by docId (the step-1 visitor was a returning email, so their inquiry was
     attached as a Comment to an older Lead): look up by email, add one Comment with
     phone, company, and message. Do not overwrite the older Lead's fields.
   - Still nothing: log it. The Firestore record and the email still carry the details.
5. **Email** (Resend, best effort): to the same inbox, subject
   `📝 Details added: {name}`, body with phone, company, message, a link to the ERPNext
   Lead when known, `reply_to` = the visitor's email.
6. **Response:** `{ ok, saved, emailed }`; 200 unless every write failed.

### 6.3 What does not change
The create path's Firestore write, ERPNext create/returning logic, Turnstile flagging,
the alert email, and the CRM health check stay as they are.

## 7. Measuring whether it works

Fill rate comes from the lead records, which need no GTM work. Firestore is read-locked
from outside, so read it from ERPNext, which is reachable with the existing API key:
`(Leads with a "Details added" comment) ÷ (Leads created from inline-form sources)` over
the same window. A small script `pipeline/research/lead_enrich_fill_rate.py` does this
after 2 to 3 weeks of data. The "Details added" emails give the same count by hand.
Also watch that total inline-form lead volume holds steady against the prior 4 weeks.

## 8. Files touched

| File | Change |
|---|---|
| `functions/api/notify-lead.js` | `enrichToken` in create response; new `mode: 'enrich'` branch; helpers `signDocId`, `enrichFirestore`, `enrichERPNext`, `buildEnrichHtml` |
| `src/utils/submitLead.ts` | return `enrichToken` |
| `src/utils/enrichLead.ts` (new) | client call for the enrich path (8s timeout, one retry, `keepalive`) |
| `src/utils/leadConversion.ts` (new) | shared `fireLeadConversion` helper |
| `src/components/lead/LeadEnrichModal.tsx` (new, client) | the modal |
| `src/components/lead/LeadEnrichModal.css` (new) | modal styles, scoped |
| `src/components/HeroInlineForm.tsx` | on success: fire conversion, open modal, redirect on done |
| `src/components/BlogLeadCapture.tsx` | same |
| `src/app/thank-you/ThankYouContent.tsx` | use shared helper; honour `counted=1` |
| `TRACKING.md` | document the in-page conversion and `counted=1` |
| `pipeline/research/lead_enrich_fill_rate.py` (new) | fill-rate count from ERPNext (section 7) |

**Do not touch:** `ContactFormModal`, `LeadFormInline`, `ExitIntentLeadForm`,
the GTM container, the Firestore collection allow-list, the ERPNext create logic.

## 9. Testing and verification

No local render (OOM hazard on this machine).

- Unit tests (Node, no browser) for the pure server helpers: HMAC sign/verify, docId age
  check, input clipping, Firestore update-mask body, ERPNext lookup/retry decision.
- `npx tsc --noEmit`, `node scripts/validate-build.mjs`,
  `node scripts/check-tracked-imports.mjs` before any push.
- After deploy, one real end-to-end test lead from a live page (test email address,
  clearly marked name "TEST enrich"):
  1. Firestore doc has phone/company/message and `enrichedAt`, and its original
     `createdAt`/attribution are intact.
  2. ERPNext Lead has `mobile_no` and `company_name` set, plus the message comment.
  3. Two emails arrive: the new-lead alert and "Details added".
  4. GA4 realtime shows exactly one `generate_lead` for the test.
  5. Repeat with **Skip**: one conversion, no enrich email.
- Run `python3 scripts/check-tracking-health.py` after deploy.
- Delete the test lead from ERPNext afterwards (Bhavesh confirms before deletion).

## 10. Risks

| Risk | Mitigation |
|---|---|
| Modal annoys visitors, fewer leads | Step 1 is saved and counted first, so the modal cannot lose a lead; watch volume (section 7) |
| Double-counted conversion | `sessionStorage` dedupe plus `counted=1` on the redirect |
| Someone edits another person's lead | HMAC token tied to `docId`, 2-hour window |
| ERPNext still creating the Lead when details arrive | 3 lookups over 5s, fall back to email-match comment, Firestore + email always carry the data |
| Spam in the free-text field | Honeypot, server clip, and the existing email-flag pattern |

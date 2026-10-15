# Hiring pipeline: careers page, application form, scoring agent, invite flow

> Status: **Phase 1 (ERPNext) done and Phase 2 (website) built, not yet deployed, 2026-10-15. Phases 3 and 4 not built.** Written 2026-10-15 for the first hire through it, the
> AI Search & Growth Specialist (GTM), Bangalore, on-site.
> Owner: Bhavesh. Decisions still open are listed in section 10.

## 1. What this builds

A candidate clicks "Apply" on LinkedIn or a job board and lands on a FactoryJet careers page.
They fill one short form. The application is saved as a **Job Applicant** in ERPNext with the CV
attached. An AI scorer reads it against a written rubric and writes a score, a recommendation and
the evidence for both back onto the record. Bhavesh gets one digest email a day, ranked by score.
He approves the ones he wants. Approved candidates get the online assessment invite by email.

The AI never rejects anyone and never emails a candidate on its own judgement. Every outbound
email except the "we got your application" receipt waits for a human status change.

### Why a website form and not ERPNext's built-in one

Checked on 2026-10-15:

| | Top company pattern | ERPNext `/job_application` |
|---|---|---|
| Where | Role page on own domain, apply form on an ATS (Linear: Ashby; Vercel, Mercury, Anthropic: Greenhouse) | erp.factoryjet.com, stock Frappe theme, "Login" link in the header |
| Questions | 12 (Mercury), 18 (Vercel), 19 (Anthropic), pulled from the Greenhouse boards API. Name, email, phone, CV, plus yes/no knockouts (location, office days, visa) | Name, email, phone, country, cover letter, resume link, resume file, currency, lower and upper salary. No knockouts |
| Bot protection | Yes | None in the page source (no Turnstile, no reCAPTCHA) |
| Uptime | Separate from the ATS | Down for the whole Contabo outage on 2026-10-15 |

The website form gives the Greenhouse/Ashby experience with ERPNext as the ATS behind it.

## 2. Current state (verified 2026-10-15)

- ERPNext is on the **Contabo VPS 144.91.102.199**, not Hetzner. `docs/ERPNEXT-DEPLOY-SPEC.md`
  is stale on host, version and apps.
- Installed apps: frappe 15.119.1, erpnext 15.120.0, payments, india_compliance 15.31.3,
  **hrms 15.63.4**, crm 1.83.0.
- `Job Opening`: 0 records. `Job Applicant` stock fields used here: `applicant_name`, `email_id`,
  `phone_number`, `country`, `job_title` (Link to Job Opening), `status`
  (Open / Replied / Rejected / Hold / Accepted), `source` (Link to Job Applicant Source),
  `applicant_rating`, `cover_letter`, `resume_attachment`, `resume_link`, `notes`.
  `email_append_to = 1`, so emails logged against an applicant show on its timeline.
- Web Form `job-application` is published at `/job_application`, guest access, no login.
- Email Accounts: `bhavesh@factoryjet.com` (default outgoing), `bhavesh.b@factoryjet.com`,
  `notifications@factoryjetecom.com`, and a disabled placeholder `Jobs` with `jobs@example.com`.
- Website side: `functions/api/notify-lead.js` already does Turnstile verification
  (`verifyTurnstile`), ERPNext writes with an 8 s timeout and an email fallback, and Resend sends
  from the verified `factoryjet.com` domain. Reuse these patterns, do not fork them.
- `docs/JD-AI-SEO-SPECIALIST.md` is an older, different role (remote, ₹10,000/month). Not used here.

## 3. Phase 1: ERPNext setup

All via the ERPNext UI or API. No custom Frappe app.

1. **Designation** `AI Search & Growth Specialist`.
2. **Job Opening** for it: company FactoryJet Private Limited, status Open, **publish = 0** so
   ERPNext's own `/jobs` page does not list it.
3. **Unpublish Web Form `job-application`** (published = 0). Otherwise bots and stray links can
   reach ERPNext directly, skipping Turnstile and the knockouts.
4. **Job Applicant Source** records: `LinkedIn`, `Naukri`, `Indeed`, `Referral`, `Other`. The website
   itself maps to the existing stock source `Website Listing` (no new `Website` record).
5. **API user** `careers-bot@factoryjet.com`, role **HR User** only, its own API key and secret.
   Do not reuse the Leads key already in Cloudflare.
6. **Custom fields on Job Applicant** (Customize Form). All prefixed `custom_`:

| Field | Type | Filled by |
|---|---|---|
| `custom_linkedin` | Data | Form |
| `custom_work_link` | Data | Form |
| `custom_work_note` | Small Text | Form: what they changed in that work |
| `custom_ai_proof_link` | Data | Form |
| `custom_ai_proof_note` | Small Text | Form: what the AI did, what they did |
| `custom_ai_search_note` | Text | Form: the 150-word note |
| `custom_onsite_ok` | Check | Form knockout |
| `custom_salary_ok` | Check | Form knockout |
| `custom_notice_period` | Select: Immediate / 15 days / 30 days / 60 days / 90 days | Form |
| `custom_current_city` | Data | Form |
| `custom_consent_at` | Datetime | Function |
| `custom_consent_version` | Data | Function, e.g. `2026-10-15` |
| `custom_turnstile_verdict` | Data | Function |
| `custom_stage` | Select (see below) | Scorer, Bhavesh, inviter |
| `custom_ai_score` | Int, 0 to 100 | Scorer |
| `custom_ai_recommendation` | Select: Strong yes / Yes / Maybe / No | Scorer |
| `custom_ai_knockouts` | Small Text | Scorer (also deterministic, see 5.2) |
| `custom_ai_evidence` | Long Text | Scorer |
| `custom_ai_model` | Data | Scorer |
| `custom_ai_scored_at` | Datetime | Scorer |
| `custom_invite_sent_at` | Datetime | Inviter |
| `custom_assessment_score` | Float | Bhavesh, from TestGorilla |
| `custom_retention_until` | Date | Function: application date plus the retention period |

`custom_stage` options, in order: `Unscored`, `Scored`, `Approved for assessment`, `Invited`,
`Assessment done`, `Interview`, `Trial day`, `Offer`, `Closed`. The stock `status` field is left
for its own meaning. A candidate who is turned down gets `status = Rejected` and
`custom_stage = Closed`.

List view for Job Applicant: show `applicant_name`, `custom_stage`, `custom_ai_score`,
`custom_ai_recommendation`, `custom_ai_knockouts`; sort by `custom_ai_score` descending;
`custom_stage` as a standard filter.

**Done when:** a Job Applicant created by hand with the API user shows every custom field, and
`/job_application` on erp.factoryjet.com no longer accepts submissions.

### 3.1 Phase 1 result (2026-10-15)

- Designation `AI Search & Growth Specialist`; Job Opening **`HR-OPN-2026-0001`**,
  "AI Search & Growth Specialist (GTM)", status Open, publish 0, ₹30,000 to ₹35,000 per month
  (salary range not published). Not listed on erp.factoryjet.com/jobs.
- Sources `LinkedIn`, `Naukri`, `Indeed`, `Referral`, `Other` created.
- User `careers-bot@factoryjet.com`, System User, role HR User only, no welcome email, no
  password. **API key and secret not generated yet:** Bhavesh generates them in ERPNext (User >
  Settings > API Access > Generate Keys) and stores them in Cloudflare and `/opt/hiring/.env`
  himself. They are never pasted into chat.
- 30 Custom Fields on Job Applicant in four sections (Screening, AI Scoring Evidence,
  Application Answers, Assessment and Consent): the 23 fields in the table above plus 4 section
  breaks and 3 column breaks. Stage, AI Score and AI Recommendation show in the list view; Stage
  and AI Recommendation are list filters. Fields marked read-only are read-only in the form only;
  the REST API writes them (confirmed with a test record).
- Web Form `job-application` set to published 0. `/job_application/new` now returns 404.
- **Two things learned:**
  1. **Job Applicant records are named by email address** (the test record's id is its email).
     One email can hold one Job Applicant across all openings. The function's duplicate check is
     therefore a lookup by name = email; a repeat application, for this or a later role, is added
     as a Comment, and a later role needs the job link updated by hand.
  2. The Web Form change did not bump its `modified` timestamp (still 2026-05-20). An hrms update
     that ships a newer `job_application` JSON could re-publish it on `bench migrate`. After every
     ERPNext upgrade, check that `/job_application/new` still returns 404.

## 4. Phase 2: careers page and form (website)

### 4.1 Routes

- `src/app/careers/page.tsx`: index listing open roles. One role for now.
- `src/app/careers/ai-search-growth-specialist/page.tsx`: role page plus the form on the same page.
- Static, following `DESIGN.md`: light background, Plus Jakarta Sans 800 headings, Inter body,
  Geist Mono eyebrows. Role text left (60%), sticky apply summary right (40%) on desktop; form
  below the role text. One `<h1>`, the role title.
- Copy: the job post from the 2026-10-15 conversation (AI search, AI agents, e-commerce focus;
  must-have list where each item says how it is checked). Salary shown as
  "₹30,000 to ₹35,000 per month" plus the incentive line.

### 4.2 Keep it out of Google

- `metadata.robots = { index: false, follow: false, googleBot: { index: false, follow: false } }`
  on both routes. Pattern: `src/app/thank-you/page.tsx`. Self canonical kept for the build guard.
- Add `X-Robots-Tag: noindex, nofollow` for `/careers` and `/careers/*` in `public/_headers`.
- **Do not** add `Disallow: /careers` to `robots.txt`. Google has to crawl the page to see the
  noindex; a Disallow can leave the bare URL indexed from inbound LinkedIn links.
- Not in any `sitemap-*.ts` (sitemaps are hand-listed, so this means not adding it), not in
  `llms.txt`, not in the header, footer or `relatedLinks.ts`.
- This page states the Bangalore office. That is the reason for noindex: the site rule is that
  commercial pages never state team location.

### 4.3 The form

Single page, no account, no login. 13 fields, in line with Mercury's 12:

1. Full name (required)
2. Email (required)
3. Phone (required)
4. LinkedIn URL (optional)
5. CV upload, PDF or DOCX, 5 MB max (required)
6. Link to one piece of work you are proud of (required)
7. What you changed in that work, 300 characters max (required)
8. Link to something you built or fixed with Claude Code, Codex or a similar tool (required)
9. What the AI did and what you did, 300 characters max (required)
10. The 150-word note: pick an online store, ask ChatGPT or Perplexity a question its buyers would
    ask, say what the answer got right or wrong about that store. Live word counter; hard stop at
    180 words (required)
11. Knockouts, all required: "Can you work from our office near Kundalahalli, ITPL Road, 5 days a
    week?" (Yes/No); "Does ₹30,000 to ₹35,000 per month plus quarterly incentive work for you?"
    (Yes/No); notice period (select); current city (text)
12. How did you hear about this role? (select, maps to Job Applicant Source; prefilled from
    `?source=` in the URL)
13. Consent checkbox (required), text in section 8

A "No" on a knockout does not block submission. It is saved and flagged. Blocking teaches people
to click Yes.

Hidden: Turnstile widget (same site key as `ContactFormModal.tsx`), honeypot field, `source`
and UTM params from the URL.

On success: the form swaps to a confirmation panel on the same page ("Got it. You will hear from
us within 7 days either way."). No redirect to `/thank-you`.

### 4.4 Analytics: do not count applications as leads

Do **not** call `submitLead`, `trackFormSubmit`, `trackFormSuccess` or push `form_success` or
`generate_lead`. Those feed GA4 conversions and Google Ads. A job application counted as a sales
lead would inflate lead numbers and train Ads bidding on job seekers. Push one event,
`job_application_submit` with `job_id`, and do not mark it as a conversion in GA4.

### 4.5 Function `functions/api/job-application.js`

`onRequestPost`, multipart form data.

1. Validate: required fields, email format, file type by magic bytes (PDF `%PDF`, DOCX `PK`),
   size at most 5 MB, word count of the note at most 180.
2. Turnstile: reuse `verifyTurnstile` from `notify-lead.js` by moving it to a shared module both
   handlers import. Confirm the shared file is not exposed as a route by Pages Functions routing.
   On a failed or missing token, still save, with `custom_turnstile_verdict = failed`; the scorer
   skips these and the digest lists them separately.
3. Duplicate check: an existing Job Applicant with the same `email_id` and `job_title` gets the new
   submission added as a Comment, not a second record.
4. Create the Job Applicant (`status = Open`, `custom_stage = Unscored`, consent fields, retention
   date), then upload the CV with `POST /api/method/upload_file`, `doctype = Job Applicant`,
   `docname`, `fieldname = resume_attachment`, **`is_private = 1`**.
5. ERPNext timeout 8 s, as in `notify-lead.js`. If ERPNext fails or times out, email the full
   application with the CV attached to Bhavesh through Resend, subject prefixed `[ERP DOWN]`, and
   still show the candidate success. Nobody's application is lost to an outage like 2026-10-15.
6. Send the candidate a receipt from `careers@factoryjet.com` via Resend (text in section 7).
7. Response: `{ ok: true }`. Never echo ERPNext ids or errors to the browser.

Cloudflare secrets: `CAREERS_ERP_API_KEY`, `CAREERS_ERP_API_SECRET`, set 2026-10-15 on Pages project
**`factoryjet-v2`** (the one serving factoryjet.com; `wrangler.toml` still says `factoryjet`, which is
a stale project). `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY` already exist.

**Done when:** a test application from a phone creates one Job Applicant with a private CV
attached, the receipt arrives in a Gmail inbox (not spam), a second submission with the same email
adds a comment, and with `ERPNEXT_URL` pointed at a dead host the `[ERP DOWN]` email arrives.

### 4.6 Phase 2 result (2026-10-15, uncommitted)

Files: `functions/api/job-application.js`, `tests/job-application.test.mjs` (18 tests, ERPNext and
Resend mocked), `src/data/careers.ts` (role copy and placeholders), `src/app/careers/page.tsx`,
`src/app/careers/ai-search-growth-specialist/page.tsx`, `src/components/careers/ApplicationForm.tsx`,
`public/_headers` (X-Robots-Tag for `/careers` and `/careers/*`).

Changes from the plan above:
- **Turnstile helper is copied, not shared.** `notify-lead.js` has uncommitted work from another
  session, so `verifyTurnstile` was copied into `job-application.js` with the same contract.
- **ERPNext work runs after the response** (`waitUntil`). The candidate sees success as soon as the
  form validates; save, CV upload, fallback email and receipt happen in the background.
- **Receipt only when the submission looks human** (Turnstile `verified` or `unchecked`, honeypot
  empty). Otherwise a bot could make us email any address it typed in. Such records are still saved,
  with `custom_turnstile_verdict` set to `failed`, `absent` or `trap`.
- **A repeat application** adds a Comment and attaches the new CV to the existing record without
  replacing `resume_attachment`.
- Hiring steps on the page say "take-home task" and "trial day", not "paid", until Bhavesh decides.
- **Live test 2026-10-15** (one application through the live form, then deleted): record, answers,
  source, consent and retention fields saved correctly; receipt reached the inbox. The CV upload
  returned HTTP 500 `PdfReadError` because the hand-made test PDF had no xref table; a valid PDF
  attached as a private file. ERPNext parses every PDF, so a corrupt CV fails the same way: the
  fallback email now says `[CV NOT ATTACHED]` for that case and `[ERP DOWN]` only when nothing saved.
- **`TURNSTILE_SECRET_KEY` is not set on factoryjet-v2** (checked 2026-10-15), so every verdict is
  `unchecked`, on this form and on the contact form. Bhavesh to add it in Cloudflare.

Placeholders, all safe to deploy as they are:
- `INCENTIVE_UP_TO` in `src/data/careers.ts` is `null`: the page shows the incentive with no amount.
- `CAREERS_EMAIL` (`careers@factoryjet.com`) is shown in the consent text but the inbox does not
  exist yet. Receipts are sent from it (Resend only needs the domain) with reply-to
  `bhavesh@factoryjet.com`. Must exist before go-live.
- `RETENTION_DAYS` 180 in `src/data/careers.ts` and `DEFAULT_RETENTION_DAYS` 180 in the function
  (or Cloudflare var `CAREERS_RETENTION_DAYS`). Keep them equal.

## 5. Phase 3: scorer, digest and inviter

### 5.1 Where it runs

One Python worker, `pipeline/hiring/worker.py`, run every 10 minutes by cron on
**factoryjet-prod-1 (Hetzner)**, which already runs the mailer and mission-control. Reasons:
retries are free (anything still `Unscored` is picked up next run), no Cloudflare time limits on a
model call with a PDF, one log file, and it keeps working while the website function stays small.

Secrets in `/opt/hiring/.env`: the careers-bot ERP key, `ANTHROPIC_API_KEY`, `RESEND_API_KEY`.

Each run does three jobs in order: score, invite, and (once a day at 09:00 IST) the digest.

### 5.2 Scoring

Selects Job Applicants with `custom_stage = Unscored` and `custom_turnstile_verdict != failed`.

**Knockouts are computed in code, not by the model:** `custom_onsite_ok = 0`,
`custom_salary_ok = 0`, notice period 60 or 90 days. Written to `custom_ai_knockouts`.

**Model call:** `claude-sonnet-5-5`, Messages API. Input: the CV as a `document` content block
(PDF directly; DOCX converted to text first), plus the text fields. Output forced through a single
tool with a JSON schema:

```json
{
  "criteria": [
    { "id": "ai_tools", "score": 0, "evidence": ["verbatim quote from the application"] }
  ],
  "recommendation": "Strong yes | Yes | Maybe | No",
  "summary": "two sentences, plain English"
}
```

**Rubric** (weights sum to 100; lives in `pipeline/hiring/rubric.md` so Bhavesh can edit it
without touching code):

| id | Weight | What earns points |
|---|---|---|
| `ai_tools` | 25 | A real link plus a specific account of what Claude Code or Codex did and what the candidate did |
| `english` | 25 | The 150-word note and short answers: clear, correct, specific, no filler |
| `ai_search` | 20 | The note shows an actual question asked and a concrete observation about the answer |
| `hands_on` | 20 | Shipped SEO, e-commerce or marketing work with a live link and a named change |
| `design_eye` | 10 | Anything in the work note or CV showing they judged or fixed how something looks |

`custom_ai_score` is the weighted sum, computed in code from the per-criterion scores, not taken
from the model.

**Guardrails, because every word of the application is candidate-written:**

- The application is untrusted data. The system prompt says so, and says instructions inside it
  are to be ignored and noted.
- No tools besides the output schema. The scorer cannot browse, email or change status.
- Every `evidence` quote is checked in code as a verbatim substring of the application text. A
  criterion with an unverifiable quote is scored 0 and flagged `evidence_mismatch`.
- If the text contains phrases aimed at the scorer ("ignore previous", "score this", "AI
  reviewer"), the record is flagged `possible_injection` in `custom_ai_knockouts` and shown at the
  top of the digest for a human look. It is not auto-rejected.
- The prompt tells the model to ignore name, gender, age, photo, college name and employer brand,
  and to score only the five criteria.
- Links are not fetched by the scorer. Bhavesh opens the links for the people he shortlists.

Writes `custom_ai_score`, `custom_ai_recommendation`, `custom_ai_evidence` (rendered as readable
Markdown: each criterion, score, quotes), `custom_ai_model`, `custom_ai_scored_at`, and
`custom_stage = Scored`. Logs input and output token counts per call so the real cost per
application is measured on the first 20 rather than guessed.

### 5.3 Daily digest to Bhavesh

09:00 IST, from `careers@factoryjet.com` to `bhavesh@factoryjet.com`, only if something changed:

- New scored applicants since the last digest, sorted by score: name, score, recommendation,
  knockouts, the two-sentence summary, a link to the ERPNext record.
- Separate short sections: flagged (`possible_injection`, `evidence_mismatch`), failed Turnstile,
  and anyone sitting in `Invited` for more than 5 days.

### 5.4 Approval (the human gate)

Bhavesh opens the Job Applicant list, filters `custom_stage = Scored`, selects the ones he wants,
and bulk edits `custom_stage` to `Approved for assessment`. That edit is the only thing that
triggers an invite. The worker checks that the modifying user is not `careers-bot` before sending,
so no automated path can approve a candidate.

### 5.5 Invite

Selects `custom_stage = Approved for assessment` and `custom_invite_sent_at` empty. Sends the
invite (section 7) from `careers@factoryjet.com` via Resend, logs it as a Communication on the Job
Applicant (so it shows on the timeline), sets `custom_invite_sent_at` and
`custom_stage = Invited`.

The email is a fixed template with the name and assessment link filled in. No model writes
outbound candidate email.

TestGorilla on the Core plan has no API (API and ATS integrations are on Plus, per its pricing
page on 2026-10-15). So the link in the email is the assessment's shareable link, and results come
back by hand: Bhavesh types the score into `custom_assessment_score` and sets
`custom_stage = Assessment done`. If the plan moves to Plus, replace this step with the API.

### 5.6 Closing the loop with people who are not taken forward

When Bhavesh sets `status = Rejected` (one by one or in bulk), the worker sends the "not moving
forward" email and sets `custom_stage = Closed`. Anyone who applied gets an answer within 7 days,
as the receipt promises.

**Done when:** five test applicants (one strong, one weak, one with a "No" knockout, one with a
prompt-injection line in the CV, one with a DOCX) are scored correctly and flagged correctly; the
digest arrives; approving two sends exactly two invites; rejecting one sends one closing email; the
test records are deleted afterwards.

## 6. Phase 4: go live

1. Create the TestGorilla assessment and paste its shareable link into the worker config.
2. Post on LinkedIn with "Apply on company website" (not Easy Apply), URL
   `https://factoryjet.com/careers/ai-search-growth-specialist?source=linkedin`. Same with
   `?source=naukri` and so on for each board.
3. Watch the first 20 applications by hand next to their scores. If the ranking disagrees with
   Bhavesh's own read on more than a few, adjust `rubric.md` before trusting the digest order.

## 7. Candidate emails (drafts)

**Receipt** (sent by the function, immediately):
Subject: We got your application, [first name]
Body: Thanks for applying for the AI Search & Growth Specialist role at FactoryJet. A person reads
every application, with an AI tool helping to sort them. You will hear from us within 7 days
either way.

**Assessment invite** (sent only after approval):
Subject: Next step: a 45-minute online assessment
Body: [First name], thanks for your application. We would like you to take the next step: an online
assessment of about 45 minutes. It covers reasoning, English, working with AI tools and a design
question. Take it in one sitting in the next 5 days: [link]. Reply to this email if anything is
unclear.

**Not moving forward:**
Subject: Your application to FactoryJet
Body: [First name], thank you for applying. We have decided not to take your application further
for this role. We are grateful for the time you put into it, and wish you well with your search.

## 8. Consent and retention

Consent checkbox text (draft, to be checked against India's DPDP Act before go-live; this spec is
not legal advice):

> I agree that FactoryJet can store and review my application, including my CV, to assess me for
> this role. An AI tool helps sort applications; a person makes every decision. FactoryJet keeps
> my data for [180] days after the role is filled, then deletes it. I can ask for it to be deleted
> sooner by emailing careers@factoryjet.com.

A weekly worker job deletes Job Applicants (and their private CV files) whose
`custom_retention_until` has passed and whose stage is `Closed`.

## 9. Build order and size

| Phase | Work | Rough size |
|---|---|---|
| 1 | ERPNext fields, records, API user, unpublish web form | Half a day |
| 2 | Careers pages, form, function, receipt email | 1 to 1.5 days |
| 3 | Worker: scorer, digest, approval check, invites, closing emails, retention | 1.5 to 2 days |
| 4 | Test run with fake applicants, TestGorilla link, job posts | Half a day |

Each phase can ship alone. Phase 2 without Phase 3 still works: applications land in ERPNext
unscored and Bhavesh reads them there.

## 10. Open decisions for Bhavesh

1. Quarterly incentive amount for the job post.
2. `careers@factoryjet.com`: create it as a real inbox, or an alias that forwards to
   bhavesh@factoryjet.com? Replies to invites land there.
3. Retention period after the role is filled: 180 days proposed.
4. TestGorilla plan: Core (manual results entry) or Plus (API).
5. Worker on Hetzner as proposed, or on the Contabo box next to ERPNext.

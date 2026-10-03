/**
 * submitLead — the single, durable lead-capture path for every form on the site.
 *
 * Why this exists (2026-06-22 incident):
 *   Every form previously did `await setDoc(...)` against the browser Firestore
 *   SDK and only advanced on success. In production that write HANGS FOREVER
 *   (no network attempt, no error) — so the button sat on "Sending…", the lead
 *   was never saved, the notify email was never sent, and the visitor left.
 *   Result: ~100% of real leads were silently lost.
 *
 * The fix — server-first capture that can never hang the user:
 *   1) AUTHORITATIVE: POST to the Cloudflare edge function /api/notify-lead,
 *      which writes the lead to Firestore via the REST API (server-side, proven
 *      reliable) AND emails it via Resend. This path does NOT touch the flaky
 *      browser Firestore SDK. The fetch is bounded by a timeout + one retry, so
 *      it always resolves quickly.
 *   2) BEST-EFFORT: a fire-and-forget client Firestore write to the SAME docId
 *      (idempotent — never creates duplicates). It can hang or fail freely; it
 *      is never awaited and can never block the user.
 *
 * The UI advances only after the authoritative path confirms capture. A failed
 * request throws to the form's existing retry error; an unconfirmed mirror is
 * never enough to claim success or count a conversion.
 */

import { readLeadAttribution } from '@/utils/leadAttribution';
import { resolveServiceCategory, serviceFromValue } from '@/utils/leadService';
import { rememberLeadContext } from '@/utils/leadConversion';

/*
 * 2026-09-25 (performance): the Firebase SDK (~110 KB transferred, ~97 KB of it
 * unused at load per PageSpeed) used to be imported statically here, so it was
 * downloaded and parsed on EVERY page for EVERY visitor, because every form
 * imports this file. It is only needed for the best-effort mirror below, after a
 * real submit and after the authoritative server write. It is now loaded on
 * demand. Load order is deliberate: 'firebase/firestore' first (registers the
 * firestore service), then '@/firebase' (which calls initializeFirestore at module
 * eval). That ordering avoids the service-registration race behind the
 * 2026-07-07 outage. ContactFormModal still pre-warms '@/firebase' when it opens.
 */
function mirrorToFirestore(collection: string, docId: string, data: Record<string, unknown>): void {
  import('firebase/firestore')
    .then((fs) => import('@/firebase').then(({ db }) => ({ fs, db })))
    .then(({ fs, db }) => {
      if (!db) return;
      return fs.setDoc(
        fs.doc(db, collection, docId),
        { ...data, createdAt: fs.serverTimestamp(), status: 'new' },
        // merge:true is load-bearing, not a nicety. setDoc() WITHOUT it replaces the
        // whole document. This write is fire-and-forget, so it frequently lands AFTER
        // the server write and used to clobber the richer server record, dropping the
        // `page` and `capturedBy` fields the server had just written. That is why 113
        // of 156 stored leads had no source page and attribution was impossible.
        // With merge, whichever path lands second tops the record up instead of
        // flattening it, and a field written by either path always survives.
        { merge: true },
      );
    })
    .catch(() => { /* server path is authoritative; ignore */ });
}

export interface LeadInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  region?: string;
  /** Where this lead came from (form name). Stored + used in GTM form name. */
  source: string;
  /** Defaults to the current pathname. */
  page?: string;
  /** Firestore collection to write to. Default 'contactus'. */
  collection?: string;
  /** Cloudflare Turnstile token (spam signal), if available. */
  turnstileToken?: string;
}

export interface LeadResult {
  /** True if the authoritative server path confirmed capture (saved and/or emailed). */
  ok: boolean;
  /** The Firestore document id used (shared by both write paths). */
  docId: string;
  /** The ERPNext CRM Lead ID, if successfully created. */
  erpLeadId?: string | null;
  /** Server-signed token that lets the step-2 modal attach details to this lead. */
  enrichToken?: string | null;
}

/** Build a readable, collision-resistant doc id: 2026-06-22_11-04-31_JohnDoe_a1b2 */
function makeDocId(): string {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
  // No name in the id: it is pushed to GA4 as lead_id and appears in the
  // /thank-you?lid= URL, so it must not carry personal data. The 'lead' slot
  // keeps the old 4-part shape so existing ids and ERPNext records still match.
  const rand = Math.random().toString(36).slice(2, 8);
  return `${dateStr}_${timeStr}_lead_${rand}`;
}

/** POST to the edge function with a hard timeout so it can never hang. */
async function postNotifyLead(
  payload: Record<string, unknown>,
  timeoutMs: number
): Promise<{ ok: boolean; erpLeadId?: string | null; enrichToken?: string | null }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch('/api/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      keepalive: true,
    });
    if (res.ok) {
      const data = await res.json().catch(() => null);
      return { ok: data?.ok === true, erpLeadId: data?.erpLeadId || null, enrichToken: data?.enrichToken || null };
    }
    return { ok: false };
  } catch {
    return { ok: false };
  } finally {
    clearTimeout(timer);
  }
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const docId = makeDocId();
  const page = input.page ?? (typeof window !== 'undefined' ? window.location.pathname : '');
  const collection = input.collection || 'contactus';
  // Where this visitor came from (landing page, referring site, UTM tags), so the
  // lead email and CRM record say which page and channel produced this lead.
  const attribution = readLeadAttribution();
  // Which service this lead is about, even when the form had no service picker:
  // the picked value wins, else the form page, else the landing page.
  const serviceCategory = resolveServiceCategory(input.service, page, attribution.landingPage);
  const serviceInferred = serviceFromValue(input.service) ? 'no' : 'yes';

  const payload = {
    docId,
    collection,
    name: input.name,
    email: input.email,
    phone: input.phone || '',
    company: input.company || '',
    service: input.service || '',
    message: input.message || '',
    region: input.region || '',
    source: input.source,
    page,
    serviceCategory,
    serviceInferred,
    ...attribution,
    turnstileToken: input.turnstileToken || '',
  };

  // (1) Authoritative: server-side write + email. Timeout 8s, then one 6s retry.
  let postRes = await postNotifyLead(payload, 8000);
  if (!postRes.ok) postRes = await postNotifyLead(payload, 6000);
  const ok = postRes.ok;
  const erpLeadId = postRes.erpLeadId;
  const enrichToken = postRes.enrichToken ?? null;

  // Every caller awaits this function before its success UI/tracking. Require
  // the endpoint's capture acknowledgement before starting the mirror, so a
  // failed attempt cannot create an unconfirmed background record on retry.
  if (!ok) throw new Error('Lead capture was not confirmed');

  // (2) Best-effort secondary: client Firestore write. Fire-and-forget — never
  //     awaited, so a hung/slow SDK cannot block the user. Same docId keeps it
  //     idempotent with the server write (merged, so neither path can clobber
  //     fields written by the other, and no duplicates are created).
  try {
    mirrorToFirestore(collection, docId, {
      name: input.name,
      email: input.email,
      phone: input.phone || '',
      company: input.company || '',
      service: input.service || '',
      message: input.message || '',
      region: input.region || '',
      source: input.source,
      // `page` MUST be mirrored here (see the merge note in mirrorToFirestore).
      page,
      serviceCategory,
      serviceInferred,
      ...attribution,
      turnstileToken: input.turnstileToken || '',
    });
  } catch {
    /* ignore: never block on the client SDK */
  }

  // Lets the GA4 conversion (fired here or on /thank-you) carry the service and
  // landing page for this lead id. No personal data.
  rememberLeadContext(docId, { service: serviceCategory, landingPage: attribution.landingPage || page, aiAssistant: attribution.aiAssistant });

  return { ok, docId, erpLeadId, enrichToken };
}

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
 * Net effect: a lead is captured as long as EITHER path works, and the form UI
 * always advances within a couple of seconds.
 */

import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

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
}

/** Build a readable, collision-resistant doc id: 2026-06-22_11-04-31_JohnDoe_a1b2 */
function makeDocId(name: string): string {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
  const namePart = (name || 'lead').replace(/\s+/g, '').slice(0, 15) || 'lead';
  const rand = Math.random().toString(36).slice(2, 6);
  return `${dateStr}_${timeStr}_${namePart}_${rand}`;
}

/** POST to the edge function with a hard timeout so it can never hang. */
async function postNotifyLead(payload: Record<string, unknown>, timeoutMs: number): Promise<boolean> {
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
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const docId = makeDocId(input.name);
  const page = input.page ?? (typeof window !== 'undefined' ? window.location.pathname : '');
  const collection = input.collection || 'contactus';

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
    turnstileToken: input.turnstileToken || '',
  };

  // (1) Authoritative: server-side write + email. Timeout 8s, then one 6s retry.
  let ok = await postNotifyLead(payload, 8000);
  if (!ok) ok = await postNotifyLead(payload, 6000);

  // (2) Best-effort secondary: client Firestore write. Fire-and-forget — never
  //     awaited, so a hung/slow SDK cannot block the user. Same docId keeps it
  //     idempotent with the server write (last write wins, no duplicates).
  try {
    if (db) {
      void setDoc(doc(db, collection, docId), {
        name: input.name,
        email: input.email,
        phone: input.phone || '',
        company: input.company || '',
        service: input.service || '',
        message: input.message || '',
        region: input.region || '',
        source: input.source,
        turnstileToken: input.turnstileToken || '',
        createdAt: serverTimestamp(),
        status: 'new',
      }).catch(() => { /* server path is authoritative; ignore */ });
    }
  } catch {
    /* ignore — never block on the client SDK */
  }

  return { ok, docId };
}

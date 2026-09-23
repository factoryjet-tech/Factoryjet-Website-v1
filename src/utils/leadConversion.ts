/**
 * leadConversion — the single place that pushes the lead conversion.
 *
 * GTM (container GTM-PKWD8SHF) turns the `lead_converted` dataLayer event into
 * GA4 generate_lead plus the region-routed Google Ads conversion. Its triggers
 * have no page-path condition (verified live 2026-09-23), so this can fire on the
 * form's own page. Deduped per lead id in sessionStorage; /thank-you also skips
 * when the URL carries counted=1, so a blocked sessionStorage cannot double-count.
 * No imports on purpose: tests/lead-conversion.test.mjs loads this file in Node.
 */

export interface LeadConversion {
  lid: string;
  region?: string;
  source?: string;
}

interface ConversionDeps {
  push?: (data: Record<string, unknown>) => void;
  storage?: Pick<Storage, 'getItem' | 'setItem'> | null;
}

function defaultPush(data: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

function defaultStorage(): Pick<Storage, 'getItem' | 'setItem'> | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

export function fireLeadConversion({ lid, region, source }: LeadConversion, deps: ConversionDeps = {}): boolean {
  if (!lid) return false;
  const push = deps.push ?? defaultPush;
  const storage = deps.storage === undefined ? defaultStorage() : deps.storage;
  const key = `fj_conv_${lid}`;
  try {
    if (storage && storage.getItem(key)) return false;
  } catch {
    /* storage blocked: count it, /thank-you's counted=1 prevents a second count */
  }
  push({ event: 'lead_converted', region: (region || 'us').toLowerCase(), lead_source: source || 'unknown', lead_id: lid });
  try {
    if (storage) storage.setItem(key, '1');
  } catch {
    /* ignore */
  }
  return true;
}

export function thankYouUrl({ lid, region, source, counted }: LeadConversion & { counted?: boolean }): string {
  return `/thank-you?source=${encodeURIComponent(source || 'unknown')}&service=unknown&region=${encodeURIComponent(region || 'us')}&lid=${encodeURIComponent(lid)}${counted ? '&counted=1' : ''}`;
}

/**
 * What an inline form does once submitLead() returns. Only a saved lead with an
 * enrich token opens the modal (and is counted on the form page once the modal
 * has loaded). Everything else goes straight to /thank-you WITHOUT counted=1,
 * so the destination page counts it the way it always has: firing the event and
 * then navigating away at once can unload the page before GTM's tags send.
 */
export function afterSubmitPlan(r: { ok: boolean; enrichToken?: string | null }): 'modal' | 'thank-you' {
  return r.ok && r.enrichToken ? 'modal' : 'thank-you';
}

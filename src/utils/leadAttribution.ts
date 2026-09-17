/**
 * leadAttribution: remembers where a visitor came from, so every lead record
 * (lead email, Firestore, ERPNext) can say it, not only GA4.
 *
 * Why this exists (2026-09-17):
 *   GA4 already ties lead events to a landing page and a source, but only as
 *   totals inside GA4. The lead email and the CRM record showed just the page
 *   the form sat on, so "which page and which channel produced THIS lead" could
 *   not be answered per lead.
 *
 * What is stored, in the visitor's own browser only:
 *   - sessionStorage "fj_visit": the first page of this visit, the external
 *     referrer HOST (never the full referring URL), UTM tags, and which kind of
 *     ad click id was present (never the id itself).
 *   - localStorage "fj_last_touch": the same shape for the most recent visit
 *     that arrived from another site, a campaign or an ad click, kept 90 days,
 *     so a returning visitor who comes back directly still shows the channel
 *     that brought them first.
 *
 * Query strings are dropped from paths so nothing personal rides along. Every
 * storage call is wrapped: blocked storage only means no attribution, never a
 * broken form.
 */

export interface LeadAttribution {
  /** First page of this visit, path only. Empty when unknown. */
  landingPage: string;
  /** External referrer host of this visit, e.g. "chatgpt.com". Empty for direct or unknown. */
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  /** "google-ads" | "microsoft-ads" | "meta" | "linkedin" | "" (type only, never the id). */
  clickId: string;
  /** Most recent earlier visit that came from another site, a campaign or an ad click (90 days). */
  lastTouchReferrer: string;
  lastTouchLanding: string;
  lastTouchCampaign: string;
  lastTouchAt: string;
}

interface Touch {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  clickId: string;
  at: string;
}

const VISIT_KEY = 'fj_visit';
const LAST_TOUCH_KEY = 'fj_last_touch';
const LAST_TOUCH_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const OWN_HOSTS = ['factoryjet.com', 'www.factoryjet.com'];

const EMPTY: LeadAttribution = {
  landingPage: '',
  referrer: '',
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  clickId: '',
  lastTouchReferrer: '',
  lastTouchLanding: '',
  lastTouchCampaign: '',
  lastTouchAt: '',
};

function clip(value: string | null | undefined, max = 120): string {
  return (value || '').trim().slice(0, max);
}

/** Returns the external referrer host, and whether the referrer was our own site. */
function referrerInfo(referrer: string): { host: string; internal: boolean } {
  if (!referrer) return { host: '', internal: false };
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (OWN_HOSTS.includes(host) || host.endsWith('.pages.dev') || host === 'localhost') {
      return { host: '', internal: true };
    }
    return { host: clip(host.replace(/^www\./, ''), 100), internal: false };
  } catch {
    return { host: '', internal: false };
  }
}

function clickIdType(params: URLSearchParams): string {
  if (params.has('gclid') || params.has('gbraid') || params.has('wbraid')) return 'google-ads';
  if (params.has('msclkid')) return 'microsoft-ads';
  if (params.has('fbclid')) return 'meta';
  if (params.has('li_fat_id')) return 'linkedin';
  return '';
}

function readTouch(storage: Storage, key: string): Touch | null {
  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as Touch) : null;
  } catch {
    return null;
  }
}

/**
 * Call once per full page load (ProductionAnalytics runs it from the root
 * layout). Safe to call repeatedly: the visit record is written once per tab
 * session, and the last-touch record only changes on a real external arrival.
 */
export function captureLeadAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const ref = referrerInfo(document.referrer);
    const touch: Touch = {
      landingPage: clip(url.pathname, 200),
      referrer: ref.host,
      utmSource: clip(params.get('utm_source')),
      utmMedium: clip(params.get('utm_medium')),
      utmCampaign: clip(params.get('utm_campaign')),
      clickId: clickIdType(params),
      at: new Date().toISOString(),
    };

    // A new tab opened from inside our own site has no visit record yet, but its
    // "landing page" would be a page deep in the site, which would be misleading.
    // Leave the visit unknown in that case instead of guessing.
    if (!readTouch(window.sessionStorage, VISIT_KEY) && !ref.internal) {
      window.sessionStorage.setItem(VISIT_KEY, JSON.stringify(touch));
    }

    if (touch.referrer || touch.utmSource || touch.clickId) {
      window.localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(touch));
    }
  } catch {
    /* storage blocked or unavailable: attribution is best-effort */
  }
}

/** Read what was captured, for the lead payload. Never throws. */
export function readLeadAttribution(): LeadAttribution {
  if (typeof window === 'undefined') return { ...EMPTY };
  try {
    const visit = readTouch(window.sessionStorage, VISIT_KEY);
    let last = readTouch(window.localStorage, LAST_TOUCH_KEY);
    if (last) {
      const age = Date.now() - Date.parse(last.at || '');
      if (!Number.isFinite(age) || age > LAST_TOUCH_MAX_AGE_MS) last = null;
    }
    return {
      landingPage: clip(visit?.landingPage, 200),
      referrer: clip(visit?.referrer, 100),
      utmSource: clip(visit?.utmSource),
      utmMedium: clip(visit?.utmMedium),
      utmCampaign: clip(visit?.utmCampaign),
      clickId: clip(visit?.clickId, 20),
      lastTouchReferrer: clip(last?.referrer || last?.utmSource || last?.clickId, 100),
      lastTouchLanding: clip(last?.landingPage, 200),
      lastTouchCampaign: clip(last?.utmCampaign),
      lastTouchAt: clip(last?.at, 40),
    };
  } catch {
    return { ...EMPTY };
  }
}

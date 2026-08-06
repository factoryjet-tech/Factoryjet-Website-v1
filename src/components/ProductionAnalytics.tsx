'use client';

import { useEffect } from 'react';

/**
 * ProductionAnalytics — loads the GTM container ONLY, and ONLY on the production
 * hostname. Cloudflare Pages serves every deploy at a *.pages.dev preview URL;
 * firing the tag there pollutes GA4 + Google Ads with staging traffic and
 * triggers the "monitored domains" / tag-quality warnings in Ads. Gating to the
 * real domain keeps measurement clean.
 *
 * SINGLE SOURCE OF TRUTH = the GTM container GTM-PKWD8SHF. Every tag lives there:
 *   - GA4 (property G-N40S2Q8E1J): generate_lead, whatsapp_click, book_call_click,
 *     email_click, phone_click.
 *   - Google Ads conversions: form lead (region-routed to AW-11127037244 London /
 *     AW-18185532850 US), WhatsApp click, Book-Call click.
 *   - Conversion Linker + Microsoft Clarity.
 *
 * This component therefore does NOTHING except (a) host-gate and (b) load gtm.js.
 * It intentionally issues NO gtag('config', 'AW-…') commands. Configuring the Ads
 * tags here did two harmful things: (1) it double-loaded the same tag the GTM
 * container already loads, corrupting gtag's shared runtime ("is_legacy_loaded"),
 * and (2) it auto-pulled the linked GA4 destination G-ZZ03T8W2VR attached to the
 * Ads "Google tag" settings — a foreign property that broke GA4 measurement.
 * GTM loads and links the Ads tags itself, so nothing is lost by removing them.
 *
 * window.dataLayer + window.gtag are still defined by the inline stub in <head>
 * (layout.tsx) so any dataLayer push (e.g. /thank-you's lead_converted event)
 * queues safely before gtm.js finishes loading.
 *
 * ── LOADING STRATEGY: IMMEDIATE, NOT DEFERRED (decided 2026-08-07) ───────────
 * This component used to defer gtm.js until the first scroll/tap/keypress, with
 * a requestIdleCallback timeout as a fallback (8000ms, later lowered to 2500ms).
 * That deferral is now REMOVED. Bhavesh's call: measurement matters more than the
 * Lighthouse points, and the deferral was costing real data.
 *
 * What it cost: any visitor who landed and left before the fallback fired, without
 * scrolling, tapping or moving a mouse, was never measured at all. Not an
 * undercounted pageview, a completely absent session. Mobile has no mousemove
 * event, so short mobile visits were hit hardest. Against roughly 15-25 real human
 * visitors a day, that is a material and permanently unrecoverable share.
 *
 * The tradeoff, stated honestly: gtm.js now executes sooner and can land inside
 * the LCP window on a throttled mobile connection, so mobile Performance may drop.
 * If you need to recover it, buy the points somewhere that does not cost data
 * (image weight, font loading, the hero's JS payload). Do NOT reintroduce the
 * deferral without first comparing GA4 sessions against GSC clicks, which is the
 * check that exposes the gap.
 *
 * This still runs inside useEffect, so it is after hydration and the script is
 * async. "Immediate" means "as early as a client component can", not render-blocking.
 */

const PROD_HOSTS = ['factoryjet.com', 'www.factoryjet.com'];

export default function ProductionAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!PROD_HOSTS.includes(window.location.hostname)) return; // skip previews/staging

    const w = window as unknown as {
      dataLayer?: unknown[];
      gtag?: (...a: unknown[]) => void;
    };

    // dataLayer is guaranteed by the inline <head> stub; fall back defensively
    // just in case the stub was stripped. We deliberately issue NO gtag config
    // commands here — GTM (loaded below) owns every tag. See file header.
    w.dataLayer = w.dataLayer || [];

    // Guard against a double-load if this component ever mounts twice (React
    // StrictMode in dev, or a future layout change). Loading gtm.js twice
    // corrupts gtag's shared runtime.
    if (document.querySelector('script[data-fj-gtm]')) return;

    (w.dataLayer as unknown[]).push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    // GTM-PKWD8SHF is the ONLY tag we load. It carries the Google Ads tags for
    // both AW-11127037244 and AW-18185532850, the GA4 property G-N40S2Q8E1J,
    // Conversion Linker and Microsoft Clarity. We never inject gtag/js for the
    // Ads IDs here — doing so double-loads the same runtime ("is_legacy_loaded"
    // errors) and pulls the foreign linked GA4 destination. (GTM-only 2026-07-02.)
    const gtm = document.createElement('script');
    gtm.async = true;
    gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PKWD8SHF';
    gtm.setAttribute('data-fj-gtm', '1');
    document.head.appendChild(gtm);
  }, []);

  return null;
}

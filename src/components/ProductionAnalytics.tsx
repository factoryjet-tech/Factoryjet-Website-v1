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
 */

const PROD_HOSTS = ['factoryjet.com', 'www.factoryjet.com'];

// The lead conversion fires here. On this page we must NOT defer tag loading,
// or a fast bounce (< 5s, no interaction) would drop the conversion.
const CONVERSION_PATHS = ['/thank-you'];

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

    let loaded = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let idleHandle: number | undefined;
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove'] as const;
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    const cic = (window as unknown as { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback;

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, load));
      if (timer) clearTimeout(timer);
      if (idleHandle !== undefined && cic) cic(idleHandle);
    };

    function load() {
      if (loaded) return;
      loaded = true;
      cleanup();
      (w.dataLayer as unknown[]).push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const gtm = document.createElement('script');
      gtm.async = true;
      gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PKWD8SHF';
      document.head.appendChild(gtm);
      // GTM-PKWD8SHF is the ONLY tag we load. It carries the Google Ads tags for
      // both AW-11127037244 and AW-18185532850, the GA4 property G-N40S2Q8E1J,
      // Conversion Linker and Microsoft Clarity. We never inject gtag/js for the
      // Ads IDs here — doing so double-loads the same runtime ("is_legacy_loaded"
      // errors) and pulls the foreign linked GA4 destination. (GTM-only 2026-07-02.)
    }

    // On the conversion destination page, load the tags IMMEDIATELY so the lead
    // conversion is never lost. Everywhere else, defer to first interaction (or a
    // 5s fallback) to protect Lighthouse Performance + Best Practices.
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    if (CONVERSION_PATHS.includes(path)) {
      load();
      return cleanup;
    }

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    // No interaction (e.g. a Lighthouse run): wait for the browser to go idle,
    // AFTER first paint / LCP, so the GTM container never executes inside the LCP
    // window on throttled mobile. requestIdleCallback's timeout is a hard cap so
    // bounced real users are still measured; Safari (no rIC) uses a timer.
    //
    // CAP LOWERED 2026-08-04 (8000 -> 2500 / 6000 -> 3000). The old 8s cap meant any
    // visitor who landed and left inside 8 seconds without scrolling, tapping or
    // moving a mouse was never measured at all. On mobile there is no mousemove, so
    // that silently erased most short mobile sessions. rIC still fires at natural
    // first idle (normally well under 2s here, i.e. after LCP), so this only changes
    // behaviour on pages whose main thread stays busy past 2.5s; measuring those is
    // worth more than the marginal LCP risk. Do not raise this again without
    // checking GA4 session counts against GSC clicks first.
    if (ric) {
      idleHandle = ric(load, { timeout: 2500 });
    } else {
      timer = setTimeout(load, 3000);
    }

    return cleanup;
  }, []);

  return null;
}

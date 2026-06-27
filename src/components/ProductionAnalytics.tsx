'use client';

import { useEffect } from 'react';

/**
 * ProductionAnalytics — loads GTM + Google Ads gtag ONLY on the production
 * hostname. Cloudflare Pages serves every deploy at a *.pages.dev preview URL;
 * firing the tag there pollutes GA4 + Google Ads with staging traffic and
 * triggers the "monitored domains" / tag-quality warnings in Ads. Gating to the
 * real domain keeps measurement clean.
 *
 * GTM container: GTM-PKWD8SHF. Google Ads: AW-11127037244 + AW-18185532850.
 * (GA4 itself is delivered via the GTM container + the Ads gtag destinations.)
 *
 * window.gtag + window.dataLayer are defined by the inline `gtag-stub` script in
 * the <head> (layout.tsx, strategy="beforeInteractive"), so they always exist
 * before any conversion call runs — there is no longer a race between this
 * effect and page effects like /thank-you's trackFormSubmission(). This file is
 * only responsible for (a) host-gating, (b) the js/config commands, and
 * (c) loading the GTM container (gtm.js), which in turn loads the Google Ads
 *     tags for both AW-11127037244 and AW-18185532850. We must NOT also inject
 *     gtag/js for those IDs here — double-loading the same tag corrupts gtag's
 *     shared runtime ("is_legacy_loaded" errors) and breaks conversions.
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

    // dataLayer + gtag are guaranteed by the inline <head> stub; fall back
    // defensively just in case the stub was stripped.
    w.dataLayer = w.dataLayer || [];
    const gtag =
      w.gtag ||
      function gtag() {
        // eslint-disable-next-line prefer-rest-params
        (w.dataLayer as unknown[]).push(arguments);
      };

    gtag('js', new Date());
    gtag('config', 'AW-11127037244');
    gtag('config', 'AW-18185532850');

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
      // NOTE: we deliberately do NOT inject gtag/js?id=AW-18185532850 here.
      // The GTM container (GTM-PKWD8SHF) already loads the Google Ads tags for
      // BOTH AW-11127037244 and AW-18185532850. Injecting AW-18185532850 a second
      // time loaded the same gtag.js twice, which corrupts gtag's shared runtime
      // and throws "Cannot read properties of undefined (reading 'is_legacy_loaded')"
      // on every config call (GA4 + Ads), breaking conversion measurement.
      // AW-11127037244 already fires its conversion via GTM-only loading, so
      // AW-18185532850 works the same way. (Fixed 2026-06-22.)
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
    if (ric) {
      idleHandle = ric(load, { timeout: 8000 });
    } else {
      timer = setTimeout(load, 6000);
    }

    return cleanup;
  }, []);

  return null;
}

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
 * (c) loading the heavy gtm.js + gtag/js scripts.
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
    let timer: ReturnType<typeof setTimeout>;
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove'] as const;

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, load));
      clearTimeout(timer);
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
      const gads = document.createElement('script');
      gads.async = true;
      gads.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18185532850';
      document.head.appendChild(gads);
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
    timer = setTimeout(load, 5000);

    return cleanup;
  }, []);

  return null;
}

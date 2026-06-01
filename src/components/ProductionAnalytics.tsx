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
 */

const PROD_HOSTS = ['factoryjet.com', 'www.factoryjet.com'];

export default function ProductionAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!PROD_HOSTS.includes(window.location.hostname)) return; // skip previews/staging

    const w = window as unknown as { dataLayer?: unknown[] };

    // Initialise dataLayer + gtag stub IMMEDIATELY so any conversion events
    // pushed before the tags finish loading are queued and processed once they
    // do. The heavy GTM + Ads scripts (~590KB + third-party cookies) are then
    // DEFERRED off the critical path — loaded on the first user interaction, or
    // after a 5s fallback — which lifts Lighthouse Performance + Best Practices
    // while keeping measurement intact (real conversions require interaction,
    // which itself triggers the load).
    w.dataLayer = w.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      (w.dataLayer as unknown[]).push(arguments);
    }
    (gtag as (...a: unknown[]) => void)('js', new Date());
    (gtag as (...a: unknown[]) => void)('config', 'AW-11127037244');
    (gtag as (...a: unknown[]) => void)('config', 'AW-18185532850');

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

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    timer = setTimeout(load, 5000);

    return cleanup;
  }, []);

  return null;
}

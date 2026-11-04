'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureLeadAttribution } from '@/utils/leadAttribution';

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
 * This component also listens to App Router client-side transitions via `usePathname()`
 * to push `page_view` events with `page_path` and `page_location` on every route change,
 * preventing SPA navigation from dropping landing paths into `(not set)`.
 *
 * It also records where the visitor came from (landing page, referring site,
 * UTM tags) in the visitor's own browser, so submitLead can attach it to the
 * lead record. That step makes no network call and pushes nothing to the
 * dataLayer, so it cannot affect GA4 or Ads counts. See utils/leadAttribution.ts.
 */

const PROD_HOSTS = ['factoryjet.com', 'www.factoryjet.com'];

export default function ProductionAnalytics() {
  const pathname = usePathname();

  // 0. Remember where this visitor came from, for the lead record (all hosts, no network)
  useEffect(() => {
    captureLeadAttribution();
  }, []);

  // 1. Initial GTM Container Load (production host gated)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!PROD_HOSTS.includes(window.location.hostname)) return; // skip previews/staging

    const w = window as unknown as {
      dataLayer?: unknown[];
      gtag?: (...a: unknown[]) => void;
    };

    // dataLayer is guaranteed by the inline <head> stub; fall back defensively
    w.dataLayer = w.dataLayer || [];

    // Guard against double-load
    if (document.querySelector('script[data-fj-gtm]')) return;

    // Load GTM once the page has finished its own work: after window load, when the
    // browser is idle (at most 2 s later). A tap, key press or scroll loads it at once,
    // so a visitor who acts early (or converts) is never missed. dataLayer pushes made
    // before this point (page_view, lead events) are queued and replayed by GTM.
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      cleanup();
      if (document.querySelector('script[data-fj-gtm]')) return;
      (w.dataLayer as unknown[]).push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const gtm = document.createElement('script');
      gtm.async = true;
      gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PKWD8SHF';
      gtm.setAttribute('data-fj-gtm', '1');
      document.head.appendChild(gtm);
    };

    // Two animation frames guarantee the first paint has happened before GTM starts,
    // so its ~350 KB of scripts never compete with the hero text (LCP) on slow phones.
    const scheduleIdle = () => {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if ('requestIdleCallback' in window) {
            idleId = window.requestIdleCallback(load, { timeout: 2000 });
          } else {
            timeoutId = setTimeout(load, 1500);
          }
        }),
      );
    };

    function cleanup() {
      events.forEach((e) => window.removeEventListener(e, load));
      window.removeEventListener('load', scheduleIdle);
      if (idleId !== undefined && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    }

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    if (document.readyState === 'complete') scheduleIdle();
    else window.addEventListener('load', scheduleIdle, { once: true });

    return cleanup;
  }, []);

  // 2. Client-side App Router Pageview Tracking (fixes SPA "(not set)" landing pages)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!PROD_HOSTS.includes(window.location.hostname)) return;

    const w = window as unknown as {
      dataLayer?: unknown[];
    };
    w.dataLayer = w.dataLayer || [];

    const pageLocation = window.location.href;
    const pagePath = (pathname || '/') + (window.location.search || '');

    w.dataLayer.push({
      event: 'page_view',
      page_path: pagePath,
      page_location: pageLocation,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}

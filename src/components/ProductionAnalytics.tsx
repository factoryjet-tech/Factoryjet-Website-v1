'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
 */

const PROD_HOSTS = ['factoryjet.com', 'www.factoryjet.com'];

export default function ProductionAnalytics() {
  const pathname = usePathname();

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

    (w.dataLayer as unknown[]).push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const gtm = document.createElement('script');
    gtm.async = true;
    gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PKWD8SHF';
    gtm.setAttribute('data-fj-gtm', '1');
    document.head.appendChild(gtm);
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

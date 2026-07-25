'use client';

/**
 * StickyCallToAction — desktop-only sticky bottom CTA for blog articles.
 *
 * Why desktop-only: the root layout already mounts a global MobileStickyCTA
 * (md:hidden) with WhatsApp + the tracked "Get my quote" modal. This bar used to
 * render on ALL viewports, so on mobile it stacked on top of that bar at the
 * same `bottom-0 z-50`. Scoping this to `hidden md:flex` removes the collision;
 * mobile keeps the superior converting bar, desktop gets this one.
 *
 * It now opens the tracked contact modal (region 'us') instead of navigating to
 * /contact, so desktop blog leads fire the same GTM/GA4 conversion as the rest
 * of the site. Brand tokens: dark bar (#16181d) matching the mobile CTA, with
 * the #B23E13 accessible-orange action button (small-element token).
 */

import React, { useEffect, useState } from 'react';
import { useContactModal } from '@/context/ContactModalContext';

export function StickyCallToAction() {
  const { openModal } = useContactModal();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        localStorage.getItem('sticky-cta-dismissed') === 'true') {
      setDismissed(true);
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sticky-cta-dismissed', 'true');
    }
  };

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 hidden md:block"
      style={{ background: '#16181d', boxShadow: '0 -8px 24px rgba(15,33,56,0.22)' }}
    >
      <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center gap-4">
        <div className="min-w-0 flex-1 text-white">
          <span className="font-fj-display font-bold text-base">Have a project in mind?</span>
          <span className="ml-2 text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
            Get a free quote &mdash; the founder replies within 24 hours.
          </span>
        </div>
        <button
          type="button"
          onClick={() => openModal('us')}
          className="font-fj-display shrink-0 inline-flex items-center gap-2 text-white font-bold text-sm rounded-full transition-transform hover:-translate-y-0.5"
          style={{ background: '#B23E13', padding: '11px 20px', whiteSpace: 'nowrap' }}
        >
          Get my quote
          <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 text-xl leading-none font-bold transition-colors"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

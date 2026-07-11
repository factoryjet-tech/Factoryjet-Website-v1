'use client';

/**
 * MobileStickyCTA — persistent bottom CTA bar shown on mobile across /us pages.
 *
 * The /us audit found 0 mobile conversions: the CTA scrolled away and never
 * returned. This bar stays pinned, appears after the hero (scrollY > 480), and
 * gives two tap targets: WhatsApp (already a tracked, converting channel) and
 * "Get my quote" which opens the existing contact modal (region 'us').
 * Mobile-only (md:hidden). Mounted once via app/us/layout.tsx.
 */

import { useEffect, useState } from 'react';
import { useContactModal } from '@/context/ContactModalContext';

const WHATSAPP_NUMBER = '919699977699';
const WA_MESSAGE = encodeURIComponent("Hi FactoryJet, I'd like a free quote for my project.");

export default function MobileStickyCTA() {
  const { openModal } = useContactModal();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ transform: show ? 'translateY(0)' : 'translateY(115%)', transition: 'transform 220ms ease', willChange: 'transform' }}
      /* When the bar is parked off-screen it must not be focusable or exposed to
         assistive tech. `inert` (React 19) removes the WhatsApp link + button
         from the tab order and the a11y tree, fixing the aria-hidden-focus
         audit; it becomes interactive again the moment the bar slides in. */
      inert={!show}
    >
      <div
        className="flex items-center gap-2.5 px-3.5 pt-3"
        style={{ background: '#16181d', paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))', boxShadow: '0 -8px 24px rgba(15,33,56,0.22)' }}
      >
        <div className="min-w-0 flex-1 text-white">
          <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.2 }}>Free quote</div>
          <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.62)' }}>Founder replies in 24h</div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          /* Plain wa.me anchor — GTM auto-fires the WhatsApp Ads conversion + GA4 whatsapp_click. */
          aria-label="Chat with us on WhatsApp"
          className="flex shrink-0 items-center justify-center"
          style={{ width: 42, height: 42, borderRadius: '50%', background: '#25D366' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01s-.43.06-.66.31c-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => openModal('us')}
          className="font-fj-display inline-flex shrink-0 items-center gap-1.5 text-white"
          style={{ background: '#F05A28', fontWeight: 700, fontSize: '14px', padding: '11px 16px', borderRadius: '999px', whiteSpace: 'nowrap' }}
        >
          Get my quote
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

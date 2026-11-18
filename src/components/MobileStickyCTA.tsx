'use client';

/**
 * MobileStickyCTA — persistent bottom CTA bar shown on mobile across /us pages.
 *
 * The /us audit found 0 mobile conversions: the CTA scrolled away and never
 * returned. This bar stays pinned, appears after the hero (scrollY > 480), and
 * gives one tap target, "Get my quote", which opens the existing contact modal
 * (region from the path). The WhatsApp button was removed 2026-11-18: the number
 * is no longer reachable and no replacement exists yet.
 * A page can relabel the button with <StickyCtaLabel> (AI agent pages use
 * "See a demo on my data"); the action stays the same contact modal.
 * Mobile-only (md:hidden). Mounted once via app/us/layout.tsx.
 */

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useContactModal, type ModalRegion } from '@/context/ContactModalContext';

export default function MobileStickyCTA() {
  const { openModal } = useContactModal();
  const [show, setShow] = useState(false);
  // Pages that lead with another offer say so with <StickyCtaLabel> (2026-10-31).
  const [cta, setCta] = useState({ label: 'Get my quote', title: 'Free quote' });
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  // Tag the lead with the market of the page it came from (was hardcoded 'us',
  // so UK and AU leads arrived labelled US). Fixed 2026-10-31.
  const region: ModalRegion = pathname?.startsWith('/uk') ? 'uk' : pathname?.startsWith('/au') ? 'au' : 'us';

  useEffect(() => {
    if (isHomepage) {
      setShow(false);
      return;
    }

    const marker = document.querySelector('[data-sticky-cta-label]');
    setCta({
      label: marker?.getAttribute('data-sticky-cta-label') || 'Get my quote',
      title: marker?.getAttribute('data-sticky-cta-title') || 'Free quote',
    });

    // Stay hidden while a hero inline form is on screen: at 390px the bar
    // covered its last field and submit button (31 Oct QA, 9 UK/AU pages).
    const visibleForms = new Set<Element>();
    const update = () => setShow(window.scrollY > 480 && visibleForms.size === 0);
    const forms = document.querySelectorAll('[data-hero-inline-form]');
    const io =
      forms.length && typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver((entries) => {
            entries.forEach((e) => (e.isIntersecting ? visibleForms.add(e.target) : visibleForms.delete(e.target)));
            update();
          })
        : null;
    forms.forEach((el) => io?.observe(el));

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      io?.disconnect();
    };
  }, [isHomepage, pathname]);

  // The homepage owns an IntersectionObserver-driven bar tied to its inline
  // commerce-audit form. Never stack this global quote bar on top of it.
  if (isHomepage) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ transform: show ? 'translateY(0)' : 'translateY(115%)', transition: 'transform 220ms ease', willChange: 'transform' }}
      /* When the bar is parked off-screen it must not be focusable or exposed to
         assistive tech. `inert` (React 19) removes the button
         from the tab order and the a11y tree, fixing the aria-hidden-focus
         audit; it becomes interactive again the moment the bar slides in. */
      inert={!show}
    >
      <div
        className="flex items-center gap-2.5 px-3.5 pt-3"
        style={{ background: '#16181d', paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))', boxShadow: '0 -8px 24px rgba(15,33,56,0.22)' }}
      >
        <div className="min-w-0 flex-1 text-white">
          <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.2 }}>{cta.title}</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.62)' }}>Founder replies in 24h</div>
        </div>


        <button
          type="button"
          onClick={() => openModal(region)}
          className="font-fj-display inline-flex shrink-0 items-center gap-1.5 text-white"
          style={{ background: '#B23E13', fontWeight: 700, fontSize: '14px', minHeight: 44, padding: '11px 16px', borderRadius: '999px', whiteSpace: 'nowrap' }}
        >
          {cta.label}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

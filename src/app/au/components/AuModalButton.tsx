'use client';

/**
 * AuModalButton — thin client wrapper for /au CTAs that open the contact
 * modal with region 'au'. The /au page is a server component styled by the
 * scoped au-home.css classes (.btn / .btn-orange / .btn-ghost), so this
 * button takes a className instead of imposing the v2 ModalCTAButton pill
 * styling — keeping it pixel-faithful to research/mockup-au-home-v3.html.
 */

import type { ReactNode } from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';

export interface AuModalButtonProps {
  children: ReactNode;
  className?: string;
  /** GTM CTA id, e.g. 'au_hero_free_concept'. */
  ctaId?: string;
}

export default function AuModalButton({ children, className = '', ctaId = 'au_get_quote' }: AuModalButtonProps) {
  const { openModal } = useContactModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackCTAClick(ctaId, 'au_home', 'primary');
        openModal('au', 'default');
      }}
    >
      {children}
    </button>
  );
}

'use client';

/**
 * ModalCTAButton — client-side CTA button that opens the contact modal.
 *
 * Server components (Hero, FinalCTA) cannot call hooks, so any CTA that
 * needs to open the modal renders this thin client wrapper instead of a
 * Next.js <Link>. Visually pixel-identical to the existing Link buttons.
 *
 * Variants map to the four CTA appearances used across v2 sections:
 *   primary-light   — blue fill, light-bg sections (Hero, FinalCTA light)
 *   primary-dark    — blue fill + intense glow, dark sections (FinalCTA dark)
 *   secondary-light — frosted glass, light-bg sections (Hero secondary)
 *   secondary-dark  — ghost/border, dark sections (FinalCTA dark secondary)
 */

import type { CSSProperties } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import type { ModalRegion, ModalVariant } from '../../context/ContactModalContext';

export interface ModalCTAButtonProps {
  label: string;
  region?: ModalRegion;
  modalVariant?: ModalVariant;
  btnVariant?: 'primary-light' | 'primary-dark' | 'secondary-light' | 'secondary-dark';
  className?: string;
  style?: CSSProperties;
}

export default function ModalCTAButton({
  label,
  region = 'us',
  modalVariant = 'default',
  btnVariant = 'primary-light',
  className = '',
  style,
}: ModalCTAButtonProps) {
  const { openModal } = useContactModal();

  const base: Record<ModalCTAButtonProps['btnVariant'] & string, string> = {
    'primary-light':
      'inline-flex items-center justify-center gap-2 rounded-full bg-fj-jet-blue px-7 py-3.5 font-fj-body text-base font-semibold text-white transition-all hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue',
    'primary-dark':
      'inline-flex items-center justify-center gap-2 rounded-full bg-fj-jet-blue px-8 py-3.5 font-fj-body text-base font-semibold text-white transition-all hover:bg-[#003D99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue',
    'secondary-light':
      'inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white/60 px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink backdrop-blur-sm transition-colors hover:border-fj-neutral-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fj-jet-blue',
    'secondary-dark':
      'inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-7 py-3.5 font-fj-body text-base font-semibold text-fj-charcoal-text transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  };

  const isPrimary = btnVariant === 'primary-light' || btnVariant === 'primary-dark';

  return (
    <button
      type="button"
      onClick={() => openModal(region, modalVariant)}
      className={`${base[btnVariant]} ${className}`}
      style={style}
    >
      {label}
      {isPrimary && (
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5h6M5 2l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
}

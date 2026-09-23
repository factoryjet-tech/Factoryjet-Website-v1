'use client';

/**
 * LeadEnrichModal — step 2 of the inline lead forms. Opens after name + email are
 * saved and asks for phone, company and a free-text brief. Every field is
 * optional; the lead already exists. Spec:
 * docs/superpowers/specs/2026-09-23-lead-enrichment-modal-design.md
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './LeadEnrichModal.css';

export interface EnrichFields {
  phone: string;
  company: string;
  message: string;
  honeypot: string;
}

export interface LeadEnrichModalProps {
  firstName: string;
  onSubmit: (fields: EnrichFields) => Promise<void>;
  onSkip: () => void;
}

const FOCUSABLE = 'button:not([disabled]), input:not([tabindex="-1"]), textarea';

export default function LeadEnrichModal({ firstName, onSubmit, onSkip }: LeadEnrichModalProps) {
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [sending, setSending] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const sendingRef = useRef(false);

  useEffect(() => {
    // Desktop: start in the phone field. Touch: focus the dialog itself, so the
    // keyboard does not open over the intro before the visitor has read it.
    const finePointer = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: fine)').matches;
    if (finePointer) phoneRef.current?.focus();
    else cardRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !sendingRef.current) { e.preventDefault(); onSkip(); return; }
      if (e.key !== 'Tab' || !cardRef.current) return;
      const items = Array.from(cardRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onSkip]);

  const grow = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sendingRef.current) return;
    sendingRef.current = true;
    setSending(true);
    await onSubmit({ phone, company, message, honeypot });
  };

  const skip = () => { if (!sendingRef.current) onSkip(); };

  return createPortal(
    <div className="lem-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) skip(); }}>
      <div className="lem-card" ref={cardRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="lem-title" aria-describedby="lem-lead">
        <button type="button" className="lem-close" aria-label="Close and continue" onClick={skip}>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
        <p className="lem-eyebrow">Got it{firstName ? `, ${firstName}` : ''}. Your request is in.</p>
        <h2 id="lem-title" className="lem-title">Add a few details, get a real answer</h2>
        <p id="lem-lead" className="lem-lead">
          With a phone number and a few lines about your project, our first reply can be an actual answer: a
          recommendation, a rough timeline, what it would take. Without them, it&apos;s usually a round of questions first.
        </p>
        <div className="lem-founder">
          <img src="/images/team/bhavesh-barot.webp" alt="Bhavesh Barot, founder of FactoryJet" width={40} height={40} />
          <p><strong>I read every request myself.</strong>Bhavesh Barot, Founder</p>
        </div>
        <form className="lem-form" onSubmit={handleSubmit} noValidate>
          <label className="lem-field">
            <span className="lem-label">Phone number</span>
            <input ref={phoneRef} className="lem-input" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="lem-help">Only if a quick call suits you better than email.</span>
          </label>
          <label className="lem-field">
            <span className="lem-label">Company name</span>
            <input className="lem-input" type="text" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} />
          </label>
          <label className="lem-field">
            <span className="lem-label">What do you need built, fixed, or figured out?</span>
            <textarea
              className="lem-textarea" rows={4} value={message}
              placeholder="Your platform, what's broken or missing, and any deadline. Write as much as you like."
              onChange={(e) => { setMessage(e.target.value); grow(e.target); }}
            />
          </label>
          <input className="lem-trap" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          <div className="lem-actions">
            <button type="submit" className="lem-send" disabled={sending}>
              {sending ? 'Sending…' : 'Send details'}
              {!sending && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </button>
            <button type="button" className="lem-skip" onClick={skip}>Skip, just email me</button>
          </div>
        </form>
        <p className="lem-trust">You&apos;ll hear back within 24 hours on business days. We never sell or share your details.</p>
      </div>
    </div>,
    document.body,
  );
}

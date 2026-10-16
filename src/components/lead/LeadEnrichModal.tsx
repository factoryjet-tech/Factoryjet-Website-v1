'use client';

/**
 * LeadEnrichModal — step 2 of the inline lead forms. Opens after name + email are
 * saved and asks what the project is (type, systems, timeline), a free-text
 * brief, an optional brief file, company and phone. Every field is optional; the
 * lead already exists. The three option lists must match ENRICH_* in
 * functions/api/notify-lead.js (tests/notify-lead-enrich.test.mjs checks). Spec:
 * docs/superpowers/specs/2026-09-23-lead-enrichment-modal-design.md
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './LeadEnrichModal.css';

export const PROJECT_TYPES = ['New online store', 'Store rebuild or migration', 'B2B or wholesale portal', 'ERP or inventory integration', 'AI agent', 'Other'];
export const SYSTEMS = ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento', 'QuickBooks', 'NetSuite', 'Odoo', 'Salesforce', 'Faire', 'Amazon', 'Other'];
export const TIMELINES = ['As soon as possible', 'Within 3 months', '3 to 6 months', 'Just researching'];

/** Same 5 MB limit as the server (MAX_BRIEF_BYTES). */
export const MAX_BRIEF_BYTES = 5 * 1024 * 1024;

export interface BriefFile {
  name: string;
  /** base64, no data: prefix */
  data: string;
}

export interface EnrichFields {
  phone: string;
  company: string;
  message: string;
  projectType: string;
  systems: string[];
  timeline: string;
  brief: BriefFile | null;
  honeypot: string;
}

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).replace(/^data:[^,]*,/, ''));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export interface LeadEnrichModalProps {
  firstName: string;
  onSubmit: (fields: EnrichFields) => Promise<void>;
  onSkip: () => void;
}

const FOCUSABLE = 'button:not([disabled]), input:not([tabindex="-1"]), select, textarea';

export default function LeadEnrichModal({ firstName, onSubmit, onSkip }: LeadEnrichModalProps) {
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [projectType, setProjectType] = useState('');
  const [systems, setSystems] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [brief, setBrief] = useState<BriefFile | null>(null);
  const [briefError, setBriefError] = useState('');
  const firstChoiceRef = useRef<HTMLInputElement>(null);
  const [sending, setSending] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const sendingRef = useRef(false);

  useEffect(() => {
    // Desktop: start in the phone field. Touch: focus the dialog itself, so the
    // keyboard does not open over the intro before the visitor has read it.
    const finePointer = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: fine)').matches;
    if (finePointer) firstChoiceRef.current?.focus();
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
    await onSubmit({ phone, company, message, projectType, systems, timeline, brief, honeypot });
  };

  const toggleSystem = (name: string) =>
    setSystems((cur) => (cur.includes(name) ? cur.filter((x) => x !== name) : [...cur, name]));

  const pickBrief = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setBriefError('');
    setBrief(null);
    if (!file) return;
    const lower = file.name.toLowerCase();
    if (!lower.endsWith('.pdf') && !lower.endsWith('.docx')) { setBriefError('Please attach a PDF or Word (.docx) file.'); e.target.value = ''; return; }
    if (file.size > MAX_BRIEF_BYTES) { setBriefError('That file is over 5 MB. Please attach a smaller one.'); e.target.value = ''; return; }
    try { setBrief({ name: file.name, data: await readAsBase64(file) }); }
    catch { setBriefError('That file could not be read. Please try another.'); e.target.value = ''; }
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
          Tell us what the project is and which systems it touches. Then our first reply can be an actual answer: a
          recommendation, a rough timeline, what it would take. Without it, it&apos;s usually a round of questions first.
        </p>
        <div className="lem-founder">
          <img src="/images/team/bhavesh-barot.webp" alt="Bhavesh Barot, founder of FactoryJet" width={40} height={40} />
          <p><strong>I read every request myself.</strong>Bhavesh Barot, Founder</p>
        </div>
        <form className="lem-form" onSubmit={handleSubmit} noValidate>
          <fieldset className="lem-field lem-set">
            <legend className="lem-label">What is the project?</legend>
            <div className="lem-chips">
              {PROJECT_TYPES.map((t, i) => (
                <label key={t} className="lem-chip">
                  <input ref={i === 0 ? firstChoiceRef : undefined} type="radio" name="lem-project" value={t} checked={projectType === t} onChange={() => setProjectType(t)} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="lem-field lem-set">
            <legend className="lem-label">Which systems does it touch?</legend>
            <div className="lem-chips">
              {SYSTEMS.map((name) => (
                <label key={name} className="lem-chip">
                  <input type="checkbox" value={name} checked={systems.includes(name)} onChange={() => toggleSystem(name)} />
                  <span>{name}</span>
                </label>
              ))}
            </div>
            <span className="lem-help">Pick any that apply.</span>
          </fieldset>
          <label className="lem-field">
            <span className="lem-label">When do you want to start?</span>
            <select className="lem-input lem-select" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
              <option value="">Choose one</option>
              {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label className="lem-field">
            <span className="lem-label">What do you need built, fixed, or figured out?</span>
            <textarea
              className="lem-textarea" rows={4} value={message}
              placeholder="What it should do, what's broken or missing, and any deadline. Write as much as you like."
              onChange={(e) => { setMessage(e.target.value); grow(e.target); }}
            />
          </label>
          <label className="lem-field">
            <span className="lem-label">Have a brief, RFP or spec?</span>
            <input className="lem-file" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={pickBrief} />
            <span className={briefError ? 'lem-help lem-error' : 'lem-help'} role={briefError ? 'alert' : undefined}>
              {briefError || (brief ? `Attached: ${brief.name}` : 'PDF or Word, up to 5 MB. Kept private.')}
            </span>
          </label>
          <label className="lem-field">
            <span className="lem-label">Company name</span>
            <input className="lem-input" type="text" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} />
          </label>
          <label className="lem-field">
            <span className="lem-label">Phone number</span>
            <input ref={phoneRef} className="lem-input" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="lem-help">Only if a quick call suits you better than email.</span>
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

'use client';

/**
 * BlogLeadCapture — inline lead-capture block for blog posts.
 *
 * Blog posts are where the organic clicks actually land (GSC 06/2026), but the
 * only capture was a sidebar LINK to /contact. This adds an inline name+email
 * form at the end of the article so readers convert without leaving the post.
 *
 * Reuses the exact proven pipeline of HeroInlineForm / LeadFormInline:
 *   submitLead() → /api/notify-lead (Firestore write + Resend email) →
 *   trackFormSuccess → redirect to /thank-you, which fires the single lead
 *   conversion (Google Ads AW-18185532850 + GA4 Lead_Form_FactoryJet).
 *
 * source = `blog_<slug>` so leads are attributable to the specific post.
 * Only name + email required. Honeypot for spam; no blocking CAPTCHA.
 */

import React, { useState, useRef } from 'react';
import { submitLead } from '@/utils/submitLead';
import {
  trackFormStart,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
} from '@/utils/gtm';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface BlogLeadCaptureProps {
  /** Post slug — used to attribute the lead (source = blog_<slug>). */
  slug: string;
}

const BlogLeadCapture: React.FC<BlogLeadCaptureProps> = ({ slug }) => {
  const source = `blog_${slug}`;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
  };

  const canSubmit = name.trim() !== '' && EMAIL_RE.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Silent bot drop — honeypot filled. Do NOT navigate (no phantom conversion).
    if (honeypot.trim() !== '') return;
    if (!canSubmit) { setError('Please enter your name and a valid email.'); return; }
    setIsSubmitting(true);
    setError(null);
    trackFormSubmit(source, { service: '' });
    try {
      const { docId } = await submitLead({ name, email, region: 'us', source });
      trackFormSuccess(source);
      // Hard navigation so /thank-you always loads fresh (conversion lives there).
      window.location.assign(
        `/thank-you?source=${encodeURIComponent(source)}&service=unknown&region=us&lid=${encodeURIComponent(docId)}`
      );
      return;
    } catch (err) {
      console.error('Blog lead capture error:', err);
      trackFormError(source, 'submit_failed');
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    height: 46,
    border: '1px solid rgba(15,33,56,0.16)',
  };

  return (
    <section
      aria-label="Get a free plan for your site"
      className="my-8 overflow-hidden rounded-2xl"
      style={{
        background: 'linear-gradient(135deg,#0F2138 0%,#16324f 60%,#1c3e60 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      {/* warm glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', width: 240, height: 240, borderRadius: '50%',
          background: 'rgba(240,90,40,0.22)', filter: 'blur(60px)',
          top: -90, right: -70, pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 p-6 sm:p-7">
        <p
          className="mb-2.5 font-fj-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: '#F7A98C' }}
        >
          Want this done for you?
        </p>
        <h2 className="mb-2 font-fj-display text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[24px]">
          Get a free, <em className="not-italic italic" style={{ color: '#F05A28' }}>no-pitch</em> plan for your site.
        </h2>
        <p className="mb-4 max-w-[440px] font-fj-body text-[14.5px]" style={{ color: '#cdd7e1' }}>
          Tell us where to send it. Bhavesh, the founder, reviews every request himself and replies within
          24 hours, often the same day. Most sites ship in about 7 days.
        </p>

        <form onSubmit={handleSubmit} onFocus={onFirstInteraction}>
          <div
            className="flex flex-col gap-2.5 rounded-2xl bg-white p-2 sm:flex-row"
          >
            <input
              aria-label="Your name" type="text" autoComplete="name" placeholder="Your name"
              value={name} onChange={(e) => setName(e.target.value)}
              className="min-w-0 flex-1 rounded-xl px-3.5 font-fj-body text-[15px] text-[#0F2138] outline-none"
              style={inputStyle}
            />
            <input
              aria-label="Work email" type="email" autoComplete="email" placeholder="Work email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-xl px-3.5 font-fj-body text-[15px] text-[#0F2138] outline-none"
              style={inputStyle}
            />
            <button
              type="submit" disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 font-fj-display text-[15px] font-semibold text-white"
              style={{
                height: 46, background: '#B23E13',
                boxShadow: '0 4px 16px rgba(178,62,19,0.4)',
                whiteSpace: 'nowrap', opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? 'Sending…' : 'Get my free plan'}
              {!isSubmitting && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Honeypot — hidden from real users */}
          <input
            type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
            value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />

          <div className="mt-3 flex items-center gap-2 font-fj-body text-[12.5px]" style={{ color: '#aebccb' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', flexShrink: 0 }} aria-hidden="true" />
            <span><b className="font-semibold text-white">Founder replies within 24 hours.</b> No spam, no obligation.</span>
          </div>

          {error && <p className="mt-2 font-fj-body text-[13px]" style={{ color: '#FCA5A5' }}>{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default BlogLeadCapture;

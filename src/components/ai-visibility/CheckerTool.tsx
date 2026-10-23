'use client';

/**
 * CheckerTool — the client island for the AI Visibility Checker.
 *
 * Flow: gate form (Website + Full Name + Business Email + Phone + Company)
 *   → POST /api/ai-scan (captures the lead, then triggers the SIS scan)
 *   → poll /api/ai-scan/status?slug=… every 3s, showing live per-engine progress
 *   → render <ScoreReport/> when done.
 *
 * Lead capture happens server-side BEFORE any scan spend. On a successful submit
 * we fire the GTM `lead_converted` event once (→ GA4 generate_lead + US Ads),
 * exactly like /thank-you does, so this lead is counted without a redirect.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { pushToDataLayer } from '@/utils/gtm';
import ScoreReport from './ScoreReport';
import { ENGINE_LABELS, FREE_ENGINES, type ScanResult } from './types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POLL_MS = 3000;
const MAX_POLL_MS = 150_000; // ~2.5 min, then fall back to "we'll email it"

type Step = 'form' | 'scanning' | 'done' | 'emailed' | 'error';

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
}
function turnstileApi(): TurnstileApi | undefined {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile;
}

/**
 * Which Google Ads account should be credited for this lead.
 *
 * GTM routes region=uk to the London account (AW-11127037244) and region=us to
 * the US one (AW-18185532850); any other value is GA4-only, which is the correct
 * outcome for a market where we run no ads.
 *
 * This form has no country field, so the dialling code on the phone number is the
 * only region signal it actually collects. It used to be hardcoded to 'us', which
 * credited the US Ads account for every UK lead the checker produced and taught
 * Ads to bid against the wrong geography. Unknown or local-format numbers still
 * fall back to 'us', so existing US behaviour is unchanged.
 */
function regionFromPhone(mobile: string): string {
  const n = mobile.replace(/[^\d+]/g, '').replace(/^00/, '+');
  if (n.startsWith('+44')) return 'uk';
  if (n.startsWith('+971')) return 'ae';
  if (n.startsWith('+91')) return 'in';
  return 'us';
}

export default function CheckerTool() {
  const [step, setStep] = useState<Step>('form');
  const [form, setForm] = useState({ website: '', name: '', email: '', mobile: '', company: '' });
  const [honeypot, setHoneypot] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ScanResult | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const firedConv = useRef(false);
  // Turnstile: the server BLOCKS without a token (each scan costs money), so the
  // widget loads on first focus (not page load) and submit waits for its token.
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | null>(null);
  const turnstileToken = useRef('');

  const bind = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const stopPolling = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  };
  useEffect(() => stopPolling, []);

  useEffect(() => () => {
    const api = turnstileApi();
    if (turnstileId.current && api) api.remove(turnstileId.current);
  }, []);

  function loadTurnstile() {
    if (turnstileId.current || typeof window === 'undefined') return;
    const render = () => {
      const api = turnstileApi();
      const el = turnstileRef.current;
      if (!api || !el || turnstileId.current) return;
      turnstileId.current = api.render(el, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA',
        callback: (token: unknown) => { turnstileToken.current = String(token || ''); },
        'expired-callback': () => { turnstileToken.current = ''; },
        'error-callback': () => { turnstileToken.current = ''; },
        theme: 'light',
        appearance: 'interaction-only',
      });
    };
    if (turnstileApi()) { render(); return; }
    const id = 'cf-turnstile-script';
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) { existing.addEventListener('load', render); return; }
    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.defer = true;
    s.onload = render;
    document.head.appendChild(s);
  }

  /** Tokens are single-use: get a fresh one after any submit the server saw. */
  function resetTurnstile() {
    turnstileToken.current = '';
    const api = turnstileApi();
    if (turnstileId.current && api) {
      try { api.reset(turnstileId.current); } catch { /* widget gone; next focus re-renders */ }
    }
  }

  const poll = useCallback((slug: string, startedAt: number) => {
    stopPolling();
    const tick = async () => {
      if (Date.now() - startedAt > MAX_POLL_MS) {
        stopPolling();
        setStep('emailed');
        return;
      }
      try {
        const r = await fetch(`/api/ai-scan/status?slug=${encodeURIComponent(slug)}`);
        const d = (await r.json()) as ScanResult;
        if (d.progress) setProgress(d.progress);
        if (d.status === 'done') {
          stopPolling();
          setResult(d);
          setStep('done');
          pushToDataLayer({ event: 'ai_check_completed', lead_source: 'ai_visibility_checker', ai_score: d.score ?? null });
        } else if (d.status === 'failed') {
          stopPolling();
          setStep('emailed');
        }
      } catch {
        /* transient — keep polling */
      }
    };
    void tick();
    pollRef.current = setInterval(tick, POLL_MS);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== '') return; // silent bot drop
    if (
      !form.website.trim() ||
      !form.name.trim() ||
      !EMAIL_RE.test(form.email) ||
      !form.mobile.trim() ||
      !form.company.trim()
    ) {
      setErr('Please fill in every field, and use a valid business email.');
      return;
    }
    setErr(null);
    setSubmitting(true);
    // Give the invisible Turnstile check up to ~6 seconds to produce a token.
    loadTurnstile();
    for (let i = 0; i < 40 && !turnstileToken.current; i++) {
      await new Promise((r) => setTimeout(r, 150));
    }
    const turnstileTokenValue = turnstileToken.current;
    try {
      const res = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, company_url: honeypot, turnstileToken: turnstileTokenValue }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) {
        resetTurnstile();
        setErr(d.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      // Count the lead exactly once (GTM CE - lead_converted → GA4 + region-routed Ads).
      if (!firedConv.current) {
        firedConv.current = true;
        pushToDataLayer({
          event: 'lead_converted',
          region: regionFromPhone(form.mobile),
          lead_source: 'ai_visibility_checker',
          lead_id: d.slug || d.docId || 'ai_check',
        });
        pushToDataLayer({ event: 'ai_check_started', lead_source: 'ai_visibility_checker' });
      }
      if (d.slug) {
        setProgress(Object.fromEntries(FREE_ENGINES.map((eng) => [eng, 'running'])));
        setStep('scanning');
        poll(d.slug, Date.now());
      } else {
        // Lead is captured; the scan service just isn't reachable right now.
        setStep('emailed');
      }
    } catch {
      resetTurnstile();
      setErr('Network hiccup. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  /* ── DONE: the report ─────────────────────────────────────────────────── */
  if (step === 'done' && result) {
    return <ScoreReport result={result} website={form.website} company={form.company} />;
  }

  /* ── SCANNING: live per-engine progress ───────────────────────────────── */
  if (step === 'scanning') {
    return (
      <div className="avc-panel avc-scanning" aria-live="polite">
        <div className="avc-spinner" aria-hidden="true" />
        <h3 className="avc-scan-h">Asking the AI engines about {form.company || 'your business'}…</h3>
        <p className="avc-scan-sub">
          We&rsquo;re running real buyer questions through all three answer engines. This takes about a minute.
        </p>
        <ul className="avc-engine-list">
          {FREE_ENGINES.map((eng) => {
            const st = progress[eng] || 'running';
            return (
              <li key={eng} className={`avc-engine avc-engine--${st}`}>
                <span className="avc-engine-dot" aria-hidden="true" />
                <span className="avc-engine-name">{ENGINE_LABELS[eng]}</span>
                <span className="avc-engine-state">
                  {st === 'done' ? 'Done' : st === 'failed' ? 'Skipped' : 'Checking…'}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  /* ── EMAILED: lead captured, report will follow by email ──────────────── */
  if (step === 'emailed') {
    return (
      <div className="avc-panel avc-emailed" aria-live="polite">
        <div className="avc-check" aria-hidden="true">✓</div>
        <h3 className="avc-scan-h">You&rsquo;re in. Your report is on its way.</h3>
        <p className="avc-scan-sub">
          We&rsquo;ve got your details and we&rsquo;re finishing your AI visibility report for{' '}
          <b>{form.website}</b>. It lands in your inbox shortly, and Bhavesh personally reviews every request within 24 hours.
        </p>
        <a href="/contact" className="avc-btn avc-btn--primary">Talk to us about fixing it</a>
      </div>
    );
  }

  /* ── FORM: the gate ───────────────────────────────────────────────────── */
  return (
    <form onSubmit={submit} onFocusCapture={loadTurnstile} className="avc-panel avc-form" noValidate>
      <div className="avc-form-row">
        <label className="avc-field avc-field--full">
          <span className="avc-label">Your website</span>
          <input
            type="text" inputMode="url" autoComplete="url" placeholder="yourcompany.com"
            value={form.website} onChange={bind('website')} className="avc-input"          />
        </label>
      </div>
      <div className="avc-form-row avc-form-row--2">
        <label className="avc-field">
          <span className="avc-label">Full name</span>
          <input type="text" autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={bind('name')} className="avc-input" />
        </label>
        <label className="avc-field">
          <span className="avc-label">Business email</span>
          <input type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={bind('email')} className="avc-input" />
        </label>
      </div>
      <div className="avc-form-row avc-form-row--2">
        <label className="avc-field">
          <span className="avc-label">Phone</span>
          <input type="tel" autoComplete="tel" placeholder="+1 555 000 0100" value={form.mobile} onChange={bind('mobile')} className="avc-input" />
        </label>
        <label className="avc-field">
          <span className="avc-label">Company</span>
          <input type="text" autoComplete="organization" placeholder="Company name" value={form.company} onChange={bind('company')} className="avc-input" />
        </label>
      </div>

      {/* Honeypot, hidden from real users */}
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" placeholder="Company URL"
        value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {/* Invisible Turnstile (interaction-only); shows a checkbox only if Cloudflare needs one */}
      <div ref={turnstileRef} className="empty:hidden" />

      <button type="submit" disabled={submitting} className="avc-btn avc-btn--primary avc-btn--submit">
        {submitting ? 'Starting your scan…' : 'Run my free AI visibility report'}
        {!submitting && (
          <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {err && <p className="avc-err" role="alert">{err}</p>}
      <p className="avc-fineprint">
        Free. Results in about a minute. We check all three engines (ChatGPT, Perplexity, Google AI Overviews). No spam.
      </p>
    </form>
  );
}

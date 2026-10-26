'use client';

/**
 * Careers application form. Posts multipart to /api/job-application
 * (functions/api/job-application.js). Spec: docs/HIRING-PIPELINE-SPEC.md 4.3.
 *
 * Deliberately NOT wired to the lead pipeline: no submitLead, no form_submit /
 * form_success / generate_lead. Those feed GA4 conversions and Google Ads, and a
 * job seeker counted as a sales lead would skew both. The only event is
 * job_application_submit, which must not be marked as a conversion in GA4.
 *
 * Turnstile loads on the first interaction with the form, not on page load, and
 * runs invisibly (interaction-only), like ContactFormModal.
 */

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { pushToDataLayer } from '@/utils/gtm';
import { CONSENT_TEXT } from '@/data/careers';

const MAX_CV_BYTES = 5 * 1024 * 1024;
const MAX_NOTE_WORDS = 180;
const MAX_SHORT = 300;
const NOTICE_PERIODS = ['Immediate', '15 days', '30 days', '60 days', '90 days'];
const SOURCES: [string, string][] = [
  ['linkedin', 'LinkedIn'],
  ['naukri', 'Naukri'],
  ['indeed', 'Indeed'],
  ['website', 'FactoryJet website'],
  ['referral', 'Someone referred me'],
  ['other', 'Somewhere else'],
];

type Errors = Record<string, string>;

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
}
function turnstileApi(): TurnstileApi | undefined {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile;
}

function words(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}

const LABEL = 'block font-fj-body text-[0.9375rem] font-semibold text-fj-ink';
const HINT = 'mt-1 font-fj-body text-[0.8125rem] leading-relaxed text-fj-ink/70';
const INPUT =
  'mt-2 block w-full rounded-xl border border-fj-ink/20 bg-white px-4 py-3 font-fj-body text-[1rem] text-fj-ink ' +
  'placeholder:text-fj-ink/40 focus:border-fj-ink focus:outline-none focus:ring-2 focus:ring-fj-ink/15';
const ERROR = 'mt-1.5 font-fj-body text-[0.8125rem] font-medium text-[#B23E13]';

function Req() {
  return <span aria-hidden="true" className="text-[#B23E13]"> *</span>;
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return <p id={`${id}-error`} className={ERROR}>{msg}</p>;
}

export default function ApplicationForm({ roleSlug }: { roleSlug: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'failed'>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [note, setNote] = useState('');
  const [workNote, setWorkNote] = useState('');
  const [aiNote, setAiNote] = useState('');
  const [source, setSource] = useState('');
  const [cvName, setCvName] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | null>(null);
  const turnstileToken = useRef('');
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill "how did you hear" from ?source= on the job-board link.
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('source');
    if (s && SOURCES.some(([v]) => v === s.toLowerCase())) setSource(s.toLowerCase());
  }, []);

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

  function clientCheck(fd: FormData): Errors {
    const e: Errors = {};
    const file = fd.get('cv');
    if (!(file instanceof File) || file.size === 0) e.cv = 'Please attach your CV.';
    else if (file.size > MAX_CV_BYTES) e.cv = 'Your CV is over 5 MB. Please send a smaller file.';
    else if (!/\.(pdf|docx)$/i.test(file.name)) e.cv = 'Please attach your CV as a PDF or Word (.docx) file.';
    const n = words(note);
    if (n < 20) e.ai_search_note = 'Please write your note (around 150 words).';
    else if (n > MAX_NOTE_WORDS) e.ai_search_note = `Please keep it under ${MAX_NOTE_WORDS} words. You have ${n}.`;
    if (workNote.length > MAX_SHORT) e.work_note = `Keep it under ${MAX_SHORT} characters.`;
    if (aiNote.length > MAX_SHORT) e.ai_note = `Keep it under ${MAX_SHORT} characters.`;
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === 'sending') return;
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const local = clientCheck(fd);
    if (Object.keys(local).length) {
      setErrors(local);
      focusFirstError(local);
      return;
    }
    fd.set('role', roleSlug);

    setStatus('sending');
    setErrors({});
    // Always ask for a fresh token here. The widget rendered on first focus, and a
    // token lives 5 minutes: candidates spend far longer than that (the note sends
    // them to ChatGPT in another tab, where the auto-refresh timer is paused), so
    // the first token went stale. Most likely cause of 5 real candidates saved as
    // 'failed', 16-20 Oct 2026. Without a token the server still saves the application but
    // sends no receipt email.
    turnstileToken.current = '';
    const api = turnstileApi();
    if (turnstileId.current && api) {
      try { api.reset(turnstileId.current); } catch { /* widget gone; render again below */ }
    }
    loadTurnstile();
    for (let i = 0; i < 34 && !turnstileToken.current; i++) {
      await new Promise((r) => setTimeout(r, 150));
    }
    if (turnstileToken.current) fd.set('cf-turnstile-response', turnstileToken.current);
    try {
      const res = await fetch('/api/job-application', { method: 'POST', body: fd });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: Errors };
      if (res.ok && body.ok) {
        pushToDataLayer({ event: 'job_application_submit', job_id: roleSlug });
        setStatus('done');
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (body.errors) {
        setErrors(body.errors);
        focusFirstError(body.errors);
        setStatus('idle');
        return;
      }
      setStatus('failed');
    } catch {
      setStatus('failed');
    }
  }

  function focusFirstError(e: Errors) {
    const first = Object.keys(e)[0];
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
    el?.focus();
  }

  const a11y = (name: string) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  if (status === 'done') {
    return (
      <div role="status" className="mt-8 rounded-2xl border border-fj-ink/10 bg-fj-cream p-7">
        <p className="font-fj-display text-[1.375rem] font-extrabold tracking-[-0.02em] text-fj-ink">Got it.</p>
        <p className="mt-2 font-fj-body text-[1rem] leading-relaxed text-fj-ink/80">
          Your application reached us. A confirmation email is on its way. You will hear from us within 7 days either way.
        </p>
      </div>
    );
  }

  const noteWords = words(note);

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onFocusCapture={loadTurnstile}
      noValidate
      encType="multipart/form-data"
      className="mt-8 space-y-7"
    >
      {/* Spam trap. Hidden from people and screen readers; bots fill it. The name and
          label must not look like a contact field: Chrome ignores autoComplete="off"
          and autofilled the old "company_website" trap for a real candidate. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>Leave this empty<input type="text" name="fj_hp_x" tabIndex={-1} autoComplete="off" data-1p-ignore data-lpignore="true" /></label>
      </div>

      <fieldset className="space-y-6">
        <legend className="font-fj-mono text-[0.75rem] uppercase tracking-[0.12em] text-fj-ink/60">About you</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={LABEL}>Full name<Req /></label>
            <input id="name" name="name" type="text" autoComplete="name" required className={INPUT} {...a11y('name')} />
            <FieldError id="name" msg={errors.name} />
          </div>
          <div>
            <label htmlFor="email" className={LABEL}>Email<Req /></label>
            <input id="email" name="email" type="email" autoComplete="email" required className={INPUT} {...a11y('email')} />
            <FieldError id="email" msg={errors.email} />
          </div>
          <div>
            <label htmlFor="phone" className={LABEL}>Phone<Req /></label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" required className={INPUT} {...a11y('phone')} />
            <FieldError id="phone" msg={errors.phone} />
          </div>
          <div>
            <label htmlFor="linkedin" className={LABEL}>LinkedIn profile</label>
            <input id="linkedin" name="linkedin" type="url" inputMode="url" placeholder="linkedin.com/in/..." className={INPUT} {...a11y('linkedin')} />
            <FieldError id="linkedin" msg={errors.linkedin} />
          </div>
        </div>
        <div>
          <label htmlFor="cv" className={LABEL}>CV<Req /></label>
          <p className={HINT}>PDF or Word (.docx), up to 5 MB.</p>
          <input
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            onChange={(e) => setCvName(e.target.files?.[0]?.name ?? '')}
            className="mt-2 block w-full font-fj-body text-[0.9375rem] text-fj-ink file:mr-4 file:rounded-lg file:border-0 file:bg-fj-ink file:px-4 file:py-2.5 file:font-semibold file:text-white"
            {...a11y('cv')}
          />
          {cvName && !errors.cv ? <p className={HINT}>Selected: {cvName}</p> : null}
          <FieldError id="cv" msg={errors.cv} />
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-fj-mono text-[0.75rem] uppercase tracking-[0.12em] text-fj-ink/60">Your work</legend>
        <div>
          <label htmlFor="work_link" className={LABEL}>Link to one piece of work you are proud of<Req /></label>
          <input id="work_link" name="work_link" type="url" inputMode="url" required className={INPUT} {...a11y('work_link')} />
          <FieldError id="work_link" msg={errors.work_link} />
        </div>
        <div>
          <label htmlFor="work_note" className={LABEL}>What did you change in that work?<Req /></label>
          <textarea id="work_note" name="work_note" rows={3} required value={workNote} onChange={(e) => setWorkNote(e.target.value)} className={INPUT} {...a11y('work_note')} />
          <p className={HINT}>{workNote.length} / {MAX_SHORT} characters</p>
          <FieldError id="work_note" msg={errors.work_note} />
        </div>
        <div>
          <label htmlFor="ai_link" className={LABEL}>Link to something you built or fixed with Claude Code, Codex or a similar tool<Req /></label>
          <input id="ai_link" name="ai_link" type="url" inputMode="url" required className={INPUT} {...a11y('ai_link')} />
          <FieldError id="ai_link" msg={errors.ai_link} />
        </div>
        <div>
          <label htmlFor="ai_note" className={LABEL}>What did the AI do, and what did you do?<Req /></label>
          <textarea id="ai_note" name="ai_note" rows={3} required value={aiNote} onChange={(e) => setAiNote(e.target.value)} className={INPUT} {...a11y('ai_note')} />
          <p className={HINT}>{aiNote.length} / {MAX_SHORT} characters</p>
          <FieldError id="ai_note" msg={errors.ai_note} />
        </div>
        <div>
          <label htmlFor="ai_search_note" className={LABEL}>Your 150-word note<Req /></label>
          <p className={HINT}>
            Pick any online store. Ask ChatGPT or Perplexity a question that store&rsquo;s buyers would ask. Tell us what the
            answer got right or wrong about that store.
          </p>
          <textarea id="ai_search_note" name="ai_search_note" rows={8} required value={note} onChange={(e) => setNote(e.target.value)} className={INPUT} {...a11y('ai_search_note')} />
          <p className={`${HINT} ${noteWords > MAX_NOTE_WORDS ? 'font-semibold text-[#B23E13]' : ''}`}>{noteWords} words (aim for about 150, {MAX_NOTE_WORDS} at most)</p>
          <FieldError id="ai_search_note" msg={errors.ai_search_note} />
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-fj-mono text-[0.75rem] uppercase tracking-[0.12em] text-fj-ink/60">Practical questions</legend>
        {([
          ['onsite_ok', 'Can you work from our office near Kundalahalli, ITPL Road, 5 days a week?'],
          ['salary_ok', 'Does ₹30,000 to ₹35,000 per month, plus a quarterly incentive, work for you?'],
        ] as const).map(([name, q]) => (
          <fieldset key={name} {...a11y(name)}>
            <legend className={LABEL}>{q}<Req /></legend>
            <div className="mt-2 flex gap-3">
              {(['yes', 'no'] as const).map((v) => (
                <label key={v} className="flex cursor-pointer items-center gap-2 rounded-xl border border-fj-ink/20 bg-white px-4 py-2.5 font-fj-body text-[0.9375rem] text-fj-ink has-[:checked]:border-fj-ink has-[:checked]:bg-fj-cream">
                  <input type="radio" name={name} value={v} required className="accent-fj-ink" />
                  {v === 'yes' ? 'Yes' : 'No'}
                </label>
              ))}
            </div>
            <FieldError id={name} msg={errors[name]} />
          </fieldset>
        ))}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="notice_period" className={LABEL}>Notice period<Req /></label>
            <select id="notice_period" name="notice_period" required defaultValue="" className={INPUT} {...a11y('notice_period')}>
              <option value="" disabled>Choose one</option>
              {NOTICE_PERIODS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <FieldError id="notice_period" msg={errors.notice_period} />
          </div>
          <div>
            <label htmlFor="current_city" className={LABEL}>Where do you live now?<Req /></label>
            <input id="current_city" name="current_city" type="text" autoComplete="address-level2" required className={INPUT} {...a11y('current_city')} />
            <FieldError id="current_city" msg={errors.current_city} />
          </div>
        </div>
        <div>
          <label htmlFor="source" className={LABEL}>How did you hear about this role?</label>
          <select id="source" name="source" value={source} onChange={(e) => setSource(e.target.value)} className={INPUT}>
            <option value="">Choose one</option>
            {SOURCES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-3 font-fj-body text-[0.875rem] leading-relaxed text-fj-ink/80">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 flex-shrink-0 accent-fj-ink" {...a11y('consent')} />
          <span>{CONSENT_TEXT}<Req /></span>
        </label>
        <FieldError id="consent" msg={errors.consent} />
      </div>

      <div ref={turnstileRef} />

      {errors.form ? <p className={ERROR}>{errors.form}</p> : null}
      {Object.keys(errors).length > 0 ? (
        <p role="alert" className={ERROR}>Please fix the highlighted fields above.</p>
      ) : null}
      {status === 'failed' ? (
        <p role="alert" className={ERROR}>
          Something went wrong on our side and your application was not sent. Please try again in a minute.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-xl bg-fj-ink px-7 py-3.5 font-fj-body text-[1rem] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send application'}
      </button>
    </form>
  );
}

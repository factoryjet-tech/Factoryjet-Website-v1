'use client';

/**
 * ThankYouContent — client half of the /thank-you page.
 *
 * This page is the SINGLE SOURCE OF TRUTH for the lead conversion. Both lead
 * forms (the sitewide ContactFormModal and the inline LeadFormInline) now
 * redirect here after the Firestore write succeeds, instead of firing the
 * conversion inline + showing an inline success message. Anchoring the
 * conversion to a real destination URL is what makes GA4 / Google Ads /
 * GSC measurement reliable (see research summary 2026-06-18):
 *   - GA4 gets a genuine page_view on a unique URL to mark as a key event.
 *   - Google Ads gets a clean destination-URL conversion.
 *   - The page is noindex + excluded from every sitemap, so organic/direct
 *     hits can't reach it and inflate the count.
 *
 * Double-count guard: the lead_converted event is pushed exactly once per
 * submission. The form passes a unique ?lid=<docId>; we record it in
 * sessionStorage so a refresh or back-button on /thank-you does NOT re-count the
 * conversion. No PII (name/email) is ever placed in the URL — only
 * source/service/region/lid.
 *
 * GTM (single source of truth) listens for the `lead_converted` custom event and
 * fires: GA4 generate_lead + the region-routed Google Ads conversion (UK ->
 * AW-11127037244 London, US -> AW-18185532850). This page issues NO gtag() calls.
 */

import { useEffect } from 'react';
import { CheckCircle, CalendarClock, ArrowRight } from 'lucide-react';
import { pushToDataLayer } from '@/utils/gtm';

const CALENDLY_URL = 'https://calendly.com/bhavesh-factoryjet/30min';

export default function ThankYouContent() {
  // ── Emit the conversion exactly once, on the destination URL ──────────────
  useEffect(() => {
    let lid = '';
    let source = '';
    let region = 'us';
    try {
      const sp = new URLSearchParams(window.location.search);
      lid = sp.get('lid') ?? '';
      source = sp.get('source') ?? '';
      region = (sp.get('region') || 'us').toLowerCase();
    } catch {
      /* no-op */
    }

    // Only count a conversion for a REAL submission — it must carry a lead id
    // (lid). Direct visits and bots that reach /thank-you without a lid render
    // the page but never fire the conversion, so the count stays clean.
    if (!lid) return;

    // One dataLayer push -> GTM fires GA4 generate_lead + the region-routed Ads
    // conversion. region tells GTM which Ads account to credit (uk|us|…).
    const fire = () =>
      pushToDataLayer({
        event: 'lead_converted',
        region,
        lead_source: source || 'unknown',
        lead_id: lid,
      });

    const key = `fj_conv_${lid}`;
    try {
      if (sessionStorage.getItem(key)) return; // already counted this submission
      fire();
      sessionStorage.setItem(key, '1');
    } catch {
      // sessionStorage blocked (private mode etc.) — still count the conversion.
      fire();
    }
  }, []);

  return (
    <main className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-10 text-center sm:px-6">
      {/* Soft brand wash behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(120% 90% at 50% -10%, #FFF4EF 0%, #ffffff 60%)' }}
      />

      {/* Success check */}
      <div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
        style={{ animation: 'fjPop 0.5s cubic-bezier(.2,.8,.2,1.2)' }}
      >
        <CheckCircle size={44} className="text-[#10B981]" strokeWidth={2.4} />
      </div>

      <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
        Request received
      </p>

      <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0A0F1C] sm:text-5xl md:text-6xl">
        You&rsquo;re in, <em className="not-italic text-[#F05A28] italic">let&rsquo;s build</em>.
      </h1>

      <p className="mb-7 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
        Bhavesh reads your request himself and replies within 24 hours, often the same day.
        Want answers sooner? Pick a call time that works for you.
      </p>

      {/* CTAs */}
      <div className="mb-3 flex flex-wrap items-center justify-center gap-3.5">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          /* GTM auto-fires book_call_click (GA4) + the Book-Call Ads conversion on
             any calendly.com click — no inline gtag needed. */
          className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#B23E13] px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_26px_-10px_rgba(240,90,40,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#d44d1f]"
        >
          <CalendarClock size={18} />
          Book a 30-min call now
        </a>
        <a
          href="/portfolio"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border-[1.5px] border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-[#0A0F1C] transition-all hover:border-[#F05A28] hover:text-[#F05A28]"
        >
          See our work
        </a>
      </div>
      <p className="mt-1.5 text-[13px] text-slate-400">
        No commitment · We reply within 24 hours · No spam
      </p>

      {/* What happens next */}
      <section
        aria-label="What happens next"
        className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3"
      >
        {[
          { n: 1, h: 'We read your request', p: 'Bhavesh reviews every lead himself. No junior reps, no bots.' },
          { n: 2, h: 'You hear back in 24h', p: 'A real reply with next steps and a few questions about your goals.' },
          { n: 3, h: 'We scope and quote', p: 'A clear plan and timeline. Most sites ship in about 7 days.' },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#FFF0EA] text-sm font-extrabold text-[#B23E13]">
              {s.n}
            </div>
            <h2 className="mb-1.5 text-[15px] font-bold text-[#0A0F1C]">{s.h}</h2>
            <p className="text-[13.5px] leading-relaxed text-slate-500">{s.p}</p>
          </div>
        ))}
      </section>

      {/* Trust strip */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-600">
        <span>500+ businesses served</span>
        <span className="text-[#F05A28]">•</span>
        <span>12+ years expertise</span>
        <span className="text-[#F05A28]">•</span>
        <span>7-day delivery guarantee</span>
      </div>

      <a
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-[#F05A28]"
      >
        Back to home <ArrowRight size={15} />
      </a>

      <style>{`@keyframes fjPop{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>
    </main>
  );
}

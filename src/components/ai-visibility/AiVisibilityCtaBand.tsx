import Link from 'next/link';

/**
 * AiVisibilityCtaBand — a compact, on-brand CTA that funnels high-intent pages
 * into the free AI Visibility Checker lead magnet. Light (never dark), left-
 * aligned, brand orange. Drop it into any relevant page:
 *
 *   import AiVisibilityCtaBand from '@/components/ai-visibility/AiVisibilityCtaBand';
 *   <AiVisibilityCtaBand />
 *
 * Server component — no client JS.
 */
export default function AiVisibilityCtaBand() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-8">
      <div
        className="flex flex-col items-start gap-5 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        style={{ background: '#FFF8F5', borderColor: '#F0D9CD' }}
      >
        <div>
          <span className="font-fj-mono text-[11px] uppercase tracking-[0.08em]" style={{ color: '#C94A1A' }}>
            // free tool
          </span>
          <h3 className="mt-1.5 font-fj-display text-[19px] font-bold leading-tight text-[#14110F] sm:text-[21px]">
            Does ChatGPT actually recommend your business?
          </h3>
          <p className="mt-1.5 max-w-[52ch] font-fj-body text-[14px] leading-relaxed text-[#46403B]">
            Run a free check across ChatGPT, Perplexity, and Google AI Overviews. See your AI visibility score and the fixes, in about a minute.
          </p>
        </div>
        <Link
          href="/ai-visibility-checker"
          className="inline-flex flex-none items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-fj-display text-[15px] font-semibold text-white"
          style={{ background: '#B23E13', boxShadow: '0 6px 18px rgba(178,62,19,0.28)', whiteSpace: 'nowrap' }}
        >
          Run my free check
          <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

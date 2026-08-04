import Image from 'next/image';

/**
 * FinalCTAUS — homepage closing CTA (US). A deep-navy "room" with a single
 * orange glow: founder-led ask on the left, real client proof beside it
 * (reviews-near-CTA is a proven conversion lift). Homepage-scoped so the shared
 * TalkToFounder stays untouched on every other page. Pure server component.
 * Copy is plain, US English, with no em-dashes.
 */

const CALENDLY_URL = 'https://calendly.com/bhavesh-factoryjet/30min';
const CONTACT_EMAIL = 'bhavesh@factoryjet.com';

export default function FinalCTAUS() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('FactoryJet project inquiry')}`;
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#0B1F38' }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{ top: '-180px', right: '-120px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,90,40,0.16), transparent 62%)' }}
      />
      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Left, founder-led ask */}
          <div>
            <p className="font-fj-mono font-semibold uppercase" style={{ fontSize: '11px', letterSpacing: '0.16em', color: '#F05A28' }}>
              Before you commit
            </p>
            <h2 className="fj-display font-semibold mt-4" style={{ color: '#FFFFFF', fontSize: 'clamp(1.875rem, 3.6vw, 2.6rem)', lineHeight: 1.08, letterSpacing: '-0.025em', maxWidth: '15ch' }}>
              Talk to the founder, not a sales rep.
            </h2>
            <p className="mt-4 font-fj-body" style={{ color: 'rgba(255,255,255,0.74)', fontSize: '1rem', lineHeight: 1.62, maxWidth: '52ch' }}>
              Bhavesh takes every first call himself. By minute 10 you will know if the project pays for itself, and you will leave with a clear plan and a fixed price within 24 hours. The call is free and there is no pressure.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full font-fj-body font-semibold text-white"
                style={{ backgroundColor: '#B23E13', fontSize: '0.9375rem', padding: '14px 24px', boxShadow: '0 8px 26px rgba(178,62,19,0.36)' }}
              >
                Book a 30-minute call
              </a>
              <a
                href={mailto}
                className="inline-flex items-center rounded-full font-fj-body font-semibold text-white"
                style={{ border: '1px solid rgba(255,255,255,0.28)', fontSize: '0.9375rem', padding: '14px 22px' }}
              >
                Email the founder
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <span className="flex items-center justify-center rounded-full font-fj-display font-bold text-white" style={{ width: 46, height: 46, fontSize: 20, background: 'linear-gradient(135deg,#F05A28,#C8431A)' }}>
                B
              </span>
              <span>
                <span className="block font-fj-body font-semibold text-white" style={{ fontSize: 14 }}>Bhavesh, Founder of FactoryJet</span>
                <span className="block font-fj-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>You work with me directly. No handoffs.</span>
              </span>
            </div>
          </div>

          {/* Right, real client proof beside the ask */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: 20 }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
              <Image src="/images/testimonials/ricky-belle-maison-160.webp" alt="Ricky B, Belle Maison" width={46} height={46} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <span>
                <span className="block font-fj-body font-semibold text-white" style={{ fontSize: 14 }}>Ricky B</span>
                <span className="block font-fj-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Belle Maison</span>
              </span>
            </div>
            <p className="font-fj-body" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.875rem', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '2px solid #F05A28', paddingLeft: 12, marginBottom: 16 }}>
              &quot;We were live in just 6 days. I honestly did not think that was possible. New inquiries come in every day, and the site is still really fast.&quot;
            </p>
            <div className="flex items-center gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 14 }}>
              <span aria-hidden="true" style={{ color: '#F05A28', fontSize: 13, letterSpacing: 1 }}>★★★★★</span>
              <span className="font-fj-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>
                <strong className="text-white">4.9 on Clutch</strong> · 150+ verified reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

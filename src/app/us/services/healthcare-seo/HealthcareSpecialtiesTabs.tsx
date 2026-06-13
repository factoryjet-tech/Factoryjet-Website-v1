'use client';

/**
 * HealthcareSpecialtiesTabs — interactive tab-selector version of the
 * 6-specialty listicle. Client component so tab state works in Next.js.
 * Design rules: brand palette only, Plus Jakarta/Inter/Geist Mono, 100/100 perf safe.
 */

import { useState, useCallback } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

const specialties = [
  {
    id: 'dental',
    number: '01',
    name: 'Dental practices',
    shortName: 'Dental',
    why: '"Dentist near me" drives over 550,000 monthly searches in the US. Dental implants and restorative procedures carry among the highest per-appointment values in healthcare. A practice ranking in the 3-Pack in a mid-size market can attribute 30–60 new patients per month to organic alone — with zero ongoing ad spend once the map pack position is held.',
    signal: 'Map pack + dental directory citations',
    signalDetail: 'Google Business Profile, Zocdoc, 1-800-Dentist, Healthgrades, review velocity.',
    stat: '550K+',
    statLabel: 'monthly "dentist near me" searches',
  },
  {
    id: 'mental-health',
    number: '02',
    name: 'Mental health and therapy',
    shortName: 'Therapy',
    why: 'Demand for therapists, psychologists, and counselors surged post-2020 and has not receded. "Therapist near me" sees 110,000+ monthly searches with relatively low competition in smaller markets. Psychology Today\'s directory alone can drive significant referral volume, but only if your organic presence supports and validates the listing.',
    signal: 'Map pack + Psychology Today listing + condition pages',
    signalDetail: 'Local rankings, condition-specific pages (anxiety, depression, OCD), Psychology Today profile.',
    stat: '110K+',
    statLabel: 'monthly "therapist near me" searches',
  },
  {
    id: 'chiropractic',
    number: '03',
    name: 'Chiropractic and physical therapy',
    shortName: 'Chiro / PT',
    why: 'Chiropractic and PT have high visit frequency — patients return weekly for months. A new patient acquired through SEO has a significantly higher lifetime value than a single-appointment specialty. "Chiropractor near me" and "physical therapist near me" both drive 200,000+ monthly searches nationally, with strong near-me intent that is almost entirely won in the Map Pack.',
    signal: 'Map pack dominance + GBP review velocity',
    signalDetail: 'Near-me ranking, review cadence program, citation building, GBP photo optimization.',
    stat: '200K+',
    statLabel: 'monthly near-me searches (chiro + PT combined)',
  },
  {
    id: 'dermatology',
    number: '04',
    name: 'Dermatology',
    shortName: 'Dermatology',
    why: 'Dermatology blends medical intent ("dermatologist for eczema") with cosmetic intent ("Botox provider near me"), giving practices two distinct content and ranking tracks. Cosmetic procedure pages (laser resurfacing, filler, Botox) rank well with proper E-E-A-T content and earn AI citations when patients ask ChatGPT for provider recommendations.',
    signal: 'Map pack + cosmetic service pages + AI citations',
    signalDetail: 'Dual-track strategy: medical condition pages + cosmetic procedure pages, both AI-citation ready.',
    stat: '135K+',
    statLabel: 'monthly "dermatologist near me" searches',
  },
  {
    id: 'telehealth',
    number: '05',
    name: 'Telehealth platforms',
    shortName: 'Telehealth',
    why: 'Telehealth SEO is national-reach, content-led, and increasingly dependent on AI citations. When a patient asks ChatGPT "what is the best telehealth platform for anxiety" or "online psychiatry that takes insurance," the platforms with the strongest FAQ and condition-page E-E-A-T are cited. No map pack required — pure content and AI-citation strategy.',
    signal: 'AI citations + national organic + condition pages',
    signalDetail: 'FAQPage schema, condition hubs, insurance coverage pages, AI Overview positioning.',
    stat: '27K+',
    statLabel: 'monthly "online doctor" searches (national)',
  },
  {
    id: 'orthopedics',
    number: '06',
    name: 'Orthopedics and sports medicine',
    shortName: 'Ortho',
    why: 'Orthopedic and sports medicine practices handle high-value elective procedures (ACL repair, joint replacement, rotator cuff surgery) where the patient often researches extensively before choosing a surgeon. E-E-A-T-compliant procedure pages with surgeon bylines, peer-reviewed citations, and outcome data — structured for both Google and AI Overviews — capture this high-intent research phase.',
    signal: 'E-E-A-T procedure pages + surgeon bylines + AI citations',
    signalDetail: 'Surgeon bio pages, procedure outcome pages, peer-reviewed citation integration, AIO positioning.',
    stat: 'High-value',
    statLabel: 'elective procedure pipeline per patient',
  },
];

export default function HealthcareSpecialtiesTabs() {
  const [active, setActive] = useState(0);
  const handleTab = useCallback((idx: number) => setActive(idx), []);

  const current = specialties[active];

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        {/* Header */}
        <div className="max-w-[720px]">
          <p className="fj-eyebrow">HEALTHCARE SEO ROI</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.375rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            6 healthcare specialties where SEO generates the clearest, most measurable ROI.
          </h2>
          <p
            className="mt-4 font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Not every healthcare category gets the same return from SEO investment. These six specialties share high patient search volume, clear local intent, and repeat or high-value appointments that make SEO the most efficient patient acquisition channel available.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Healthcare specialty tabs"
        >
          {specialties.map((s, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`specialty-panel-${s.id}`}
                id={`specialty-tab-${s.id}`}
                onClick={() => handleTab(idx)}
                className="rounded-full px-5 py-2 font-fj-body text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: isActive ? '#F05A28' : 'rgba(15,15,18,0.06)',
                  color: isActive ? '#FFFFFF' : 'rgba(15,15,18,0.65)',
                  border: isActive ? 'none' : '1px solid rgba(15,15,18,0.12)',
                  boxShadow: isActive ? '0 4px 14px rgba(240,90,40,0.28)' : 'none',
                  outlineColor: '#F05A28',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <span style={{ color: isActive ? 'rgba(255,255,255,0.65)' : 'rgba(15,15,18,0.40)', marginRight: '6px', fontSize: '11px' }}>
                  {s.number}
                </span>
                {s.shortName}
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          id={`specialty-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`specialty-tab-${current.id}`}
          className="mt-6"
        >
          <div
            className="rounded-2xl p-7 md:p-10"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(15,15,18,0.09)',
              boxShadow: '0 2px 16px rgba(15,15,18,0.06)',
            }}
          >
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Left — main content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="fj-display font-bold"
                    style={{ color: 'rgba(240,90,40,0.22)', fontSize: '3.5rem', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {current.number}
                  </span>
                  <h3
                    className="fj-display font-semibold"
                    style={{ color: '#0F0F12', fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
                  >
                    {current.name}
                  </h3>
                </div>

                <p
                  className="font-fj-body"
                  style={{ color: 'rgba(15,15,18,0.72)', fontSize: '1rem', lineHeight: 1.7 }}
                >
                  {current.why}
                </p>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#F05A28',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 16px rgba(240,90,40,0.28)',
                  }}
                >
                  Book a free {current.shortName.toLowerCase()} SEO audit <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Right — signal card */}
              <div
                className="mt-8 lg:mt-0 lg:w-[280px] lg:shrink-0"
              >
                {/* Stat badge */}
                <div
                  className="rounded-xl p-5 mb-4"
                  style={{
                    backgroundColor: 'rgba(240,90,40,0.05)',
                    border: '1px solid rgba(240,90,40,0.18)',
                  }}
                >
                  <p
                    className="fj-display font-bold"
                    style={{ color: '#F05A28', fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.02em' }}
                  >
                    {current.stat}
                  </p>
                  <p
                    className="mt-1 font-fj-body"
                    style={{ color: 'rgba(15,15,18,0.65)', fontSize: '0.8125rem', lineHeight: 1.45 }}
                  >
                    {current.statLabel}
                  </p>
                </div>

                {/* Primary signal */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: '#FAFAF7',
                    border: '1px solid rgba(15,15,18,0.09)',
                  }}
                >
                  <p
                    className="font-fj-mono font-bold uppercase"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#F05A28' }}
                  >
                    Primary signal
                  </p>
                  <p
                    className="mt-2 font-fj-body font-semibold"
                    style={{ color: '#0F0F12', fontSize: '0.875rem', lineHeight: 1.4 }}
                  >
                    {current.signal}
                  </p>
                  <p
                    className="mt-2 font-fj-body"
                    style={{ color: 'rgba(15,15,18,0.55)', fontSize: '0.8125rem', lineHeight: 1.5 }}
                  >
                    {current.signalDetail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: '#F05A28',
              color: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(240,90,40,0.28)',
            }}
          >
            Book a free healthcare SEO audit <span aria-hidden="true">→</span>
          </a>
          <Link
            href="/us/services/local-seo"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90"
            style={{
              color: '#F05A28',
              border: '1.5px solid #F05A28',
            }}
          >
            See our local SEO service
          </Link>
        </div>
      </div>
    </section>
  );
}

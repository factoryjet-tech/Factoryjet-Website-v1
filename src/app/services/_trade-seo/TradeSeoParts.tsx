import Link from 'next/link';
import type { ReactNode } from 'react';

import type { FAQItem } from '@/components/v2/FAQ';
import type { BreadcrumbItem } from '@/components/v2/Breadcrumbs';

/* ─────────────────────────────────────────────────────────────────────────────
   Shared building blocks for the home-services trade pages
   (/services/plumber-seo, /services/electrician-seo, /services/cleaning-company-seo).

   Only layout chrome and schema builders live here. Every sentence of copy stays
   in the page file, so each trade page reads as its own page and the three cannot
   drift into one find-and-replace template. The `_` prefix keeps this folder out
   of the App Router.
───────────────────────────────────────────────────────────────────────────── */

export const ORANGE = '#F05A28';
export const ORANGE_DARK = '#B23E13';
export const CREAM = '#FAFAF7';
export const PEACH = '#FAEDE5';
export const GREEN = '#0E5C46';
export const GREEN_BRIGHT = '#0C7150';
export const GREEN_SOFT = '#DCEFE6';
export const HAIRLINE = 'rgba(15,15,18,0.10)';

export const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
export const HUB_HREF = '/services/home-services-seo';

export function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CrossCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
      {children}
    </p>
  );
}

export function H2({ children, id, max = 780 }: { children: ReactNode; id?: string; max?: number }) {
  return (
    <h2
      id={id}
      className="fj-display mt-3.5 font-bold text-fj-ink"
      style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em', maxWidth: max }}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, max = 700 }: { children: ReactNode; max?: number }) {
  return (
    <p
      className="mt-4 font-fj-body font-medium text-fj-neutral-600"
      style={{ fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: max }}
    >
      {children}
    </p>
  );
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
      {children}
    </Link>
  );
}

export type VolumeRow = { k: string; v: string };

/** Hard-edged demand card: real DataForSEO numbers only, with the pull date. */
export function VolumeCard({ title, rows, note }: { title: string; rows: ReadonlyArray<VolumeRow>; note: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 sm:p-6" style={{ borderColor: HAIRLINE, boxShadow: '0 18px 44px rgba(20,18,12,0.08)' }}>
      <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">{title}</span>
      <ul className="mt-3 space-y-2.5">
        {rows.map((row) => (
          <li
            key={row.k}
            className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
            style={{ borderColor: 'rgba(15,15,18,0.08)' }}
          >
            <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
            <span className="text-right font-fj-mono text-[0.75rem] tabular-nums" style={{ color: ORANGE_DARK }}>
              {row.v}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-fj-body text-[0.75rem] leading-[1.5] text-fj-neutral-600">{note}</p>
    </div>
  );
}

export type Source = { src: string; title: string; body: string; href: string };

export function SourceCards({ sources }: { sources: ReadonlyArray<Source> }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
      {sources.map((c) => (
        <div key={c.href} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
          <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-600">{c.src}</span>
          <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
            {c.title}
          </h3>
          <p className="mt-2.5 flex-1 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{c.body}</p>
          <a
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-bold underline underline-offset-4"
            style={{ color: ORANGE_DARK }}
          >
            Read the source <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export function TwoLists({
  goodTitle,
  good,
  badTitle,
  bad,
  footer,
}: {
  goodTitle: string;
  good: ReadonlyArray<string>;
  badTitle: string;
  bad: ReadonlyArray<string>;
  footer?: ReactNode;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
        <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">{goodTitle}</h3>
        <ul className="mt-5 space-y-3.5">
          {good.map((line) => (
            <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
              <CheckCircle size={18} /> {line}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
        <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">{badTitle}</h3>
        <ul className="mt-5 space-y-3.5">
          {bad.map((line) => (
            <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
              <CrossCircle size={18} /> {line}
            </li>
          ))}
        </ul>
        {footer ? <div className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{footer}</div> : null}
      </div>
    </div>
  );
}

export type RelatedCard = { label: string; href: string; desc: string };

export function RelatedGrid({ cards }: { cards: ReadonlyArray<RelatedCard> }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((svc) => (
        <Link
          key={svc.href}
          href={svc.href}
          className="flex min-h-[150px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
          style={{ border: `1px solid ${HAIRLINE}`, background: CREAM }}
        >
          <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
            {svc.label}
          </h3>
          <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">{svc.desc}</p>
          <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
            Explore &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Schema builders. FAQPage is derived from the same array the visible <FAQ>
   renders, and BreadcrumbList from the same array <Breadcrumbs> renders, so the
   JSON-LD can never claim content the page does not show.
───────────────────────────────────────────────────────────────────────────── */

type SchemaInput = {
  url: string;
  name: string;
  description: string;
  serviceName: string;
  serviceType: string;
  audience: string;
  reviewed: string; // ISO date
  speakable: string[];
  offers: ReadonlyArray<{ title: string; body: string }>;
  faq: ReadonlyArray<FAQItem>;
  breadcrumbs: ReadonlyArray<BreadcrumbItem>;
};

export function buildTradeSchemas(s: SchemaInput) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${s.url}#webpage`,
      url: s.url,
      name: s.name,
      description: s.description,
      inLanguage: 'en-US',
      dateModified: s.reviewed,
      lastReviewed: s.reviewed,
      isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
      about: { '@type': 'Thing', name: s.serviceName },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: s.speakable },
      reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.serviceName,
      serviceType: s.serviceType,
      url: s.url,
      description: s.description,
      areaServed: { '@type': 'Country', name: 'United States' },
      audience: { '@type': 'BusinessAudience', name: s.audience },
      provider: {
        '@type': 'Organization',
        '@id': 'https://factoryjet.com/#organization',
        name: 'FactoryJet',
        url: 'https://factoryjet.com',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${s.serviceName} program`,
        itemListElement: s.offers.map((d) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: d.title, description: d.body },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: s.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ];
}

export function JsonLd({ id, data }: { id: string; data: ReadonlyArray<object> }) {
  return (
    <>
      {data.map((d, i) => (
        <script
          key={`${id}-${i}`}
          id={`${id}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

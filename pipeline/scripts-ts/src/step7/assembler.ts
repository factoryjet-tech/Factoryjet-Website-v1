#!/usr/bin/env node
/**
 * Step 7 page assembler.
 *
 * Reads pipeline/scripts-ts/data/generated/{country}/{city}/{service}.copy.json
 * and writes a Next.js TSX page component to
 *   <repo-root>/src/app/<locale-base-path>/{city-slug}/{service-slug}/page.tsx
 *
 * Pure data → template. No LLM calls. The output is a Next.js Server
 * Component (no 'use client'), importing v2 components from src/components/v2/.
 *
 * CLI:
 *   pnpm assemble --city <slug> --service <slug> [--country <gb|us|au|ae|in|br|mx>]
 *                 [--dry-run]
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PageCopyOutput, PricingDisplay, CompetitorComparison } from './types.js';
import type { CountryCode } from '../../lib/locales/types.js';
import { localeBasePath } from '../../lib/locales/paths.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// pipeline/scripts-ts/src/step7/ -> pipeline/scripts-ts/
const SCRIPTS_TS_ROOT = join(__dirname, '..', '..');
// pipeline/scripts-ts/ -> repo root
const REPO_ROOT = join(SCRIPTS_TS_ROOT, '..', '..');

interface CliArgs {
  city: string;
  service: string;
  country: CountryCode;
  dryRun: boolean;
  help: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    city: '',
    service: 'web-design',
    country: 'gb',
    dryRun: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') args.help = true;
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--city') {
      const v = argv[++i];
      if (!v) throw new Error('--city requires a value');
      args.city = v;
    } else if (a === '--service') {
      const v = argv[++i];
      if (!v) throw new Error('--service requires a value');
      args.service = v;
    } else if (a === '--country') {
      const v = argv[++i];
      const validCountries: CountryCode[] = ['gb', 'us', 'au', 'ae', 'in', 'br', 'mx'];
      if (!validCountries.includes(v as CountryCode)) {
        throw new Error(
          `invalid --country: ${v}. Must be one of: ${validCountries.join(', ')}`,
        );
      }
      args.country = v as CountryCode;
    } else {
      throw new Error(`unknown argument: ${a}`);
    }
  }
  return args;
}

function printHelp(): void {
  // eslint-disable-next-line no-console
  console.log(
    [
      'Usage: pnpm assemble --city <slug> --service <slug> [--country gb|us|au|ae|in|br|mx] [--dry-run]',
      '',
      '  Reads data/generated/<country>/<city>/<service>.copy.json',
      '  Writes <repo>/src/app/<locale-path>/<city>/<service>/page.tsx',
    ].join('\n'),
  );
}

/* ------------------------------------------------------------------ */
/*   Escape helpers                                                    */
/* ------------------------------------------------------------------ */

/** Escape a string for safe interpolation inside a JSX text node.
 *  Backtick is also escaped (&#96;) to avoid breaking template-literal
 *  embedding in the assembler when city copy contains backtick chars. */
function jsxEscape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/`/g, '&#96;');
}

/** Escape a string for use as a JS string literal (single-quoted).
 *  Backtick is escaped so values are safe inside the assembler's own
 *  template literals when building the page header lines. */
function jsString(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/`/g, '\\`')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

function cityNameFromSlug(slug: string): string {
  return slug.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

/* ------------------------------------------------------------------ */
/*   Adapter helpers (assembly-time, not emitted into the TSX)        */
/* ------------------------------------------------------------------ */

/** Split a body string into paragraphs on blank-line boundaries. */
function splitParagraphs(body: string): string[] {
  return body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

/** Pad a 1-based step number to two digits: 1 → "01", 10 → "10". */
function padStepNumber(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

/** Append duration to a step description with an em-dash separator.
 *  If duration is absent or empty, returns description unchanged. */
function embedDuration(description: string, duration: string | undefined): string {
  return duration ? `${description} — ${duration}` : description;
}

/** Append bestFor prose to a pricing tier description.
 *  Normalises trailing punctuation so the join reads as one sentence. */
function embedBestFor(description: string, bestFor: string | undefined): string {
  if (!bestFor) return description;
  const base = description.replace(/\.\s*$/, '');
  const bfClean = bestFor.replace(/\.\s*$/, '').toLowerCase();
  return `${base}. Best for ${bfClean}.`;
}

interface MappedPricingTier {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  popular?: boolean;
}

/** Map a pipeline PricingDisplay to the v2 PricingTier prop shape.
 *  Field renames: priceLabel→priceRange, includes→features, highlight→popular.
 *  bestFor is prose-joined into description. Uniform CTA injected. */
function mapPricingTierForV2(tier: PricingDisplay): MappedPricingTier {
  const mapped: MappedPricingTier = {
    name: tier.name,
    priceRange: tier.priceLabel,
    description: embedBestFor(tier.description, tier.bestFor),
    features: tier.includes,
    cta: { label: 'Get a quote', href: '/contact' },
  };
  if (tier.highlight) mapped.popular = true;
  return mapped;
}

/** Map competitor comparisons to ComparisonTable rows (3 data columns).
 *  feature = competitor name; values = [theirPrice, ourPrice, ourAdvantage]. */
function mapCompetitorsToComparisonRows(
  competitors: CompetitorComparison[],
): Array<{ feature: string; values: string[] }> {
  return competitors.map((cp) => ({
    feature: cp.name,
    values: [cp.theirPrice, cp.ourPrice, cp.ourAdvantage],
  }));
}

/* ------------------------------------------------------------------ */
/*   Section emitters — return JSX component invocation strings       */
/*   that are joined into <main> by generatePageTSX.                  */
/* ------------------------------------------------------------------ */

function genHero(c: PageCopyOutput): string {
  const s = c.sections.hero;
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = `WEB DESIGN · ${cityName.toUpperCase()}`;
  const headline = s.headline ?? c.meta.h1;
  const lead = s.body ?? '';
  const ctaLabel = s.ctaText ?? 'Get a quote';
  const trustItems = s.dataPoints ?? [];
  const svcSlug  = c.input.service.slug;
  const country  = c.input.country;
  const citySlug = c.input.city.citySlug;
  // Locale-aware image path — populated by generate-images.ts before Next.js build
  const heroImg  = `/images/${country}/${citySlug}/${svcSlug}/hero.webp`;

  return [
    `      <Hero`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
    `        lead={${JSON.stringify(lead)}}`,
    `        primaryCta={{ label: ${JSON.stringify(ctaLabel)}, href: '/contact' }}`,
    `        trustItems={${JSON.stringify(trustItems)}}`,
    `        rightSlot={<img src="${heroImg}" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}`,
    `      />`,
  ].join('\n');
}

function genCityContext(c: PageCopyOutput): string {
  const s = c.sections.cityContext;
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = `${cityName.toUpperCase()} MARKET`;
  const headline = s.headline ?? `${cityName} Market Context`;
  const leadParagraphs = splitParagraphs(s.body);
  // source → sourceUrl rename (StatBlock.source maps to CityContextSectionProps.stats.sourceUrl)
  const stats = s.stats.map((st) => ({
    value: st.value,
    label: st.label,
    sourceUrl: st.source,
  }));

  return [
    `      <CityContextSection`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
    `        leadParagraphs={${JSON.stringify(leadParagraphs)}}`,
    `        stats={${JSON.stringify(stats)}}`,
    `      />`,
  ].join('\n');
}

function genServiceExplanation(c: PageCopyOutput): string {
  const s = c.sections.serviceExplanation;
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = `WEB DESIGN · ${cityName}`;
  const headline = s.headline ?? `Web Design Built for ${cityName}'s Economy`;
  const paragraphs = splitParagraphs(s.body);
  const lead = paragraphs[0] ?? '';
  const bodyParagraphs = paragraphs.slice(1);
  const bodyJsx = bodyParagraphs.map((p) => `<p>${jsxEscape(p)}</p>`).join('');
  const svcSlug = c.input.service.slug;

  const lines = [
    `      <ServiceExplanation`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
    `        lead={${JSON.stringify(lead)}}`,
  ];
  if (bodyJsx) {
    lines.push(`        body={<>${bodyJsx}</>}`);
  }
  lines.push(
    `        rightSlot={<img src="/images/services/${svcSlug}/service-explanation.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}`,
    `      />`,
  );
  return lines.join('\n');
}

function genWhyFactoryJet(c: PageCopyOutput): string {
  const s = c.sections.whyFactoryJet;
  if (s.competitors.length < 2) {
    throw new Error(
      `[assemble] whyFactoryJet must have at least 2 competitors; found ${s.competitors.length}`,
    );
  }
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = 'WHY FACTORYJET';
  const headline = s.headline ?? `The ${cityName} Agency Alternative`;

  // 3 data columns: Their pricing | FactoryJet (highlighted) | Why we cost less
  // feature (left label) = competitor name
  const columns = [
    { label: 'Their pricing' },
    { label: 'FactoryJet', isFactoryJet: true },
    { label: 'Why we cost less' },
  ];
  const rows = mapCompetitorsToComparisonRows(s.competitors);

  const lines = [
    `      <ComparisonTable`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
  ];
  if (s.body) {
    lines.push(`        lead={${JSON.stringify(s.body)}}`);
  }
  lines.push(
    `        columns={${JSON.stringify(columns)}}`,
    `        rows={${JSON.stringify(rows)}}`,
    `      />`,
  );
  return lines.join('\n');
}

function genProcess(c: PageCopyOutput): string {
  const p = c.sections.process;
  if (!p.steps || p.steps.length === 0) {
    throw new Error(`[assemble] Process section has no steps`);
  }
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = 'OUR PROCESS';
  const headline = p.headline ?? `How We Build Your ${cityName} Website`;
  const stages = p.steps.map((s) => ({
    number: padStepNumber(s.step),
    title: s.title,
    description: embedDuration(s.description, s.duration),
  }));

  return [
    `      <ServiceJourneyRow`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
    `        stages={${JSON.stringify(stages)}}`,
    `      />`,
  ].join('\n');
}

function genIndustries(c: PageCopyOutput): string {
  const s = c.sections.industries;
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = `${cityName.toUpperCase()} × WEB DESIGN`;
  const headline = s.headline ?? `Web Design for ${cityName}'s Key Sectors`;
  const sectors = s.sectors.map((sec) => ({
    name: sec.name,
    description: sec.description,
    ...(sec.example ? { example: sec.example } : {}),
  }));

  const lines = [
    `      <IndustriesGrid`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
  ];
  if (s.body) {
    lines.push(`        lead={${JSON.stringify(s.body)}}`);
  }
  lines.push(`        sectors={${JSON.stringify(sectors)}}`, `      />`);
  return lines.join('\n');
}

function genPricing(c: PageCopyOutput): string {
  const s = c.sections.pricing;
  if (s.tiers.length < 3) {
    throw new Error(
      `[assemble] Pricing section must have exactly 3 tiers; found ${s.tiers.length}`,
    );
  }
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = 'TRANSPARENT PRICING';
  const headline = s.headline ?? `Web Design Pricing for ${cityName} Businesses`;
  // Non-null assertions safe: length guard above guarantees all three exist.
  const t0 = mapPricingTierForV2(s.tiers[0]!);
  const t1 = mapPricingTierForV2(s.tiers[1]!);
  const t2 = mapPricingTierForV2(s.tiers[2]!);

  const lines = [
    `      <PricingTiers`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
  ];
  if (s.body) {
    lines.push(`        lead={${JSON.stringify(s.body)}}`);
  }
  // Inline 3 separate object literals so TypeScript contextually types as the
  // required readonly [PricingTier, PricingTier, PricingTier] tuple.
  lines.push(
    `        tiers={[`,
    `          ${JSON.stringify(t0)},`,
    `          ${JSON.stringify(t1)},`,
    `          ${JSON.stringify(t2)}`,
    `        ] as const}`,
    `      />`,
  );
  return lines.join('\n');
}

function genFAQ(c: PageCopyOutput): string {
  // sections.faq only has { items: FAQItem[] } — eyebrow/headline are hardcoded
  const cityName = cityNameFromSlug(c.meta.slug);
  const headline = `Common Questions from ${cityName} Businesses`;
  const items = c.sections.faq.items;

  return [
    `      <FAQ`,
    `        eyebrow="COMMON QUESTIONS"`,
    `        headline={${JSON.stringify(headline)}}`,
    `        items={${JSON.stringify(items)}}`,
    `      />`,
  ].join('\n');
}

function genFinalCTA(c: PageCopyOutput): string {
  const s = c.sections.finalCta;
  const cityName = cityNameFromSlug(c.meta.slug);
  const eyebrow = 'READY TO START';
  const headline = s.headline ?? `Ready to Build a ${cityName} Website That Wins Clients?`;
  const ctaLabel = s.ctaText ?? 'Get a quote';

  return [
    `      <FinalCTA`,
    `        variant="dark"`,
    `        eyebrow={${JSON.stringify(eyebrow)}}`,
    `        headline={${JSON.stringify(headline)}}`,
    `        sub={${JSON.stringify(s.body)}}`,
    `        primaryCta={{ label: ${JSON.stringify(ctaLabel)}, href: '/contact' }}`,
    `      />`,
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/*   New section emitters — sections 03 / 04 / 07 / 09 / 13          */
/* ------------------------------------------------------------------ */

/**
 * 03 · LogoBar — "Trusted by 500+ businesses" strip.
 * Static brand content. Logo list managed in the LogoBar component itself.
 */
function genLogoBar(): string {
  return [
    `      <LogoBar`,
    `        tagline="Trusted by 500+ businesses across the US, UK, and UAE"`,
    `      />`,
  ].join('\n');
}

/**
 * 04 · BigThreeTrustBlock — 3 core stats + optional city stat.
 * City stat (4th card) is injected when enriched cityBusinessCount is available.
 */
function genBigThree(c: PageCopyOutput): string {
  const cityName = cityNameFromSlug(c.meta.slug);
  const headline = `Results that ${cityName} businesses trust.`;
  // The city-specific stat comes from the CityContextSection stats.
  // We surface the first stat that has a value that looks like a count (contains 'K' or '+').
  const cityStats = c.sections.cityContext.stats ?? [];
  const cityStat = cityStats.find((s) => /K|M|\+/.test(s.value));
  const cityStatProp = cityStat
    ? `cityCount={{ value: ${JSON.stringify(cityStat.value)}, label: ${JSON.stringify(cityStat.label)}, source: ${JSON.stringify(cityStat.source ?? '')} }}`
    : undefined;

  const lines = [
    `      <BigThreeTrustBlock`,
    `        eyebrow="BY THE NUMBERS"`,
    `        headline={${JSON.stringify(headline)}}`,
  ];
  if (cityStatProp) lines.push(`        ${cityStatProp}`);
  lines.push(`      />`);
  return lines.join('\n');
}

/**
 * 07 · StrategicDarkSection — Navy BG, 3 hardcoded "Why FactoryJet" pillars.
 * Max 1 of 2 dark sections on the page. Positioned mid-page after ServiceExplanation.
 * City name injected into headline and competitive pricing context.
 */
function genStrategicDark(c: PageCopyOutput): string {
  const cityName = cityNameFromSlug(c.meta.slug);
  // Prefer the whyFactoryJet headline for continuity with copy JSON.
  const headline = c.sections.whyFactoryJet.headline ?? `We're not a local ${cityName} agency. That's the point.`;
  const lead     = c.sections.whyFactoryJet.body    ?? '';

  return [
    `      <StrategicDarkSection`,
    `        eyebrow="WHY FACTORYJET"`,
    `        headline={${JSON.stringify(headline)}}`,
    ...(lead ? [`        lead={${JSON.stringify(lead)}}`] : []),
    `        pillars={[`,
    `          { title: 'AI-native',    body: 'Every site is built with AI-assisted workflow — compressing build time without compressing quality. We have run 500+ projects through this system.' },`,
    `          { title: 'Transparent',  body: 'Pricing on the first call. No discovery fees, no \\'it depends\\' quotes that arrive three weeks later. Fixed price. Agreed up front.' },`,
    `          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\\'t pay. We have delivered on time on 97% of all projects.' },`,
    `        ]}`,
    `      />`,
  ].join('\n');
}

/**
 * 09 · PortfolioShowcase — 3 case study cards.
 * Industries are matched to the city's top sectors from the enriched data.
 * Each card's image path follows the locale-aware convention:
 *   /images/{country}/{city}/{service}/portfolio-{index}.webp
 */
function genPortfolio(c: PageCopyOutput): string {
  const cityName = cityNameFromSlug(c.meta.slug);
  const country  = c.input.country;
  const citySlug = c.input.city.citySlug;
  const svcSlug  = c.input.service.slug;
  const headline = `What ${cityName} businesses look like after FactoryJet.`;

  // Derive up to 3 industries from the enriched sectors list.
  const sectors = c.sections.industries.sectors.slice(0, 3);
  const cards = sectors.map((sec, i) => ({
    industry:    sec.name,
    title:       `${cityName} ${sec.name} Client`,
    description: sec.description,
    imageSrc:    `/images/${country}/${citySlug}/${svcSlug}/portfolio-${i + 1}.webp`,
    stat1:       '+40% conversions',
    stat2:       '< 1.5s load time',
  }));

  return [
    `      <PortfolioShowcase`,
    `        eyebrow="RECENT WORK"`,
    `        headline={${JSON.stringify(headline)}}`,
    `        cards={${JSON.stringify(cards)}}`,
    `        ctaHref="/us/portfolio"`,
    `        ctaLabel="View full portfolio"`,
    `      />`,
  ].join('\n');
}

/**
 * 13 · TestimonialsSection — 3 curated testimonials.
 * Static curation: real testimonials stored in the TestimonialsSection component.
 * City name surfaced in the headline for local relevance signal.
 */
function genTestimonials(c: PageCopyOutput): string {
  const cityName = cityNameFromSlug(c.meta.slug);
  const headline = `4.9/5 across 150+ reviews from ${cityName} and beyond.`;

  return [
    `      <TestimonialsSection`,
    `        eyebrow="WHAT CLIENTS SAY"`,
    `        headline={${JSON.stringify(headline)}}`,
    `      />`,
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/*   Schema script — preserved unchanged from pre-patch assembler     */
/* ------------------------------------------------------------------ */

function genSchemaScript(c: PageCopyOutput): string {
  const cityName = cityNameFromSlug(c.meta.slug);
  const locale = c.input.locale;

  const faqSchema = c.sections.faq.items.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: it.answer,
    },
  }));

  const basePath = localeBasePath(locale);

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `https://factoryjet.com${c.meta.canonicalUrl}#business`,
        name: 'FactoryJet Technologies',
        url: 'https://factoryjet.com',
        telephone: '+919103398557',
        areaServed: cityName,
        priceRange: c.input.service.priceRange[c.input.country],
      },
      {
        '@type': 'Service',
        '@id': `https://factoryjet.com${c.meta.canonicalUrl}#service`,
        name: `Web Design ${cityName}`,
        provider: {
          '@type': 'Organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: cityName,
        description: c.meta.description,
      },
      {
        '@type': 'FAQPage',
        '@id': `https://factoryjet.com${c.meta.canonicalUrl}#faq`,
        mainEntity: faqSchema,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://factoryjet.com${c.meta.canonicalUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          {
            '@type': 'ListItem',
            position: 2,
            name: locale.countryName,
            item: `https://factoryjet.com${basePath}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cityName,
            item: `https://factoryjet.com${basePath}/${c.meta.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Web Design',
            item: `https://factoryjet.com${c.meta.canonicalUrl}`,
          },
        ],
      },
    ],
  };

  // Embed as a JSON literal inside dangerouslySetInnerHTML.
  const json = JSON.stringify(schemaGraph)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');

  return `function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: '${jsString(json)}' }}
    />
  );
}`;
}

/* ------------------------------------------------------------------ */
/*   Top-level template                                                */
/* ------------------------------------------------------------------ */

function pageFunctionName(citySlug: string, serviceSlug: string): string {
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const cityPart = citySlug.split('-').map(cap).join('');
  const servicePart = serviceSlug.split('-').map(cap).join('');
  return `${cityPart}${servicePart}Page`;
}

export function generatePageTSX(output: PageCopyOutput): string {
  const fnName = pageFunctionName(output.input.city.citySlug, output.input.service.slug);
  const country = output.input.country;
  const citySlug = output.input.city.citySlug;
  const svcSlug = output.input.service.slug;

  // Build header lines in an array to avoid template-literal backtick hazards
  // from user-controlled data (meta.title, meta.description, canonicalUrl).
  const header = [
    `// AUTO-GENERATED by pipeline/scripts-ts/src/step7/assembler.ts`,
    `// Source: pipeline/scripts-ts/data/generated/${country}/${citySlug}/${svcSlug}.copy.json`,
    `// Do not edit by hand — re-run \`pnpm assemble --city ${citySlug} --service ${svcSlug} --country ${country}\` after copy regeneration.`,
    ``,
    `import type { Metadata } from 'next';`,
    `import Hero from '@/components/v2/Hero';`,
    `import LogoBar from '@/components/v2/LogoBar';`,
    `import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';`,
    `import CityContextSection from '@/components/v2/CityContextSection';`,
    `import ServiceExplanation from '@/components/v2/ServiceExplanation';`,
    `import StrategicDarkSection from '@/components/v2/StrategicDarkSection';`,
    `import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';`,
    `import PortfolioShowcase from '@/components/v2/PortfolioShowcase';`,
    `import ComparisonTable from '@/components/v2/ComparisonTable';`,
    `import PricingTiers from '@/components/v2/PricingTiers';`,
    `import IndustriesGrid from '@/components/v2/IndustriesGrid';`,
    `import TestimonialsSection from '@/components/v2/TestimonialsSection';`,
    `import FAQ from '@/components/v2/FAQ';`,
    `import FinalCTA from '@/components/v2/FinalCTA';`,
    ``,
    `export const metadata: Metadata = {`,
    `  title: '${jsString(output.meta.title)}',`,
    `  description: '${jsString(output.meta.description)}',`,
    `  alternates: {`,
    `    canonical: 'https://factoryjet.com${output.meta.canonicalUrl}',`,
    `  },`,
    `};`,
    ``,
    `export default function ${fnName}() {`,
    `  return (`,
    `    <main className="bg-fj-cream">`,
  ];

  const footer = [
    `    </main>`,
    `  );`,
    `}`,
    ``,
  ];

  // Emit all 15 sections in canonical order, then the SchemaScript.
  // Section order must match pipeline/brand-references/factoryjet-canonical.html v3.0.
  return [
    ...header,
    genHero(output),              // 02 · Hero            — always light
    genLogoBar(),                 // 03 · LogoBar          — static trust strip
    genBigThree(output),          // 04 · BigThreeTrustBlock
    genCityContext(output),       // 05 · CityContextSection
    genServiceExplanation(output),// 06 · ServiceExplanation
    genStrategicDark(output),     // 07 · StrategicDarkSection (dark slot 1/2)
    genProcess(output),           // 08 · ProcessJourneyRow
    genPortfolio(output),         // 09 · PortfolioShowcase
    genWhyFactoryJet(output),     // 10 · ComparisonTable
    genPricing(output),           // 11 · PricingTiers
    genIndustries(output),        // 12 · IndustriesGrid
    genTestimonials(output),      // 13 · TestimonialsSection
    genFAQ(output),               // 14 · FAQ              — static HTML, no JS
    genFinalCTA(output),          // 15 · FinalCTA
    `      <SchemaScript />`,     // Schema.org — SSR, no JS required
    ...footer,
    genSchemaScript(output),
    ``,
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/*   CLI                                                               */
/* ------------------------------------------------------------------ */

function copyJsonPath(country: string, citySlug: string, serviceSlug: string): string {
  return join(
    SCRIPTS_TS_ROOT,
    'data',
    'generated',
    country,
    citySlug,
    `${serviceSlug}.copy.json`,
  );
}

function pageOutputPath(output: PageCopyOutput): string {
  const basePath = localeBasePath(output.input.locale).slice(1);
  const citySlug = output.input.city.citySlug;
  const serviceSlug = output.input.service.slug;
  return join(REPO_ROOT, 'src', 'app', basePath, citySlug, serviceSlug, 'page.tsx');
}

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  let args: CliArgs;
  try {
    args = parseArgs(argv);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`error: ${err instanceof Error ? err.message : String(err)}\n`);
    printHelp();
    process.exit(2);
  }

  if (args.help || !args.city) {
    if (!args.help && !args.city) {
      // eslint-disable-next-line no-console
      console.error('error: --city is required\n');
    }
    printHelp();
    process.exit(args.help ? 0 : 2);
  }

  const inputPath = copyJsonPath(args.country, args.city, args.service);
  if (!existsSync(inputPath)) {
    // eslint-disable-next-line no-console
    console.error(
      `[assemble] Copy JSON not found: ${inputPath}\nRun \`pnpm generate --city ${args.city} --service ${args.service} --country ${args.country}\` first.`,
    );
    process.exit(1);
  }

  const raw = readFileSync(inputPath, 'utf-8');
  let copy: PageCopyOutput;
  try {
    copy = JSON.parse(raw) as PageCopyOutput;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      `[assemble] Copy JSON is not valid JSON: ${err instanceof Error ? err.message : String(err)}`,
    );
    process.exit(1);
  }

  const tsx = generatePageTSX(copy);
  const lineCount = tsx.split('\n').length;

  if (args.dryRun) {
    const preview = tsx.split('\n').slice(0, 60).join('\n');
    // eslint-disable-next-line no-console
    console.log(preview);
    // eslint-disable-next-line no-console
    console.log(
      `\n[dry-run] Would write ${lineCount} lines to: ${pageOutputPath(copy)}`,
    );
    return;
  }

  const outPath = pageOutputPath(copy);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, tsx, 'utf-8');
  const relPath = outPath.replace(REPO_ROOT + '/', '');
  // eslint-disable-next-line no-console
  console.log(`Written: ${relPath} (${lineCount} lines)`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`[assemble] fatal: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});

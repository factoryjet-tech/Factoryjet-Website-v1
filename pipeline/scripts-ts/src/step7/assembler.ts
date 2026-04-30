#!/usr/bin/env node
/**
 * Step 7 page assembler.
 *
 * Reads pipeline/scripts-ts/data/generated/{country}/{city}/{service}.copy.json
 * and writes a Next.js TSX page component to
 *   <repo-root>/src/app/uk/{city-slug}/{service-slug}/page.tsx
 *
 * Pure data → template. No LLM calls. The output is a Next.js Server
 * Component (no 'use client'), with all FAQ content rendered in static
 * HTML so AI crawlers can index it without JS execution.
 *
 * CLI:
 *   pnpm assemble --city <slug> --service <slug> [--country <gb|us|au|ca>]
 *                 [--dry-run]
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PageCopyOutput } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// pipeline/scripts-ts/src/step7/ -> pipeline/scripts-ts/
const SCRIPTS_TS_ROOT = join(__dirname, '..', '..');
// pipeline/scripts-ts/ -> repo root
const REPO_ROOT = join(SCRIPTS_TS_ROOT, '..', '..');

interface CliArgs {
  city: string;
  service: string;
  country: 'gb' | 'us' | 'au' | 'ca';
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
      if (v !== 'gb' && v !== 'us' && v !== 'au' && v !== 'ca') {
        throw new Error(`invalid --country: ${v}`);
      }
      args.country = v;
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
      'Usage: pnpm assemble --city <slug> --service <slug> [--country gb|us|au|ca] [--dry-run]',
      '',
      '  Reads data/generated/<country>/<city>/<service>.copy.json',
      '  Writes <repo>/src/app/uk/<city>/<service>/page.tsx',
    ].join('\n'),
  );
}

/* ------------------------------------------------------------------ */
/*   Escape helpers                                                    */
/* ------------------------------------------------------------------ */

/** Escape a string for safe interpolation inside a JSX text node. */
function jsxEscape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

/** Escape a string for use as a JS string literal (single-quoted). */
function jsString(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

/** Render a body string as paragraphs split on \n\n. */
function renderParagraphs(body: string, className: string): string {
  const paras = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return paras
    .map(
      (p) =>
        `        <p className="${className}">${jsxEscape(p)}</p>`,
    )
    .join('\n');
}

/* ------------------------------------------------------------------ */
/*   Section generators                                                */
/* ------------------------------------------------------------------ */

function genHero(c: PageCopyOutput): string {
  const h = c.sections.hero;
  const headline = c.meta.h1 || h.headline || '';
  const subheadline = h.subheadline ?? '';
  const body = h.body ?? '';
  const ctaText = h.ctaText || 'Get a Free Quote';
  const dataPoints = h.dataPoints ?? [];

  return `function HeroSection() {
  return (
    <section className="bg-[#0A0F1C] text-white min-h-[80vh] flex flex-col justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">${jsxEscape(headline)}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl">${jsxEscape(subheadline)}</p>
        <p className="text-lg text-gray-400 mt-6 max-w-2xl leading-relaxed">${jsxEscape(body)}</p>
        ${
          dataPoints.length > 0
            ? `<div className="flex flex-wrap gap-4 mt-8">
${dataPoints
  .map(
    (dp) =>
      `          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm">
            <span className="text-[#10B981]" aria-hidden="true">✓</span>
            <span>${jsxEscape(dp)}</span>
          </span>`,
  )
  .join('\n')}
        </div>`
            : ''
        }
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            ${jsxEscape(ctaText)}
          </Link>
        </div>
      </div>
    </section>
  );
}`;
}

function genCityContext(c: PageCopyOutput): string {
  const s = c.sections.cityContext;
  const headline = s.headline ?? 'London Market Context';
  const body = s.body ?? '';
  const stats = s.stats ?? [];

  return `function CityContextSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">London Market</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">${jsxEscape(headline)}</h2>
        <div className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl space-y-4">
${renderParagraphs(body, 'text-lg text-gray-600 leading-relaxed')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
${stats
  .map(
    (st) =>
      `          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-[#0052CC]">${jsxEscape(st.value)}</div>
            <div className="text-sm text-gray-500 mt-1">${jsxEscape(st.label)}</div>
            <a
              href="${jsxEscape(st.source)}"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 mt-2 inline-block hover:text-[#0052CC] transition-colors"
            >
              Source ↗
            </a>
          </div>`,
  )
  .join('\n')}
        </div>
      </div>
    </section>
  );
}`;
}

function genServiceExplanation(c: PageCopyOutput): string {
  const s = c.sections.serviceExplanation;
  const headline = s.headline ?? "Web Design Built for London's Economy";
  const body = s.body ?? '';

  return `function ServiceExplanationSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">Web Design London</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 max-w-3xl">${jsxEscape(headline)}</h2>
        <div className="mt-8 max-w-3xl space-y-4">
${renderParagraphs(body, 'text-lg text-gray-700 leading-relaxed')}
        </div>
      </div>
    </section>
  );
}`;
}

function genWhyFactoryJet(c: PageCopyOutput): string {
  const s = c.sections.whyFactoryJet;
  const headline = s.headline ?? 'Why FactoryJet';
  const subheadline = s.subheadline ?? '';
  const body = s.body ?? '';
  const competitors = s.competitors ?? [];
  const dataPoints = s.dataPoints ?? [];

  return `function WhyFactoryJetSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">Why FactoryJet</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">${jsxEscape(headline)}</h2>
        ${subheadline ? `<p className="text-xl text-gray-600 mt-3 max-w-3xl">${jsxEscape(subheadline)}</p>` : ''}
        <div className="mt-6 max-w-3xl space-y-4">
${renderParagraphs(body, 'text-lg text-gray-700 leading-relaxed')}
        </div>
        <div className="overflow-x-auto mt-12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-50 text-left p-3 text-sm font-semibold text-gray-700">Agency</th>
                <th className="bg-gray-50 text-left p-3 text-sm font-semibold text-gray-700">Their Pricing</th>
                <th className="bg-gray-50 text-left p-3 text-sm font-semibold text-gray-700">FactoryJet</th>
                <th className="bg-gray-50 text-left p-3 text-sm font-semibold text-gray-700">Our Advantage</th>
              </tr>
            </thead>
            <tbody>
${competitors
  .map(
    (cp) =>
      `              <tr>
                <td className="p-3 text-sm border-b border-gray-100 font-medium text-gray-900">${jsxEscape(cp.name)}</td>
                <td className="p-3 text-sm border-b border-gray-100 text-gray-600">${jsxEscape(cp.theirPrice)}</td>
                <td className="p-3 text-sm border-b border-gray-100 text-[#0052CC] font-semibold">${jsxEscape(cp.ourPrice)}</td>
                <td className="p-3 text-sm border-b border-gray-100 text-gray-700">${jsxEscape(cp.ourAdvantage)}</td>
              </tr>`,
  )
  .join('\n')}
            </tbody>
          </table>
        </div>
        ${
          dataPoints.length > 0
            ? `<ul className="mt-8 space-y-2 max-w-3xl">
${dataPoints
  .map(
    (dp) =>
      `          <li className="flex gap-3 text-gray-700"><span className="text-[#10B981] flex-shrink-0" aria-hidden="true">✓</span><span>${jsxEscape(dp)}</span></li>`,
  )
  .join('\n')}
        </ul>`
            : ''
        }
      </div>
    </section>
  );
}`;
}

function genProcess(c: PageCopyOutput): string {
  const p = c.sections.process;
  const headline = p.headline ?? 'How We Build Your London Website';
  const steps = p.steps ?? [];

  return `function ProcessSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">Our Process</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">${jsxEscape(headline)}</h2>
        <ol className="mt-12 space-y-8 max-w-3xl">
${steps
  .map(
    (st) =>
      `          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold">${st.step}</span>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">${jsxEscape(st.title)}</h3>
              <p className="text-xs text-[#FF6B35] font-medium mt-1">${jsxEscape(st.duration)}</p>
              <p className="text-gray-600 mt-2 leading-relaxed">${jsxEscape(st.description)}</p>
            </div>
          </li>`,
  )
  .join('\n')}
        </ol>
      </div>
    </section>
  );
}`;
}

function genIndustries(c: PageCopyOutput): string {
  const s = c.sections.industries;
  const headline = s.headline ?? "Web Design for London's Key Sectors";
  const body = s.body ?? '';
  const sectors = s.sectors ?? [];

  return `function IndustriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">Industries We Serve</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">${jsxEscape(headline)}</h2>
        ${body ? `<p className="text-lg text-gray-600 mt-6 max-w-3xl leading-relaxed">${jsxEscape(body)}</p>` : ''}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
${sectors
  .map(
    (sec) =>
      `          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">${jsxEscape(sec.name)}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">${jsxEscape(sec.description)}</p>
            ${sec.example ? `<p className="text-xs text-[#0052CC] mt-2 font-medium">${jsxEscape(sec.example)}</p>` : ''}
          </div>`,
  )
  .join('\n')}
        </div>
      </div>
    </section>
  );
}`;
}

function genPricing(c: PageCopyOutput): string {
  const s = c.sections.pricing;
  const headline = s.headline ?? 'Web Design Pricing for London Businesses';
  const body = s.body ?? '';
  const tiers = s.tiers ?? [];

  return `function PricingSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">Transparent Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">${jsxEscape(headline)}</h2>
        ${body ? `<p className="text-lg text-gray-600 mt-6 max-w-3xl leading-relaxed">${jsxEscape(body)}</p>` : ''}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
${tiers
  .map((tier) => {
    const cardClass = tier.highlight
      ? 'rounded-xl p-8 border-2 border-[#0052CC] shadow-lg bg-white'
      : 'rounded-xl p-8 border border-gray-200 bg-white';
    return `          <div className="${cardClass}">
            ${tier.highlight ? `<div className="inline-block bg-[#0052CC] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Most Popular</div>` : ''}
            <h3 className="font-bold text-lg text-gray-900">${jsxEscape(tier.name)}</h3>
            <p className="text-3xl font-bold text-[#0052CC] mt-2">${jsxEscape(tier.priceGBP)}</p>
            <p className="text-gray-600 text-sm mt-2">${jsxEscape(tier.description)}</p>
            <ul className="mt-4 space-y-2">
${tier.includes
  .map(
    (inc) =>
      `              <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#0052CC] flex-shrink-0" aria-hidden="true">✓</span><span>${jsxEscape(inc)}</span></li>`,
  )
  .join('\n')}
            </ul>
            <p className="text-xs text-gray-500 mt-6 italic">${jsxEscape(tier.bestFor)}</p>
          </div>`;
  })
  .join('\n')}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}`;
}

function genFAQ(c: PageCopyOutput): string {
  const items = c.sections.faq.items;
  return `function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wider">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions from London Businesses</h2>
        <div className="mt-12 max-w-3xl">
${items
  .map(
    (it) =>
      `          <div className="border-b border-gray-200 py-6">
            <h3 className="font-semibold text-gray-900 text-lg">${jsxEscape(it.question)}</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">${jsxEscape(it.answer)}</p>
          </div>`,
  )
  .join('\n')}
        </div>
      </div>
    </section>
  );
}`;
}

function genFinalCTA(c: PageCopyOutput): string {
  const s = c.sections.finalCta;
  const headline = s.headline ?? 'Ready to Build a London Website That Wins Clients?';
  const body = s.body ?? '';

  return `function FinalCTASection() {
  return (
    <section className="bg-[#0052CC] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-12 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">${jsxEscape(headline)}</h2>
          <p className="text-lg mt-6 text-white/90 leading-relaxed">${jsxEscape(body)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0052CC] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/919103398557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}`;
}

function genSchemaScript(c: PageCopyOutput): string {
  const cityName = c.meta.slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');

  const faqSchema = c.sections.faq.items.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: it.answer,
    },
  }));

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
        priceRange: '£1,200–£12,000',
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
          { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
          {
            '@type': 'ListItem',
            position: 3,
            name: cityName,
            item: `https://factoryjet.com/uk/${c.meta.slug}`,
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

  return `// AUTO-GENERATED by pipeline/scripts-ts/src/step7/assembler.ts
// Source: pipeline/scripts-ts/data/generated/gb/${output.input.city.citySlug}/${output.input.service.slug}.copy.json
// Do not edit by hand — re-run \`pnpm assemble --city ${output.input.city.citySlug} --service ${output.input.service.slug}\` after copy regeneration.

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${jsString(output.meta.title)}',
  description: '${jsString(output.meta.description)}',
  alternates: {
    canonical: 'https://factoryjet.com${output.meta.canonicalUrl}',
  },
};

export default function ${fnName}() {
  return (
    <main className="bg-white font-inter">
      <HeroSection />
      <CityContextSection />
      <ServiceExplanationSection />
      <WhyFactoryJetSection />
      <ProcessSection />
      <IndustriesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <SchemaScript />
    </main>
  );
}

${genHero(output)}

${genCityContext(output)}

${genServiceExplanation(output)}

${genWhyFactoryJet(output)}

${genProcess(output)}

${genIndustries(output)}

${genPricing(output)}

${genFAQ(output)}

${genFinalCTA(output)}

${genSchemaScript(output)}
`;
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

function pageOutputPath(citySlug: string, serviceSlug: string): string {
  return join(REPO_ROOT, 'src', 'app', 'uk', citySlug, serviceSlug, 'page.tsx');
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
      `[assemble] Copy JSON not found: ${inputPath}\nRun \`pnpm generate --city ${args.city} --service ${args.service}\` first.`,
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
      `\n[dry-run] Would write ${lineCount} lines to: ${pageOutputPath(args.city, args.service)}`,
    );
    return;
  }

  const outPath = pageOutputPath(args.city, args.service);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, tsx, 'utf-8');
  // eslint-disable-next-line no-console
  console.log(`Written: src/app/uk/${args.city}/${args.service}/page.tsx (${lineCount} lines)`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`[assemble] fatal: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});

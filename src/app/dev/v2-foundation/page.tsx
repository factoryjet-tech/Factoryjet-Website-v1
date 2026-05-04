import type { Metadata } from 'next';

import BoringStatsRow from '@/components/v2/BoringStatsRow';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import Hero from '@/components/v2/Hero';
import FinalCTA from '@/components/v2/FinalCTA';
import CityContextSection from '@/components/v2/CityContextSection';
import FAQ from '@/components/v2/FAQ';
import PricingTiers from '@/components/v2/PricingTiers';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import ServiceJourneyRow, {
  DEFAULT_JOURNEY_STAGES,
} from '@/components/v2/ServiceJourneyRow';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ImageBlock, { placeholderImageDataUrl } from '@/components/v2/ImageBlock';
import LogoBar from '@/components/v2/LogoBar';
import CaseStudyCard from '@/components/v2/CaseStudyCard';

/**
 * /dev/v2-foundation — verification surface for M1.a.
 *
 * Renders all three foundation components (BoringStatsRow,
 * BigThreeTrustBlock, StrategicDarkSection) with realistic FactoryJet
 * sample data. noindex via metadata. Pure server component.
 */
export const metadata: Metadata = {
  title: 'V2 Foundation Components (dev)',
  robots: { index: false, follow: false },
};

export default function V2FoundationPage() {
  return (
    <main className="min-h-screen bg-fj-cream">
      {/* Page header — Fraunces display + Geist eyebrow */}
      <div className="mx-auto max-w-[1120px] px-4 pb-8 pt-12 lg:px-6">
        <p
          className="font-fj-body font-semibold uppercase text-fj-neutral-600"
          style={{
            fontSize: '0.8125rem',
            lineHeight: 1.4,
            letterSpacing: '0.12em',
          }}
        >
          v2.0 foundation · M1.a
        </p>
        <h1
          className="fj-display mt-4 font-bold text-fj-ink"
          style={{
            fontSize: 'clamp(2.75rem, 5vw, 5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
          }}
        >
          v2 foundation components
        </h1>
        <p
          className="mt-4 max-w-[640px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          Three server components consumed by every M1.b/M1.c page.
          Inspected here against the v2.0 design tokens (Fraunces +
          Geist, fj-* palette).
        </p>
      </div>

      {/* === BoringStatsRow === */}
      <SectionLabel slug="BoringStatsRow" />
      <BoringStatsRow
        stats={[
          {
            value: '+210%',
            label: 'qualified leads in 90 days',
            microcopy: "we'll tell you if yours will be longer",
          },
          {
            value: '500+',
            label: 'projects shipped',
            microcopy: 'we count the 4-star ones too',
          },
          {
            value: '0',
            label: 'pilot deaths',
            microcopy: 'we keep score',
          },
        ]}
      />

      {/* === BigThreeTrustBlock === */}
      <SectionLabel slug="BigThreeTrustBlock" />
      <BigThreeTrustBlock
        stats={[
          {
            number: '60-day',
            label: 'average time-to-value',
            microcopy: "we'll tell you if yours will be longer",
          },
          {
            number: '100%',
            label: 'code ownership',
            microcopy: "yes, even when it's annoying for us",
          },
          {
            number: '4.9/5',
            label: 'across 500+ projects',
            microcopy: 'we count the 4-star ones too',
          },
        ]}
      />

      {/* === StrategicDarkSection === */}
      <SectionLabel slug="StrategicDarkSection" />
      <StrategicDarkSection>
        <h2
          className="fj-display font-semibold"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Pilots that <em className="fj-italic--on-dark">actually</em> ship.
        </h2>
        <p
          className="mt-6 max-w-[640px] font-fj-body text-fj-charcoal-text"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          Strategic dark sections appear no more than twice per page —
          a deliberate rhythm break, not a default surface. Inside,
          italic emphasis shifts to the contrast-safe Jet Blue
          (#4A8FFF) per spec §2.2.
        </p>
      </StrategicDarkSection>

      {/* === Hero (with rightSlot) === */}
      <SectionLabel slug="M1.b — Hero (with rightSlot)" />
      <Hero
        eyebrow="AI SERVICES · UK"
        headline={
          <>
            AI agents that <em>actually</em> ship.
          </>
        }
        lead="We build the agents your team will actually use, in your stack, with your data, in 60 days. Not pilots that quietly die."
        primaryCta={{ label: 'Book a 30-min call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        trustItems={[
          '500+ projects shipped',
          '60-day average launch',
          '100% code ownership',
        ]}
        rightSlot={
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-fj-neutral-200 bg-fj-neutral-100">
            <span
              className="font-fj-body text-fj-neutral-400"
              style={{ fontSize: '0.9375rem', letterSpacing: '0.005em' }}
            >
              rightSlot demo
            </span>
          </div>
        }
      />

      {/* === Hero (single-column, no rightSlot) === */}
      <SectionLabel slug="M1.b — Hero (single-column, no rightSlot)" />
      <Hero
        eyebrow="AI SERVICES · UK"
        headline={
          <>
            AI agents that <em>actually</em> ship.
          </>
        }
        lead="We build the agents your team will actually use, in your stack, with your data, in 60 days. Not pilots that quietly die."
        primaryCta={{ label: 'Book a 30-min call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        trustItems={[
          '500+ projects shipped',
          '60-day average launch',
          '100% code ownership',
        ]}
      />

      {/* === FinalCTA (light variant) === */}
      <SectionLabel slug="M1.b — FinalCTA (light variant)" />
      <FinalCTA
        eyebrow="READY WHEN YOU ARE"
        headline={
          <>
            Stop running <em>pilots</em>. Start shipping.
          </>
        }
        sub="A 30-minute call. We'll tell you if there's a fit before we tell you the price."
        primaryCta={{ label: 'Book a call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        objectionHandler="(We'll tell you on the first call if we're the wrong people for the job.)"
      />

      {/* === FinalCTA (dark variant) === */}
      <SectionLabel slug="M1.b — FinalCTA (dark variant)" />
      <FinalCTA
        variant="dark"
        eyebrow="READY WHEN YOU ARE"
        headline={
          <>
            Stop running <em>pilots</em>. Start shipping.
          </>
        }
        sub="A 30-minute call. We'll tell you if there's a fit before we tell you the price."
        primaryCta={{ label: 'Book a call', href: '/contact' }}
        secondaryCta={{ label: 'See case studies', href: '/case' }}
        objectionHandler="(We'll tell you on the first call if we're the wrong people for the job.)"
      />

      {/* === CityContextSection === */}
      <SectionLabel slug="M1.c.1 — CityContextSection" />
      <CityContextSection
        eyebrow="LONDON MARKET"
        headline={
          <>
            Built for the world's most <em>demanding</em> business climate.
          </>
        }
        leadParagraphs={[
          "With 9.1 million people and £569bn in regional GDP, London is one of the planet's most demanding markets.",
          'Buyers in the City and the tech corridor make snap judgements based on digital presence.',
        ]}
        stats={[
          {
            value: '9.1m',
            label: 'London population (2024)',
            sourceUrl:
              'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/populationestimatesforenglandandwales/mid2024',
          },
          {
            value: '$722.6bn',
            label: 'London regional GDP (2023)',
            sourceUrl:
              'https://www.ons.gov.uk/economy/grossdomesticproductgdp/bulletins/regionaleconomicactivitybygrossdomesticproductuk/1998to2023',
          },
          {
            value: '£18.8bn',
            label: 'Tourism visitor expenditure (2024)',
            sourceUrl:
              'https://data.london.gov.uk/blog/the-state-of-london-report-2025/',
          },
        ]}
      />

      {/* === FAQ === */}
      <SectionLabel slug="M1.c.1 — FAQ" />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={
          <>
            What you'll <em>actually</em> ask first.
          </>
        }
        items={[
          {
            question: 'How long does a London project take?',
            answer:
              "60 days end-to-end on average — discovery to production. We'll tell you on the first call if your stack pushes that out, and exactly why.",
          },
          {
            question: "What's the typical price range?",
            answer:
              '£1,200–£12,000 depending on scope. We tell you on the first call. No proposal-tag, no surprise add-ons.',
          },
          {
            question: 'Who owns the code?',
            answer:
              'You do. Day one. Your repo, your infra, your model weights when self-hosted. No lock-in tax.',
          },
          {
            question: "What if we already have a pilot that's stuck?",
            answer:
              "We do rescue work. Bring the artefacts; we'll tell you within a week whether it can ship or whether it needs to be rebuilt.",
          },
          {
            question: 'Do you work with industries outside the five listed?',
            answer:
              "Yes — those five are where we have the most case-study density. The delivery standard doesn't change by sector. Boring, by design.",
          },
          {
            question: 'What happens after launch?',
            answer:
              'Optional retainer. We hand back the keys whenever you ask. Not every project needs us forever.',
          },
        ]}
      />

      {/* === PricingTiers === */}
      <SectionLabel slug="M1.c.1 — PricingTiers" />
      <PricingTiers
        eyebrow="TRANSPARENT PRICING"
        headline={
          <>
            Pricing on the <em>first</em> call.
          </>
        }
        lead="London agency rates run two to three times higher for the same scope. Our pricing is the price."
        tiers={[
          {
            name: 'Starter',
            priceRange: '£1,200–£2,500',
            description:
              'A 5-page brochure site that loads fast on mobile and ranks for your name and core service.',
            features: [
              '5 pages, mobile-responsive',
              'Basic SEO & schema markup',
              'Contact form with email forwarding',
              '2 revision rounds',
              '30-day post-launch support',
            ],
            cta: { label: 'Get a quote', href: '/contact' },
          },
          {
            name: 'Growth',
            priceRange: '£2,500–£5,000',
            description:
              'A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one.',
            features: [
              '10–15 pages with blog CMS',
              'Advanced SEO & GA4 tracking',
              'Lead capture & email automation',
              '3 revision rounds',
              '30-day support + training session',
            ],
            cta: { label: 'Get a quote', href: '/contact' },
            popular: true,
          },
          {
            name: 'Scale',
            priceRange: '£5,000–£12,000',
            description:
              'Custom Next.js build with e-commerce, AI features, API integrations, and priority support.',
            features: [
              'Custom Next.js architecture',
              'E-commerce or membership features',
              'AI integrations (chat, search, content)',
              'Third-party API connections',
              'Priority support & quarterly reviews',
            ],
            cta: { label: 'Get a quote', href: '/contact' },
          },
        ]}
        footnote="(Pricing is a starting range. Real number on the first call, after we've seen the actual scope.)"
      />

      {/* === IndustriesGrid === */}
      <SectionLabel slug="M1.c.1 — IndustriesGrid" />
      <IndustriesGrid
        eyebrow="LONDON × WEB DESIGN"
        headline={
          <>
            We work with London's <em>biggest</em> sectors.
          </>
        }
        lead="Five sectors where we have case-study density. Industries outside this list still get the same delivery standard."
        sectors={[
          {
            name: 'Financial & Insurance Services',
            description:
              'Sites that signal regulatory credibility before a prospect picks up the phone. Compliance-aware copy, secure forms, and AI-search visibility for high-value clients in the City.',
          },
          {
            name: 'Professional, Scientific & Technical Services',
            description:
              'Law firms, consultancies, and accountants compete on reputation. Lead-capture flows and consultation booking that turn research-stage buyers into booked calls — not bounce.',
          },
          {
            name: 'Information Technology & Communications',
            description:
              'Built in Next.js, the framework your prospects already use. Sub-second loads, clean code, the technical standard the Silicon Roundabout corridor expects from its vendors.',
          },
          {
            name: 'Real Estate & Construction',
            description:
              "Fast property galleries, enquiry forms that route correctly, local SEO that captures buyers searching by postcode. London's most competitive sector — your site is the qualifier.",
          },
          {
            name: 'Creative Industries, Media & Tourism',
            description:
              'High visual bar without sacrificing speed. Booking integrations and visitor flows that convert — for hospitality, production, and the £18.8bn tourism sector.',
          },
        ]}
      />

      {/* === ComparisonTable ===
       * Pricing values: only the "Local London Agency" column is grounded
       * (avg £5,000 from src/data/uk/cities/london.json
       * .avgAgencyPricing.webDesign). FactoryJet and Offshore Freelancer
       * pricing/turnaround use placeholder strings — the prompt explicitly
       * forbids fabricating numbers when the anchor isn't in london.json or
       * factoryjet.DESIGN.md. */}
      <SectionLabel slug="M1.c.2 — ComparisonTable" />
      <ComparisonTable
        eyebrow="COMPARE"
        headline={
          <>
            FactoryJet vs the <em>alternatives</em>.
          </>
        }
        lead="We'll tell you when not to hire us — short list, no spin."
        columns={[
          { label: 'FactoryJet', isFactoryJet: true },
          { label: 'Local London Agency' },
          { label: 'Offshore Freelancer' },
        ]}
        rows={[
          {
            feature: 'Pricing range',
            // TODO(M1.c.4): replace placeholders once FJ and offshore
            // pricing anchors are signed off and added to either
            // src/data/uk/cities/london.json or factoryjet.DESIGN.md.
            values: ['£X–£Y (TODO)', '£5,000+ avg', '£X–£Y (TODO)'],
          },
          {
            feature: 'Turnaround',
            // TODO(M1.c.4): durations not in london.json/DESIGN.md.
            values: ['X weeks (TODO)', 'X weeks (TODO)', 'Variable'],
          },
          {
            feature: 'AI-native workflow',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="la" kind="partial" />,
              <CompareIcon key="of" kind="no" />,
            ],
          },
          {
            feature: 'Dedicated PM',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="la" kind="yes" />,
              <CompareIcon key="of" kind="no" />,
            ],
          },
          {
            feature: 'Post-launch support',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="la" kind="partial" />,
              <CompareIcon key="of" kind="no" />,
            ],
          },
          {
            feature: 'Named-competitor benchmark',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="la" kind="no" />,
              <CompareIcon key="of" kind="no" />,
            ],
          },
        ]}
        footer="(Numbers grounded in src/data/uk/cities/london.json. Empty cells are honest TODOs — pricing benchmarks pending sign-off.)"
      />

      {/* === ServiceJourneyRow === */}
      <SectionLabel slug="M1.c.2 — ServiceJourneyRow" />
      <ServiceJourneyRow
        eyebrow="HOW WE WORK"
        headline={
          <>
            Ship to <em>production</em>. Not to slides.
          </>
        }
        lead="Five stages. The same five whether the brief is a marketing site or a multi-agent system."
        stages={DEFAULT_JOURNEY_STAGES}
      />

      {/* === ServiceExplanation ===
       * Web design contextualised for London's financial services sector.
       * rightSlot: stat callout grounded in london.json
       * (population 9.1m, GDP £569bn). */}
      <SectionLabel slug="M1.c.2 — ServiceExplanation" />
      <ServiceExplanation
        eyebrow="WEB DESIGN · LONDON"
        headline={
          <>
            Sites that signal credibility before someone <em>opens</em> them.
          </>
        }
        lead="London's financial services sector decides whether to engage you in the first 1.5 seconds of looking at your homepage."
        body={
          <>
            <p>
              We build for that 1.5 seconds. Compliance-aware copy. Secure
              forms. Schema markup that puts you in front of buyers using AI
              search to vet vendors.
            </p>
            <p>
              The site is the qualifier — not your sales call. By the time a
              prospect picks up the phone, the credibility question is already
              answered.
            </p>
          </>
        }
        rightSlot={
          <div className="rounded-2xl border border-fj-neutral-200 bg-fj-neutral-50 p-8">
            <p className="fj-display font-fj-display text-[3.5rem] font-medium leading-none tracking-[-0.04em] text-fj-jet-blue md:text-[4.5rem]">
              9.1m
            </p>
            <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.55] text-fj-neutral-600">
              people. £569bn regional GDP.
            </p>
            <p className="mt-3 font-fj-body text-[0.8125rem] italic text-fj-neutral-400">
              (Buyers in the City judge sites in seconds.)
            </p>
          </div>
        }
      />

      {/* === SiteHeader === */}
      <SectionLabel slug="M1.c.2.5 — SiteHeader (would normally render once per page)" />
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        <div className="overflow-hidden rounded-2xl border border-fj-neutral-200">
          <SiteHeader />
        </div>
      </div>

      {/* === BoringStatsRow (alignment fix · align="center") ===
       * Placed after the existing M1.a BoringStatsRow demo so reviewers
       * can scroll between the two and confirm the centred layout reads
       * cleaner than the legacy left-anchored version. Same stats data;
       * only the new `align="center"` prop differs. The default stays
       * `'start'` for backward-compat with all existing call sites. */}
      <SectionLabel slug='M1.c.2.5 — BoringStatsRow (alignment fix · align="center")' />
      <BoringStatsRow
        align="center"
        stats={[
          {
            value: '+210%',
            label: 'qualified leads in 90 days',
            microcopy: "we'll tell you if yours will be longer",
          },
          {
            value: '500+',
            label: 'projects shipped',
            microcopy: 'we count the 4-star ones too',
          },
          {
            value: '0',
            label: 'pilot deaths',
            microcopy: 'we keep score',
          },
        ]}
      />

      {/* === ImageBlock (3 variants) === */}
      <SectionLabel slug="M1.c.2.5 — ImageBlock (bordered · elevated · with caption)" />
      <div className="mx-auto max-w-[1200px] px-4 pb-8 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ImageBlock
            src={placeholderImageDataUrl(640, 480)}
            alt="ImageBlock variant: bordered (default)"
            width={640}
            height={480}
            aspectRatio="4/3"
          />
          <ImageBlock
            src={placeholderImageDataUrl(640, 480)}
            alt="ImageBlock variant: elevated (white inset on cream)"
            width={640}
            height={480}
            aspectRatio="4/3"
            elevated
          />
          <ImageBlock
            src={placeholderImageDataUrl(640, 480)}
            alt="ImageBlock variant: with Fraunces-italic caption"
            width={640}
            height={480}
            aspectRatio="4/3"
            caption="(Hartwell & Co. — Mayfair financial advisory mockup.)"
          />
        </div>
      </div>

      {/* === LogoBar === */}
      <SectionLabel slug="M1.c.2.5 — LogoBar (DEMO · placeholder wordmarks)" />
      <LogoBar
        eyebrow="DEMO · PLACEHOLDER WORDMARKS"
        logos={[
          { name: 'Atlas Legal' },
          { name: 'Bright Health' },
          { name: 'Forge & Co' },
          { name: 'Westmount Realty' },
          { name: 'Northstar Labs' },
          { name: 'Pebble Finance' },
        ]}
      />

      {/* === CaseStudyCard (3 cards) === */}
      <SectionLabel slug="M1.c.2.5 — CaseStudyCard (3-card grid)" />
      <div className="mx-auto max-w-[1200px] px-4 pb-8 lg:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard
            industry="LEGAL · LONDON"
            clientName="Atlas Legal"
            headline="Doubled qualified leads in 90 days."
            body="Replatformed a 12-year-old WordPress site to a Next.js architecture with consultation-booking flows wired into intake. Compliance-aware copy throughout."
            metrics={[
              { value: '+210%', label: 'qualified leads (90 days)' },
              { value: '60-day', label: 'time-to-launch' },
            ]}
            image={{
              src: placeholderImageDataUrl(800, 600),
              alt: 'Atlas Legal — case study cover',
              width: 800,
              height: 600,
            }}
            href="/case/atlas-legal"
          />
          <CaseStudyCard
            industry="HEALTHCARE · LONDON"
            clientName="Bright Health"
            headline="Compliance-aware redesign cleared regulatory review."
            body="Rebuilt a patient-facing site with WCAG 2.2 AA compliance, MHRA-aligned content review, and secure intake forms — landed on the first regulatory pass."
            metrics={[
              { value: '100%', label: 'first-pass regulatory clearance' },
              { value: '4.9/5', label: 'patient onboarding NPS' },
            ]}
            image={{
              src: placeholderImageDataUrl(800, 600),
              alt: 'Bright Health — case study cover',
              width: 800,
              height: 600,
            }}
            href="/case/bright-health"
          />
          <CaseStudyCard
            industry="MANUFACTURING · LONDON"
            clientName="Forge & Co"
            headline={
              <>
                From 3-second LCP to <em>0.9s</em>.
              </>
            }
            body="Replaced a Webflow build with a Next.js + edge-cached architecture. Lighthouse Performance scored 98 across the top 20 product pages on launch day."
            metrics={[
              { value: '0.9s', label: 'Largest Contentful Paint' },
              { value: '98', label: 'Lighthouse Performance' },
            ]}
            image={{
              src: placeholderImageDataUrl(800, 600),
              alt: 'Forge & Co — case study cover',
              width: 800,
              height: 600,
            }}
            href="/case/forge-and-co"
          />
        </div>
      </div>

      {/* === SiteFooter === */}
      <SectionLabel slug="M1.c.2.5 — SiteFooter (would normally render once per page)" />
      <div className="mx-auto max-w-[1200px] px-4 pb-12 lg:px-6">
        <div className="overflow-hidden rounded-2xl border border-fj-neutral-200">
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*   Section header used between component renderings.                */
/*   Cream-bg strip with mono uppercase label so reviewers can scan   */
/*   which component they're looking at.                              */
/* ------------------------------------------------------------------ */

function SectionLabel({ slug }: { slug: string }) {
  return (
    <div className="mx-auto max-w-[1120px] px-4 pt-12 lg:px-6">
      <h3
        className="font-fj-body font-semibold uppercase text-fj-ink"
        style={{
          fontSize: '0.9375rem',
          lineHeight: 1,
          letterSpacing: '0.12em',
        }}
      >
        {slug}
      </h3>
    </div>
  );
}

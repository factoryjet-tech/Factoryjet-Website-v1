import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Marketing Agent for US Businesses | FactoryJet',
  description:
    'AI marketing agents for US businesses. Automate email, SMS, paid social and CRM campaigns, with copy in your brand voice. CAN-SPAM and TCPA aware. Fixed price.',
  keywords: [
    'AI marketing agent',
    'AI marketing automation USA',
    'AI email marketing automation',
    'Klaviyo AI automation',
    'HubSpot AI marketing agent',
    'AI campaign automation for US businesses',
    'automated SMS marketing TCPA',
    'AI content generation for marketing',
    'AI ad budget optimization Google Meta',
    'marketing automation agency Austin',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Marketing Agent for US Businesses | FactoryJet',
    description:
      'AI that plans, writes, and sends your Black Friday campaign, while you run your business. Email, SMS, social content, and ad optimization for US teams.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Agent for US Businesses | FactoryJet',
    description: 'Email, SMS, social and ad automation in your brand voice. CAN-SPAM and TCPA aware. Fixed price.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas, faqSchema is declared after MARKETING_FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Marketing Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent' },
];

const PAGE_MODIFIED = '2026-08-17';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Marketing Agent Development for US Businesses',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',

  },
  description:
    'Custom AI marketing agents for US businesses, automate lifecycle email, SMS campaigns, social content, and Google/Meta Ads optimization with English and Spanish copy generation.',
  areaServed: 'US',
  serviceType: 'AI Marketing Automation',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page Data
───────────────────────────────────────────────────────────────────────────── */

const MARKETING_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover.',
    description:
      'We audit your current marketing stack and customer data. We check email consent records and list health. We map your promotional calendar and set initial priorities.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture.',
    description:
      'We design audience segments, channel mix, and content pillars. We build prompt engineering templates and brand voice guidelines. The AI writes in your authentic tone.',
  },
  {
    number: '03',
    title: 'Build & Integrate.',
    description:
      'We build the AI agent using function calling and tool use. We configure CRM sync with HubSpot and connect Klaviyo. We pre-load the US retail promotional calendar.',
  },
  {
    number: '04',
    title: 'Pilot & Tune.',
    description:
      'The AI runs pilot campaigns to controlled audience segments. We measure open rates, click rates, and revenue. Human in the loop reviews verify copy quality.',
  },
  {
    number: '05',
    title: 'Launch & Optimize.',
    description:
      'Full deployment to your audience. The AI begins autonomous optimization. Campaign data logs to observability dashboards to drive higher return on investment.',
  },
];

const MARKETING_STATS = [
  {
    value: '.01T',
    label: 'US retail sales forecast for holiday shopping windows.',
    microcopy: 'National Retail Federation holiday forecast.',
    categoryLabel: 'PEAK SEASON.',
  },
  {
    value: '4–6 weeks',
    label: 'from kickoff to your first AI marketing campaign going live.',
    microcopy: 'FactoryJet deployment timeline.',
    categoryLabel: 'TIME TO LAUNCH.',
  },
  {
    value: '5',
    label: 'channels automated from one unified AI agent core.',
    microcopy: 'FactoryJet marketing agent scope.',
    categoryLabel: 'CHANNEL COVERAGE.',
  },
];

const MARKETING_MARKET_STATS = [
  {
    value: '.01T',
    label: 'US retail holiday sales forecast projecting major seasonal demand.',
    sourceUrl: 'https://nrf.com/media-center/press-releases/nrf-expects-holiday-sales-to-surpass-1-trillion-for-the-first-time-in-2025',
    sourceLabel: 'National Retail Federation, 2025.',
  },
  {
    value: ',088',
    label: 'maximum statutory penalty per non-compliant email under CAN-SPAM rules.',
    sourceUrl: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business',
    sourceLabel: 'FTC CAN-SPAM Compliance Guide.',
  },
  {
    value: '6',
    label: 'consumer privacy rights protected under California CCPA statutes.',
    sourceUrl: 'https://oag.ca.gov/privacy/ccpa',
    sourceLabel: 'California Attorney General, CCPA.',
  },
];

const MARKETING_COMPARISON_COLUMNS = [
  { label: 'FactoryJet.', isFactoryJet: true },
  { label: 'Marketing Agency.' },
  { label: 'Freelancer.' },
  { label: 'SaaS Tool.' },
] as const;

const MARKETING_COMPARISON_ROWS = [
  {
    feature: 'Starting price.',
    values: [
      'Fixed price after a scoping call.',
      'Open-ended monthly retainer.',
      'Hourly or monthly, inconsistent.',
      'Per-seat or per-contact subscription.',
    ],
  },
  {
    feature: 'Seasonal campaign automation (Black Friday, holiday, back to school).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'SMS campaigns with TCPA consent and opt-out handling.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'English and Spanish content generation.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'AI writes copy in your brand voice.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'CRM segmentation (RFM, region, lifecycle stage).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'Google Ads + Meta Ads budget optimization.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & campaign IP.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'Integration with Klaviyo / HubSpot / Mailchimp.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'Campaign ROI tied to revenue (not just vanity metrics).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
];

const MARKETING_INDUSTRIES = [
  {
    name: 'D2C E-Commerce.',
    description:
      'Automates seasonal campaigns and cart recovery sequences. Employs tool use to sync Shopify product catalogs and trigger SMS flows.',
    example: 'Black Friday campaign briefs generate weeks in advance. Creative assets and audience segments launch on schedule.',
  },
  {
    name: 'Real Estate.',
    description:
      'Listing launch campaigns sent to segmented investor lists. Executes CRM sync with HubSpot and Follow Up Boss. Boosts speed to lead.',
    example: 'New listings trigger segmented email broadcasts within minutes. Lead qualification filters high-intent buyers.',
  },
  {
    name: 'Education & Training.',
    description:
      'Enrollment campaigns and cohort reminder sequences. Uses retrieval augmented generation (RAG) to answer student curriculum questions.',
    example: 'Application deadlines trigger automated reminder sequences. Student advisory workload drops significantly.',
  },
  {
    name: 'Restaurants & Food.',
    description:
      'Seasonal menu promotions and delivery platform campaigns. Uses vector search to personalize loyalty offers based on order history.',
    example: 'Lapsed guests receive tailored re-engagement offers. Campaigns drive table reservations and online orders.',
  },
  {
    name: 'Fashion & Apparel.',
    description:
      'Seasonal collection drops and restock alerts. Generates video scripts and email flows. Employs prompt engineering for brand voice.',
    example: 'Back-in-stock alerts fire automatically per customer size. Relevancy drives higher checkout conversion rates.',
  },
  {
    name: 'Local Services.',
    description:
      'Review request flows and service reminder campaigns. Integrates CRM sync to schedule seasonal maintenance and estimate visits.',
    example: 'Completed jobs trigger automated review requests. Satisfied customer feedback builds local market authority.',
  },
];

const MARKETING_FAQ_CATEGORIES = [
  { key: 'basics', label: 'The Basics.' },
  { key: 'campaigns', label: 'Campaigns & Channels.' },
  { key: 'us', label: 'US-Specific.' },
  { key: 'process', label: 'Process & Timeline.' },
  { key: 'pricing', label: 'Pricing & ROI.' },
];

const MARKETING_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What exactly is an AI marketing agent?',
    answer:
      'An AI marketing agent plans, drafts, and schedules marketing campaigns autonomously. It pairs LLM reasoning with retrieval augmented generation (RAG). It monitors your product catalog and competitor prices. The agent runs prompt engineering to write on-brand copy. It coordinates tool use and function calling across email, SMS, and ad networks.',
  },
  {
    category: 'basics',
    question: 'How is this different from tools like Mailchimp, Klaviyo, or HubSpot?',
    answer:
      'Mailchimp and Klaviyo are delivery platforms. Humans must still write copy, build graphics, and schedule blasts manually. An AI marketing agent automates strategy and drafts copy. It runs CRM sync across HubSpot and Klaviyo. It optimizes campaign schedules based on past customer response data.',
  },
  {
    category: 'basics',
    question: 'Which channels does the AI marketing agent support?',
    answer:
      'The agent supports email, SMS, Google Ads, Meta Ads, and organic social. It synchronizes with your CRM and e-commerce database. Email and SMS are the primary starting channels. They deliver owned audience reach with high return on investment.',
  },
  {
    category: 'basics',
    question: 'Can the AI write content in Spanish as well as English?',
    answer:
      'Yes. The agent creates campaign copy in English and Spanish natively. It adjusts vocabulary and regional tone for specific markets like Texas, Florida, and California. This improves audience engagement and increases conversion rates.',
  },
  {
    category: 'campaigns',
    question: 'How does the AI handle seasonal peaks like Black Friday and the holidays?',
    answer:
      'The agent includes a pre-loaded US retail promotional calendar. It triggers campaign briefs weeks before Black Friday and Cyber Monday. It runs audience segmentation using RFM scores. It executes automated A/B variants to identify top-performing copy.',
  },
  {
    category: 'campaigns',
    question: 'Can the AI optimize Google Ads and Meta Ads budgets automatically?',
    answer:
      'Yes. The agent connects to Google Ads and Meta Ads APIs. It monitors cost-per-click, conversion rates, and ROAS in real time. It shifts daily budget from weak ad sets to high-converting creative within your defined spend caps.',
  },
  {
    category: 'campaigns',
    question: 'How do you keep email out of the spam folder as send volume grows?',
    answer:
      'We configure SPF, DKIM, and DMARC on your sending domain. The agent warms up new dedicated IPs gradually. It suppresses unengaged contacts automatically. Strict list hygiene and complaint monitoring protect sender reputation.',
  },
  {
    category: 'campaigns',
    question: 'Can the AI generate Instagram Reels scripts and social posts automatically?',
    answer:
      'Yes. The agent extracts product details and customer reviews to draft Reels scripts and social posts. It schedules posts during peak audience engagement hours. Human in the loop approval workflows allow one-click review before publishing.',
  },
  {
    category: 'us',
    question: 'Does the AI integrate with Klaviyo, HubSpot, Mailchimp, and Salesforce?',
    answer:
      'Yes. We build native connectors for Klaviyo, HubSpot, Salesforce, and Mailchimp. We also connect SMS platforms like Twilio, Attentive, and Postscript. The agent functions as an intelligent automation layer on top of your existing software stack.',
  },
  {
    category: 'us',
    question: 'Can the AI segment US audiences by region, lifecycle stage, or purchase tier?',
    answer:
      'Yes. The agent connects to Shopify, NetSuite, and HubSpot. It segments contacts by state, timezone, RFM tier, and purchase history. Campaign briefs are tailored to each segment to maximize relevance and order value.',
  },
  {
    category: 'us',
    question: 'How does the agent handle CAN-SPAM, TCPA, and CCPA requirements?',
    answer:
      'Every email includes working one-click unsubscribe links and physical business addresses per CAN-SPAM. SMS campaigns enforce prior written consent, quiet calling windows, and STOP opt-out handling per TCPA. We also support CCPA deletion requests.',
  },
  {
    category: 'us',
    question: 'What about mobile-first creative for US audiences on email and social?',
    answer:
      'All email templates and social copy are designed mobile-first. Social video scripts follow 9:16 vertical formatting. Email subject lines are calibrated for mobile inbox previews. SMS text remains concise to avoid multi-segment message charges.',
  },
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI marketing agent?',
    answer:
      'Standard deployments take 4 to 5 weeks from kickoff to production. Weeks 1 and 2 focus on integration and brand voice calibration. Weeks 3 and 4 cover template engineering and workflow setup. Week 5 launches pilot campaigns to test segments.',
  },
  {
    category: 'process',
    question: 'What does FactoryJet need from us to get started?',
    answer:
      'We need access to your email and SMS platforms. We review your product catalog, brand tone guidelines, and customer list exports. We establish marketing goals and review approval rules during a 30-minute kickoff call.',
  },
  {
    category: 'process',
    question: 'Do we need to approve every campaign before it sends?',
    answer:
      'You select your preferred governance model. Most teams start with human in the loop reviews, approving briefs 72 hours before dispatch. Teams can transition to autonomous scheduling once confidence is established.',
  },
  {
    category: 'process',
    question: 'How does the AI learn and improve over time?',
    answer:
      'The agent logs open rates, click-through metrics, and revenue conversion data into an observability database. It analyzes top-performing angles and refines future campaign briefs. Performance improves steadily within 60 days of launch.',
  },
  {
    category: 'pricing',
    question: 'What does an AI marketing agent cost to build?',
    answer:
      'We build on a fixed-price project contract with zero unexpected hourly billing. Pricing covers custom agent development, tool use wiring, and platform integrations. You pay model token usage and SMS carrier fees directly at cost.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the build?',
    answer:
      'You pay your email platform and SMS carrier fees directly. You pay LLM API token costs with zero software markup from us. FactoryJet offers optional monthly support retainers for new campaign templates and ongoing model optimization.',
  },
  {
    category: 'pricing',
    question: 'Can we start with a small scope and expand the agent later?',
    answer:
      'Yes. Our architecture is completely modular. You can start with email automation, then expand to SMS and ad budget optimization later. Upgrades integrate cleanly without rebuilding core systems.',
  },
  {
    category: 'pricing',
    question: 'Do you offer a pilot before the full build?',
    answer:
      'Yes. We offer a 4-week pilot covering one email and one SMS campaign. The pilot verifies copy quality and audience engagement. Pilot fees apply directly as a credit toward full platform deployment.',
  },
  {
    category: 'basics',
    question: 'How does Retrieval-Augmented Generation (RAG) prevent off-brand marketing copy?',
    answer:
      'Retrieval augmented generation (RAG) pairs LLMs with vector search and semantic embeddings of your past marketing assets. The agent extracts verified product details, tone guides, and pricing rules. This eliminates hallucinations and keeps copy on-brand.',
  },
  {
    category: 'campaigns',
    question: 'How does the marketing agent execute automated lead qualification?',
    answer:
      'The agent scores inbound form fills and email clicks in real time. It routes high-intent prospects directly into CRM sync pipelines in HubSpot or Salesforce. This accelerates speed to lead and improves closing rates.',
  },
  {
    category: 'us',
    question: 'How do you enforce role-based access control and security on marketing data?',
    answer:
      'We configure role-based access control (RBAC) and single sign-on (SSO) for campaign dashboards. Scoped API credentials restrict model permissions. Audit logging tracks every campaign update for enterprise SOC 2 and GDPR compliance.',
  },
  {
    category: 'process',
    question: 'How do you evaluate and benchmark AI marketing campaign performance?',
    answer:
      'We deploy automated evaluation frameworks to measure subject line engagement, copy sentiment, and conversion attribution. Systems monitor delivery rates and pipeline ROI continuously via Datadog and CRM dashboards.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MARKETING_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIMarketingAgentUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-marketing-agent-us-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-marketing-agent-us-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">
      <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_marketing_agent_hero" />}
          eyebrow="AI MARKETING AGENT · UNITED STATES"
          headline="AI That Plans, Writes and Sends Your Black Friday Campaign, While You Run Your Business"
          lead="Lifecycle email, SMS, and ad optimization. Automated with AI that writes in your brand voice. The system learns which messages drive revenue. Fixed price after a scoping call. No agency retainer."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'Klaviyo + HubSpot + Meta Ads ready',
            'English and Spanish content',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI CAMPAIGN ENGINE IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                42 campaigns out the door this month. Drafted, segmented and scheduled before your team logged in.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Black Friday brief generated. 847 contacts segmented by past purchases. Email and SMS variants ready.',
                  'Meta Ads budget optimization. Daily budget moves to top performing ad sets automatically.',
                  'Instagram: 12 posts queued for the next 30 days: AI-written captions, seasonal creative',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Campaigns awaiting your one-click approval, then the AI sends, measures, and learns.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses in the US, UK, UAE, and worldwide" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Custom AI agents and software built for US businesses. Fixed transparent pricing and full codebase ownership. Fixed, transparent pricing, your codebase delivered in full, and 7-day delivery."
        />

        {/* ── 4. WHAT IS AN AI MARKETING AGENT ─────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI MARKETING AGENT EXPLAINED"
          headline="Why an AI Marketing Agent Is Nothing Like the Marketing Tools You Have Tried"
          lead="SaaS tools are delivery platforms. Your team still creates strategy manually. Staff write content and manage schedules by hand. An AI marketing agent generates strategy. It drafts copy and identifies converting messages. It runs campaigns 24/7 without daily manual briefs."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Lifecycle email',
                  'Seasonal campaigns',
                  'SMS journeys',
                  'Social content',
                  'Google Ads',
                  'Meta Ads',
                  'Spanish copy',
                  'A/B testing',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                Tools like Klaviyo, HubSpot, and Mailchimp require manual work. Teams must log in weekly to draft content, segment audiences, and schedule sends. An AI marketing agent does all of that on its own. The agent inspects your catalog and calendar. It generates campaign briefs with segmented audience lists. It schedules sends in English and Spanish autonomously.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'always drafting' },
                  { value: '5', label: 'channels, one agent' },
                  { value: '4–6 wk', label: 'to first campaign' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="font-fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  More like a marketing manager than a scheduling tool.
                </p>
              </div>
              <p>
                Our marketing agents run on state-of-the-art language models. We calibrate a campaign intelligence layer to your brand, audience segments, and retail calendar. The agent connects to your CRM, email platform, and SMS provider. Campaigns use live customer records. Results feed back to improve future conversions.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  AI vs. Manual Marketing Team
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    scenario: 'Black Friday campaign brief',
                    manual: '2 weeks of planning, briefing, and back-and-forth with creative',
                    ai: 'AI generates full brief in 24 hours, copy, segments, A/B variants ready',
                  },
                  {
                    scenario: 'Spanish-language SMS campaign',
                    manual: 'Hire a bilingual copywriter, review, translate, 3 to 5 days',
                    ai: 'AI writes native Spanish and English variants instantly from product data',
                  },
                  {
                    scenario: 'Meta Ads budget optimization',
                    manual: 'Check ads manager weekly, reallocate manually, often too late',
                    ai: 'AI monitors ROAS in real time, suggests reallocation during peak week',
                  },
                  {
                    scenario: 'Monthly social content',
                    manual: '20 to 30 hours per month briefing and reviewing social posts',
                    ai: 'AI generates 30 posts, schedules at peak times, reviewed in 1 hour',
                  },
                  {
                    scenario: 'Performance attribution',
                    manual: 'Manual spreadsheet tracking, weeks after the campaign',
                    ai: 'Revenue attribution dashboard updated in real time, per campaign',
                  },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Manual</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.manual}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Agent</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your marketing team cannot outscale peak season, AI can"
          lead="Major sales windows decide annual revenue. These include Black Friday, Cyber Monday, and quarterly B2B deadlines. Each event requires fresh offers, creative copy, and audience segmentation. Most teams start scrambling two weeks out. An AI marketing agent starts in September."
          pillars={[
            {
              icon: '🛒',
              title: 'Peak season is won or lost in the preparation window',
              body: "The National Retail Federation put US retail sales for November and December 2025 at $1.01 to $1.02 trillion. Successful brands prepare early. They test subject lines and offers before peak shopping traffic arrives. The AI marketing agent drafts Black Friday briefs automatically. Briefs arrive in your inbox in September without prompt reminders.",
            },
            {
              icon: '📧',
              title: 'Email and SMS are your highest-margin channels, and most teams still run them by hand',
              body: "You own your email list and your SMS list. There is no auction, no rising CPM, no platform between you and the customer. Most businesses blast one message to their entire list. Writing multiple versions takes too much time. Personalization and A/B testing get skipped. An AI agent drafts customized versions. It splits audience segments cleanly. It manages unsubscribe records and consent logging automatically.",
            },
            {
              icon: '📉',
              title: 'Ad budgets leak while your team has other priorities',
              body: "Teams rarely check ad managers daily. Losing ad sets burn budget for days before anyone notices. That is not a strategy problem, it is a time problem. The AI agent monitors ROAS continuously. It flags budget shifts during critical sales windows. Spend routes to winning creative automatically.",
            },
          ]}
        />

        {/* ── 6. BUILD JOURNEY (LIGHT) ─────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From your first campaign brief to a fully autonomous marketing engine"
          stages={MARKETING_JOURNEY_STAGES}
          closingNote="Every stage ends with a working campaign. You see the AI in action before it talks to your entire customer base."
        />

        {/* ── 7. TECH STACK (LIGHT, REVERSED) ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI marketing agent"
          lead="We select the right model, platform, and analytics layer for your business. Architecture adapts to your audience size and data needs. Every architectural decision is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Our marketing agents feature five dedicated layers. They include LLMs for copy generation and prompt engineering. They include calendar intelligence, multi-channel connectors, approval engines, and revenue dashboards. We pick best-in-class components for each layer and explain the reasoning in plain language.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'LLM / AI Model', tools: 'Claude, GPT-4o, Gemini' },
                      { layer: 'Campaign Orchestration', tools: 'LangChain, LangGraph, n8n' },
                      { layer: 'Email Delivery', tools: 'Klaviyo, Mailchimp, HubSpot' },
                      { layer: 'SMS Delivery', tools: 'Twilio, Attentive, Postscript' },
                      { layer: 'Ads Optimization', tools: 'Google Ads API, Meta Marketing API' },
                      { layer: 'CRM / Segmentation', tools: 'HubSpot, Salesforce, Klaviyo, Braze' },
                      { layer: 'E-Commerce Data', tools: 'Shopify, WooCommerce, BigCommerce, Commerceflo' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                We build language-specific prompt chains for bilingual audiences. Spanish segments receive natively drafted copy rather than machine translations. Each message uses culturally attuned phrasing. Authentic copy resonates with local customer expectations.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Five Marketing AI Types We Build
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { name: 'Lifecycle Email AI', desc: 'Automates cart recovery and post-purchase email flows. Schedules sequences from CRM data with revenue attribution.' },
                  { name: 'SMS Campaign AI', desc: 'Personalized text campaigns with written consent capture. Includes automated STOP handling and quiet-hours rules per TCPA.' },
                  { name: 'Social Content AI', desc: 'Drafts Instagram captions, social posts, and video scripts. Schedules content during peak audience activity windows.' },
                  { name: 'Ad Budget Optimization AI', desc: 'Real-time Google and Meta Ads monitoring. Provides budget reallocation signals tied to ROAS goals.' },
                  { name: 'Full-Stack Marketing AI', desc: 'All channels unified under one AI engine. Manages email, SMS, social, and ad creative with shared audience intelligence.' },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND ─────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {MARKETING_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#B23E13',
                        background: 'rgba(240,90,40,0.06)',
                        border: '1px solid rgba(240,90,40,0.22)',
                      }}
                    >
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                    {stat.label}
                  </p>
                  {stat.microcopy && (
                    <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                      {stat.microcopy}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. US MARKET CONTEXT ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="US MARKETING AI MARKET"
          headline="A trillion-dollar holiday season. Four channels. One agent that runs all of it."
          leadParagraphs={[
            "US marketing runs on owned channels and paid social. Email and SMS deliver high profit margins. Your CRM holds customer truth. Unmonitored ad channels drain marketing budget. The problem is almost never the tools. Most US businesses already pay for Klaviyo or HubSpot. Managing campaigns requires constant weekly effort. Marketing staff are often overloaded with competing duties.",
            "FactoryJet's AI marketing agents are built for that gap. The US retail calendar comes pre-loaded. Copy reflects your brand voice in English and Spanish. Systems enforce CAN-SPAM and TCPA compliance. The agent connects to Klaviyo, HubSpot, Shopify, and Salesforce. You own the code when we hand it over.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The brands that win Cyber Week already had their briefs written in September.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'D2C E-Commerce',
                  'Real Estate',
                  'Education & Training',
                  'Restaurants & Food',
                  'Fashion & Apparel',
                  'Local Services',
                ].map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </>
          }
          stats={MARKETING_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Marketing Agency vs. Freelancer vs. SaaS Tool"
          lead="Fixed price, full ownership, email and SMS automation with consent handling out of the box: the honest comparison."
          pullQuote={{
            stat: 'Fixed price',
            caption:
              'one AI marketing agent with seasonal campaign automation, lifecycle email and SMS, Spanish content generation, and full code ownership. Quoted up front after a scoping call. No monthly retainer to FactoryJet.',
          }}
          columns={MARKETING_COMPARISON_COLUMNS}
          rows={MARKETING_COMPARISON_ROWS}
          footer="This compares how the four options typically work in the US market. FactoryJet quotes a fixed price after a scoping call, with no ongoing retainer required."
        />

        {/* ── 11. INDUSTRIES GRID (DARK) ────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI marketing agents for every major US industry"
          lead="Every industry has different peak windows, channel mixes, and content requirements. We build for yours."
          sectors={MARKETING_INDUSTRIES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say about working with FactoryJet"
        />

                {/* ── Enterprise Security & Governance Architecture ── */}
        <section className="py-12 md:py-16 bg-[#FAFAF7] border-t border-b border-[rgba(240,90,40,0.18)]">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
              Enterprise Security &amp; Marketing Governance.
            </p>
            <h2 className="mt-2 font-fj-display text-[1.875rem] font-bold text-fj-ink">
              Enterprise security, guardrails, and campaign governance architecture.
            </h2>
            <p className="mt-3 max-w-[72ch] font-fj-body text-[1rem] leading-relaxed text-fj-neutral-600">
              AI marketing agents manage customer audience lists, brand assets, and marketing budgets. We enforce SOC 2, HIPAA, and GDPR standards across all deployed systems.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">SECURITY: SOC 2 &amp; HIPAA.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Audience Data Encryption.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Contact lists and campaign analytics are encrypted at rest and in transit. Strict compliance with SOC 2, HIPAA, GDPR, and TCPA guidelines.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">INTEGRATION: CRM &amp; ERP SYNC.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Live CRM &amp; ERP Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Bidirectional REST APIs and authenticated webhooks sync campaign metrics, lead qualification scores, and revenue to HubSpot, Salesforce, and NetSuite.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">ACCESS: RBAC &amp; SSO.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Role-Based Access Control.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Role-based access control (RBAC) and single sign-on (SSO) secure prompt engineering, ad spend limits, and campaign dispatch permissions.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">ORCHESTRATION: RAG.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Deterministic Tool Execution.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Retrieval augmented generation (RAG) with vector search, embeddings, function calling, tool use, and human in the loop approvals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FAQ (LIGHT) ───────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every AI marketing agent discovery call, answered honestly, without the runaround."
          categories={MARKETING_FAQ_CATEGORIES}
          items={MARKETING_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Marketing Strategy Call"
            sub="Tell us your biggest marketing bottleneck. We examine list segmentation and campaign content volume. We map how an AI agent fits your channels. You receive a fixed-price estimate before development starts. No pitch, no pressure."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price. Full code ownership. Klaviyo + HubSpot + Meta Ads ready. No agency lock-in."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}

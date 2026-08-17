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
    title: 'Discover',
    description:
      'We audit your current marketing stack, customer data quality, email and SMS consent records, list health, and campaign history. We map your promo calendar and identify the three highest-ROI automation opportunities to tackle first.',
  },
  {
    number: '02',
    title: 'Strategy & Content Architecture',
    description:
      'We design your campaign taxonomy, channel mix, audience segments, content pillars, approval workflow, and seasonal trigger logic. We document your brand voice so the AI writes copy that sounds like you, not like a robot.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'We build the AI agent, connect it to your CRM, email platform, SMS provider, and ad accounts. We set up the campaign calendar engine with the US retail calendar and your product launch windows pre-loaded.',
  },
  {
    number: '04',
    title: 'Pilot & Tune',
    description:
      'The AI runs its first campaigns to a controlled audience segment, typically 500 to 2,000 contacts. We measure open rates, click-through rates, and revenue attribution. We refine the brand-voice model and segment logic before full rollout.',
  },
  {
    number: '05',
    title: 'Launch & Optimize',
    description:
      'Full deployment to your entire audience. The AI begins its autonomous learning loop: every campaign result tightens the model. Monthly performance reviews with campaign attribution data tied back to revenue.',
  },
];

const MARKETING_STATS = [
  {
    value: '$1.01T',
    label: 'US retail sales forecast for November and December 2025, the window most campaigns are built around',
    microcopy: 'National Retail Federation 2025 holiday forecast',
    categoryLabel: 'PEAK SEASON',
  },
  {
    value: '4–6 weeks',
    label: 'from kickoff to your first AI-generated campaign going live',
    microcopy: 'FactoryJet build timeline for a standard email, SMS and social scope',
    categoryLabel: 'TIME TO LAUNCH',
  },
  {
    value: '5',
    label: 'channels run from one agent: email, SMS, paid social, organic social, and your CRM',
    microcopy: 'FactoryJet AI marketing agent scope',
    categoryLabel: 'CHANNEL COVERAGE',
  },
];

const MARKETING_MARKET_STATS = [
  {
    value: '$1.01T',
    label: 'US retail sales forecast for November and December 2025, the first holiday season projected to pass a trillion dollars',
    sourceUrl: 'https://nrf.com/media-center/press-releases/nrf-expects-holiday-sales-to-surpass-1-trillion-for-the-first-time-in-2025',
    sourceLabel: 'National Retail Federation, 2025',
  },
  {
    value: '$53,088',
    label: 'maximum FTC penalty per non-compliant marketing email under CAN-SPAM, which is why unsubscribe handling and a real postal address are build requirements',
    sourceUrl: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business',
    sourceLabel: 'FTC CAN-SPAM Compliance Guide',
  },
  {
    value: '6',
    label: 'consumer rights under California CCPA and CPRA that any list you market to has to respect, including delete and opt out of sharing',
    sourceUrl: 'https://oag.ca.gov/privacy/ccpa',
    sourceLabel: 'California Attorney General, CCPA',
  },
];

const MARKETING_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Marketing Agency' },
  { label: 'Freelancer' },
  { label: 'SaaS Tool' },
] as const;

const MARKETING_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      'Fixed price after a scoping call',
      'Open-ended monthly retainer',
      'Hourly or monthly, inconsistent',
      'Per-seat or per-contact subscription',
    ],
  },
  {
    feature: 'Seasonal campaign automation (Black Friday, holiday, back to school)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'SMS campaigns with TCPA consent and opt-out handling',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'English and Spanish content generation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'AI writes copy in your brand voice',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'CRM segmentation (RFM, region, lifecycle stage)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'Google Ads + Meta Ads budget optimization',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & campaign IP',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="sa" kind="no" />,
    ],
  },
  {
    feature: 'Integration with Klaviyo / HubSpot / Mailchimp',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="sa" kind="partial" />,
    ],
  },
  {
    feature: 'Campaign ROI tied to revenue (not just vanity metrics)',
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
    name: 'D2C E-Commerce',
    description:
      'Seasonal campaigns, cart-abandonment email and SMS sequences, post-purchase upsell flows, and influencer brief generation: all automated around your product catalog and Shopify or Commerceflo store data.',
    example: 'Black Friday and holiday briefs are generated on a fixed calendar, so the offer, segments, and creative are ready weeks before the traffic arrives.',
  },
  {
    name: 'Real Estate',
    description:
      'Listing launch campaigns to segmented investor and homebuyer lists, showing reminder sequences, and AI-generated property description copy for portals, email, and social.',
    example: 'A new listing triggers a segmented email to the buyers whose saved criteria actually match it, within minutes of going live.',
  },
  {
    name: 'Education & Training',
    description:
      'Enrollment season campaigns, cohort-fill email and SMS sequences, tuition reminder flows, and AI-written student success stories for social proof across every channel.',
    example: 'Application deadlines drive the send calendar automatically, so reminder sequences go out on schedule without anyone rebuilding them each term.',
  },
  {
    name: 'Restaurants & Food',
    description:
      'Seasonal menu launches, delivery platform promotions on DoorDash and Uber Eats, loyalty program reactivation, and AI-generated Instagram content that drives table bookings and online orders.',
    example: 'Lapsed customers get a re-engagement offer built from what they actually ordered last time, not a generic blast to the whole list.',
  },
  {
    name: 'Fashion & Apparel',
    description:
      'Season-drop campaigns, back-in-stock email and SMS alerts by size, styling tip content, and AI-powered Instagram Reels scripts synced to trending audio and seasonal themes.',
    example: 'Back-in-stock alerts fire per size and per customer, so the message is relevant instead of another all-list announcement.',
  },
  {
    name: 'Local Services',
    description:
      'Review request campaigns, seasonal service reminders, referral program automation, and Google Business Profile post generation, turning happy customers into visible social proof.',
    example: 'A completed job triggers a review request at the moment the customer is most likely to leave one, then follows up once if they do not.',
  },
];

const MARKETING_PRICING_TIERS = [
  {
    name: 'Content AI Starter',
    priceRange: '',
    description:
      'AI-powered content generation for social and email, always-on marketing without the agency retainer.',
    features: [
      'AI social media content calendar (30 posts/month)',
      'Email campaign copy generation',
      'Brand voice setup',
      'Seasonal campaign briefs (US retail calendar pre-loaded)',
      'Instagram + Facebook post scheduling',
      'Monthly performance report',
      '3 months post-launch support',
    ],
    cta: { label: 'Book a Free Strategy Call', modal: true as const, region: 'us' as const },
  },
  {
    name: 'Full Marketing AI Platform',
    priceRange: '',
    description:
      'Email + SMS + social + ad optimization: your full marketing stack on autopilot.',
    features: [
      'Everything in Content AI Starter',
      'Lifecycle email automation (welcome, cart, winback)',
      'SMS campaigns with consent and opt-out handling',
      'CRM audience segmentation (RFM, region, lifecycle stage)',
      'Seasonal campaign automation (Black Friday, holiday, back to school)',
      'Google Ads + Meta Ads optimization signals',
      'English and Spanish content generation',
      'Human approval workflow',
      'Campaign A/B testing engine',
      'Revenue attribution dashboard',
      '6 months post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'us' as const },
    popular: true,
  },
  {
    name: 'Enterprise Marketing AI',
    priceRange: '',
    description:
      'Multi-brand, bilingual, autonomous campaign execution for high-volume US businesses.',
    features: [
      'Everything in Full Marketing AI Platform',
      'Multi-brand or multi-region management',
      'Bilingual AI (English and Spanish)',
      'Autonomous campaign execution (no manual approval)',
      'Real-time ad budget reallocation',
      'Unified email, SMS and chat flow',
      'Predictive campaign timing (ML-based)',
      'Custom BI dashboard with ROAS tracking',
      'Dedicated account manager',
      '12 months support + quarterly model updates',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true as const, region: 'us' as const },
  },
] as const;

const MARKETING_FAQ_CATEGORIES = [
  { key: 'basics', label: 'The Basics' },
  { key: 'campaigns', label: 'Campaigns & Channels' },
  { key: 'us', label: 'US-Specific' },
  { key: 'process', label: 'Process & Timeline' },
  { key: 'pricing', label: 'Pricing & ROI' },
];

const MARKETING_FAQ_ITEMS = [

  /* ── The Basics ── */
  {
    category: 'basics',
    question: 'What exactly is an AI marketing agent?',
    answer:
      "An AI marketing agent is custom software that plans, creates, schedules, and optimizes your marketing campaigns autonomously. Unlike SaaS tools that require manual input, a FactoryJet AI marketing agent reads your product catalog, monitors competitor activity, generates campaign briefs, writes copy in your brand voice, and sends campaigns via email, SMS, or social: all without daily human intervention.",
  },
  {
    category: 'basics',
    question: 'How is this different from tools like Mailchimp, Klaviyo, or HubSpot?',
    answer:
      "Mailchimp, Klaviyo, and HubSpot are delivery platforms, you still write the strategy, create the content, and set the schedule manually. An AI marketing agent generates the strategy, writes the content, and learns which messages convert best over time. It acts like a junior marketing manager working around the clock across every channel at once. It sits on top of the platform you already pay for rather than replacing it.",
  },
  {
    category: 'basics',
    question: 'Which channels does the AI marketing agent support?',
    answer:
      "The agent supports email (lifecycle flows and one-off campaigns), SMS, Instagram and Facebook organic posts, Google Ads and Meta Ads (auto-bidding signals), and your CRM. Email and SMS are the most common starting pair for US businesses because you own the list. WhatsApp is available too, and it matters if a meaningful share of your customers are outside the US, but it is rarely the first channel we build.",
  },
  {
    category: 'basics',
    question: 'Can the AI write content in Spanish as well as English?',
    answer:
      "Yes. The agent generates campaign copy in English and Spanish, written natively in each language rather than machine-translated from the English version. That matters in markets like Texas, Florida, Arizona, and Southern California, where a Spanish-language segment often responds better to copy that was written for it. If you need a third language, we scope it during discovery.",
  },

  /* ── Campaigns & Channels ── */
  {
    category: 'campaigns',
    question: 'How does the AI handle seasonal peaks like Black Friday and the holidays?',
    answer:
      "The agent is pre-loaded with the US retail calendar (Black Friday, Cyber Monday, the December holidays, Presidents Day, Memorial Day, Fourth of July, back to school, and your own launch dates). It auto-triggers campaign briefs weeks before each relevant window, generates themed copy, segments your audience by past purchase behavior, and runs A/B variants so the highest-converting message is already identified before the peak day.",
  },
  {
    category: 'campaigns',
    question: 'Can the AI optimize Google Ads and Meta Ads budgets automatically?',
    answer:
      "Yes. The agent integrates with the Google Ads and Meta Ads APIs to monitor cost-per-click, conversion rate, and ROAS in real time. It surfaces budget reallocation suggestions (for example, shifting daily spend out of an ad set that is underperforming into the top performer during Cyber Week) and can execute approved changes autonomously. You set the guardrails, daily budget caps and max CPA, and the AI works inside them.",
  },
  {
    category: 'campaigns',
    question: 'How do you keep email out of the spam folder as send volume grows?',
    answer:
      "Deliverability is part of the build, not an afterthought. We set up SPF, DKIM, and DMARC on your sending domain, warm up new sending IPs gradually, and let the agent suppress cold and bounced addresses automatically. It throttles send volume, keeps a clean unsubscribe path in every message, and watches complaint rates. If engagement on a segment drops, the agent reduces frequency to that segment rather than pushing harder.",
  },
  {
    category: 'campaigns',
    question: 'Can the AI generate Instagram Reels scripts and social posts automatically?',
    answer:
      "Yes. The agent pulls from your product catalog, blog content, and campaign calendar to generate Instagram caption drafts, Facebook post copy, and short-form video scripts for Reels and YouTube Shorts. It schedules posts at optimal engagement windows based on your audience analytics and flags top-performing formats for repurposing. Final human review is built into the approval workflow before any post goes live.",
  },

  /* ── US-Specific ── */
  {
    category: 'us',
    question: 'Does the AI integrate with Klaviyo, HubSpot, Mailchimp, and Salesforce?',
    answer:
      "Yes. We build native integrations with Klaviyo, HubSpot, Mailchimp, ActiveCampaign, Braze, and Salesforce Marketing Cloud, plus SMS providers like Twilio, Attentive, and Postscript. The AI acts as a layer on top of the stack you already run, not a replacement for it, so your existing flows, templates, and reporting keep working while the agent takes over the drafting and scheduling.",
  },
  {
    category: 'us',
    question: 'Can the AI segment US audiences by region, lifecycle stage, or purchase tier?',
    answer:
      "Yes, segmentation is a core strength. The agent connects to your CRM or e-commerce platform (Shopify, WooCommerce, BigCommerce, Commerceflo) and auto-segments contacts by state or metro, time zone, language preference, RFM score (recency, frequency, monetary), product category interest, and lifecycle stage. Campaign briefs are then generated per segment rather than one message for the whole list.",
  },
  {
    category: 'us',
    question: 'How does the agent handle CAN-SPAM, TCPA, and CCPA requirements?',
    answer:
      "We build to the rules rather than around them. Every marketing email carries a working one-click unsubscribe, an honest subject line, and your real postal address, which is what CAN-SPAM requires. SMS sends only to contacts with prior express written consent on file, with STOP handling and quiet-hours logic, per TCPA. Consumer data requests under CCPA and CPRA (delete, opt out of sharing) propagate to the agent's own segments. This is how we build; it is not legal advice, and your counsel should review your specific program.",
  },
  {
    category: 'us',
    question: 'What about mobile-first creative for US audiences on email and social?',
    answer:
      "Most email opens and nearly all social engagement in the US happen on a phone, so every AI-generated asset is built for a small screen first. Social creative comes out in vertical format (9:16 for Stories and Reels, 4:5 for feed). Subject lines are kept short enough to survive mobile preview truncation, preview text is written as a second hook rather than filler, and SMS copy stays inside a single segment so you are not paying for three messages.",
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How long does it take to build and deploy an AI marketing agent?',
    answer:
      "A standard AI marketing agent covering email, SMS, and social scheduling takes 4 to 6 weeks from kickoff to first live campaign. Weeks 1 and 2 are strategy and integration setup. Weeks 3 and 4 are campaign template build and brand voice calibration. Weeks 5 and 6 are pilot campaigns to a live audience segment, then tuning before full rollout.",
  },
  {
    category: 'process',
    question: 'What does FactoryJet need from us to get started?',
    answer:
      "We need access to your email platform (Klaviyo, Mailchimp, HubSpot, or whatever you run), your SMS provider if you already have one, your CRM or customer list (a CSV export is fine to start), your product catalog or service list, brand guidelines (logo, colors, tone-of-voice doc if you have one), and a 30-minute onboarding call. We handle the technical integration from there.",
  },
  {
    category: 'process',
    question: 'Do we need to approve every campaign before it sends?',
    answer:
      "You choose your approval model. Most clients start with a review-and-approve workflow where the AI generates the full campaign brief and copy 72 hours before send and you approve with one click. Once you trust the output quality, typically after two or three months, you can switch to autonomous send with post-send reporting only. We recommend keeping review mode on for peak-season campaigns regardless.",
  },
  {
    category: 'process',
    question: 'How does the AI learn and improve over time?',
    answer:
      "Every campaign feeds back into the AI's learning loop. Open rates, click-through rates, SMS reply rates, conversion events, and unsubscribes are all ingested. The AI updates its model of what subject lines, CTAs, send times, and copy styles work best for your audience. Most clients see measurable improvement within 60 to 90 days of go-live, which is roughly the point where the agent has enough of your own campaign history to work from.",
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'What does an AI marketing agent cost to build?',
    answer:
      "Pricing is fixed price after a scoping call, quoted up front before any code is written. The Content AI Starter covers AI-generated social and email content with a monthly campaign calendar. The Full Marketing AI Platform adds lifecycle email, SMS campaigns, ad optimization signals, and CRM segmentation. Enterprise adds multi-brand, bilingual copy, and fully autonomous campaign execution. All are one-time build fees, not retainers.",
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the build?',
    answer:
      "The build fee covers the custom AI agent. After delivery you pay the underlying services directly: your email and SMS providers charge for sends, LLM API usage is billed on volume, and any third-party integration licenses are billed by their vendors. We size all of those during the scoping call so there are no surprises. FactoryJet offers an optional monthly support retainer for ongoing tuning, new campaign templates, and model updates.",
  },
  {
    category: 'pricing',
    question: 'Can we start with a small scope and expand the agent later?',
    answer:
      "Yes. All our AI marketing agents are built modularly. Start with the Content AI Starter focused on social and email, then add the SMS module, then the ad optimization layer, and finally full autonomous campaign execution. Incremental upgrades are priced at the delta, not a full rebuild. Most clients expand within six months once they see returns from the initial scope.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a pilot before the full build?',
    answer:
      "Yes. For clients who want validation before committing to the full build, we offer a 4-week pilot: one live email campaign and one SMS campaign, fully AI-generated and sent to a real audience segment. The pilot is a fixed fee, credited against the full project cost if you proceed. Most clients find one successful live campaign more convincing than any proposal document.",
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

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Marketing Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
          { name: 'AI Marketing Agent', url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_marketing_agent_hero" />}
          eyebrow="AI MARKETING AGENT · UNITED STATES"
          headline="AI That Plans, Writes and Sends Your Black Friday Campaign, While You Run Your Business"
          lead="Lifecycle email, SMS, social content, and ad optimization, automated with AI that writes in your brand voice, knows your promo calendar, and learns which messages drive revenue. Fixed price after a scoping call. No agency retainer."
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
                  'Black Friday brief generated → 847 contacts segmented by past purchase → email and SMS variants ready',
                  'Meta Ads: daily budget moved off a low-ROAS ad set into the top performer automatically',
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
          description="Websites designed and built for businesses across the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. WHAT IS AN AI MARKETING AGENT ─────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI MARKETING AGENT EXPLAINED"
          headline="Why an AI Marketing Agent Is Nothing Like the Marketing Tools You Have Tried"
          lead="SaaS marketing tools are delivery platforms, you still create the strategy, write the content, and set the schedule manually. An AI marketing agent generates the strategy, writes the copy, and learns what converts, running your campaigns around the clock without a brief from you."
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
                The marketing tools most US businesses already pay for, Klaviyo, Mailchimp, HubSpot, Meta Ads Manager, require your team to log in every week, write the content, pick the audience, and hit send. An AI marketing agent does all of that on its own. It reads your product catalog, watches your promo calendar, generates a campaign brief with copy and audience segmentation, and sends it, in English or Spanish, while you are running your business.
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
                FactoryJet AI marketing agents are built on large language models: Claude, GPT-4o, or Gemini, with a campaign intelligence layer tuned to your specific brand, audience segments, and promo calendar. The agent connects directly to your CRM, email platform, SMS provider, Meta Ads, and e-commerce platform so every campaign is informed by real customer data and every result feeds back into the next one.
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
          lead="US consumer businesses have a handful of revenue windows that decide the year: Black Friday and Cyber Monday, the December holidays, back to school, and for B2B, the end of every quarter. Each one needs a new offer, new content, new segmentation, and a new send. Most teams start scrambling two weeks out. An AI marketing agent starts in September."
          pillars={[
            {
              icon: '🛒',
              title: 'Peak season is won or lost in the preparation window',
              body: "The National Retail Federation put US retail sales for November and December 2025 at $1.01 to $1.02 trillion. The brands that do well in that window are the ones that briefed early enough to test subject lines, offers, and segments before the traffic arrived. An AI marketing agent generates the Black Friday brief on a fixed calendar, so it is sitting in your inbox in September, every year, without you asking for it.",
            },
            {
              icon: '📧',
              title: 'Email and SMS are your highest-margin channels, and most teams still run them by hand',
              body: "You own your email list and your SMS list. There is no auction, no rising CPM, no platform between you and the customer. Yet most US small businesses send one message to the entire list, with no segmentation, no personalization, and no A/B test, because writing five versions takes five times as long. An AI marketing agent writes the versions, splits the audience, and handles unsubscribe and consent records as part of the send rather than as cleanup afterwards.",
            },
            {
              icon: '📉',
              title: 'Ad budgets leak while your team has other priorities',
              body: "Most small teams open the ads manager once a week, which means a losing ad set can burn budget for days before anyone notices. That is not a strategy problem, it is a time problem. An AI marketing agent watches ROAS continuously and flags reallocation during the windows that actually matter, so your Cyber Week budget follows the top performer instead of the plan you wrote in August.",
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
          lead="We do not have a preferred vendor, we pick the right model, channel platform, and analytics layer for your business, audience size, and marketing maturity. Every architectural decision is documented and handed over."
          reverseOnDesktop
          body={
            <>
              <p>
                Every AI marketing agent we build has five layers: an LLM for copy generation and campaign brief writing, a campaign intelligence layer that reads your promo calendar and CRM segments, channel connectors for email, SMS, Meta Ads and Google Ads, an approval workflow engine, and a revenue attribution dashboard. We pick best-in-class components for each layer and explain the reasoning in plain language.
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
                For bilingual audiences we configure language-specific prompt chains, so your Spanish-speaking segment in Houston gets copy written in Spanish rather than a machine translation of the English version. Same product, same offer, different phrasing, because the two versions are not supposed to read identically.
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
                  { name: 'Lifecycle Email AI', desc: 'Welcome, cart abandonment, post-purchase, and winback flows written and scheduled from your catalog and CRM data, with attribution back to revenue.' },
                  { name: 'SMS Campaign AI', desc: 'Segmented, personalized text campaigns with prior express written consent capture, STOP handling, and quiet-hours logic built in, per TCPA.' },
                  { name: 'Social Content AI', desc: 'AI-generated Instagram captions, Facebook posts, and Reels scripts, scheduled at peak engagement windows, 30 posts a month minimum.' },
                  { name: 'Ad Budget Optimization AI', desc: 'Real-time Google Ads and Meta Ads monitoring with budget reallocation signals tied to your promo calendar and ROAS targets.' },
                  { name: 'Full-Stack Marketing AI', desc: 'All of the above unified, one AI engine managing email, SMS, social, and ads with a shared audience intelligence layer.' },
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
            "US marketing runs on owned channels and paid social. Email and SMS are where the margin is, the CRM is where the truth is, and Google and Meta are where the budget quietly leaks. The problem is almost never the tools. Most US businesses already pay for Klaviyo or HubSpot. The problem is that somebody has to sit down every week and actually use them, and that somebody is usually already doing three other jobs.",
            "FactoryJet's AI marketing agents are built for that gap. The US retail calendar is pre-loaded, copy comes out in your brand voice in English and Spanish, CAN-SPAM and TCPA requirements live in the send logic instead of being bolted on later, and the agent plugs into the stack you already run (Klaviyo, HubSpot, Mailchimp, Shopify, Salesforce, Commerceflo). You own the code when we hand it over.",
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
            sub="Tell us your biggest marketing bottleneck, usually peak-season preparation, list segmentation, or sheer content volume. We will map out exactly how an AI marketing agent fits your channels and give you a fixed-price estimate before writing a single line of code. No pitch, no pressure."
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

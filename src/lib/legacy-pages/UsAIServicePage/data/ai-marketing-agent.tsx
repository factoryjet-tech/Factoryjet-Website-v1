import {
  Mail, Smartphone, Target, PenTool, BarChart3, RefreshCw
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiMarketingAgentData: AIServicePageData = {
  breadcrumb: 'AI Marketing Agent',
  heroTitle: (
    <>Stop Guessing. Start Optimizing.{' '}
      <span className="text-[#FF6B35]">Deploy an AI Marketing Agent That Creates, Tests, and Scales What Works.</span>
    </>
  ),
  heroDescription:
    'FactoryJet builds custom AI marketing agents that generate content, manage campaigns, optimize ad spend, and nurture leads \u2014 all in your brand voice, across every channel, around the clock.',
  heroStats: [
    { value: '3x', label: 'Content Output' },
    { value: '40%', label: 'Lower CPL' },
    { value: '25%', label: 'Higher Conversions' },
    { value: '24/7', label: 'Optimization' },
  ],
  navLinks: ['Capabilities', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: 'Most Marketing Budgets Are Wasted on Guesswork',
  problemSubtitle:
    'Manual campaign management, inconsistent execution, and slow optimization drain your budget.',
  problemStats: [
    { value: '40%', description: "of marketing spend is wasted on underperforming campaigns that aren't caught fast enough" },
    { value: '5hrs', description: 'per week spent by marketers on repetitive tasks that AI can handle in minutes' },
    { value: '76%', description: 'of marketers say they lack the bandwidth to execute everything they know would work' },
  ],

  capabilitiesLabel: 'Capabilities',
  capabilitiesTitle: 'What Your AI Marketing Agent Can Do',
  capabilitiesSubtitle:
    'Not another scheduling tool. An intelligent marketing engine that creates, optimizes, and scales.',
  capabilities: [
    {
      icon: <Mail size={24} />,
      title: 'Email Campaign Optimization',
      description:
        'AI writes subject lines, body copy, and CTAs. Segments your list, personalizes at scale, and optimizes send times.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Social Media Management',
      description:
        'Platform-native content for Instagram, LinkedIn, Facebook, X, and TikTok. AI adapts message and format per channel.',
    },
    {
      icon: <Target size={24} />,
      title: 'Ad Campaign Management',
      description:
        'Real-time Google Ads and Meta Ads optimization \u2014 bids, targeting, creative, and budget allocation.',
    },
    {
      icon: <PenTool size={24} />,
      title: 'Content Generation',
      description:
        'Blog posts, landing pages, product descriptions, ad copy \u2014 in your brand voice, optimized for SEO.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Performance Analytics',
      description:
        'Unified dashboard across channels. AI identifies trends, anomalies, and opportunities.',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Lead Nurture Automation',
      description:
        'Behavioral triggers and drip sequences that adapt based on prospect actions.',
    },
  ],

  channels: {
    label: 'Channels',
    title: 'One AI Agent. Every Marketing Channel.',
    items: [
      { title: 'Email Marketing', platforms: 'Mailchimp, HubSpot, Klaviyo', icon: <Mail size={20} /> },
      { title: 'Google Ads', platforms: 'Search, Display, Shopping, YouTube', icon: <Target size={20} /> },
      { title: 'Meta Ads', platforms: 'Facebook, Instagram', icon: <Smartphone size={20} /> },
      { title: 'Social Media', platforms: 'LinkedIn, X, TikTok', icon: <Smartphone size={20} /> },
      { title: 'SEO & Content', platforms: 'Blog, Landing Pages, Schema', icon: <PenTool size={20} /> },
      { title: 'Lead Nurturing', platforms: 'Drip campaigns, Retargeting', icon: <RefreshCw size={20} /> },
    ],
  },

  pricingTitle: 'Transparent, Value-Based Pricing',
  pricingSubtitle:
    'No hidden fees. No per-interaction charges. Complete build with transparent costs.',
  tiers: [
    {
      title: 'Starter',
      price: '$2,999',
      description: 'Best for single-channel marketing.',
      features: [
        'Single-channel AI optimization',
        'Content generation (4 posts/week)',
        'Basic campaign management',
        'Monthly report',
        'Platform integration',
        '30 days support',
      ],
    },
    {
      title: 'Growth',
      price: '$6,499',
      description: 'Best for multi-channel with 5+ campaigns.',
      features: [
        'Multi-channel management',
        'Daily content generation',
        'Ad campaign optimization',
        'Email automation + segmentation',
        'Lead nurture workflows',
        'Analytics dashboard',
        '60 days support',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$13,999',
      description: 'For complex marketing stacks.',
      features: [
        'Full-stack marketing AI',
        'Unlimited content generation',
        'Advanced ad optimization',
        'Custom attribution modeling',
        'ABM campaign support',
        'Dedicated strategist',
        '90 days support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What does an AI marketing agent do?',
      answer:
        'Automates and optimizes marketing operations \u2014 content creation, email campaigns, ad management, and lead nurturing. Analyzes data and adapts strategies in real time.',
    },
    {
      question: 'Will AI content sound robotic?',
      answer:
        'No. We train on your brand voice, past content, and audience preferences. Output is indistinguishable from skilled human writing.',
    },
    {
      question: 'How does it optimize ads?',
      answer:
        'Monitors performance continuously, adjusting bids, targeting, creative, and budget based on real-time data toward your conversion goals.',
    },
    {
      question: 'Can it replace our marketing team?',
      answer:
        'No. AI handles repetitive, data-heavy tasks. Your team focuses on strategy, creative direction, and brand storytelling.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Starting from $2,999 for single-channel. Growth at $6,499. Enterprise at $13,999.',
    },
    {
      question: 'What platforms does it integrate with?',
      answer:
        'Google Ads, Meta Ads, LinkedIn Ads, Mailchimp, HubSpot, Klaviyo, Hootsuite, Google Analytics, Shopify, WordPress, and 100+ more.',
    },
    {
      question: 'How do you measure ROI?',
      answer:
        'Cost per lead, CPL, ROAS, email revenue, organic growth, pipeline attribution. Most see 2\u20134x improvement in 90 days.',
    },
    {
      question: 'How quickly can we start?',
      answer:
        'Standard 3\u20135 weeks. Simple single-channel in 2 weeks.',
    },
  ],

  ctaTitle: 'Your Competitors Spend More. You\u2019ll Spend Smarter.',
  ctaSubtitle:
    "Book a free Marketing AI Assessment. We'll audit your campaigns and show you how AI improves your ROI.",
}

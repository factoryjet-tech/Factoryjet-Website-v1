import {
  Zap, Target, PenTool, CalendarDays, RefreshCw, BarChart3
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiSalesAgentData: AIServicePageData = {
  breadcrumb: 'AI Sales Agent',
  heroTitle: (
    <>Your Best Salesperson Never Sleeps.{' '}
      <span className="text-[#FF6B35]">Deploy an AI SDR That Prospects, Qualifies, and Books Meetings on Autopilot.</span>
    </>
  ),
  heroDescription:
    "FactoryJet builds custom AI sales agents that respond to leads instantly, qualify them against your criteria, personalize outreach at scale, and book meetings directly on your reps' calendars. Stop losing deals to slow follow-up.",
  heroStats: [
    { value: '< 60s', label: 'Lead Response Time' },
    { value: '35%', label: 'Avg. Meeting Rate' },
    { value: '23', label: 'Days Shorter Cycle' },
    { value: '65%', label: 'More Selling Time' },
  ],
  navLinks: ['Capabilities', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: 'Your Sales Reps Spend Less Than 30% of Their Time Selling',
  problemSubtitle:
    'The rest? Data entry, qualification calls with tire-kickers, follow-up emails, CRM updates.',
  problemStats: [
    { value: '71%', description: 'of sales reps say they spend too much time on non-selling activities' },
    { value: '5 min', description: 'is the max response window before lead conversion drops 80%' },
    { value: '$1M+', description: 'in pipeline value lost annually by mid-market B2B companies due to slow follow-up' },
  ],

  capabilitiesLabel: 'Capabilities',
  capabilitiesTitle: 'What Your AI Sales Agent Does',
  capabilitiesSubtitle:
    'Not another email sequencer. A genuine AI SDR that thinks, qualifies, personalizes, and books.',
  capabilities: [
    {
      icon: <Zap size={24} />,
      title: 'Instant Lead Response',
      description:
        'Your AI SDR responds to every inbound lead in under 60 seconds \u2014 email, form fill, chat, or social.',
    },
    {
      icon: <Target size={24} />,
      title: 'Intelligent Qualification',
      description:
        'BANT, MEDDIC, SPIN \u2014 the AI asks the right questions, scores leads, and routes qualified opportunities.',
    },
    {
      icon: <PenTool size={24} />,
      title: 'Personalized Outreach',
      description:
        'AI crafts personalized emails based on prospect data, company research, and engagement history.',
    },
    {
      icon: <CalendarDays size={24} />,
      title: 'Meeting Booking',
      description:
        "When qualified, your AI SDR books on your rep's calendar \u2014 timezone coordination, availability checks, confirmations.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Pipeline Management',
      description:
        'Automatic CRM updates, follow-up scheduling, deal stage tracking, and activity logging.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Performance Analytics',
      description:
        'Conversion rates by source, response time metrics, qualification accuracy, pipeline attribution.',
    },
  ],

  pricingTitle: 'Transparent, Value-Based Pricing',
  pricingSubtitle:
    'No hidden fees. No per-interaction charges. Complete build with transparent costs.',
  tiers: [
    {
      title: 'Starter',
      price: '$3,999',
      description: 'Best for small sales teams with up to 200 monthly leads.',
      features: [
        'Single-channel AI SDR',
        'Lead qualification logic',
        'Basic CRM integration',
        'Meeting booking',
        'Standard follow-up sequences',
        '30 days support',
      ],
    },
    {
      title: 'Growth',
      price: '$7,999',
      description: 'Best for growing B2B teams with 200\u20131,000 monthly leads.',
      features: [
        'Multi-channel AI SDR',
        'Advanced qualification (BANT/MEDDIC)',
        'Deep CRM integration',
        'Personalized outreach engine',
        'Multi-rep routing',
        'Analytics dashboard',
        '60 days support',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$16,999',
      description: 'For enterprise sales with complex pipelines.',
      features: [
        'Full-pipeline AI SDR',
        'Unlimited channels',
        'Custom qualification frameworks',
        'ABM targeting integration',
        'Advanced pipeline analytics',
        'Dedicated account manager',
        '90 days support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What is an AI Sales Agent vs. sales automation?',
      answer:
        'Sales automation follows rigid sequences. An AI sales agent understands prospect intent, crafts personalized responses, qualifies based on conversation context, and adapts its approach.',
    },
    {
      question: 'Can an AI SDR really book qualified meetings?',
      answer:
        'Yes. Our AI sales agents achieve 28\u201340% meeting booking rates from qualified leads vs. 2\u20133% from traditional web forms.',
    },
    {
      question: 'How does it integrate with our CRM?',
      answer:
        'We integrate with Salesforce, HubSpot, Zoho, Pipedrive, and custom CRMs. The AI reads data, logs activities, and updates stages automatically.',
    },
    {
      question: "What's the typical ROI timeline?",
      answer:
        'Most B2B clients see ROI within 60\u201390 days. If your SDR costs $65K/year, the AI handles the same volume at a fraction of the cost.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Starting from $3,999 for Starter. Growth at $7,999. Enterprise at $16,999. No per-lead fees.',
    },
    {
      question: 'Will this replace our sales reps?',
      answer:
        'No. It replaces data entry, initial outreach, and follow-up sequences. Your reps focus on demos, relationships, and closing.',
    },
    {
      question: 'Can the AI handle objections?',
      answer:
        'For common qualification objections, yes \u2014 trained on your playbook. Complex negotiations route to human reps with full context.',
    },
    {
      question: 'How long does deployment take?',
      answer:
        'Standard 4\u20136 weeks. Simple implementations in 3 weeks.',
    },
  ],

  ctaTitle: 'Your Competitors Respond in Hours. You\u2019ll Respond in Seconds.',
  ctaSubtitle:
    "Book a free Sales AI Assessment. We'll analyze your lead flow, response times, and pipeline gaps.",
}

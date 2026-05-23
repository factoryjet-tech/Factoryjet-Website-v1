import {
  MessageSquare, Target, ShoppingCart, BookOpen, Link, BarChart3
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiChatbotData: AIServicePageData = {
  breadcrumb: 'AI Chatbot',
  heroTitle: (
    <>Turn Every Website Visitor into a Conversation.{' '}
      <span className="text-[#FF6B35]">Turn Every Conversation into a Customer.</span>
    </>
  ),
  heroDescription:
    'FactoryJet builds custom AI chatbots that do more than answer questions \u2014 they understand your business, engage visitors with real conversations, capture and qualify leads, provide instant support, and guide prospects toward purchase decisions. Not a generic template. A purpose-built AI chat agent trained on your products, your pricing, and your customer journey.',
  heroStats: [
    { value: '3x', label: 'Lead Capture Increase' },
    { value: '< 2s', label: 'Response Time' },
    { value: '80%', label: 'Questions Resolved' },
    { value: '24/7', label: 'Visitor Engagement' },
  ],
  navLinks: ['Capabilities', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: '98% of Your Website Visitors Leave Without Converting',
  problemSubtitle:
    "They had questions. Nobody answered. They left. Your competitors' chatbot caught them instead.",
  problemStats: [
    { value: '98%', description: 'of website visitors leave without taking any action \u2014 no form fill, no purchase, no contact' },
    { value: '53%', description: "of customers will abandon a purchase if they can't find a quick answer to their question" },
    { value: '79%', description: 'prefer live chat to any other support channel because of immediacy' },
  ],

  capabilitiesLabel: 'Capabilities',
  capabilitiesTitle: 'What Your AI Chatbot Can Do',
  capabilitiesSubtitle:
    'Not a glorified FAQ page. A purpose-built AI agent that engages, qualifies, converts, and supports.',
  capabilities: [
    {
      icon: <MessageSquare size={24} />,
      title: 'Intelligent Conversations',
      description:
        'Not a decision-tree bot. Your AI chatbot understands natural language, maintains multi-turn context, and handles follow-up questions naturally.',
    },
    {
      icon: <Target size={24} />,
      title: 'Lead Capture & Qualification',
      description:
        'Every visitor becomes a potential lead. Your chatbot asks qualifying questions, captures contact info, and routes hot prospects to sales instantly.',
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-commerce Guidance',
      description:
        'Product recommendations, size guides, inventory checks, shipping estimates, cart recovery, and checkout assistance \u2014 turning browsers into buyers.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Knowledge Base Trained',
      description:
        'Trained on your products, pricing, policies, and documentation. Not generic answers \u2014 your answers, delivered consistently every time.',
    },
    {
      icon: <Link size={24} />,
      title: 'Deep Integrations',
      description:
        'Connects to your CRM, help desk, e-commerce platform, booking system, and payment processor. Your chatbot takes action, not just talks.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analytics & Insights',
      description:
        'Conversation analytics, lead conversion tracking, popular question reports, and sentiment trends.',
    },
  ],

  comparison: {
    title: 'Custom AI Chatbot vs. SaaS Templates',
    rows: [
      { feature: 'Understands natural language', custom: '\u2713', template: 'Limited' },
      { feature: 'Trained on your business', custom: '\u2713', template: '\u2717' },
      { feature: 'Takes real actions', custom: '\u2713', template: '\u2717' },
      { feature: 'Custom integrations', custom: '\u2713', template: 'Pre-built only' },
      { feature: 'Handles unexpected questions', custom: '\u2713', template: 'Breaks' },
      { feature: 'Pricing model', custom: 'One-time build', template: 'Monthly/seat' },
      { feature: 'Brand voice customization', custom: 'Full', template: 'Template only' },
    ],
  },

  pricingTitle: 'Transparent, Value-Based Pricing',
  pricingSubtitle:
    'No hidden fees. No per-interaction charges. Complete build with transparent costs.',
  tiers: [
    {
      title: 'Starter',
      price: '$1,999',
      description: 'Best for small business websites with up to 1,000 monthly conversations.',
      features: [
        'AI chatbot for your website',
        'Training on up to 30 articles',
        'Lead capture and email notification',
        'Basic CRM integration',
        'Branded chat widget',
        '30 days post-launch support',
      ],
    },
    {
      title: 'Growth',
      price: '$4,499',
      description: 'Best for growing businesses with 1,000\u20135,000 monthly conversations.',
      features: [
        'Everything in Starter, plus:',
        'Multi-channel deployment',
        'Advanced lead qualification',
        'E-commerce integration',
        'Appointment scheduling',
        'Analytics dashboard',
        '60 days post-launch support',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$9,999',
      description: 'Best for high-traffic websites or complex requirements.',
      features: [
        'Everything in Growth, plus:',
        'Omnichannel deployment',
        'Knowledge base scoped per project brief',
        'Deep multi-system integrations',
        'Custom chat interface design',
        'A/B testing capabilities',
        'Dedicated account manager',
        '90 days post-launch support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'How is a custom AI chatbot different from Drift or Intercom?',
      answer:
        'SaaS tools give you templates and drag-and-drop flows that break on unexpected questions. A FactoryJet chatbot uses LLMs trained on your business \u2014 it understands intent, handles novel questions, and takes real actions in your systems.',
    },
    {
      question: 'How much does a custom AI chatbot cost?',
      answer:
        'Starting from $1,999 for single-channel. Growth at $4,499 adds multi-channel. Enterprise at $9,999 covers omnichannel with extensive knowledge base training scoped per project. No per-conversation fees.',
    },
    {
      question: 'How long does deployment take?',
      answer:
        'Most deploy in 2\u20133 weeks. Simple single-channel bots can go live in under two weeks. Complex multi-channel deployments typically take 4\u20135 weeks.',
    },
    {
      question: 'Can it handle multiple languages?',
      answer:
        "Yes. 100+ languages with native-quality understanding. A single chatbot automatically detects and responds in the visitor's preferred language.",
    },
    {
      question: 'Will it match our brand voice?',
      answer:
        "Absolutely. We customize the widget design and train the AI's tone, vocabulary, and personality to match your brand voice.",
    },
    {
      question: "What happens when it can't answer?",
      answer:
        'Smooth handoff to your human team via live chat transfer, email escalation, or callback scheduling \u2014 with full conversation context.',
    },
    {
      question: 'Can it book appointments and process orders?',
      answer:
        'Yes. With integrations, your chatbot books appointments, processes orders, handles returns, and manages subscriptions within the conversation.',
    },
    {
      question: 'Do you provide ongoing optimization?',
      answer:
        'Every plan includes post-launch optimization (30\u201390 days). We analyze data, identify gaps, improve accuracy, and expand capabilities.',
    },
  ],

  ctaTitle: 'Your Website Gets Traffic. Now Make It Convert.',
  ctaSubtitle:
    "Book a free Chatbot Assessment. We'll analyze your traffic, visitor behavior, and conversion gaps \u2014 then show you how a custom AI chatbot would capture more leads.",
}

import React from 'react'
import {
  MessageSquare, Brain, Zap, BarChart3, Target, Globe,
  Search, PenTool, Hammer, ShieldCheck, Rocket, Clock
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiCustomerSupportData: AIServicePageData = {
  breadcrumb: 'AI Customer Support Agent',

  heroTitle: (
    <>
      Your Customers Deserve Instant Answers. Your Team Deserves Sleep.{' '}
      <span className="text-[#FF6B35]">An AI Customer Support Agent Delivers Both.</span>
    </>
  ),

  heroDescription:
    'FactoryJet builds custom AI customer support agents that resolve up to 80% of support tickets autonomously \u2014 handling refunds, tracking orders, troubleshooting issues, and answering product questions around the clock. No templates. No generic bots. A purpose-built AI agent trained on your business, your products, and your brand voice.',

  heroStats: [
    { value: '87%', label: 'Avg. Resolution Rate' },
    { value: '11s', label: 'First Response Time' },
    { value: '70%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Availability' },
  ],

  navLinks: ['Services', 'Process', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: 'Your Support Team Is Drowning. Your Customers Are Waiting.',
  problemSubtitle:
    'Most SMBs are stuck in a painful cycle \u2014 growing customer expectations, limited support staff, and tools that weren\u2019t built for the volume or complexity of modern customer service.',
  problemStats: [
    { value: '60%', description: 'of customers say they\u2019ll switch brands after just two bad support experiences' },
    { value: '72%', description: 'expect responses within 30 minutes \u2014 but average SMB response time is 12+ hours' },
    { value: '$1.6T', description: 'lost annually by US businesses due to poor customer service' },
  ],

  capabilitiesLabel: 'Capabilities',
  capabilitiesTitle: 'What Your AI Customer Support Agent Can Do',
  capabilitiesSubtitle:
    'Not a chatbot with a fancy label. A genuine AI agent that understands intent, takes actions, and resolves issues end-to-end.',
  capabilities: [
    {
      icon: <MessageSquare size={24} />,
      title: 'Omnichannel Deployment',
      description: 'Web chat, WhatsApp, email, voice, social media \u2014 your AI agent meets customers wherever they are.',
    },
    {
      icon: <Brain size={24} />,
      title: 'Knowledge Integration',
      description: 'Access your product docs, policies, order history, and CRM data to give accurate, contextual answers.',
    },
    {
      icon: <Zap size={24} />,
      title: 'System Actions',
      description: 'Process refunds, update orders, modify subscriptions, reset passwords \u2014 not just answers, actions.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Sentiment Analysis',
      description: 'Detect frustration, urgency, and satisfaction in real time. Escalate before problems worsen.',
    },
    {
      icon: <Target size={24} />,
      title: 'Personalization',
      description: 'Tailor every response based on customer history, purchase patterns, and individual preferences.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Multilingual Support',
      description: 'Serve customers in 100+ languages with native-quality understanding and response generation.',
    },
  ],

  serviceAreas: {
    label: 'Service Areas',
    title: 'Every Support Scenario, Handled',
    items: [
      'Account management & profile updates',
      'Order tracking & modification',
      'Billing inquiries & payment processing',
      'Product information & recommendations',
      'Warranty claims & returns processing',
      'Appointment scheduling & reminders',
      'Technical troubleshooting & support',
      'Complaint handling & resolution',
      'Password resets & access recovery',
      'Subscription management',
      'Shipping status & delivery updates',
      'Feedback collection & surveys',
    ],
  },

  process: {
    label: 'Our Process',
    title: 'From Discovery to Deployment in 3\u20135 Weeks',
    subtitle: 'A proven implementation methodology built from dozens of enterprise AI deployments.',
    steps: [
      {
        title: 'Discovery & Assessment',
        duration: 'Week 1',
        icon: <Search size={24} />,
        items: [
          'Audit current support workflows, ticket categories, and resolution patterns',
          'Identify highest-impact automation opportunities',
          'Map existing systems and integration requirements',
        ],
      },
      {
        title: 'Architecture & Design',
        duration: 'Week 2',
        icon: <PenTool size={24} />,
        items: [
          'Custom conversation flows and escalation logic',
          'Integration specifications and knowledge base structure',
          'Agent personality and brand voice design',
        ],
      },
      {
        title: 'Build & Train',
        duration: 'Weeks 2\u20134',
        icon: <Hammer size={24} />,
        items: [
          'Build your agent and train it on your knowledge base',
          'Integrate with your existing systems',
          'Test across hundreds of real-world scenarios',
        ],
      },
      {
        title: 'Test & Validate',
        duration: 'Week 4',
        icon: <ShieldCheck size={24} />,
        items: [
          'Comprehensive QA including edge cases',
          'Security audit, load testing, and red-teaming for hallucination prevention',
          'Full review before anything goes live',
        ],
      },
      {
        title: 'Launch & Optimize',
        duration: 'Ongoing',
        icon: <Rocket size={24} />,
        items: [
          'Phased rollout with real-time monitoring',
          'Analyze every conversation and refine responses',
          'Expand capabilities and optimize for better outcomes',
        ],
      },
    ],
  },

  integrations: {
    label: 'Integrations',
    title: 'Connects With Your Existing Tools',
    categories: [
      { name: 'CRM', items: ['Salesforce', 'HubSpot', 'Zoho CRM'] },
      { name: 'Helpdesk', items: ['Freshdesk', 'Zendesk', 'Intercom', 'ServiceNow', 'Jira'] },
      { name: 'E-commerce', items: ['Shopify', 'WooCommerce', 'BigCommerce'] },
      { name: 'Communication', items: ['Slack', 'Microsoft Teams', 'WhatsApp Business'] },
      { name: 'Finance', items: ['Stripe', 'QuickBooks'] },
    ],
  },

  pricingTitle: 'Transparent, Value-Based Pricing',
  pricingSubtitle:
    'No hidden fees. No per-resolution charges that spike unpredictably. Complete AI agent build with transparent ongoing costs.',
  tiers: [
    {
      title: 'Starter',
      price: '$2,999',
      description: 'Best for small businesses handling up to 500 monthly support interactions.',
      features: [
        'Single-channel AI agent (chat or email)',
        'Knowledge base training (up to 50 articles)',
        'Basic CRM integration',
        'Standard escalation workflows',
        '30 days post-launch support',
      ],
    },
    {
      title: 'Growth',
      price: '$5,999',
      description: 'Best for growing businesses handling 500\u20132,500 monthly interactions across multiple channels.',
      isPopular: true,
      features: [
        'Multi-channel AI agent (chat + email + 1 platform)',
        'Knowledge base training (up to 200 articles)',
        'Advanced CRM and help desk integration',
        'Custom escalation logic & sentiment analysis',
        'Analytics dashboard',
        '60 days post-launch support',
      ],
    },
    {
      title: 'Enterprise',
      price: '$12,999',
      description: 'For businesses with complex support operations, multiple product lines, or regulatory requirements.',
      features: [
        'Full omnichannel AI agent',
        'Knowledge base training scoped per project brief',
        'Custom system integrations',
        'Proactive outreach capabilities',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        '90 days post-launch support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What exactly is an AI customer support agent, and how is it different from a regular chatbot?',
      answer:
        'A traditional chatbot follows pre-programmed decision trees \u2014 if a customer asks something outside the script, it breaks. An AI customer support agent uses large language models to understand natural language, maintain context across a conversation, access your business data in real time, and take actions like processing refunds or updating orders. It reasons through problems rather than matching keywords to canned responses.',
    },
    {
      question: 'How much does an AI customer service agent cost for a small business?',
      answer:
        'FactoryJet\u2019s AI customer support agent development starts from $2,999 for single-channel deployment. Costs vary based on the number of channels, complexity of integrations, knowledge base size, and custom functionality required. Unlike SaaS tools that charge per resolution or per agent seat with monthly fees that scale unpredictably, our pricing covers the complete build with transparent ongoing costs.',
    },
    {
      question: 'Can AI really handle customer support as well as a human agent?',
      answer:
        'For routine inquiries \u2014 which typically make up 70% to 85% of total support volume \u2014 yes, and often better. AI responds instantly at any hour, never has a bad day, maintains perfect consistency, and can handle dozens of conversations simultaneously. For complex, emotional, or novel situations that require human judgment and empathy, AI seamlessly escalates to your team with full context.',
    },
    {
      question: 'How long does it take to deploy an AI customer support agent?',
      answer:
        'FactoryJet\u2019s typical deployment timeline is three to five weeks from kickoff to launch. Simple implementations with a single channel and straightforward knowledge base can go live in as little as two weeks. Complex multi-channel deployments with deep system integrations typically take six to eight weeks.',
    },
    {
      question: 'Is AI customer support secure? What about customer data privacy?',
      answer:
        'Security is foundational, not optional. FactoryJet builds AI agents with end-to-end encryption, role-based access controls, SOC 2-compliant hosting infrastructure, and data handling practices aligned with GDPR, CCPA, and PIPEDA requirements.',
    },
    {
      question: 'What is the ROI of an AI customer support agent for an SMB?',
      answer:
        'Most SMB clients see positive ROI within two to three months. A single full-time support agent costs $45,000 to $75,000 annually. An AI customer support agent handling 70% to 85% of your ticket volume costs a fraction of that, while providing 24/7 availability and instant response times.',
    },
    {
      question: 'What channels can AI customer support agents operate on?',
      answer:
        'FactoryJet deploys AI customer support agents across website live chat, email, Facebook Messenger, Instagram DM, WhatsApp Business, SMS, Slack, Microsoft Teams, and custom messaging platforms. Each channel is configured for its unique interaction patterns.',
    },
    {
      question: 'Can the AI agent integrate with our existing CRM and helpdesk tools?',
      answer:
        'Yes. FactoryJet integrates AI customer support agents with Salesforce, HubSpot, Zoho CRM, Freshdesk, Zendesk, Intercom, ServiceNow, Jira Service Management, and custom systems via API. The agent reads and writes to your existing tools \u2014 no parallel systems required.',
    },
    {
      question: 'What happens when the AI agent can\u2019t answer a question?',
      answer:
        'The agent recognizes its limitations and escalates seamlessly to a human team member \u2014 with the full conversation history, customer profile, and its own analysis of the issue. No customer has to repeat themselves. Your team picks up exactly where the AI left off.',
    },
    {
      question: 'Do you offer ongoing support after deployment?',
      answer:
        'Every plan includes post-launch optimization. Starter includes 30 days, Growth includes 60 days, and Enterprise includes 90 days. We also offer ongoing optimization retainers for businesses that want continuous improvement, knowledge base expansion, and performance monitoring.',
    },
  ],

  ctaTitle: 'Deploy Your AI Customer Support Agent in Weeks, Not Months',
  ctaSubtitle:
    'Book a free AI Support Assessment. We\u2019ll audit your current support workflows, identify automation opportunities, and show you exactly what an AI agent could handle \u2014 with projected ROI.',
}

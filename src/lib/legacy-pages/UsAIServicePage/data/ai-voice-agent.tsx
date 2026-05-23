import React from 'react'
import {
  Phone, PhoneOutgoing, CalendarCheck, Target, Globe, RefreshCw,
  Stethoscope, Wrench, Scale, Building2, Car, Landmark,
  Search, PenTool, Hammer, Rocket
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiVoiceAgentData: AIServicePageData = {
  breadcrumb: 'AI Voice Agent',

  heroTitle: (
    <>
      Stop Losing Customers to Voicemail.{' '}
      <span className="text-[#FF6B35]">
        Deploy an AI Voice Agent That Answers Every Call, Books Every Appointment, and Never Takes a Day Off.
      </span>
    </>
  ),

  heroDescription:
    'FactoryJet builds custom AI voice agents that sound natural, handle complex conversations, and take real actions \u2014 scheduling appointments, qualifying leads, processing orders, and routing urgent calls to your team. 24/7, in a voice that represents your brand.',

  heroStats: [
    { value: '100%', label: 'Calls Answered' },
    { value: '<1s', label: 'Response Latency' },
    { value: '65%', label: 'Fewer Missed Calls' },
    { value: '24/7', label: 'Availability' },
  ],

  navLinks: ['Features', 'Use Cases', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: 'Every Missed Call Is a Lost Customer',
  problemSubtitle:
    '62% of calls to small businesses go unanswered. Each missed call costs an average of $1,200 in lifetime customer value. Voicemail isn\u2019t a strategy \u2014 it\u2019s a leak in your revenue pipeline.',
  problemStats: [
    { value: '62%', description: 'of calls to small businesses go unanswered during business hours' },
    { value: '$1,200', description: 'average lifetime value lost per missed call from a potential customer' },
    { value: '85%', description: 'of callers who reach voicemail won\u2019t call back \u2014 they\u2019ll call your competitor' },
  ],

  capabilitiesLabel: 'Features',
  capabilitiesTitle: 'What Your AI Voice Agent Can Do',
  capabilitiesSubtitle:
    'Not an IVR menu tree. A real conversational AI that understands natural speech, takes actions, and sounds human.',
  capabilities: [
    {
      icon: <Phone size={24} />,
      title: 'Inbound Call Handling',
      description:
        'Your AI voice agent answers every call instantly \u2014 no hold music, no voicemail, no missed opportunities. It greets callers by name when integrated with your CRM.',
    },
    {
      icon: <PhoneOutgoing size={24} />,
      title: 'Outbound Campaigns',
      description:
        'Proactive calling for appointment reminders, payment follow-ups, customer surveys, and lead nurture. Your AI calls at scale without burning out your team.',
    },
    {
      icon: <CalendarCheck size={24} />,
      title: 'Appointment Booking',
      description:
        'Real-time calendar integration. Your AI voice agent checks availability, books appointments, sends confirmations, and handles rescheduling \u2014 all within the phone call.',
    },
    {
      icon: <Target size={24} />,
      title: 'Lead Qualification',
      description:
        'Every inbound call becomes a qualified lead. The AI asks your custom qualification questions, scores the lead, and routes to the right sales rep with full context.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Multilingual Support',
      description:
        'Natural-sounding conversations in 30+ languages with regional accent options. Serve diverse customer bases without hiring multilingual staff.',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Seamless Handoff',
      description:
        'When a call needs a human touch, the AI transfers to your team with complete conversation context \u2014 the customer never repeats themselves.',
    },
  ],

  industries: {
    label: 'Industry Use Cases',
    title: 'Built for Your Industry',
    items: [
      {
        icon: <Stethoscope size={24} />,
        title: 'Healthcare',
        description:
          'Patient intake, appointment scheduling, prescription refill requests, insurance verification, after-hours triage routing',
      },
      {
        icon: <Wrench size={24} />,
        title: 'Home Services',
        description:
          'Emergency dispatch, service scheduling, quote requests, follow-up calls, customer satisfaction surveys',
      },
      {
        icon: <Scale size={24} />,
        title: 'Legal',
        description:
          'Client intake screening, appointment booking, case status updates, after-hours call handling, lead qualification',
      },
      {
        icon: <Building2 size={24} />,
        title: 'Real Estate',
        description:
          'Property inquiry handling, showing scheduling, buyer qualification, listing updates, market report requests',
      },
      {
        icon: <Car size={24} />,
        title: 'Automotive',
        description:
          'Service appointment booking, parts inquiries, recall notifications, test drive scheduling, customer follow-up',
      },
      {
        icon: <Landmark size={24} />,
        title: 'Financial Services',
        description:
          'Account inquiries, payment reminders, loan application status, compliance-approved outreach, fraud alert verification',
      },
    ],
  },

  process: {
    label: 'Our Process',
    title: 'From Call Audit to Live Agent in 4\u20136 Weeks',
    steps: [
      {
        title: 'Call Audit & Strategy',
        duration: 'Week 1',
        icon: <Search size={24} />,
        items: [
          'Analyze call patterns, common inquiries, and peak volumes',
          'Identify current handling gaps',
          'Design the optimal voice AI strategy',
        ],
      },
      {
        title: 'Voice Design & Flow Architecture',
        duration: 'Week 2',
        icon: <PenTool size={24} />,
        items: [
          'Custom conversation flows and escalation logic',
          'Voice personality selection mapped to your brand',
          'Integration specifications for phone system and business tools',
        ],
      },
      {
        title: 'Build, Train & Integrate',
        duration: 'Weeks 2\u20135',
        icon: <Hammer size={24} />,
        items: [
          'AI engineers build your voice agent',
          'Integrate with your phone system and business tools',
          'Train on your specific scenarios and workflows',
        ],
      },
      {
        title: 'Test & Launch',
        duration: 'Week 5\u20136',
        icon: <Rocket size={24} />,
        items: [
          'Comprehensive testing across call scenarios',
          'Load testing and quality assurance',
          'Phased rollout with real-time monitoring',
        ],
      },
    ],
  },

  pricingTitle: 'Transparent Voice AI Pricing',
  pricingSubtitle:
    'Build cost + per-minute usage. No per-seat fees. No minimum commitments beyond the initial build.',
  tiers: [
    {
      title: 'Starter',
      price: '$3,499',
      description: 'Best for small businesses receiving up to 200 calls per month.',
      features: [
        'AI voice agent for inbound call answering',
        'Up to 3 conversation flows',
        'Calendar integration',
        'Basic CRM integration',
        'Call recording and transcription',
        '30 days post-launch support',
      ],
    },
    {
      title: 'Growth',
      price: '$6,999',
      description: 'Best for businesses receiving 200\u20131,000 calls per month with multiple call types.',
      isPopular: true,
      features: [
        'Everything in Starter, plus:',
        'Up to 10 conversation flows',
        'Outbound calling capability',
        'Advanced lead qualification',
        'Multi-system integration',
        'Call analytics dashboard',
        'SMS follow-up after calls',
        '60 days post-launch support',
      ],
    },
    {
      title: 'Enterprise',
      price: '$14,999',
      description: 'Best for high-volume businesses or multi-location operations.',
      features: [
        'Everything in Growth, plus:',
        'Conversation flows scoped per project brief',
        'Multi-location support',
        'Advanced call routing logic',
        'Custom voice development',
        'HIPAA-compliant architecture',
        'Dedicated account manager',
        '90 days post-launch support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'How natural does the AI voice agent sound?',
      answer:
        'Modern voice AI uses neural text-to-speech that is virtually indistinguishable from human speech in most contexts. Our agents support multiple voice profiles, regional accents, and speaking styles. Callers frequently don\u2019t realize they\u2019re speaking with an AI until told.',
    },
    {
      question: 'Can the AI handle complex, multi-step phone conversations?',
      answer:
        'Yes. Our voice agents maintain full conversational context, handle interruptions, ask clarifying questions, and navigate multi-step workflows like appointment booking, lead qualification, or order processing \u2014 all within a single call.',
    },
    {
      question: 'What happens if the caller gets frustrated or asks for a human?',
      answer:
        'The AI detects sentiment changes in real time. If a caller expresses frustration, confusion, or explicitly requests a human, the agent transfers immediately with full context \u2014 no customer has to repeat their issue.',
    },
    {
      question: 'How does pricing work for AI voice agents?',
      answer:
        'FactoryJet charges for the build (starting from $3,499) plus ongoing per-minute usage costs that are significantly lower than human agent costs. No per-seat fees. No minimum commitments beyond the initial build.',
    },
    {
      question: 'Can the voice agent integrate with our phone system?',
      answer:
        'Yes. We integrate with all major VoIP providers and phone systems, including RingCentral, Twilio, Vonage, Grasshopper, and traditional PBX systems via SIP trunking. Your existing phone numbers are preserved.',
    },
    {
      question: 'Is there a HIPAA-compliant option for healthcare?',
      answer:
        'Yes. Our Enterprise tier includes HIPAA-compliant architecture with encrypted call data, BAA agreements, compliant transcription storage, and audit logging. Several healthcare clients are already using our voice agents for patient intake and scheduling.',
    },
    {
      question: 'How long does deployment take?',
      answer:
        'Standard deployment is 4\u20136 weeks. Simple single-flow implementations (e.g., appointment booking only) can launch in 3 weeks. Complex multi-flow, multi-location deployments may take 8\u201310 weeks.',
    },
    {
      question: 'What\u2019s the difference between an AI voice agent and an IVR?',
      answer:
        'An IVR forces callers through rigid menu trees (\u2018Press 1 for sales, press 2 for support\u2019). An AI voice agent has a natural conversation \u2014 callers speak normally, and the agent understands intent, asks follow-ups, and takes actions. It\u2019s the difference between a phone tree and a phone call.',
    },
  ],

  ctaTitle: 'Your Competitors Are Missing Calls Right Now. You Don\u2019t Have To.',
  ctaSubtitle:
    'Book a free Voice AI Assessment. We\u2019ll analyze your call patterns, identify automation opportunities, and demonstrate exactly how an AI voice agent would handle your most common calls.',
}

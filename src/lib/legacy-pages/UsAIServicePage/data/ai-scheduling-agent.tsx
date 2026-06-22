import {
  Calendar, RefreshCw, Shuffle, Users, CreditCard, BarChart3,
  Stethoscope, Scissors, Briefcase, Wrench, Dumbbell, Car
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiSchedulingAgentData: AIServicePageData = {
  breadcrumb: 'AI Scheduling Agent',

  heroTitle: (
    <>
      Every Missed Appointment Is Lost Revenue.{' '}
      <span className="text-[#FF6B35]">
        Deploy an AI Scheduling Agent That Books, Reminds, and Fills Your Calendar 24/7.
      </span>
    </>
  ),

  heroDescription:
    'FactoryJet builds custom AI scheduling agents that handle appointment booking, rescheduling, reminders, and waitlist management through natural conversation — on chat, voice, text, or WhatsApp. Reduce no-shows by up to 75%.',

  heroStats: [
    { value: '75%', label: 'Fewer No-Shows' },
    { value: '40%', label: 'More Bookings' },
    { value: '24/7', label: 'Availability' },
    { value: '< 3s', label: 'Booking Speed' },
  ],

  navLinks: ['Capabilities', 'Industries', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: 'No-Shows Cost You $150–$300 Per Empty Slot',
  problemSubtitle:
    'And most businesses lose 15–30% of appointments to no-shows and last-minute cancellations.',
  problemStats: [
    { value: '23%', description: 'average no-show rate for service businesses without automated reminders' },
    { value: '$150+', description: 'average revenue lost per empty appointment slot across service industries' },
    { value: '67%', description: 'of customers prefer self-service booking over calling to schedule' },
  ],

  capabilitiesLabel: 'Capabilities',
  capabilitiesTitle: 'What Your AI Scheduling Agent Can Do',
  capabilitiesSubtitle:
    'Not just a booking page. An intelligent agent that manages your calendar end-to-end.',
  capabilities: [
    { icon: <Calendar size={24} />, title: 'Smart Calendar Management', description: 'Real-time availability across multiple providers, staff, and locations. No double bookings.' },
    { icon: <RefreshCw size={24} />, title: 'Automated Reminders', description: 'SMS, email, and WhatsApp reminders at customizable intervals. Reduce no-shows by up to 75%.' },
    { icon: <Shuffle size={24} />, title: 'Intelligent Rescheduling', description: 'Customers reschedule through natural conversation — no portal logins, no phone tag.' },
    { icon: <Users size={24} />, title: 'Multi-Provider Routing', description: 'Route to the right staff based on service type, expertise, location, or preference.' },
    { icon: <CreditCard size={24} />, title: 'Deposit Collection', description: 'Collect deposits or payments at booking. Integrated with Stripe, Square, PayPal.' },
    { icon: <BarChart3 size={24} />, title: 'Booking Analytics', description: 'Utilization rates, no-show patterns, peak demand, revenue per slot.' },
  ],

  industries: {
    label: 'Industries',
    title: 'Purpose-Built for Service Businesses',
    items: [
      { icon: <Stethoscope size={24} />, title: 'Healthcare & Dental', description: 'Patient intake, appointment booking, insurance verification, follow-up scheduling' },
      { icon: <Scissors size={24} />, title: 'Salons & Spas', description: 'Service selection, stylist matching, multi-service bookings, recurring appointments' },
      { icon: <Briefcase size={24} />, title: 'Professional Services', description: 'Consultation scheduling, multi-attendee coordination, timezone handling' },
      { icon: <Wrench size={24} />, title: 'Home Services', description: 'Service window selection, technician routing, emergency scheduling' },
      { icon: <Dumbbell size={24} />, title: 'Fitness & Wellness', description: 'Class reservations, trainer booking, package management, waitlists' },
      { icon: <Car size={24} />, title: 'Automotive', description: 'Service appointments, loaner coordination, multi-service scheduling' },
    ],
  },

  pricingTitle: 'Transparent, Value-Based Pricing',
  pricingSubtitle:
    'No hidden fees. No per-interaction charges. Complete build with transparent costs.',
  tiers: [
    {
      title: 'Starter',
      price: '$2,499',
      description: 'Best for single-provider businesses.',
      features: [
        'Single-provider scheduling',
        'One channel (chat or SMS)',
        'Calendar integration',
        'Automated reminders',
        'Basic analytics',
        '30 days support',
      ],
    },
    {
      title: 'Growth',
      price: '$5,499',
      description: 'Best for multi-provider businesses with 100+ bookings/month.',
      features: [
        'Multi-provider routing',
        'Multi-channel (chat + SMS + voice)',
        'Rescheduling and cancellation',
        'Deposit collection via Stripe',
        'Waitlist management',
        'Advanced analytics',
        '60 days support',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$11,999',
      description: 'For multi-location operations.',
      features: [
        'Multi-location support',
        'Unlimited providers',
        'Custom booking workflows',
        'EHR / PMS integration',
        'HIPAA-compliant architecture',
        'Recurring appointments',
        'Dedicated account manager',
        '90 days support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    { question: 'How is this different from Calendly?', answer: 'Calendly gives you a booking page. An AI scheduling agent has a conversation — it understands natural language, handles rescheduling, collects intake info, and integrates beyond just a calendar.' },
    { question: 'Can it handle multiple providers and services?', answer: 'Yes. Multi-provider availability, service-specific slots, location routing, buffer times, and resource dependencies — all in real time.' },
    { question: 'How much does it cost?', answer: 'Starting from $2,499. Growth at $5,499. Enterprise at $11,999.' },
    { question: 'Will it reduce our no-show rate?', answer: 'Clients typically see 50–75% reduction through automated reminders, easy rescheduling, and deposit collection.' },
    { question: 'What calendars does it integrate with?', answer: 'Google Calendar, Outlook/365, Apple Calendar, Mindbody, Jane App, Acuity, Square Appointments, ServiceTitan, and more.' },
    { question: 'Can customers book through voice?', answer: 'Yes. Paired with our Voice Agent, callers book through natural conversation.' },
    { question: 'How quickly can it be deployed?', answer: 'Standard 3–4 weeks. Simple setups in 2 weeks.' },
    { question: 'Does it handle recurring appointments?', answer: 'Yes — weekly, biweekly, monthly, or custom intervals with exception handling.' },
  ],

  ctaTitle: 'Empty Slots Cost Money. No-Shows Cost More. Fix Both.',
  ctaSubtitle:
    'Book a free Scheduling Assessment. We\'ll analyze your booking patterns and no-show rates.',
}

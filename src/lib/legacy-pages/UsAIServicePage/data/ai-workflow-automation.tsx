import {
  UserPlus, FileText, DollarSign, ShieldCheck, Settings, Package
} from 'lucide-react'
import type { AIServicePageData } from '../App'

export const aiWorkflowAutomationData: AIServicePageData = {
  breadcrumb: 'AI Workflow Automation',

  heroTitle: (
    <>
      Your Team Shouldn&apos;t Be Doing Work a Machine Can Do Better.{' '}
      <span className="text-[#FF6B35]">
        Deploy AI Agents That Automate Your Most Tedious Business Processes.
      </span>
    </>
  ),

  heroDescription:
    'FactoryJet builds custom AI workflow automation agents that handle employee onboarding, document processing, invoice reconciliation, compliance auditing, and more — across departments and systems. 40–60% efficiency gains. 35% cost reduction.',

  heroStats: [
    { value: '60%', label: 'Efficiency Gains' },
    { value: '35%', label: 'Cost Reduction' },
    { value: '200+', label: 'Integrations' },
    { value: '90%', label: 'Faster Processing' },
  ],

  navLinks: ['Workflows', 'Integrations', 'Pricing', 'FAQ'],

  problemLabel: 'The Problem',
  problemTitle: 'Your Best People Are Stuck Doing Your Worst Work',
  problemSubtitle:
    '71% of organizations report employees spend 4+ hours daily on repetitive manual tasks.',
  problemStats: [
    { value: '71%', description: 'of organizations say employees waste 4+ hours daily on repetitive manual tasks' },
    { value: '$1.8T', description: 'annual cost of manual processes to US businesses' },
    { value: '60%', description: 'of occupations have 30%+ of activities automatable with current AI' },
  ],

  capabilitiesLabel: 'Workflows We Automate',
  capabilitiesTitle: 'From Tedious to Autonomous',
  capabilitiesSubtitle:
    'Not simple triggers and zaps. Intelligent agents that handle complex, multi-step processes end-to-end.',
  capabilities: [
    { icon: <UserPlus size={24} />, title: 'Employee Onboarding', description: 'Document collection, system access, training assignment, equipment requests, welcome sequences — all orchestrated.' },
    { icon: <FileText size={24} />, title: 'Document Processing', description: 'AI extracts data from invoices, contracts, and forms. Validates, populates systems, flags discrepancies.' },
    { icon: <DollarSign size={24} />, title: 'Invoice & AP Automation', description: 'Three-way matching, approval routing, payment scheduling, vendor communication, exception handling.' },
    { icon: <ShieldCheck size={24} />, title: 'Compliance Auditing', description: 'Continuous monitoring against regulations. Flags non-compliance, generates audit trails, triggers remediation.' },
    { icon: <Settings size={24} />, title: 'IT Service Management', description: 'Ticket routing, password resets, software provisioning, access requests — resolved automatically.' },
    { icon: <Package size={24} />, title: 'Supply Chain Coordination', description: 'Inventory monitoring, reorder triggers, supplier communication, delivery tracking, demand forecasting.' },
  ],

  integrations: {
    label: 'Integrations',
    title: '200+ Systems. One Intelligent Agent.',
    categories: [
      { name: 'CRM', items: ['Salesforce', 'HubSpot', 'Zoho', 'Pipedrive'] },
      { name: 'ERP', items: ['SAP', 'Oracle', 'ERPNext', 'NetSuite'] },
      { name: 'Communication', items: ['Slack', 'Teams', 'Email', 'WhatsApp'] },
      { name: 'HR/HRIS', items: ['Workday', 'BambooHR', 'Gusto', 'Rippling'] },
      { name: 'Finance', items: ['QuickBooks', 'Xero', 'Stripe', 'Square'] },
      { name: 'IT/DevOps', items: ['Jira', 'ServiceNow', 'PagerDuty', 'GitHub'] },
      { name: 'Documents', items: ['Google Workspace', 'Microsoft 365', 'Notion'] },
      { name: 'Storage', items: ['AWS S3', 'Google Cloud', 'Dropbox', 'Box'] },
    ],
  },

  pricingTitle: 'Transparent, Value-Based Pricing',
  pricingSubtitle:
    'No hidden fees. No per-interaction charges. Complete build with transparent costs.',
  tiers: [
    {
      title: 'Starter',
      price: '$2,499',
      description: 'Best for automating a single process.',
      features: [
        'Single-process AI automation',
        '2 system integrations',
        'Error handling and alerts',
        'Basic analytics',
        'Documentation',
        '30 days support',
      ],
    },
    {
      title: 'Growth',
      price: '$5,999',
      description: 'Best for multi-process across 2–3 departments.',
      features: [
        'Up to 5 workflow automations',
        'Multi-system integration',
        'Exception handling and routing',
        'Audit trail and compliance logs',
        'Performance dashboard',
        '60 days support',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$14,999',
      description: 'Organization-wide process automation.',
      features: [
        'Unlimited workflows',
        '200+ system integrations',
        'Custom business rule engine',
        'Cross-department orchestration',
        'Advanced analytics',
        'Dedicated account manager',
        '90 days support',
      ],
    },
  ],

  faqTitle: 'Frequently Asked Questions',
  faqs: [
    { question: 'What workflows can an AI agent automate?', answer: 'Any multi-step process involving information gathering, decisions, system updates, and communication — onboarding, invoicing, compliance, IT tickets, supply chain, and more.' },
    { question: 'How is this different from Zapier or Make?', answer: 'Zapier connects apps with if/then rules. An AI agent reads unstructured documents, makes judgment calls, handles exceptions, and orchestrates multi-step workflows.' },
    { question: 'Can it handle our specific processes?', answer: 'Yes. We build custom agents for your exact workflows — rules, exceptions, and edge cases. No two implementations are the same.' },
    { question: 'What systems does it integrate with?', answer: '200+ including Salesforce, SAP, Oracle, ERPNext, HubSpot, Slack, Teams, Google Workspace, Jira, ServiceNow, QuickBooks, and more.' },
    { question: 'How much does it cost?', answer: 'Starting from $2,499 for single-process. Growth at $5,999. Enterprise at $14,999.' },
    { question: 'What ROI can we expect?', answer: '40–60% efficiency gains, 35% cost reduction. Most achieve ROI in 4–6 months.' },
    { question: 'How long does implementation take?', answer: 'Single-process: 3–4 weeks. Multi-process: 5–8 weeks. Enterprise-wide: phased over 3–6 months.' },
    { question: 'What about error handling?', answer: 'Robust exception handling — flags anomalies, routes edge cases to humans with context, maintains audit trails, and learns from corrections.' },
  ],

  ctaTitle: 'Every Manual Process Is a Bottleneck. Every Bottleneck Costs Money.',
  ctaSubtitle:
    'Book a free Workflow Assessment. We\'ll map your processes and identify the highest-impact automation opportunities.',
}

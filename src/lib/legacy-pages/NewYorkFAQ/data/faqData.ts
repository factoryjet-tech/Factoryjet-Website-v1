export interface FAQItem {
  id: string;
  question: string;
  answer: string | string[]; // Array for multi-paragraph answers
  category: 'General' | 'NYC-Specific' | 'Technical';
}

export const faqData: FAQItem[] = [
  {
    id: 'q1',
    category: 'General',
    question: "Why should I choose FactoryJet over a local NYC web design agency?",
    answer: [
      "Great question. Local NYC agencies typically charge $15,000-$75,000 for projects we complete for $3,500-$25,000. Why? High Manhattan overhead (rent, salaries, office costs) gets passed to you. We operate from Ontario, Canada with a distributed team, eliminating those overhead costs while maintaining enterprise-quality work.",
      "Additionally, most traditional agencies take 6-12 weeks minimum. Our AI-enhanced workflows deliver in 7-28 days without sacrificing quality. You get the same (often better) results, faster, for 60-70% less investment.",
      "That said, if you need in-person meetings and have budget for NYC agency rates, local agencies are perfectly fine. If you value results over geography and want maximum ROI, FactoryJet is the clear choice."
    ]
  },
  {
    id: 'q2',
    category: 'General',
    question: "Can you really deliver a professional website in 7 days?",
    answer: [
      "Yes, but with important context. A 7-day delivery applies to straightforward projects like landing pages or basic websites (5-10 pages) with clear content and minimal custom functionality.",
      "More complex projects take longer: Professional business sites (10-25 pages): 14-21 days; E-commerce stores: 21-45 days; Custom web applications: 8-24 weeks.",
      "We're honest about timelines. During your discovery call, we'll provide an accurate timeline based on your specific needs. What we promise is that we deliver significantly faster than traditional agencies—typically 50-70% faster for comparable projects."
    ]
  },
  {
    id: 'q3',
    category: 'General',
    question: "I'm based in New York but you're in Canada. How does that work?",
    answer: [
      "Perfectly! Here's how:",
      "Communication: We work during EST business hours (9 AM - 6 PM) so we're available when you are. All calls, emails, and meetings happen in your timezone.",
      "Collaboration: Everything happens online through modern collaboration tools. You'll see progress in real-time, provide feedback through our platform, and we'll have regular video calls for check-ins.",
      "Legal & Contracts: We're a North American company operating legally across the US and Canada. Standard US contracts, USD pricing, US payment methods accepted.",
      "Results: You get the same professional website as if we were in Manhattan—just at 60-70% lower cost because we don't have Manhattan overhead.",
      "North American advantage: Being in Ontario means we have access to incredible technical talent, operate in your timezone, and share similar business culture and standards.",
      "Hundreds of NYC businesses work with us successfully. Location matters far less than results, communication, and value—which we deliver consistently."
    ]
  },
  {
    id: 'q4',
    category: 'General',
    question: "What if I don't like the design? How many revisions do I get?",
    answer: [
      "Our design process includes:",
      "Initial Design Phase: We create wireframes and mockups based on your input. You get 2 rounds of revisions included in all packages to refine the design until you're satisfied.",
      "What's a revision? Changing colors, layout adjustments, font choices, moving sections, adding/removing elements. Basically, reasonable design modifications to align with your vision.",
      "What's NOT a revision? Completely starting over because you changed the entire project scope, or requesting functionality not in the original proposal.",
      "Our design approval rate: 94% of clients approve the design after round 1 or 2. We spend time upfront understanding your vision, analyzing your competitors, and researching your industry—so we typically nail it early.",
      "What if you truly hate it? It's never happened in 500+ projects, but theoretically: we'd schedule a call to understand what's wrong, potentially bring in our senior design director, and ensure you're satisfied. Your success is our success—we're invested in getting it right."
    ]
  },
  {
    id: 'q5',
    category: 'General',
    question: "Do you write the content for my website or do I need to provide it?",
    answer: [
      "We offer both options:",
      "Option 1: You provide content (included in base pricing). You send us existing materials—brochures, old website copy, service descriptions, team bios, etc. We'll adapt and optimize it for web readability and SEO.",
      "Option 2: We write everything (add-on service: $1,500-5,000 depending on page count). Our professional copywriters research your business, industry, and competitors. They create compelling, SEO-optimized content designed to convert visitors into customers. This includes headlines, body copy, CTAs, service descriptions, about page, everything.",
      "Hybrid approach: Many clients provide bullet points and core information, and we transform it into professional web copy. This middle ground is often most efficient and cost-effective."
    ]
  },
  {
    id: 'q6',
    category: 'General',
    question: "What happens after the website launches? Do you provide ongoing support?",
    answer: [
      "Yes! We offer:",
      "Included with every project: 30 days of post-launch support (bug fixes, minor adjustments), Training session for your team, Documentation on managing your site.",
      "Optional Annual Maintenance Contracts (AMC):",
      "Basic AMC ($299/month): Security updates, backups, basic support, 2 hours/month of changes.",
      "Professional AMC ($599/month): Everything above + priority support, SEO monitoring, 5 hours/month changes.",
      "Enterprise AMC ($1,200/month): 24/7 emergency support, 10 hours/month changes, optimization, strategy.",
      "Why AMC? Websites need regular security updates, performance optimization, and occasional content updates. Think of it like maintaining a car—regular service prevents major problems."
    ]
  },
  {
    id: 'q7',
    category: 'General',
    question: "Will my website work on mobile phones and tablets?",
    answer: [
      "Absolutely. Every website we build is mobile-first responsive, meaning:",
      "Mobile-first approach: We design for smartphones FIRST, then adapt for tablets and desktops. Since 80% of NYC traffic is mobile, this ensures the best experience where it matters most.",
      "Testing: We test on 100+ device/browser combinations using automated tools. iPhone, Android, various screen sizes, different browsers—we ensure it works perfectly everywhere.",
      "Google requirement: Google uses mobile-first indexing. If your site doesn't work well on mobile, Google won't rank you. We ensure your mobile site is optimized for both users AND search engines.",
      "Performance: Mobile users expect fast loading even on cellular connections. We optimize images, code, and assets specifically for mobile performance."
    ]
  },
  {
    id: 'q8',
    category: 'General',
    question: "Will my website show up on Google? What about SEO?",
    answer: [
      "Every website includes foundational SEO:",
      "Technical SEO (included): Clean code structure, Fast page load speeds, Mobile optimization, SSL certificate (HTTPS), XML sitemap, Meta titles and descriptions, Header tag hierarchy, Image optimization.",
      "Local SEO basics (included): Google Business Profile setup guidance, Local schema markup, NAP consistency (Name, Address, Phone), New York City location optimization.",
      "What's NOT included in base packages: Ongoing SEO services, Link building campaigns, Content marketing, Monthly SEO reporting, Keyword research beyond basics.",
      "Timeline expectations: New websites take 3-6 months to rank well in Google. SEO is a long-term strategy, not instant results.",
      "Add-on SEO services ($800-2,500/month): If you want aggressive SEO, we offer it as an ongoing service. Most clients start with the foundational SEO included in website development, then add advanced SEO later once the site is established."
    ]
  },
  {
    id: 'q9',
    category: 'General',
    question: "Can you help with Google Ads, Facebook ads, or digital marketing?",
    answer: [
      "Yes! Services include:",
      "Google Ads Management ($1,200-3,500/month + ad spend): Campaign setup and optimization, Keyword research and bidding, Ad copywriting, Landing page optimization, Conversion tracking, Monthly reporting.",
      "Social Media Advertising ($1,000-3,000/month + ad spend): Facebook and Instagram ads, LinkedIn advertising (B2B), Campaign management, Creative design, Audience targeting, Performance optimization.",
      "Full Digital Marketing (Custom pricing): SEO, Content marketing, Email marketing, Social media management, Paid advertising across platforms, Strategy and consulting.",
      "These are separate from website development but can be bundled for better pricing."
    ]
  },
  {
    id: 'q10',
    category: 'General',
    question: "Do I own the website or do you own it?",
    answer: [
      "You own everything. Complete ownership transfer happens at final payment. This includes:",
      "Design ownership: All design files, mockups, assets.",
      "Code ownership: All source code, themes, plugins.",
      "Content ownership: All copy, images, videos.",
      "Domain ownership: You register and own your domain.",
      "Hosting ownership: You control your hosting account.",
      "What we retain: We may showcase your project in our portfolio (with permission) and reference the work in case studies (anonymized if you prefer).",
      "Why this matters: Some agencies retain ownership or license the website to you, creating ongoing dependency. We believe you should own what you pay for. After final payment, it's 100% yours to do with as you please."
    ]
  },
  {
    id: 'q11',
    category: 'General',
    question: "What if my website gets hacked or goes down?",
    answer: [
      "Security and uptime are priorities:",
      "Prevention (included in all projects): SSL certificate (HTTPS encryption), Secure hosting setup, Regular security updates, Malware scanning, Firewall configuration, Strong password policies.",
      "Monitoring (with AMC): 24/7 uptime monitoring, Instant alerts if site goes down, Security vulnerability scanning, Automatic backups (daily or weekly).",
      "Response (with AMC): Emergency support, Hack cleanup and restoration, Backup recovery, Security hardening after incidents.",
      "Without AMC: You're responsible for maintaining security and updates. Many hosting providers include basic security, but it's ultimately your responsibility.",
      "Our track record: Zero security breaches across 500+ client sites. We take security seriously."
    ]
  },
  {
    id: 'q12',
    category: 'General',
    question: "Can you integrate my website with other tools I use (CRM, email marketing, etc.)?",
    answer: [
      "Yes! Common integrations we handle:",
      "CRM Systems: HubSpot, Salesforce, Zoho, Pipedrive, Custom CRMs.",
      "Email Marketing: Mailchimp, Constant Contact, ConvertKit, ActiveCampaign, Klaviyo.",
      "E-Commerce: Shopify, WooCommerce, Stripe, PayPal, Square.",
      "Scheduling: Calendly, Acuity, ScheduleOnce.",
      "Analytics: Google Analytics, Google Tag Manager, Facebook Pixel, Hotjar.",
      "Other: Zapier (connects 3,000+ apps), Slack, Intercom, Live chat platforms.",
      "Most integrations are straightforward. Complex custom integrations may require additional development hours but we handle it."
    ]
  },
  {
    id: 'q13',
    category: 'General',
    question: "What's your refund policy?",
    answer: [
      "Our payment structure protects both parties:",
      "50% deposit starts the project; 50% final payment on completion.",
      "Before design approval: If you're not satisfied with initial direction and we can't resolve it, we'll refund your deposit minus hours worked (documentation, research, initial concepts).",
      "After design approval: Deposits are non-refundable once you approve designs and we begin development. At this point, significant work has been completed.",
      "After launch: Final payment is due when you approve the completed website. If there are issues, we fix them—no additional payment required. Once you approve and we deliver, payment is final.",
      "Why this structure: It's fair to both sides. You don't pay full price until you're satisfied. We don't invest weeks of work without compensation.",
      "Our refund rate: Under 0.5%. We deliver what we promise. Satisfaction is nearly universal."
    ]
  },
  {
    id: 'q14',
    category: 'General',
    question: "How do payments work? What methods do you accept?",
    answer: [
      "Payment schedule: 50% deposit to begin project; 50% due on completion and approval.",
      "Payment methods accepted: Wire transfer (preferred for large projects), Credit card (Visa, Mastercard, Amex), PayPal, Stripe, Check (US businesses).",
      "Invoicing: Professional invoices with clear line items. NET 7 terms (payment due within 7 days of invoice).",
      "Currency: USD for US clients, CAD for Canadian clients.",
      "Payment plans: Not typically offered for projects under $25,000. For larger projects ($25,000+), we can discuss milestone-based payments (e.g., 40% start, 30% midpoint, 30% completion)."
    ]
  },
  {
    id: 'q15',
    category: 'General',
    question: "What if I need changes after the website launches?",
    answer: [
      "Several options:",
      "Minor changes (included for 30 days): Fixing bugs or errors, Small content updates, Image swaps, Contact information changes.",
      "Larger changes: Hourly rate: $125/hour for development work; Monthly retainer: 5 hours/$600, 10 hours/$1,100, 20 hours/$2,000; AMC packages: Include 2-10 hours monthly depending on tier.",
      "Self-service: All websites include easy-to-use admin panels. We provide training so you can make basic updates yourself. Most clients handle 80% of changes in-house after training."
    ]
  },
  {
    id: 'q16',
    category: 'NYC-Specific',
    question: "Do you know about New York City business regulations and requirements?",
    answer: [
      "Yes. We've worked with 150+ NYC businesses and understand:",
      "Legal requirements: NYC Consumer Protection Law disclosures, ADA/accessibility compliance, Privacy policy requirements, Cookie consent (if selling to EU), Terms of service best practices.",
      "Industry-specific regulations: Financial services compliance (FINRA, SEC), Healthcare (HIPAA for patient data), Legal services (attorney advertising rules), Real estate (fair housing requirements).",
      "We're not lawyers, so we don't provide legal advice. But we know what's typically required and can implement necessary disclosures, privacy policies, and compliance elements. We recommend having your attorney review legal pages."
    ]
  },
  {
    id: 'q17',
    category: 'NYC-Specific',
    question: "Can you help with Google Business Profile and local NYC SEO?",
    answer: [
      "Absolutely. Local SEO is crucial for NYC businesses competing in crowded markets.",
      "Included in our projects: Google Business Profile optimization guidance, Local schema markup implementation, NAP (Name, Address, Phone) consistency, Location-specific page optimization, New York City keyword targeting.",
      "Advanced local SEO (add-on service: $800-1,500/month): Google Business Profile management, Review generation and management, Local directory citations (Yelp, Yellow Pages, etc.), Neighborhood-specific content creation, Local link building, Competitor analysis and tracking, Monthly reporting.",
      "For businesses serving NYC neighborhoods, boroughs, or metro area, local SEO is often the highest ROI marketing investment."
    ]
  },
  {
    id: 'q18',
    category: 'NYC-Specific',
    question: "References from other NYC clients?",
    answer: [
      "Yes! Upon request, we can connect you with:",
      "Client references: Past NYC clients willing to speak about their experience (we ask permission first).",
      "Portfolio access: View 20+ NYC client websites (some industries confidential, but we have examples in most sectors).",
      "Case studies: Read detailed case studies with metrics and results.",
      "Reviews: Check our Google Business Profile reviews from NYC area clients.",
      "We're proud of our work and happy to let our clients speak for us."
    ]
  },
  {
    id: 'q19',
    category: 'Technical',
    question: "What happens if you go out of business? Will my website still work?",
    answer: [
      "Yes, because you own everything:",
      "Complete ownership: At project completion, you have all source code, design files, and assets. You could hire any developer to maintain or modify your website.",
      "Standard technologies: We use WordPress, Webflow, Shopify, React—standard platforms. Thousands of developers worldwide can work with these. You're never locked into proprietary technology.",
      "Hosting independence: Your website is hosted on your hosting account (or reputable third party). Not dependent on us being in business.",
      "Transition support: If you ever want to move to another agency, we provide all necessary files, documentation, and transition support.",
      "Our stability: We've been in business since 2018 and are financially stable with recurring revenue. Not going anywhere."
    ]
  },
  {
    id: 'q20',
    category: 'Technical',
    question: "Why should I trust a website company I found online?",
    answer: [
      "Healthy skepticism is smart! Here's why you can trust us:",
      "Verifiable track record: 500+ completed websites, 5+ years in business, Registered business in Ontario, Canada, Real address, phone number, team members.",
      "Transparent process: Detailed proposals before starting, Clear contracts, Regular communication, Showcase portfolio, Client references available.",
      "Proven results: Case studies with metrics, Client testimonials (verified), Google reviews, Industry recognition.",
      "Fair payment terms: 50/50 payment (not full upfront), Money-back policy (before design approval), You own everything at completion.",
      "Professional operation: Legal contracts, Project management tools, Professional communication, Established workflows.",
      "Start with a free consultation call. You'll meet our team, see our work, and judge for yourself. No pressure, no obligations."
    ]
  }
];
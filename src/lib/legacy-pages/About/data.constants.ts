import { Milestone, ValueItem, ReasonItem, TeamMember, Testimonial, FAQItem } from './data.types';

export const HERO_CONTENT = {
  headline: "About FactoryJet - Your Trusted Digital Transformation Partner for 25+ Years",
  subHeadline: "FactoryJet is India's leading digital transformation company, empowering 500+ small and medium businesses across India and emerging markets with world-class web design, e-commerce, AI-powered digital marketing, CRM, and ERP solutions. Founded on the principle that every business deserves enterprise-grade technology at SMB-friendly prices, we've delivered ₹100+ crore in measurable business value with 98% client satisfaction.",
};

export const MILESTONES: Milestone[] = [
  {
    phase: "Phase 1: Early Days",
    period: "2000-2010",
    focus: "Custom software development and ERP implementations",
    description: [
      "We started implementing traditional ERP systems (SAP, Oracle, custom solutions) for mid-market companies. These early years taught us:",
      "• The complexity of enterprise implementations",
      "• The importance of change management",
      "• How to deliver on time and on budget",
      "• The value of long-term client relationships"
    ],
    milestone: "Implemented ERP for 50+ mid-market companies, establishing deep expertise in manufacturing, distribution, and retail sectors."
  },
  {
    phase: "Phase 2: Web & Digital Expansion",
    period: "2010-2015",
    focus: "Website design, e-commerce platforms, digital marketing",
    description: [
      "As the digital revolution accelerated, we expanded into:",
      "• WordPress and custom website development",
      "• Early e-commerce platforms (Magento, WooCommerce)",
      "• SEO and digital marketing services",
      "• Social media management"
    ],
    milestone: "Built 200+ websites and e-commerce stores, helping clients generate ₹50+ crore in online revenue."
  },
  {
    phase: "Phase 3: Cloud & Platform Era",
    period: "2015-2020",
    focus: "Cloud-based solutions, modern platforms, SaaS integrations",
    description: [
      "We embraced the cloud revolution:",
      "• Shifted from on-premise to cloud-first implementations",
      "• Discovered ERPNext (open-source, cloud-native ERP)",
      "• Implemented HubSpot, ZOHO, and modern CRM platforms",
      "• Built expertise in Shopify and modern e-commerce platforms"
    ],
    milestone: "Helped 300+ businesses transition to cloud-based operations, saving them millions in infrastructure costs."
  },
  {
    phase: "Phase 4: AI & Automation Revolution",
    period: "2020-Present",
    focus: "AI-powered solutions, intelligent automation, generative AI",
    description: [
      "We're now at the forefront of the AI revolution:",
      "• AI-powered digital marketing (SEO, GEO, AEO, AIO)",
      "• Generative AI for content creation (videos, images, copy)",
      "• AI agents for customer service, sales, and operations",
      "• Custom AI implementations for enterprise clients"
    ],
    milestone: "Deployed AI solutions for 100+ businesses, delivering 40-60% operational efficiency improvements."
  }
];

export const VALUES: ValueItem[] = [
  {
    title: "Excellence Without Compromise",
    items: ["We don't cut corners, regardless of project size", "Every client receives our best effort", "Quality is non-negotiable"]
  },
  {
    title: "Partnership, Not Transactions",
    items: ["We're not vendors—we're long-term partners", "Your growth is our growth", "Success measured by outcomes, not hours"]
  },
  {
    title: "Innovation That Delivers",
    items: ["Leveraging cutting-edge technology (AI, automation)", "Only when it delivers measurable value", "Innovation serves business goals"]
  },
  {
    title: "Transparency Always",
    items: ["No hidden fees, no surprises", "Clear pricing, timelines, communication", "Honesty about what's possible"]
  },
  {
    title: "Affordability With Quality",
    items: ["Great technology accessible to all", "SMB-friendly pricing without sacrifice", "Better value than anyone in the market"]
  },
  {
    title: "SMB DNA",
    items: ["We understand your constraints", "We understand your opportunities", "We speak your language"]
  }
];

export const REASONS: ReasonItem[] = [
  {
    title: "SMB-Focused Expertise",
    subtitle: "We specialize in small and medium businesses—it's all we do.",
    description: ["We understand your budget constraints", "We know you need quick ROI", "Solutions that scale with you"],
    comparison: {
      label: "The Difference:",
      items: ["Large agency: heavy ERP licensing, 24-month timeline", "FactoryJet: lean ERPNext build, 6-month timeline"]
    }
  },
  {
    title: "Comprehensive One-Stop Solution",
    subtitle: "You don't need multiple vendors—we handle everything.",
    description: ["Website, E-commerce, Marketing, CRM, ERP, AI"],
    comparison: {
      label: "The Benefit:",
      items: ["Single point of contact", "Integrated solutions", "Better pricing"]
    }
  },
  {
    title: "AI-Enhanced Service Delivery",
    subtitle: "We use AI to deliver better results at lower costs.",
    description: ["Content generation: 10x output", "Marketing optimization", "Process automation"],
    comparison: {
      label: "The Result:",
      items: ["Enterprise capabilities at SMB prices."]
    }
  },
  {
    title: "Transparent, Fair Pricing",
    subtitle: "No surprises, no hidden fees.",
    description: ["Clear upfront pricing", "Fixed-price projects", "Money-back guarantee"],
    comparison: {
      label: "Our Promise:",
      items: ["If you're not happy, we make it right."]
    }
  }
];

export const TEAM: TeamMember[] = [
  { name: "Bhavesh Barot", role: "Founder & CEO", experience: "18+ years", specialization: "Business strategy, ERP implementation", image: "/bhavesh_image.jpg", LinkedInUrl: "https://www.linkedin.com/in/barotbhavesh/?originalSubdomain=in" },
  { name: "Manoj V", role: "Co-Founder & CTO", experience: "5+ years", specialization: "Technical architecture, AI implementation", image: "/manoj.jpg", LinkedInUrl: "https://www.linkedin.com/in/manoj-v-38a047220/" },
  { name: "Rishikesh Yadav", role: "Founding Member & Dev", experience: "2+ years", specialization: "Full Stack Development, AI implementation", image: "/rishikesh.jpg", LinkedInUrl: "https://www.linkedin.com/in/rishikesh-yadav-a059482b0/" },
  { name: "Nikhil Guleria", role: "Head of Digital Marketing", experience: "5+ years", specialization: "SEO, GEO, AEO, AIO, Paid Ads", image: "/nikhil_photo.jpeg", LinkedInUrl: "https://www.linkedin.com/in/nikhil-guleria-642825209/" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "FactoryJet completely transformed our digital presence. Their team understood our business challenges and delivered solutions that actually moved the needle. Within 6 months, our online inquiries increased by 200%.",
    author: "Bhoop Singh",
    role: "Operations Director",
    company: "GroFresh Agro Food Pvt. Ltd."
  },
  {
    text: "The ERPNext implementation was seamless. We were skeptical about moving from our legacy system, but FactoryJet's team made it easy. Now we have real-time visibility into our operations.",
    author: "Tejas Bramhbhatt",
    role: "Founder",
    company: "Fliying Pixel"
  },
  {
    text: "We started with a simple website project and now we're using FactoryJet for our CRM, digital marketing, and e-commerce store. They've become an extension of our team.",
    author: "Rajkumar",
    role: "Founder",
    company: " Rukman Transport Pvt. Ltd."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "So, what exactly does 'Digital Transformation' mean for my small business?",
    answer: "It sounds fancy, but it's simple: we use technology to fix what's slowing you down. Whether it's replacing paper logs with an app, automating your sales emails, or getting your shop online so you can sell 24/7. It's about making your business faster, smarter, and more profitable."
  },
  {
    question: "I've been burned by agencies before. How do I know you're different?",
    answer: "We hear this a lot, and it hurts us too. Here's our promise: We don't hide behind jargon, we don't hold your code hostage, and we don't disappear after launch. We have a 98% client satisfaction rate because we treat your business like our own. Plus, if you're not happy, we fix it—guaranteed."
  },
  {
    question: "How long has FactoryJet actually been around?",
    answer: "Our leadership team has been in the trenches for 12+ years. FactoryJet itself has been serving SMBs specifically for over a decade. We aren't a fly-by-night startup; we're a stable partner built for the long haul."
  },
  {
    question: "Do you outsource your work or is it all done in-house?",
    answer: "We have a dedicated team of 60+ full-time experts in India. For very niche requirements, we might bring in a trusted specialist, but 99% of the work is done by the team you meet. You're hiring us, not a random freelancer."
  },
  {
    question: "Where are you located? Can we meet in person?",
    answer: "We are headquartered in Bangalore, the Silicon Valley of India. We work remotely with clients across the globe, which keeps our costs (and yours) down. We're happy to jump on a video call anytime, and for major enterprise projects, we can arrange site visits."
  },
  {
    question: "I'm on a tight budget. Can I really afford 'Enterprise-grade' tech?",
    answer: "Absolutely. That's literally why we exist. We use smart tools (like Open Source ERPs and AI) to cut down development time and costs. You get the same power as the big guys, but at a price tag that fits an SMB budget."
  },
  {
    question: "What is your pricing model? Are there hidden fees?",
    answer: "We hate surprises. We mostly work on fixed-price projects—you know exactly what you're paying before we start. For ongoing stuff like marketing, it's a predictable monthly retainer. No hidden 'server setup fees' or 'admin charges' popped on you at the end."
  },
  {
    question: "Do you offer payment plans for larger projects?",
    answer: "Yes, we understand cash flow is king for SMBs. For larger implementations, we can often structure payments across milestones—so you pay as we deliver value, not all upfront."
  },
  {
    question: "Am I locked into a long-term contract?",
    answer: "No handcuffs here. Project work has a clear start and end. For monthly services like SEO or support, we operate on a 30-day notice period. We want you to stay because we're getting results, not because a contract forces you to."
  },
  {
    question: "How long will it take before I see actual results?",
    answer: "It depends on the project, but we move fast. A website can be live in as little as 7 days. Digital marketing usually shows traction in 3 months. An ERP implementation might take 3-6 months. We'll give you a realistic timeline day one, not a 'guesstimate'."
  },
  {
    question: "How involved do I need to be? I'm already swamped.",
    answer: "We respect your time. We'll need you for the initial strategy and key approvals, but we handle the heavy lifting. We generally need about 1-2 hours of your time per week to keep things moving smoothly."
  },
  {
    question: "Will I have a dedicated project manager?",
    answer: "Yes! You won't be chasing down developers or designers. You'll have one dedicated point of contact who knows your project inside out and keeps everything on track."
  },
  {
    question: "How do we communicate? Email, WhatsApp, Slack?",
    answer: "Whatever works best for you. We usually set up a shared Slack or WhatsApp group for quick updates, and use email/Zoom for official milestones. You'll never feel out of the loop."
  },
  {
    question: "Do I need a tech team in-house to manage what you build?",
    answer: "Nope. We build systems that are easy for non-techies to manage. Plus, we provide training and 60-90 days of support after launch. If you need long-term help, we offer affordable monthly maintenance plans."
  },
  {
    question: "What happens if my website goes down at 2 AM on a Sunday?",
    answer: "We've got your back. We monitor critical systems 24/7. If something breaks, our emergency support team jumps in. You sleep, we fix it."
  },
  {
    question: "Can you help me rank higher on Google? My competitors are everywhere.",
    answer: "Yes, that's our bread and butter. We don't just 'do SEO'; we look at how to get you actual leads. We'll audit your competitors, find the gaps, and build a strategy to get you visible to the right customers."
  },
  {
    question: "Can you integrate your software with the old accounting system I've used for 10 years?",
    answer: "Usually, yes! We specialize in integrations. Whether it's Tally, an old SQL database, or a legacy CRM, we can often build bridges to connect it with modern tools so you don't have to throw everything away."
  },
  {
    question: "What's the first step to getting a quote?",
    answer: "Just reach out! Book a free 30-minute consultation. No sales pressure. We'll chat about what you need, and if we're a good fit, we'll send you a proposal within 48 hours."
  }
];
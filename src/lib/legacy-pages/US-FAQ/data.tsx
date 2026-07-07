import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  BarChart, 
  Users, 
  Settings, 
  Cpu, 
  CreditCard, 
  LifeBuoy, 
  Clock, 
  Handshake, 
  Info
} from 'lucide-react';
import { FAQCategory } from './types';

export const faqData: FAQCategory[] = [
  {
    id: "general",
    title: "General Questions",
    icon: Info,
    description: "Who we are and our AI-Native approach.",
    items: [
      {
        id: "who-is-factoryjet",
        question: "Who is FactoryJet?",
        answer: (
          <div className="space-y-4">
            <p>
              FactoryJet is an <strong>AI-Native digital transformation agency</strong> specializing in helping small and medium-sized businesses across the United States access enterprise-grade digital solutions at startup-friendly pricing.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-jet-blue">
              <h4 className="font-bold text-jet-blue mb-2">What "AI-Native" Means:</h4>
              <p className="mb-2">We've rebuilt traditional agency workflows from the ground up using artificial intelligence:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-jet-slate">
                <li><strong>AI-Enhanced Design:</strong> Rapid prototyping with tools like Midjourney and Claude.</li>
                <li><strong>AI-Accelerated Development:</strong> Code generation with GPT-4 and Copilot.</li>
                <li><strong>AI-Powered SEO:</strong> Optimize for Google PLUS get cited on ChatGPT, Perplexity, and Gemini.</li>
                <li><strong>Human Expertise Always:</strong> AI handles repetitive tasks; humans provide strategy and QC.</li>
              </ul>
            </div>
            <p>
              With 12+ years of combined expertise and 500+ successful projects, we serve SMBs delivering enterprise-quality solutions without enterprise pricing.
            </p>
          </div>
        )
      },
      {
        id: "why-choose-factoryjet",
        question: "Why choose FactoryJet over other agencies?",
        popular: true,
        answer: (
          <div className="space-y-6">
            <p>We combine AI efficiency with human expertise to deliver <strong>75-85% faster delivery</strong> and <strong>55-75% lower costs</strong>.</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
                <thead className="bg-jet-navy text-white">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">US Agency</th>
                    <th className="p-3 bg-jet-blue">FactoryJet AI-Native</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-white">
                    <td className="p-3 font-medium">Pricing</td>
                    <td className="p-3 text-red-600">Variable, scope creep common</td>
                    <td className="p-3 text-jet-green font-bold bg-blue-50">Fixed-price, quoted up front</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-medium">Timeline</td>
                    <td className="p-3">8-16 Weeks</td>
                    <td className="p-3 text-jet-green font-bold bg-blue-50">2-5 Weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-medium">SEO Scope</td>
                    <td className="p-3">Google Only</td>
                    <td className="p-3 font-bold bg-blue-50">Google + ChatGPT + Perplexity + Gemini</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      },
      {
        id: "geographic-areas",
        question: "What geographic areas do you serve?",
        answer: (
          <div className="space-y-3">
            <p>FactoryJet serves <strong>Small and Medium Businesses across all 50 United States</strong>, with particular success in underserved growth markets. We work remotely with SMBs anywhere in the US.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2"><span className="text-jet-blue">●</span> West Coast (CA, OR, WA, NV, AZ)</li>
              <li className="flex items-center gap-2"><span className="text-jet-blue">●</span> Southwest (TX, NM, OK, AR)</li>
              <li className="flex items-center gap-2"><span className="text-jet-blue">●</span> Midwest (IL, OH, MI, WI, MN)</li>
              <li className="flex items-center gap-2"><span className="text-jet-blue">●</span> Southeast (NC, SC, GA, FL, TN)</li>
              <li className="flex items-center gap-2"><span className="text-jet-blue">●</span> Northeast (NY, PA, MA, CT, NJ)</li>
            </ul>
            <p className="text-sm text-jet-gray mt-2">Our AI-native workflows allow us to serve businesses worldwide efficiently.</p>
          </div>
        )
      },
      {
        id: "geo-aeo-aio-explained",
        question: "What makes FactoryJet's SEO different? What is GEO/AEO/AIO?",
        popular: true,
        answer: (
          <div className="space-y-4">
            <p>Traditional SEO is no longer enough. We optimize for <strong>how customers actually discover businesses in 2024-2026</strong>.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
                <div className="text-jet-orange font-bold mb-1">🔍 Traditional SEO</div>
                <p className="text-xs text-slate-600">Ranking on Google organic search results.</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
                <div className="text-jet-blue font-bold mb-1">🤖 GEO (Generative Engine Opt)</div>
                <p className="text-xs text-slate-600">Citations in AI summaries like Perplexity & Google AI Overview.</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
                <div className="text-purple-600 font-bold mb-1">📌 AEO (Answer Engine Opt)</div>
                <p className="text-xs text-slate-600">Winning featured snippets and "People Also Ask".</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
                <div className="text-jet-green font-bold mb-1">💡 AIO (AI Optimization)</div>
                <p className="text-xs text-slate-600">Being recommended by ChatGPT, Claude, and Gemini.</p>
              </div>
            </div>
            <p className="text-sm italic text-slate-500">
              Example: If a customer asks ChatGPT "Best outdoor gear in Austin", AIO ensures you are cited by name.
            </p>
          </div>
        )
      },
      {
        id: "ai-vs-human",
        question: "Do you really use AI for everything? What about human expertise?",
        popular: true,
        answer: (
          <div className="space-y-3">
            <p className="font-bold text-jet-navy">No—and that's exactly the point.</p>
            <p>"AI-Native" doesn't mean "AI-Only." It means intelligently combining AI efficiency with human expertise.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-slate-50 p-4 rounded-lg">
                <h5 className="font-bold text-jet-blue mb-2">AI Handles:</h5>
                <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                  <li>Repetitive code generation</li>
                  <li>Initial content drafts</li>
                  <li>Data analysis</li>
                  <li>Technical SEO checks</li>
                </ul>
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-lg">
                <h5 className="font-bold text-jet-orange mb-2">Humans Handle:</h5>
                <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                  <li>Business strategy</li>
                  <li>Creative direction</li>
                  <li>Complex problem solving</li>
                  <li>Final quality control</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "website",
    title: "Website Design & Dev",
    icon: Globe,
    description: "Pricing, platforms, and timelines for web projects.",
    items: [
      {
        id: "website-cost",
        question: "How much does a website cost?",
        popular: true,
        answer: (
          <div className="space-y-4">
            <p>Our fixed-price packages save you 55-75% compared to US agencies, with no scope creep.</p>
            <div className="space-y-3">
              <div className="p-3 bg-white border border-slate-200 rounded shadow-sm hover:border-jet-blue transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-jet-navy">Package 1: Launch</span>
                  <span className="text-jet-blue font-bold text-sm">Fixed-price, quoted up front</span>
                </div>
                <p className="text-xs font-bold text-jet-green mb-1">Delivery: 10-14 Business Days</p>
                <p className="text-sm text-slate-600">Professional website (5-7 pages), mobile responsive, basic SEO foundation, 10 stock images, contact form.</p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded shadow-sm hover:border-jet-blue transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-jet-navy">Package 2: Growth</span>
                  <span className="text-jet-blue font-bold text-sm">Fixed-price, quoted up front</span>
                </div>
                <p className="text-xs font-bold text-jet-green mb-1">Delivery: 14-21 Business Days</p>
                <p className="text-sm text-slate-600">Comprehensive business site (12 pages), blog, advanced SEO (30 keywords), CMS training, CRM integration.</p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded shadow-sm hover:border-jet-blue transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-jet-navy">Package 3: Scale</span>
                  <span className="text-jet-blue font-bold text-sm">Fixed-price, quoted up front</span>
                </div>
                <p className="text-xs font-bold text-jet-green mb-1">Delivery: 21-35 Business Days</p>
                <p className="text-sm text-slate-600">Enterprise-grade (25+ pages), custom design, multi-language, advanced integrations, premium security hardening.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "website-timeline",
        question: "How long does it take to build a website?",
        answer: (
          <div className="space-y-2">
            <p><strong>Typical Timelines:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Launch Package:</strong> 10-14 Business Days</li>
              <li><strong>Growth Package:</strong> 14-21 Business Days</li>
              <li><strong>Scale Package:</strong> 21-35 Business Days</li>
            </ul>
            <p className="text-sm text-jet-green font-medium mt-2">
              Our AI-Native Advantage: We're 75-85% faster than traditional agencies (8-16 weeks).
            </p>
          </div>
        )
      },
      {
        id: "website-platforms",
        question: "What platforms do you build on?",
        answer: (
          <div>
            <p className="mb-2">We recommend the best platform for YOUR specific needs:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><strong className="w-24 text-jet-blue">WordPress:</strong> Most flexible, great for content-rich sites.</li>
              <li className="flex items-center gap-2"><strong className="w-24 text-green-600">Shopify:</strong> Best for e-commerce.</li>
              <li className="flex items-center gap-2"><strong className="w-24 text-blue-500">Webflow:</strong> Designer-friendly, modern.</li>
              <li className="flex items-center gap-2"><strong className="w-24 text-slate-800">Next.js:</strong> Custom applications (like this FAQ page!).</li>
            </ul>
          </div>
        )
      },
      {
        id: "wp-agency-expert",
        question: "Why hire a specialized WordPress Development Agency?",
        answer: (
          <div className="space-y-3">
             <p>Because there is a massive difference between "installing a theme" and "engineering a platform." As a specialized <strong>WordPress Development Agency</strong>, we don't just use page builders; we build secure, scalable, and high-performance digital assets.</p>
             <p>Our WordPress solutions include:</p>
             <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                <li><strong>Headless WordPress:</strong> Decoupling the frontend (using React/Next.js) from the WP backend for blazing-fast speed and unhackable security.</li>
                <li><strong>Custom Plugin Development:</strong> Writing clean, lightweight code to replace bloated third-party plugins that slow down your site.</li>
                <li><strong>Enterprise Security Hardening:</strong> Going beyond basic security plugins to implement server-level firewalls and database isolation.</li>
             </ul>
          </div>
        )
      },
      {
        id: "webflow-vs-framer",
        question: "Webflow vs. Framer: Which one is right for my business?",
        answer: (
          <div className="space-y-3">
            <p>We work extensively with both, and the choice depends on your specific goals. Here is the breakdown:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
               <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <strong className="text-purple-600 block mb-1">Choose Framer if:</strong>
                  <p className="text-xs text-slate-600">You need a stunning, high-fidelity marketing site fast. Framer is essentially "Figma for the web." It is perfect for landing pages, portfolios, and design-centric brands that need to launch in days, not weeks.</p>
               </div>
               <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <strong className="text-blue-600 block mb-1">Choose Webflow if:</strong>
                  <p className="text-xs text-slate-600">You need a robust CMS (Content Management System) or have complex database needs. Webflow exports cleaner HTML/CSS and scales better for larger corporate sites with hundreds of blog posts or dynamic content pages.</p>
               </div>
            </div>
          </div>
        )
      },
      {
        id: "redesign-existing",
        question: "Can you redesign my existing website?",
        answer: (
          <p>
            Absolutely. Redesigns are a large part of our business. We audit your current site, analyze competitors,
            design a modern version, and handle all content migration and 301 redirects to preserve your SEO ranking.
            Redesigns follow our standard package timelines.
          </p>
        )
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingCart,
    description: "Online stores, payments, and product photography.",
    items: [
      {
        id: "ecommerce-cost",
        question: "How much does an e-commerce website cost?",
        answer: (
          <div className="space-y-3">
             <div className="p-3 bg-slate-50 rounded border border-transparent hover:border-jet-blue transition-colors">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-jet-navy">Store Launch</div>
                    <div className="font-bold text-jet-blue text-sm">Fixed-price, quoted up front</div>
                </div>
                <div className="text-xs text-jet-green font-bold mb-1">14-21 Business Days</div>
                <div className="text-sm text-slate-600">Up to 50 products, Shopify/WooCommerce, AI product content, payment setup, shipping config.</div>
             </div>
             <div className="p-3 bg-slate-50 rounded border border-transparent hover:border-jet-blue transition-colors">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-jet-navy">Store Growth</div>
                    <div className="font-bold text-jet-blue text-sm">Fixed-price, quoted up front</div>
                </div>
                <div className="text-xs text-jet-green font-bold mb-1">21-28 Business Days</div>
                <div className="text-sm text-slate-600">Up to 150 products, advanced features (upsells, bundles), email marketing flows (Klaviyo), advanced analytics.</div>
             </div>
             <div className="p-3 bg-slate-50 rounded border border-transparent hover:border-jet-blue transition-colors">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-jet-navy">Store Scale</div>
                    <div className="font-bold text-jet-blue text-sm">Fixed-price, quoted up front</div>
                </div>
                <div className="text-xs text-jet-green font-bold mb-1">28-42 Business Days</div>
                <div className="text-sm text-slate-600">Up to 500 products, enterprise features, multi-currency, ERP integration, 90-day support.</div>
             </div>
          </div>
        )
      },
      {
        id: "shopify-plus-upgrade",
        question: "When should I upgrade to Shopify Plus?",
        answer: (
          <div className="space-y-3">
            <p>While standard Shopify is powerful, <strong>Shopify Plus</strong> is the enterprise standard. We generally recommend upgrading when you hit $1M+ in annual revenue, but here are the technical triggers:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
               <li><strong>Checkout Customization:</strong> If you need to edit the `checkout.liquid` file for custom logic or branding.</li>
               <li><strong>B2B Needs:</strong> If you need a dedicated wholesale channel with custom price lists.</li>
               <li><strong>International Expansion:</strong> If you need multiple expansion stores (clones for different regions/currencies) under one contract.</li>
               <li><strong>API Limits:</strong> If your integrations are hitting standard API rate limits due to high volume.</li>
            </ul>
          </div>
        )
      },
      {
        id: "woocommerce-scaling",
        question: "Is WooCommerce really scalable for enterprise?",
        answer: (
          <div className="space-y-3">
            <p>Yes, but only if engineered correctly. The myth that "WooCommerce can't scale" comes from users on cheap shared hosting. As a <strong>WooCommerce development agency</strong>, we scale Woo to handle tens of thousands of SKUs and orders by:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
              <li><strong>Database Optimization:</strong> Using Custom Order Tables (HPOS) to reduce database bloat.</li>
              <li><strong>ElasticSearch Integration:</strong> Offloading search queries to ElasticSearch for instant results.</li>
              <li><strong>Server-Side Caching:</strong> Implementing Redis and Varnish caching layers.</li>
            </ul>
            <p className="text-xs text-slate-500 italic">If you want 100% data ownership without monthly platform fees, WooCommerce is the best enterprise choice.</p>
          </div>
        )
      },
      {
        id: "magento-adobe-commerce",
        question: "Do you support Adobe Commerce (Magento)?",
        answer: (
          <p>
            Yes. <strong>Adobe Commerce (formerly Magento)</strong> remains the king of complex B2B catalogs and multi-store capabilities. 
            We specialize in Magento 2 migrations and performance tuning. If you have 50,000+ SKUs, complex tiered pricing, or need to manage 
            multiple brands from a single dashboard, Magento is unrivaled. We also handle the heavy infrastructure (AWS/Google Cloud) required to keep Magento fast.
          </p>
        )
      },
      {
        id: "spree-commerce",
        question: "Why would we choose SpreeCommerce?",
        answer: (
          <div className="space-y-2">
            <p><strong>SpreeCommerce</strong> is our go-to solution for "API-First" headless commerce. Built on Ruby on Rails, it is incredibly lightweight and flexible.</p>
            <p className="text-sm">We recommend Spree if you are building a <strong>Multi-Vendor Marketplace</strong> or a unique subscription model that standard SaaS platforms (like Shopify) cannot handle without expensive apps. It gives you the speed of a startup framework with enterprise stability.</p>
          </div>
        )
      },
      {
        id: "custom-ecommerce-solutions",
        question: "When do I need a fully Custom E-Commerce Solution?",
        answer: (
          <div className="space-y-3">
             <p>You need a custom solution when your business model breaks the mold of &quot;Add to Cart → Checkout.&quot;</p>
             <p className="text-sm text-slate-600">Examples of when we build fully custom (MERN stack or Python/Django) solutions:</p>
             <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                <li><strong>Rental Marketplaces:</strong> Complex calendar availability and deposit logic.</li>
                <li><strong>Configurators:</strong> Selling highly customizable industrial parts with 3D visualization.</li>
                <li><strong>Regulatory Constraints:</strong> Industries like pharmaceuticals or firearms that require specific payment gateway flows and age verification compliance not allowed on standard SaaS.</li>
             </ul>
          </div>
        )
      },
      {
        id: "product-photography",
        question: "Can you help with product photography?",
        answer: (
          <div className="space-y-2">
            <p>Yes! We use <strong>AI-Enhanced Product Photography</strong> to save you money:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>AI Product Photography:</strong> Flat per-product rate, quoted up front. Includes lifestyle backgrounds.</li>
              <li><strong>AI Product Videos:</strong> Flat per-product rate, quoted up front.</li>
            </ul>
            <p className="text-sm font-bold text-jet-green mt-2">Cost Savings: 60-70% less expensive than traditional photoshoots.</p>
          </div>
        )
      }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: BarChart,
    description: "SEO, GEO, AEO, Paid Ads, and Content.",
    items: [
      {
        id: "marketing-cost",
        question: "How much does digital marketing cost?",
        answer: (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border p-3 rounded hover:border-jet-blue transition-colors">
              <div className="font-bold text-jet-blue">AI Search Foundation</div>
              <div className="text-sm font-bold">Fixed monthly retainer</div>
              <p className="text-xs text-slate-500 mt-1">SEO + GEO + AEO. 20 keywords, 4 blogs/mo, monthly reporting.</p>
            </div>
            <div className="border p-3 rounded hover:border-jet-blue transition-colors bg-blue-50/50">
              <div className="font-bold text-jet-orange">AI Search Growth</div>
              <div className="text-sm font-bold">Fixed monthly retainer</div>
              <p className="text-xs text-slate-500 mt-1">50 keywords, 8 long-form articles, 15 backlinks, bi-weekly calls.</p>
            </div>
            <div className="border p-3 rounded hover:border-jet-blue transition-colors">
              <div className="font-bold text-purple-600">AI Search Domination</div>
              <div className="text-sm font-bold">Fixed monthly retainer</div>
              <p className="text-xs text-slate-500 mt-1">100+ keywords, 16 premium articles, PR outreach, weekly strategy.</p>
            </div>
          </div>
        )
      },
      {
        id: "seo-timeline",
        question: "How long until I see SEO results?",
        answer: (
          <div className="space-y-2">
             <p>With our AI-powered packages, results are faster than traditional SEO:</p>
             <ul className="list-disc pl-5 space-y-1 text-sm">
               <li><strong>Foundation tier:</strong> 30-50% traffic increase in 3-6 months.</li>
               <li><strong>Growth tier:</strong> 80-150% traffic increase in 3-6 months.</li>
               <li><strong>Domination tier:</strong> 200-400% traffic increase in 3-6 months.</li>
             </ul>
          </div>
        )
      }
    ]
  },
  {
    id: "crm-erp",
    title: "CRM & ERP",
    icon: Users,
    description: "Systems implementation and integrations.",
    items: [
      {
        id: "crm-implementation",
        question: "Do you implement CRM systems?",
        answer: (
          <p>
            Yes, we specialize in CRM implementation (HubSpot, Salesforce, Zoho, Pipedrive).
            Services include needs assessment, configuration, data migration, and team training.
            Every CRM project is <strong>fixed-price and quoted up front</strong>, scoped to your number of users, integrations, and workflows, so you know the full cost before we start.
          </p>
        )
      },
      {
        id: "erp-systems",
        question: "What about ERP systems?",
        answer: (
          <p>
             We focus on implementing <strong>ERPNext</strong> for growing businesses. It is open-source (no licensing fees),
             highly customizable, and includes modules for Finance, Inventory, Manufacturing, and HR.
             Each implementation is fixed-price and scoped to the modules and integrations you need, and it lands at a fraction of SAP/Oracle costs.
          </p>
        )
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Payment",
    icon: CreditCard,
    description: "Terms, financing, and contracts.",
    items: [
      {
        id: "payment-terms",
        question: "What are your payment terms?",
        answer: (
          <div className="space-y-3">
            <div>
              <strong className="block text-jet-navy">Standard Terms:</strong>
              <ul className="list-disc pl-5 text-sm">
                <li>50% deposit to start</li>
                <li>50% upon completion (before go-live)</li>
              </ul>
            </div>
            <div>
              <strong className="block text-jet-navy">Options:</strong>
              <ul className="list-disc pl-5 text-sm">
                <li><strong>Prepay Discount:</strong> 100% upfront for 5% discount.</li>
                <li><strong>Payment Plan:</strong> 3-Month Payment Plan available for larger Scale projects.</li>
                <li><strong>SEO/AMC:</strong> Monthly billing or Annual prepay (2 months free).</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "financing",
        question: "Do you offer financing?",
        answer: (
          <p>
            Yes. For larger projects (like Scale packages), we can split costs into monthly payments over 3-6 month terms (subject to approval).
            We also work with third-party business financing partners for equipment or line-of-credit needs.
          </p>
        )
      }
    ]
  },
  {
    id: "support",
    title: "Support",
    icon: LifeBuoy,
    description: "Post-launch care and maintenance.",
    items: [
      {
        id: "post-launch",
        question: "What happens after launch?",
        answer: (
          <div className="space-y-3">
            <p>
              You get <strong>30-90 days of included support</strong> depending on your package. 
              For ongoing protection, we offer Annual Maintenance Contracts (AMC):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <div className="p-2 border rounded bg-slate-50">
                    <div className="font-bold">Essential</div>
                    <div className="text-jet-blue font-bold text-sm">Fixed monthly rate</div>
                    <div className="text-xs">Security, backups, updates.</div>
                </div>
                <div className="p-2 border rounded bg-slate-50">
                    <div className="font-bold">Business</div>
                    <div className="text-jet-blue font-bold text-sm">Fixed monthly rate</div>
                    <div className="text-xs">1hr dev time, priority support.</div>
                </div>
                <div className="p-2 border rounded bg-slate-50">
                    <div className="font-bold">Enterprise</div>
                    <div className="text-jet-blue font-bold text-sm">Fixed monthly rate</div>
                    <div className="text-xs">5hrs dev time, 24/7 support.</div>
                </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">E-Commerce AMC packages are available at a fixed monthly rate, quoted up front.</p>
          </div>
        )
      }
    ]
  },
  {
    id: "process",
    title: "Process",
    icon: Clock,
    description: "How we work and timelines.",
    items: [
      {
        id: "typical-process",
        question: "What does your typical process look like?",
        answer: (
          <div className="relative border-l-2 border-jet-light pl-4 space-y-4">
            <div>
              <div className="font-bold text-jet-blue text-sm">Phase 1: Discovery (Days 1-3)</div>
              <div className="text-xs text-slate-500">Kickoff, strategy, requirements.</div>
            </div>
            <div>
              <div className="font-bold text-jet-blue text-sm">Phase 2: Design (Days 4-10)</div>
              <div className="text-xs text-slate-500">Wireframes, AI prototyping, approval.</div>
            </div>
            <div>
              <div className="font-bold text-jet-blue text-sm">Phase 3: Development (Days 11-20)</div>
              <div className="text-xs text-slate-500">Coding, integrations, content.</div>
            </div>
            <div>
              <div className="font-bold text-jet-blue text-sm">Phase 4: Launch (Days 21-25)</div>
              <div className="text-xs text-slate-500">Testing, training, go-live.</div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "working-together",
    title: "Working Together",
    icon: Handshake,
    description: "Contracts, ownership, and next steps.",
    items: [
      {
        id: "code-ownership",
        question: "Can I own all the code and files?",
        answer: (
          <div className="space-y-2">
            <p><strong>You Own:</strong> All custom code, designs, content, domain, and data.</p>
            <p><strong>We Retain:</strong> Our reusable frameworks and pre-existing libraries.</p>
            <p className="text-sm italic text-slate-500">We are fully transparent about IP rights in our contracts.</p>
          </div>
        )
      },
      {
        id: "satisfaction",
        question: "What if I'm not happy with the work?",
        answer: (
          <p>
            We offer <strong>design revisions within agreed scope</strong> during the design phase and 2 rounds after development.
            We also have a <strong>14-day money-back guarantee</strong> if you are not satisfied after the discovery phase.
          </p>
        )
      }
    ]
  },
  {
    id: "tech",
    title: "Technical",
    icon: Settings,
    description: "Stack, security, and performance.",
    items: [
       {
        id: "tech-stack",
        question: "What technologies do you use?",
        answer: (
          <div className="grid grid-cols-2 gap-2 text-sm">
             <div><strong>Frontend:</strong> React, Next.js, Tailwind, Framer Motion.</div>
             <div><strong>Backend:</strong> Node.js, Python, PHP, PostgreSQL.</div>
             <div><strong>Platforms:</strong> WordPress, Shopify, Webflow.</div>
             <div><strong>AI:</strong> GPT-4, Claude, Midjourney, Copilot.</div>
          </div>
        )
       },
       {
        id: "open-source-solutions",
        question: "How do you approach implementing Open Source solutions?",
        answer: (
          <div className="space-y-3">
             <p>We are fierce advocates for Open Source (OSS) because it gives you ownership and freedom. When we implement solutions like <strong>WordPress, WooCommerce, Spree, or ERPNext</strong>, our approach focuses on three pillars:</p>
             <ol className="list-decimal pl-5 text-sm space-y-2 text-slate-600">
                <li><strong>Security First:</strong> Open source is only as secure as its maintenance. We set up automated patching and vulnerability scanning from Day 1.</li>
                <li><strong>Total Cost of Ownership (TCO):</strong> While the license is free, the hosting isn't. We architect cloud infrastructure (AWS/DigitalOcean) that auto-scales so you pay for traffic, not seats.</li>
                <li><strong>No Vendor Lock-in:</strong> We write documentation and code standards that allow any competent developer to take over. We want you to stay because you love our work, not because you're trapped.</li>
             </ol>
          </div>
        )
       }
    ]
  }
];

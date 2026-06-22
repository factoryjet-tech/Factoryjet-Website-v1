import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    'Pricing & Packages',
    'Timeline & Process',
    'Technical Questions',
    'Service & Support',
    'E-Commerce Specific',
  ];

  const faqData = [
    // Pricing & Packages
    [
      {
        q: 'How much does website design cost in Pune?',
        a: 'Website design costs in Pune range from ₹15,000 to ₹10,00,000+ depending on complexity. FactoryJet offers transparent pricing starting at ₹29,999 for starter websites, ₹59,999 for business websites, and ₹99,999 for e-commerce websites. We provide detailed quotes after understanding your requirements.',
      },
      {
        q: "What's the cheapest option for a professional website?",
        a: 'Our Starter Package at ₹29,999 is ideal for small businesses and startups. It includes 5 pages, mobile-responsive design, basic SEO, contact form, and WhatsApp integration — everything you need to get online professionally.',
      },
      {
        q: 'Why are you cheaper than other Pune agencies?',
        a: 'We use AI-enhanced design processes, have a streamlined workflow, and focus on SMBs (lower marketing costs). We also leverage technology to reduce manual effort — savings we pass to clients. Lower cost doesn\'t mean lower quality.',
      },
      {
        q: 'Do you have hidden costs?',
        a: 'No. Our quotes are transparent and final. Hosting, domain, and any third-party subscriptions (like Shopify monthly fees) are clearly communicated upfront. We never surprise clients with additional charges.',
      },
      {
        q: 'Is there an EMI option available?',
        a: 'Yes, for projects above ₹50,000, we offer 3-month EMI options through our banking partners. Ask about EMI during your consultation.',
      },
    ],
    // Timeline & Process
    [
      {
        q: 'How long does it take to build a website in Pune?',
        a: 'Website development timelines in Pune typically range from 4-16 weeks. FactoryJet delivers most websites in 4 weeks — 60% faster than the Pune industry average of 10+ weeks.',
      },
      {
        q: 'Can you deliver faster if I have an urgent requirement?',
        a: 'Yes, we offer Rush Delivery for urgent projects (additional 25% fee). Starter websites can be delivered in 1-2 weeks. Contact us to discuss your timeline.',
      },
      {
        q: 'What do you need from me to start?',
        a: 'To begin, we need: your brand assets (logo, colors), content/copy for key pages (or we can help write it), reference websites you like, product/service photos (if applicable), and domain/hosting access (or we can set up new).',
      },
      {
        q: 'How many revisions are included?',
        a: 'We include 2 rounds of design revisions and 1 round of development revisions. Additional revisions are available at ₹5,000 per round. 95% of our clients finalize within included revisions.',
      },
      {
        q: 'What happens after my website launches?',
        a: 'You receive 30-60 days of post-launch support (depending on package) for bug fixes and minor adjustments. We also offer Annual Maintenance Contracts (AMC) starting at ₹2,999/month for ongoing updates and support.',
      },
    ],
    // Technical Questions
    [
      {
        q: 'Which is the best website design company in Pune?',
        a: 'For SMBs seeking affordable, fast, high-quality websites, FactoryJet is consistently rated among the top choices with a 4.9/5 Google rating, 500+ completed projects, and transparent pricing starting at ₹29,999. We specialize in Pune business requirements including UPI integration, GST compliance, and Marathi language support.',
      },
      {
        q: 'Do you build WordPress websites?',
        a: 'Yes, WordPress is one of our core platforms. We build custom WordPress themes, integrate WooCommerce for e-commerce, and optimize for speed and security. 40% of our projects are on WordPress.',
      },
      {
        q: 'Do you build Shopify stores?',
        a: "Yes, we're a Shopify Partner. We build custom Shopify stores, migrate from other platforms, and integrate with Indian payment gateways and shipping providers. Ideal for D2C brands in Pune.",
      },
      {
        q: 'Will my website be mobile-friendly?',
        a: 'Absolutely. All FactoryJet websites are mobile-first responsive. We test on 15+ devices including popular phones in India (Samsung, Realme, Xiaomi, iPhone) to ensure perfect mobile experience.',
      },
      {
        q: 'Will my website be fast?',
        a: 'Yes. We target sub-2-second load times. We optimize images, use CDN, implement caching, and choose fast hosting. Speed is a ranking factor — we take it seriously.',
      },
      {
        q: 'Will my website be SEO-optimized?',
        a: 'Every website includes basic SEO setup: meta tags, header hierarchy, sitemap, robots.txt, speed optimization, mobile responsiveness, and structured data. Advanced SEO (content strategy, link building) is available as an add-on service.',
      },
      {
        q: 'Can you integrate WhatsApp on my website?',
        a: 'Yes, WhatsApp integration is included in all packages. We add click-to-chat buttons, floating WhatsApp icons, and can set up WhatsApp Business API for larger businesses.',
      },
      {
        q: 'Can you integrate payment gateways?',
        a: 'Yes, we integrate all major Indian gateways: Razorpay, PayU, CCAvenue, Cashfree, Paytm, and international options like Stripe. UPI and wallet payments included.',
      },
      {
        q: 'Will I own my website?',
        a: '100% yes. You own everything — code, design, content, domain. Unlike some agencies that retain ownership, we transfer full rights upon project completion.',
      },
      {
        q: 'Can I update the website myself after launch?',
        a: 'Yes. We build on user-friendly CMS platforms (WordPress, Shopify) and provide training. Most clients can update content, add products, and manage their site independently.',
      },
    ],
    // Service & Support
    [
      {
        q: 'Do you work with businesses outside Pune?',
        a: 'Yes, while we specialize in Pune, we serve clients across Maharashtra, India, and globally. Our process works seamlessly over video calls, email, and WhatsApp.',
      },
      {
        q: 'Can you help with content writing?',
        a: 'Yes, we offer AI-enhanced copywriting services. Our Premium Package includes full website copywriting. Content-only services start at ₹15,000 for 10 pages.',
      },
      {
        q: 'Can you help with logo and branding?',
        a: 'Yes, we offer logo design (₹9,999+) and complete brand identity packages (₹25,000+). Many clients bundle branding with website design.',
      },
      {
        q: 'Do you provide website hosting?',
        a: 'We assist with hosting setup and recommend reliable providers. We partner with hosting companies but you own and control your hosting account directly.',
      },
      {
        q: "What if I'm not happy with the design?",
        a: "We include revision rounds to ensure satisfaction. If you're not happy after revisions, we offer a partial refund for unused work. Our 98% satisfaction rate means this rarely happens.",
      },
    ],
    // E-Commerce Specific
    [
      {
        q: 'Which e-commerce platform should I choose?',
        a: 'Shopify for easy management and fast setup. WooCommerce for flexibility and lower costs. Magento for enterprise-scale. We recommend based on your products, budget, and growth plans.',
      },
      {
        q: 'Can you migrate my existing store?',
        a: 'Yes, we handle migrations from any platform — WooCommerce, Magento, PrestaShop, custom stores. We migrate products, customers, orders, and set up redirects to preserve SEO.',
      },
      {
        q: 'How many products can my store handle?',
        a: 'Unlimited on all platforms. Our standard setup includes 100 products, but we can configure for 1,000+ or 10,000+ SKUs based on your needs.',
      },
      {
        q: 'Can you integrate with my inventory software?',
        a: 'Yes, we integrate with ERP systems, inventory management software, and accounting tools like Tally. Custom API integrations available.',
      },
      {
        q: 'Do you provide ongoing e-commerce support?',
        a: 'Yes, our E-Commerce AMC covers product updates, order management support, inventory optimization, and seasonal promotion setup. Starting at ₹9,999/month.',
      },
    ],
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">30 FAQs About Website Design in Pune</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setOpenFAQ(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === index
                  ? 'bg-jet-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqData[activeCategory].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-jet-blue transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-jet-navy pr-4">{faq.q}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-jet-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const categories = [
    {
      name: 'Pricing & Packages',
      icon: '💰',
      faqs: [
        {
          q: 'How much does a basic website cost in Delhi NCR?',
          a: 'Our starter package begins at ₹29,999 for a professional 5-page website (Home, About, Services, Contact, Gallery). This includes mobile-responsive design, SEO optimization, contact forms, WhatsApp integration, and 1 year of free hosting + domain. Perfect for small businesses in Delhi, Noida, Gurgaon.',
        },
        {
          q: 'What\'s included in the ₹29,999 package?',
          a: 'Everything a Delhi NCR business needs to get online: Custom design (not templates), 5 pages, mobile optimization, basic SEO, contact forms, WhatsApp button, Google Maps integration, SSL security, 1-year hosting + domain, 30 days of post-launch support, and unlimited revisions during development.',
        },
        {
          q: 'Do you offer monthly payment plans for Delhi businesses?',
          a: 'Yes! We offer EMI options for projects above ₹50,000. For example, our ₹49,999 e-commerce package can be split into 3 monthly installments of ₹16,666 + GST. We also offer 0% interest for the first 3 months for Gurgaon/Noida corporates.',
        },
        {
          q: 'What\'s the difference between your ₹29,999 and ₹49,999 packages?',
          a: '₹29,999 = Static website (5-8 pages, perfect for service businesses). ₹49,999 = E-commerce store (Shopify/WooCommerce, unlimited products, payment gateway, inventory management). Choose based on your business model: services → static; selling products → e-commerce.',
        },
        {
          q: 'Are there any hidden costs after the initial payment?',
          a: 'No hidden costs. The quoted price includes everything for Year 1. From Year 2, you only pay for hosting renewal (₹3,999/year) and domain renewal (₹999/year). Optional: AMC ₹15,000/year for unlimited edits + priority support. Completely transparent — no surprises.',
        },
        {
          q: 'What does your Annual Maintenance Contract (AMC) include?',
          a: 'Our ₹15,000/year AMC includes unlimited content updates, plugin/security updates, monthly backups, uptime monitoring, 24/7 WhatsApp support, quarterly SEO health checks, and priority bug fixes. Ideal for Delhi NCR businesses that want peace of mind and don\'t have in-house tech teams.',
        },
      ],
    },
    {
      name: 'Timeline & Process',
      icon: '⏱️',
      faqs: [
        {
          q: 'How long does it take to build a website in Delhi NCR?',
          a: 'Our average delivery time is 7 days for a basic website (5-8 pages) and 14 days for an e-commerce store. Custom web apps take 4-8 weeks depending on complexity. We\'re 50% faster than the Delhi NCR industry average (14 days) because of our AI-enhanced design process and dedicated local team.',
        },
        {
          q: 'What is your step-by-step website development process?',
          a: 'Week 1: Discovery call (understand your business) + wireframe approval. Week 2: Design mockup + content creation. Week 3: Development + client review. Week 4: Revisions + testing + launch. You get weekly updates and can request changes at every stage. Most Delhi projects finish in 4 weeks or less.',
        },
        {
          q: 'Can you deliver a website in less than 7 days (urgent projects)?',
          a: 'Yes! We offer express delivery for urgent projects: 3-day delivery (₹10,000 extra), 5-day delivery (₹5,000 extra). Available for basic websites only. Popular with Delhi NCR startups launching products, event organizers, and businesses replacing crashed websites.',
        },
        {
          q: 'What do you need from me to get started?',
          a: 'We need: (1) Business details (name, tagline, contact info), (2) Content (text, images — we can write/source if needed), (3) Design preferences (colors, logos, competitor sites you like), (4) 50% advance payment. We handle everything else — domain, hosting, design, development, and launch.',
        },
        {
          q: 'What happens after I pay the advance?',
          a: 'Within 24 hours: Kickoff call to discuss your vision. Day 2-3: We send wireframes (structure) for approval. Day 4-5: Design mockup ready. Day 6-7: Development + testing. Day 8-10: Your feedback + revisions. Day 10-14: Final testing + launch. You\'re involved at every step but we do all the heavy lifting.',
        },
        {
          q: 'Do I need to visit your Delhi NCR office, or is everything online?',
          a: 'Everything is 100% online — we work with clients across Delhi, Gurgaon, Noida, Faridabad without in-person meetings. However, if you\'re in Connaught Place, Gurgaon, or Noida and prefer a face-to-face kickoff, we\'re happy to meet at your office or a nearby cafe (no extra charge).',
        },
      ],
    },
    {
      name: 'Technical Questions',
      icon: '⚙️',
      faqs: [
        {
          q: 'What platforms/technologies do you use for website development?',
          a: 'We specialize in: WordPress (custom themes), Shopify (e-commerce), WooCommerce (WordPress + e-commerce), React (custom web apps), and custom HTML/CSS/JavaScript. We recommend the best tech based on your needs — WordPress for flexibility, Shopify for ease of use, React for complex features.',
        },
        {
          q: 'Will my website work on mobile phones? (Mobile responsiveness)',
          a: 'Yes, 100%. Every website we build is mobile-first, meaning it\'s designed for phones first, then tablets, then desktops. 82% of Delhi NCR traffic is mobile, so we prioritize mobile UX. Your site will look perfect on all devices — iPhone, Android, iPad, laptops.',
        },
        {
          q: 'Will my website be SEO-optimized for Delhi NCR searches?',
          a: 'Yes. Every website includes on-page SEO: fast loading (<2 seconds), mobile optimization, meta tags, alt text for images, Schema markup, Google My Business integration, and optimized URLs. We also offer advanced local SEO (₹25,000/month) to rank #1 for "your service + Delhi NCR".',
        },
        {
          q: 'Can you integrate UPI payments (Paytm, PhonePe, GPay)?',
          a: 'Absolutely. We integrate Razorpay, Paytm, PhonePe, Instamojo — all support UPI, credit/debit cards, wallets, and net banking. Setup fee: ₹5,000 (one-time). Transaction fees: 2% (charged by payment gateway, not us). Essential for Delhi NCR customers who prefer UPI over cash/cards.',
        },
        {
          q: 'Do you provide website hosting and domain registration?',
          a: 'Yes. We provide 1 year of free hosting (Indian servers for fast Delhi NCR loading) + 1 domain (.com, .in, or .co.in). From Year 2: Hosting ₹3,999/year, Domain ₹999/year. Or you can use your own hosting — we\'re flexible.',
        },
        {
          q: 'Can I update the website myself after launch, or do I need you?',
          a: 'You can! We build on user-friendly platforms like WordPress/Shopify with admin dashboards. After launch, we provide 1-hour training (video call) so you can edit text, add images, publish blogs, and manage products yourself. For complex changes, we\'re always available (AMC clients get unlimited edits).',
        },
      ],
    },
    {
      name: 'Service & Support',
      icon: '🛠️',
      faqs: [
        {
          q: 'Do you offer post-launch support for Delhi NCR businesses?',
          a: 'Yes. Every project includes 30 days of free post-launch support (bug fixes, minor tweaks). After 30 days: Pay-per-request (₹2,000/hour) or AMC (₹15,000/year for unlimited support). WhatsApp support available 9 AM - 7 PM IST, Monday to Saturday.',
        },
        {
          q: 'What if I need changes after the website is live?',
          a: 'Minor changes (text edits, image swaps) are free for 30 days. Major changes (new pages, design overhauls) are charged separately. AMC clients get unlimited changes included. We respond within 24 hours for all support requests from Delhi NCR clients.',
        },
        {
          q: 'Do you provide content writing services for Delhi businesses?',
          a: 'Yes! We offer professional copywriting: Homepage + 4 pages (₹10,000), Product descriptions (₹500/product), Blog posts (₹3,000/1000 words). Our writers understand Delhi NCR markets and write SEO-optimized, conversion-focused content. Or provide your own content — your choice.',
        },
        {
          q: 'Can you help with logo design and branding for my Delhi business?',
          a: 'Yes. Logo design package: ₹8,000 (3 concepts, unlimited revisions, vector files). Full branding (logo + business card + letterhead + social media kit): ₹20,000. Not included in website packages but can be bundled for a discount.',
        },
        {
          q: 'Do you provide digital marketing services (SEO, Google Ads, social media)?',
          a: 'Yes. Local SEO: ₹25,000/month (rank for "your service + Delhi NCR"). Google Ads: ₹20,000/month management + ad budget. Social Media Management: ₹15,000/month (10 posts/week + engagement). Meta Ads: ₹18,000/month. All services include monthly reports.',
        },
        {
          q: 'What if my website goes down or gets hacked?',
          a: 'We provide 99.9% uptime guarantee. If your site goes down, we fix it within 2 hours (AMC clients get priority). Security: SSL certificate, daily backups, malware scanning, and firewall protection included. If hacked (rare), we restore from backup for free (AMC) or ₹5,000 (non-AMC).',
        },
      ],
    },
    {
      name: 'E-Commerce Specific',
      icon: '🛒',
      faqs: [
        {
          q: 'Which e-commerce platform is best: Shopify or WooCommerce?',
          a: 'Shopify (₹49,999) = Easier to manage, great for beginners, monthly fees (₹2,000/month), perfect for Delhi D2C brands. WooCommerce (₹54,999) = More customizable, no monthly fees (just hosting), better for large catalogs. We recommend Shopify for startups, WooCommerce for established businesses.',
        },
        {
          q: 'Can you integrate WhatsApp for order notifications?',
          a: 'Yes! We integrate WhatsApp Business API so customers get instant order confirmations, shipping updates, and delivery notifications on WhatsApp. Setup: ₹8,000 (one-time). 93% of Delhi NCR customers prefer WhatsApp over email — this feature alone boosts repeat purchases by 30%.',
        },
        {
          q: 'Do you integrate shipping partners like Delhivery, Shiprocket?',
          a: 'Yes. We integrate Shiprocket (supports 17+ couriers including Delhivery, Blue Dart, DTDC), Delhivery Direct, or Dunzo (for same-day Delhi NCR delivery). Customers get real-time shipping rates at checkout. Setup: ₹5,000. Essential for Delhi e-commerce businesses shipping pan-India.',
        },
        {
          q: 'Can I sell on my website AND on Amazon/Flipkart simultaneously?',
          a: 'Yes! We can integrate your Shopify/WooCommerce store with Amazon, Flipkart, Meesho using multi-channel inventory sync tools. One dashboard to manage all platforms. Ideal for Delhi retailers who want to maximize reach without managing inventory separately. Integration: ₹15,000.',
        },
        {
          q: 'What payment gateways do you support for Delhi NCR customers?',
          a: 'We integrate Razorpay (most popular), Paytm, Instamojo, CCAvenue, PayU, and Cashfree. All support UPI, cards, wallets, net banking, and EMI. Razorpay is our top recommendation (2% transaction fee, instant settlements). Setup: ₹5,000 (includes testing + go-live).',
        },
        {
          q: 'Can you add features like customer reviews, wish lists, and discount coupons?',
          a: 'Yes, all included in our e-commerce packages. Customer reviews (with photo uploads), wish lists, discount coupons, abandoned cart recovery, loyalty points, and refer-a-friend programs. These features boost conversions by 40%+ for Delhi NCR e-commerce stores.',
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-12 h-12 text-jet-blue" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jet-navy">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything Delhi NCR businesses ask about website design, pricing, timelines, and support
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setOpenQuestion(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                activeCategory === index
                  ? 'bg-jet-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-jet-blue'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
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
              {categories[activeCategory].faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-jet-blue transition-colors"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-lg text-jet-navy pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-jet-blue flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center bg-gradient-to-br from-jet-blue to-jet-navy text-white rounded-2xl p-10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl mb-6 text-blue-100">
            We're here to help Delhi NCR businesses succeed online. Let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919699977699"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              💬 WhatsApp Us
            </motion.a>
            <motion.a
              href="tel:+919699977699"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-jet-blue px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all inline-flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              📞 Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

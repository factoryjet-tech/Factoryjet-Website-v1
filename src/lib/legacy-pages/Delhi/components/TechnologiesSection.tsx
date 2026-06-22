import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShoppingCart, Server, Database, Cloud, CreditCard, Truck } from 'lucide-react';

const TechnologiesSection: React.FC = () => {
  const techCategories = [
    {
      title: 'Content Management Systems',
      icon: Code2,
      items: ['WordPress + Elementor/Divi', 'Webflow', 'Drupal', 'Custom CMS'],
    },
    {
      title: 'E-Commerce Platforms',
      icon: ShoppingCart,
      items: ['Shopify / Shopify Plus', 'WooCommerce', 'Magento / Adobe Commerce', 'BigCommerce', 'Custom E-Commerce'],
    },
    {
      title: 'Frontend Technologies',
      icon: Code2,
      items: ['React.js', 'Vue.js', 'Next.js', 'HTML5/CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      items: ['Node.js', 'Python (Django/Flask)', 'PHP (Laravel)', 'Java'],
    },
    {
      title: 'Databases',
      icon: Database,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      title: 'Hosting & Cloud',
      icon: Cloud,
      items: ['AWS', 'Google Cloud Platform', 'Azure', 'DigitalOcean', 'Cloudflare'],
    },
    {
      title: 'Payment Gateways',
      icon: CreditCard,
      items: ['Razorpay', 'PayU', 'CCAvenue', 'Cashfree', 'Stripe', 'Paytm'],
    },
    {
      title: 'Shipping Integrations',
      icon: Truck,
      items: ['Shiprocket', 'Delhivery', 'BlueDart', 'DTDC', 'India Post'],
    },
  ];

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
            Technologies & Platforms
          </h2>
          <p className="text-xl text-gray-600">Technologies We Work With</p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-8 h-8 text-jet-blue" />
                <h3 className="text-lg font-bold text-jet-navy">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-jet-blue hover:text-white transition-all cursor-default shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

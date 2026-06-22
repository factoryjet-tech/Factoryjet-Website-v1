import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ShoppingBag, Crown, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenModal: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onOpenModal }) => {
  const packages = [
    {
      name: 'Starter Website',
      badge: 'Most Affordable',
      badgeColor: 'bg-green-500',
      price: '₹29,999',
      perfectFor: 'Startups, freelancers, small service providers, new IT consultants',
      delivery: '3 weeks',
      icon: Zap,
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Basic SEO setup',
        'Contact form',
        'WhatsApp integration',
        'Google Analytics',
        'SSL certificate',
        '1 year hosting assistance',
        '30 days post-launch support',
      ],
      highlighted: false,
    },
    {
      name: 'Business Website',
      badge: 'Most Popular',
      badgeColor: 'bg-jet-orange',
      price: '₹59,999',
      perfectFor: 'Growing SMBs, IT services companies, professional services, B2B firms',
      delivery: '4 weeks',
      icon: Star,
      features: [
        'Up to 10 pages',
        'Custom UI/UX design',
        'Advanced SEO optimization',
        'Blog functionality',
        'Lead capture forms with CRM integration',
        'WhatsApp + Call tracking',
        'Social media integration',
        'Google Analytics + Search Console',
        'Speed optimization (<2 sec load)',
        '60 days post-launch support',
      ],
      highlighted: true,
    },
    {
      name: 'E-Commerce Website',
      badge: 'Best for E-Commerce',
      badgeColor: 'bg-purple-600',
      price: '₹99,999',
      perfectFor: 'Online stores, D2C brands, retail businesses, PCMC traders going online',
      delivery: '5-6 weeks',
      platform: 'Shopify or WooCommerce',
      icon: ShoppingBag,
      features: [
        'Complete online store',
        'Up to 100 products (expandable)',
        'Payment gateway integration (Razorpay, PayU, UPI)',
        'Shipping integration (Shiprocket, Delhivery, BlueDart)',
        'Inventory management',
        'Order management system',
        'Customer accounts',
        'Mobile-optimized checkout',
        'Product SEO',
        '60 days post-launch support',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Business + AI Creative Studio',
      badge: 'Premium',
      badgeColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      price: '₹1,49,999',
      perfectFor: 'Established businesses, IT companies wanting comprehensive digital presence',
      delivery: '6-8 weeks',
      icon: Crown,
      features: [
        'Everything in Business Package, PLUS:',
        'Up to 20 pages',
        'AI-generated product/service visuals',
        'AI video content (1 explainer video)',
        'AI-enhanced copywriting',
        'Advanced animations',
        'Custom integrations',
        'Priority support',
        'Quarterly strategy reviews',
      ],
      highlighted: false,
    },
  ];

  const amcTiers = [
    {
      tier: 'Basic',
      monthlyCost: '₹2,999/mo',
      includes: 'Updates, backups, security, email support',
      color: 'border-gray-300',
    },
    {
      tier: 'Standard',
      monthlyCost: '₹4,999/mo',
      includes: 'Basic + 5 content updates/month, performance monitoring',
      color: 'border-jet-blue',
    },
    {
      tier: 'Premium',
      monthlyCost: '₹9,999/mo',
      includes: 'Standard + unlimited updates, priority support, SEO updates',
      color: 'border-jet-orange',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
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
            Transparent Pricing Packages
          </h2>
          <p className="text-xl text-gray-600">Website Design Pricing for Pune Businesses</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all ${
                pkg.highlighted ? 'ring-4 ring-jet-blue scale-105 lg:scale-110 z-10' : ''
              }`}
            >
              {/* Badge */}
              <div className={`${pkg.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-t-2xl text-center`}>
                {pkg.badge}
              </div>

              <div className="p-6">
                {/* Icon */}
                <div className="mb-4">
                  <pkg.icon className={`w-12 h-12 ${pkg.highlighted ? 'text-jet-blue' : 'text-gray-600'}`} />
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-bold text-jet-navy mb-2">{pkg.name}</h3>

                {/* Perfect For */}
                <p className="text-sm text-gray-600 mb-4">{pkg.perfectFor}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-jet-green">{pkg.price}</div>
                </div>

                {/* Delivery */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="text-sm text-gray-600">
                    <strong>Delivery:</strong> {pkg.delivery}
                  </div>
                  {pkg.platform && (
                    <div className="text-sm text-gray-600 mt-1">
                      <strong>Platform:</strong> {pkg.platform}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onOpenModal}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? 'bg-jet-orange hover:bg-[#e55a2b] text-white shadow-lg'
                      : 'bg-jet-blue hover:bg-jet-navy text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AMC Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-jet-navy text-center mb-8">
            Annual Maintenance Contracts (AMC)
          </h3>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-jet-blue to-jet-navy text-white">
                    <th className="p-4 text-left font-bold">AMC Tier</th>
                    <th className="p-4 text-left font-bold">Monthly Cost</th>
                    <th className="p-4 text-left font-bold">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {amcTiers.map((tier, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        index === amcTiers.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="p-4">
                        <div className={`font-bold text-lg text-jet-navy border-l-4 ${tier.color} pl-3`}>
                          {tier.tier}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-jet-green text-xl">{tier.monthlyCost}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-700">{tier.includes}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

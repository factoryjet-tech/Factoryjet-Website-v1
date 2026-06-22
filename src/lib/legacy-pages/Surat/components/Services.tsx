
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingBag, Smartphone, Search, Zap, Shield, CreditCard, Truck, Package, MessageCircle, Clock, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Design & Development',
      description: 'Custom, mobile-responsive websites built for Surat businesses. From corporate sites to landing pages, we deliver in 4 weeks flat.',
      features: [
        { icon: Smartphone, text: 'Mobile-First Design (83% of your visitors are on mobile)' },
        { icon: Search, text: 'Local SEO + Google My Business Setup' },
        { icon: Zap, text: 'Fast Loading (<2 seconds on Indian networks)' },
        { icon: Shield, text: 'SSL Security + Daily Backups' },
      ],
      techTags: ['WordPress', 'Webflow', 'Custom'],
      price: 'From ₹29,999',
      gradient: 'from-jet-blue to-blue-600',
      iconBg: 'bg-jet-blue/10',
      iconColor: 'text-jet-blue',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Store Development',
      description: 'Full-featured online stores with UPI, Razorpay, and all Indian payment gateways. Start selling to Surat and all of India.',
      features: [
        { icon: CreditCard, text: 'UPI + Razorpay + All Payment Modes' },
        { icon: Truck, text: 'Shiprocket + Delhivery Integration' },
        { icon: Package, text: 'Inventory Management Built-in' },
        { icon: MessageCircle, text: 'WhatsApp Order Notifications' },
      ],
      techTags: ['Shopify', 'WooCommerce', 'Custom'],
      price: 'From ₹49,999',
      gradient: 'from-jet-orange to-orange-500',
      iconBg: 'bg-jet-orange/10',
      iconColor: 'text-jet-orange',
    },
  ];

  const miniFeatures = [
    {
      icon: Clock,
      title: '4-Week Delivery',
      description: 'Go live faster than any Mumbai agency. Guaranteed.',
    },
    {
      icon: CreditCard,
      title: 'All India Payments',
      description: 'UPI, GPay, PhonePe, Razorpay, Cards, Net Banking—all included.',
    },
    {
      icon: Users,
      title: 'Surat-Based Team',
      description: 'Local support. Meet us in Surat. WhatsApp anytime.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[150px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-jet-blue/10 text-jet-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading mb-4">
            Everything Surat SMBs Need to Grow Online
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            We specialize in two core areas: high-performance websites and revenue-generating e-commerce stores—with all India payment integrations built-in.
          </p>
        </motion.div>

        {/* Service Cards - Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                <service.icon size={28} className={service.iconColor} />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-jet-navy font-heading mb-3">{service.title}</h3>
              <p className="text-jet-slate mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <feature.icon size={18} className="text-jet-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-jet-slate">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.techTags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-jet-slate text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price */}
              <p className="text-2xl font-bold text-jet-green">{service.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini Features Strip */}
        <div className="grid md:grid-cols-3 gap-6">
          {miniFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 bg-jet-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <feature.icon size={24} className="text-jet-blue" />
              </motion.div>
              <h4 className="text-lg font-bold text-jet-navy mb-2 font-heading">{feature.title}</h4>
              <p className="text-sm text-jet-slate">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

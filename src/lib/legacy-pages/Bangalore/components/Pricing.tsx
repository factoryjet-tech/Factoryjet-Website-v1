
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Lock, MessageCircle, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenModal: () => void;
}

interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  description?: string;
  delivery?: string;
  cta?: string;
  note?: string;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState('website');

  const tabs = [
    { id: 'website', label: 'Website Design' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'amc', label: 'AMC Plans' },
  ];

  const websitePlans = [
    {
      name: 'STARTER',
      price: '₹29,999',
      description: 'Perfect for: New Bangalore businesses, freelancers, consultants',
      features: [
        '5 Pages Custom Design',
        'Mobile-First Responsive',
        'Basic SEO + Google My Business Setup',
        'Contact Form + WhatsApp Button',
        '3 Months Free Hosting',
        'SSL Certificate Included',
      ],
      delivery: '2-3 Weeks',
      cta: 'Start for ₹29,999',
      popular: false,
      note: 'No hidden costs',
    },
    {
      name: 'BUSINESS',
      price: '₹59,999',
      description: 'Perfect for: Growing SMBs, clinics, restaurants, tech startups',
      features: [
        '10-15 Pages Custom Design',
        'Advanced Local SEO (Rank in Bangalore searches)',
        'Multi-Step Lead Forms',
        'WhatsApp Chat Integration',
        'Google Analytics Setup',
        '6 Months Free Hosting',
        'Speed Optimized (<2 sec load)',
      ],
      delivery: '3-4 Weeks',
      cta: 'Get Business Package',
      popular: true,
      note: 'EMI Available',
    },
    {
      name: 'PREMIUM',
      price: '₹99,999',
      description: 'Perfect for: Established businesses, multi-location, high-traffic',
      features: [
        '20+ Pages + Blog',
        'Appointment/Booking System',
        'CRM Integration (Zoho/HubSpot)',
        'Advanced Analytics Dashboard',
        'Priority Support',
        '12 Months Free Hosting',
      ],
      delivery: '4-5 Weeks',
      cta: 'Go Premium',
      popular: false,
      note: 'Dedicated Manager',
    },
  ];

  const ecommercePlans = [
    {
      name: 'STARTER STORE',
      price: '₹49,999',
      description: 'Perfect for: First-time online sellers, Instagram businesses going pro',
      features: [
        'Up to 50 Products',
        'Razorpay + UPI + All Payment Modes',
        'Shiprocket Shipping Integration',
        'WhatsApp Order Notifications',
        'Basic Inventory Management',
      ],
      delivery: '3-4 Weeks',
      cta: 'Launch My Store',
      popular: false,
    },
    {
      name: 'PRO STORE',
      price: '₹99,999',
      description: 'Perfect for: Serious retailers, D2C brands, growing e-commerce',
      features: [
        'Up to 200 Products',
        'Abandoned Cart Recovery (₹₹₹ saver!)',
        'COD + All Payment Options',
        'Multi-Courier Integration',
        'Customer Accounts + Wishlist',
        'Product Reviews System',
      ],
      delivery: '4-5 Weeks',
      cta: 'Get Pro Store',
      popular: true,
      note: 'Best Value',
    },
    {
      name: 'ENTERPRISE STORE',
      price: '₹1,99,999',
      description: 'Perfect for: Large catalogs, B2B, marketplaces',
      features: [
        'Unlimited Products',
        'Multi-Vendor Marketplace Option',
        'Advanced Analytics + Reports',
        'ERP Integration (Tally/Zoho)',
        'Custom Features',
      ],
      delivery: '6-8 Weeks',
      cta: 'Talk to Sales',
      popular: false,
    },
  ];

  const amcPlans = [
    {
      name: 'BASIC AMC',
      price: '₹2,999/month',
      features: [
        'Security updates & monitoring',
        'Weekly backups',
        'Uptime monitoring',
        'Email support',
      ],
    },
    {
      name: 'STANDARD AMC',
      price: '₹4,999/month',
      features: [
        'Everything in Basic +',
        'Monthly content updates (up to 5)',
        'Performance optimization',
        'WhatsApp support',
      ],
      popular: true,
    },
    {
      name: 'PREMIUM AMC',
      price: '₹9,999/month',
      features: [
        'Everything in Standard +',
        'Unlimited content updates',
        'Priority support (2-hour response)',
        'Monthly SEO reports',
        'Dedicated account manager',
      ],
    },
  ];

  const currentPlans: Plan[] = activeTab === 'website' ? websitePlans : activeTab === 'ecommerce' ? ecommercePlans : amcPlans;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading mb-4">
            Transparent Bangalore Pricing
          </h2>
          <p className="text-jet-slate mb-6">No hidden fees. No surprises. Know exactly what you pay.</p>

          {/* Price Guarantee Badge */}
          <div className="inline-flex items-center gap-2 bg-jet-green/10 text-jet-green px-4 py-2 rounded-full text-sm font-bold">
            <Lock size={16} />
            Price Match Guarantee: Find a lower quote from a Bangalore agency? We'll match it.
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-10"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-jet-blue text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-jet-slate border border-slate-200 hover:border-jet-blue/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all relative ${
                  plan.popular ? 'border-jet-blue shadow-xl' : 'border-slate-100 hover:border-jet-blue/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-jet-blue text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={12} className="fill-white" /> {activeTab === 'ecommerce' ? 'Best Value' : 'Most Popular'}
                    </span>
                  </div>
                )}

                {/* Plan Name & Price */}
                <h3 className="text-lg font-bold text-jet-navy font-heading mb-1">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-[10px] sm:text-xs font-semibold text-jet-orange uppercase tracking-wider">
                    Starting At
                  </span>
                  <div className="text-3xl font-bold text-jet-navy mt-1">{plan.price}</div>
                </div>

                {/* Description */}
                {'description' in plan && plan.description && (
                  <p className="text-sm text-jet-gray mb-4">{plan.description}</p>
                )}

                {/* Delivery Time */}
                {'delivery' in plan && plan.delivery && (
                  <p className="text-sm text-jet-blue font-medium mb-4">📦 Delivery: {plan.delivery}</p>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-jet-slate">
                      <Check size={16} className="text-jet-green flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {'cta' in plan && plan.cta && (
                  <button
                    onClick={onOpenModal}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      plan.popular
                        ? 'bg-jet-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20'
                        : 'bg-jet-blue text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                )}

                {/* Note */}
                {'note' in plan && plan.note && (
                  <p className="text-center text-xs text-jet-gray mt-3">{plan.note}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Payment Options Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
        >
          <p className="text-jet-navy font-medium mb-2">
            💳 Payment Options: UPI | Cards | Net Banking | EMI Available (0% on select cards)
          </p>
          <p className="text-jet-gray flex items-center justify-center gap-2">
            <MessageCircle size={16} className="text-jet-green" />
            Questions? WhatsApp us: <a href="https://wa.me/919699977699" className="text-jet-blue font-bold hover:underline">+91 96999 77699</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

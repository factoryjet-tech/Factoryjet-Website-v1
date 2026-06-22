import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, FileText, Code2, Layout, RefreshCw, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Website Design',
      for: 'IT companies, professional services, B2B companies, corporates, consulting firms',
      features: [
        'Modern, professional design reflecting your brand identity',
        'Mobile-responsive layouts for all devices',
        'Fast-loading pages (under 2 seconds)',
        'Lead capture forms with CRM integration',
        'SEO-optimized structure',
        'WhatsApp Business integration',
        'Multi-language support (Marathi, Hindi, English)',
      ],
      price: '₹59,999',
      color: 'blue',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Website Development',
      for: 'Retailers, D2C brands, online stores, wholesalers, PCMC traders',
      platforms: [
        'Shopify — For fast-growing D2C brands',
        'WooCommerce — For flexible WordPress-based stores',
        'Magento — For enterprise e-commerce',
        'Custom Development — For unique requirements',
      ],
      features: [
        'Product catalog management',
        'Payment gateway integration (Razorpay, PayU, CCAvenue, Stripe)',
        'Shipping integration (Shiprocket, Delhivery, BlueDart, DTDC)',
        'Inventory management',
        'Mobile-optimized checkout',
        'WhatsApp ordering integration',
        'COD and UPI support',
      ],
      price: '₹99,999',
      color: 'orange',
    },
    {
      icon: FileText,
      title: 'WordPress Development',
      for: 'Blogs, content sites, business websites, portfolios, IT service companies',
      features: [
        'Custom WordPress theme development',
        'Plugin customization and integration',
        'Speed and performance optimization',
        'Security hardening',
        'WooCommerce integration',
        'SEO setup and optimization',
        'Training for content management',
      ],
      price: '₹39,999',
      color: 'purple',
    },
    {
      icon: Code2,
      title: 'Custom Web Application Development',
      for: 'IT companies, SaaS products, manufacturing portals, dealer management systems',
      technologies: [
        'React, Vue.js, Next.js (Frontend)',
        'Node.js, Python, PHP (Backend)',
        'MongoDB, PostgreSQL, MySQL (Databases)',
        'AWS, Google Cloud, Azure (Hosting)',
      ],
      applications: [
        'Customer portals',
        'Dealer/distributor management systems',
        'Manufacturing dashboards and ERPs',
        'Inventory and supply chain systems',
        'Booking and reservation systems',
        'CRM and ERP integrations',
      ],
      price: '₹1,49,999',
      color: 'green',
    },
    {
      icon: Layout,
      title: 'Landing Page Design',
      for: 'Lead generation, campaigns, product launches, IT services marketing',
      features: [
        'High-converting design',
        'A/B testing ready',
        'Lead capture optimization',
        'Google Ads integration',
        'Analytics setup',
        'Mobile optimization',
      ],
      price: '₹19,999',
      color: 'indigo',
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      for: 'Businesses with outdated websites needing modernization',
      features: [
        'Complete design overhaul',
        'Content migration',
        'SEO preservation (redirects, rankings)',
        'Performance optimization',
        'Modern technology upgrade',
        'Mobile responsiveness',
      ],
      price: '₹49,999',
      color: 'teal',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: 'text-jet-blue bg-blue-50 border-blue-200 hover:border-jet-blue',
      orange: 'text-jet-orange bg-orange-50 border-orange-200 hover:border-jet-orange',
      purple: 'text-purple-600 bg-purple-50 border-purple-200 hover:border-purple-600',
      green: 'text-jet-green bg-green-50 border-green-200 hover:border-jet-green',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:border-indigo-600',
      teal: 'text-teal-600 bg-teal-50 border-teal-200 hover:border-teal-600',
    };
    return colors[color] || colors.blue;
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
            Our Web Design Services in Pune
          </h2>
          <p className="text-xl text-gray-600 mb-2">Complete Website Design & Development Services</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            As a full-service <strong className="text-jet-blue">website design company in Pune</strong>, we offer end-to-end web solutions for businesses of every size:
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getColorClasses(service.color)} border-2 rounded-xl p-6 hover:shadow-xl transition-all group`}
            >
              {/* Icon */}
              <div className="mb-4">
                <service.icon className={`w-12 h-12 ${getColorClasses(service.color).split(' ')[0]}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-jet-navy mb-3">{service.title}</h3>

              {/* For */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-600 mb-1">Perfect For:</div>
                <div className="text-sm text-gray-700">{service.for}</div>
              </div>

              {/* Platforms (for E-commerce) */}
              {service.platforms && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Platforms We Build On:</div>
                  <ul className="space-y-1">
                    {service.platforms.map((platform, i) => (
                      <li key={i} className="text-sm text-gray-700">• {platform}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies (for Custom Development) */}
              {service.technologies && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Technologies:</div>
                  <ul className="space-y-1">
                    {service.technologies.map((tech, i) => (
                      <li key={i} className="text-sm text-gray-700">• {tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications (for Custom Development) */}
              {service.applications && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Applications We Build:</div>
                  <ul className="space-y-1">
                    {service.applications.slice(0, 4).map((app, i) => (
                      <li key={i} className="text-sm text-gray-700">• {app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {service.features && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    {service.platforms ? "What's Included:" : service.applications ? '' : "What We Deliver:"}
                  </div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 5).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700">✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price */}
              <div className="pt-4 border-t border-gray-200 mt-auto">
                <div className="text-sm text-gray-600 mb-1">Starting at</div>
                <div className="text-3xl font-bold text-jet-green mb-3">{service.price}</div>
                <button className="w-full bg-jet-blue hover:bg-jet-navy text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

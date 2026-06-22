import React from 'react';
import { Monitor, Code, Smartphone, Zap, Shield, TrendingUp } from 'lucide-react';

interface ServicesProps {
  service: string;
  city: string;
}

const Services: React.FC<ServicesProps> = ({ service, city }) => {
  const serviceFeatures: Record<string, Array<{ icon: any; title: string; desc: string }>> = {
    'web-development': [
      { icon: Monitor, title: 'Custom Website Development', desc: 'Tailored solutions built from scratch to match your brand' },
      { icon: Code, title: 'Responsive Design', desc: 'Mobile-first approach ensuring perfect display on all devices' },
      { icon: Zap, title: 'Performance Optimization', desc: 'Lightning-fast load times for better user experience' },
      { icon: Shield, title: 'Security & Maintenance', desc: 'Regular updates, backups, and security monitoring' },
      { icon: TrendingUp, title: 'SEO Foundation', desc: 'Built-in SEO best practices for better search rankings' },
      { icon: Smartphone, title: 'Progressive Web Apps', desc: 'Modern web apps with native-like experience' }
    ],
    'web-design': [
      { icon: Monitor, title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces that convert' },
      { icon: Code, title: 'Figma to Code', desc: 'Pixel-perfect conversion from design to live website' },
      { icon: Zap, title: 'Brand Identity', desc: 'Cohesive visual design aligned with your brand' },
      { icon: Shield, title: 'Accessibility', desc: 'WCAG compliant designs for all users' },
      { icon: TrendingUp, title: 'Conversion Optimization', desc: 'Design focused on user actions and conversions' },
      { icon: Smartphone, title: 'Mobile-First', desc: 'Optimized for smartphone and tablet users' }
    ],
    'ecommerce-development': [
      { icon: Monitor, title: 'Online Store Setup', desc: 'Complete e-commerce store from scratch' },
      { icon: Code, title: 'Payment Integration', desc: 'Razorpay, PayPal, Stripe, and more' },
      { icon: Zap, title: 'Inventory Management', desc: 'Stock tracking and automated alerts' },
      { icon: Shield, title: 'Secure Checkout', desc: 'SSL, PCI compliance, fraud protection' },
      { icon: TrendingUp, title: 'Marketing Tools', desc: 'Email, discounts, abandoned cart recovery' },
      { icon: Smartphone, title: 'Mobile Commerce', desc: 'Optimized mobile shopping experience' }
    ],
    'default': [
      { icon: Monitor, title: 'Professional Solutions', desc: 'Industry-leading service delivery' },
      { icon: Code, title: 'Modern Technology', desc: 'Latest tools and frameworks' },
      { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround times' },
      { icon: Shield, title: 'Reliable Support', desc: '24/7 technical assistance' },
      { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Grow with your business' },
      { icon: Smartphone, title: 'Mobile Optimized', desc: 'Works on all devices' }
    ]
  };

  const features = serviceFeatures[service] || serviceFeatures['default'];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with H2 */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Our Services in {city}
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 hover:border-jet-blue rounded-2xl p-6 md:p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-jet-blue mb-6 group-hover:bg-jet-blue group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-jet-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

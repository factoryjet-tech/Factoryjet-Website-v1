import React from 'react';
import { CheckCircle, Clock, MessageCircle, DollarSign, Wrench, TrendingUp } from 'lucide-react';

const GuaranteesSection: React.FC = () => {
  const guarantees = [
    {
      icon: <CheckCircle className="w-8 h-8 text-jetGreen" />,
      title: "Quality Delivery",
      desc: "Professional websites that meet or exceed your expectations. If we deliver substandard work, we'll make it right at no additional cost."
    },
    {
      icon: <Clock className="w-8 h-8 text-jetOrange" />,
      title: "Timeline Commitment",
      desc: "Launch when we say we will. If we're late due to our delays (not client-caused delays), we'll discount your final invoice by 5% per week delayed."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-jetBlue" />,
      title: "Transparent Communication",
      desc: "Regular updates, honest feedback, and responsive communication. You'll never wonder what's happening with your project."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-jetGreen" />, // Updated to Jet Green (Success/Money)
      title: "Fair Pricing",
      desc: "No hidden costs, no surprise charges, no scope creep fees. The price we quote is the price you pay (unless YOU request additional work beyond original scope)."
    },
    {
      icon: <Wrench className="w-8 h-8 text-slate" />, // Slate matches neutral palette
      title: "Ongoing Support",
      desc: "30 days of bug fixes and support after launch. We're here even after you've paid."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-jetGreen" />, // Updated to Jet Green (Success)
      title: "Your Success",
      desc: "We measure our success by yours. If your website doesn't perform, we want to know why and help fix it."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-8 lg:px-12" id="guarantees">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">
            Our Guarantees to You
          </h2>
          <p className="text-xl text-slate font-medium">
            We Stand Behind Our Work with These Commitments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((item, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-white border border-gray-100 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_12px_rgba(0,82,204,0.15)] transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-gray-50 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-jetBlue mb-4">We Promise:</p>
              <p className="text-slate leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
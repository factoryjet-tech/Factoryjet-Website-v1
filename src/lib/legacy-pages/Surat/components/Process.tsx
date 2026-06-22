
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, Rocket, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenModal: () => void;
}

const Process: React.FC<ProcessProps> = ({ onOpenModal }) => {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'Free Discovery Call',
      duration: '15 min',
      description: "We understand your Surat business, goals, and competition. Get a clear roadmap—no jargon, no pressure.",
      badge: 'Free, No Obligation',
      badgeColor: 'bg-jet-green/10 text-jet-green',
      color: 'bg-jet-blue',
      iconColor: 'text-jet-blue',
    },
    {
      number: 2,
      icon: Palette,
      title: 'Custom Design & Mockups',
      duration: 'Week 1-2',
      description: "See your website before we build it. Unlimited revisions until you love it. We share progress via WhatsApp daily.",
      badge: 'Unlimited Revisions',
      badgeColor: 'bg-jet-orange/10 text-jet-orange',
      color: 'bg-jet-orange',
      iconColor: 'text-jet-orange',
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Launch & Training',
      duration: 'Week 3-4',
      description: "Go live with full training. We don't disappear—ongoing support from our Surat team whenever you need.",
      badge: '4-Week Guarantee',
      badgeColor: 'bg-jet-green/10 text-jet-green',
      color: 'bg-jet-green',
      iconColor: 'text-jet-green',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-jet-slate">From first call to live website in 4 weeks</p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-jet-blue via-jet-orange to-jet-green rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg`}
                >
                  {step.number}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${step.badgeColor.split(' ')[0]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <step.icon size={28} className={step.iconColor} />
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-xl font-bold text-jet-navy font-heading mb-1">{step.title}</h3>
                  <p className="text-sm text-jet-gray mb-4">{step.duration}</p>

                  {/* Description */}
                  <p className="text-jet-slate text-sm mb-4">{step.description}</p>

                  {/* Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </motion.div>

                {/* Arrow between cards - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="text-slate-300 rotate-90" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-jet-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all shimmer"
          >
            🚀 Start with a Free Discovery Call <ArrowRight size={20} />
          </button>
          <p className="mt-4 text-jet-gray flex items-center justify-center gap-2">
            <MessageCircle size={16} className="text-jet-green" />
            Or WhatsApp us now: <a href="https://wa.me/919699977699" className="text-jet-blue font-bold hover:underline">+91 96999 77699</a>
          </p>
        </motion.div>

        <style>{`
          .shimmer {
            background: linear-gradient(90deg, #FF6B35 0%, #FF8A5B 50%, #FF6B35 100%);
            background-size: 200% 100%;
            animation: shimmer 2s linear infinite;
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Process;

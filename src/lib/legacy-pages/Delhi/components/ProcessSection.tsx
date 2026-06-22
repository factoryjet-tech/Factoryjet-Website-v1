import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, CheckCircle2, Clock } from 'lucide-react';

interface ProcessSectionProps {
  onOpenModal: () => void;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenModal }) => {
  const weeks = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      icon: Search,
      whatHappens: [
        'Kick-off call to understand your business',
        'Competitor analysis in your Pune market segment',
        'Content and asset collection',
        'Wireframe development',
        'Design direction approval',
      ],
      timeRequired: '2-3 hours',
      deliverable: 'Approved wireframes and design direction',
      color: 'blue',
    },
    {
      number: 2,
      title: 'Design & Development',
      icon: Palette,
      whatHappens: [
        'Custom design creation',
        'Client review and feedback',
        'Design revisions (up to 2 rounds)',
        'Development begins on approved design',
        'Mobile responsiveness built-in',
      ],
      timeRequired: '2 hours for review',
      deliverable: 'Approved design mockups',
      color: 'purple',
    },
    {
      number: 3,
      title: 'Development & Integration',
      icon: Code,
      whatHappens: [
        'Complete website development',
        'Payment gateway integration',
        'Form and CRM integration',
        'WhatsApp integration',
        'Speed optimization',
        'Security setup',
      ],
      timeRequired: '1-2 hours for content review',
      deliverable: 'Staging site for review',
      color: 'green',
    },
    {
      number: 4,
      title: 'Testing & Launch',
      icon: Rocket,
      whatHappens: [
        'Cross-browser testing',
        'Mobile device testing',
        'Load testing',
        'SEO audit',
        'Final client review',
        'Domain and hosting setup',
        'GO LIVE',
      ],
      timeRequired: '1 hour for final approval',
      deliverable: 'LIVE WEBSITE',
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: { bg: 'bg-jet-blue', text: 'text-jet-blue', border: 'border-jet-blue' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600' },
      green: { bg: 'bg-jet-green', text: 'text-jet-green', border: 'border-jet-green' },
      orange: { bg: 'bg-jet-orange', text: 'text-jet-orange', border: 'border-jet-orange' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            How We Build Your Website in 4 Weeks (Not 4 Months)
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Most Pune web design agencies take 3-6 months to deliver. We deliver in 4 weeks — here's how:
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-jet-blue via-purple-500 to-jet-orange hidden lg:block" />

          {/* Week Cards */}
          <div className="space-y-8">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-6 items-start">
                  {/* Week Number Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 md:w-24 md:h-24 ${getColorClasses(week.color).bg} rounded-full flex flex-col items-center justify-center text-white shadow-lg z-10`}>
                    <div className="text-xs md:text-sm font-medium">Week</div>
                    <div className="text-2xl md:text-3xl font-bold">{week.number}</div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 ${getColorClasses(week.color).border}">
                    <div className="flex items-start gap-4 mb-4">
                      <week.icon className={`w-8 h-8 ${getColorClasses(week.color).text} flex-shrink-0`} />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-jet-navy mb-2">{week.title}</h3>
                      </div>
                    </div>

                    {/* What Happens */}
                    <div className="mb-4">
                      <div className="font-semibold text-gray-700 mb-2">What Happens:</div>
                      <ul className="space-y-2">
                        {week.whatHappens.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      {/* Time Required */}
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-gray-600">Your Time Required</div>
                          <div className="text-gray-700 italic">{week.timeRequired}</div>
                        </div>
                      </div>

                      {/* Deliverable */}
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-gray-600">Deliverable</div>
                          <div className={`font-bold ${getColorClasses(week.color).text}`}>
                            {week.deliverable}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Post-Launch Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-jet-blue to-jet-navy text-white rounded-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Post-Launch Support</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="font-semibold text-jet-orange mb-3">First 30 Days (Included):</div>
                <ul className="space-y-2">
                  {[
                    'Bug fixes and minor adjustments',
                    'Training on content management',
                    'Performance monitoring',
                    'Analytics review',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold text-jet-orange mb-3">Ongoing (AMC Available):</div>
                <ul className="space-y-2">
                  {[
                    'Regular updates and maintenance',
                    'Security monitoring',
                    'Content updates',
                    'Performance optimization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

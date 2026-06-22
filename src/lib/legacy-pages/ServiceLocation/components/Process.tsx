import React from 'react';
import { MessageSquare, FileText, Code, Rocket } from 'lucide-react';

interface ProcessProps {
  service: string;
  city: string;
}

const Process: React.FC<ProcessProps> = ({ service, city }) => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      desc: 'Free consultation to understand your requirements and goals',
      duration: 'Day 1'
    },
    {
      icon: FileText,
      title: 'Planning',
      desc: 'Detailed project plan, timeline, and proposal',
      duration: 'Day 2'
    },
    {
      icon: Code,
      title: 'Development',
      desc: 'Building your solution with regular progress updates',
      duration: 'Day 3-6'
    },
    {
      icon: Rocket,
      title: 'Launch',
      desc: 'Testing, deployment, and handover with training',
      duration: 'Day 7'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600">
            Simple, transparent, and efficient workflow in {city}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-jet-blue to-gray-200 z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-jet-blue text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-jet-blue mb-4">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="mb-2 text-sm font-semibold text-jetOrange">{step.duration}</div>
                  <h3 className="text-xl font-bold text-jet-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

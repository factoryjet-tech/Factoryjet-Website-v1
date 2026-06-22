import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Founder, D2C Brand",
    location: "Gurgaon",
    text: "FactoryJet delivered our Shopify store in just 8 days. The design is stunning, and we crossed ₹50 Lakh in sales within the first month."
  },
  {
    name: "Vikram Singh",
    role: "MD, Industrial Mfg",
    location: "Faridabad",
    text: "We had a terrible experience with two agencies before finding FactoryJet. They understood our manufacturing business perfectly."
  },
  {
    name: "Dr. Priya Mehta",
    role: "Dermatologist",
    location: "Noida",
    text: "Our clinic website now ranks #1 for 'dermatologist in Noida.' The patient inquiries have tripled."
  }
];

const TestimonialsSection: React.FC = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          What Delhi NCR Business Owners Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex text-yellow-400 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-slate italic mb-6 text-sm lg:text-base">"{t.text}"</p>
            <div>
              <div className="font-bold text-navy">{t.name}</div>
              <div className="text-xs text-gray-500">
                {t.role} | {t.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

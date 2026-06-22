
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "How long does it take to build a website?", a: "Business websites typically take 3-4 weeks (faster than most Ahmedabad agencies). E-commerce stores take 4-5 weeks. We share progress via WhatsApp daily." },
    { q: "What payment options do you integrate?", a: "We integrate all major Indian payment methods: UPI (GPay, PhonePe, Paytm), Razorpay, Credit/Debit Cards, Net Banking, and COD for e-commerce stores." },
    { q: "Can I meet your team in person?", a: "Absolutely! We're based in Gujarat. You can visit our office in Navrangpura, Ahmedabad, or we can meet you at your business location anywhere in Gujarat." },
    { q: "What if I'm not satisfied with the design?", a: "We offer unlimited revisions until you love the design. We don't launch until you're 100% happy with every single detail." },
    { q: "Do you provide SEO to rank on Google?", a: "Yes, every site we build includes basic SEO + Google My Business setup. For specific rankings like 'best jeweller in Ahmedabad', we offer premium SEO packages." },
    { q: "Do you work with businesses outside Ahmedabad?", a: "Yes! We serve clients across Gujarat including Surat, Vadodara, Rajkot, and Gandhinagar. We also work with businesses pan-India and internationally." }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-jet-navy mb-8 md:mb-12 text-center">Questions Ahmedabad Business Owners Ask</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-jet-light rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-jet-white transition-colors"
                >
                  <span className="font-bold text-jet-navy">{faq.q}</span>
                  {openIdx === i ? <ChevronUp className="text-jet-blue" /> : <ChevronDown className="text-jet-gray" />}
                </button>
                {openIdx === i && (
                  <div className="p-4 sm:p-6 bg-jet-white border-t border-jet-light text-jet-slate leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

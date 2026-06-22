
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "FactoryJet didn't just build us a website—they made us visible everywhere. We now rank on Google AND show up when people search on AI platforms like Perplexity. Their SEO, GEO, AEO, and AIO strategy is exactly what modern businesses need.",
      client: 'Urbane Interiors',
      service: 'Website + SEO/GEO/AEO/AIO',
      rating: 5,
    },
    {
      quote: "Our fashion store looks absolutely stunning. The mobile experience is perfect for browsing, and checkout is seamless. We're getting orders from all over India with UPI, cards, and all payment modes working flawlessly.",
      client: 'FabCouture',
      service: 'E-Commerce',
      rating: 5,
    },
    {
      quote: "As an export company, we needed international visibility. FactoryJet delivered a professional website that ranks well on Google and gets inquiries from global buyers. Their B2B SEO strategy works perfectly.",
      client: 'Shanti Overseas',
      service: 'Corporate Website + SEO',
      rating: 5,
    },
  ];

  const additionalClients = ['Infigon Futures', 'GACS India', 'YourStore Dropship', 'PawsnCollars', 'Mauli Controls'];

  const stats = [
    { value: '8+', label: 'Pune Success Stories' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '4 Weeks', label: 'Average Delivery' },
    { value: '₹29,999', label: 'Starting Price' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading mb-4">
            What Our Pune Clients Say
          </h2>
          <p className="text-jet-slate">Real feedback from real Pune businesses we've helped grow.</p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-slate-100" size={48} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-jet-slate text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-jet-navy">{testimonial.client}</p>
                <span className="inline-block px-2 py-1 bg-jet-blue/10 text-jet-blue text-xs font-medium rounded-full mt-1">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-jet-gray mb-4">Also trusted by:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalClients.map(client => (
              <motion.span
                key={client}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium text-jet-slate grayscale hover:grayscale-0 transition-all cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-jet-blue rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

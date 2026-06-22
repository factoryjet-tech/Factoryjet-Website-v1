import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Our old website was embarrassing for an IT company. We're in Hinjewadi surrounded by global tech giants, and our website looked like it was from 2010. FactoryJet delivered a completely new corporate site in just 4 weeks. Their team understood the IT services market and delivered a site that actually generates leads. Best web design company in Pune we've worked with.",
      name: 'Sanjay Kulkarni',
      designation: 'CEO',
      company: 'CloudTech Solutions',
      location: 'Hinjewadi',
      rating: 5,
    },
    {
      quote: "We're an auto parts manufacturer in Chakan with 150 dealers across India. FactoryJet built us a B2B portal that transformed our order process. Dealers now place orders online, track shipments, and download invoices. What used to take 2 days now takes 2 hours. Excellent website development company in Pune.",
      name: 'Ravi Deshmukh',
      designation: 'Director',
      company: 'Precision Auto Components',
      location: 'Chakan',
      rating: 5,
    },
    {
      quote: "We switched from a local freelancer to FactoryJet for our Shopify store. The difference is remarkable. Our e-commerce revenue grew 320% in the first year. They handled everything — design, development, payment integration, shipping setup. Highly recommend this ecommerce development company in Pune.",
      name: 'Priya Joshi',
      designation: 'Founder',
      company: 'PuneStyle Fashion',
      location: 'Koregaon Park',
      rating: 5,
    },
    {
      quote: "As a diagnostic center chain with 6 locations across Pune, we needed a website that could handle appointment bookings for all centers. FactoryJet delivered a WordPress site with custom booking integration in just 6 weeks. They understood healthcare requirements including patient data privacy. True website developers who deliver.",
      name: 'Dr. Ajay Patil',
      designation: 'CEO',
      company: 'PuneHealth Diagnostics',
      location: 'Pune',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
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
            What Pune Businesses Say About FactoryJet
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-20 h-20 text-jet-blue" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-jet-blue to-jet-navy rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>

                {/* Author Details */}
                <div>
                  <div className="font-bold text-jet-navy text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].designation}, {testimonials[activeIndex].company}
                  </div>
                  <div className="text-sm text-jet-blue font-medium bg-blue-100 px-3 py-1 rounded-full inline-block mt-1">
                    {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-jet-blue hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-jet-blue w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-jet-blue hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

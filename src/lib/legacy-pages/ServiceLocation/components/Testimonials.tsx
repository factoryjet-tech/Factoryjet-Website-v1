import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  city: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ city }) => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Startup',
      content: 'FactoryJet delivered our e-commerce platform in just 7 days. The quality exceeded our expectations!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      content: 'Professional team, excellent communication, and outstanding results. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner',
      content: 'Best decision we made for our online presence. The website is fast, beautiful, and converting well.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from businesses in {city}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold text-jet-navy">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState, FormEvent } from 'react';
import { Star, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import LeadFormInline from '@/components/LeadFormInline';

const FAQ_DATA = [
  { q: "How much does website design cost in Pune?", a: "Website design in Pune typically costs between ₹15,000 and ₹5,00,000 depending on features, functionality, and project complexity. Basic business websites start from ₹15,000, while advanced e-commerce or custom platforms require a higher budget." },
  { q: "How long does it take to build a website?", a: "Most business websites are completed within 7–14 days. Larger e-commerce or custom projects may take 2–4 weeks, depending on requirements." },
  { q: "Which is the best website design company in Pune?", a: "The best choice depends on your goals, budget, and timeline. Look for proven experience, transparent pricing, a strong portfolio, and post-launch support when selecting a web design partner." },
  { q: "Do you provide mobile-responsive websites?", a: "Yes. All websites are fully mobile-responsive and optimized for smartphones, tablets, and desktops using a mobile-first design approach." },
  { q: "Do you build Shopify or WordPress websites?", a: "Yes. We develop websites using leading platforms such as WordPress and Shopify based on your business requirements. Each platform has a dedicated service page for detailed information." },
  { q: "Do you build e-commerce websites?", a: "Yes. We create secure online stores with payment gateway integration, shipping setup, product management, and conversion optimization features." },
  { q: "Do you develop custom web applications?", a: "Yes. We build advanced web platforms such as CRM systems, booking portals, dashboards, and membership-based applications tailored to business needs." },
  { q: "Do you provide website maintenance after launch?", a: "Yes. All projects include post-launch support. Ongoing maintenance plans are available for security updates, backups, and performance monitoring." },
  { q: "Will my website rank on Google?", a: "Every website includes foundational SEO setup such as technical optimization, meta configuration, XML sitemap, and structured data. Advanced SEO services are available separately." },
  { q: "Do you integrate WhatsApp for customer inquiries?", a: "Yes. WhatsApp integration, including click-to-chat functionality, is included in all website packages." },
  { q: "Can I update my website content myself?", a: "Yes. We build websites on user-friendly platforms that allow easy content, product, and image updates without technical knowledge." },
  { q: "Do you serve areas outside Pune?", a: "Yes. We serve clients across Pune and the surrounding regions, as well as businesses across India remotely." },
  { q: "Can you redesign my existing website?", a: "Yes. We modernize outdated websites with improved design, responsiveness, and performance while maintaining SEO structure." },
  { q: "What payment gateways do you integrate?", a: "We integrate major Indian and international payment gateways, including UPI, cards, net banking, and global payment processors." },
  { q: "What is your website development process?", a: "Our process includes discovery, design approval, development, testing, and launch. Clear timelines and regular updates are provided throughout the project." },
  { q: "Do you provide web hosting support?", a: "Yes. We assist with hosting setup and recommend reliable hosting solutions based on your website type and traffic requirements." },
  { q: "How many design revisions are included?", a: "We provide multiple revisions during the design phase to ensure the final website meets your expectations before development begins." },
  { q: "Do you offer digital marketing services?", a: "Yes. We offer additional services such as SEO, paid advertising, and social media marketing to support business growth after website launch." },
  { q: "What is included in the starter package?", a: "Starter packages typically include up to 5 pages, a mobile-responsive design, basic SEO setup, contact forms, WhatsApp integration, and initial support." },
  { q: "How do I get started?", a: "Contact us for a free consultation. After discussing your requirements, we provide a proposal within 24 hours and begin development once approved." }
];

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "CEO, Software Company, Hinjewadi",
      quote: "FactoryJet understood our IT company's needs from day one. We've seen a 300% increase in inbound inquiries since launch."
    },
    {
      name: "Priya Patel",
      title: "Founder, E-Commerce Brand, Kharadi",
      quote: "They launched our Shopify store in 6 days and we hit ₹25 Lakh revenue in month one. Best website design company in Pune."
    },
    {
      name: "Amit Shah",
      title: "Director, Manufacturing Co, Chakan",
      quote: "80% of our customers browse on phones. FactoryJet delivered a fast, beautiful mobile site. Worth every rupee."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-jet-blue to-[#003D99] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="fill-current w-4 h-4 md:w-5 md:h-5" />
                ))}
              </div>
              <p className="italic text-blue-100 mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold font-heading">{testimonial.name}</div>
                <div className="text-xs text-blue-200">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy">Frequently Asked Questions</h2>
          <p className="text-jet-gray mt-2 text-sm md:text-base">Everything you need to know about website design and development in Pune.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="border-b border-jet-light pb-6 md:pb-8 last:border-0 break-inside-avoid">
              <h3 className="text-base md:text-lg font-bold text-jet-navy mb-3 flex items-start gap-3 font-heading">
                <span className="text-jet-orange text-lg md:text-xl mt-0.5">Q.</span>
                {faq.q}
              </h3>
              <p className="text-jet-slate text-sm leading-relaxed pl-7 md:pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LocalSEO = () => {
  return (
    <section className="py-12 md:py-20 bg-jet-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-jet-navy">Visit FactoryJet Pune</h2>
          <div className="space-y-4 md:space-y-6 text-jet-slate">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Office Address</h4>
                <p className="text-sm md:text-base">Office 312, Cerebrum IT Park, Kalyani Nagar,<br/>Pune, Maharashtra 411014</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Phone & WhatsApp</h4>
                <p className="text-sm md:text-base">+91 96999 77699</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Email</h4>
                <p className="text-sm md:text-base">connect@factoryjet.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Business Hours</h4>
                <p className="text-sm md:text-base">Mon – Fri: 9:00 AM – 7:00 PM<br/>Sat: 10:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <h4 className="font-bold text-jet-navy mb-2 font-heading text-sm md:text-base">Service Areas:</h4>
            <p className="text-sm text-jet-gray leading-relaxed">
              We serve businesses across: Pune City, Hinjewadi, Kharadi, Viman Nagar, Magarpatta, Hadapsar, Wakad, Baner, Aundh, Pimpri-Chinchwad, Bhosari, Chakan, Talegaon, Ranjangaon, Shivajinagar, Koregaon Park, Kothrud, Deccan, Camp, Kalyani Nagar, Yerawada, and all Pune Metropolitan Region areas.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 md:h-96 shadow-inner border border-jet-light order-first lg:order-last">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5273760453755!2d73.9012!3d18.5545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13d9643d997%3A0xb36b285f7652750!2sKalyani%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
            title="FactoryJet Pune Office Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using direct db import
      // Direct db usage

      await addDoc(collection(db, 'pune_leads'), {
        ...formData,
        source: 'Final CTA Form',
        timestamp: serverTimestamp(),
        page: 'Pune'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-r from-jet-navy to-[#1E3A8A] text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">Ready to Launch Your Professional Website?</h2>
        <p className="text-base md:text-lg text-blue-200 mb-8 md:mb-10">Stop losing customers to competitors. Get a professional website that works 24/7 to generate leads.</p>

        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-lg mx-auto mb-8 md:mb-10 text-center">
          <div className="bg-white/10 rounded-lg p-2 md:p-3">
            <div className="font-bold text-lg md:text-xl font-heading">100%</div>
            <div className="text-[10px] md:text-xs text-blue-200">Satisfaction</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 md:p-3">
            <div className="font-bold text-lg md:text-xl font-heading">7 Days</div>
            <div className="text-[10px] md:text-xs text-blue-200">Avg Delivery</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 md:p-3">
            <div className="font-bold text-lg md:text-xl font-heading">24/7</div>
            <div className="text-[10px] md:text-xs text-blue-200">Pune Support</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8">
          <LeadFormInline
            region="in"
            source="pune_final_cta"
            heading="Ready to launch your website?"
            subheading="Just your name and email to start — we reply within 2 hours."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <a href="tel:+919699977699" className="bg-transparent border-2 border-white hover:bg-white hover:text-jet-navy text-white px-8 py-3.5 md:px-10 md:py-5 rounded-lg font-bold text-lg md:text-xl transition-all">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

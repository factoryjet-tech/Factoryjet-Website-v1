import React from 'react';
import { Container, Section } from '../ui/UIComponents';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import LazyImage from '../ui/LazyImage';

// --- DATA ---
const FEATURED_TESTIMONIAL = {
  quote: "We interviewed 12 different agencies. FactoryJet was the only one that understood we didn't just need a website—we needed a conversion machine. The ROI was positive within 30 days of launch.",
  name: "Alexander V",
  role: "Founder & CEO",
  company: "TechNova Systems",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
};

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The speed of delivery was shocking. I expected the usual 'agency drag', but they delivered the first build in 4 days. It was 95% perfect on the first draft.",
    name: "Sarah Jenkins",
    role: "VP of Marketing",
    company: "GrowthFlow",
    image: "https://images.unsplash.com/photo-1573496359-136d475583dc?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    verified: true
  },
  {
    id: 2,
    quote: "Finally, a dev team that cares about SEO structure. Our technical SEO audit came back clean—zero errors. Our traffic is up 40% MoM since the migration.",
    name: "David Chen",
    role: "Head of Product",
    company: "SaaSify",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    verified: true
  },
  {
    id: 3,
    quote: "Webflow is complex, but FactoryJet made it feel simple for our team. The CMS setup allows our interns to publish blog posts without breaking the layout. Absolute game changer.",
    name: "Elena Rodriguez",
    role: "Content Director",
    company: "Luxe Living",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    verified: true
  },
  {
    id: 4,
    quote: "We saved about $40k compared to the custom React build we were considering. The site performs just as fast, if not faster.",
    name: "Marcus Johnson",
    role: "CTO",
    company: "FinEdge",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    verified: true
  },
  {
    id: 5,
    quote: "The design team nailed our brand voice immediately. It doesn't look like a template—it looks like a bespoke enterprise site.",
    name: "Jessica Wu",
    role: "Creative Director",
    company: "Artisan Co.",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    verified: true
  },
  {
    id: 6,
    quote: "FactoryJet's support is unmatched. We needed a critical landing page for a campaign launch over the weekend, and they made it happen.",
    name: "Tom Baker",
    role: "Marketing Manager",
    company: "BlueSky",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    verified: true
  }
];

// --- COMPONENTS ---

const RatingStars = () => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-[18px] h-[18px] fill-[#FF6B35] text-[#FF6B35]" />
    ))}
  </div>
);

interface TestimonialCardProps {
  data: typeof TESTIMONIALS[0];
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.08, 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative bg-white border-[2px] border-[#E2E8F0] rounded-[20px] p-7 md:p-9 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)] hover:border-[#0052CC] hover:-translate-y-[6px] transition-all duration-300 mb-8 break-inside-avoid"
    >
      {/* Verified Badge */}
      {data.verified && (
        <div className="absolute top-6 right-6 group/badge">
           <div className="text-[#10B981] bg-[#10B981]/10 rounded-full p-1">
             <CheckCircle className="w-5 h-5" />
           </div>
           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm border border-slate-100 pointer-events-none">
             Verified Client
           </span>
        </div>
      )}

      {/* Floating Quote Icon */}
      <div className="absolute -top-4 -left-3 w-16 h-16 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
        <Quote className="w-8 h-8 text-[#FF6B35]/80 fill-[#FF6B35]/20" />
      </div>

      <div className="relative z-10 pt-4">
        <RatingStars />
        
        <p className="text-[17px] text-[#0F172A] leading-[1.8] font-normal mb-7">
          "{data.quote}"
        </p>

        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
             <div className="w-14 h-14 rounded-full border-[3px] border-white shadow-[0_4px_12px_rgba(15,23,42,0.15)] overflow-hidden">
                <LazyImage src={data.image} alt={data.name} className="w-full h-full object-cover" />
             </div>
          </div>
          
          {/* Info */}
          <div>
            <h4 className="text-[16px] font-bold text-[#0F172A] leading-tight">
              {data.name}
            </h4>
            <div className="text-[14px] text-slate-500 mt-0.5">
              {data.role}, <span className="font-medium text-slate-700">{data.company}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialSection() {
  // Split testimonials for Masonry effect
  // Simple distribution logic: 
  // Desktop (3 cols): 0,3 | 1,4 | 2,5
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

  return (
    <Section className="relative py-32 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(0,82,204,0.03)_0%,rgba(255,255,255,1)_70%)]">
      <Container className="relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#10B981] font-semibold text-[13px] tracking-[0.12em] uppercase mb-3">
              Client Success
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold text-[#0F172A] mb-4 tracking-tight leading-tight">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-[20px] text-slate-500 font-normal max-w-[700px] mx-auto">
              Hear from the founders and CMOs who chose FactoryJet
            </p>
          </motion.div>
        </div>

        {/* --- FEATURED TESTIMONIAL --- */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-[#0052CC] to-[#0042A3] rounded-[24px] p-8 md:p-14 shadow-[0_16px_48px_rgba(0,82,204,0.3)] relative overflow-hidden"
          >
             {/* Decorative Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-white/30 fill-white/10 mb-8" />
                
                <p className="text-white text-2xl md:text-[28px] font-normal italic leading-[1.6] mb-10 max-w-4xl">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                   <div className="w-[72px] h-[72px] rounded-full border-[3px] border-white/20 shadow-xl overflow-hidden">
                      <LazyImage src={FEATURED_TESTIMONIAL.image} alt={FEATURED_TESTIMONIAL.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="text-center md:text-left">
                      <div className="text-white text-[20px] font-bold">{FEATURED_TESTIMONIAL.name}</div>
                      <div className="text-white/80 text-[16px]">{FEATURED_TESTIMONIAL.role}, {FEATURED_TESTIMONIAL.company}</div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- MASONRY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
           {/* Column 1 */}
           <div className="flex flex-col">
              {col1.map((item, idx) => (
                <TestimonialCard key={item.id} data={item} index={idx} />
              ))}
           </div>
           
           {/* Column 2 */}
           <div className="flex flex-col">
              {col2.map((item, idx) => (
                <TestimonialCard key={item.id} data={item} index={idx + 2} />
              ))}
           </div>

           {/* Column 3 (Hidden on tablet/mobile if strictly following 2 col, but usually stack) */}
           <div className="flex flex-col md:hidden lg:flex">
              {col3.map((item, idx) => (
                <TestimonialCard key={item.id} data={item} index={idx + 4} />
              ))}
           </div>
        </div>

      </Container>
    </Section>
  );
}
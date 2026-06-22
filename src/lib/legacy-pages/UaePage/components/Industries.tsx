import React from 'react';
import { Droplet, Hotel, Briefcase, Home, ShoppingBag, Heart, Cpu, Factory, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onOpenModal: () => void;
}

const gradients = {
  blue: "from-[#0052CC] to-[#003D99]",
  orange: "from-[#FF6B35] to-[#e55a28]",
  green: "from-[#10B981] to-[#059669]",
};

const industries = [
  { 
    icon: Droplet, 
    name: "Industrial & Oil/Gas", 
    stat: "25% GDP", 
    desc: "Expert industrial website design with secure dashboards and IoT integration for operational efficiency.",
    color: "blue"
  },
  { 
    icon: Hotel, 
    name: "Tourism & Hospitality", 
    stat: "12% GDP", 
    desc: "Hotel website design agency services including immersive booking platforms and virtual tours.",
    color: "orange"
  },
  { 
    icon: Briefcase, 
    name: "Finance & Insurance", 
    stat: "10% GDP", 
    desc: "Secure portals and fintech solutions. Best financial website design for trust and compliance.",
    color: "green"
  },
  { 
    icon: Home, 
    name: "Real Estate", 
    stat: "8% GDP", 
    desc: "We are the go-to real estate website developer. Virtual tours, CRM integration, and property listing management.",
    color: "blue"
  },
  { 
    icon: ShoppingBag, 
    name: "Retail & E-Commerce", 
    stat: "15% GDP", 
    desc: "Top ecommerce website development company for omnichannel stores, inventory, and payments.",
    color: "orange"
  },
  { 
    icon: Heart, 
    name: "Medical & Healthcare", 
    stat: "5% GDP", 
    desc: "Medical website design agency specializing in telemedicine, booking, and patient portals.",
    color: "green"
  },
  { 
    icon: Cpu, 
    name: "Tech & SaaS", 
    stat: "7% GDP", 
    desc: "SaaS website design agency for startups. Scalable landing pages and product demos.",
    color: "blue"
  },
  { 
    icon: Factory, 
    name: "Manufacturing", 
    stat: "9% GDP", 
    desc: "B2B web design agency solutions. Supply chain tracking, distributor portals, and inventory systems.",
    color: "orange"
  },
];

const Industries: React.FC<IndustriesProps> = ({ onOpenModal }) => {
  return (
    <section id="industries" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 z-0">
         {/* Radial Gradient Overlay */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0F172A_70%)] opacity-80"></div>
         
         {/* Grid Pattern */}
         <div className="absolute inset-0 opacity-[0.05]" style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
         }}></div>
         
         {/* Animated Particle Field (Simulated) */}
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
         <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
         <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-secondary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
         <div className="absolute top-10 right-20 w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
         <div className="absolute inset-0 noise-bg opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-white leading-tight">
             Industries We Serve <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">in Dubai</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => {
            const gradientClass = gradients[item.color as keyof typeof gradients];
            
            return (
              <button
                type="button"
                key={idx}
                onClick={onOpenModal}
                aria-label={`Learn more about ${item.name} industry solutions`}
                className="group relative bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col h-full animate-fade-up cursor-pointer text-left"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* GDP Pill */}
                <div className="absolute top-4 right-4 bg-[#FF6B35] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg z-20">
                    {item.stat}
                </div>

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300 relative z-10`}>
                    <item.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-[#FF6B35] transition-colors">{item.name}</h3>
                <p className="text-[14px] text-white/70 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                
                {/* Hover Interaction Element */}
                <span className="flex items-center text-[#FF6B35] text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Solutions <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
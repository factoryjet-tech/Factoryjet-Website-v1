import React from 'react';
import { Container, Section } from '../ui/UIComponents';
import { SOLUTIONS } from '../../lib/constants';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

// Configuration for each card based on the spec
const CARD_CONFIGS = [
  {
    // Card 1: Total Design Freedom (Large)
    gradient: "bg-gradient-to-br from-[#0052CC]/[0.04] to-transparent", // Linear TL
    iconColor: "text-[#0052CC]",
    iconBg: "bg-[#0052CC]/[0.08]",
    badgeColor: "bg-[#0052CC]/[0.15]",
    minHeight: "min-h-[420px]", 
  },
  {
    // Card 2: Clean Code (Standard)
    gradient: "bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]",
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#10B981]/[0.08]",
    badgeColor: "bg-[#10B981]/[0.15]",
    minHeight: "min-h-[320px]",
  },
  {
    // Card 3: Marketing Agility (Standard)
    gradient: "bg-gradient-to-t from-[#FF6B35]/[0.04] to-transparent", // Linear Bottom
    iconColor: "text-[#FF6B35]",
    iconBg: "bg-[#FF6B35]/[0.08]",
    badgeColor: "bg-[#FF6B35]/[0.15]",
    minHeight: "min-h-[320px]",
  },
  {
    // Card 4: Enterprise Infra (Large)
    gradient: "bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.06),transparent_70%)]",
    iconColor: "text-[#0052CC]",
    iconBg: "bg-[#0052CC]/[0.08]",
    badgeColor: "bg-[#0052CC]/[0.15]",
    minHeight: "min-h-[420px]",
  }
];

// Layout split for Desktop Masonry Effect (Col 1: Tall+Short, Col 2: Short+Tall)
const COL_1_INDICES = [0, 2]; 
const COL_2_INDICES = [1, 3];

const SolutionCard: React.FC<{ index: number }> = ({ index }) => {
    const solution = SOLUTIONS[index];
    const config = CARD_CONFIGS[index];
    
    // Feature list for Card 4 (Enterprise)
    const isEnterpriseCard = index === 3;
    const enterpriseFeatures = [
        "AWS Hosting (Fastly CDN)",
        "SOC 2 Type II Compliance",
        "99.99% Uptime SLA",
        "Free SSL Certificates"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1], duration: 0.6 }}
            whileHover={{ y: -4 }}
            className={cn(
                "group relative bg-white rounded-[24px] p-8 md:p-12 border border-[#0F172A]/[0.08] overflow-hidden transition-all duration-400 cursor-default",
                "hover:shadow-[0_20px_40px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.06)]",
                config.minHeight
            )}
        >
            {/* Unique Card Background Gradient */}
            <div className={cn("absolute inset-0 opacity-100 transition-opacity duration-500", config.gradient)} />
            
            {/* Hover Gradient Overlay */}
            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-current text-inherit pointer-events-none mix-blend-overlay")} />

            {/* Decorative Corner Badge */}
            <div className={cn(
                "absolute top-0 right-0 w-[60px] h-[60px] rounded-bl-[24px] pointer-events-none opacity-15",
                config.badgeColor
            )} />

            {/* Animated Icon */}
            <div className={cn(
                "relative w-[72px] h-[72px] rounded-full flex items-center justify-center mb-8",
                config.iconBg
            )}>
                <solution.icon 
                    className={cn("w-10 h-10 transition-transform duration-500 group-hover:rotate-[5deg]", config.iconColor)} 
                    strokeWidth={1.5}
                />
            </div>

            <div className="relative z-10">
                <h3 className="text-[26px] font-semibold text-[#0F172A] mb-3">
                    {solution.title}
                </h3>
                
                <p className="text-[17px] text-[#334155] leading-[1.7] mb-6 font-normal">
                    {solution.description}
                </p>

                {isEnterpriseCard && (
                    <ul className="space-y-3 mt-8">
                        {enterpriseFeatures.map((feat, i) => (
                            <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex items-center gap-3 text-[15px] font-medium text-[#334155]"
                            >
                                <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0">
                                   <Check className="w-3.5 h-3.5 text-[#10B981]" strokeWidth={3} />
                                </div>
                                {feat}
                            </motion.li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

export default function SolutionSection() {
  return (
    <Section className="relative py-32 overflow-hidden">
        {/* Container Background: Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.03)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />

        {/* Decorative Blurs */}
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#10B981]/[0.08] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#FF6B35]/[0.06] rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-[900px] mx-auto mb-20">
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#10B981] font-semibold text-sm tracking-[0.1em] uppercase mb-3"
                >
                    The Solution
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-5 tracking-tight"
                >
                    Why US Businesses Are Migrating to Webflow
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#334155] text-xl md:text-[22px] font-normal max-w-[700px] mx-auto leading-relaxed"
                >
                    The visual platform that combines design freedom with enterprise performance
                </motion.p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                    {COL_1_INDICES.map(idx => (
                        <SolutionCard key={idx} index={idx} />
                    ))}
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                    {COL_2_INDICES.map(idx => (
                        <SolutionCard key={idx} index={idx} />
                    ))}
                </div>
            </div>
        </Container>
    </Section>
  )
}

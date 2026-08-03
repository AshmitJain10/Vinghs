import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Sparkles, Award } from 'lucide-react';

export default function WhyVinghs() {
  const differentiators = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#7ED957]" />,
      title: "Rigorously Tested",
      description: "Every batch undergoes 12-parameter lab verification for pH, carbonation, TSS, and zero microbiological contaminants.",
      border: "hover:border-[#5FBF3F]",
      badge: "Quality Guaranteed"
    },
    {
      icon: <Flame className="w-7 h-7 text-[#E12232]" />,
      title: "Bold Flavor Profiles",
      description: "Distinct, high-impact taste formulations engineered for maximal refreshment, from wild kiwi bursts to classic cola spices.",
      border: "hover:border-[#D71E28]",
      badge: "Signature Formulations"
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#5FBF3F]" />,
      title: "Zero Compromise Ingredients",
      description: "Formulated with purified reverse-osmosis water, premium caffeine sources, natural botanicals, and zero artificial filler.",
      border: "hover:border-[#5FBF3F]",
      badge: "Pure Craft"
    },
    {
      icon: <Award className="w-7 h-7 text-[#C9CDD3]" />,
      title: "Proudly Crafted",
      description: "Modern bottling architecture adhering to global standards for energy drinks, artisanal colas, and 0.0% ABV non-alcoholic beers.",
      border: "hover:border-[#C9CDD3]",
      badge: "World-Class Standard"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-bold text-[#D71E28] mb-3"
          >
            The VINGHS Advantage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E12232] via-[#F5F5F5] to-[#7ED957]">VINGHS</span>
          </motion.p>
        </div>

        {/* 4 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card border border-[#232326] ${item.border} rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#0B0B0D] border border-[#232326] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A5] block mb-2">
                  {item.badge}
                </span>

                <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A0A0A5] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

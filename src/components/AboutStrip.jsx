import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Droplets } from 'lucide-react';

export default function AboutStrip() {
  const trustBadges = [
    {
      icon: <Droplets className="w-5 h-5 text-[#C9CDD3]" />,
      title: "0.0% Alcohol",
      subtitle: "Authentic Craft Brewing",
      color: "border-[#C9CDD3]/30",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D71E28]" />,
      title: "FSSAI Tested",
      subtitle: "100% Certified Safety",
      color: "border-[#D71E28]/30",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#5FBF3F]" />,
      title: "Premium Ingredients",
      subtitle: "Bold & Pure Taste",
      color: "border-[#5FBF3F]/30",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#121214] border-y border-[#232326] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Story Band */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest font-bold text-[#D71E28] mb-3"
          >
            The VINGHS Standard
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight"
          >
            PINGING THE FUTURE OF REFRESHMENT WITH UNCOMPROMISING FORMULATION AND INTENSE FLAVOR CRAFT.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-[#A0A0A5] leading-relaxed font-normal"
          >
            VINGHS stands at the intersection of quality, bold taste, and continuous innovation. From explosive high-vitality energy blends to artisanal colas and non-alcoholic craft beers, every drop is rigorously tested and bottled to perfection.
          </motion.p>
        </div>

        {/* 3 Stat/Trust Badges */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={`p-6 rounded-2xl glass-card border ${badge.color} hover:bg-[#1A1A1D] transition-all duration-300 flex items-center space-x-4`}
            >
              <div className="p-3 rounded-xl bg-[#0B0B0D] border border-[#232326]">
                {badge.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{badge.title}</h3>
                <p className="text-xs text-[#A0A0A5] tracking-wide mt-0.5">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-40 filter contrast-125 saturate-110"
        >
          <source src="/assets/Double Power energy drink video.mp4" type="video/mp4" />
          <source src="/assets/Cola.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Gradient Overlay for optimal contrast & text readability */}
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/90 via-[#0B0B0D]/60 to-[#0B0B0D]/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-16">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-[#232326] mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D71E28] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D71E28]"></span>
          </span>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C9CDD3]">
            Modern Premium Beverage House
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-none"
        >
          Bold Flavors.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E12232] via-[#F5F5F5] to-[#7ED957]">
            Real Refreshment.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-[#A0A0A5] max-w-2xl mx-auto font-light leading-relaxed"
        >
          Engineered for peak taste and uncompromised vitality. Discover VINGHS — home to high-energy formulations, classic craft colas, and 0.0% non-alcoholic fruit beers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 text-sm uppercase tracking-widest font-bold text-white bg-[#D71E28] hover:bg-[#E12232] rounded-full transition-all duration-300 box-shadow-red hover:scale-105 active:scale-95 text-center flex items-center justify-center space-x-2"
          >
            <Zap className="w-4 h-4" />
            <span>Explore Products</span>
          </a>

          <a
            href="#quality"
            className="w-full sm:w-auto px-8 py-4 text-sm uppercase tracking-widest font-semibold text-[#F5F5F5] glass-card hover:bg-[#232326] border border-[#232326] hover:border-[#C9CDD3] rounded-full transition-all duration-300 text-center flex items-center justify-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#7ED957]" />
            <span>Quality Certification</span>
          </a>
        </motion.div>

        {/* Quick Highlights Band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto border-t border-[#232326] pt-6 text-center"
        >
          <div>
            <span className="block text-xl font-bold text-white">0.0%</span>
            <span className="text-xs uppercase tracking-wider text-[#A0A0A5]">Non-Alcoholic</span>
          </div>
          <div className="border-x border-[#232326]">
            <span className="block text-xl font-bold text-[#E12232]">250ml</span>
            <span className="text-xs uppercase tracking-wider text-[#A0A0A5]">Perfect Volume</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#7ED957]">100%</span>
            <span className="text-xs uppercase tracking-wider text-[#A0A0A5]">Lab Tested</span>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="p-2 rounded-full glass-card border border-[#232326] text-[#A0A0A5] hover:text-white transition-colors block"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}

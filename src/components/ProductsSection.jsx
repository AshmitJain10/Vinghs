import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, Sparkles, Shield, ChevronRight } from 'lucide-react';
import ProductModal from './ProductModal';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'dp-classic',
      name: 'Double Power Classic',
      subtitle: 'Energy Drink',
      category: 'Energy Drink',
      volume: '250ml Can',
      tagline: 'Unleash Double the Power.',
      image: '/assets/Double Power energy.jpeg',
      video: '/assets/Double Power energy drink video.mp4',
      accentType: 'red',
      accentBorder: 'group-hover:border-[#D71E28]',
      glowClass: 'group-hover:shadow-[0_0_30px_rgba(215,30,40,0.3)]',
      badgeText: 'High Vitality',
      description: 'Double Power Classic is formulated to unleash peak physical performance and intense mental focus. Engineered with premium taurine, B-complex vitamins, and a razor-sharp berry-citrus taste profile.',
      keyPoints: [
        'High-potency vitality boost for peak endurance',
        'Balanced B-Vitamin complex & Taurine formulation',
        'Crisp berry-citrus taste profile with clean finish',
        'Ideal for workouts, intense work sessions & late nights'
      ],
      flavorNotes: 'Sharp citrus entrance followed by smooth wild berry sweetness and zero heavy aftertaste.'
    },
    {
      id: 'dp-african-kiwi',
      name: 'Double Power African Kiwi',
      subtitle: 'Caffeinated Beverage',
      category: 'Caffeinated Beverage',
      volume: '250ml Bottle',
      tagline: 'Bold. Fresh. Energized.',
      image: '/assets/African Kiwi.jpeg',
      video: '/assets/African Kiwi.mp4',
      accentType: 'green',
      accentBorder: 'group-hover:border-[#5FBF3F]',
      glowClass: 'group-hover:shadow-[0_0_30px_rgba(95,191,63,0.3)]',
      badgeText: 'Tropical Vitality',
      description: 'Double Power African Kiwi brings exotic tropical refreshment combined with a smooth caffeinated kick. Extracted with vibrant kiwi essence and crisp citrus undertones.',
      keyPoints: [
        'Exotic tropical kiwi flavor profile',
        'Clean caffeinated surge without the jitter',
        'Infused with essential electrolytes for hydration',
        'Vibrant green signature glass bottle packaging'
      ],
      flavorNotes: 'Tangy tropical kiwi burst leading to subtle green apple crispness and a refreshing finish.'
    },
    {
      id: 'viraaj-cola',
      name: 'Viraaj Cola',
      subtitle: 'Premium Artisanal Cola',
      category: 'Artisanal Cola',
      volume: '250ml Glass Bottle',
      tagline: 'Pure Refreshment · Premium Taste.',
      image: '/assets/Cola.jpeg',
      video: '/assets/Cola.mp4',
      accentType: 'red',
      accentBorder: 'group-hover:border-[#E12232]',
      glowClass: 'group-hover:shadow-[0_0_30px_rgba(225,34,50,0.3)]',
      badgeText: 'Classic Craft',
      description: 'Viraaj Cola is crafted using authentic botanical kola nut extracts and warm spices. Delivers micro-sparkling carbonation and a dark, rich caramel body with silver metallic details.',
      keyPoints: [
        'Micro-bubble carbonation for intense fizz',
        'Aromatic kola spice recipe with natural botanicals',
        'Premium glass bottle with silver metallic motifs',
        'Zero artificial aftertaste — pure refreshment'
      ],
      flavorNotes: 'Rich cinnamon-vanilla kola spices, micro-sparkling fizz, and a deeply satisfying caramel finish.'
    },
    {
      id: 'fruit-beer-range',
      name: 'Fruit Beer Range',
      subtitle: '0.0% Non-Alcoholic Craft Duo',
      category: 'Non-Alcoholic (0.0% ABV)',
      volume: '250ml Amber Glass Duo',
      tagline: 'Craft Taste. Zero Alcohol.',
      image: '/assets/Fruit Beer.jpeg',
      video: '/assets/Fruit Beer.mp4',
      accentType: 'silver',
      accentBorder: 'group-hover:border-[#C9CDD3]',
      glowClass: 'group-hover:shadow-[0_0_30px_rgba(201,205,211,0.25)]',
      badgeText: '0.0% ABV Craft',
      description: 'The VINGHS Fruit Beer Range offers two distinct 0.0% ABV non-alcoholic variants: Cranberry Beer and Malty Beer. Encased in amber glass with silver-foil crown caps for craft beer enthusiasts.',
      keyPoints: [
        'Guaranteed 0.0% ABV non-alcoholic craft formulation',
        'Dual collection: Tart Cranberry & Rich Malty Roast',
        'Amber glass bottles sealed with silver-foil caps',
        'Authentic head retention & complex craft palate'
      ],
      flavorNotes: 'Cranberry: Tart, crisp fruit notes. Malty: Warm roasted barley depth with smooth caramel malt notes.'
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-[#232326] mb-3"
          >
            <Zap className="w-3.5 h-3.5 text-[#D71E28]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#C9CDD3]">
              The Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E12232] via-[#F5F5F5] to-[#7ED957]">Every Moment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#A0A0A5] font-light"
          >
            From explosive vitality blends to classic artisanal cola and zero-proof craft brews — explore our 4 signature product lines.
          </motion.p>
        </div>

        {/* 2x2 Product Grid (stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((item, index) => {
            const isRed = item.accentType === 'red';
            const isGreen = item.accentType === 'green';

            const accentTextClass = isRed
              ? 'text-[#E12232]'
              : isGreen
              ? 'text-[#7ED957]'
              : 'text-[#C9CDD3]';

            const badgeColor = isRed
              ? 'border-[#D71E28]/40 bg-[#D71E28]/10 text-[#E12232]'
              : isGreen
              ? 'border-[#5FBF3F]/40 bg-[#5FBF3F]/10 text-[#7ED957]'
              : 'border-[#C9CDD3]/40 bg-[#C9CDD3]/10 text-[#C9CDD3]';

            const buttonStyle = isRed
              ? 'bg-[#D71E28] hover:bg-[#E12232] text-white box-shadow-red'
              : isGreen
              ? 'bg-[#5FBF3F] hover:bg-[#7ED957] text-black font-bold box-shadow-green'
              : 'bg-gradient-to-r from-[#E2E8F0] via-[#C9CDD3] to-[#8A8D93] text-black font-bold box-shadow-silver';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative glass-card border border-[#232326] rounded-3xl p-6 sm:p-8 transition-all duration-300 ${item.accentBorder} ${item.glowClass} flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Accent Mesh */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40 ${
                    isRed ? 'bg-[#D71E28]' : isGreen ? 'bg-[#5FBF3F]' : 'bg-[#C9CDD3]'
                  }`}
                />

                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border ${badgeColor}`}>
                      {item.badgeText}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A0A0A5]">
                      {item.volume}
                    </span>
                  </div>

                  {/* Product Media Canvas */}
                  <div className="relative my-4 py-6 w-full flex items-center justify-center min-h-[240px] bg-[#0B0B0D]/60 rounded-2xl border border-[#232326]/60 overflow-hidden group-hover:border-[#232326]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-56 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay Prompt */}
                    <div className="absolute inset-0 bg-[#0B0B0D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-full glass-card border border-white/20 text-xs font-bold uppercase tracking-wider text-white flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details & Reel</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Title & Subtitle */}
                  <div className="mt-4">
                    <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight group-hover:text-white">
                      {item.name}
                    </h3>
                    <p className={`text-xs uppercase tracking-widest font-semibold mt-1 ${accentTextClass}`}>
                      {item.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-[#A0A0A5] line-clamp-2 leading-relaxed">
                      "{item.tagline}" — {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="mt-8 pt-4 border-t border-[#232326] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#A0A0A5]">
                    250ml Pack
                  </span>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest transition-all duration-200 flex items-center space-x-2 ${buttonStyle}`}
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

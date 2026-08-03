import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Shield, CheckCircle2, Play, Volume2, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  const isRed = product.accentType === 'red';
  const isGreen = product.accentType === 'green';

  const accentColorClass = isRed
    ? 'text-[#E12232]'
    : isGreen
    ? 'text-[#7ED957]'
    : 'text-[#C9CDD3]';

  const badgeBgClass = isRed
    ? 'bg-[#D71E28]/10 text-[#E12232] border-[#D71E28]/30'
    : isGreen
    ? 'bg-[#5FBF3F]/10 text-[#7ED957] border-[#5FBF3F]/30'
    : 'bg-[#C9CDD3]/10 text-[#C9CDD3] border-[#C9CDD3]/30';

  const btnBgClass = isRed
    ? 'bg-[#D71E28] hover:bg-[#E12232] box-shadow-red'
    : isGreen
    ? 'bg-[#5FBF3F] hover:bg-[#7ED957] box-shadow-green text-black font-bold'
    : 'bg-gradient-to-r from-[#E2E8F0] via-[#C9CDD3] to-[#8A8D93] text-black font-bold box-shadow-silver';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0B0D]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-card border border-[#232326] rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0B0B0D]/80 text-[#A0A0A5] hover:text-white border border-[#232326] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Media Column (Image & Video Loop) */}
            <div className="relative bg-[#0B0B0D] p-6 sm:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#232326]">
              {/* Product Video Loop if available */}
              {product.video ? (
                <div className="relative w-full aspect-square max-w-xs rounded-2xl overflow-hidden border border-[#232326] shadow-lg mb-4 group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={product.video} type={product.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                  </video>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#0B0B0D]/80 backdrop-blur-sm border border-[#232326] text-[10px] text-[#A0A0A5] uppercase tracking-wider font-semibold">
                    <Play className="w-3 h-3 text-[#D71E28]" />
                    <span>Studio Reel</span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full aspect-square max-w-xs flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-72 object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Still Render Image Preview */}
              <div className="w-full flex items-center justify-between pt-4 border-t border-[#232326]/60 text-xs text-[#A0A0A5]">
                <span>Volume: <strong className="text-white">{product.volume}</strong></span>
                <span>Category: <strong className="text-white">{product.category}</strong></span>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${badgeBgClass}`}>
                    {product.category}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#A0A0A5] font-semibold">
                    {product.volume}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                  {product.name}
                </h3>
                
                {/* Tagline */}
                <p className={`text-sm font-semibold tracking-wide italic mt-1 ${accentColorClass}`}>
                  "{product.tagline}"
                </p>

                {/* Full Description */}
                <p className="mt-4 text-sm text-[#A0A0A5] leading-relaxed">
                  {product.description}
                </p>

                {/* Key Selling Points / Features */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2">
                    Key Highlights & Formulations
                  </h4>
                  {product.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-2.5 text-xs text-[#F5F5F5]">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accentColorClass}`} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Flavor Profile Notes */}
                <div className="mt-6 p-4 rounded-xl bg-[#0B0B0D] border border-[#232326]">
                  <span className="text-[11px] uppercase tracking-widest text-[#A0A0A5] font-bold block mb-1">
                    Flavor Profile Notes
                  </span>
                  <p className="text-xs text-[#F5F5F5]">
                    {product.flavorNotes}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#232326] flex items-center space-x-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className={`flex-1 py-3 px-4 rounded-xl text-center text-xs uppercase tracking-widest transition-all ${btnBgClass}`}
                >
                  Inquire Distribution
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-[#A0A0A5] glass-card border border-[#232326] hover:text-white hover:bg-[#232326] transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

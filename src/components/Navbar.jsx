import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-[#232326] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0D]/90 via-[#0B0B0D]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center space-x-2.5 sm:space-x-3 text-2xl sm:text-3xl font-black tracking-wider uppercase text-white focus:outline-none"
          >
            <img
              src="/assets/vinghs-logo.png"
              alt="VINGHS Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_12px_rgba(215,30,40,0.35)] group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(215,30,40,0.6)] transition-all duration-300"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#C9CDD3]">
              VINGHS
            </span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D71E28] group-hover:bg-[#7ED957] transition-colors duration-300"></span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-semibold text-[#A0A0A5] hover:text-white hover:text-glow-red transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#products"
              className="inline-flex items-center px-4 py-2 text-xs uppercase tracking-widest font-bold text-white bg-[#D71E28] hover:bg-[#E12232] rounded-full transition-all duration-200 box-shadow-red hover:scale-105 active:scale-95"
            >
              <span>Explore</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#F5F5F5] hover:text-white hover:bg-[#1A1A1D] transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-nav border-b border-[#232326] px-4 pt-4 pb-6 space-y-3 animate-fadeIn"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold uppercase tracking-wider text-[#F5F5F5] hover:bg-[#1A1A1D] hover:text-[#D71E28] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 text-sm uppercase tracking-widest font-bold text-white bg-[#D71E28] hover:bg-[#E12232] rounded-lg transition-all box-shadow-red"
            >
              Explore Products
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

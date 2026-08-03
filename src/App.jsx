import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import ProductsSection from './components/ProductsSection';
import QualitySection from './components/QualitySection';
import WhyVinghs from './components/WhyVinghs';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About / Brand Story Strip */}
        <AboutStrip />

        {/* Section 3: Product Cards Grid & Modals */}
        <ProductsSection />

        {/* Section 4: Certificate of Analysis (Quality & Safety) */}
        <QualitySection />

        {/* Section 5: Differentiators / Why VINGHS */}
        <WhyVinghs />
      </main>

      {/* Section 6: Contact & Footer */}
      <ContactFooter />
    </div>
  );
}

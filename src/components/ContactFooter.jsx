import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', product: 'Double Power Classic', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    console.log('VINGHS Contact Form Submitted:', formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0B0B0D] pt-24 pb-12 border-t border-[#232326] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#232326]">
          
          {/* Left Column: Form Info & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-widest font-bold text-[#D71E28] block mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                Connect with <span className="text-[#D71E28]">VINGHS</span>
              </h2>
              <p className="mt-3 text-sm text-[#A0A0A5] leading-relaxed">
                Whether you are interested in distribution partnerships, retail stockists, or corporate orders — reach out to our team today.
              </p>
            </motion.div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-sm text-[#F5F5F5]">
                <div className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326]">
                  <Mail className="w-4 h-4 text-[#D71E28]" />
                </div>
                <span>contact@vinghs.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#F5F5F5]">
                <div className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326]">
                  <Phone className="w-4 h-4 text-[#7ED957]" />
                </div>
                <span>+1 (800) 846-447</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#F5F5F5]">
                <div className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326]">
                  <MapPin className="w-4 h-4 text-[#C9CDD3]" />
                </div>
                <span>VINGHS Beverage HQ, Premium Industrial Park</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#A0A0A5] block mb-3">
                Follow Us
              </span>
              <div className="flex items-center space-x-3">
                {[
                  { icon: <Instagram className="w-4 h-4" />, href: "#" },
                  { icon: <Twitter className="w-4 h-4" />, href: "#" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                  { icon: <Youtube className="w-4 h-4" />, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-3 rounded-xl bg-[#1A1A1D] border border-[#232326] text-[#A0A0A5] hover:text-white hover:border-[#D71E28] hover:bg-[#D71E28]/10 transition-all duration-200"
                    aria-label="Social link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card border border-[#232326] rounded-3xl p-6 sm:p-8 relative"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#5FBF3F]/20 border border-[#5FBF3F] flex items-center justify-center mx-auto text-[#7ED957]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase">Thank You!</h3>
                  <p className="text-sm text-[#A0A0A5] max-w-md mx-auto">
                    Your inquiry has been received. A VINGHS representative will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', product: 'Double Power Classic', message: '' }); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326] text-xs font-bold uppercase tracking-widest text-white hover:bg-[#232326]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                    Send an Inquiry
                  </h3>

                  {error && (
                    <div className="p-3 rounded-xl bg-[#D71E28]/10 border border-[#D71E28]/40 text-xs text-[#E12232]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A0A0A5] font-semibold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[#232326] text-sm text-white placeholder-[#A0A0A5]/50 focus:border-[#D71E28] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A0A0A5] font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[#232326] text-sm text-white placeholder-[#A0A0A5]/50 focus:border-[#D71E28] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A5] font-semibold mb-1.5">
                      Product Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[#232326] text-sm text-white focus:border-[#D71E28] focus:outline-none transition-colors"
                    >
                      <option value="Double Power Classic">Double Power Classic (Energy Drink)</option>
                      <option value="Double Power African Kiwi">Double Power African Kiwi (Caffeinated)</option>
                      <option value="Viraaj Cola">Viraaj Cola (Artisanal Cola)</option>
                      <option value="Fruit Beer Range">Fruit Beer Range (0.0% Non-Alcoholic Duo)</option>
                      <option value="All Products / Distribution">All Products / General Distribution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A5] font-semibold mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your distribution interest, location, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[#232326] text-sm text-white placeholder-[#A0A0A5]/50 focus:border-[#D71E28] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-xs uppercase tracking-widest font-bold text-white bg-[#D71E28] hover:bg-[#E12232] transition-all duration-200 box-shadow-red flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A0A5]">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-black uppercase text-white tracking-wider">
              VINGHS
            </span>
            <span className="text-[#232326]">|</span>
            <span>© {new Date().getFullYear()} VINGHS Beverage House. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#quality" className="hover:text-white transition-colors">Quality</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#1A1A1D] border border-[#232326] hover:text-white hover:border-[#D71E28] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

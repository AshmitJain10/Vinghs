import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', product: 'Double Power Classic', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const createMailtoLink = (data) => {
    const subject = encodeURIComponent(`VINGHS Trade Inquiry: ${data.product || 'General'} - ${data.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hello VINGHS Team,\n\nI would like to submit an inquiry:\n\nName: ${data.name}\nEmail: ${data.email}\nProduct Interest: ${data.product}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
    );
    return `mailto:vinghs2026@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
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
    setIsSubmitting(true);

    try {
      // Send directly to vinghs2026@gmail.com via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/vinghs2026@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          product: formData.product,
          message: formData.message,
          _subject: `New VINGHS Inquiry: ${formData.product} (from ${formData.name})`,
          _replyto: formData.email,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto redirect
        window.location.href = createMailtoLink(formData);
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Form submission encountered network error, falling back to mail client:', err);
      window.location.href = createMailtoLink(formData);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/assets/vinghs-logo.png"
                  alt="VINGHS Logo Emblem"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_20px_rgba(215,30,40,0.35)] shrink-0 hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#D71E28] block">
                    Get In Touch
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9CDD3]">
                    VINGHS EXIM LIMITED
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                Connect with <span className="text-[#D71E28]">VINGHS</span>
              </h2>
              <p className="mt-3 text-sm text-[#A0A0A5] leading-relaxed">
                Whether you are interested in distribution partnerships, retail stockists, or corporate orders — reach out to our team today.
              </p>
            </motion.div>

            {/* Official Contact Details */}
            <div className="space-y-3.5 pt-2">
              <a
                href="mailto:vinghs2026@gmail.com"
                className="flex items-center space-x-3.5 p-3 rounded-2xl bg-[#141417] border border-[#232326] hover:border-[#D71E28]/60 hover:bg-[#1A1A1E] text-sm text-[#F5F5F5] transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326] group-hover:border-[#D71E28] transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-[#D71E28]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#A0A0A5]">Email ID</span>
                  <span className="font-semibold text-white group-hover:text-[#D71E28] transition-colors truncate">
                    vinghs2026@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+917852023147"
                className="flex items-center space-x-3.5 p-3 rounded-2xl bg-[#141417] border border-[#232326] hover:border-[#7ED957]/60 hover:bg-[#1A1A1E] text-sm text-[#F5F5F5] transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326] group-hover:border-[#7ED957] transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-[#7ED957]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#A0A0A5]">Phone Number</span>
                  <span className="font-semibold text-white group-hover:text-[#7ED957] transition-colors">
                    +91 78520 23147
                  </span>
                </div>
              </a>

              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-[#141417] border border-[#232326] text-sm text-[#F5F5F5]">
                <div className="p-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C9CDD3]" />
                </div>
                <div className="flex flex-col leading-snug">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#A0A0A5] mb-0.5">Address</span>
                  <span className="font-semibold text-white">B-47 Sidharth nagar</span>
                  <span className="text-[#A0A0A5] text-xs">Jagatpura 302017, Jaipur (Raj.) India</span>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4">
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
                  <h3 className="text-2xl font-bold text-white uppercase">Inquiry Submitted!</h3>
                  <p className="text-sm text-[#A0A0A5] max-w-md mx-auto">
                    Your inquiry has been received and routed to <span className="text-white font-semibold">vinghs2026@gmail.com</span>. A VINGHS representative will reach out to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={createMailtoLink(formData)}
                      className="px-5 py-2.5 rounded-xl bg-[#D71E28] hover:bg-[#E12232] text-xs font-bold uppercase tracking-widest text-white transition-all box-shadow-red"
                    >
                      Open in Email App
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', product: 'Double Power Classic', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#1A1A1D] border border-[#232326] text-xs font-bold uppercase tracking-widest text-[#A0A0A5] hover:text-white hover:bg-[#232326] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                      Send an Inquiry
                    </h3>
                    <span className="text-[11px] text-[#A0A0A5]">
                      Direct to: <span className="text-[#D71E28]">vinghs2026@gmail.com</span>
                    </span>
                  </div>

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
                        required
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
                        required
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
                      <option value="All Products / General Distribution">All Products / General Distribution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A5] font-semibold mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your distribution interest, location, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[#232326] text-sm text-white placeholder-[#A0A0A5]/50 focus:border-[#D71E28] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-xs uppercase tracking-widest font-bold text-white bg-[#D71E28] hover:bg-[#E12232] transition-all duration-200 box-shadow-red flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending to vinghs2026@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-[#A0A0A5] pt-1">
                    <span>Delivers to: <span className="text-white">vinghs2026@gmail.com</span></span>
                    <a
                      href={createMailtoLink(formData)}
                      className="text-[#D71E28] hover:underline"
                    >
                      Open Email App directly →
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A0A5]">
          <div className="flex items-center space-x-3">
            <img src="/assets/vinghs-logo.png" alt="VINGHS Logo" className="w-8 h-8 object-contain shrink-0" />
            <span className="text-lg font-black uppercase text-white tracking-wider">
              VINGHS
            </span>
            <span className="text-[#232326]">|</span>
            <span>© {new Date().getFullYear()} VINGHS Exim Limited. All rights reserved.</span>
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


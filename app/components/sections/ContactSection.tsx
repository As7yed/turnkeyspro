'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const serviceAreas = [
  'Dallas', 'Fort Worth', 'Plano', 'Frisco', 'McKinney', 'Allen',
  'Houston', 'San Antonio'
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/20 border border-brand/30 rounded-full mb-6"
          >
            <Clock size={16} className="text-brand" />
            <span className="text-sm font-semibold text-brand">Same-day response guaranteed</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get a quote
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving Texas with rapid response. Fill out the form and we will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - 2 columns wide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 h-full relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand rounded-lg shadow-lg">
                    <Send size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
                    <p className="text-sm text-gray-600">We will respond within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="make-ready">Make-Ready Turnover</option>
                        <option value="handyman">Handyman Repairs</option>
                        <option value="refresh">Refresh & Finishes</option>
                        <option value="cleanout">Clean-out / Haul-away</option>
                        <option value="hvac">HVAC Care & Filters</option>
                        <option value="investor">Investor/PM Program</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="property-address" className="block text-sm font-semibold text-slate-900 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="property-address"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                      placeholder="123 Main St, Dallas, TX 75001"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Service Areas Sidebar - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-200 h-full relative overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand/20 to-blue-500/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-brand to-brand-dark rounded-xl shadow-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Service Areas
                    </h3>
                    <p className="text-xs text-gray-600">All across Texas</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Proudly serving major metro areas across Texas with same-day response
                </p>

                {/* Enhanced City Pills */}
                <div className="space-y-2 mb-8">
                  {serviceAreas.map((city, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 6, scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative flex items-center gap-3 p-3 bg-white hover:bg-transparent rounded-lg border-2 border-gray-200 hover:border-brand transition-all cursor-pointer">
                        <div className="p-2 bg-brand/10 group-hover:bg-brand rounded-lg transition-all">
                          <MapPin size={14} className="text-brand group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">
                          {city}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info - Enhanced */}
                <div className="space-y-3 pt-6 border-t-2 border-gray-200 mb-6">
                  <motion.a
                    href="tel:+10000000000"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 bg-white hover:bg-brand/5 rounded-lg border border-gray-200 hover:border-brand/30 transition-all group"
                  >
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Phone size={18} className="text-brand" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Call us</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">
                        +1 (000) 000-0000
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:info@turnkeypros.com"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 bg-white hover:bg-brand/5 rounded-lg border border-gray-200 hover:border-brand/30 transition-all group"
                  >
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Mail size={18} className="text-brand" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email us</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors break-all">
                        info@turnkeypros.com
                      </div>
                    </div>
                  </motion.a>
                </div>

                {/* Enhanced CTA box */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="relative p-5 bg-gradient-to-br from-brand/10 via-brand/5 to-blue-500/5 rounded-xl border-2 border-brand/20 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand/10 rounded-full blur-xl" />
                  <div className="relative z-10">
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      <span className="font-bold text-slate-900 block mb-1">Do not see your area?</span>
                      Contact us and we may still be able to help!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const serviceAreas = [
  'Dallas', 'Fort Worth', 'Plano', 'Frisco', 'McKinney', 'Allen',
  'Houston', 'San Antonio'
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-concrete relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-card-texture rounded-xl p-8 shadow-sm hover:shadow-xl transition-all h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
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
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
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
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Service Areas & Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-card-texture rounded-xl p-8 shadow-sm hover:shadow-xl transition-all h-full space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact & Service Areas</h3>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.a
                  href="tel:+10000000000"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-brand/5 border-2 border-transparent hover:border-brand transition-all"
                >
                  <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand group-hover:scale-110 transition-all">
                    <Phone size={24} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Call us</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
                      +1 (000) 000-0000
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@turnkeypros.com"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-brand/5 border-2 border-transparent hover:border-brand transition-all"
                >
                  <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand group-hover:scale-110 transition-all">
                    <Mail size={24} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Email us</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors break-all">
                      info@turnkeypros.com
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Service Areas */}
              <div className="pt-6 border-t border-gray-300">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="p-3 bg-brand/10 rounded-xl">
                    <MapPin size={24} className="text-brand" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Service Areas</h4>
                    <p className="text-xs text-gray-600">Proudly serving Texas</p>
                  </div>
                </motion.div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((city, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="px-4 py-2 bg-white hover:bg-brand text-slate-900 hover:text-white font-semibold text-sm rounded-full border-2 border-brand/30 hover:border-brand shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      {city}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const serviceAreas = [
  'Cleveland', 'Columbus', 'Cincinnati', 'Dayton', 'Youngstown',
  'DFW', 'Houston', 'San Antonio', 'Austin'
];

function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Form submission success
        setFormStatus('success');
        setFormMessage('Thank you! We\'ll get back to you within 24 hours.');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Oops! Something went wrong. Please try again or call us directly.');

      // Reset error message after 8 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 8000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-concrete section-depth relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get a quote
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Serving Ohio and expanding to Texas with rapid response. Fill out the form and we will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - 2 columns wide */}
          <div className="lg:col-span-2">
            <div className="bg-card-texture rounded-xl p-5 sm:p-8 shadow-sm hover:shadow-xl transition-all h-full">
              {formStatus === 'success' ? (
                /* Success State - Full Form Replacement */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center text-center py-12 sm:py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="text-green-600" size={48} />
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3"
                  >
                    Message Sent Successfully!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-base sm:text-lg text-gray-700 mb-2 max-w-md"
                  >
                    Thank you for reaching out to TurnKey Pros!
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base text-gray-600 mb-8 max-w-md"
                  >
                    We've received your request and will get back to you within 24 hours.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => {
                      setFormStatus('idle');
                      setFormMessage('');
                    }}
                    className="px-8 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <Send size={20} />
                    Send Another Message
                  </motion.button>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xs text-gray-500 mt-6"
                  >
                    Need immediate assistance? Call us at <a href="tel:+10000000000" className="text-brand font-semibold hover:underline">+1 (000) 000-0000</a>
                  </motion.p>
                </motion.div>
              ) : (
                /* Form State */
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a message</h3>

                  {/* Error Message Only */}
                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                      <p className="text-red-800 font-semibold">{formMessage}</p>
                    </motion.div>
                  )}

                  <form
                    name="contact"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
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
                      name="email"
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
                      name="phone"
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
                      name="service"
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
                    name="property-address"
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
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-brand/5 border-2 border-brand/20 rounded-lg">
                  <input
                    type="checkbox"
                    id="request-estimate"
                    name="request-estimate"
                    value="yes"
                    className="w-5 h-5 text-brand border-gray-300 rounded focus:ring-2 focus:ring-brand cursor-pointer"
                  />
                  <label htmlFor="request-estimate" className="text-sm font-semibold text-slate-900 cursor-pointer">
                    I would like to receive a free estimate for this project
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full px-8 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
                </>
              )}
            </div>
          </div>

          {/* Service Areas & Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card-texture rounded-xl p-5 sm:p-8 shadow-sm hover:shadow-xl transition-all h-full space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Contact & Service Areas</h3>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:+10000000000"
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
                </a>

                <a
                  href="mailto:info@turnkeyprosusa.com"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-brand/5 border-2 border-transparent hover:border-brand transition-all"
                >
                  <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand group-hover:scale-110 transition-all">
                    <Mail size={24} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Email us</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors break-all">
                      info@turnkeyprosusa.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Service Areas */}
              <div className="pt-6 border-t border-gray-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand/10 rounded-xl">
                    <MapPin size={24} className="text-brand" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Service Areas</h4>
                    <p className="text-xs text-gray-600">Ohio-based, now serving Texas too</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((city, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white hover:bg-brand text-slate-900 hover:text-white font-semibold text-sm rounded-full border-2 border-brand/30 hover:border-brand shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ContactSection);

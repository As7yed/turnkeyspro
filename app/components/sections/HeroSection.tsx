'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-concrete overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="flex items-center gap-2 text-white text-sm">
              <Clock size={16} className="text-brand" />
              <span>Same-day response</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2 text-white text-sm">
              <Shield size={16} className="text-brand" />
              <span>Licensed & insured</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2 text-white text-sm">
              <Star size={16} className="text-brand" />
              <span>Satisfaction guaranteed</span>
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Make-Ready & Handyman Services
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Residential and commercial property services. Make-ready turnovers, handyman repairs,
            refresh projects, and clean-outs—delivered with efficiency and ease.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Get started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="tel:+10000000000"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-all"
            >
              Call +1 (000) 000-0000
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">Experience</div>
              <div className="text-white text-lg font-semibold">Trusted Local Team</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">Serving</div>
              <div className="text-white text-lg font-semibold">Homes • PMs • CRE</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">Commitment</div>
              <div className="text-white text-lg font-semibold">Quality Work</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/90 pointer-events-none" />
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock, Shield, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-concrete overflow-hidden">
      {/* Background Logo Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/OrangeHouseRemoveds.jpg"
          alt=""
          fill
          className="object-cover opacity-150"
          priority
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/55 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Badges - individual pills on mobile, single bar on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            {/* Mobile: individual pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:hidden">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-2 text-white text-xs">
                <Clock size={14} className="text-brand" />
                Same-day response
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-2 text-white text-xs">
                <Shield size={14} className="text-brand" />
                Licensed & insured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-2 text-white text-xs">
                <Star size={14} className="text-brand" />
                Satisfaction guaranteed
              </span>
            </div>
            {/* Desktop: single bar */}
            <div className="hidden sm:inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
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
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Make-Ready & Handyman Services
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Residential and commercial property services. Make-ready turnovers, handyman repairs,
            refresh projects, and clean-outs—delivered with efficiency and ease.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              Get started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="tel:+10000000000"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-all text-center"
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
            className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-gray-400 text-xs sm:text-sm mb-1">Experience</div>
              <div className="text-white text-sm sm:text-lg font-semibold">Trusted Local Team</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs sm:text-sm mb-1">Serving</div>
              <div className="text-white text-sm sm:text-lg font-semibold">Homes • PMs • CRE</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs sm:text-sm mb-1">Commitment</div>
              <div className="text-white text-sm sm:text-lg font-semibold">Quality Work</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
} from 'lucide-react';

const whyUsReasons = [
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Same-day and next-day availability to minimize vacancy time and keep your units turning.',
  },
  {
    icon: Shield,
    title: 'Professional Team',
    description: 'Uniformed, background-checked technicians held to a consistent standard on every property, every time.',
  },
  {
    icon: Users,
    title: 'Portfolio-Ready',
    description: 'Built for operators managing multiple properties. Whether you have 5 units or 500, we deliver reliable communication and predictable pricing.',
  },
  {
    icon: CheckCircle,
    title: 'Full Accountability',
    description: 'One point of contact, complete accountability, and seamless coordination from work order to close-out.',
  },
];

function TrustSection() {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-stone-light section-depth relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            The Turnkey Experience
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Built for the demands of professional property management—reliable communication, consistent execution, and documented results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyUsReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all text-center"
                style={{ willChange: 'transform' }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand/10 rounded-full mb-4 sm:mb-6">
                  <Icon size={24} className="text-brand sm:hidden" />
                  <Icon size={32} className="text-brand hidden sm:block" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(TrustSection);

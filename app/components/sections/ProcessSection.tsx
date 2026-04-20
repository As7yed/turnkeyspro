'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'Submit Service Request',
    description: 'Submit a request online or by phone. Our team confirms scope and availability the same business day.',
  },
  {
    icon: FileText,
    number: '2',
    title: 'Scope and Confirm',
    description: 'We confirm scope, provide clear pricing, and align on timelines before any work begins.',
  },
  {
    icon: Wrench,
    number: '3',
    title: 'Execute with Precision',
    description: 'Our uniformed crew arrives on schedule, performs work to standard, and leaves the site clean.',
  },
  {
    icon: CheckCircle,
    number: '4',
    title: 'Review and Close',
    description: 'Final inspection, site documentation, and invoice delivered. Clean records for your portfolio.',
  },
];

function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20 bg-concrete section-depth relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            The Turnkey Process
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            A structured, repeatable process built for operators who need consistency across every property—from first contact to final close-out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-card-texture rounded-xl p-5 sm:p-8 shadow-sm hover:shadow-xl transition-all ml-2 mt-2 sm:ml-0 sm:mt-0"
                style={{ willChange: 'transform' }}
              >
                {/* Step number badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  {step.number}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-brand/10 rounded-lg mb-4">
                    <Icon size={32} className="text-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand/30" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ProcessSection);

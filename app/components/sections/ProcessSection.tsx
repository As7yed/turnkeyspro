'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'You reach out',
    description: 'Call, text, or submit a request. We respond the same day.',
  },
  {
    icon: FileText,
    number: '2',
    title: 'We scope & quote',
    description: 'Clear pricing, realistic timelines, transparent communication.',
  },
  {
    icon: Wrench,
    number: '3',
    title: 'We get it done',
    description: 'Professional crew, on-time arrival, quality workmanship.',
  },
  {
    icon: CheckCircle,
    number: '4',
    title: 'You approve & close',
    description: 'Walk-through, photos, final invoice. Simple and stress-free.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-concrete relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From the first call to the final punch list, we handle the logistics so you do not have to chase crews.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-card-texture rounded-xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            Start your project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

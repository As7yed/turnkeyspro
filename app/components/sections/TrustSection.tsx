'use client';

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
    description: 'Same-day and next-day services available to keep your projects moving.',
  },
  {
    icon: Shield,
    title: 'Professional Team',
    description: 'Skilled, background-checked experts. We arrive in uniform and leave the site clean.',
  },
  {
    icon: Users,
    title: 'Property-Focused',
    description: 'We speak your language—whether you manage 5 units or 500. Reliable communication, predictable pricing.',
  },
  {
    icon: CheckCircle,
    title: 'The TurnKey Experience',
    description: 'From the first call to the final punch list, we handle the logistics so you do not have to chase crews.',
  },
];

export default function TrustSection() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are built for reliability—clear communication, on-time arrivals, and clean job sites.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-texture rounded-xl p-8 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand/10 rounded-full mb-6">
                  <Icon size={32} className="text-brand" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

'use client';

import { motion } from 'framer-motion';
import {
  KeyRound,
  Hammer,
  PaintBucket,
  Trash2,
  Wind,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: KeyRound,
    title: 'Make-Ready Turnovers',
    items: [
      'Full unit turns',
      'Punch list repairs',
      'Deep cleaning coordination',
      'Lock & key changes',
      'Caulking & re-sealing',
      'Move-in/move-out inspections',
    ],
  },
  {
    icon: Hammer,
    title: 'Handyman Essentials',
    items: [
      'Drywall patching & texture',
      'Interior & exterior painting',
      'Door & trim repair',
      'Fixture installation',
      'Cabinet adjustments',
      'TV mounting & hardware install',
    ],
  },
  {
    icon: PaintBucket,
    title: 'Refresh & Finishes',
    items: [
      'Interior paint (walls, trim, doors)',
      'Cabinet touch-ups & hardware swaps',
      'LVP / laminate flooring',
      'Tile & grout refresh',
      'Light fixture upgrades',
      'Countertop repairs & sealing',
    ],
  },
  {
    icon: Trash2,
    title: 'Clean-outs & Haul-away',
    items: [
      'Junk removal',
      'Garage / basement clear-outs',
      'Construction debris',
      'Appliance haul-off',
      'Yard waste removal',
      'Donation drop-offs',
    ],
  },
  {
    icon: Wind,
    title: 'HVAC Care & Filters',
    items: [
      'Filter changes (standard & custom sizes)',
      'Condensate line flush & drain clearing',
      'Thermostat swaps & programming',
      'Light coil washing',
      'Return vent cleaning',
      'Filter subscription service',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Investor/PM Programs',
    items: [
      'Quarterly maintenance plans',
      'Portfolio-level scheduling',
      'Turn coordination & reporting',
      'Preventive service packages',
      'Preferred vendor pricing',
      'Dedicated account management',
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliable make-ready and handyman services for property managers, investors, and homeowners.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card-texture rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand/10 rounded-lg group-hover:bg-brand group-hover:scale-110 transition-all">
                    <Icon size={28} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                      <span className="text-brand mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            Get a quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}

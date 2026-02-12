'use client';

import React from 'react';
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

function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-stone-light section-depth relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Services
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Reliable make-ready and handyman services for property managers, investors, and homeowners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all"
                style={{ willChange: 'transform' }}
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

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            Request a quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ServicesGrid);

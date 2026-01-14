'use client';

import { motion } from 'framer-motion';
import { Building2, Home, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AudienceSelector() {
  return (
    <section id="investors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored services for property managers and homeowners alike
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Property Managers Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-brand cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-brand/10 rounded-xl group-hover:bg-brand group-hover:text-white transition-colors">
                <Building2 size={32} className="text-brand group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                For Property Managers
              </h3>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Tired of tenant issues, maintenance headaches, and vacancies?
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Volume pricing & Net terms available',
                'Automated "Turn Calendars" to decrease vacancy days',
                'Before/After photo reports for every job',
                'One call for junk removal, repairs, and cleaning',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-4 transition-all"
            >
              Contact Us for Volume Pricing
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Homeowners Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-brand cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-brand/10 rounded-xl group-hover:bg-brand group-hover:text-white transition-colors">
                <Home size={32} className="text-brand group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                For Homeowners
              </h3>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Professional repairs and maintenance for your personal residence.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Licensed & Insured professionals',
                'Same-day response available',
                'Background-checked experts you can trust',
                'Satisfaction guaranteed',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-4 transition-all"
            >
              Schedule a Service
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

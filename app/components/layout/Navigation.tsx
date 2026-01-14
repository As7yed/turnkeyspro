'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">
                TurnKey Pros
              </span>
              <span className="text-xs text-gray-600 tracking-wide">
                Make‑Ready • Handyman
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              How it works
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Why us
            </a>
            <a
              href="#coverage"
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Service areas
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-brand transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#services"
                className="block text-gray-700 hover:text-brand transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="block text-gray-700 hover:text-brand transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#why-us"
                className="block text-gray-700 hover:text-brand transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why us
              </a>
              <a
                href="#coverage"
                className="block text-gray-700 hover:text-brand transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service areas
              </a>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

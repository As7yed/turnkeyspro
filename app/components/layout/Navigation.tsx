'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/ResizedGrayLogo.png"
              alt="TurnKey Pros"
              width={200}
              height={67}
              className="h-10 sm:h-14 w-auto"
              priority
            />
          </a>

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
              The Turnkey Experience
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-1">
              <a
                href="#services"
                className="block text-gray-700 hover:text-brand hover:bg-gray-50 transition-colors font-medium py-3 px-3 rounded-lg text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="block text-gray-700 hover:text-brand hover:bg-gray-50 transition-colors font-medium py-3 px-3 rounded-lg text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#why-us"
                className="block text-gray-700 hover:text-brand hover:bg-gray-50 transition-colors font-medium py-3 px-3 rounded-lg text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Turnkey Experience
              </a>
              <a
                href="#coverage"
                className="block text-gray-700 hover:text-brand hover:bg-gray-50 transition-colors font-medium py-3 px-3 rounded-lg text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service areas
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default React.memo(Navigation);

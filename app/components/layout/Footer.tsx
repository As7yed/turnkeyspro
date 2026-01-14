'use client';

import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-concrete text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TurnKey Pros</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional make-ready and handyman services for property managers, investors, and homeowners across Texas.
            </p>
            <p className="text-sm text-gray-400">
              Licensed & Insured
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  Why us
                </a>
              </li>
              <li>
                <a
                  href="#coverage"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  Service areas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand flex-shrink-0" />
                <a
                  href="tel:+10000000000"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand flex-shrink-0" />
                <a
                  href="mailto:info@turnkeypros.com"
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  info@turnkeypros.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors"
              >
                Get a quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 TurnKey Pros. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Serving Dallas, Houston, San Antonio & Beyond
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

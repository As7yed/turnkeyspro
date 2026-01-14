'use client';

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

          {/* Service Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span className="text-gray-300">Same-day response</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span className="text-gray-300">Licensed & insured</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span className="text-gray-300">Professional crews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1">✓</span>
                <span className="text-gray-300">Satisfaction guaranteed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 TurnKey Pros. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Texas-based • Locally operated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

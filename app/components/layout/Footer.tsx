'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-concrete text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <Image
              src="/ResizedGrayLogo.png"
              alt="TurnKey Pros"
              width={200}
              height={67}
              className="h-12 sm:h-16 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional make-ready and handyman services for property managers, investors, and homeowners across Ohio.
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
                  The Turnkey Experience
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

          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Turnkey Pro Solutions</h4>
            <p className="text-gray-300 leading-relaxed">
              At TurnKey Pros, we specialize in delivering comprehensive property maintenance and make-ready solutions that property managers and homeowners can rely on. With expertise in everything from turnovers to handyman services, we combine modern efficiency with dependable service. Our commitment to excellence means we provide responsive support to handle your property needs quickly and professionally.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © 2026 TurnKey Pros. All rights reserved.
            </p>
            <p className="text-white/70 text-sm text-center md:text-right">
              Ohio-based • Locally operated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

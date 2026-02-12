'use client';

import dynamic from 'next/dynamic';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';

// Lazy load below-fold sections
const ServicesGrid = dynamic(() => import('./components/sections/ServicesGrid'), {
  loading: () => <div className="py-20 bg-stone-light min-h-[400px]" />,
});

const ProcessSection = dynamic(() => import('./components/sections/ProcessSection'), {
  loading: () => <div className="py-20 bg-concrete min-h-[400px]" />,
});

const TrustSection = dynamic(() => import('./components/sections/TrustSection'), {
  loading: () => <div className="py-20 bg-stone-light min-h-[400px]" />,
});

const ContactSection = dynamic(() => import('./components/sections/ContactSection'), {
  loading: () => <div className="py-20 bg-concrete min-h-[400px]" />,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <ServicesGrid />
        <div className="section-divider" />
        <ProcessSection />
        <div className="section-divider" />
        <TrustSection />
        <div className="section-divider" />
        <ContactSection />
        <div className="section-divider" />
      </main>
      <Footer />
    </>
  );
}

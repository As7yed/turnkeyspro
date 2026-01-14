import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesGrid from './components/sections/ServicesGrid';
import ProcessSection from './components/sections/ProcessSection';
import TrustSection from './components/sections/TrustSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

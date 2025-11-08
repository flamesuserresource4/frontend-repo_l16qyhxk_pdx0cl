import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import { AboutSection, ServicesSection, CaseStudiesSection, TestimonialsSection, FAQSection } from './components/Sections';

export default function App() {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '') || 'home';
      setRoute(hash);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (route === 'dashboard') {
    return (
      <div className="bg-white text-black min-h-screen">
        <Navbar />
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <footer className="py-10 text-center text-sm text-black/60">© {new Date().getFullYear()} Velodent</footer>
    </div>
  );
}

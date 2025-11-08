import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            AI Automation For Modern Dental Clinics
          </h1>
          <div className="relative w-full h-[360px] md:h-[520px]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="space-y-3">
            <p className="text-sm md:text-base text-black/80 max-w-3xl mx-auto leading-relaxed">
              “Transform Your Dental Practice Into A Fully Automated, Always-On Growth Engine.”
            </p>
            <a
              href="#book"
              className="inline-block px-6 py-3 border border-black rounded-md hover:opacity-70 transition-opacity"
            >
              Book Now
            </a>
            <p className="text-sm md:text-base text-black/70">
              Precision-built AI systems that streamline front desk, ops, and patient experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

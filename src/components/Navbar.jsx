import React from 'react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm md:text-base tracking-tight transition-opacity hover:opacity-70"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-6">
            <a href="#/" className="font-semibold tracking-tight text-lg md:text-xl select-none">
              Velodent
            </a>
            <nav className="hidden md:flex items-center gap-1">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#case-studies">Case Studies</NavItem>
              <NavItem href="#testimonials">Testimonials</NavItem>
              <NavItem href="#faq">FAQ</NavItem>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#/dashboard"
              className="px-4 py-2 text-sm md:text-base border border-black rounded-md hover:opacity-70 transition-opacity"
            >
              Dashboard
            </a>
            <a
              href="#book"
              className="px-4 py-2 text-sm md:text-base border border-black rounded-md hover:opacity-70 transition-opacity"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

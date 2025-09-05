'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-bold text-foreground">DREAM INKS</span>
            <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">TATTOO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Home
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Services
            </Link>
            <Link href="/gallery" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Gallery
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="rounded-md bg-gradient-to-r from-cyan-400 to-purple-600 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-black shadow-[0_0_28px_rgba(20,244,212,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_48px_rgba(124,58,237,0.55)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-md rounded-lg mt-4 p-4 sm:p-6 border border-gray-800/20">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/gallery" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link 
                href="/contact"
                className="rounded-md bg-gradient-to-r from-cyan-400 to-purple-600 px-4 py-2.5 text-sm font-semibold text-black shadow-[0_0_28px_rgba(20,244,212,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_48px_rgba(124,58,237,0.55)] mt-2 sm:mt-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
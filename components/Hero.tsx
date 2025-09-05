'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-left">
        <div className="max-w-4xl">
          {/* Small tagline */}
          <div className={`mb-6 ${mounted ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}>
            <span className="text-lg text-cyan-400 font-medium tracking-wide">
              YOUR SKIN, OUR CANVAS
            </span>
          </div>

          {/* Main heading */}
          <h1 className={`mb-8 ${mounted ? 'animate-fade-in-up animate-delay-200 opacity-0' : 'opacity-0'}`}>
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
              <span className="text-white">DREAM INKS</span>
            </div>
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="gradient-text">TATTOO STUDIO</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl ${
            mounted ? 'animate-fade-in-up animate-delay-400 opacity-0' : 'opacity-0'
          }`}>
            Masterful Artistry. Unique Designs. Tattoos that Last.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 ${
            mounted ? 'animate-fade-in-up animate-delay-600 opacity-0' : 'opacity-0'
          }`}>
            <button 
              onClick={scrollToBooking}
              className="gradient-button px-8 py-4 rounded-lg font-semibold text-white text-lg"
            >
              Book Your Session
            </button>
            <button 
              onClick={scrollToAbout}
              className="outline-button px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
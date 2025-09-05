'use client';

import { useEffect, useState } from 'react';

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 parallax-bg opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1300270/pexels-photo-1300270.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow ${
          mounted ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-white">About</span>
          <span className="text-red-500"> Dream Inks</span>
        </h1>
        
        <div className={`max-w-4xl mx-auto ${mounted ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <p className="font-elegant text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 italic leading-relaxed">
            "At Dream Inks Tattoo Studio, it's not just about ink. It's about creating memories, expressing who you are, and leaving a lasting mark on the world."
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Our artists combine creativity, skill, and passion to create tattoos that will stay with you forever. 
            Every piece tells a story, and we're here to help you tell yours with artistry that transcends the ordinary.
          </p>
        </div>
      </div>
    </section>
  );
}
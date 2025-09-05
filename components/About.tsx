'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const artists = [
  {
    id: 1,
    name: 'Marcus Rodriguez',
    role: 'Lead Artist & Founder',
    specialty: 'Traditional & Neo-Traditional',
    experience: '12 Years',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    bio: 'Marcus founded Dream Inks with a vision to revolutionize tattoo artistry. His bold traditional style combined with modern techniques has earned international recognition.',
  },
  {
    id: 2,
    name: 'Luna Chen',
    role: 'Realism Specialist',
    specialty: 'Photorealism & Portraits',
    experience: '8 Years',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    bio: 'Luna creates breathtaking photorealistic tattoos that blur the line between art and reality. Her precision and attention to detail are unmatched.',
  },
  {
    id: 3,
    name: 'Kai Thompson',
    role: 'Geometric Artist',
    specialty: 'Geometric & Minimalist',
    experience: '6 Years',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    bio: 'Kai specializes in precise geometric patterns and minimalist designs. His mathematical approach creates perfectly balanced, modern compositions.',
  },
];

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <span className="text-white">It's more than</span>
            <br />
            <span className="gradient-text">ink</span>
          </h2>
          
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
              "At Dream Inks Tattoo Studio, it's not just about ink. It's about creating memories, expressing who you are, and leaving a lasting mark on the world. Our artists combine creativity, skill, and passion to create tattoos that will stay with you forever."
            </p>
          </div>
        </div>

        {/* Artists Section */}
        <div className="mb-20">
          <h3 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'
          }`}>
            <span className="text-white">Meet Our</span>
            <span className="gradient-text"> Artists</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div
                key={artist.id}
                className={`group relative bg-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? `animate-fade-in-up animate-delay-${600 + index * 200}` : 'opacity-0'
                }`}
                onMouseEnter={() => setHoveredCard(artist.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Artist Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {artist.name}
                    </h4>
                    <p className="text-cyan-400 font-medium mb-1">{artist.role}</p>
                    <p className="text-gray-300 text-sm">{artist.experience} Experience</p>
                  </div>
                </div>

                {/* Bio Section - Appears on Hover */}
                <div className={`absolute inset-0 bg-black/90 backdrop-blur-sm p-6 flex flex-col justify-center transition-all duration-500 ${
                  hoveredCard === artist.id 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-full pointer-events-none'
                }`}>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {artist.name}
                  </h4>
                  <p className="text-cyan-400 font-medium mb-3">{artist.specialty}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {artist.bio}
                  </p>
                  <div className="text-gray-400 text-sm">
                    {artist.experience} Experience
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
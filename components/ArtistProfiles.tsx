'use client';

import { useState } from 'react';
import Image from 'next/image';

const artists = [
  {
    id: 1,
    name: 'Marcus "Ink" Rodriguez',
    specialty: 'Traditional & Neo-Traditional',
    experience: '12 Years',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Marcus specializes in bold traditional tattoos with a modern twist. His work is known for vibrant colors and clean line work that stands the test of time.',
    featured: true
  },
  {
    id: 2,
    name: 'Luna Chen',
    specialty: 'Realism & Portraits',
    experience: '8 Years',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Luna creates stunning photorealistic tattoos and portraits. Her attention to detail and shading techniques bring images to life on skin.',
    featured: false
  },
  {
    id: 3,
    name: 'Kai Thompson',
    specialty: 'Geometric & Minimalist',
    experience: '6 Years',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Kai is a master of geometric patterns and minimalist designs. His precise line work and mathematical approach create perfectly balanced compositions.',
    featured: false
  },
  {
    id: 4,
    name: 'Raven Blackwood',
    specialty: 'Blackwork & Gothic',
    experience: '10 Years',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Raven specializes in bold blackwork and gothic designs. Her dark aesthetic and intricate patterns create powerful, striking tattoos.',
    featured: true
  }
];

export default function ArtistProfiles() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Meet Our</span>
            <span className="text-red-500"> Artists</span>
          </h2>
          <p className="font-elegant text-xl text-gray-400 max-w-3xl mx-auto italic">
            Each artist brings their unique style and years of experience to create your perfect tattoo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className={`group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                artist.featured ? 'ring-2 ring-red-500/30' : ''
              } ${hoveredCard === artist.id ? 'glow-effect' : ''}`}
              onMouseEnter={() => setHoveredCard(artist.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {artist.featured && (
                <div className="absolute top-4 right-4 z-20 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-heading font-medium">
                  Featured
                </div>
              )}

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Artist Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 text-shadow">
                    {artist.name}
                  </h3>
                  <p className="text-red-400 font-medium mb-1">{artist.specialty}</p>
                  <p className="text-gold-400 text-sm">{artist.experience} Experience</p>
                </div>
              </div>

              {/* Bio Section - Appears on Hover */}
              <div className={`p-6 transition-all duration-500 ${
                hoveredCard === artist.id 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
              }`}>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {artist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl hover:glow-gold transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">Artistic Excellence</h3>
            <p className="text-gray-400">Every tattoo is a masterpiece, crafted with passion and precision</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl hover:glow-gold transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">Safety First</h3>
            <p className="text-gray-400">Sterile environment and highest safety standards for your peace of mind</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl hover:glow-gold transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">Lifetime Quality</h3>
            <p className="text-gray-400">Premium inks and techniques ensuring your tattoo looks amazing for life</p>
          </div>
        </div>
      </div>
    </section>
  );
}
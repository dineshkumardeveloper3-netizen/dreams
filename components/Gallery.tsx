'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const tattooImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Traditional Rose Sleeve',
    artist: 'Marcus Rodriguez',
    category: 'Traditional'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Realistic Portrait',
    artist: 'Luna Chen',
    category: 'Realism'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Sacred Geometry',
    artist: 'Kai Thompson',
    category: 'Geometric'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Gothic Mandala',
    artist: 'Marcus Rodriguez',
    category: 'Gothic'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1300270/pexels-photo-1300270.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Neo-Traditional Eagle',
    artist: 'Luna Chen',
    category: 'Traditional'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1201587/pexels-photo-1201587.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Minimalist Line Art',
    artist: 'Kai Thompson',
    category: 'Minimalist'
  }
];

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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

    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <span className="text-white">Our</span>
            <span className="gradient-text"> Gallery</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto ${
            isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
          }`}>
            Explore our artists' finest work and get inspired for your next masterpiece
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tattooImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? `animate-fade-in-up animate-delay-${400 + index * 100}` : 'opacity-0'
              }`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-1">by {image.artist}</p>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${
                hoveredImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                <button className="gradient-button px-6 py-3 rounded-lg font-semibold text-white">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
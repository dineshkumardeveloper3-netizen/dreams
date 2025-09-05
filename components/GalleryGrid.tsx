'use client';

import { useState } from 'react';
import Image from 'next/image';

const tattooImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Traditional Rose',
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
    title: 'Geometric Pattern',
    artist: 'Kai Thompson',
    category: 'Geometric'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Gothic Design',
    artist: 'Raven Blackwood',
    category: 'Gothic'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1300270/pexels-photo-1300270.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Sleeve Work',
    artist: 'Marcus Rodriguez',
    category: 'Traditional'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1201587/pexels-photo-1201587.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Fine Line Art',
    artist: 'Luna Chen',
    category: 'Fine Line'
  }
];

const categories = ['All', 'Traditional', 'Realism', 'Geometric', 'Gothic', 'Fine Line'];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? tattooImages 
    : tattooImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="text-red-500"> Gallery</span>
          </h1>
          <p className="font-elegant text-xl text-gray-400 max-w-3xl mx-auto italic">
            Explore our artists' finest work and get inspired for your next tattoo
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-heading font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white glow-effect'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Image Info Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredImage === image.id ? 'transform translate-y-0' : 'transform translate-y-2'
                }`}>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 text-shadow">
                    {image.title}
                  </h3>
                  <p className="text-red-400 font-medium mb-1">by {image.artist}</p>
                  <p className="text-gold-400 text-sm">{image.category}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${
                hoveredImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-heading font-medium transition-all duration-300 hover:scale-105 glow-effect">
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
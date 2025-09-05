'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Instagram } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    tattooStyle: '',
    idea: ''
  });
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

    const element = document.getElementById('booking');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'd like to book a tattoo session. Name: ${formData.name}, Style: ${formData.tattooStyle}, Idea: ${formData.idea}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/dreaminkstattoo', '_blank');
  };

  return (
    <section id="booking" className="py-20 px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <span className="text-white">Book Your</span>
            <br />
            <span className="gradient-text">Session</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto ${
            isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
          }`}>
            Ready to bring your vision to life? Let's create something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className={`bg-gray-800 rounded-2xl p-8 ${
            isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Tell Us Your Vision
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-2">
                  Contact (Phone/Email)
                </label>
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="tattooStyle" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Tattoo Style
                </label>
                <select
                  id="tattooStyle"
                  name="tattooStyle"
                  value={formData.tattooStyle}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:border-cyan-500 focus:ring-cyan-500"
                >
                  <option value="">Select a style</option>
                  <option value="traditional">Traditional</option>
                  <option value="realism">Realism & Portraits</option>
                  <option value="geometric">Geometric & Minimalist</option>
                  <option value="gothic">Gothic & Blackwork</option>
                  <option value="neo-traditional">Neo-Traditional</option>
                  <option value="fine-line">Fine Line</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
                  Describe Your Tattoo Idea
                </label>
                <Textarea
                  id="idea"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="Tell us about your vision: design, size, placement, colors, meaning, reference images, etc."
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full gradient-button py-3 rounded-lg font-semibold text-white text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
            {/* Quick Contact */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Quick Contact
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-semibold">WhatsApp</span>
                </button>
                
                <button
                  onClick={openInstagram}
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-semibold">Instagram</span>
                </button>
              </div>
            </div>

            {/* Studio Info */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Studio Info
              </h3>
              
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-gray-400 text-sm">ADDRESS</p>
                  <p className="text-white font-semibold">123 Ink Street, Creative City</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">PHONE</p>
                  <p className="text-white font-semibold">(555) 123-INKS</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">EMAIL</p>
                  <p className="text-white font-semibold">hello@dreaminks.studio</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">HOURS</p>
                  <div className="text-white font-semibold space-y-1">
                    <p>Mon-Fri: 12PM - 10PM</p>
                    <p>Sat: 10AM - 12AM</p>
                    <p>Sun: 12PM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
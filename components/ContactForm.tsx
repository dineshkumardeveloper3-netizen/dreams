'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tattooType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Get In</span>
            <span className="text-red-500"> Touch</span>
          </h1>
          <p className="font-elegant text-xl text-gray-400 max-w-3xl mx-auto italic">
            Ready to bring your vision to life? Contact us to schedule your consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8">
            <h2 className="font-heading text-3xl font-bold text-white mb-8">Book Your Session</h2>
            
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
                  className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="tattooType" className="block text-sm font-medium text-gray-300 mb-2">
                  Tattoo Style
                </label>
                <select
                  id="tattooType"
                  name="tattooType"
                  value={formData.tattooType}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-red-500 focus:ring-red-500"
                >
                  <option value="">Select a style</option>
                  <option value="traditional">Traditional</option>
                  <option value="realism">Realism</option>
                  <option value="geometric">Geometric</option>
                  <option value="gothic">Gothic</option>
                  <option value="fine-line">Fine Line</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your tattoo idea
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  placeholder="Describe your tattoo vision, size, placement, and any specific details..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-heading font-semibold text-lg py-3 rounded-lg transition-all duration-300 hover:scale-105 glow-effect"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8">
              <h2 className="font-heading text-3xl font-bold text-white mb-8">Visit Our Studio</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-400">123 Ink Street, Artisan District<br />Creative City, AC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">(555) 123-INKS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">hello@dreaminks.studio</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Hours</h3>
                    <div className="text-gray-400 space-y-1">
                      <p>Monday - Friday: 12PM - 10PM</p>
                      <p>Saturday: 10AM - 12AM</p>
                      <p>Sunday: 12PM - 8PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Image */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Dream Inks Tattoo Studio Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-heading text-xl font-bold text-white text-shadow">
                    Our Studio
                  </h3>
                  <p className="text-gray-300">Clean, safe, and inspiring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
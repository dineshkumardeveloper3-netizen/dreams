'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Studio Info */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">DREAM INKS</span>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">TATTOO</span>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Your skin, our canvas. Creating masterful tattoos that tell your unique story.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
             Address: 7/9, Sriram Nagar Main Rd, Thiruvanmiyur, Chennai, Tamil Nadu 600041
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                About
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                service
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                Gallery
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left lg:text-right sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Get in Touch</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400">
              <p className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                9176064815
              </p>
              <p className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-sm sm:text-base">
                hello@dreaminks.studio
              </p>
              <div className="flex justify-center sm:justify-start lg:justify-end space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                <a 
                  href="https://instagram.com/dreaminkstattoo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Instagram
                </a>
                <a 
                  href="https://facebook.com/dreaminkstattoo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-bold">DREAM INKS TATTOO STUDIO</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
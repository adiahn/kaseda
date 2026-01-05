import { Menu, X, Phone, Mail, MapPin, Search } from 'lucide-react';
import { useState } from 'react';
import logo from '../Assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-2 px-4 text-sm">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+234 (0)803 XXX XXXX</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Mail size={14} />
              <span>info@kasedaktsg.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Business Hours: Mon-Fri 8:00AM - 4:00PM</span>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <div className="flex-shrink-0">
                <img src={logo} alt="KASEDA Logo" className="h-10 sm:h-12 lg:h-16 w-auto object-contain transition-all" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-gray-900 leading-tight">Katsina State Entrepreneurship Development Agency</div>
                <div className="text-xs text-gray-600 font-medium">Katsina State Government</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <a href="#home" className="px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-all font-medium text-sm">
                Home
              </a>
              <a href="#about" className="px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-all font-medium text-sm">
                About
              </a>
              <a href="#programs" className="px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-all font-medium text-sm">
                Programs
              </a>
              <a href="#services" className="px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-all font-medium text-sm">
                Services
              </a>
              <a href="#news" className="px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-all font-medium text-sm">
                News
              </a>
              <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded transition-all font-medium text-sm">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-green-700 transition-colors">
                <Search size={18} />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded font-medium">
                About Us
              </a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded font-medium">
                Programs
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded font-medium">
                Services
              </a>
              <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded font-medium">
                News
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded font-medium">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

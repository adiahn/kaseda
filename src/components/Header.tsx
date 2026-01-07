import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-2 px-4 text-sm">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+234707 999 4928</span>
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
            <Link to="/" className="flex items-center gap-3 sm:gap-4 flex-1">
              <div className="flex-shrink-0">
                <img src={logo} alt="KASEDA Logo" className="h-12 sm:h-14 lg:h-20 w-auto object-contain transition-all" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-gray-900 leading-tight">Katsina State Entrepreneurship Development Agency</div>
                <div className="text-xs text-gray-600 font-medium">Katsina State Government</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded transition-all font-medium text-sm ${
                  isActive('/') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded transition-all font-medium text-sm ${
                  isActive('/about') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                About
              </Link>
              <Link 
                to="/programs" 
                className={`px-3 py-2 rounded transition-all font-medium text-sm ${
                  isActive('/programs') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Programs
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 rounded transition-all font-medium text-sm ${
                  isActive('/services') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/news" 
                className={`px-3 py-2 rounded transition-all font-medium text-sm ${
                  isActive('/news') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                News
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded transition-all font-medium text-sm ${
                  isActive('/contact') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Contact
              </Link>
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
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded font-medium ${
                  isActive('/') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded font-medium ${
                  isActive('/about') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/programs" 
                className={`block px-3 py-2 rounded font-medium ${
                  isActive('/programs') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Programs
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 rounded font-medium ${
                  isActive('/services') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/news" 
                className={`block px-3 py-2 rounded font-medium ${
                  isActive('/news') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                News
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded font-medium ${
                  isActive('/contact') 
                    ? 'bg-green-700 text-white' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

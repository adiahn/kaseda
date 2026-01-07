import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logowhite.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 py-12 lg:py-16 border-b border-gray-800">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="KASEDA" className="w-20 h-20 object-contain" />
              <div>
                <div className="font-bold text-lg text-white">KASEDA</div>
                <div className="text-xs text-gray-400">Katsina State Government</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Driving economic growth and sustainable development across Katsina State through innovative programs and strategic partnerships.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-green-700 hover:text-green-500 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-green-400 transition-colors">Programs</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/news" className="hover:text-green-400 transition-colors">News</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Application Forms</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Guidelines & FAQs</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Downloads</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Information</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 text-green-400 mt-0.5" />
                <div>
                  <div className="text-gray-400">Main Line</div>
                  <div className="text-white font-semibold">+234707 999 4928</div>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 text-green-400 mt-0.5" />
                <div>
                  <div className="text-gray-400">Email</div>
                  <div className="text-white font-semibold">info@kasedaktsg.com</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Office Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Clock size={16} className="flex-shrink-0 text-green-400 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Monday - Friday</div>
                  <div className="text-gray-400">8:00 AM - 4:00 PM WAT</div>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 text-green-400 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Katsina, Nigeria</div>
                  <div className="text-gray-400">State Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left text-gray-500">
            {currentYear} Katsina State Entrepreneurship Development Agency (KASEDA). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-400 transition-colors text-gray-500">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors text-gray-500">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors text-gray-500">Accessibility</a>
            <a href="#" className="hover:text-green-400 transition-colors text-gray-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Menu, X, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logoapanines.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: 'NUESTRA CAUSA', path: '/nuestra-causa' },
    { text: 'QUÉ HACEMOS', path: '/que-hacemos' },
    { text: 'CÓMO AYUDAR', path: '/como-ayudar' },
    { text: 'NOTICIAS', path: '/noticias' },
    { text: 'GALERÍA', path: '/galeria' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-celeste transition-colors ${
                    location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              {[Youtube, Facebook, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href={
                    Icon === Instagram
                      ? "https://www.instagram.com/apanines?igsh=c29rOTNuM2R3a2pw"
                    : Icon === Facebook
                      ? "https://www.facebook.com/share/1MUBP2s23c/"
                    : Icon === Youtube
                      ? "https://youtube.com/@fundacionapanines8805?si=omtM-UR20ogAhkh6"
                      : `#`
                  }
                  whileHover={{ y: -2, color: '#2563eb' }}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a href="/como-ayudar#donacion">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-verde text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Donar
            </motion.button>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-2"
          >
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
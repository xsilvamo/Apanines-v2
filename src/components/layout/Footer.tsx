import React from 'react';
import { Youtube, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../../assets/images/apanines_black.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <motion.div
              className="text-2xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="Logo" className="h-12" />
            </motion.div>
            <p className="text-gray-400 mb-6">
              Transformando vidas a través del apoyo integral y el amor incondicional.
            </p>
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
                  whileHover={{ y: -2, color: '#60A5FA' }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {[
              { name: 'Nuestra Causa', link: '/nuestra-causa' },
              { name: 'Qué Hacemos', link: '/que-hacemos' },
              { name: 'Cómo Ayudar', link: '/como-ayudar' },
              { name: 'Noticias', link: '/noticias' },
              { name: 'Galería', link: '/galeria' }
              ].map((item) => (
              <motion.li key={item.name} whileHover={{ x: 2 }}>
                <a href={item.link} className="text-gray-400 hover:text-white transition-colors">
                {item.name}
                </a>
              </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>contacto@apanines.org</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Valdés 880, Melipilla</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir noticias y actualizaciones.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-verde text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Suscribirse
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Apanines. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
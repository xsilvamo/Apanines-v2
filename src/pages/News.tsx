import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Nueva Sala de Terapias',
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80',
    excerpt: 'Inauguramos una nueva sala equipada con tecnología de última generación.'
  },
  {
    title: 'Programa de Verano 2024',
    date: '10 Mar 2024',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    excerpt: 'Actividades especiales y talleres para nuestras familias durante el verano.'
  },
  {
    title: 'Alianza Estratégica',
    date: '5 Mar 2024',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80',
    excerpt: 'Nueva colaboración con importantes instituciones educativas.'
  }
];

const News = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-gradient-to-r from-indigo-600 to-blue-600"
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Noticias
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Mantente al día con nuestras últimas novedades y eventos
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    Leer más <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
            <p className="text-gray-600 mb-8">
              Recibe las últimas noticias y actualizaciones directamente en tu correo.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Suscribirse
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
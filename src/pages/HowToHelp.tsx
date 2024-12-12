import React from 'react';
import { motion } from 'framer-motion';
import { HandHeart, Gift, Users, Calendar } from 'lucide-react';

const HowToHelp = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] bg-gradient-to-r from-verde to-green-600"
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Cómo Ayudar
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Tu apoyo hace la diferencia en la vida de nuestras familias
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HandHeart,
                title: 'Donaciones',
                description: 'Apoya nuestros programas con una donación única o mensual.'
              },
              {
                icon: Users,
                title: 'Voluntariado',
                description: 'Únete a nuestro equipo de voluntarios y marca la diferencia.'
              },
              {
                icon: Gift,
                title: 'Donaciones en Especie',
                description: 'Dona materiales, equipos o recursos necesarios.'
              },
              {
                icon: Calendar,
                title: 'Eventos',
                description: 'Participa en nuestros eventos benéficos y actividades.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-verde" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-verde text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Más Información
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Haz tu Donación</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {['$10', '$25', '$50', '$100', '$250', 'Otro'].map((amount, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-3 px-6 border-2 border-verde rounded-full hover:bg-green-600 hover:text-white transition-colors"
                  >
                    {amount}
                  </motion.button>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-verde text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors"
              >
                Donar Ahora
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Apoyo Corporativo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Las empresas pueden apoyar nuestra causa de diferentes maneras.
              ¡Descubre cómo tu empresa puede hacer la diferencia!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Programas de Responsabilidad Social',
              'Patrocinio de Eventos',
              'Donaciones Corporativas'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item}</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-verde hover:text-green-800 transition-colors"
                >
                  Saber más →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;
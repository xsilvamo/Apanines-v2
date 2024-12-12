import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target } from 'lucide-react';

const OurCause = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] bg-blue-600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-celeste to-blue-800">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Nuestra Causa
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl max-w-2xl mx-auto"
              >
                Trabajamos por la inclusión y el desarrollo integral de niños con discapacidad
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission and Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-celeste" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Brindar apoyo integral y personalizado a cada familia, promoviendo el desarrollo y la inclusión.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-celeste" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser referentes en la atención integral y el desarrollo de programas innovadores para familias.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-celeste" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nuestros Valores</h3>
              <p className="text-gray-600">
                Compromiso, empatía, profesionalismo y dedicación en cada paso del camino.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nuestro Impacto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A lo largo de nuestra trayectoria, hemos logrado transformar la vida de miles de familias
              a través de nuestros programas y servicios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '15+', text: 'Años de Experiencia' },
              { number: '1000+', text: 'Familias Atendidas' },
              { number: '50+', text: 'Profesionales' },
              { number: '20+', text: 'Programas Activos' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-verde mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCause;
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Puzzle, Activity, School } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Terapia Ocupacional',
    description: 'Desarrollo de habilidades motoras y cognitivas para la vida diaria.'
  },
  {
    icon: Heart,
    title: 'Apoyo Emocional',
    description: 'Acompañamiento psicológico para familias y cuidadores.'
  },
  {
    icon: Users,
    title: 'Grupos de Apoyo',
    description: 'Espacios de encuentro y compartir entre familias.'
  },
  {
    icon: Puzzle,
    title: 'Estimulación Temprana',
    description: 'Programas especializados para el desarrollo infantil.'
  },
  {
    icon: Activity,
    title: 'Fisioterapia',
    description: 'Rehabilitación y desarrollo motor personalizado.'
  },
  {
    icon: School,
    title: 'Educación Especial',
    description: 'Programas educativos adaptados a cada necesidad.'
  }
];

const WhatWeDo = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] bg-gradient-to-r from-amarillo to-orange-400"
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Qué Hacemos
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Nuestros servicios y programas especializados
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-gren-200 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-verde" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nuestra Metodología</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos con un enfoque integral y personalizado, adaptándonos a las necesidades
              específicas de cada familia y niño.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Evaluación Inicial</h3>
                  <p className="text-gray-600">
                    Realizamos una evaluación completa para entender las necesidades específicas.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Plan Personalizado</h3>
                  <p className="text-gray-600">
                    Desarrollamos un plan de intervención adaptado a cada caso.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seguimiento Continuo</h3>
                  <p className="text-gray-600">
                    Monitoreamos el progreso y ajustamos el plan según sea necesario.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Apoyo Familiar</h3>
                  <p className="text-gray-600">
                    Brindamos orientación y soporte continuo a toda la familia.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
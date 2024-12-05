import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "María González",
    text: "Apanines cambió nuestras vidas. El apoyo y dedicación que recibimos es invaluable.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80"
  },
  {
    name: "Juan Pérez",
    text: "Encontramos una segunda familia aquí. Las terapias han ayudado enormemente a nuestro hijo.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
  },
  {
    name: "Ana Martínez",
    text: "La dedicación y profesionalismo del equipo es excepcional. Estamos muy agradecidos.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Descubre los testimonios de nuestras familias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Historias reales de familias que han encontrado apoyo y esperanza en nuestra comunidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
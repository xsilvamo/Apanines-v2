import React from "react";
import { motion } from "framer-motion";
import Mission from "./Mission";
import Testimonials from "./Testimonials";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const MainContent = () => {
  return (
    <div className="w-full">
      <Mission />

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Descubre el porqué marcamos la diferencia
              </h2>
              <p className="text-black mb-8 text-lg">
                En Apanines, creemos que cada niño merece la oportunidad de
                alcanzar su máximo potencial. Nuestro enfoque integral y
                personalizado marca la diferencia en la vida de las familias.
              </p>
              <motion.button
                className="bg-verde text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Leer más
              </motion.button>
            </div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="Public\IMG-20241115-WA0008.jpg"
                alt="Niños jugando"
                className=" object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      {/* Counter Section */}
      <motion.section
        className="py-20 bg-verde text-white"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Únete a nosotros y descubre nuestra familia
          </h2>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold"
          >
            122.098+
          </motion.div>
          <p className="mt-4 text-xl">Familias ayudadas</p>
        </div>
      </motion.section>
    </div>
  );
};

export default MainContent;

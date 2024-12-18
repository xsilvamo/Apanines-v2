import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8"
      >
        <Construction className="w-16 h-16 text-verde mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Página en Desarrollo
        </h1>
        <p className="text-gray-600 mb-8">
          Esta sección estará disponible próximamente. ¡Gracias por tu paciencia!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.history.back()}
          className="bg-verde text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
        >
          Volver
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
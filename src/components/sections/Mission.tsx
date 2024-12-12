import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tenemos solo una misión</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mejorar la calidad de vida de las familias con niños con discapacidades a través de terapias, apoyo y amor incondicional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-verde" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Propósito</h3>
            <p className="text-gray-600">
              Brindar apoyo integral y personalizado a cada familia que lo necesite
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-verde" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Misión</h3>
            <p className="text-gray-600">
              Transformar vidas a través de terapias especializadas y programas de desarrollo
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-verde" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Meta</h3>
            <p className="text-gray-600">
              Crear una comunidad inclusiva donde cada niño pueda desarrollar su máximo potencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
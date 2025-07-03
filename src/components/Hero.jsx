import React from 'react';
import imagen from '../assets/Recursos/Fondoinicial2.jpg';
import { useNavigate } from 'react-router';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-r from-white to-[#1824ff11] py-12 px-6 sm:px-12 md:px-20 flex flex-col sm:flex-row items-center justify-between border rounded-md shadow-md">
      {/* Lado izquierdo */}
      <div className="w-full sm:w-1/2 mb-10 sm:mb-0 flex flex-col items-center sm:items-start text-center sm:text-left">
        {/* Línea + etiqueta */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-blue-900"></div>
          <p className="text-sm font-semibold text-blue-900 tracking-wide">ZAPATILLAS DESTACADAS</p>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Nuevas Colecciones 2025
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-600 text-balance md:text-lg mb-6">
          Corre, entrena o camina con estilo. Comodidad y diseño para cada paso.
        </p>

        {/* Botón CTA */}
        <button onClick={() => navigate('/collection')} className="mt-2 inline-block bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-semibold tracking-wide hover:bg-blue-800 transition duration-300">
          Explorar ahora →
        </button>
      </div>

      {/* Lado derecho: Imagen */}
      <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
          <img
            src={imagen}
            alt="Zapatilla destacada"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
      </div>

      </div>

  );
};

export default Hero;

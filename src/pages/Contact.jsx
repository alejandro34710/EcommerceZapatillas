import React from 'react';
import ImgContacto from '../assets/Recursos/Contactoimagen.jpg'; 
import { FaUserTie, FaLifeRing } from 'react-icons/fa';
import NewletterBox from '../components/NewletterBox';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Encabezado */}
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Contáctanos</h2>

      {/* Sección principal: tarjetas + imagen */}
      <div className="flex flex-col md:flex-row items-center gap-25">
        {/* Columna izquierda: tarjetas */}
        <div className="flex flex-col gap-15 w-full md:w-1/2">
          {/* Tarjeta 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <FaUserTie className="text-2xl text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                Habla con un experto en ventas
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Nuestro equipo comercial te ayudará a encontrar las zapatillas más adecuadas para tu estilo y presupuesto.
            </p>
            <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-700 transition">
              Comunícate con ventas
            </button>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <FaLifeRing className="text-2xl text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                Soporte técnico y de cuenta
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Nuestro centro de ayuda está disponible 24/7 para resolver tus dudas sobre productos, pedidos o tu cuenta.
            </p>
            <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-700 transition">
              Ir al centro de ayuda
            </button>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="w-full md:w-1/2 ">
          <img
            src={ImgContacto}
            alt="Contacto"
            className="w-120 rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Newsletter debajo */}
      <div className="mt-10">
        <NewletterBox />
      </div>
    </div>
  );
};

export default Contact;

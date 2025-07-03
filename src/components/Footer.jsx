import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f2f2f2] via-[#eaeaea] to-[#ffffff] text-gray-700 text-sm w-full">
      {/* Contenido principal del footer */}
      <div className="py-10 px-6 md:px-12 grid grid-cols-2  md:grid-cols-4 gap-8 w-full">
        <div className="space-y-4">
          <h2 className="text-gray-800 text-lg font-semibold">StrideZone</h2>
          <p>Tu tienda de confianza para zapatillas deportivas. Rendimiento, estilo y comodidad en cada paso.</p>
          <div className="flex space-x-2 pt-2">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-800 font-semibold mb-2">Mi Cuenta</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Perfil</a></li>
            <li><a href="#" className="hover:underline">Pedidos</a></li>
            <li><a href="#" className="hover:underline">Suscripciones</a></li>
            <li><a href="#" className="hover:underline">Ajustes</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-800 font-semibold mb-2">Categorías</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Zapatillas Hombre</a></li>
            <li><a href="#" className="hover:underline">Zapatillas Mujer</a></li>
            <li><a href="#" className="hover:underline">Zapatillas Niño</a></li>
            <li><a href="#" className="hover:underline">Nuevas Llegadas</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-800 font-semibold mb-2">Ayuda</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Política de cambios</a></li>
            <li><a href="#" className="hover:underline">Devoluciones</a></li>
            <li><a href="#" className="hover:underline">Soporte</a></li>
            <li><a href="#" className="hover:underline">Contáctanos</a></li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-gray-700 pt-4 px-6 md:px-12 pb-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-200">
        <p>© 2025 StrideZone. Todos los derechos reservados.</p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="#" className="text-gray-700 hover:underline">Política de Privacidad</a>
          <a href="#" className="text-gray-700 hover:underline">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

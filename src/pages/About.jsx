import React from 'react';
import Image from '../assets/Recursos/imagenfinal.jpg';
import NewletterBox from '../components/NewletterBox';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white text-gray-800">
      {/* Sección: Sobre Nosotros */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
          <span className="text-gray-600">Sobre</span>
          <span className="text-blue-700">STRIDEZONE</span>
          <span className="h-[2px] bg-gray-300 flex-grow ml-4"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Image}
              alt="StrideZone lifestyle"
              className="w-120 h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-[16px] leading-relaxed">
            <p className="mb-6">
              <strong>StrideZone</strong> nació de una visión clara: ofrecer la mejor experiencia de compra de zapatillas deportivas para personas activas y con estilo. Desde nuestros inicios, nos comprometimos a combinar funcionalidad, diseño e innovación en cada paso que das.
            </p>
            <p className="mb-6">
              Nuestro catálogo ha sido cuidadosamente seleccionado para adaptarse a diferentes ritmos de vida: desde corredores urbanos hasta amantes del streetwear. Trabajamos con marcas reconocidas y diseñadores emergentes para brindarte una colección que combine rendimiento y autenticidad.
            </p>
            <p className="font-semibold text-gray-900 mb-2">Nuestra Misión</p>
            <p>
              En StrideZone, buscamos impulsar tu paso con confianza, comodidad y estilo. Nuestro objetivo es que cada compra sea simple, rápida y satisfactoria — desde que navegas hasta que recibes tus zapatillas favoritas en la puerta de tu casa.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Por qué elegirnos */}
      <section className="mb-5">
        <h3 className="text-xl font-semibold mb-10 flex items-center gap-2">
          <span className="text-gray-500">POR QUÉ</span>
          <span className="text-blue-700">ELEGIRNOS</span>
          <span className="h-[2px] bg-gray-300 flex-grow ml-4"></span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Tarjeta 1 */}
          <div className="border border-gray-100 p-20 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all text-center">
            <h4 className="font-semibold text-lg mb-3 text-blue-700">Calidad Deportiva</h4>
            <p className="text-sm text-gray-600">
              Seleccionamos cada modelo con altos estándares de rendimiento, confort y durabilidad. Porque tu paso merece lo mejor.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="border border-gray-100 p-20 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all text-center">
            <h4 className="font-semibold text-lg mb-3 text-blue-700">Envíos Ágiles</h4>
            <p className="text-sm text-gray-600">
              Gracias a nuestra logística optimizada, recibirás tus zapatillas en tiempo récord, estés donde estés en Colombia.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="border border-gray-100 p-20 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all text-center ">
            <h4 className="font-semibold text-lg mb-3 text-blue-700">Atención Personalizada</h4>
            <p className="text-sm text-gray-600">
              Nuestro equipo está siempre listo para asesorarte y ayudarte a encontrar tu par perfecto, con amabilidad y eficiencia.
            </p>
          </div>
        </div>
      </section>

      <NewletterBox />
    </div>
  );
};

export default About;

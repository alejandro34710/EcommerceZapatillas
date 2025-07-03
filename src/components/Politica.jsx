import React from 'react'
import { MdAutorenew } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";

const Politica = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-8 text-center w-full max-w-4xl text-xs sm:text-sm md:text-base text-gray-700">
        <div className="flex flex-col items-center space-y-2">
          <MdAutorenew size={40} />
          <h3 className="font-semibold text-gray-900">Política de cambio fácil</h3>
          <p className='text-gray-600'>Ofrecemos una política de cambio sin complicaciones</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <BsShieldCheck size={40} />
          <h3 className="font-semibold text-gray-900">Política de devolución de 7 días</h3>
          <p className='text-gray-600'>Ofrecemos devoluciones gratuitas durante 7 días</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FiHeadphones size={40} />
          <h3 className="font-semibold text-gray-900">Mejor atención al cliente</h3>
          <p className='text-gray-600'>Atención al cliente 24/7 disponible</p>
        </div>
      </div>
    </div>
  );
};

export default Politica;
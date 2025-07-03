import React from 'react'
import { FaBolt } from 'react-icons/fa';

const Title = ({text1,text2}) => {
  return (
       <div className="w-full flex justify-center px-4">
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 text-center">
    {/* Icono decorativo */}
    <FaBolt className="text-yellow-500 text-2xl animate-pulse" />

    {/* Texto principal */}
    <div>
      <p className="text-gray-600 text-base sm:text-lg tracking-widest uppercase">
        {text1}
        <span className="text-gray-800 text-base sm:text-lg font-semibold"> {text2}</span>
      </p>
    </div>

    {/* Línea decorativa */}
    <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-full" />
  </div>
</div>

  )
}

export default Title

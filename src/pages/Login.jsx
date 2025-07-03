import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] max-w-md mx-auto mt-5 gap-5 text-gray-800 bg-white p-8 rounded-xl shadow-lg mb-20"
    >
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-3xl font-semibold tracking-wide">
          {currentState === 'Login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </p>
        <hr className="border-none h-[2px] w-10 bg-blue-600" />
      </div>

      {/* Input Nombre (solo en crear cuenta) */}
      {currentState !== 'Login' && (
        <div className="w-full relative">
          <FaUser className="absolute left-3 top-3 text-gray-400 text-sm" />
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Nombre"
            required
          />
        </div>
      )}

      {/* Input Correo */}
      <div className="w-full relative">
        <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-sm" />
        <input
          type="email"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Correo"
          required
        />
      </div>

      {/* Input Contraseña */}
      <div className="w-full relative">
        <FaLock className="absolute left-3 top-3 text-gray-400 text-sm" />
        <input
          type="password"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Contraseña"
          required
        />
      </div>

      {/* Acciones */}
      <div className="w-full flex justify-between text-sm text-blue-600 mt-[-8px] font-medium">
        <p className="cursor-pointer hover:underline">¿Olvidaste la contraseña?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign up')}
            className="cursor-pointer hover:underline"
          >
            Crear cuenta
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer hover:underline"
          >
            Iniciar sesión
          </p>
        )}
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
      >
        {currentState === 'Login' ? 'Iniciar Sesión' : 'Registrarse'}
      </button>
    </form>
  );
};

export default Login;

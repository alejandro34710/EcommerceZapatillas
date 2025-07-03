import React from 'react';


const NewsletterBox = () => {

  const onSubmithandler = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
  }

  return (
    <div className="w-full bg-white py-16 px-6 flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Suscríbete ahora y obtén 20% de descuento
      </h2>

      {/* Subtítulo */}
      <p className="text-gray-500 mb-6 max-w-xl">
        Sé el primero en recibir nuestras ofertas y novedades exclusivas. Solo tomará un momento.
      </p>

      {/* Formulario */}
      <form onSubmit={onSubmithandler} className="flex w-full max-w-md border border-gray-300 rounded overflow-hidden shadow-sm">
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 font-semibold tracking-wide hover:bg-gray-800 transition-colors"
        >
          SUSCRIBIRSE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;


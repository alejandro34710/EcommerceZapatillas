import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { FaCheckCircle } from 'react-icons/fa';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen bg-gray-50">
      <div className="text-center mb-10">
        <Title text1="Mis" text2="Órdenes" />
      </div>

      <div className="space-y-4">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition"
          >
            {/* Imagen */}
            <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded border border-gray-300">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  Sin imagen
                </div>
              )}
            </div>

            {/* Detalle del pedido */}
            <div className="flex flex-col justify-between flex-1">
              {/* Info básica */}
              <div className="space-y-1">
                <p className="text-base font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-700">
                  <span className="text-gray-500 font-medium">Precio:</span> {currency}{item.price} &nbsp;
                  <span className="text-gray-500 font-medium">Cantidad:</span> 1 &nbsp;
                  <span className="text-gray-500 font-medium">Talla:</span> M
                </p>
                <p className="text-xs text-gray-400">Fecha del pedido: 20 de julio, 2025</p>
              </div>

              {/* Estado del pedido */}
              <div className="mt-3 flex items-center gap-2 text-green-600">
                <FaCheckCircle className="text-lg" />
                <span className="text-sm font-medium">Listo para envío</span>
              </div>
            </div>
           <button className="bg-sky-800 hover:bg-blue-700 text-white px-5 py-2 text-sm font-semibold rounded-md shadow-sm transition-all duration-300">
            Seguimiento de Pedidos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

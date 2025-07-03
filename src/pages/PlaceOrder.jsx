import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { FaCreditCard, FaCcPaypal, FaMoneyBillAlt } from 'react-icons/fa';

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    direccion: '',
    ciudad: '',
    barrio: '',
    codigoPostal: '',
    pais: '',
    celular: '',
    metodoPago: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="border-t pt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-20 min-h-screen flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10">
          <Title text1="Información" text2="de compra" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-start">
          <div className="w-full lg:w-[55%] space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <input name="nombres" value={formData.nombres} onChange={handleInputChange} type="text" placeholder="Nombres" className="w-full max-w-[500px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
              <input name="apellidos" value={formData.apellidos} onChange={handleInputChange} type="text" placeholder="Apellidos" className="w-full max-w-[500px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
            </div>
            <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Correo electrónico" className="w-full max-w-[1020px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
            <input name="direccion" value={formData.direccion} onChange={handleInputChange} type="text" placeholder="Dirección" className="w-full max-w-[1020px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
            <div className="flex flex-col sm:flex-row gap-4">
              <input name="ciudad" value={formData.ciudad} onChange={handleInputChange} type="text" placeholder="Ciudad" className="w-full max-w-[500px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
              <input name="barrio" value={formData.barrio} onChange={handleInputChange} type="text" placeholder="Barrio" className="w-full max-w-[500px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input name="codigoPostal" value={formData.codigoPostal} onChange={handleInputChange} type="number" placeholder="Código Postal" className="w-full max-w-[500px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
              <input name="pais" value={formData.pais} onChange={handleInputChange} type="text" placeholder="País" className="w-full max-w-[500px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
            </div>
            <input name="celular" value={formData.celular} onChange={handleInputChange} type="number" placeholder="Celular" className="w-full max-w-[1020px] mx-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm" />
          </div>

          <div className="w-full lg:w-[35%] space-y-5 self-start">
            <CartTotal redirectTo="/orders" formData={formData} />

            <div>
              <Title text1="Método" text2="de pago" />
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <label className="flex items-center gap-3 border p-3 rounded-md cursor-pointer shadow-sm hover:border-blue-500">
                  <input type="radio" name="metodoPago" value="tarjeta" onChange={handleInputChange} checked={formData.metodoPago === 'tarjeta'} className="accent-blue-500" />
                  <FaCreditCard className="text-2xl text-yellow-400" />
                  <span className="text-sm font-medium">Tarjeta</span>
                </label>
                <label className="flex items-center gap-3 border p-3 rounded-md cursor-pointer shadow-sm hover:border-blue-500">
                  <input type="radio" name="metodoPago" value="paypal" onChange={handleInputChange} checked={formData.metodoPago === 'paypal'} className="accent-blue-500" />
                  <FaCcPaypal className="text-2xl text-blue-600" />
                  <span className="text-sm font-medium">Paypal</span>
                </label>
                <label className="flex items-center gap-3 border p-3 rounded-md cursor-pointer shadow-sm hover:border-blue-500">
                  <input type="radio" name="metodoPago" value="contraentrega" onChange={handleInputChange} checked={formData.metodoPago === 'contraentrega'} className="accent-green-600" />
                  <FaMoneyBillAlt className="text-2xl text-green-600" />
                  <span className="text-sm font-medium">Pago contraentrega</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

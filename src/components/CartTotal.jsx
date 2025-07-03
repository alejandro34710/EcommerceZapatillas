import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

const CartTotal = ({ redirectTo = "/place-order", formData = null }) => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  const isFormValid = formData
    ? formData.nombres.trim() !== '' &&
      formData.apellidos.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.direccion.trim() !== '' &&
      formData.ciudad.trim() !== '' &&
      formData.barrio.trim() !== '' &&
      formData.codigoPostal.toString().trim() !== '' &&
      formData.pais.trim() !== '' &&
      formData.celular.toString().trim() !== '' &&
      formData.metodoPago.trim() !== ''
    : true;

  const handleClick = () => {
    if (!isFormValid) {
      toast.error("Por favor completa todos los campos del formulario y selecciona un método de pago.");
      return;
    }
    navigate(redirectTo);
  };

  return (
    <div className="bg-white border rounded-md shadow-lg p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 border-b pb-2">
        Total del Pedido
      </h2>

      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{currency}{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Envío</span>
          <span>{currency}{delivery_fee.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-gray-900 text-base">
          <span>Total</span>
          <span>{currency}{total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition text-sm font-semibold tracking-wide"
      >
        Proceder al pago
      </button>
    </div>
  );
};

export default CartTotal;

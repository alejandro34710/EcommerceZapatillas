import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { FaTrash } from 'react-icons/fa';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-24">
      <div className="text-2xl mb-10 text-center font-semibold">
        <Title text1={'Carro'} text2={'de compras'} />
      </div>

      {cartData.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Lista de productos - ocupa 2/3 del espacio en escritorio */}
          <div className="lg:col-span-2 space-y-6">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="border rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Lado izquierdo */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border"
                      src={Array.isArray(productData.image) ? productData.image[0] : productData.image}
                      alt={productData.name}
                    />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                        {productData.name}
                      </h3>
                      <p className="text-sm text-gray-600">Talla: {item.size}</p>
                      <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                      <p className="text-sm font-semibold text-gray-800">
                        Subtotal: {currency}{(productData.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Controles */}
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-end sm:justify-start">
                    <input
                      onChange={(e) =>
                        e.target.value !== '' && Number(e.target.value) > 0 &&
                        updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className="w-14 text-center border rounded-md py-1 text-sm"
                    />
                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="text-gray-500 hover:text-red-600 transition"
                      title="Eliminar producto"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total del carrito - 1/3 a la derecha */}
          <div className="lg:col-span-1">
            <CartTotal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

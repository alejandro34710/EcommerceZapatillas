import React, { useContext, useEffect, useState,useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const topRef = useRef(null);
  
  useEffect(() => {
    const found = products.find((item) => String(item._id) === String(productId));
    if (found) {
      setProductData(found);
      setImage(found.image);
    }
    if (topRef.current) {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [productId, products]);
  
  return productData ? (
    <div ref={topRef} className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-12 flex-col sm:flex-row">
          {/* Imagenes del producto */}
          <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[20%] w-full">
              <img
                src={image}
                className="w-20 h-20 object-cover rounded-md border cursor-pointer"
                alt={productData.name}
                onClick={() => setImage(image)}
              />
            </div>
            {/* Imagen principal */}
            <div className="w-full sm:w-[80%] mb-20">
              <img
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                src={image}
                alt={productData.name}
              />
            </div>
          </div>

          {/* Información del producto */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">{productData.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              <div className="flex gap-1 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <span className="text-gray-600 text-sm font-medium">(95 Opiniones)</span>
            </div>

            {/* Precio */}
            <p className="text-4xl font-bold text-gray-900">{currency}{productData.price}</p>

            {/* Descripción */}
            <p className="mt-6 text-gray-600 leading-relaxed md:w-4/5">{productData.description}</p>

            {/* Selección de talla */}
            <div className="flex flex-col gap-3 my-8">
              <p className="text-sm text-gray-700 font-medium">Seleccionar Talla:</p>
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border rounded-md px-4 py-2 transition-all duration-200 
                      ${item === size ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón agregar */}
            <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 rounded-md uppercase tracking-wide active:bg-gray-800">
              Agregar al carro
            </button>
            <hr className='mt-8 sm:w-4/5 opacity-50'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% producto original.</p>
                <p>Pago contraentrega.</p>
                <p>Facil devolucion a partir de los 7 dias.</p>
            </div>
          </div>
        </div>
        {/* Descripción de los productos y review */}
        <div className="mt-20">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-5 py-3 text-sm font-semibold border-t border-l border-r ${
                activeTab === 'description' ? 'bg-white text-black' : 'bg-gray-100 text-gray-500'
              }`}
            >
              Descripción
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-3 text-sm font-semibold border-t border-r ${
                activeTab === 'reviews' ? 'bg-white text-black' : 'bg-gray-100 text-gray-500'
              }`}
            >
              Opiniones (95)
            </button>
          </div>

          {/* Contenido de la pestaña activa */}
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
            {activeTab === 'description' && (
              <>
                <p>
                  StrideZone es una plataforma especializada en zapatillas deportivas que combina estilo, confort y rendimiento.
                  Nuestro catálogo incluye modelos para hombres, mujeres y niños, diseñados para diversas actividades como
                  running, entrenamiento y uso casual.
                </p>
                <p>
                  Cada par de zapatillas ha sido seleccionado por su calidad, durabilidad y diseño moderno, garantizando una
                  experiencia óptima para el día a día o el deporte. En cada producto encontrarás imágenes detalladas, tallas
                  disponibles, colores y especificaciones técnicas para que elijas con total confianza.
                </p>
              </>
            )}

            {activeTab === 'reviews' && (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {/* Reseña 1 */}
                <div className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md border">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Juan P."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-400 text-sm">⭐️⭐️⭐️⭐️⭐️</div>
                      <p className="font-semibold text-gray-800">Juan P.</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Excelente calidad. Las zapatillas llegaron rápido y son muy cómodas para correr. ¡Recomendadas!
                    </p>
                  </div>
                </div>

                {/* Reseña 2 */}
                <div className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md border">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Camila G."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-400 text-sm">⭐️⭐️⭐️⭐️</div>
                      <p className="font-semibold text-gray-800">Camila G.</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Muy bonitas y ligeras. Pedí mi talla habitual y calzan perfecto.
                    </p>
                  </div>
                </div>

                {/* Reseña 3 */}
                <div className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md border">
                  <img
                    src="https://randomuser.me/api/portraits/men/65.jpg"
                    alt="Diego M."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-400 text-sm">⭐️⭐️⭐️⭐️⭐️</div>
                      <p className="font-semibold text-gray-800">Diego M.</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Buen soporte al caminar. Me gustó la atención al cliente y el empaque. Todo excelente.
                    </p>
                  </div>
                </div>
                {/* Reseña 4 */}
                <div className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md border">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Laura T."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-yellow-400 text-sm">⭐️⭐️⭐️⭐️⭐️</div>
                      <p className="font-semibold text-gray-800">Laura T.</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Muy feliz con la compra. Las zapatillas tienen un diseño moderno, son livianas y llegaron antes de lo esperado. Definitivamente volveré a comprar.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Produrctos relacionados */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    // Mezclar productos solo una vez
    const shuffled = [...products].sort(() => 0.5 - Math.random())
    setLatestProducts(shuffled.slice(0, 10))
  }, [])

  return (
    <div className="my-10 px-4 overflow-x-hidden">
      {/* Encabezado */}
      <div className="text-center py-8">
        <Title text1={'ULTIMAS'} text2={'COLECCIONES'} />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto break-words">
          Descubre los últimos lanzamientos en zapatillas deportivas. Diseñadas para ofrecer comodidad, estilo y alto rendimiento.
        </p>
      </div>

      {/* Grid de productos */}
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={item._id || index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestCollection

import React, { use, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaChevronRight } from 'react-icons/fa';
import ProductItem from '../components/ProductItem';
import usefilters from '../Hooks/usefilters';
import { useMemo } from 'react';
import Title from '../components/Title';

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const shuffledProducts = useMemo(() => {
  const copy = [...products];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  
  return copy;
  }, []); 

  const [showFilter, setShowFilter] = useState(false);
  const {
    filtered,
    toggleCategory,
    toggleSubCategory,
    changeSortOrder,
  } = usefilters(shuffledProducts,search, showSearch);


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex flex-col sm:flex-row gap-6 pt-10 border-t'>
        {/* Filtro categorias */}
        <div className='min-w-60'>
          <p
            onClick={() => setShowFilter(!showFilter)}
            className='mb-4 text-lg font-semibold tracking-wide flex items-center cursor-pointer gap-2 text-gray-800 sm:text-xl'
          >
            FILTROS
            <FaChevronRight
              className={`h-4 sm:hidden transition-transform duration-300 ${
                showFilter ? 'rotate-90' : ''
              }`}
            />
          </p>

          {/* Categoria Filtro */}
          <div
            className={`rounded-lg shadow-sm border border-gray-200 bg-white px-5 py-4 mb-5 transition-all duration-300 ${
              showFilter ? 'block' : 'hidden'
            } sm:block`}
          >
            <p className='mb-3 text-sm font-semibold text-gray-800 uppercase tracking-wider'>
              Categorías
            </p>
            <div className='flex flex-col gap-3 text-sm text-gray-700'>
              {['Hombres', 'Mujeres', 'Niños'].map((item) => (
                <label key={item} className='flex items-center gap-3 cursor-pointer'>
                  <input
                    onChange={toggleCategory}
                    className='accent-blue-600 w-4 h-4 rounded'
                    type='checkbox'
                    value={item}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Subcategoria Filtro */}
          <div
            className={`rounded-lg shadow-sm border border-gray-200 bg-white px-5 py-4 mb-15 transition-all duration-300 ${
              showFilter ? 'block' : 'hidden'
            } sm:block`}
          >
            <p className='mb-3 text-sm font-semibold text-gray-800 uppercase tracking-wider'>
              Tipo
            </p>
            <div className='flex flex-col gap-3 text-sm text-gray-700'>
              {['Casual', 'Running', 'Training'].map((item) => (
                <label key={item} className='flex items-center gap-3 cursor-pointer'>
                  <input
                    onChange={toggleSubCategory}
                    className='accent-blue-600 w-4 h-4 rounded'
                    type='checkbox'
                    value={item}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Imagenes lado derecho */}
        <div className='flex-1'>
          <div className='flex justify-between items-center mb-6'>
            <Title text1={'TODAS LAS'} text2={'COLECCIONES'} />
            <select onChange={changeSortOrder} className='border border-gray-300 bg-white rounded-md text-sm px-3 py-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'>
              <option value='Relevant'>Ordenar por: Más relevantes</option>
              <option value='low-high'>Ordenar por: Precio menor a mayor</option>
              <option value='high-low'>Ordenar por: Precio mayor a menor</option>
            </select>
          </div>
          {/* renderizado de productos */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mb-20'>
              {
                filtered.map((item,index) => (
                  <ProductItem key={item._id || index} name={item.name} id={item._id} price={item.price} image={item.image} />
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

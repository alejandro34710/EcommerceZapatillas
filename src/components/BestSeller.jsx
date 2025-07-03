import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {
    const { products } = useContext(ShopContext);
    const [bestseller, setBetSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBetSeller(bestProduct.slice(0, 5)); // Corregido el slice
    }, [products]); // Agregado products como dependencia

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text={'LO MÁS'} text2={'VENDIDO'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Las zapatillas favoritas de nuestros clientes. Rendimiento, estilo y comodidad en cada paso.
                </p>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        bestseller.map((item, index) => (
                            <ProductItem key={item._id || index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default Bestseller;
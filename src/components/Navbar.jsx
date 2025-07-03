import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import imag from '../assets/Recursos/Logosinfondoletra.png';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <header className="relative z-50 w-full overflow-x-hidden">
      {/* Barra principal */}
      <div className="flex flex-wrap items-center justify-between py-5 font-medium max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 gap-4">
        <Link to="/">
          <img src={imag} className="w-24" alt="Logo StrideZone" />
        </Link>

        {/* Menú desktop */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {['/', '/collection', '/about', '/contact'].map((path, index) => {
            const labels = ['INICIO', 'COLECCIÓN', 'NOSOTROS', 'CONTACTO'];
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 ${
                      isActive ? 'text-black font-semibold' : ''
                    }`
                  }
                >
                  <p>{labels[index]}</p>
                  <hr className="w-2/4 border-none h-[1px] bg-gray-700 hidden" />
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Iconos */}
        <div className="flex items-center gap-6 text-xl text-gray-800">
          <FiSearch onClick={() => setShowSearch(true)} className="cursor-pointer" />

          {/* Perfil */}
          <div className="relative group">
            <Link to={'/login'}><FiUser className="cursor-pointer" /></Link>
          </div>

          {/* Carrito */}
          <Link to="/cart" className="relative">
            <FiShoppingBag className="cursor-pointer" />
            <p className="absolute -top-2 -right-2 text-xs bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
              {getCartCount()}
            </p>
          </Link>

          {/* Menú móvil */}
          <div className="sm:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="sm:hidden bg-[#1824ff3d] shadow-lg rounded-lg py-4 px-4 mx-4 mt-2 mb-6 flex flex-col text-base font-medium text-gray-800 divide-y divide-gray-200">
          <NavLink className="py-3 px-4 hover:bg-gray-100 rounded-md transition-all duration-200" to="/" onClick={() => setMenuOpen(false)}>
            INICIO
          </NavLink>
          <NavLink className="py-3 px-4 hover:bg-gray-100 rounded-md transition-all duration-200" to="/collection" onClick={() => setMenuOpen(false)}>
            COLECCIÓN
          </NavLink>
          <NavLink className="py-3 px-4 hover:bg-gray-100 rounded-md transition-all duration-200" to="/about" onClick={() => setMenuOpen(false)}>
            NOSOTROS
          </NavLink>
          <NavLink className="py-3 px-4 hover:bg-gray-100 rounded-md transition-all duration-200" to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACTO
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;

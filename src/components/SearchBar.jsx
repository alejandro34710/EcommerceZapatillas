import React, { useContext, useEffect, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes ('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-white text-center py-6 shadow-sm">
      <div className="flex justify-center items-center gap-3 px-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-5 pr-10 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#0f0f41] focus:border-blue-500 transition-all duration-300 text-sm placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <button
          onClick={() => setShowSearch(false)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          title="Cerrar búsqueda"
        >
          <FiX className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  ) : null;
};

export default SearchBar;

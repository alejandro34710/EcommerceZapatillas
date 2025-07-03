import { useEffect, useState } from 'react';

const useFilters = (products,search, showSearch) => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOrder, setSortOrder] = useState('Relevant');
  const [filtered, setFiltered] = useState([]);

  const toggle = (value, listSetter, currentList) => {
    if (currentList.includes(value)) {
      listSetter(prev => prev.filter(item => item !== value));
    } else {
      listSetter(prev => [...prev, value]);
    }
  };

  const toggleCategory = (e) => toggle(e.target.value, setCategory, category);
  const toggleSubCategory = (e) => toggle(e.target.value, setSubCategory, subCategory);

  const changeSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    let result = [...products];

    if (showSearch && search) {
    result = result.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
   }

    if (category.length > 0) {
      result = result.filter(p => category.includes(p.category));
    }

    if (subCategory.length > 0) {
      result = result.filter(p => subCategory.includes(p.subCategory));
    }

    if (sortOrder === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
  }, [products, category, subCategory, sortOrder, search, showSearch]);

  return {
    filtered,
    toggleCategory,
    toggleSubCategory,
    changeSortOrder,
    category,
    subCategory,
    sortOrder,
  };
};

export default useFilters;

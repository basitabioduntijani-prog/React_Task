// src/components/ProductCatalog.jsx
import React, { useState } from 'react';
import productsData from './data/products';
import ProductItem from './ProductItem';
import FilterBar from './FilterBar';
import SortBar from './SortBar';
import './ProductCatalog.css';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('None');

  const filteredProducts = productsData.filter(product =>
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'Low to High') return a.price - b.price;
    if (sortOrder === 'High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="catalog">
      <h2>🛍️ Product Catalog</h2>
      <FilterBar selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      <SortBar sortOrder={sortOrder} onSort={setSortOrder} />
      <ul className="product-list">
        {sortedProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}

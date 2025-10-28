// src/components/FilterBar.jsx
import React from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Food'];

export default function FilterBar({ selectedCategory, onSelect }) {
  return (
    <div className="filters">
      <span>Filter:</span>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={selectedCategory === cat ? 'active' : ''}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

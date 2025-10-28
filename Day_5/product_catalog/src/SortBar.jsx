// src/components/SortBar.jsx
import React from 'react';

const sortOptions = ['None', 'Low to High', 'High to Low'];

export default function SortBar({ sortOrder, onSort }) {
  return (
    <div className="sort">
      <span>Sort by Price:</span>
      {sortOptions.map(option => (
        <button
          key={option}
          onClick={() => onSort(option)}
          className={sortOrder === option ? 'active' : ''}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

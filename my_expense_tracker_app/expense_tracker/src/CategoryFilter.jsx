import React from 'react';

function CategoryFilter({ selected, onSelect }) {
  const categories = ['All', 'Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat}
          className={selected === cat ? 'active' : ''}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

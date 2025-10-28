// src/components/ProductItem.jsx
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <li className={product.inStock ? 'in-stock' : 'out-of-stock'}>
      <strong>{product.name}</strong> - ₦{product.price.toLocaleString()}
      <div>
        {product.inStock ? (
          <button>Add to Cart</button>
        ) : (
          <span className="label">OUT OF STOCK</span>
        )}
      </div>
    </li>
  );
}

import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div className="product-card">
      <div className={`image-container ${!inStock ? "out-of-stock" : ""}`}>
        <img src={image} alt={name} className="product-image" />
        {!inStock && <div className="overlay">Out of Stock</div>}
      </div>

      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">₦{price.toLocaleString()}</p>
        <p className={`stock-status ${inStock ? "in" : "out"}`}>
          {inStock ? "In Stock ✓" : "Out of Stock ✗"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

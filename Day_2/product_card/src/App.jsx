import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

// Import local images
import laptopImg from "./assets/laptop.jpg";
import phoneImg from "./assets/phone.jpg";
import headphonesImg from "./assets/headphones.jpg";

function App() {
  const products = [
    {
      name: "Laptop Computer",
      price: 450000,
      image: laptopImg,
      inStock: true,
    },
    {
      name: "Smartphone X",
      price: 280000,
      image: phoneImg,
      inStock: false,
    },
    {
      name: "Wireless Headphones",
      price: 65000,
      image: headphonesImg,
      inStock: true,
    },
  ];

  return (
    <div className="app-container">
      <h2 className="title">🛍️ Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

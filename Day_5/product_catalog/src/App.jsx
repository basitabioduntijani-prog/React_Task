// App.jsx
import React from "react";
import ProductCatalog from "./ProductCatalog";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                 Tijjbbas Stores 
        </h1>
        <ProductCatalog />
      </div>
    </div>
  );
}

export default App;

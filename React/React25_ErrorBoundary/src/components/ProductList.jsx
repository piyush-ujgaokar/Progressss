import { useState } from "react";

const ProductList = () => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Product List Component Crashed!");
  }

  const products = [
    { id: 1, name: "Laptop", price: "₹65,000" },
    { id: 2, name: "Keyboard", price: "₹2,000" },
    { id: 3, name: "Mouse", price: "₹800" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="font-bold text-lg mb-4">Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between py-3 border-b last:border-0"
        >
          <span>{product.name}</span>
          <span className="font-semibold">{product.price}</span>
        </div>
      ))}

      <button
        onClick={() => setCrash(true)}
        className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
      >
        Crash Products
      </button>
    </div>
  );
};

export default ProductList
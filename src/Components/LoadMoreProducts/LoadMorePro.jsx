import React, { useEffect, useState } from "react";

const LoadMorePro = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  function checkCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=${
            count === 0 ? 10 : 10 * count
          }&skip=${10 * count}`
        );
        const data = await response.json();
        setLoading(false);
        console.log(data);
        setProducts((prevProducts) => [...prevProducts, ...data.products]); // Fix: Append new products to the existing ones
      } catch (error) {
        console.error("The Error is :", error.message);
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>

      {loading && <p className="text-center text-lg">Data Loading....</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0
          ? products.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 mt-2">${item.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            ))
          : !loading && <p className="text-center">No products available.</p>}
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
          onClick={checkCount}
        >
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default LoadMorePro;

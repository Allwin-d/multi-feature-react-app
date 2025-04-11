import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-blue-600 rounded-lg p-4">
      <img
        src={item.image_url}
        className="w-full h-40 object-cover rounded-lg"
        alt={item.publisher}
      />
      <h1 className="text-center font-semibold mt-2">{item.title}</h1>
      <Link
        to={`/recipe/${item.id}`} // ✅ Pass the recipe ID in the URL
        className="p-2 bg-black text-white rounded-lg ml-6 flex text-center w-24"
      >
        Details
      </Link>
    </div>
  );
};

export default RecipeItem;

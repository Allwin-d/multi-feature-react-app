import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

export default function Details() {
  const { recipeDetails, handleRecipeDetails, handleFavorite, favorite } =
    useContext(GlobalContext);
  const { id } = useParams(); // Extracts `id` from URL (string)

  useEffect(() => {
    // ✅ Fetch only if recipeDetails is empty or a different recipe is requested
    if (!recipeDetails || recipeDetails?.data?.recipe?.id?.toString() !== id) {
      handleRecipeDetails(id);
    }
  }, [id, recipeDetails, handleRecipeDetails]);

  console.log("Recipe Details:", recipeDetails);

  if (!recipeDetails?.data?.recipe) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }   

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Recipe Title & Image */}
      <div className="flex flex-col items-center text-center space-y-5">
        <h1 className="text-black text-4xl font-bold">
          {recipeDetails.data.recipe.title}
        </h1>
        <img
          className="rounded-lg shadow-lg w-full max-w-2xl object-cover"
          src={recipeDetails.data.recipe.image_url}
          alt={recipeDetails.data.recipe.title}
        />
      </div>

      {/* Ingredients Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Ingredients
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {recipeDetails.data.recipe.ingredients?.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">
                {item.quantity || "—"} {item.unit}
              </p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>

        {/* Favorite Button */}
        <button
          className={`mt-4 px-4 py-2 rounded-lg ${
            favorite.includes(id.toString()) ? "bg-red-500" : "bg-blue-500"
          } text-white`}
          onClick={() => handleFavorite(id)}
        >
          {favorite.includes(id.toString()) ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
}

import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../RecipeItem/RecipeItem";

const Favorites = () => {
  const { favorite } = useContext(GlobalContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (favorite.length === 0) {
      setRecipes([]);
      return;
    }

    const fetchRecipes = async () => {
      let fetchedRecipes = [];
      for (const id of favorite) {
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
          );
          const data = await res.json();
          if (data?.data?.recipe) {
            fetchedRecipes.push(data.data.recipe);
            setRecipes([...fetchedRecipes]);
          }
        } catch (error) {
          console.error(`Error fetching recipe ${id}:`, error);
        }
      }
    };

    fetchRecipes();
  }, [favorite]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Favorite Recipes</h1>
      {recipes.length === 0 ? (
        <p>No favorite recipes yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

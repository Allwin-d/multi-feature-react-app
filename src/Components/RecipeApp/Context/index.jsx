import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, SetSearch] = useState("");
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState(false);
  const [recipes, SetRecipes] = useState([]);
  const [favorite, SetFavorite] = useState([]);
  const [recipeDetails, SetRecipeDetails] = useState(null); // ✅ Fix variable name

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      SetLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        SetRecipes(data?.data?.recipes);
        SetSearch("");
      }
    } catch (e) {
      console.error(`The Error is ${e}`);
      SetError(true);
    } finally {
      SetLoading(false);
    }
  }
  async function handleRecipeDetails(id) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      console.log("API Response:", data);

      if (data.status === "fail") {
        console.error("API Error:", data.message);
        return;
      }

      SetRecipeDetails(data); // ✅ Store only the clicked recipe
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  }
  function handleFavorite(id) {
    let cpy = [...favorite];

    if (cpy.includes(id)) {
      cpy = cpy.filter((favId) => favId !== id); // Remove the ID
    } else {
      cpy.push(id); // Add the ID
    }

    SetFavorite(cpy); // Update the state
    console.log(cpy); // Logs the updated favorites
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        SetSearch,
        handleSubmit,
        loading,
        SetLoading,
        recipes,
        recipeDetails,
        SetRecipeDetails,
        handleRecipeDetails,
        handleFavorite,
        favorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

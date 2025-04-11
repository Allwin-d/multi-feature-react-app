import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../RecipeItem/RecipeItem";

const Home = () => {
  const {
    search,
    SetSearch,
    handleSubmit,
    loading,
    recipes,
  } = useContext(GlobalContext);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
          placeholder="🔍 Search your favorite recipe..."
          className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200"
        >
          Search
        </button>
      </form>

      {/* Recipe Results */}
      {loading ? (
        <h1 className="text-center text-xl font-medium">Data Loading....</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.length > 0 ? (
            recipes.map((item) => <RecipeItem key={item.id} item={item} />)
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No recipes found. Try searching for something like "pasta" or "chicken".
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

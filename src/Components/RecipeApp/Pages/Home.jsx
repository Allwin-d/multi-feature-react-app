import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../RecipeItem/RecipeItem";

const Home = () => {
  const { loading, recipes } = useContext(GlobalContext);

  return (
    <div className="p-4">
      {loading ? (
        <h1>Data Loading....</h1>
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

export default Home;

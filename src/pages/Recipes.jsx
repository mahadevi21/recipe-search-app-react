import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";

function Recipes({ favourites, setFavourites }) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useRecipes(query);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }

  function handleSave(recipe) {
    const alreadySaved = favourites.some((fav) => fav.idMeal === recipe.idMeal);

    if (alreadySaved) {
      setFavourites(favourites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      setFavourites([...favourites, recipe]);
    }
  }

  return (
    <div className="recipes-page">
      <h1>Search Recipes 🔎</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes"
        />
        <button type="submit">Search</button>
      </form>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading recipes...</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <div className="recipe-grid">
        {data.map((recipe) => {
          const isFavourite = favourites.some(
            (fav) => fav.idMeal === recipe.idMeal,
          );

          return (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onSave={() => handleSave(recipe)}
              isFavourite={isFavourite}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Recipes;

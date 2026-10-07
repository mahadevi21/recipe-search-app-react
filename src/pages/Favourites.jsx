function Favourites({ favourites, setFavourites }) {
  function removeFavourite(id) {
    setFavourites(favourites.filter((recipe) => recipe.idMeal !== id));
  }

  return (
    <div className="favourites-page">
      <h1>My Favourites❤️</h1>

      {favourites.length === 0 ? (
        <div className="empty-favourites">
          <p>No favourite recipes yet.</p>
          <p>Go to the Recipes page and save your favourite meals.</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {favourites.map((recipe) => (
            <div className="recipe-card" key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />

              <h2>{recipe.strMeal}</h2>
              <p>{recipe.strCategory}</p>
              <button
                className="remove-favorite"
                onClick={() => removeFavourite(recipe.idMeal)}
              >
                ♥ Remove Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;

import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe, onSave, isFavourite }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipes/${recipe.idMeal}`);
  }
  return (
    <div className="recipe-card">
      <div className="recipe-content" onClick={handleClick}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
        <h2>{recipe.strMeal}</h2>
      </div>

      <button
        type="button"
        className={isFavourite ? "favorite active" : "favorite"}
        onClick={(e) => {
          e.stopPropagation();
          onSave();
        }}
      >
        {isFavourite ? "♥" : "♡"}
      </button>
    </div>
  );
}

export default RecipeCard;

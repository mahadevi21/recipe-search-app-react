import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );

        setRecipe(response.data.meals[0]);
      } catch (err) {
        setError("Failed to fetch recipe");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading recipe...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <div className="detail-page">
      <div className="detail-content">
        <h1>{recipe.strMeal}</h1>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="detail-image"
        />

        <p>Category: {recipe.strCategory}</p>
        <p>Area: {recipe.strArea}</p>

        <h3>Instructions</h3>
        <p className="instructions">{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;

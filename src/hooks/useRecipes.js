import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook - fetch the recipe based on the search
function useRecipes(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Fetch recipes
  useEffect(() => {
    if (!query) {
      setData([]);
      setError("");
      setLoading(false);
      return;
    }

    // API call
    async function fetchRecipes() {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
        );
        setData(response.data.meals || []);
      } catch (err) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [query]);

  return {
    data,
    loading,
    error,
  };
}

export default useRecipes;

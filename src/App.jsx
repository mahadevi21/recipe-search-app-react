import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="app-title">🍴Recipe App</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/recipes"
            element={
              <Recipes favourites={favourites} setFavourites={setFavourites} />
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetail />} />

          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

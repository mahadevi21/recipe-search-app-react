import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Recipe App🍴</h1>
        <p>Search for your favourite recipes and save them for later.</p>

        <Link to="/recipes" className="home-button">
          Explore Recipes
        </Link>
      </div>
    </div>
  );
}

export default Home;

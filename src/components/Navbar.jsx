import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Recipes
      </NavLink>
      <NavLink
        to="/favourites"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        favourites
      </NavLink>
    </nav>
  );
}

export default Navbar;

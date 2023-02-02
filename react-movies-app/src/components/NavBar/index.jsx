import "./NavBar.css";
import searchMovies from "../../services/searchMovies";
import { useState } from "react";

const NavBar = ({ setMovies }) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    searchMovies(searchText).then((res) => setMovies(res.results));
  };
  return (
    <nav className="main-navbar">
      <div className="nav-container">
        <h2>🎬 Find Your Movies</h2>
        <form onSubmit={handleInput}>
          <input
            value={searchText}
            type="search"
            placeholder="Ingrese una película..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import "./navbar.css";
import { useRef, useState } from "react";
import useMovieList from "../../hooks/useMovieList";

function Navbar() {
  const resultRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const { movieList } = useMovieList(!searchText ? "Avengers" : searchText);
  return (
    <div className="navbar-wrapper">
      <div>
        <Link to={"/"} className="title">
          Movie Com
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="What movie are thinking about..."
          onFocus={() => {
            resultRef.current.style.display = "block";
          }}
          onBlur={() => {
            resultRef.current.style.display = "none";
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="result-list" ref={resultRef}>
          {movieList.length > 0 &&
            movieList.map((movie) => (
              <div key={movie.imdbID} className="autocomplete-result">
                {movie.Title}
              </div>
            ))}
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import "./navbar.css";
import { useRef, useState } from "react";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";

function Navbar() {
  const resultRef = useRef(null);
  const titleRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const { movieList } = useMovieList(!searchText ? "Avengers" : searchText);
  return (
    <div className="navbar-wrapper">
      <div className="title-wrapper">
        <Link
          to={"/"}
          className="title"
          onMouseEnter={() => {
            titleRef.current.style.display = "block";
          }}
          onMouseLeave={() => {
            titleRef.current.style.display = "none";
          }}
        >
          Movie Com
        </Link>
        <div className="title-block" ref={titleRef}></div>
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
          onChange={useDebounce((e) => {
            setSearchText(e.target.value);
          })}
        />
        <div className="result-list" ref={resultRef}>
          <div className="autocomplete-result">
            Searching related to {searchText}
          </div>
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

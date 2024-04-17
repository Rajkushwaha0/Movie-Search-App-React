import { Link } from "react-router-dom";
import "./navbar.css";
import { useRef, useState } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

function Navbar() {
  const resultRef = useRef(null);
  const titleRef = useRef(null);

  const navigator = useNavigate();

  const [searchText, setSearchText] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);

  //custom hook
  const { movieList } = useMovieList(!searchText ? "Avengers" : searchText);

  function handleAutoCompleteClick(e, id) {
    navigator(`/movie/${id}`);
  }
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
              <div
                onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
                key={movie.imdbID}
                className="autocomplete-result"
              >
                {movie.Title}
              </div>
            ))}
        </div>
      </div>
      <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <FontAwesomeIcon
          className="theme-icon"
          icon={theme === "dark" ? faSun : faMoon}
        />
      </div>
    </div>
  );
}

export default Navbar;

import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ Title, Poster, Year, Type, imdbID }) {
  const navigator = useNavigate();
  function handleMovieClick(id) {
    // console.log("Clicked");
    navigator(`/movie/${id}`);
  }
  return (
    Poster !== "N/A" && (
      <div onClick={() => handleMovieClick(imdbID)} className="movie-wrapper">
        <div className="movie-poster">
          <img src={Poster} alt="Not Found" />
        </div>
        <div className="movie-title">
          <span>{Title}</span>
        </div>
        <div className="movie-year">
          <span>Realeased in:{Year}</span>
        </div>
        <div className="movie-type">
          <span>Type:{Type}</span>
        </div>
      </div>
    )
  );
}

export default MovieCard;

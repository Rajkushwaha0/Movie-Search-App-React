import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieByID } from "../../apis/omdb";
import MovieCard from "../../component/MovieCard/MovieCard";
import { Rating } from "@smastrom/react-rating";

// CSS imports
import "./MovieDetails.css";
import "@smastrom/react-rating/style.css";

function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  async function downloadMovie() {
    setLoading(true);
    const response = await axios.get(searchMovieByID(id));
    setLoading(false);
    setMovie(response.data);
  }

  useEffect(() => {
    downloadMovie();
    // const random = Math.random();
    // if (random > 0.5) {
    //   throw "error";
    // }
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loading-div">Loading...</div>
      ) : (
        <div className="movie-details-wrapper">
          {movie && (
            <MovieCard
              Title={movie.Title}
              Year={movie.Year}
              Type={movie.Type}
              Poster={movie.Poster}
              imdbID={movie.imdbID}
            />
          )}
          {movie && (
            <div className="movie-details">
              <div>Plot: {movie.Plot}</div>
              <div>Actors: {movie.Actors}</div>
              <div>
                Genre:{" "}
                {movie.Genre.split(",").map((genre) => {
                  return (
                    <span className="genre" key={genre}>
                      {genre}
                    </span>
                  );
                })}
              </div>

              <div>
                <Rating items={10} value={Math.floor(movie.imdbRating)} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MovieDetails;

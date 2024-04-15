//components
import MovieCard from "../../component/MovieCard/MovieCard";
import "./Home.css";
import useMovieList from "../../hooks/useMovieList";

function Home() {
  const { movieList } = useMovieList(
    "Avengers",
    "spider man",
    "Prem",
    "Batman",
    "mirzapur",
    "dil bechara"
  );
  return (
    <>
      <div className="movie-card-wrapper">
        {movieList.length > 0 &&
          movieList.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)}
      </div>
    </>
  );
}

export default Home;

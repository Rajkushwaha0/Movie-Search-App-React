import { useEffect, useState } from "react";
import { searchMovie } from "../../apis/omdb";
import axios from "axios";
//components
import MovieCard from "../../component/MovieCard/MovieCard";
import "./Home.css";

function Home() {
  const [movieList, setMovieList] = useState([]);
  async function downloadMovie(...args) {
    const urls = args.map((movie) => searchMovie(movie));
    const response = await axios.all(urls.map((url) => axios.get(url)));
    const movies = response.map((movieResponse) => movieResponse.data.Search);
    setMovieList([].concat(...movies));
  }
  useEffect(() => {
    downloadMovie("Avengers", "Harry", "Mirzapur");
  }, []);
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

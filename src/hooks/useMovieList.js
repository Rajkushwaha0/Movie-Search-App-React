import { useState, useEffect } from "react";
import { searchMovie } from "../apis/omdb";
import axios from "axios";

function useMovieList(...args) {
  const [movieList, setMovieList] = useState([]);
  async function downloadMovie(...args) {
    const urls = args.map((movie) => searchMovie(movie));
    const response = await axios.all(urls.map((url) => axios.get(url)));
    const movies = response.map((movieResponse) => movieResponse.data.Search);
    setMovieList([].concat(...movies));
    console.log(movieList);
  }
  useEffect(() => {
    downloadMovie(...args);
  }, []);

  return { movieList };
}

export default useMovieList;

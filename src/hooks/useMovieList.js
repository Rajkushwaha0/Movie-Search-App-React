import { useState, useEffect } from "react";
import { searchMovie } from "../apis/omdb";
import axios from "axios";

function useMovieList(...args) {
  const [movieList, setMovieList] = useState([]);
  async function downloadMovie(...args) {
    try {
      const urls = args.map((movie) => searchMovie(movie));
      const response = await axios.all(urls.map((url) => axios.get(url)));
      if (response[0].data.Error) {
        setMovieList([]);
      } else {
        const movies = response.map(
          (movieResponse) => movieResponse.data.Search
        );
        setMovieList([].concat(...movies));
      }
    } catch (err) {
      console.log("Api failed!");
    }
  }
  useEffect(() => {
    downloadMovie(...args);
  }, [...args]);

  return { movieList };
}

export default useMovieList;

export function searchMovie(term) {
  return `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&s=${term}`;
}

export function searchMovieByID(imdbID) {
  return `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&i=${imdbID}`;
}

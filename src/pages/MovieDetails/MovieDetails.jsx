import { Link, useParams } from "react-router-dom";
import { searchMovieByID } from "../../apis/omdb";
import MovieCard from "../../component/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  async function downloadMovie() {
    setLoading(true);
    const response = await axios.get(searchMovieByID(id));
    setMovie(response.data);
    setLoading(false);
  }

  useEffect(() => {
    downloadMovie();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="details-loading">Loading</div>
      ) : (
        movie && <MovieCard {...movie} />
      )}
      <Link to={"/"}>Go Back</Link>
    </>
  );
}

export default MovieDetails;

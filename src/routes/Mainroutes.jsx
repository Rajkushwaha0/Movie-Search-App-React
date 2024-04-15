import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import ErrorPage from "../pages/ErrorPage";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Mainroutes;

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} className="block">
    <img src={movie.poster} alt={movie.title} className="rounded-md" />
    <h3 className="text-white font-semibold">{movie.title}</h3>
    <p className="text-gray-400">{movie.year}</p>
  </Link>
);

export default MovieCard;


import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full rounded-t-lg" />
      <h2 className="font-bold mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
      <Link to={`/details/${movie.imdbID}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default MovieCard;

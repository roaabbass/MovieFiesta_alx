// src/components/MovieDetails.jsx
const MovieDetails = ({ movie }) => {
  return (
    <div className="p-4 bg-primary min-h-screen text-white">
      <img src={movie.Poster} alt={movie.Title} className="w-full rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <div className="mt-4">
        <strong>Genre:</strong> {movie.Genre}
      </div>
      <div className="mt-2">
        <strong>Released:</strong> {movie.Released}
      </div>
      <div className="mt-2">
        <strong>Director:</strong> {movie.Director}
      </div>
      <div className="mt-2">
        <strong>Actors:</strong> {movie.Actors}
      </div>
    </div>
  );
};

export default MovieDetails;

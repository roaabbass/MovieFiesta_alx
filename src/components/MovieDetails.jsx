const MovieDetails = ({ movie }) => (
    <div className="p-6 text-white">
      <img src={movie.Poster} alt={movie.Title} className="w-1/3 rounded-lg" />
      <h1 className="text-4xl font-bold mt-4">{movie.Title}</h1>
      <p className="mt-2">{movie.Plot}</p>
      <p className="mt-1"><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
    </div>
  );
  
  export default MovieDetails;
  
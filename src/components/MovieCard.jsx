const MovieCard = ({ movie, onClick }) => (
    <div className="p-2 w-60 bg-gray-700 text-white rounded-md" onClick={() => onClick(movie)}>
      <img src={movie.Poster} alt={movie.Title} className="rounded-md" />
      <h3 className="mt-2 font-semibold">{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
  
  export default MovieCard;
  
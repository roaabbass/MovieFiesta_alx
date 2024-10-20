import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=4fdd443f`)
      .then((response) => setMovie(response.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

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
    </div>
  );
};

export default MovieDetailPage;

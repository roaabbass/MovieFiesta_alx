import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=star&apikey=your_api_key")
      .then((response) => setMovies(response.data.Search));
  }, []);

  return (
    <div className="p-4 bg-primary min-h-screen">
      <h2 className="text-white text-2xl font-bold">Trending</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

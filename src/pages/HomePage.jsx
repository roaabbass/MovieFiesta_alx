import { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('Avengers').then(setMovies);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white">Trending Movies</h2>
      <div className="flex overflow-x-auto space-x-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// src/pages/SearchPage.jsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="container mx-auto p-4">
      <SearchBar setMovies={setMovies} setError={setError} />
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

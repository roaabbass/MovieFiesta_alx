import { useState } from 'react';
import { fetchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (query) => {
    fetchMovies(query).then(setMovies);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-2 gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

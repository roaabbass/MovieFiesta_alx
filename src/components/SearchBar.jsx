// src/components/SearchBar.jsx
import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setMovies, setError }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=4fdd443f` 
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search); // Set the movies state with the search results
        setError(""); // Clear any previous error
      } else {
        setError("No movies found. Try a different search.");
        setMovies([]); // Clear the movie list if no results
      }
    } catch (error) {
      setError("An error occurred while fetching movies.");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        placeholder="Searching for movies..."
        className="w-full max-w-md p-2 rounded bg-gray-700 text-white"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 rounded text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

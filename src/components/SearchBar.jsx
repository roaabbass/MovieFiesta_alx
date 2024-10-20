import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex items-center p-4 bg-secondary rounded-md">
      <input
        type="text"
        className="flex-grow p-2 rounded-l-md"
        placeholder="Search for movies, TV series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-primary text-white px-4 rounded-r-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

const SearchBar = ({ onSearch }) => (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full p-2 rounded-md bg-gray-800 text-white"
        onKeyDown={(e) => e.key === 'Enter' && onSearch(e.target.value)}
      />
    </div>
  );
  
  export default SearchBar;
  
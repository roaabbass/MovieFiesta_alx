const Navbar = () => (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">MovieFiesta</h1>
      <div>
        <a href="/" className="px-4">Home</a>
        <a href="/search" className="px-4">Search</a>
      </div>
    </nav>
  );
  
  export default Navbar;
  
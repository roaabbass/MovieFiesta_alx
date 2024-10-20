import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-primary text-white">
    <h1 className="text-2xl font-bold">MovieFiesta</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-secondary">Home</Link>
      <Link to="/search" className="hover:text-secondary">Search</Link>
    </div>
  </nav>
);

export default Navbar;

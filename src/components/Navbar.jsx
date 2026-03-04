import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ favorites }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          {" "}
          <Link
            to="/"
            className="px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            🎬 MyMovies
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Link
            to="/"
            className="px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="px-3 py-1 rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
          >
            Favorites
            <span className="bg-red-600 text-white rounded-full px-2 text-sm">
              {favorites.length}
            </span>
          </Link>
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 mt-2 rounded shadow-md flex flex-col gap-2 p-4">
          <Link
            to="/"
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            Favorites
            <span className="bg-red-600 text-white rounded-full px-2 text-sm">
              {favorites.length}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

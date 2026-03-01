import { Link } from "react-router-dom";

function Navbar({ favorites }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MyMovies</div>

      <div className="flex gap-4">
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
    </nav>
  );
}

export default Navbar;

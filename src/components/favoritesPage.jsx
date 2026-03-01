import MovieCard from "./MovieCard";

function Favorites({ favorites, setFavorites }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <MovieCard
          shows={favorites.map((show) => ({ show }))}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </div>
  );
}

export default Favorites;

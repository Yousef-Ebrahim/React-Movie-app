import React, { useState } from "react";

function MovieCard({ shows, favorites, setFavorites }) {
  const [selectedShow, setSelectedShow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function toggleFavorite(show) {
    const exists = favorites.some((fav) => fav.id === show.id);

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== show.id));
    } else {
      setFavorites([...favorites, show]);
    }
  }

  const openModal = (show) => {
    setSelectedShow(show);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedShow(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map((item) => {
          const isFavorite = favorites.some((fav) => fav.id === item.show.id);

          return (
            <div
              className="relative bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden"
              key={item.show.id}
            >
              <figure className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover aspect-w-2 aspect-h-3 transform scale-105 on hover
transition duration-300 
"
                  src={
                    item.show.image?.medium ||
                    "https://via.placeholder.com/210x295?text=No+Image"
                  }
                  alt={item.show.name}
                />
              </figure>
              <button
                onClick={() => toggleFavorite(item.show)}
                className=" p-1 rounded-full shadow-md mt-2 text-2xl absolute top-2 right-2 hover:bg-white/30"
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>
              <div className="card-body p-4">
                <h2
                  className="card-title text-lg
                 text-blue-500 font-bold"
                >
                  {item.show.name}
                </h2>
                <p className="text-sm mt-2 line-clamp-3">
                  {item.show.summary
                    ? item.show.summary.replace(/<[^>]+>/g, "")
                    : "No description available."}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.show.genres.join(", ")}
                </p>
                <div className="card-actions justify-between mt-4">
                  <button
                    className="btn btn-primary btn-sm w-full transition-all hover:scale-105"
                    onClick={() => openModal(item.show)}
                  >
                    👁️ More Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isOpen && selectedShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-500 rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="text-2xl absolute top-3 right-3 text-gray-950 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedShow.name}</h2>
            <img
              src={
                selectedShow.image?.medium ||
                "https://via.placeholder.com/210x295?text=No+Image"
              }
              alt={selectedShow.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              {selectedShow.summary
                ? selectedShow.summary.replace(/<[^>]+>/g, "")
                : "No description available."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default MovieCard;

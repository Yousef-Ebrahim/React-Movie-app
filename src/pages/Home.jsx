import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchForm from "../components/SearchForm";
import api from "../services/api";
export default function Home({ favorites, setFavorites }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // debouncing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 900);
    return () => clearTimeout(timeout);
  }, [query]);

  //fetching
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setShows([]);
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/search/shows?q=${debouncedQuery}`);
        setShows(res.data);
      } catch (err) {
        console.log(err);
        setError("sorry failed ....");
        setShows([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [debouncedQuery]);
  console.log(JSON.stringify(shows, null, 2));

  

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <SearchForm query={query} setQuery={setQuery} />

      {shows.length === 0 && debouncedQuery && (
        <p className="text-center text-xl mt-8">No shows found 😢</p>
      )}

      <div>
        <MovieCard
          shows={shows}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </div>
  );
}

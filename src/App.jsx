import AppRouter from "./routes/AppRouter";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);
  // localStorge
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <AppRouter favorites={favorites} setFavorites={setFavorites} />
    </>
  );
}

export default App;

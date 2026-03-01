import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../components/favoritesPage";
import Navbar from "../components/Navbar";

export default function AppRouter({ favorites, setFavorites }) {
  return (
    <BrowserRouter>
      <Navbar favorites={favorites} />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

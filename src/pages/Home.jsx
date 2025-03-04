import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Detect navigation
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]); // Store popular movies
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Detects route changes
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search was performed

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setPopularMovies(popularMovies);
        setMovies(popularMovies);
        setSearchPerformed(false); // Reset when loading trending movies
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Reset to popular movies when navigating to Home
  useEffect(() => {
    if (location.pathname === "/") {
      setMovies(popularMovies);
      setSearchQuery(""); // Clear search input
    }
  }, [location.key]); // Runs when the path changes

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!searchQuery.trim()) {
      setMovies(popularMovies); // Restore popular movies when search is empty
      return;
    }

    setLoading(true);
    setSearchPerformed(true); // Mark that a search has been performed

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    // setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value.trim() === "") {
              setMovies(popularMovies); // Restore when input is cleared}
              setSearchPerformed(false); // Reset search state when input is cleared
            }
          }}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Dynamic Title Based on Search State */}
      <h2 className="movies-heading">
        {searchPerformed
          ? `Search Results for "${searchQuery}"`
          : "🔥 Trending Movies"}
      </h2>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

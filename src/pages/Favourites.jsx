import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  return (
    <div className="favourites">
      {favourites.length > 0 ? (
        <div>
          <h2>Your Favourites</h2>
          <div className="movies-grid">
            {favourites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="favourites-empty">
          <h2>No Favourite Movies Yet</h2>
          <p>
            Start adding movies to your favourite and they will appear here!
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites;

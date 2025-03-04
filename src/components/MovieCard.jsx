import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) {
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-meta">
          <span className="rating">
            <span className="star-icon">★</span> {movie.vote_average?.toFixed(1) || "N/A"}
          </span>
          <span>{movie.release_date?.split("-")[0]}</span>
          {/* <span>{movie.name ? "TV Show" : "Movie"}</span> */}
        </div>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;

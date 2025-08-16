import { useMovieContext } from "../context/MovieContext";
import "./MovieCard.css";

export function MovieCard({ movie, isFocused = false, onClick }) {
  const { incrementClickCount, getClickCount } = useMovieContext();
  const clickCount = getClickCount(movie.id);

  const handleClick = (e) => {
    e.preventDefault();
    incrementClickCount(movie.id);
    if (onClick) {
      onClick(movie);
    }
  };

  return (
    <div 
      className={`movie-card ${isFocused ? 'focused' : ''}`}
      onClick={handleClick}
      title={`Ver detalhes de ${movie.title}`}
    >
      <div className="movie-card-image-container">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-card-image"
        />
        {clickCount > 0 && (
          <div className="click-counter">
            <span>👁️ {clickCount}</span>
          </div>
        )}
        <div className="movie-card-overlay">
          <div className="movie-card-info">
            <h3>{movie.title}</h3>
            <p className="movie-rating">⭐ {movie.vote_average?.toFixed(1) || 'N/A'}</p>
            <p className="movie-year">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

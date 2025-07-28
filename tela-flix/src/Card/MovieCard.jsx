
import "./MovieCard.css";

export function MovieCard({ title, posterUrl }) {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

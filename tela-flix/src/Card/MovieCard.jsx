import "./MovieCard.css";

export function MovieCard({ title, posterUrl, movieUrl }) {
  return (
    <a
      href={movieUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="movie-card"
      title={`Ver detalhes de ${title}`}
      
    >
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
    </a>
  );
}

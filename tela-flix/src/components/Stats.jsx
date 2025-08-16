import { useMovieContext } from "../context/MovieContext";
import "./Stats.css";

export function Stats() {
  const { clickCounts } = useMovieContext();

  // Ordenar filmes por número de cliques
  const sortedMovies = Object.entries(clickCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5); // Top 5

  const totalClicks = Object.values(clickCounts).reduce((sum, count) => sum + count, 0);

  if (totalClicks === 0) {
    return (
      <div className="stats-container">
        <h3>Estatísticas</h3>
        <p className="no-stats">Nenhum filme foi visualizado ainda.</p>
      </div>
    );
  }

  return (
    <div className="stats-container">
      <h3>Estatísticas de Visualização</h3>
      <div className="stats-summary">
        <div className="stat-item">
          <span className="stat-number">{totalClicks}</span>
          <span className="stat-label">Total de visualizações</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{Object.keys(clickCounts).length}</span>
          <span className="stat-label">Filmes únicos</span>
        </div>
      </div>
      
      {sortedMovies.length > 0 && (
        <div className="top-movies">
          <h4>Filmes Mais Visualizados</h4>
          <div className="top-movies-list">
            {sortedMovies.map(([movieId, clicks], index) => (
              <div key={movieId} className="top-movie-item">
                <span className="rank">#{index + 1}</span>
                <span className="clicks">👁️ {clicks}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

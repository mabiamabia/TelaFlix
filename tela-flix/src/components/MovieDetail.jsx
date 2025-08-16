import { useEffect, useState } from 'react';
import { API_CONFIG } from '../config/api';
import './MovieDetail.css';

export function MovieDetail({ movie, onClose }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movie) return;

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_CONFIG.BASE_URL}/movie/${movie.id}?api_key=${API_CONFIG.API_KEY}&language=pt-BR&append_to_response=credits,videos,similar`
        );
        
        if (!response.ok) {
          throw new Error('Erro ao buscar detalhes do filme');
        }
        
        const data = await response.json();
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movie]);

  if (!movie) return null;

  if (loading) {
    return (
      <div className="movie-detail-overlay">
        <div className="movie-detail-loading">
          <div className="spinner"></div>
          <p>Carregando detalhes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-detail-overlay">
        <div className="movie-detail-error">
          <p>Erro: {error}</p>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-detail-overlay" onClick={onClose}>
      <div className="movie-detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="movie-detail-header">
          <img 
            src={`${API_CONFIG.IMAGE_BASE_URL}${movie.poster_path}`} 
            alt={movie.title}
            className="movie-detail-poster"
          />
          <div className="movie-detail-info">
            <h1>{movie.title}</h1>
            <p className="movie-detail-overview">{movie.overview}</p>
            
            {movieDetails && (
              <div className="movie-detail-meta">
                <p><strong>Data de lançamento:</strong> {movieDetails.release_date}</p>
                <p><strong>Duração:</strong> {movieDetails.runtime} minutos</p>
                <p><strong>Avaliação:</strong> ⭐ {movieDetails.vote_average}/10</p>
                <p><strong>Gêneros:</strong> {movieDetails.genres?.map(g => g.name).join(', ')}</p>
              </div>
            )}
          </div>
        </div>

        {movieDetails && movieDetails.credits?.cast && (
          <div className="movie-detail-cast">
            <h3>Elenco Principal</h3>
            <div className="cast-list">
              {movieDetails.credits.cast.slice(0, 5).map(actor => (
                <div key={actor.id} className="cast-member">
                  <img 
                    src={actor.profile_path ? `${API_CONFIG.IMAGE_BASE_URL}${actor.profile_path}` : '/default-avatar.png'} 
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                  <small>{actor.character}</small>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="movie-detail-actions">
          <a 
            href={`${API_CONFIG.TMDB_MOVIE_URL}/${movie.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-button primary"
          >
            Ver no TMDB
          </a>
          <button className="action-button secondary" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

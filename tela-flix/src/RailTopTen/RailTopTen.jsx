import { useEffect, useState } from "react";
import { MovieCard } from "../Card/MovieCard.jsx";
import { fetchMovies } from "../config/api.js";
import { useMovieContext } from "../context/MovieContext.jsx";
import "../Rail/RailMovie.css";

export function RailTopTen({ endpoint = "/movie/now_playing", title, railIndex }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { focusedRail, focusedMovie, setFocusedRail, setFocusedMovie, setSelectedMovie } = useMovieContext();

  useEffect(() => {
    async function fetchTopTenMovies() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMovies(endpoint, 1);
        setMovies(data.slice(0, 8));
      } catch (error) {
        console.error("Erro ao buscar top 10 filmes:", error);
        setError("Erro ao carregar filmes");
      } finally {
        setLoading(false);
      }
    }

    fetchTopTenMovies();
  }, [endpoint]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleKeyDown = (e, movieIndex) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (movieIndex < movies.length - 1) {
          setFocusedMovie(movieIndex + 1);
        } else if (railIndex < 8) {
          setFocusedRail(railIndex + 1);
          setFocusedMovie(0);
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (movieIndex > 0) {
          setFocusedMovie(movieIndex - 1);
        } else if (railIndex > 0) {
          setFocusedRail(railIndex - 1);
          setFocusedMovie(7);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (railIndex < 8) {
          setFocusedRail(railIndex + 1);
          setFocusedMovie(movieIndex);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (railIndex > 0) {
          setFocusedRail(railIndex - 1);
          setFocusedMovie(movieIndex);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleMovieClick(movies[movieIndex]);
        break;
    }
  };

  if (loading) {
    return (
      <div className="rail-movie">
        <h2 className="rail-title">{title}</h2>
        <div className="rail-loading">
          <div className="spinner"></div>
          <p>Carregando filmes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rail-movie">
        <h2 className="rail-title">{title}</h2>
        <div className="rail-error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rail-movie">
      <h2 className="rail-title">{title}</h2>
      <div className="rail-content">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => {
              setFocusedRail(railIndex);
              setFocusedMovie(index);
            }}
          >
            <MovieCard
              movie={movie}
              isFocused={focusedRail === railIndex && focusedMovie === index}
              onClick={handleMovieClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

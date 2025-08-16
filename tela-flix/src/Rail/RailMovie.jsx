import { useEffect, useState } from "react";
import { MovieCard } from "../Card/MovieCard.jsx";
import { fetchMovies } from "../config/api.js";
import { useMovieContext } from "../context/MovieContext.jsx";
import "./RailMovie.css";

export function RailMovie({ endpoint = "/movie/popular", title, railIndex }) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { focusedRail, focusedMovie, setFocusedRail, setFocusedMovie, setSelectedMovie } = useMovieContext();

  useEffect(() => {
    async function buscarFilmes() {
      try {
        setLoading(true);
        setError(null);
        const dados = await fetchMovies(endpoint, 1);
        setFilmes(dados.slice(0, 8));
      } catch (erro) {
        console.error("Erro ao buscar filmes:", erro);
        setError("Erro ao carregar filmes");
      } finally {
        setLoading(false);
      }
    }

    buscarFilmes();
  }, [endpoint]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleKeyDown = (e, movieIndex) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (movieIndex < filmes.length - 1) {
          setFocusedMovie(movieIndex + 1);
        } else if (railIndex < 8) { // Assumindo que temos 9 rails (0-8)
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
          setFocusedMovie(7); // Último filme do rail anterior
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
        handleMovieClick(filmes[movieIndex]);
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
        {filmes.map((filme, index) => (
          <div
            key={filme.id}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => {
              setFocusedRail(railIndex);
              setFocusedMovie(index);
            }}
          >
            <MovieCard
              movie={filme}
              isFocused={focusedRail === railIndex && focusedMovie === index}
              onClick={handleMovieClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

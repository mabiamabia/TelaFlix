import { useEffect, useState } from "react";
import { MovieCard } from "../Card/MovieCard.jsx";
import "../Rail/RailMovie.css";

const API_KEY = "b5d2a951efdcc9e9e04a3c50c906d191";
const BASE_URL = "https://api.themoviedb.org/3";


const ENDPOINT = "/movie/now_playing";

export function RailTopTen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopTenMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 8));
      } catch (error) {
        console.error("Erro ao buscar top 10 filmes:", error);
      }
    }

    fetchTopTenMovies();
  }, []);

  return (
    <div className="rail-movie">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

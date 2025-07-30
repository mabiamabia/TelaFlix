import { useEffect, useState } from "react";
import { MovieCard } from "../Card/MovieCard.jsx";
import "./RailMovie.css";

const API_KEY = "b5d2a951efdcc9e9e04a3c50c906d191";
const BASE_URL = "https://api.themoviedb.org/3";

export function RailMovie({ endpoint = "/movie/popular", title  }) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch(
          `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const dados = await resposta.json();
        setFilmes(dados.results.slice(0, 8));
      } catch (erro) {
        console.error("Erro ao buscar filmes:", erro);
      }
    }

    buscarFilmes();
  }, [endpoint]);

  return (
    <div className="rail-movie">
      <h1 className="rail-title">{title}</h1> 
      {filmes.map((filme) => (
        <MovieCard
          key={filme.id}
          title={filme.title}
          posterUrl={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          movieUrl={`https://www.themoviedb.org/movie/${filme.id}`}
        />
      ))}
    </div>
  );
}

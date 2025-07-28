
import { MovieCard } from "../Card/MovieCard.jsx";
import "./RailMovie.css";

const movies = [
  {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Jurassic Park",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
  },
   {
    title: "Interstellar",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    title: "John Wick",
    posterUrl:" https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"

  },
  {
    title: "KungFu Panda",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg"
  },
  {
    title: "Pantera Negra",
    posterUrl: "https://image.tmdb.org/t/p/w200/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
    title: "Frozen",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg"
  },
];

export function RailMovie() {
  return (
    <div className="rail-movie">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
}

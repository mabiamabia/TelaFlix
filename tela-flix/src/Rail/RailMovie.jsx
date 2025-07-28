
import { MovieCard } from "../Card/MovieCard.jsx";
import "./RailMovie.css";

const movies = [
  {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
   {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
    {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
   {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
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


import { MovieCard } from "../Card/MovieCard.jsx";
import "../Rail/RailMovie.css";

const otherMovies = [
  {
    title: "The Hunger Games",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
  },
  {
    title: "Avatar",
    posterUrl: "https://image.tmdb.org/t/p/w200/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" // Avatar (2009)
  },
  {
    title: "Titanic",
    posterUrl: "https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    title: "Pantera Negra",
    posterUrl: "https://image.tmdb.org/t/p/w200/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
    title: "Frozen",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg"
  },
{
    title: "Jurassic Park",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
  },
   {
    title: "Interstellar",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
];

export function RailTopTen() {
  return (
    <div className="rail-movie">
      {otherMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
}

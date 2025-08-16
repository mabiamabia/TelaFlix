import { RailMovie } from "./Rail/RailMovie.jsx";
import { RailTopTen } from "./RailTopTen/RailTopTen.jsx";
import { rails } from "./RailConfig/RailConfig.jsx";
import { MovieProvider, useMovieContext } from "./context/MovieContext.jsx";
import { MovieDetail } from "./components/MovieDetail.jsx";
import { Stats } from "./components/Stats.jsx";
import "./App.css";

function AppContent() {
  const { selectedMovie, setSelectedMovie } = useMovieContext();

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-title">
          <h1>TelaFlix</h1>
          <p>Descubra os melhores filmes</p>
        </div>
        
        <Stats />
        
        <div className="rails-container">
          {rails.map((rail, index) => (
            <div key={index} className="rail-section">
              {rail.component === "top" ? (
                <RailTopTen 
                  endpoint={rail.endpoint} 
                  title={rail.title}
                  railIndex={index}
                />
              ) : (
                <RailMovie 
                  endpoint={rail.endpoint} 
                  title={rail.title}
                  railIndex={index}
                />
              )}
            </div>
          ))}
        </div>
      </header>

      {selectedMovie && (
        <MovieDetail 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

function App() {
  return (
    <MovieProvider>
      <AppContent />
    </MovieProvider>
  );
}

export default App;

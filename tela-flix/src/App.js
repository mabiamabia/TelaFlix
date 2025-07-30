import { RailMovie } from "./Rail/RailMovie.jsx";
import { RailTopTen } from "./RailTopTen/RailTopTen.jsx";
import { rails } from "./RailConfig/RailConfig.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {rails.map((rail, index) => (
          <div key={index}>
            <h1 className="rail-title">{rail.title}</h1>
            {rail.component === "top" ? (
              <RailTopTen endpoint={rail.endpoint} />
            ) : (
              <RailMovie endpoint={rail.endpoint} />
            )}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;

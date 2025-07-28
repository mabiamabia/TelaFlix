import { RailMovie } from "./Rail/RailMovie.jsx";
import { RailTopTen } from "./RailTopTen/RailTopTen.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tilte">Mais assistidos</h1>
        <RailMovie />
        <h1 className="tilte">Assistir mais tarde</h1>
        <RailTopTen />
        <h1 className="tilte">Preferidos da sua lista</h1>
        <RailMovie />
      </header>
    </div>
  );
}

export default App;

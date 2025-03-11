import Logo from "./Img/pipoca.png";
import './App.css';

// Icones
import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <div className="Logo">
          <img src={Logo}></img>
          <h3>Filmes</h3>
        </div>
        <div className="Buscar">
          <input type="text" placeholder="Digite nome do filme"></input>
          <button><CiSearch/></button>
        </div>
      </div>
    </div>
  );
}

export default App;

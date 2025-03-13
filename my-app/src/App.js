import Logo from "./Img/pipoca.png";
import './App.css';

// Icones
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";


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
        <div className="Redes">
          <a href="#"><FaBell/></a>
          <a href="#" id="login"><FaRegUser/></a>
        </div>
      </div>
      <div className="Principal"></div>
    </div>
  );
}

export default App;

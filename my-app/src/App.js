import Logo from "./Img/pipoca.png";
import './App.css';

// Icones
import { CiSearch } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <a href="#"><FaFacebookF/></a>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaXTwitter/></a>
        </div>
      </div>
      <div className="Principal"></div>
    </div>
  );
}

export default App;

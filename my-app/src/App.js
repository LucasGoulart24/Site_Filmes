import Logo from "./Img/pipoca.png";
import './App.css';

// Icones
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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
        <div className="Icones">
          <a href="#"><FaBell/></a>
          <a href="#"><FaList/></a>
          <a href="#" id="login"><FaRegUser/></a>
        </div>
      </div>
      <div className="Principal">
        <h1>Furiosa: Uma Saga Mad Max</h1>
        <div className="Barra">
          <span>16</span>
          <p>2024</p>
          <p>Ação/Aventura</p>
          <p>2h 28m</p>
        </div>
        <div className="Barra">
          <button><FaCaretRight/> Assistir</button>
          <button><FaHeart/> Adicionar</button>
        </div>
        <p id="texto">Sinopse: A jovem Furiosa cai nas mãos de uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Varrendo Wasteland, eles encontram a Cidadela, presidida pelo Immortan Joe. Enquanto os dois tiranos lutam pelo domínio, Furiosa logo se vê em uma batalha ininterrupta para voltar para casa.</p>
      </div>
    </div>
  );
}

export default App;

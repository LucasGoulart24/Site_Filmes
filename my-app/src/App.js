import Logo from "./Img/pipoca.png";
import Filmes from "./Components/Filmes.js";
import Trailer from "./Components/Trailer.js";
import './App.css';

// Icones
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <div className="Logo">
          <img src={Logo} alt="Logo"></img>
          <h3>Good Movies</h3>
        </div>
        <div className="Buscar">
          <input type="text" placeholder="Digite nome do filme"></input>
          <button><CiSearch/></button>
        </div>
        <div className="Icones">
          <FaBell style={{ fontSize: 20 }}/>
          <FaList style={{ fontSize: 20 }}/>
          <FaRegUser id="login"/>
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
        <p id="texto">Sinopse: A jovem Furiosa cai nas mãos de uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Varrendo Wasteland, eles encontram a Cidadela, presidida pelo Immortan Joe. Enquanto os dois tiranos lutam pelo domínio, Furiosa logo se vê em uma batalha ininterrupta para voltar para casa.</p>
        <div className="Barra">
          <button><AiFillCaretRight style={{ fontSize: 25, marginRight: 5 }}/>Assistir</button>
          <button><FaHeart style={{ fontSize: 20, marginRight: 5 }}/>Adicionar</button>
        </div>
      </div>
      <div className="Titulo">
        <h2>Nossos Filmes</h2>
      </div>
      <Filmes/>
      <Trailer/>
      <div className="Copyright">
        <h4>&copy;2025 - Good Movies</h4>
      </div>
    </div>
  );
}

export default App;
